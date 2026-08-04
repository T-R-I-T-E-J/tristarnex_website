"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "./GlassCard";

const BRIEFING_COVERS = [
  "Your current attack surface, what's exposed and what isn't",
  "The top 3 threats most likely to affect your sector right now",
  "Honest assessment of whether we're the right fit for you",
  "A concrete next step, no vague proposals"
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mjgapzyo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setIsSubmitting(false);
      }
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
            <span className="block w-6 h-px bg-brand-cyan" />
            Get in touch
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-[1] uppercase tracking-[-0.01em]">
            Book a free<br /><em className="not-italic text-brand-cyan">security briefing</em>
          </h2>
          <p className="mt-5 text-[16px] font-light leading-[1.8] text-brand-text-muted max-w-[560px]">
            We will spend 30 minutes understanding your current setup, tell you honestly where your biggest risks are, and explain how we can help — with no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.form 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted">First name</label>
                <input name="firstName" type="text" placeholder="Alex" className="bg-brand-bg-card border border-[rgba(0,210,255,0.2)] rounded-sm py-2.5 px-3.5 font-mono text-[13px] text-brand-text w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-text-muted/50" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted">Last name</label>
                <input name="lastName" type="text" placeholder="Johnson" className="bg-brand-bg-card border border-[rgba(0,210,255,0.2)] rounded-sm py-2.5 px-3.5 font-mono text-[13px] text-brand-text w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-text-muted/50" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted">Work email</label>
              <input name="email" type="email" placeholder="alex@yourcompany.com" className="bg-brand-bg-card border border-[rgba(0,210,255,0.2)] rounded-sm py-2.5 px-3.5 font-mono text-[13px] text-brand-text w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-text-muted/50" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted">Company</label>
              <input name="company" type="text" placeholder="Your company name" className="bg-brand-bg-card border border-[rgba(0,210,255,0.2)] rounded-sm py-2.5 px-3.5 font-mono text-[13px] text-brand-text w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-text-muted/50" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted">What are you most concerned about?</label>
              <select name="concern" className="bg-brand-bg-card border border-[rgba(0,210,255,0.2)] rounded-sm py-2.5 px-3.5 font-mono text-[13px] text-brand-text w-full focus:outline-none focus:border-brand-cyan transition-colors appearance-none cursor-pointer">
                <option value="">Select an area...</option>
                <option value="ransomware">Ransomware and malware</option>
                <option value="phishing">Phishing and email attacks</option>
                <option value="cloud">Cloud security (M365, Azure, AWS)</option>
                <option value="compliance">Compliance (Cyber Essentials, ISO 27001)</option>
                <option value="pentest">Penetration testing</option>
                <option value="incident">We had an incident and need help</option>
                <option value="general">General security review</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted">Anything else we should know?</label>
              <textarea name="details" placeholder="Tell us about your environment, current tools, team size, or anything else relevant..." className="bg-brand-bg-card border border-[rgba(0,210,255,0.2)] rounded-sm py-2.5 px-3.5 font-mono text-[13px] text-brand-text w-full min-h-[120px] resize-y focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-text-muted/50" />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`mt-2 font-mono text-[13px] font-medium tracking-[0.1em] uppercase py-3.5 rounded-sm w-full transition-all duration-300 ${isSuccess ? 'bg-[#00e5a0] text-black' : isSubmitting ? 'bg-brand-cyan/70 text-black' : 'bg-brand-cyan text-black hover:opacity-85'}`}
            >
              {isSuccess ? '✓ Request received' : isSubmitting ? 'Sending...' : 'Send briefing request →'}
            </button>
          </motion.form>

          <div className="flex flex-col gap-6 relative z-10">
            
            <GlassCard className="p-6">
              <div className="w-full flex items-center gap-[10px] font-mono text-[12px] text-[#00e5a0]">
                <motion.div 
                  animate={{ scale: [1, 0.7, 1], opacity: [1, 0.5, 1] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-[#00e5a0] shadow-[0_0_8px_rgba(0,229,160,0.5)]"
                />
                Taking new clients — free pilot assessment available
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="w-full flex flex-col gap-4 items-start z-10">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted mb-2">Email</div>
                  <a href="mailto:info@tristarnex.com" className="text-[15px] font-medium text-brand-text hover:text-brand-cyan transition-colors">info@tristarnex.com</a>
                  <div className="text-[13px] font-light text-brand-text-muted mt-0.5">We respond within 4 hours on business days</div>
                </div>
                <div className="h-px bg-brand-border w-full" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted mb-2">Phone</div>
                  <a href="tel:+441234567890" className="text-[15px] font-medium text-brand-text hover:text-brand-cyan transition-colors">+44 1234 567890</a>
                  <div className="text-[13px] font-light text-brand-text-muted mt-0.5">Mon–Fri, 09:00–18:00 GMT</div>
                </div>
                <div className="h-px bg-brand-border w-full" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted mb-2">Registered Office</div>
                  <address className="not-italic text-[13px] font-light text-brand-text-muted leading-[1.7]">
                    Tristarnex Ltd<br />
                    123 Cyber Street<br />
                    London, EC1A 1BB<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="w-full z-10">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-text-muted mb-3">What the free briefing covers</div>
                <div className="flex flex-col gap-2.5">
                  {BRIEFING_COVERS.map((cov, i) => (
                    <div key={i} className="flex gap-2.5 text-[13px] font-light text-brand-text-muted">
                      <span className="font-mono text-brand-cyan font-bold leading-none mt-1 shrink-0">0{i + 1}</span>
                      <span>{cov}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border border-brand-cyan/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-cyan text-black font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-bl-sm">
                Upcoming
              </div>
              <div className="w-full z-10">
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-brand-cyan mb-2">Pilot Programme</div>
                <div className="text-[16px] font-bold text-brand-text mb-2">First assessment — free</div>
                <div className="text-[13px] font-light text-brand-text-muted leading-[1.7]">
                  As a new company, our first 10 clients get a comprehensive security assessment at no cost. We earn your trust first.
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </div>
    </section>
  );
}
