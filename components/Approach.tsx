"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  { num: "01", title: "Understand your environment", desc: "Before we touch anything, we map your attack surface — systems, people, data flows, third-party connections, and existing controls. Most organisations are surprised by what we find." },
  { num: "02", title: "Assess your real risk", desc: "We prioritise by impact and exploitability — not by CVSS score. A medium-severity misconfiguration that exposes your domain admin is more dangerous than ten critical CVEs in an isolated system." },
  { num: "03", title: "Deploy layered defences", desc: "We harden from the outside in — perimeter, endpoints, identity, data. Each layer reduces attacker dwell time and raises the cost of a successful breach." },
  { num: "04", title: "Monitor continuously", desc: "Our AI-assisted monitoring watches 24/7 and reduces alert noise by over 90%. When a real threat appears, you hear about it in plain English — not a raw log dump." },
  { num: "05", title: "Respond and improve", desc: "Every incident is a lesson. We document what happened, why it got through, and what changes permanently reduce your exposure. Your security posture improves after every engagement." }
];

const TERMINAL_SEQUENCE = [
  { type: "input", text: "./scan --target client-network --deep", delay: 1200 },
  { type: "dim", text: "Initialising scan engine v2.4.1...", delay: 600 },
  { type: "out", text: "Mapping attack surface...", delay: 800 },
  { type: "br", text: "", delay: 100 },
  { type: "ok", text: "✓ 247 hosts discovered", delay: 200 },
  { type: "ok", text: "✓ Firewall rules analysed", delay: 200 },
  { type: "warn", text: "⚠ 3 exposed admin panels found", delay: 300 },
  { type: "err", text: "✗ RDP port 3389 exposed to internet", delay: 300 },
  { type: "err", text: "✗ SMBv1 enabled on 12 hosts", delay: 300 },
  { type: "warn", text: "⚠ Unpatched CVE-2024-21338 detected", delay: 1000 },
  { type: "br", text: "", delay: 100 },
  { type: "out", text: "Running AI-assisted triage...", delay: 800 },
  { type: "ok", text: "✓ Risk scored and prioritised", delay: 300 },
  { type: "ok", text: "✓ Remediation plan generated", delay: 1000 },
  { type: "br", text: "", delay: 100 },
  { type: "input", text: "./report --format executive", delay: 1000 },
  { type: "out", text: "Report ready: client-report-2026.pdf", highlight: "client-report-2026.pdf", delay: 3000 }
];

export function Approach() {
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const advance = () => {
      setTerminalIndex((curr) => {
        if (curr >= TERMINAL_SEQUENCE.length - 1) {
          return curr;
        }
        return curr + 1;
      });
    };

    if (terminalIndex < TERMINAL_SEQUENCE.length - 1) {
      timeoutId = setTimeout(advance, TERMINAL_SEQUENCE[terminalIndex].delay);
    } else {
      timeoutId = setTimeout(advance, TERMINAL_SEQUENCE[TERMINAL_SEQUENCE.length - 1].delay);
    }

    return () => clearTimeout(timeoutId);
  }, [terminalIndex]);

  return (
    <section id="approach" className="scroll-mt-16 py-24 px-12 bg-brand-bg relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-3.5">
            <span className="block w-6 h-px bg-brand-cyan" />
            How we work
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-[1] uppercase tracking-[-0.01em]">
            The <em className="not-italic text-brand-cyan">Tristarnex</em><br />methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex gap-5 py-7 border-b border-brand-border first:border-t transition-colors hover:border-brand-border-alt"
              >
                <div className="font-mono text-[11px] text-brand-text-muted tracking-[0.1em] w-10 h-10 border border-brand-border rounded-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:text-brand-cyan group-hover:border-brand-cyan shadow-[0_0_0_rgba(0,210,255,0)] group-hover:shadow-[0_0_12px_rgba(0,210,255,0.2)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display text-[18px] font-bold uppercase tracking-[0.04em] mb-1.5 transition-colors group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-light leading-[1.6] text-brand-text-muted">
                    {step.desc}
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
            className="bg-[#0f1b28] border border-[rgba(0,210,255,0.2)] rounded-sm overflow-hidden"
          >
            <div className="bg-brand-bg-card px-4 py-2.5 flex items-center gap-2 border-b border-brand-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
              </div>
              <div className="font-mono text-[11px] text-brand-text-muted ml-2">
                tristarnex@ops — threat-scan
              </div>
            </div>
            
            <div className="p-5 font-mono text-[12px] leading-[1.9] h-[480px] overflow-hidden">
              {TERMINAL_SEQUENCE.slice(0, terminalIndex + 1).map((line, idx) => (
                <div key={idx}>
                  {line.type === "input" && (
                    <div><span className="text-brand-cyan">▶ </span><span className="text-brand-text">{line.text}</span></div>
                  )}
                  {line.type === "dim" && <div className="text-brand-text-muted opacity-70">{line.text}</div>}
                  {line.type === "out" && (
                    <div className="text-brand-text-muted">
                      {line.highlight ? (
                        <>
                          {line.text.replace(line.highlight, '')}
                          <span className="text-brand-cyan">{line.highlight}</span>
                        </>
                      ) : (
                        line.text
                      )}
                    </div>
                  )}
                  {line.type === "ok" && <div><span className="text-[#00e5a0]">{line.text.slice(0, 2)}</span><span className="text-brand-text-muted">{line.text.slice(2)}</span></div>}
                  {line.type === "warn" && <div><span className="text-brand-amber">{line.text.slice(0, 2)}</span><span className="text-brand-amber">{line.text.slice(2)}</span></div>}
                  {line.type === "err" && <div><span className="text-brand-red">{line.text.slice(0, 2)}</span><span className="text-brand-red">{line.text.slice(2)}</span></div>}
                  {line.type === "br" && <br />}
                </div>
              ))}
              
              {/* Blinking Cursor at the end of output */}
              {terminalIndex === TERMINAL_SEQUENCE.length - 1 && (
                <div className="mt-4"><span className="text-brand-cyan">▶ </span><motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="text-brand-cyan">█</motion.span></div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
