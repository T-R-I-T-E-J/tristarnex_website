import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tristarnex.com"),
  title: "Cybersecurity Blog & Guides | Tristarnex",
  description: "Practical cybersecurity guides, threat intelligence briefings, and expert advice for businesses. Penetration testing, ransomware response, incident planning and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Cybersecurity Blog & Guides | Tristarnex",
    description: "Practical cybersecurity guides and threat intelligence briefings from Tristarnex practitioners.",
    url: "https://tristarnex.com/blog",
    siteName: "Tristarnex",
    type: "website",
  },
};

const POSTS = [
  {
    slug: "what-is-penetration-testing",
    title: "What Is Penetration Testing? A Complete Guide",
    excerpt: "Penetration testing is an authorised simulation of a cyberattack against your systems. This guide explains what it involves, the different types, and what you should expect from a professional engagement.",
    date: "18 Mar 2026",
    readTime: "8 min read",
    tags: ["Penetration Testing", "Offensive Security"],
  },
  {
    slug: "what-is-threat-intelligence",
    title: "What Is Threat Intelligence and How Does It Work?",
    excerpt: "Threat intelligence is the collection and analysis of information about current and emerging cyber threats. Learn how it works, where the data comes from, and how businesses use it to stay ahead of attackers.",
    date: "18 Mar 2026",
    readTime: "7 min read",
    tags: ["Threat Intelligence", "Detection"],
  },
  {
    slug: "ransomware-response-guide",
    title: "Ransomware Response: What to Do in the First 24 Hours",
    excerpt: "Ransomware moves fast. The actions you take in the first 24 hours determine how much damage is done and how quickly you recover. This guide covers exactly what to do — and what not to do.",
    date: "18 Mar 2026",
    readTime: "9 min read",
    tags: ["Ransomware", "Incident Response"],
  },
  {
    slug: "cyber-essentials-guide",
    title: "Cyber Essentials Certification: What It Covers and How to Get It",
    excerpt: "Cyber Essentials is a UK government-backed certification covering five key security controls. This guide explains what each control requires, who needs it, and how to prepare for assessment.",
    date: "18 Mar 2026",
    readTime: "6 min read",
    tags: ["Compliance", "Cyber Essentials"],
  },
  {
    slug: "incident-response-plan",
    title: "Incident Response Plan: What Every Business Needs",
    excerpt: "An incident response plan tells your team exactly what to do when a cyberattack occurs. Most businesses do not have one. This guide covers what to include and how to build one that actually works.",
    date: "18 Mar 2026",
    readTime: "7 min read",
    tags: ["Incident Response", "Planning"],
  },
];

export default function Blog() {
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
          Resources
        </div>
        <h1 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase tracking-tight leading-none mb-4">
          Cybersecurity<br /><span className="text-brand-cyan">Guides & Insights</span>
        </h1>
        <p className="text-[16px] font-light leading-[1.8] text-brand-text-muted mb-16 max-w-[600px]">
          Practical guides and threat intelligence from Tristarnex practitioners. Written for security professionals and business leaders alike.
        </p>

        <div className="flex flex-col divide-y divide-brand-border">
          {POSTS.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group py-8 flex flex-col gap-3 hover:no-underline">
              <div className="flex items-center gap-3 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-[20px] font-bold uppercase tracking-[0.02em] text-brand-text group-hover:text-brand-cyan transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-[14px] font-light leading-[1.7] text-brand-text-muted max-w-[680px]">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 font-mono text-[11px] text-brand-text-muted/60">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span className="text-brand-cyan group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
