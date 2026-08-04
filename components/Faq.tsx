"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is threat detection and response?",
    a: "Threat detection and response (TDR) is the continuous monitoring of endpoints, networks, and cloud infrastructure to identify malicious activity in real time. At Tristarnex, our AI-assisted triage isolates critical threats in under 2 seconds — automatically, before they spread across your environment.",
  },
  {
    q: "What does a penetration test involve?",
    a: "A penetration test is an authorised simulation of a cyberattack against your systems. Tristarnex conducts network, web application, social engineering, and full red team assessments. Every test ends with a prioritised remediation report written in plain English — not a raw list of CVEs.",
  },
  {
    q: "How is Tristarnex different from a traditional MSSP?",
    a: "Traditional managed security service providers (MSSPs) rely on legacy tooling, generic playbooks, and junior analysts working high-alert-volume queues. Tristarnex is built from the ground up with AI-assisted detection to reduce alert noise by over 90%, and every engagement is led by a senior practitioner — not escalated to one.",
  },
  {
    q: "How quickly do you respond to a security incident?",
    a: "Tristarnex guarantees a response time with a dedicated incident responder assigned immediately. Our detection-to-containment SLA is 94% within 15 minutes. When you contact us about an active incident, you speak directly to the person handling it — not a triage queue.",
  },
  {
    q: "What is vulnerability management and why does it matter?",
    a: "Vulnerability management is the ongoing process of finding, prioritising, and fixing security weaknesses across your systems. Most tools prioritise by CVSS score — we prioritise by real-world exploitability. A medium-severity misconfiguration exposing your domain admin is more dangerous than ten theoretical critical CVEs in an isolated system.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "Tristarnex was founded specifically to serve businesses that are increasingly targeted by attackers but consistently underserved by the security industry. We deliver enterprise-grade capabilities — threat detection, penetration testing, incident response — without the enterprise price tag or complexity.",
  },
  {
    q: "What is the free pilot assessment?",
    a: "As an early-stage firm taking on our first clients, we offer a comprehensive security assessment at no cost to the first 10 organisations we work with. This covers your current attack surface, the top threats relevant to your sector, and an honest assessment of your security posture — with no obligation to continue.",
  },
  {
    q: "What certifications do your practitioners hold?",
    a: "Our team holds industry-recognised certifications including OSCP (Offensive Security Certified Professional), CISSP (Certified Information Systems Security Professional), CREST CRT, CEH, GCFE, and GCIH. Every client engagement is led by a certified senior practitioner.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-16 py-24 px-12 bg-brand-bg-alt relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
            <span className="block w-6 h-px bg-brand-cyan" />
            Common questions
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-[1] uppercase tracking-[-0.01em]">
            Frequently asked<br /><em className="not-italic text-brand-cyan">questions.</em>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-brand-border">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-display text-[17px] font-bold uppercase tracking-[0.03em] text-brand-text group-hover:text-brand-cyan transition-colors leading-snug">
                  {faq.q}
                </span>
                <span className="font-mono text-brand-cyan text-[18px] shrink-0 mt-0.5 leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[15px] font-light leading-[1.8] text-brand-text-muted pb-6 max-w-[760px]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
