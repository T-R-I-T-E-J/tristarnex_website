import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Threat Detection & Response Services | Tristarnex",
  description:
    "AI-assisted threat detection and response with 24/7 monitoring. Critical threats isolated in under 2 seconds. Enterprise-grade EDR for businesses of every size.",
  alternates: { canonical: "/threat-detection" },
  openGraph: {
    title: "Threat Detection & Response | Tristarnex",
    description:
      "Real-time endpoint monitoring with AI-assisted triage. Critical threats isolated automatically in under 2 seconds — before they spread.",
    url: "https://tristarnex.com/threat-detection",
    siteName: "Tristarnex",
    type: "website",
  },
};

const CAPABILITIES = [
  { label: "Endpoint Detection & Response (EDR)", desc: "Continuous monitoring of every endpoint in your environment. Suspicious processes, file changes, and network connections are analysed in real time." },
  { label: "AI-Assisted Triage", desc: "Our AI models reduce alert noise by over 90%, surfacing only genuine threats. Every alert sent to you includes a plain-English explanation you can act on immediately." },
  { label: "Network Traffic Analysis", desc: "Deep inspection of network flows to detect lateral movement, command-and-control traffic, data exfiltration, and anomalous behaviour patterns." },
  { label: "Identity & Credential Monitoring", desc: "Detection of credential stuffing, brute force, impossible travel, and privileged account enumeration across your identity providers." },
  { label: "Cloud & SaaS Monitoring", desc: "Coverage across M365, Azure, AWS, and Google Workspace — detecting misconfigurations, suspicious admin activity, and data exposure events." },
  { label: "Threat Intelligence Integration", desc: "We track 1.2M+ threat indicators from 34 curated global feeds, correlating your environment against known nation-state and cybercriminal IOCs in real time." },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Deploy sensors", desc: "Lightweight agents deployed across your endpoints, servers, and cloud workloads — minimal performance impact, maximum visibility." },
  { step: "02", title: "Baseline your environment", desc: "We learn what normal looks like for your organisation before flagging anomalies. Fewer false positives from day one." },
  { step: "03", title: "AI triage filters the noise", desc: "Machine learning models trained on real-world threat data separate genuine incidents from routine noise automatically." },
  { step: "04", title: "Human analysts investigate", desc: "Every genuine threat is investigated by a senior analyst — not an automated playbook. You get context, not just an alert." },
  { step: "05", title: "Contain and improve", desc: "Threats are contained. Root cause is documented. Your detection coverage improves after every incident." },
];

const FAQS = [
  { q: "What is threat detection and response?", a: "Threat detection and response (TDR) is the continuous monitoring of an organisation's endpoints, networks, and cloud infrastructure to identify malicious activity in real time and contain threats before they cause damage. It combines automated detection technology with human analyst investigation." },
  { q: "How quickly can Tristarnex detect and contain a threat?", a: "Our AI triage time is under 2 seconds from detection to alert classification. Our detection-to-containment SLA is 94% within 15 minutes. Critical threats can be automatically isolated while investigation is ongoing." },
  { q: "What is the difference between EDR and antivirus?", a: "Antivirus detects known malware signatures. Endpoint Detection and Response (EDR) monitors behaviour continuously — it can detect fileless malware, living-off-the-land attacks, and novel threats that have no signature. EDR also provides full forensic telemetry to investigate how an attacker moved through your environment." },
  { q: "Do I need to replace my existing security tools?", a: "Not necessarily. Tristarnex can integrate with existing tooling or deploy our own stack depending on your environment. We assess what you have and recommend the most cost-effective approach — not the most expensive one." },
  { q: "Is 24/7 monitoring included?", a: "Yes. Our global monitoring capability runs 24 hours a day, 7 days a week, including weekends and public holidays. Threat actors do not work business hours — neither do we." },
];

export default function ThreatDetection() {
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
          Detection & Response
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-6">
          Threat Detection<br /><span className="text-brand-cyan">& Response</span>
        </h1>
        <p className="text-[17px] font-light leading-[1.8] text-brand-text-muted max-w-[680px] mb-4">
          Threat detection and response is the continuous monitoring of endpoints, networks, and cloud environments to identify and contain attacks in real time. Tristarnex combines AI-assisted detection with 24/7 human analyst coverage — isolating critical threats automatically in under 2 seconds.
        </p>
        <div className="flex gap-6 mt-6 mb-2">
          {[["<2s", "AI triage time"], ["24/7", "Global monitoring"], ["90%+", "Alert noise reduction"], ["94%", "Containment SLA"]].map(([val, label]) => (
            <div key={label} className="flex flex-col">
              <span className="font-display text-[22px] font-extrabold text-brand-cyan">{val}</span>
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-text-muted">{label}</span>
            </div>
          ))}
        </div>
        <a href="https://tristarnex.com/#contact" className="inline-block mt-6 font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
          Book a free briefing →
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
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">How it works</h2>
          <div className="flex flex-col gap-6">
            {HOW_IT_WORKS.map((p, i) => (
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
          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Find out what's happening in your environment right now</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free briefing. We will review your current detection coverage and show you exactly what gaps exist.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>
      </div>
    </main>
  );
}
