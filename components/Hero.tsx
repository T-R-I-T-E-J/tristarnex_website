"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ThreeGlobe } from "./ThreeGlobe";
import { ParticleNetwork } from "./ParticleNetwork";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();

  // Scroll reaction: Camera pulls back slowly, opacity fades
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <section className="relative min-h-screen pt-24 pb-20 px-12 overflow-hidden flex flex-col justify-center">
      <ParticleNetwork />

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-[clamp(52px,7vw,88px)] font-extrabold leading-[0.92] tracking-tight uppercase mb-7"
          >
            We hunt<br />
            threats.<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-brand-cyan)" }}>
              Before
            </span><br />
            they hunt you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[17px] font-light leading-relaxed text-brand-text-muted max-w-[480px] mb-11"
          >
            Tristarnex is a cybersecurity firm built for businesses that cannot afford to be the next breach headline. We bring enterprise-grade protection, threat intelligence, and response capability to organisations of every size.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contact"
              className="relative overflow-hidden group font-mono text-[13px] font-medium tracking-[0.08em] uppercase text-brand-bg bg-brand-cyan px-8 py-3.5 rounded-sm no-underline transform transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Briefing <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            <a
              href="#services"
              className="font-mono text-[13px] font-normal tracking-[0.08em] uppercase text-brand-text-muted bg-transparent px-7 py-[13px] rounded-sm border border-brand-border-alt hover:text-brand-cyan hover:border-brand-cyan transition-colors"
            >
              Explore Capabilities
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-square max-w-[600px] mx-auto hidden lg:flex items-center justify-center"
        >
          {/* Overlay glow */}
          <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
          
          <ThreeGlobe />

          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] bg-brand-bg-alt/90 backdrop-blur-sm border border-brand-border px-4 py-2 rounded-sm"
          >
            <div className="font-display font-bold text-2xl text-brand-cyan block mb-0.5">&lt;2s</div>
            <div className="font-mono text-[10px] text-brand-text-muted">Mean Detect Time</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[-5%] bg-brand-bg-alt/90 backdrop-blur-sm border border-brand-border px-4 py-2 rounded-sm"
          >
            <div className="font-display font-bold text-2xl text-brand-amber block mb-0.5">24/7</div>
            <div className="font-mono text-[10px] text-brand-text-muted">Global Monitoring</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
