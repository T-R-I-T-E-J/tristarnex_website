"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const METHODS = [
  {
    num: "01",
    title: "Understand Before You Act",
    principle: "You cannot defend what you do not know you have.",
    output: "A complete attack surface map and an asset inventory your team can actually use.",
    body: [
      "The first thing we do in every engagement is listen and map. We spend time understanding your business — not just your IT systems, but how your people work, what data you handle, who your suppliers are, and what would hurt most if it was compromised or shut down.",
      "We then map your technical attack surface: every endpoint, every cloud service, every remote access point, every third-party integration. We look at what is exposed to the internet, what authentication controls are in place, what your patch cadence looks like, and whether your current tools are actually configured correctly.",
      "Most organisations we work with discover assets and exposures in this phase that their own IT team did not know existed. Shadow IT, forgotten admin accounts, unpatched systems running in the background — this mapping phase is often the most valuable 48 hours of the entire engagement.",
    ],
  },
  {
    num: "02",
    title: "Prioritise by Real Impact, Not Theoretical Severity",
    principle: "Not every critical vulnerability is actually dangerous to your business.",
    output: "A prioritised risk register with business-impact scoring, not just technical severity ratings.",
    body: [
      "The security industry has a habit of presenting clients with long lists of findings sorted by CVSS score — a standardised severity rating that tells you how dangerous a vulnerability is in a vacuum, with no reference to your actual environment.",
      "We do not work that way. A critical-rated vulnerability in a system that is completely isolated from the internet and handles no sensitive data is far less important than a medium-rated misconfiguration that exposes your domain controller to the public internet. We score every finding by two factors: how likely it is to be exploited given your specific environment, and how bad the outcome would be for your business if it was.",
      "This means you get a short list of things that actually matter — not a document designed to look thorough by being long.",
    ],
  },
  {
    num: "03",
    title: "Build Defences That Match the Threat",
    principle: "The right control in the right place. Nothing more, nothing less.",
    output: "A security architecture document with specific controls, justified by the threats they address.",
    body: [
      "Once we understand your environment and your risks, we design a protection architecture that addresses your actual threat model — not a generic framework checklist.",
      "For most SMBs, this means hardening the things attackers actually use: endpoint visibility, email security, identity and access controls, and basic network segmentation. These four layers stop the overwhelming majority of real-world attacks. We get these right before recommending anything more complex.",
      "We do not sell tools. We recommend the right tools for your situation — whether that is something we provide, something you already own but have not configured correctly, or a free and open-source option that does the job without adding cost. Every control we recommend has a clear purpose: block this specific attack path, detect this specific technique, or reduce the blast radius if a breach occurs. If we cannot explain why a control exists, we do not recommend it.",
    ],
  },
  {
    num: "04",
    title: "Deploy With Minimal Disruption",
    principle: "Security that breaks workflows gets turned off.",
    output: "A fully deployed and tuned security stack with zero unexplained configuration, documented for your team.",
    body: [
      "The best protection in the world is useless if your team disables it because it interferes with how they work. We deploy carefully, test everything before it goes live, and tune aggressively in the first two weeks to eliminate false positives.",
      "For our Managed Detection & Response clients, this means a phased rollout: we start with a small group of endpoints in monitor-only mode, establish a baseline of normal behaviour for your environment, then expand coverage and enable automated response only once we are confident the signal-to-noise ratio is acceptable.",
      "We also work with your IT team or MSP — not around them. Every deployment is documented, every change is explained, and every configuration is handed over in a format your own team can understand and maintain.",
    ],
  },
  {
    num: "05",
    title: "Monitor Continuously, Alert Selectively",
    principle: "The value of monitoring is not the volume of alerts — it is the quality.",
    output: "Continuous detection coverage with human-readable alerts, automatic containment on critical events, and a monthly summary of everything we saw and stopped.",
    body: [
      "Once your defences are in place, our AI-assisted monitoring watches your environment around the clock. Every process launch, file modification, network connection, and authentication event is evaluated against our detection rules — mapped to the MITRE ATT&CK framework so we cover the full spectrum of known attacker techniques.",
      "The AI triage layer filters out the noise: expected behaviour, known-good software, routine administrative activity. What reaches your team is a small number of high-confidence alerts, each with a plain-English explanation of what happened and what the attacker was likely attempting — written for a business owner, not a security analyst.",
      "When a critical threat is detected — ransomware executing, credentials being harvested, an attacker moving laterally through your network — the response is automatic and immediate. The affected endpoint is isolated in under 2 seconds. A ticket is created. You are notified. The threat stops spreading before a human has had time to read the first alert.",
    ],
  },
  {
    num: "06",
    title: "Improve After Every Engagement",
    principle: "Your security posture should get stronger over time, not just stay the same.",
    output: "A security posture that actively improves over time, with a documented history of what was found, fixed, and learned.",
    body: [
      "Every incident, every penetration test, every near-miss is a learning opportunity. We run a structured review after every significant event — not to assign blame, but to understand what happened, why the existing controls did or did not catch it, and what specific change would prevent it from happening again.",
      "We also track the external threat landscape continuously. When a new ransomware variant targets your industry, when a critical vulnerability is disclosed in software you use, when attacker techniques evolve — you hear about it from us before it becomes a problem, with a clear recommendation for what to do.",
      "Quarterly, we revisit your risk register. Businesses change: new systems are adopted, new staff join, suppliers change, workforces shift to remote. Each of these changes potentially introduces new risk. We make sure your defences keep pace with your business.",
    ],
  },
];

export function Methodology() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="methodology" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
              <span className="block w-6 h-px bg-brand-cyan" />
              Methodology
            </div>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-none uppercase tracking-[-0.01em]">
              We do not sell<br />
              <em className="not-italic text-brand-cyan">products.</em><br />
              We solve problems.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-[15px] font-light leading-[1.9] text-brand-text-muted">
              Most cybersecurity failures happen not because the tools were wrong — but because nobody understood the environment, prioritised the right risks, or built defences that matched the actual threat. Our methodology fixes that.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="border-t border-brand-border">
          {METHODS.map((m, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-brand-border group">

                {/* Row header — always visible */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-[56px_1fr_auto] lg:grid-cols-[56px_260px_1fr_40px] gap-4 lg:gap-8 items-center py-6 text-left"
                >
                  <span className="font-display text-[32px] font-extrabold text-brand-cyan/25 group-hover:text-brand-cyan/40 transition-colors leading-none">
                    {m.num}
                  </span>
                  <h3 className={`font-display text-[17px] font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-brand-cyan" : "text-brand-text group-hover:text-brand-cyan"}`}>
                    {m.title}
                  </h3>
                  <p className="hidden lg:block font-mono text-[11px] text-brand-text-muted/70 italic leading-[1.6] text-left">
                    &ldquo;{m.principle}&rdquo;
                  </p>
                  <ChevronDown
                    size={16}
                    className={`text-brand-text-muted transition-transform duration-300 justify-self-end ${isOpen ? "rotate-180 text-brand-cyan" : ""}`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[316px_1fr] gap-8 lg:gap-12 pb-8 pl-0 lg:pl-[72px]">

                        {/* Principle + Output */}
                        <div className="flex flex-col gap-5">
                          <div>
                            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-cyan mb-2">Principle</div>
                            <p className="text-[13px] font-light leading-[1.8] text-brand-text-muted italic">
                              &ldquo;{m.principle}&rdquo;
                            </p>
                          </div>
                          <div className="h-px bg-brand-border" />
                          <div>
                            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-cyan mb-2">Output</div>
                            <p className="text-[13px] font-light leading-[1.8] text-brand-text-muted">
                              {m.output}
                            </p>
                          </div>
                        </div>

                        {/* Body paragraphs */}
                        <div className="flex flex-col gap-4">
                          {m.body.map((para, j) => (
                            <p key={j} className="text-[14px] font-light leading-[1.9] text-brand-text-muted">
                              {para}
                            </p>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-brand-bg-card border border-brand-border rounded-sm"
        >
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-cyan mb-4">
            The Methodology in One Paragraph
          </div>
          <p className="text-[15px] font-light leading-[1.9] text-brand-text-muted max-w-[860px]">
            We start by understanding your environment completely before recommending anything. We prioritise the risks that would actually hurt your business, not the ones that score highest on a generic scale. We build defences that match your specific threat model, deploy them carefully without disrupting your operations, and monitor continuously with AI-assisted triage that filters noise before it reaches your team. When a real threat appears, we respond in seconds — not hours. And after every engagement, we make sure your security posture is stronger than it was before we arrived.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
