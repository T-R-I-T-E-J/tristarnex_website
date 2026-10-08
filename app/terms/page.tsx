import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
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

export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="TRISTARNEX / LEGAL"
        title="Terms of Service"
        description="Terms governing use of the Tristarnex website and services."
      />
      <section className="detail-section">
        <div className="container legal-content">
          <p className="mono">Existing policy · Last updated March 2026</p>
          {SECTIONS.map((s) => (
            <article key={s.title}>
              <h2>{s.title}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </article>
          ))}
          <p>
            Questions?{" "}
            <a href="mailto:info@tristarnex.com">info@tristarnex.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
