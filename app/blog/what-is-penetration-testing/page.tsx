import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "What Is Penetration Testing? A Complete Guide | Tristarnex",
  description: "Penetration testing is an authorised simulation of a cyberattack against your systems. Learn what it involves, the different types, and what to expect from a professional engagement.",
  alternates: { canonical: "/blog/what-is-penetration-testing" },
  openGraph: {
    title: "What Is Penetration Testing? A Complete Guide",
    description: "A complete guide to penetration testing — what it is, the different types, and what a professional engagement delivers.",
    url: "https://tristarnex.com/blog/what-is-penetration-testing",
    siteName: "Tristarnex",
    type: "article",
  },
};

export default function WhatIsPenTest() {
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
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Penetration Testing</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Offensive Security</span>
          <span className="font-mono text-[11px] text-brand-text-muted/60 ml-2">18 Mar 2026 · 8 min read</span>
        </div>

        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-8">
          What Is Penetration Testing?<br /><span className="text-brand-cyan">A Complete Guide</span>
        </h1>

        <div className="flex flex-col gap-6 text-[15px] font-light leading-[1.9] text-brand-text-muted">

          <p className="text-[17px] text-brand-text-muted font-light leading-[1.8] border-l-4 border-brand-cyan pl-5">
            Penetration testing is an authorised, simulated cyberattack against a computer system, network, or web application, conducted to identify exploitable vulnerabilities before real attackers do.
          </p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">What penetration testing is — and what it is not</h2>
          <p>Penetration testing is often confused with vulnerability scanning. A vulnerability scan is an automated process that identifies known weaknesses from a database of signatures. A penetration test is a human-led exercise in which a certified practitioner actively attempts to exploit those weaknesses — and chain them together — to achieve a real-world objective such as accessing sensitive data, compromising an administrator account, or moving laterally through a network.</p>
          <p>The distinction matters because automated scans miss entire categories of risk: logic flaws, misconfiguration chains, social engineering vectors, and novel attack paths that do not appear in any signature database. A skilled penetration tester thinks like an attacker — because they are one, operating with your permission.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Types of penetration testing</h2>

          <div className="flex flex-col gap-4">
            {[
              { title: "External network penetration test", desc: "Targets internet-facing infrastructure — firewalls, VPNs, web servers, and any service exposed to the public internet. The tester starts with no internal access and attempts to breach the perimeter." },
              { title: "Internal network penetration test", desc: "Simulates an attacker who has already breached the perimeter, or a malicious insider. Tests lateral movement, privilege escalation, and Active Directory security from inside the network." },
              { title: "Web application penetration test", desc: "Focuses on web and mobile applications — testing for OWASP Top 10 vulnerabilities including injection flaws, broken authentication, insecure direct object references, and API security weaknesses." },
              { title: "Social engineering assessment", desc: "Tests your people rather than your technology. Includes phishing email campaigns, vishing (voice phishing) calls, and physical access attempts against your premises." },
              { title: "Red team engagement", desc: "A full-scope adversary simulation targeting your people, processes, and technology simultaneously. Red team engagements test your detection and response capability, not just your defences." },
              { title: "Cloud penetration test", desc: "Assesses the configuration and security of cloud environments — AWS, Azure, M365, Google Workspace — including storage permissions, IAM policies, and service misconfigurations." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-brand-cyan mb-2">{item.title}</h3>
                <p className="text-[13px] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">What happens during a penetration test?</h2>
          <p>A professional penetration test follows a structured methodology. At Tristarnex, our process covers five phases:</p>
          <ol className="flex flex-col gap-3 pl-2">
            {[
              ["Scoping", "We agree the target environment, rules of engagement, timing, and what a successful attack outcome looks like. This protects both parties and ensures the test reflects real-world risk."],
              ["Reconnaissance", "Passive and active information gathering — mapping your attack surface, identifying exposed services, enumerating users, and understanding your technology stack as a real attacker would."],
              ["Exploitation", "Controlled, authorised attempts to exploit identified vulnerabilities. This is where the real work happens — not just running automated tools, but actively reasoning about how to chain weaknesses together."],
              ["Post-exploitation", "Where access is gained, we demonstrate real business impact: accessing sensitive data, moving laterally, escalating privileges, establishing persistence."],
              ["Reporting", "A clear, jargon-free report covering every finding, its real-world risk rating, proof of exploitation, and a prioritised remediation plan your team can act on immediately."],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-brand-cyan font-bold shrink-0">{i + 1}.</span>
                <span><strong className="text-brand-text font-semibold">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">How often should you run a penetration test?</h2>
          <p>Most security frameworks and cyber insurance policies require at least an annual penetration test. In practice, the right frequency depends on your environment: organisations that deploy code frequently, operate in regulated sectors, or have experienced a previous breach should test more often — at minimum after significant changes to infrastructure or applications.</p>
          <p>Cyber Essentials Plus certification requires an annual penetration test as part of its scope. ISO 27001 and SOC 2 engagements typically expect regular testing as evidence of a functioning security programme.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">What does a penetration test cost?</h2>
          <p>Cost depends heavily on scope and methodology. As a general guide:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["Web application test", "£2,000 – £8,000"],
              ["External network test", "£3,000 – £10,000"],
              ["Internal network test", "£4,000 – £15,000"],
              ["Red team engagement", "£15,000 – £50,000+"],
            ].map(([type, range]) => (
              <div key={type} className="p-4 bg-brand-bg-alt border border-brand-border rounded-sm flex justify-between items-center">
                <span className="text-[13px] text-brand-text-muted">{type}</span>
                <span className="font-mono text-[13px] text-brand-cyan font-bold">{range}</span>
              </div>
            ))}
          </div>
          <p>These are indicative ranges. Tristarnex provides fixed-scope quotes after an initial scoping call — no hidden day-rate billing.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">What certifications should a penetration tester hold?</h2>
          <p>Look for testers holding industry-recognised offensive security certifications: OSCP (Offensive Security Certified Professional), CREST CRT (Registered Tester), CEH (Certified Ethical Hacker), or equivalent. CREST accreditation is required for testing UK government and public sector organisations. At Tristarnex, every test is led by a certified senior practitioner — not assigned to a junior analyst.</p>

        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[20px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Ready to book a penetration test?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free 30-minute briefing. We will scope the right assessment for your environment and give you a fixed-price quote.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-border flex items-center justify-between">
          <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">← All articles</Link>
          <Link href="/penetration-testing" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-cyan hover:opacity-80 transition-opacity">Our pen testing service →</Link>
        </div>
      </article>
    </main>
  );
}
