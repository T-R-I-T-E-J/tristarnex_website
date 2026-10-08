import { createHash } from "node:crypto";
import { inquiryEmail, parseInquiry } from "@/lib/contact";

export const runtime = "nodejs";
const maxBodyBytes = 20_000;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Expected a JSON inquiry." }, { status: 415 });
  }
  if (Number(request.headers.get("content-length")) > maxBodyBytes) {
    return Response.json({ error: "Inquiry is too large." }, { status: 413 });
  }
  let value: Record<string, unknown>;
  try {
    // Bound streamed bodies too, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return Response.json({ error: "Inquiry is required." }, { status: 400 });
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { done, value: chunk } = await reader.read();
      if (done) break;
      bytes += chunk.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return Response.json({ error: "Inquiry is too large." }, { status: 413 });
      }
      chunks.push(chunk);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid inquiry");
    value = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid inquiry." }, { status: 400 });
  }
  if (typeof value._gotcha === "string" && value._gotcha.trim()) {
    return Response.json({ success: true });
  }
  const inquiry = parseInquiry(value);
  if (!inquiry || typeof value.submissionId !== "string" || !/^[0-9a-f-]{36}$/i.test(value.submissionId)) {
    return Response.json({ error: "Please check the required fields." }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !from || !to) {
    return Response.json({ error: "Inquiries are temporarily unavailable. Please email info@tristarnex.com." }, { status: 503 });
  }
  // Reuse the same provider key after a timeout; changed form data is a new inquiry.
  const digest = createHash("sha256").update(JSON.stringify(inquiry)).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact/${value.submissionId}/${digest}`,
      },
      body: JSON.stringify({ from, to: [to], reply_to: inquiry.email, ...inquiryEmail(inquiry) }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const result: unknown = await response.json();
    if (!response.ok || !result || typeof result !== "object" || !("id" in result) || typeof result.id !== "string") {
      // Never return provider details, credentials or inquiry contents to the browser.
      console.error("Contact email rejected", { status: response.status });
      return Response.json({ error: "We couldn’t send your inquiry. Please try again or email info@tristarnex.com." }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    console.error("Contact email request failed");
    return Response.json({ error: "We couldn’t confirm your inquiry was sent. Please retry or email info@tristarnex.com." }, { status: 502 });
  }
}
