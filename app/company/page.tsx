import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = {
  title: "Our company",
  alternates: { canonical: "/company" },
};
export default function Company() {
  return (
    <>
      <PageHero
        eyebrow="TRISTARNEX / OUR COMPANY"
        title={
          <>
            A clearer way
            <br />
            <span>to respond.</span>
          </>
        }
        description="Tristarnex Private Limited is building ShieldMSP: security automation for the managed service providers who protect small and medium-sized businesses."
      />
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">WHY WE’RE BUILDING</p>
          <div className="company-statement">
            A security alert should lead to an informed decision. An automated
            response should have a clear boundary.{" "}
            <span>
              And the person responsible should always be able to understand
              what happened.
            </span>
          </div>
          <div className="founder-panel">
            <div>
              <h3>Tritej Abbireddy</h3>
              <p>Founder · Tristarnex Private Limited</p>
            </div>
            <span className="mono">
              FOUNDED 2026 / SHIELDMSP IN MVP DEVELOPMENT
            </span>
          </div>
        </div>
      </section>
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">OUR PRODUCT PRINCIPLES</p>
          <h2>
            Practical intelligence.
            <br />
            Deliberate control.
          </h2>
          <div className="detail-grid">
            <div className="detail-card">
              <h3>Work with the existing stack.</h3>
              <p>
                MSPs already invest in detection. ShieldMSP’s role is to help
                turn those signals into decisions and controlled responses.
              </p>
            </div>
            <div className="detail-card">
              <h3>Make the reasoning visible.</h3>
              <p>
                Rules, contextual explanations, policy decisions, and response
                outcomes should be understandable to the team responsible for
                them.
              </p>
            </div>
            <div className="detail-card">
              <h3>Earn the right to automate.</h3>
              <p>
                Observation, calibration, and review come before execution. The
                safety model is part of the product’s foundation.
              </p>
            </div>
            <div className="detail-card">
              <h3>Build around MSP operations.</h3>
              <p>
                Multiple customer environments, distinct permissions, and clear
                escalation paths shape the intended product experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
