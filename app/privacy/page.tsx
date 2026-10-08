import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
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

export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="TRISTARNEX / LEGAL"
        title="Privacy Policy"
        description="How Tristarnex handles personal data."
      />
      <section className="detail-section">
        <div className="container legal-content">
          <p className="mono">Existing policy · Last updated March 2026</p>
          {SECTIONS.map((s) => (
            <article key={s.title}>
              <h2>{s.title}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </article>
          ))}
          <p>
            Questions?{" "}
            <a href="mailto:info@tristarnex.com">info@tristarnex.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
