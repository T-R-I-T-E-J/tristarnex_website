"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";


const ABOUT_VALUES = [
  { icon: "⚔", title: "Attacker mindset", desc: "We think like the people trying to break in. Every defence we build is tested against real adversary techniques. We do not sell peace of mind — we build actual security." },
  { icon: "📡", title: "Transparency first", desc: "You will always know exactly what we found, why it matters, and what fixing it costs. No inflated risk scores. No jargon designed to obscure. Clear answers to hard questions." },
  { icon: "⚡", title: "Speed over ceremony", desc: "When a threat is detected, the right response is fast and decisive — not a committee meeting. Our AI-assisted workflows and clear escalation paths mean threats get contained in seconds, not hours." },
  { icon: "🏗", title: "Built for the long run", desc: "We are a new company. We have no legacy clients to protect us, no bloated sales team, and nothing to hide behind. We grow by doing excellent work and earning your trust — every single engagement." }
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
            <span className="block w-6 h-px bg-brand-cyan" />
            Who we are
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-[1] uppercase tracking-[-0.01em]">
            Built to <em className="not-italic text-brand-cyan">protect</em><br />the businesses that<br />get overlooked
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-6 relative z-10">
            {ABOUT_VALUES.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 p-6 bg-brand-bg-alt border border-brand-border rounded-sm transition-colors hover:border-brand-border-alt"
              >
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-sm bg-brand-cyan/5 border border-[rgba(0,210,255,0.2)] text-[16px] text-brand-text">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.06em] mb-1.5 text-brand-text">
                    {val.title}
                  </h3>
                  <p className="text-[13px] font-light leading-[1.6] text-brand-text-muted">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="sticky top-24 relative"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/8 blur-[100px] rounded-full pointer-events-none" />

              <GlassCard className="p-8">
                <h3 className="font-display text-[28px] font-extrabold uppercase leading-[1.1] mb-4 text-brand-text">
                  Enterprise-grade protection.<br /><span className="text-brand-cyan">Without the enterprise price.</span>
                </h3>

                <div className="flex flex-col gap-4 text-[14px] font-light leading-[1.8] text-brand-text-muted mb-6 z-10">
                  <p>
                    Tristarnex is a cybersecurity firm founded in 2026 to protect businesses that attackers increasingly target but the industry consistently underserves. We deliver enterprise-grade threat detection, penetration testing, and incident response to organisations of every size — without the enterprise price tag or the enterprise complexity.
                  </p>
                  <p>
                    We are built differently from the start. No legacy overhead, no generic playbooks, no reports designed to look impressive rather than be useful. Every engagement is led by a senior practitioner. Every recommendation is justified by your specific risk profile, not a framework checklist. Every alert we send you comes with a plain-English explanation you can act on immediately.
                  </p>
                  <p>
                    We are early-stage and deliberately taking on a small number of pilot clients. That means you get direct access to our founding team, faster response times than any established firm can offer, and a partner that is genuinely invested in proving its value on every single engagement.
                  </p>
                </div>

                <div className="h-px bg-brand-border my-6 z-10 w-full" />

                <div className="flex flex-col gap-2 z-10 w-full">
                  {[
                    "Founded 2026",
                    "Upcoming Pilot programme",
                    "Actively taking first clients — limited availability",
                    "Built on AI-assisted detection + human response"
                  ].map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-[11px] text-brand-text-muted tracking-[0.05em]">
                      <span className="text-brand-cyan font-bold">//</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
