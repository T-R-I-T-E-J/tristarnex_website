"use client";

import { motion } from "framer-motion";

const STATS = [
  { num: "250+", label: "CVEs tracked weekly" },
  { num: "2026", label: "Founded" },
  { num: "24/7", label: "Monitoring capability" },
  { num: "<2s", label: "AI threat triage time" },
];

export function StatsBar() {
  return (
    <div className="bg-brand-bg py-7 px-12 relative z-10 hidden md:block">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-8 border-r border-brand-border text-center first:pl-0 last:border-r-0"
            >
              <div className="font-display text-[40px] font-extrabold text-brand-cyan tracking-[-0.02em] leading-none mb-1">
                {stat.num}
              </div>
              <div className="font-mono text-[11px] text-brand-text-muted/70 tracking-[0.1em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
