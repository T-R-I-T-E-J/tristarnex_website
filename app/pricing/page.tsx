import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Cybersecurity Pricing & Packages | Tristarnex",
  description: "Transparent cybersecurity pricing for penetration testing, threat detection, security assessments, and incident response. Fixed-scope quotes with no hidden day-rate billing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Cybersecurity Pricing & Packages | Tristarnex",
    description: "Transparent pricing for penetration testing, managed detection, security assessments, and incident response retainers.",
    url: "https://tristarnex.com/pricing",
    siteName: "Tristarnex",
    type: "website",
  },
};

const PACKAGES = [
  {
    name: "Security Assessment",
    price: "From £2,500",
    desc: "A complete picture of your current security posture — gaps, priorities, and what fixing them costs.",
    includes: [
      "Attack surface mapping",
      "Identity & access control review",
      "Endpoint and cloud configuration review",
      "Compliance gap analysis (Cyber Essentials, ISO 27001)",
      "Executive summary + prioritised roadmap",
      "Budget guidance for remediation",
    ],
    cta: "Book a briefing",
    href: "/#contact",
    highlight: false,
  },
  {
    name: "Penetration Test",
    price: "From £3,500",
    desc: "Authorised attack simulation against your network, web applications, or full environment.",
    includes: [
      "Scoping call and rules of engagement",
      "External network or web application test",
      "Manual exploitation by certified practitioners",
      "Post-exploitation impact demonstration",
      "Plain-English findings report",
      "Free retest of critical findings within 30 days",
    ],
    cta: "Get a quote",
    href: "/#contact",
    highlight: true,
  },
  {
    name: "IR Retainer",
    price: "From £800/mo",
    desc: "Guaranteed incident response access with agreed response times and dedicated responder.",
    includes: [
      "Dedicated incident responder on retainer",
      "Guaranteed response SLA",
      "Quarterly threat intelligence briefing",
      "Quarterly security review",
      "Pre-negotiated rates for any IR engagement",
      "Priority access during active incidents",
    ],
    cta: "Book a briefing",
    href: "/#contact",
    highlight: false,
  },
];

const ADDONS = [
  { service: "Red Team Engagement", price: "From £15,000", desc: "Full-scope adversary simulation across people, processes, and technology." },
  { service: "Cyber Essentials Gap Assessment", price: "From £750", desc: "Identify and fix everything before your formal Cyber Essentials assessment." },
  { service: "Security Awareness Training", price: "From £1,200", desc: "Phishing simulations and hands-on workshops for your entire team." },
  { service: "Vulnerability Management (annual)", price: "From £3,600/yr", desc: "Continuous CVE tracking, scoring, and remediation guidance across your environment." },
  { service: "Cloud Security Review", price: "From £1,800", desc: "M365, Azure, or AWS configuration review against security best practices." },
  { service: "Tabletop Exercise", price: "From £1,500", desc: "Facilitated incident simulation to test your response plan under realistic pressure." },
];

export default function Pricing() {
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

      <div className="max-w-[1000px] mx-auto px-8 py-20">
        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-4">
          <span className="block w-6 h-px bg-brand-cyan" />
          Transparent pricing
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-4">
          Pricing &<br /><span className="text-brand-cyan">Packages</span>
        </h1>
        <p className="text-[16px] font-light leading-[1.8] text-brand-text-muted mb-4 max-w-[600px]">
          Fixed-scope quotes with no hidden day-rate billing. All prices shown are starting points — exact costs depend on scope, environment size, and complexity. We provide firm quotes after a free scoping call.
        </p>
        <div className="inline-block font-mono text-[11px] tracking-[0.08em] text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-3 py-1.5 rounded-sm mb-16">
          First 10 clients receive a free security assessment — limited availability
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className={`flex flex-col p-7 rounded-sm border ${pkg.highlight ? "border-brand-cyan bg-brand-cyan/3" : "border-brand-border bg-brand-bg-alt"}`}>
              {pkg.highlight && (
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-brand-bg bg-brand-cyan px-2 py-0.5 rounded-sm self-start mb-4">Most popular</div>
              )}
              <h2 className="font-display text-[18px] font-extrabold uppercase tracking-[0.04em] text-brand-text mb-1">{pkg.name}</h2>
              <div className="font-display text-[28px] font-extrabold text-brand-cyan mb-3">{pkg.price}</div>
              <p className="text-[13px] font-light text-brand-text-muted leading-[1.6] mb-5">{pkg.desc}</p>
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] font-light text-brand-text-muted">
                    <span className="text-brand-cyan shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={pkg.href} className={`font-mono text-[12px] font-medium tracking-[0.1em] uppercase py-3 text-center rounded-sm transition-opacity hover:opacity-85 ${pkg.highlight ? "bg-brand-cyan text-brand-bg" : "border border-brand-cyan text-brand-cyan"}`}>
                {pkg.cta} →
              </a>
            </div>
          ))}
        </div>

        <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">Additional services</h2>
        <div className="flex flex-col divide-y divide-brand-border mb-16">
          {ADDONS.map((addon) => (
            <div key={addon.service} className="py-5 flex items-start justify-between gap-8">
              <div>
                <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.04em] text-brand-text mb-1">{addon.service}</h3>
                <p className="text-[13px] font-light text-brand-text-muted">{addon.desc}</p>
              </div>
              <div className="font-display text-[16px] font-extrabold text-brand-cyan shrink-0">{addon.price}</div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Not sure what you need?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free 30-minute briefing. We will assess your current setup, identify your biggest risks, and recommend the right starting point — with no obligation.</p>
          <a href="/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>
      </div>
    </main>
  );
}
