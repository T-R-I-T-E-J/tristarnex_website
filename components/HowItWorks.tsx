"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Free 30-minute briefing",
    tagline: "A conversation, not a sales pitch.",
    body: "Tell us about your business, your team size, what systems you use, and what keeps you up at night. We tell you honestly where your biggest risks are — even if that means telling you we are not the right fit.",
  },
  {
    num: "02",
    title: "Attack surface mapping",
    tagline: "See every door before an attacker does.",
    body: "Before we recommend anything, we map what you have. Every system, every cloud account, every third-party connection, every way an attacker could get in. Most businesses are surprised by how many doors are open that they did not know existed. You get a clear picture of your exposure — in plain English, not a spreadsheet of CVE numbers.",
  },
  {
    num: "03",
    title: "Tailored protection plan",
    tagline: "Built for your risk profile, not a template.",
    body: "No two businesses have the same risk profile. A law firm handling client files has different priorities to a manufacturer running operational technology. We build a protection plan specific to your environment, your budget, and the threats most likely to target your sector — ranked by what would actually hurt you most.",
  },
  {
    num: "04",
    title: "Agent deployment",
    tagline: "Under 60 seconds per machine. Your staff will not notice it.",
    body: "For businesses on our Managed Detection & Response service, we deploy a lightweight agent to your endpoints — Windows and Mac. Installation takes under 60 seconds per machine and can be pushed silently via your existing IT management tools. Your staff will not notice it is there. Attackers will.",
  },
  {
    num: "05",
    title: "24/7 AI-assisted monitoring",
    tagline: "No raw logs. No jargon. Just what happened and what to do next.",
    body: "From the moment the agent is live, every process launch, every file change, every network connection is watched. Our AI triages every event in under 2 seconds — filtering out the noise so that when a real threat appears, your team hears about it immediately in plain English.",
  },
  {
    num: "06",
    title: "Instant automated response",
    tagline: "Ransomware isolated in under 2 seconds. Before it spreads.",
    body: "When ransomware or a critical threat is detected, we do not wait for a human to read an email. The infected endpoint is automatically isolated from your network in under 2 seconds — cutting off the attack before it spreads. A ticket is created, your team is notified, and you still have remote control of the isolated machine so you can investigate and recover without a site visit.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "No analyst hotline.",
    body: "When a critical threat is detected at 2am, the machine is isolated automatically before anyone wakes up. You are not dependent on a human being available.",
  },
  {
    title: "No noise.",
    body: "Our AI filters out the false positives before they reach you. The average EDR tool generates hundreds of alerts a day. We target under five that actually need your attention.",
  },
  {
    title: "No lock-in.",
    body: "We do not require 12-month contracts to get started. If we are not delivering value, you can leave. We grow by doing good work, not by trapping customers.",
  },
];

export function HowItWorks() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="how-it-works" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10">
      <div className="max-w-[1240px] mx-auto">

        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
          <span className="block w-6 h-px bg-brand-cyan" />
          Process
        </div>
        <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-none uppercase tracking-[-0.01em] mb-4">
          How it <em className="not-italic text-brand-cyan">works.</em>
        </h2>
        <p className="text-[16px] font-light leading-[1.8] text-brand-text-muted max-w-[520px] mb-14">
          Six steps from first call to full protection. No jargon, no surprises.
        </p>

        {/* Accordion steps */}
        <div className="flex flex-col border-t border-brand-border mb-20">
          {STEPS.map((step, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-brand-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 py-5 text-left group"
                >
                  <span className="font-mono text-[11px] text-brand-cyan shrink-0 w-6">{step.num}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`font-display text-[18px] font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-brand-cyan" : "text-brand-text group-hover:text-brand-cyan"}`}>
                      {step.title}
                    </div>
                    {!isOpen && (
                      <div className="font-mono text-[11px] text-brand-text-muted mt-0.5 truncate">
                        {step.tagline}
                      </div>
                    )}
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-brand-text-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-cyan" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-8 pb-6">
                        <p className="font-mono text-[11px] text-brand-cyan mb-3 tracking-[0.05em]">
                          {step.tagline}
                        </p>
                        <p className="text-[14px] font-light leading-[1.9] text-brand-text-muted max-w-[680px]">
                          {step.body}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* After that + Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-brand-bg-card border border-brand-border p-8 rounded-sm">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-cyan mb-3">What happens after that?</div>
            <p className="text-[14px] font-light leading-[1.9] text-brand-text-muted">
              Protection is not a one-time event. Every month we review what we detected, what we blocked, and what changed in the threat landscape that affects your business. Every quarter we run a fresh assessment to catch new risks introduced by system changes, new staff, or new attacker techniques. Your security posture gets stronger over time — not just set and forgotten.
            </p>
          </div>
          <div className="bg-brand-bg-card border border-brand-border p-8 rounded-sm">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-cyan mb-3">The plain-English promise</div>
            <p className="text-[14px] font-light leading-[1.9] text-brand-text-muted">
              You will never receive a report you cannot understand. Every finding comes with a plain-English explanation of what it means for your business, a severity level in plain terms (not a CVSS score), and a specific recommended action with an honest effort and cost estimate. If something is not worth fixing right now, we will tell you that too.
            </p>
          </div>
        </div>

        {/* Differentiators */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-text-muted mb-8">
            Three things that make this different from what you have probably tried before
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 p-6 border border-brand-border bg-brand-bg-card rounded-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                  <span className="font-mono text-[12px] font-medium text-brand-text">{d.title}</span>
                </div>
                <p className="text-[13px] font-light leading-[1.8] text-brand-text-muted">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
