import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Ransomware Response: What to Do in the First 24 Hours | Tristarnex",
  description: "The actions you take in the first 24 hours of a ransomware attack determine how much damage is done. This guide covers exactly what to do — and what not to do.",
  alternates: { canonical: "/blog/ransomware-response-guide" },
  openGraph: {
    title: "Ransomware Response: What to Do in the First 24 Hours",
    description: "A step-by-step guide to ransomware response — containment, forensics, recovery, and avoiding the mistakes that make things worse.",
    url: "https://tristarnex.com/blog/ransomware-response-guide",
    siteName: "Tristarnex",
    type: "article",
  },
};

export default function RansomwareResponse() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-body">
      <div className="border-b border-brand-border px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-extrabold tracking-widest uppercase">
          Tristar<span className="text-brand-cyan">nex</span>
        </Link>
        <Link href="/blog" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">
          ← All articles
        </Link>
      </div>

      <article className="max-w-[780px] mx-auto px-8 py-20">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Ransomware</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">Incident Response</span>
          <span className="font-mono text-[11px] text-brand-text-muted/60 ml-2">18 Mar 2026 · 9 min read</span>
        </div>

        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-8">
          Ransomware Response:<br /><span className="text-brand-cyan">What to Do in the First 24 Hours</span>
        </h1>

        <div className="flex flex-col gap-6 text-[15px] font-light leading-[1.9] text-brand-text-muted">

          <p className="text-[17px] text-brand-text-muted font-light leading-[1.8] border-l-4 border-brand-cyan pl-5">
            Ransomware encrypts your files and demands payment for the decryption key. The actions you take in the first 24 hours determine how much of your environment is affected, whether data was exfiltrated, and how quickly you recover.
          </p>

          <div className="p-5 bg-red-500/5 border border-red-500/30 rounded-sm">
            <p className="font-mono text-[12px] text-red-400 font-bold tracking-[0.05em] mb-2">ACTIVE INCIDENT?</p>
            <p className="text-[13px]">Contact Tristarnex immediately at <a href="mailto:info@tristarnex.com" className="text-brand-cyan">info@tristarnex.com</a>. Do not power off affected systems and do not pay the ransom without advice.</p>
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Immediate steps — first 2 hours</h2>

          <div className="flex flex-col gap-4">
            {[
              { step: "01", title: "Isolate affected systems immediately", desc: "Disconnect infected machines from the network — unplug ethernet cables and disable WiFi. Do not power them off. Ransomware spreads fast; isolation stops it reaching more systems. Powered-off machines lose volatile memory data needed for forensic investigation." },
              { step: "02", title: "Identify the scope", desc: "Determine which systems are affected, which are clean, and whether the attack is still spreading. Check file servers, backups, and cloud sync services — ransomware frequently targets backup infrastructure specifically to prevent recovery." },
              { step: "03", title: "Preserve evidence", desc: "Take photographs of ransom notes. Preserve system logs before they are overwritten. Note the time you first detected the encryption. This evidence is critical for forensic investigation and regulatory notification." },
              { step: "04", title: "Activate your incident response plan", desc: "Notify your incident response team or contact an IR provider immediately. Establish a secure communication channel — if your email is compromised, use personal devices and phone calls." },
              { step: "05", title: "Do not pay the ransom yet", desc: "Payment does not guarantee decryption, does not prevent data publication, and may violate sanctions regulations if the attacker group is on a government sanctions list. Get professional advice before making any payment decision." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <span className="font-mono text-[13px] text-brand-cyan font-bold shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-brand-text mb-2">{item.title}</h3>
                  <p className="text-[13px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Hours 2–12: investigation and containment</h2>
          <p>With immediate containment in place, the focus shifts to understanding what happened. A forensic investigation will determine: the initial access vector (how the attacker got in), attacker dwell time (how long they were in your environment before deploying ransomware), whether data was exfiltrated before encryption, and whether any backdoors or persistence mechanisms remain.</p>
          <p>This investigation is critical — not just for recovery, but because UK GDPR requires you to notify the ICO within 72 hours if personal data was likely accessed or exfiltrated. Without forensic investigation, you cannot make that determination.</p>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">Hours 12–24: recovery planning</h2>
          <p>Recovery from ransomware requires a clean rebuild — not just decryption. Even if you obtain a decryption key, the attacker may have planted backdoors, modified system files, or established persistence that survives decryption. The recovery process must include:</p>
          <ul className="flex flex-col gap-2 pl-2">
            {[
              "Validating backups — confirming backups were not also encrypted or deleted",
              "Building clean systems from verified images, not from potentially compromised snapshots",
              "Restoring data from pre-infection backup points",
              "Hardening the initial access vector that allowed the attack",
              "Monitoring for attacker re-entry after restoration",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[14px]">
                <span className="text-brand-cyan shrink-0 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mt-4">The most common mistakes during a ransomware incident</h2>
          <div className="flex flex-col gap-3">
            {[
              ["Powering off affected systems", "Destroys volatile memory evidence needed to determine how the attacker got in and what they accessed."],
              ["Paying the ransom immediately", "Does not guarantee recovery, does not remove backdoors, and may fund further attacks. Always get professional advice first."],
              ["Restoring from backups without investigation", "If you restore without understanding the initial access vector, you will likely be reinfected within days."],
              ["Communicating over potentially compromised channels", "If the attacker has access to your email, they may be monitoring your incident response. Use out-of-band communication."],
              ["Delaying regulatory notification", "UK GDPR requires ICO notification within 72 hours if personal data was likely accessed. Missing this deadline adds regulatory risk to an already serious situation."],
            ].map(([mistake, consequence], i) => (
              <div key={i} className="p-4 bg-brand-bg-alt border border-red-500/20 rounded-sm">
                <p className="font-mono text-[11px] text-red-400 uppercase tracking-[0.08em] mb-1">❌ {mistake}</p>
                <p className="text-[13px] leading-[1.6]">{consequence}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[20px] font-extrabold uppercase tracking-tight text-brand-text mb-3">Dealing with ransomware right now?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Contact us immediately. A dedicated incident responder will be with you within minutes.</p>
          <a href="mailto:info@tristarnex.com" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Contact us now →
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-border flex items-center justify-between">
          <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">← All articles</Link>
          <Link href="/incident-response" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand-cyan hover:opacity-80 transition-opacity">Our incident response service →</Link>
        </div>
      </article>
    </main>
  );
}
