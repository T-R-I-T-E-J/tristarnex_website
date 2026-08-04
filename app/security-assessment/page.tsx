import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Security Assessment Services | Tristarnex",
  description:
    "Comprehensive cybersecurity posture assessment — gaps, priorities, and what fixing them actually costs. No inflated findings. No jargon. Delivered by senior practitioners.",
  alternates: { canonical: "/security-assessment" },
  openGraph: {
    title: "Security Assessment Services | Tristarnex",
    description:
      "A complete, honest picture of your security posture — gaps, priorities, and what fixing them actually costs. No inflated findings, no jargon.",
    url: "https://tristarnex.com/security-assessment",
    siteName: "Tristarnex",
    type: "website",
  },
};

const WHAT_WE_ASSESS = [
  { label: "Attack Surface", desc: "Every internet-facing asset, exposed service, and entry point into your environment — including ones you may not know about." },
  { label: "Identity & Access Controls", desc: "User provisioning, privileged access management, MFA coverage, and Active Directory configuration." },
  { label: "Endpoint Security", desc: "AV/EDR coverage, patching cadence, encryption status, and configuration hardening across workstations and servers." },
  { label: "Cloud Configuration", desc: "M365, Azure, AWS, and Google Workspace settings — storage permissions, admin access, conditional access policies, and logging." },
  { label: "Security Policies & Processes", desc: "Incident response plan, backup and recovery procedures, vendor risk management, and staff security awareness." },
  { label: "Compliance Posture", desc: "Gap analysis against Cyber Essentials, ISO 27001, NIST, or your specific regulatory requirements." },
];

const DELIVERABLES = [
  { title: "Executive Summary", desc: "A one-page overview of your overall security posture, top risks, and recommended priorities — written for leadership, not just IT." },
  { title: "Findings Register", desc: "Every identified gap documented with evidence, business impact, exploitability rating, and recommended remediation." },
  { title: "Prioritised Roadmap", desc: "A sequenced remediation plan ordered by real-world risk, not theoretical severity scores. Includes effort estimates and quick wins." },
  { title: "Budget Guidance", desc: "Honest cost estimates for remediation — so you can plan, prioritise, and make the business case internally." },
];

const FAQS = [
  { q: "What is a cybersecurity assessment?", a: "A cybersecurity assessment is a systematic review of an organisation's security controls, technology, processes, and people to identify gaps, quantify risk, and produce a prioritised remediation roadmap. Unlike a penetration test, an assessment does not involve active exploitation — it evaluates your security posture holistically." },
  { q: "How long does a security assessment take?", a: "A standard assessment for an SMB environment takes 5–10 business days: 2–3 days of data gathering and interviews, followed by analysis and report writing. Larger or more complex environments take longer. We agree scope and timelines before starting." },
  { q: "What is the difference between a security assessment and a penetration test?", a: "A penetration test actively attempts to exploit vulnerabilities to demonstrate impact. A security assessment is broader — it covers your policies, processes, people, and technology to give you a complete picture of your security posture. Many organisations benefit from doing both." },
  { q: "Do you help with Cyber Essentials certification?", a: "Yes. We conduct Cyber Essentials gap assessments and can guide you through the certification process. Cyber Essentials is a UK government-backed scheme covering five key technical controls — we assess your current posture against all five and help you remediate before assessment." },
  { q: "Will the findings be presented to our board?", a: "If required, yes. We can prepare and deliver an executive presentation of findings tailored for a non-technical audience. Board-level understanding of cyber risk is a key part of effective security governance." },
];

export default function SecurityAssessment() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-body">
      <div className="border-b border-brand-border px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-extrabold tracking-widest uppercase">
          Tristar<span className="text-brand-cyan">nex</span>
        </Link>
        <Link href="/" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">
          ← Back to site
        </Link>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-20">
        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-4">
          <span className="block w-6 h-px bg-brand-cyan" />
          Risk & Posture
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-6">
          Security<br /><span className="text-brand-cyan">Assessment</span>
        </h1>
        <p className="text-[17px] font-light leading-[1.8] text-brand-text-muted max-w-[680px] mb-6">
          A security assessment gives you a complete, honest picture of your current cybersecurity posture — what is exposed, what controls are missing, and what fixing them actually costs. No inflated findings designed to justify a large retainer. No jargon that obscures more than it reveals.
        </p>
        <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
          Book a free briefing →
        </a>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">What we assess</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHAT_WE_ASSESS.map((item, i) => (
              <div key={i} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.06em] text-brand-cyan mb-2">{item.label}</h3>
                <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">What you receive</h2>
          <div className="flex flex-col gap-5">
            {DELIVERABLES.map((d, i) => (
              <div key={i} className="flex gap-6 items-start p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <span className="font-mono text-[12px] text-brand-cyan font-bold shrink-0 mt-0.5">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.05em] text-brand-text mb-1">{d.title}</h3>
                  <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">Frequently asked questions</h2>
          <div className="flex flex-col divide-y divide-brand-border">
            {FAQS.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.03em] text-brand-text mb-3">{faq.q}</h3>
                <p className="text-[14px] font-light leading-[1.8] text-brand-text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Know where you stand before an attacker finds out for you</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free 30-minute briefing. We will give you an honest initial view of your biggest risk areas at no cost.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>
      </div>
    </main>
  );
}
