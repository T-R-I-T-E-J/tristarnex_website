import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tristarnex",
  description: "How Tristarnex collects, uses, and protects your personal data.",
};

const SECTIONS = [
  {
    title: "1. Who We Are",
    body: [
      "Tristarnex is a cybersecurity firm registered in the United Kingdom. We provide threat detection, penetration testing, incident response, and related security services to businesses.",
      "For the purposes of UK data protection law, Tristarnex is the data controller of any personal data we collect through this website or in connection with our services.",
      "You can contact us regarding data protection matters at: info@tristarnex.com",
    ],
  },
  {
    title: "2. What Data We Collect",
    body: [
      "When you submit an enquiry through our contact form, we collect: your first and last name, work email address, company name, and any information you choose to include in your message.",
      "When you visit our website, we may collect standard technical data such as IP address, browser type, pages visited, and time of visit through our hosting and analytics providers.",
      "We do not collect sensitive personal data, payment card information, or data from children under 18.",
    ],
  },
  {
    title: "3. How We Use Your Data",
    body: [
      "Contact form submissions: to respond to your enquiry, assess your security requirements, and follow up regarding our services.",
      "Website analytics: to understand how visitors use our site and improve its content and performance.",
      "We do not sell, rent, or trade your personal data to third parties. We do not use your data for automated decision-making or profiling.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    body: [
      "Contact form enquiries: legitimate interests — responding to a business enquiry you have initiated, and taking steps prior to entering into a contract.",
      "Website analytics: legitimate interests — understanding site usage to improve our service.",
      "Where we rely on legitimate interests, we have assessed that our interests are not overridden by your data protection rights.",
    ],
  },
  {
    title: "5. How Long We Keep Your Data",
    body: [
      "Enquiry data: we retain contact form submissions for up to 2 years from the date of receipt, unless you ask us to delete them sooner or unless a longer retention period is required by law.",
      "Analytics data: retained in aggregated, anonymised form for up to 26 months.",
      "When data is no longer required, we securely delete or anonymise it.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "Under UK GDPR, you have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict our processing; and request portability of your data.",
      "To exercise any of these rights, contact us at info@tristarnex.com. We will respond within one calendar month.",
      "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you believe we have not handled your data lawfully.",
    ],
  },
  {
    title: "7. Third-Party Services",
    body: [
      "Formspree: we use Formspree to process contact form submissions. Data submitted through our form is transmitted to Formspree's servers. Please review Formspree's privacy policy at formspree.io/legal/privacy-policy.",
      "Vercel: our website is hosted on Vercel. Standard server logs may be retained by Vercel in accordance with their privacy policy.",
      "We take reasonable steps to ensure that any third-party processors we use provide adequate data protection guarantees.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We take data security seriously. Our website is served over HTTPS. Access to any personal data we hold is restricted to authorised personnel only.",
      "However, no transmission over the internet is completely secure. If you have concerns about the security of information you have sent us, please contact us immediately.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The date at the bottom of this page indicates when it was last revised. Continued use of our website after any changes constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text font-body">
      {/* Nav bar */}
      <div className="border-b border-brand-border px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-extrabold tracking-widest uppercase">
          Tristar<span className="text-brand-cyan">nex</span>
        </Link>
        <Link href="/" className="font-mono text-[11px] tracking-[0.12em] uppercase text-brand-text-muted hover:text-brand-cyan transition-colors">
          ← Back to site
        </Link>
      </div>

      <div className="max-w-[780px] mx-auto px-8 py-20">
        <div className="flex items-center gap-[10px] font-mono text-[11px] tracking-[0.2em] uppercase text-brand-cyan mb-4">
          <span className="block w-6 h-px bg-brand-cyan" />
          Legal
        </div>
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold uppercase tracking-tight leading-none mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-[11px] text-brand-text-muted mb-12">
          Last updated: March 2026
        </p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-[17px] font-bold uppercase tracking-tight text-brand-text mb-4">
                {s.title}
              </h2>
              <div className="flex flex-col gap-3">
                {s.body.map((para, j) => (
                  <p key={j} className="text-[14px] font-light leading-[1.9] text-brand-text-muted">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border">
          <p className="font-mono text-[11px] text-brand-text-muted">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:info@tristarnex.com" className="text-brand-cyan hover:underline">
              info@tristarnex.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
