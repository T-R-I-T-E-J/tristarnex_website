import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Tristarnex",
  description: "Terms and conditions governing the use of Tristarnex services.",
};

const SECTIONS = [
  {
    title: "1. About These Terms",
    body: [
      "These Terms of Service govern your use of the Tristarnex website and any services provided by Tristarnex. By accessing our website or engaging our services, you agree to be bound by these terms.",
      "Tristarnex is a cybersecurity firm operating in the United Kingdom. References to 'we', 'us', or 'Tristarnex' refer to Tristarnex. References to 'you' or 'client' refer to the individual or organisation engaging our services.",
      "These terms are governed by the laws of England and Wales.",
    ],
  },
  {
    title: "2. Our Services",
    body: [
      "Tristarnex provides cybersecurity services including, but not limited to: threat detection and response, penetration testing, security assessments, vulnerability management, security awareness training, and incident response.",
      "The specific scope, deliverables, timelines, and fees for each engagement will be agreed in writing before work begins. No service is considered contracted until a written agreement or statement of work has been signed by both parties.",
      "We reserve the right to decline any engagement at our discretion.",
    ],
  },
  {
    title: "3. Pilot Programme",
    body: [
      "Our pilot programme offers a free initial security assessment to a limited number of qualifying clients. Participation in the pilot programme does not create an obligation on either party to enter into a paid engagement.",
      "The scope and deliverables of any free assessment will be agreed in writing before work begins. Tristarnex retains full discretion over which organisations qualify for the pilot programme.",
    ],
  },
  {
    title: "4. Client Obligations",
    body: [
      "You agree to provide accurate information when engaging our services. Providing false or misleading information may result in termination of the engagement.",
      "You are responsible for ensuring that you have the legal authority to authorise any security testing, scanning, or assessment activities conducted on your systems and infrastructure.",
      "You agree not to use any information, techniques, or tools shared by Tristarnex for unlawful purposes.",
    ],
  },
  {
    title: "5. Confidentiality",
    body: [
      "We treat all client information as strictly confidential. We will not disclose details of your engagement, findings, or infrastructure to any third party without your written consent, except where required by law.",
      "Any reports, findings, or deliverables we produce are for your use only and must not be shared with third parties without our prior written agreement.",
      "We may reference the fact that you are a client for marketing purposes only with your explicit permission.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "Any methodologies, tools, frameworks, or processes used by Tristarnex in delivering services remain the intellectual property of Tristarnex.",
      "Deliverables produced specifically for you — such as reports, assessments, and remediation plans — are licensed to you for your internal use upon full payment of any applicable fees.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "Cybersecurity services reduce risk but cannot guarantee complete protection against all threats. Tristarnex is not liable for any security incident, breach, or loss that occurs despite services being performed in accordance with the agreed scope.",
      "To the maximum extent permitted by law, our total liability to you in connection with any engagement shall not exceed the fees paid by you to us in the three months preceding the event giving rise to the claim.",
      "We are not liable for any indirect, consequential, incidental, or special damages, including loss of profits, loss of data, or business interruption.",
    ],
  },
  {
    title: "8. Payment Terms",
    body: [
      "Payment terms for paid engagements will be specified in the relevant statement of work or invoice. Unless otherwise agreed, invoices are due within 30 days of the invoice date.",
      "We reserve the right to suspend services in the event of overdue payment. Late payments may incur interest in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "Either party may terminate an engagement with 14 days written notice, unless otherwise specified in the statement of work.",
      "We reserve the right to terminate an engagement immediately if you breach these terms, provide false information, or use our services for unlawful purposes.",
      "Upon termination, you remain liable for fees for work completed up to the date of termination.",
    ],
  },
  {
    title: "10. Website Use",
    body: [
      "This website is provided for informational purposes only. We make no warranties regarding the accuracy or completeness of the information on this site.",
      "You may not use this website in any way that is unlawful, harmful, or that could damage our reputation.",
      "We reserve the right to modify or discontinue any part of this website at any time without notice.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. The date at the bottom of this page indicates when they were last revised.",
      "For ongoing engagements, material changes to these terms will be communicated to you directly. Continued use of our services after any changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      "These terms are governed by the laws of England and Wales. Any disputes arising from these terms or from our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-body">
      {/* Nav bar */}
      <div className="border-b border-brand-border px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-extrabold tracking-widest uppercase">
          Tristar<span className="text-brand-cyan">nex</span>
        </Link>
        <Link href="/" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">
          ← Back to site
        </Link>
      </div>

      <div className="max-w-[780px] mx-auto px-8 py-20">
        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-4">
          <span className="block w-6 h-px bg-brand-cyan" />
          Legal
        </div>
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-3">
          Terms of Service
        </h1>
        <p className="font-mono text-[11px] text-brand-text-muted mb-12">
          Last updated: March 2026
        </p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-[17px] font-bold uppercase tracking-tight text-brand-text mb-4">
                {s.title}
              </h2>
              <div className="flex flex-col gap-3">
                {s.body.map((para, j) => (
                  <p key={j} className="text-[14px] font-light leading-[1.9] text-brand-text-muted">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border">
          <p className="font-mono text-[11px] text-brand-text-muted">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:info@tristarnex.com" className="text-brand-cyan hover:underline">
              info@tristarnex.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
