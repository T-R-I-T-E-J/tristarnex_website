import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "What Is Threat Intelligence and How Does It Work? | Tristarnex",
  description: "Threat intelligence is the collection and analysis of information about cyber threats. Learn how it works, where data comes from, and how businesses use it to stay ahead of attackers.",
  alternates: { canonical: "/blog/what-is-threat-intelligence" },
  openGraph: {
    title: "What Is Threat Intelligence and How Does It Work?",
    description: "Learn what threat intelligence is, the different types, and how organisations use it to anticipate and defend against cyberattacks.",
    url: "https://tristarnex.com/blog/what-is-threat-intelligence",
    siteName: "Tristarnex",
    type: "article",
  },
};

export default function WhatIsThreatIntelligence() {
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
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Threat Intelligence</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Detection</span>
          <span className="font-mono text-[11px] text-brand-text-muted/60 ml-2">18 Mar 2026 · 7 min read</span>
        </div>

        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-8">
          What Is Threat Intelligence<br /><span className="text-brand-cyan">and How Does It Work?</span>
        </h1>

        <div className="flex flex-col gap-6 text-[15px] font-light leading-[1.9] text-brand-text-muted">

          <p className="text-[17px] text-brand-text-muted font-light leading-[1.8] border-l-4 border-brand-cyan pl-5">
            Threat intelligence is the collection, processing, and analysis of information about current and emerging cyber threats — enabling organisations to make informed decisions about their defences before an attack occurs.
          </p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Why threat intelligence matters</h2>
          <p>Most cybersecurity tools are reactive — they detect an attack after it has started. Threat intelligence is proactive: it tells you who is targeting organisations like yours, what techniques they are using, and what indicators to watch for before they reach your perimeter.</p>
          <p>Without threat intelligence, security teams operate in the dark — responding to alerts without context, prioritising vulnerabilities without knowing which ones attackers are actively exploiting, and building defences without knowing what they are defending against.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">The four types of threat intelligence</h2>
          <div className="flex flex-col gap-4">
            {[
              { type: "Strategic", audience: "Board & executives", desc: "High-level analysis of the threat landscape relevant to your sector, geography, and business model. Informs security investment decisions and risk appetite." },
              { type: "Tactical", audience: "Security architects", desc: "Information about attacker tactics, techniques, and procedures (TTPs) — the methods adversaries use. Mapped to frameworks like MITRE ATT&CK to inform defensive design." },
              { type: "Operational", audience: "Incident responders", desc: "Intelligence about specific, active attack campaigns — who is behind them, what infrastructure they are using, and what their objectives are." },
              { type: "Technical", audience: "SOC analysts", desc: "Specific indicators of compromise (IOCs) — malicious IP addresses, domains, file hashes, and URLs that can be loaded into security tools for automated detection and blocking." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-brand-cyan">{item.type} Intelligence</h3>
                  <span className="font-mono text-[10px] text-brand-text-muted/60 tracking-[0.08em]">{item.audience}</span>
                </div>
                <p className="text-[13px] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Where does threat intelligence data come from?</h2>
          <p>Threat intelligence is sourced from a combination of open-source, commercial, and proprietary feeds:</p>
          <ul className="flex flex-col gap-2 pl-2">
            {[
              "Open-source intelligence (OSINT) — public threat reports, security researcher disclosures, dark web monitoring",
              "Commercial threat feeds — curated IOC databases from vendors tracking nation-state and criminal threat actors",
              "Information sharing communities — industry-specific ISACs (Information Sharing and Analysis Centres)",
              "Honeypots and sinkhole networks — infrastructure designed to attract and observe attacker behaviour",
              "Incident response data — intelligence derived from real-world breach investigations",
              "Malware analysis — reverse engineering of malicious code to understand attacker capabilities and infrastructure",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[14px]">
                <span className="text-brand-cyan shrink-0 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Tristarnex tracks 1.2M+ threat indicators from 34 curated global feeds, correlating them against client environments in real time.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">What are indicators of compromise (IOCs)?</h2>
          <p>Indicators of compromise are technical artefacts that suggest a system has been or is being attacked. Common IOC types include malicious IP addresses, domain names used for command-and-control, file hashes of known malware, suspicious registry keys, and anomalous network traffic patterns. IOCs are loaded into security tools — firewalls, SIEMs, endpoint detection platforms — to trigger automatic detection and blocking when a match is found.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">How businesses use threat intelligence</h2>
          <p>Practical applications of threat intelligence for organisations of every size:</p>
          <ul className="flex flex-col gap-2 pl-2">
            {[
              "Prioritising vulnerability patching — focus on CVEs with active exploits in the wild, not just high CVSS scores",
              "Configuring detection rules — tune your SIEM and EDR to look for TTPs used by threat actors targeting your sector",
              "Informing penetration testing — test defences against the techniques real adversaries are currently using",
              "Reducing alert fatigue — context-enriched alerts mean analysts investigate fewer false positives",
              "Supporting incident response — understand attacker objectives and likely next moves during an active incident",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[14px]">
                <span className="text-brand-cyan shrink-0 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[20px] font-extrabold uppercase tracking-tight text-brand-text mb-3">See what threat intelligence finds in your environment</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free briefing. We will show you what our threat intelligence feeds reveal about threats targeting your sector right now.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-border flex items-center justify-between">
          <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">← All articles</Link>
          <Link href="/threat-detection" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-cyan hover:opacity-80 transition-opacity">Our threat detection service →</Link>
        </div>
      </article>
    </main>
  );
}
