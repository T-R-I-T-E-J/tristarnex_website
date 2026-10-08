import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = new URL("../", import.meta.url);
const [contactSource, routeSource] = await Promise.all([
  readFile(new URL("lib/contact.ts", root), "utf8"),
  readFile(new URL("app/api/contact/route.ts", root), "utf8"),
]);

function load(source, dependencies = {}, globals = {}) {
  const testModule = { exports: {} };
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(code, {
    module: testModule, exports: testModule.exports,
    require: (name) => dependencies[name] ?? require(name),
    Buffer, Response, AbortSignal, URL,
    console: { error() {} }, ...globals,
  });
  return testModule.exports;
}

const contact = load(contactSource);
const sample = {
  name: "Alex <script>alert(1)</script>", company: "Example MSP",
  email: "alex@example.com", interest: "product", message: "Hello & welcome\nSecond line",
  submissionId: "c5d58a10-611f-4b6c-99be-a1ac169b0302", _gotcha: "",
};
const configured = {
  RESEND_API_KEY: "test-key", CONTACT_EMAIL_FROM: "Website <website@example.org>",
  CONTACT_EMAIL_TO: "info@tristarnex.com",
};
function request(value = sample, headers = {}) {
  return new Request("https://tristarnex.com/api/contact", {
    method: "POST", headers: { "Content-Type": "application/json", Origin: "https://tristarnex.com", ...headers },
    body: typeof value === "string" ? value : JSON.stringify(value),
  });
}
function handler(provider = async () => Response.json({ id: "email-id" }), env = configured) {
  return load(routeSource, { "@/lib/contact": contact }, { fetch: provider, process: { env } }).POST;
}

test("valid inquiry uses fixed recipient, visitor Reply-To, escaped HTML and stable idempotency", async () => {
  const calls = [];
  const post = handler(async (url, options) => {
    calls.push({ url, options });
    return Response.json({ id: "email-id" });
  });
  assert.equal((await post(request())).status, 200);
  assert.equal((await post(request())).status, 200);
  const email = JSON.parse(calls[0].options.body);
  assert.equal(calls[0].url, "https://api.resend.com/emails");
  assert.deepEqual(email.to, ["info@tristarnex.com"]);
  assert.equal(email.reply_to, "alex@example.com");
  assert.ok(email.html.includes("&lt;script&gt;"));
  assert.ok(!email.html.includes("<script>"));
  assert.ok(email.text.includes("Hello & welcome\nSecond line"));
  assert.equal(calls[0].options.headers["Idempotency-Key"], calls[1].options.headers["Idempotency-Key"]);
  await post(request({ ...sample, message: "Changed inquiry" }));
  assert.notEqual(calls[0].options.headers["Idempotency-Key"], calls[2].options.headers["Idempotency-Key"]);
});

test("invalid requests never reach the email provider", async () => {
  const post = handler(async () => { assert.fail("Provider should not be called"); });
  for (const invalid of [
    { ...sample, email: "not-an-email" }, { ...sample, name: "\n" },
    { ...sample, company: "Spoof\r\nBcc: other@example.com" },
    { ...sample, message: "x".repeat(5001) }, { ...sample, interest: "__proto__" },
    { ...sample, interest: {} }, { ...sample, submissionId: "invalid" }, [], null, "{invalid",
  ]) assert.equal((await post(request(invalid))).status, 400);
  assert.equal((await post(request(sample, { Origin: "https://other.example" }))).status, 403);
  assert.equal((await post(request(sample, { "Content-Type": "text/plain" }))).status, 415);
  assert.equal((await post(request({ ...sample, message: "x".repeat(21000) }))).status, 413);
  assert.equal((await post(request(sample, { "Content-Length": "21000" }))).status, 413);
});

test("honeypot submissions succeed without sending", async () => {
  const post = handler(async () => { assert.fail("Provider should not be called"); });
  assert.equal((await post(request({ _gotcha: "spam" }))).status, 200);
});

test("missing credentials fail closed without exposing configuration", async () => {
  const post = handler(async () => { assert.fail("Provider should not be called"); }, {});
  assert.equal((await post(request())).status, 503);
});

test("provider rejection, missing receipt and network failures never report success", async () => {
  for (const provider of [
    async () => Response.json({ message: "private-provider-error" }, { status: 403 }),
    async () => Response.json({}),
    async () => { throw new Error("private-network-error"); },
  ]) {
    const response = await handler(provider)(request());
    assert.equal(response.status, 502);
    assert.ok(!(await response.text()).includes("private-"));
  }
});
