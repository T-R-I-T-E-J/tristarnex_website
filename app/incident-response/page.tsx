import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Incident Response Services | Tristarnex",
  description:
    "Guaranteed response time, dedicated responder, full containment and forensics capability on demand. When something goes wrong, speed is everything.",
  alternates: { canonical: "/incident-response" },
  openGraph: {
    title: "Incident Response Services | Tristarnex",
    description:
      "When something goes wrong, speed is everything. Guaranteed response time, dedicated responder, full containment and forensics on demand.",
    url: "https://tristarnex.com/incident-response",
    siteName: "Tristarnex",
    type: "website",
  },
};

const CAPABILITIES = [
  { label: "Immediate Containment", desc: "Isolating affected systems to stop an attack from spreading — within minutes of engagement, not hours. Speed of containment directly determines the scale of damage." },
  { label: "Digital Forensics", desc: "Full forensic investigation to determine the initial access vector, attacker dwell time, lateral movement paths, data accessed or exfiltrated, and persistence mechanisms." },
  { label: "Ransomware Response", desc: "Ransomware-specific playbooks covering encrypted system recovery, ransom negotiation guidance, backup validation, and clean rebuild procedures." },
  { label: "Breach Investigation", desc: "Determining whether data was accessed or exfiltrated — critical for regulatory notification obligations under UK GDPR, and for understanding the full scope of the incident." },
  { label: "Eradication & Recovery", desc: "Removing all attacker presence from your environment, validating that persistence mechanisms are eliminated, and restoring systems to a known-good state." },
  { label: "Post-Incident Report", desc: "A full written report covering root cause, timeline, attacker techniques, remediation actions taken, and permanent improvements to prevent recurrence." },
];

const PROCESS = [
  { step: "01", title: "Immediate triage", desc: "You contact us. A dedicated incident responder is assigned immediately and begins triage. We establish a secure communication channel and assess scope within the first 30 minutes." },
  { step: "02", title: "Containment", desc: "Affected systems are isolated to prevent the attack spreading further. This happens before full investigation — speed of containment is the priority." },
  { step: "03", title: "Investigation", desc: "Forensic analysis of logs, endpoints, network traffic, and identity systems to establish root cause, attacker techniques, and full scope of compromise." },
  { step: "04", title: "Eradication", desc: "All attacker presence — malware, backdoors, persistence mechanisms, compromised accounts — is identified and removed from your environment." },
  { step: "05", title: "Recovery", desc: "Systems are restored from validated backups or rebuilt clean. Operations resume with monitoring in place to detect any recurrence." },
  { step: "06", title: "Post-incident review", desc: "A written report documents everything that happened, why it happened, and what permanently changes to prevent a recurrence. Your security posture improves after every incident." },
];

const FAQS = [
  { q: "What is incident response?", a: "Incident response is the structured process of detecting, containing, eradicating, and recovering from a cybersecurity incident. A well-executed incident response limits damage, reduces recovery time, preserves evidence for investigation, and produces improvements that prevent future incidents." },
  { q: "What should I do if I think we've been breached right now?", a: "Contact us immediately at info@tristarnex.com. Do not power off affected systems (this destroys forensic evidence), do not pay a ransom without advice, and avoid communicating about the incident over potentially compromised channels. A dedicated responder will be in contact within minutes." },
  { q: "How quickly can you respond to an active incident?", a: "We guarantee a response with a dedicated incident responder assigned immediately upon contact. Our detection-to-containment SLA is 94% within 15 minutes for monitored environments. For organisations engaging us reactively during an active incident, initial triage begins within the first 30 minutes of engagement." },
  { q: "Do you offer an IR retainer?", a: "Yes. An incident response retainer gives you guaranteed access to a dedicated responder, agreed response times, and pre-negotiated rates — without the premium that comes with reactive emergency engagements. Retainer clients also receive proactive threat intelligence briefings and a quarterly security review." },
  { q: "Will we need to notify regulators after a breach?", a: "Under UK GDPR, personal data breaches that are likely to result in a risk to individuals must be reported to the ICO within 72 hours of becoming aware. Our forensic investigation establishes whether personal data was accessed or exfiltrated — the information you need to make an informed notification decision. We can help you draft the notification if required." },
  { q: "Can you help recover from a ransomware attack?", a: "Yes. Ransomware response is one of our most common IR engagements. We contain the spread, investigate the initial access vector, validate backups, guide the recovery process, and produce a post-incident report. We also provide ransom negotiation guidance — though in most cases, organisations with good backups do not need to pay." },
];

export default function IncidentResponse() {
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
          Emergency Response
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-6">
          Incident<br /><span className="text-brand-cyan">Response</span>
        </h1>
        <p className="text-[17px] font-light leading-[1.8] text-brand-text-muted max-w-[680px] mb-4">
          Incident response is the structured process of containing, investigating, and recovering from a cybersecurity breach. When something goes wrong, speed is everything — every minute of attacker dwell time increases damage. Tristarnex provides a dedicated responder, guaranteed response time, and full forensics capability on demand.
        </p>
        <div className="mt-6 mb-2 p-4 bg-brand-cyan/5 border border-brand-cyan/30 rounded-sm">
          <p className="font-mono text-[12px] text-brand-cyan tracking-[0.05em]">
            Active incident? Contact us immediately: <a href="mailto:info@tristarnex.com" className="underline">info@tristarnex.com</a>
          </p>
        </div>
        <a href="https://tristarnex.com/#contact" className="inline-block mt-4 font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
          Book a retainer briefing →
        </a>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CAPABILITIES.map((item, i) => (
              <div key={i} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.06em] text-brand-cyan mb-2">{item.label}</h3>
                <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">Our response process</h2>
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
          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Don&apos;t wait until you need us to find us</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">An IR retainer means guaranteed access, agreed response times, and no emergency premium. Book a briefing to understand what a retainer covers.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a retainer briefing →
          </a>
        </div>
      </div>
    </main>
  );
}
