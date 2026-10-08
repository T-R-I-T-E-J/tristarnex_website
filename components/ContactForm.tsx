"use client";
import { useState, type FormEvent } from "react";
export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mjgapzyo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
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
      <input type="hidden" name="_subject" value="ShieldMSP website inquiry" />
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
        Your inquiry is sent through Formspree. Please avoid sharing credentials
        or sensitive incident data. <a href="/privacy">Privacy information</a>
      </p>
      {status === "success" ? (
        <p className="form-message" role="status">
          Your inquiry was received. Thank you for getting in touch.
        </p>
      ) : status === "error" ? (
        <p className="form-message error" role="alert">
          We couldn’t send your inquiry. Please try again or email{" "}
          <a href="mailto:info@tristarnex.com">info@tristarnex.com</a>.
        </p>
      ) : null}
    </form>
  );
}
