import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Penetration Testing Services | Tristarnex",
  description:
    "Authorised red team and penetration testing for networks, web applications, and social engineering. Actionable remediation plans delivered by certified practitioners.",
  alternates: { canonical: "/penetration-testing" },
  openGraph: {
    title: "Penetration Testing Services | Tristarnex",
    description:
      "We attack your systems the way a real adversary would — network, web app, social engineering, and full red team assessments with prioritised remediation.",
    url: "https://tristarnex.com/penetration-testing",
    siteName: "Tristarnex",
    type: "website",
  },
};

const WHAT_WE_TEST = [
  { label: "External Network", desc: "Internet-facing infrastructure, firewalls, VPNs, exposed services, and perimeter controls." },
  { label: "Internal Network", desc: "Lateral movement opportunities, privilege escalation paths, and Active Directory misconfigurations." },
  { label: "Web Applications", desc: "OWASP Top 10, authentication flaws, injection vulnerabilities, broken access control, and API security." },
  { label: "Social Engineering", desc: "Phishing campaigns, vishing simulations, and physical access attempts against your people and premises." },
  { label: "Red Team Operations", desc: "Full-scope adversary simulation targeting your people, processes, and technology simultaneously." },
  { label: "Cloud Infrastructure", desc: "AWS, Azure, and M365 misconfigurations, IAM policy weaknesses, and storage exposure." },
];

const PROCESS = [
  { step: "01", title: "Scoping", desc: "We define the target environment, rules of engagement, and success criteria with you before any testing begins." },
  { step: "02", title: "Reconnaissance", desc: "Passive and active information gathering to map your attack surface as a real adversary would — before touching any systems." },
  { step: "03", title: "Exploitation", desc: "Controlled, authorised attempts to exploit identified vulnerabilities using real-world techniques and tooling." },
  { step: "04", title: "Post-Exploitation", desc: "Where access is gained, we demonstrate real business impact: data access, lateral movement, privilege escalation." },
  { step: "05", title: "Reporting", desc: "A clear, jargon-free report with every finding, its real-world risk, and a prioritised remediation plan your team can act on immediately." },
];

const FAQS = [
  { q: "How long does a penetration test take?", a: "Scope determines duration. A web application test typically takes 3–5 days. An internal network assessment runs 5–10 days. A full red team engagement can run 2–4 weeks. We agree timelines during scoping." },
  { q: "Will a penetration test disrupt our operations?", a: "We test during agreed windows and maintain communication throughout. Critical production systems can be tested out-of-hours. Any potentially disruptive activity is flagged to you before it is executed." },
  { q: "What is the difference between a vulnerability scan and a penetration test?", a: "A vulnerability scan is automated — it identifies known weaknesses from a list. A penetration test involves a human tester actively attempting to exploit those weaknesses and chain them together to achieve a business-impact objective. Scans miss logic flaws, misconfiguration chains, and social engineering vectors entirely." },
  { q: "What certifications do your penetration testers hold?", a: "Our offensive security practitioners hold OSCP (Offensive Security Certified Professional), CREST CRT, CEH, and related certifications. Every test is led by a certified senior tester." },
  { q: "Do you provide a retest after remediation?", a: "Yes. We include a targeted retest of all critical and high findings within 30 days of your remediation work. This confirms fixes are effective and gives you confidence before your next audit or client review." },
];

export default function PenetrationTesting() {
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
          Offensive Security
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-6">
          Penetration<br /><span className="text-brand-cyan">Testing</span>
        </h1>
        <p className="text-[17px] font-light leading-[1.8] text-brand-text-muted max-w-[680px] mb-4">
          Penetration testing is an authorised, simulated cyberattack against your infrastructure to find exploitable vulnerabilities before real adversaries do. Tristarnex conducts network, web application, social engineering, and red team assessments — and delivers findings your team can act on immediately.
        </p>
        <a href="https://tristarnex.com/#contact" className="inline-block mt-4 font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
          Book a free briefing →
        </a>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">What we test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHAT_WE_TEST.map((item, i) => (
              <div key={i} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.06em] text-brand-cyan mb-2">{item.label}</h3>
                <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">Our process</h2>
          <div className="flex flex-col gap-6">
            {PROCESS.map((p, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="font-mono text-[13px] text-brand-cyan font-bold shrink-0 mt-0.5">{p.step}</span>
                <div>
                  <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.05em] text-brand-text mb-1">{p.title}</h3>
                  <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted">{p.desc}</p>
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
          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Ready to find out what an attacker would find?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free 30-minute briefing. We will explain exactly what a test would cover for your environment and what you can expect to learn.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>
      </div>
    </main>
  );
}
