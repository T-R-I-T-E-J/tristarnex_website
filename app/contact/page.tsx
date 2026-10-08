import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
export const metadata: Metadata = {
  title: "Talk to our team",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <section className="detail-section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">TRISTARNEX / LET’S TALK</p>
          <h1>
            Your operations.
            <br />
            Your challenges.
            <br />
            <span>Let’s talk.</span>
          </h1>
          <p className="intro">
            Tell us how your MSP handles security alerts today. We’ll discuss
            ShieldMSP’s intended workflow, integration scope, and whether the
            product direction fits your environment.
          </p>
          <div className="inline-features">
            <span>Explore the product and safety model</span>
            <span>Discuss your existing security tools</span>
            <span>Help shape the MVP as a design partner</span>
          </div>
          <a className="contact-email" href="mailto:info@tristarnex.com">
            info@tristarnex.com
          </a>
          <p className="form-note" style={{ marginTop: 25 }}>
            ShieldMSP is in MVP development. Pilot scope and availability are
            discussed directly with the team.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
