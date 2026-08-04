import { Shield, Target, Database, Users, Zap, Search } from "lucide-react";
import { GlassCard } from "./GlassCard";

const services = [
  {
    id: "01",
    icon: <Shield size={24} className="stroke-[1.5]" />,
    title: "Threat Detection & Response",
    definition: "Threat detection and response is the continuous monitoring of an organisation's endpoints, network, and cloud environment to identify malicious activity in real time and automatically contain threats before they cause damage.",
    desc: "Real-time endpoint monitoring with AI-assisted triage. Critical threats isolated automatically in under 2 seconds — before they spread.",
    tags: ["EDR", "AI Triage"],
  },
  {
    id: "02",
    icon: <Target size={24} className="stroke-[1.5]" />,
    title: "Penetration Testing",
    definition: "Penetration testing is an authorised, simulated cyberattack against a computer system, network, or web application to identify exploitable vulnerabilities before real adversaries can. It produces a prioritised remediation plan based on actual risk.",
    desc: "We attack your systems the way a real adversary would. Network, web application, social engineering, and red team assessments with actionable remediation plans.",
    tags: ["Red Team", "Web App"],
  },
  {
    id: "03",
    icon: <Search size={24} className="stroke-[1.5]" />,
    title: "Security Assessment",
    definition: "A security assessment is a systematic review of an organisation's current security controls, policies, and infrastructure to identify gaps, quantify risk, and produce a prioritised roadmap for improvement.",
    desc: "A complete, honest picture of your security posture — gaps, priorities, and what fixing them actually costs. No inflated findings, no jargon.",
    tags: ["Risk", "Gap Analysis"],
  },
  {
    id: "04",
    icon: <Database size={24} className="stroke-[1.5]" />,
    title: "Vulnerability Management",
    definition: "Vulnerability management is the ongoing process of identifying, classifying, prioritising, and remediating security vulnerabilities across an organisation's systems and software, scored by real-world exploitability rather than theoretical severity.",
    desc: "Continuous tracking of vulnerabilities across your environment, scored by real-world exploitability — not just theoretical severity ratings.",
    tags: ["CVE", "Exploitability"],
  },
  {
    id: "05",
    icon: <Users size={24} className="stroke-[1.5]" />,
    title: "Security Awareness Training",
    definition: "Security awareness training educates employees to recognise and respond to cyber threats such as phishing, social engineering, and credential theft. Effective training changes actual behaviour through simulations and hands-on exercises.",
    desc: "Phishing simulations and hands-on workshops that change actual behaviour. Built for the people in your business, not just the IT team.",
    tags: ["Phishing", "Training"],
  },
  {
    id: "06",
    icon: <Zap size={24} className="stroke-[1.5]" />,
    title: "Incident Response",
    definition: "Incident response is the structured process of detecting, containing, eradicating, and recovering from a cybersecurity breach or attack. A dedicated incident responder is assigned to manage containment, forensic investigation, and post-incident improvements.",
    desc: "When something goes wrong, speed is everything. Guaranteed response time, dedicated responder, full containment and forensics capability on demand.",
    tags: ["Forensics", "Containment"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-[64px]">
          <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
            <span className="block w-6 h-[1px] bg-brand-cyan" />
            Core Capabilities
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-none uppercase tracking-[-0.01em]">
            Six things we do<br /><em className="not-italic text-brand-cyan">exceptionally well.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-brand-border border border-brand-border">
          {services.map((s, i) => (
            <GlassCard key={i} className="min-h-[320px] rounded-none border-none p-8">
              <div className="w-full h-full flex flex-col">
                <div className="font-mono text-[11px] text-brand-text-muted/60 tracking-[0.15em] mb-5">
                  {s.id}
                </div>
                <div className="w-11 h-11 mb-5 border border-brand-border-alt rounded flex items-center justify-center bg-brand-cyan-dim stroke-brand-cyan text-brand-cyan">
                  {s.icon}
                </div>
                <h3 className="font-display text-[22px] font-bold uppercase tracking-[0.04em] mb-3 text-brand-text">
                  {s.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.6] text-brand-text-muted/70 mb-3 italic border-l-2 border-brand-cyan/30 pl-3">
                  {s.definition}
                </p>
                <p className="text-[14px] font-light leading-[1.7] text-brand-text-muted mb-auto pb-4">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-[0.08em] text-brand-text-muted/80 bg-brand-cyan/5 border border-brand-border px-2 py-[3px] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
