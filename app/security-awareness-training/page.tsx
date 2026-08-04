import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Security Awareness Training | Tristarnex",
  description:
    "Phishing simulations and hands-on security awareness workshops that change actual employee behaviour — built for people, not just IT teams.",
  alternates: { canonical: "/security-awareness-training" },
  openGraph: {
    title: "Security Awareness Training | Tristarnex",
    description:
      "Phishing simulations and hands-on workshops that change actual behaviour. Built for the people in your business, not just the IT team.",
    url: "https://tristarnex.com/security-awareness-training",
    siteName: "Tristarnex",
    type: "website",
  },
};

const PROGRAMMES = [
  { label: "Phishing Simulations", desc: "Realistic phishing campaigns sent to your staff — testing susceptibility, tracking click rates, and automatically enrolling those who interact into targeted training." },
  { label: "Spear Phishing & Pretexting", desc: "Targeted simulations that mimic real adversary tactics — impersonating suppliers, executives, or IT teams to test your highest-risk users." },
  { label: "Security Awareness Workshops", desc: "Engaging, scenario-based sessions for all staff covering phishing recognition, password hygiene, safe data handling, and incident reporting." },
  { label: "Executive & Board Briefings", desc: "Tailored sessions for leadership covering current threat landscape, their specific risk exposure, and the security decisions that matter at board level." },
  { label: "Vishing (Voice Phishing) Testing", desc: "Telephone-based social engineering simulations testing whether staff disclose sensitive information or bypass processes under pressure." },
  { label: "Reporting & Measurement", desc: "Detailed reporting on click rates, training completion, and behavioural improvement over time — evidence of a maturing security culture." },
];

const FAQS = [
  { q: "What is security awareness training?", a: "Security awareness training educates employees to recognise and respond appropriately to cyber threats — including phishing emails, social engineering calls, and suspicious requests. Studies consistently show that human error is involved in over 80% of security incidents. Training that changes behaviour is one of the most cost-effective investments an organisation can make." },
  { q: "How does phishing simulation work?", a: "We design and send realistic phishing emails to your staff — crafted to match the kinds of attacks targeting your sector. We track who opens the email, who clicks any links, and who submits credentials. Staff who interact are enrolled in targeted training automatically, and aggregate results are reported back to you with benchmarks against similar organisations." },
  { q: "Will staff know the phishing simulations are happening?", a: "This depends on your preference. Some organisations brief staff in advance to raise awareness. Others run simulations without prior notice to get a true baseline. We recommend a mix: an initial unannounced simulation to establish a baseline, followed by a training programme, followed by follow-up simulations to measure improvement." },
  { q: "How often should training run?", a: "Security awareness is not a one-time event — it requires regular reinforcement to change habits. We recommend phishing simulations every 6–8 weeks and at least one workshop per year. High-risk roles (finance, HR, executives) benefit from more frequent targeted exercises." },
  { q: "Is the training suitable for non-technical staff?", a: "Yes — this is a core principle of how we design our programmes. Security training that speaks only to technical staff misses the majority of people who are most frequently targeted. Our workshops use real-world scenarios, plain English, and practical exercises relevant to people's actual jobs." },
];

export default function SecurityAwarenessTraining() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-body">
      <div className="border-b border-brand-border px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-extrabold tracking-widest uppercase">
          Tristar<span className="text-brand-cyan">nex</span>
        </Link>
        <Link href="/" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">
          ← Back to site
        </Link>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-20">
        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-4">
          <span className="block w-6 h-px bg-brand-cyan" />
          Human Risk
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-6">
          Security Awareness<br /><span className="text-brand-cyan">Training</span>
        </h1>
        <p className="text-[17px] font-light leading-[1.8] text-brand-text-muted max-w-[680px] mb-6">
          Security awareness training reduces human risk through phishing simulations, targeted workshops, and behavioural measurement. Tristarnex builds programmes for the people in your business — not just IT teams — because most attacks succeed by targeting people, not technology.
        </p>
        <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
          Book a free briefing →
        </a>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">What we deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROGRAMMES.map((item, i) => (
              <div key={i} className="p-5 bg-brand-bg-alt border border-brand-border rounded-sm">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.06em] text-brand-cyan mb-2">{item.label}</h3>
                <p className="text-[13px] font-light leading-[1.7] text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold uppercase tracking-tight mb-8">Frequently asked questions</h2>
          <div className="flex flex-col divide-y divide-brand-border">
            {FAQS.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.03em] text-brand-text mb-3">{faq.q}</h3>
                <p className="text-[14px] font-light leading-[1.8] text-brand-text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-brand-bg-alt border border-brand-cyan/30 rounded-sm">
          <h2 className="font-display text-[22px] font-extrabold uppercase tracking-tight text-brand-text mb-3">How would your staff respond to a phishing attack today?</h2>
          <p className="text-[14px] font-light text-brand-text-muted mb-5 leading-[1.7]">Book a free briefing to discuss your current human risk exposure and what a training programme would look like for your organisation.</p>
          <a href="https://tristarnex.com/#contact" className="inline-block font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-brand-bg bg-brand-cyan px-6 py-3 rounded-sm hover:opacity-85 transition-opacity">
            Book a free briefing →
          </a>
        </div>
      </div>
    </main>
  );
}
