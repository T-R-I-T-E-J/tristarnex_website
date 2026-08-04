import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Cyber Essentials Certification: What It Covers and How to Get It | Tristarnex",
  description: "Cyber Essentials is a UK government-backed certification covering five key security controls. Learn what each control requires, who needs it, and how to prepare.",
  alternates: { canonical: "/blog/cyber-essentials-guide" },
  openGraph: {
    title: "Cyber Essentials Certification: What It Covers and How to Get It",
    description: "A complete guide to Cyber Essentials and Cyber Essentials Plus — the five controls, who needs it, and how to pass first time.",
    url: "https://tristarnex.com/blog/cyber-essentials-guide",
    siteName: "Tristarnex",
    type: "article",
  },
};

export default function CyberEssentialsGuide() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-body">
      <div className="border-b border-brand-border px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-extrabold tracking-widest uppercase">
          Tristar<span className="text-brand-cyan">nex</span>
        </Link>
        <Link href="/blog" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">
          ← All articles
        </Link>
      </div>

      <article className="max-w-[780px] mx-auto px-8 py-20">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Compliance</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Cyber Essentials</span>
          <span className="font-mono text-[11px] text-brand-text-muted/60 ml-2">18 Mar 2026 · 6 min read</span>
        </div>

        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-8">
          Cyber Essentials:<br /><span className="text-brand-cyan">What It Covers and How to Get It</span>
        </h1>

        <div className="flex flex-col gap-6 text-[15px] font-light leading-[1.9] text-brand-text-muted">

          <p className="text-[17px] text-brand-text-muted font-light leading-[1.8] border-l-4 border-brand-cyan pl-5">
            Cyber Essentials is a UK government-backed certification scheme that helps organisations protect against the most common cyber threats. It covers five fundamental security controls and is required for organisations bidding on certain UK government contracts.
          </p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">The five Cyber Essentials controls</h2>

          <div className="flex flex-col gap-4">
            {[
              { num: "01", control: "Firewalls", desc: "Boundary firewalls and internet gateways must be configured to prevent unauthorised access. All unnecessary inbound connections should be blocked by default. This applies to both hardware firewalls and software-based firewalls on individual devices." },
              { num: "02", control: "Secure configuration", desc: "Devices and software must be configured securely. Default passwords must be changed, unnecessary software and services must be removed, and auto-run features that execute code automatically must be disabled." },
              { num: "03", control: "User access control", desc: "User accounts must be limited to the minimum access necessary. Standard user accounts should be used for day-to-day activity, with administrative accounts used only when required and only by authorised personnel." },
              { num: "04", control: "Malware protection", desc: "Protection against malware must be in place on all applicable devices. This can be achieved through anti-malware software, application whitelisting, or sandboxing. Anti-malware signatures must be kept up to date." },
              { num: "05", control: "Patch management", desc: "Software and firmware must be kept up to date. High and critical severity patches must be applied within 14 days of release. Unsupported software that cannot be patched must be removed or isolated." },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <span className="font-mono text-[13px] text-brand-cyan font-bold shrink-0 mt-0.5">{item.num}</span>
                <div>
                  <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-brand-text mb-2">{item.control}</h3>
                  <p className="text-[13px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Cyber Essentials vs Cyber Essentials Plus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tier: "Cyber Essentials", desc: "Self-assessment questionnaire verified by a certification body. You answer questions about your controls and a certifier reviews your responses. Suitable for most SMBs and required for many government contracts.", cost: "~£300–£500" },
              { tier: "Cyber Essentials Plus", desc: "Independent technical verification of the same five controls. An assessor tests your systems directly — scanning for vulnerabilities, testing malware protection, and verifying patch levels. Required for higher-value government contracts.", cost: "~£1,500–£3,000" },
            ].map((item) => (
              <div key={item.tier} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-brand-cyan mb-2">{item.tier}</h3>
                <p className="text-[13px] leading-[1.7] mb-3">{item.desc}</p>
                <span className="font-mono text-[11px] text-brand-text-muted">Typical cost: {item.cost}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Who needs Cyber Essentials?</h2>
          <p>Cyber Essentials certification is mandatory for organisations bidding on UK central government contracts that involve handling personal information or provide certain ICT products and services. It is also a requirement for many NHS, MOD, and local authority suppliers.</p>
          <p>Beyond contractual requirements, Cyber Essentials is a practical baseline for any UK business. The NCSC estimates that the five controls would protect against approximately 80% of common cyberattacks. For small and medium businesses, it represents the minimum viable security posture.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">How to prepare for Cyber Essentials</h2>
          <p>The most common reasons organisations fail their assessment:</p>
          <ul className="flex flex-col gap-2 pl-2">
            {[
              "Unsupported or end-of-life software that cannot be patched (Windows 7, old versions of Office, unpatched network devices)",
              "Overly permissive firewall rules or cloud security group configurations",
              "Default credentials on network devices, printers, or IoT devices",
              "Administrator accounts used for day-to-day activity",
              "Missing or outdated anti-malware on mobile devices and laptops",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[14px]">
                <span className="text-red-400 shrink-0 mt-1">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Tristarnex conducts Cyber Essentials gap assessments before your formal assessment — identifying exactly what needs to be remediated to pass first time.</p>

        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[20px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Preparing for Cyber Essentials?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">We conduct gap assessments against all five controls and help you remediate before your formal assessment — so you pass first time.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-border flex items-center justify-between">
          <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">← All articles</Link>
          <Link href="/security-assessment" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-cyan hover:opacity-80 transition-opacity">Our security assessment service →</Link>
        </div>
      </article>
    </main>
  );
}
