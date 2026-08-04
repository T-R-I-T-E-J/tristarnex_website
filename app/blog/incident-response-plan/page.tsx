import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Incident Response Plan: What Every Business Needs | Tristarnex",
  description: "An incident response plan tells your team exactly what to do when a cyberattack occurs. Learn what to include and how to build one that actually works under pressure.",
  alternates: { canonical: "/blog/incident-response-plan" },
  openGraph: {
    title: "Incident Response Plan: What Every Business Needs",
    description: "A practical guide to building an incident response plan — what to include, how to test it, and the components that matter most.",
    url: "https://tristarnex.com/blog/incident-response-plan",
    siteName: "Tristarnex",
    type: "article",
  },
};

export default function IncidentResponsePlan() {
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
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Incident Response</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Planning</span>
          <span className="font-mono text-[11px] text-brand-text-muted/60 ml-2">18 Mar 2026 · 7 min read</span>
        </div>

        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-8">
          Incident Response Plan:<br /><span className="text-brand-cyan">What Every Business Needs</span>
        </h1>

        <div className="flex flex-col gap-6 text-[15px] font-light leading-[1.9] text-brand-text-muted">

          <p className="text-[17px] text-brand-text-muted font-light leading-[1.8] border-l-4 border-brand-cyan pl-5">
            An incident response plan is a documented set of procedures that tells your organisation exactly what to do when a cyberattack or security breach occurs. Without one, teams improvise under pressure — and improvisation during an incident is how small breaches become catastrophic ones.
          </p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Why most incident response plans fail</h2>
          <p>Most organisations that have an incident response plan have one that does not work. Common failures: the plan was written by IT without input from legal, HR, or communications; it was never tested; contact numbers are out of date; it assumes systems are available that may themselves be compromised; and it does not account for out-of-hours incidents.</p>
          <p>A plan that has never been exercised is not a plan — it is a document. An incident is not the time to discover that your IR contact list has three wrong phone numbers and your backup procedure requires a system that is encrypted.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">The six phases of incident response</h2>
          <div className="flex flex-col gap-4">
            {[
              { phase: "Preparation", desc: "Building the capabilities, processes, and tools needed to respond before an incident occurs. Includes writing the plan, defining roles, establishing out-of-band communication channels, and ensuring backups are tested." },
              { phase: "Identification", desc: "Detecting that an incident has occurred and determining its scope. What systems are affected? Is the attack ongoing? What type of incident is it — ransomware, data breach, insider threat, DDoS?" },
              { phase: "Containment", desc: "Stopping the attack from spreading. Short-term containment (isolating affected systems) and long-term containment (patching the vulnerability, changing credentials) both need to be planned in advance." },
              { phase: "Eradication", desc: "Removing the attacker from your environment — malware, backdoors, compromised accounts, persistence mechanisms. This cannot be done safely without first understanding how the attacker got in." },
              { phase: "Recovery", desc: "Restoring systems and operations to normal. This includes validating backups, rebuilding clean systems, restoring data from pre-incident backups, and monitoring for signs of re-infection." },
              { phase: "Lessons learned", desc: "Documenting what happened, what worked, what did not, and what permanently changes. Every incident should improve your security posture — not just restore the status quo." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <span className="font-mono text-[12px] text-brand-cyan font-bold shrink-0 mt-0.5">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-brand-text mb-2">{item.phase}</h3>
                  <p className="text-[13px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">What your incident response plan must include</h2>
          <ul className="flex flex-col gap-2 pl-2">
            {[
              "Roles and responsibilities — who does what, with deputies named for each role",
              "Out-of-band contact list — phone numbers and personal emails for all key personnel, accessible without corporate systems",
              "Escalation matrix — who gets notified at each severity level, including executives, legal, and the board",
              "External IR contact — your incident response provider's emergency contact details",
              "Regulatory notification obligations — ICO 72-hour notification requirement, sector-specific requirements",
              "Playbooks for common scenarios — ransomware, data breach, business email compromise, DDoS",
              "Evidence preservation procedures — what to capture and what not to do",
              "Communication templates — internal, customer-facing, and regulatory",
              "Recovery procedures — backup restoration process, system rebuild process",
              "Plan review schedule — at minimum annual review, plus after any incident",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[14px]">
                <span className="text-brand-cyan shrink-0 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">How to test your incident response plan</h2>
          <p>A plan is only as good as its last test. Three methods, in increasing order of rigour:</p>
          <div className="flex flex-col gap-3">
            {[
              ["Tabletop exercise", "A facilitated discussion where key stakeholders walk through a simulated incident scenario. Identifies gaps in the plan and builds team familiarity without touching live systems. Can be done in half a day."],
              ["Simulation exercise", "A more realistic test where teams respond to a simulated incident with inject points — escalating events that require real decisions. Tests communication, escalation, and decision-making under pressure."],
              ["Red team / purple team exercise", "A live technical exercise where an offensive team simulates a real attack while the defensive team practices detection and response. The most realistic test, but also the most resource-intensive."],
            ].map(([method, desc], i) => (
              <div key={i} className="p-4 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.05em] text-brand-cyan mb-2">{method}</h3>
                <p className="text-[13px] leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[20px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Does your team know what to do when it happens?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Tristarnex can review your existing plan, build one from scratch, or run a tabletop exercise to test it. Book a free briefing to discuss.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-border flex items-center justify-between">
          <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">← All articles</Link>
          <Link href="/incident-response" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-cyan hover:opacity-80 transition-opacity">Our incident response service →</Link>
        </div>
      </article>
    </main>
  );
}
