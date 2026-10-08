"use client";
import { useRef, useState, type FormEvent } from "react";
export function ContactForm() {
  const submissionId = useRef<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    submissionId.current ??= crypto.randomUUID();
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...Object.fromEntries(data), submissionId: submissionId.current }),
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setErrorMessage(result.error || "We couldn’t send your inquiry. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      submissionId.current = null;
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Full name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            maxLength={150}
          />
        </label>
        <label>
          Company
          <input
            required
            name="company"
            autoComplete="organization"
            placeholder="Your MSP"
            maxLength={150}
          />
        </label>
      </div>
      <label>
        Work email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          maxLength={254}
        />
      </label>
      <label>
        What would you like to discuss?
        <select name="interest" defaultValue="product">
          <option value="product">ShieldMSP product walkthrough</option>
          <option value="design-partner">Becoming a design partner</option>
          <option value="integrations">Integrations and technical scope</option>
          <option value="general">General inquiry</option>
        </select>
      </label>
      <label>
        Tell us about your environment
        <textarea
          name="message"
          required
          placeholder="Your current tools, customer environments, and what you’d like to improve."
          maxLength={5000}
        />
      </label>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />
      <button
        className="button primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending your inquiry…" : "Send inquiry"}
      </button>
      <p className="form-note">
        Please avoid sharing credentials or sensitive incident data.{" "}
        <a href="/privacy">Privacy information</a>
      </p>
      {status === "success" ? (
        <p className="form-message" role="status">
          Your inquiry was received. Thank you for getting in touch.
        </p>
      ) : status === "error" ? (
        <p className="form-message error" role="alert">
          {errorMessage || "We couldn’t confirm your inquiry was sent. Please try again."}{" "}
          You can also email{" "}
          <a href="mailto:info@tristarnex.com">info@tristarnex.com</a>.
        </p>
      ) : null}
    </form>
  );
}
