"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

const intelData = [
  { sev: "crit", text: "Outbound DNS Tunnelling Detected", meta: "Network // Exfiltration", time: "8min ago" },
  { sev: "high", text: "Credential Stuffing Attempt Blocked", meta: "Identity // Brute Force", time: "31min ago" },
  { sev: "high", text: "Malicious Office Macro Quarantined", meta: "Endpoint // Phishing", time: "2hrs ago" },
  { sev: "med",  text: "Privileged Account Enumeration", meta: "Active Directory // Recon", time: "5hrs ago" },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10">
      <div className="max-w-[1240px] mx-auto">
        
        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
          <span className="block w-6 h-px bg-brand-cyan" />
          Live Telemetry
        </div>
        <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-none uppercase tracking-[-0.01em] mb-5">
          Global <em className="not-italic text-brand-cyan">Threat</em> Intelligence.
        </h2>
        <p className="text-[16px] font-light leading-[1.8] text-brand-text-muted max-w-[560px]">
          We track nation-state actors and cybercrime syndicates in real time. Our models adapt to their behavior before they target your perimeter.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] mt-[64px] items-start">
          
          <div className="flex flex-col gap-3">
            {intelData.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col sm:flex-row sm:items-center gap-[14px] p-4 bg-brand-bg-card border border-brand-border rounded-sm hover:border-brand-border-alt transition-colors"
              >
                <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                  <span className={`w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] ${
                    d.sev === 'crit' ? 'bg-brand-red shadow-[0_0_8px_rgba(255,59,59,0.5)]' :
                    d.sev === 'high' ? 'bg-brand-amber shadow-[0_0_8px_rgba(245,158,11,0.4)]' :
                    'bg-brand-cyan shadow-[0_0_8px_rgba(0,210,255,0.3)]'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-medium text-brand-text">{d.text}</div>
                  <div className="font-mono text-[10px] text-brand-text-muted mt-0.5">{d.meta}</div>
                </div>
                <div className="font-mono text-[10px] text-brand-text-muted whitespace-nowrap">
                  {d.time}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <GlassCard className="p-6">
              <div className="w-full">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted mb-2.5">Threat Indicators Tracked</div>
                <div className="font-display font-extrabold text-4xl text-brand-cyan mb-1">1.2M+</div>
                <div className="text-[13px] font-light text-brand-text-muted">Sourced from 34 curated global threat intelligence feeds.</div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="w-full">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted mb-2.5">Avg. Threat Response Time</div>
                <div className="font-display font-extrabold text-4xl text-brand-cyan mb-1">&lt;15min</div>

                <div className="mt-3">
                  <div className="flex justify-between font-mono text-[11px] text-brand-text-muted mb-1.5">
                    <span>Detection-to-Containment SLA</span> <span>94%</span>
                  </div>
                  <div className="h-1 bg-brand-border rounded-sm overflow-hidden mix-blend-screen">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-linear-to-r from-brand-cyan-muted to-brand-cyan rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
