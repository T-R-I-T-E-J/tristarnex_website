import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = {
  title: "Safety by design",
  alternates: { canonical: "/safety" },
};
export default function Safety() {
  return (
    <>
      <PageHero
        eyebrow="SHIELDMSP / SAFETY MODEL"
        title={
          <>
            Automation with
            <br />
            <span>boundaries built in.</span>
          </>
        }
        description="A clear decision is not automatic permission to act. ShieldMSP’s intended safety architecture separates analysis, authorization, execution, and verification."
        mvp
      />
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">CONTROL BEFORE EXECUTION</p>
          <h2>The safety gate is the enforcement point.</h2>
          <div className="detail-grid">
            {[
              {
                n: "01 / RULE PRIMACY",
                title: "Decisions grounded in rules",
                body: "The deterministic rule engine leads the decision. AI can explain, add context, and recommend investigation; it cannot trigger a response independently.",
              },
              {
                n: "02 / FAIL CLOSED",
                title: "Uncertainty stops automation",
                body: "Unknown actions, invalid inputs, failed policy checks, or missing authorization block automated execution and route the incident for review.",
              },
              {
                n: "03 / ASSET CRITICALITY",
                title: "Critical systems need a person",
                body: "Tier 1 critical infrastructure and Tier 2 privileged endpoints require human approval, regardless of decision confidence.",
              },
              {
                n: "04 / TENANT CONTEXT",
                title: "The right action, in the right environment",
                body: "The design scopes incident data, credentials, and execution permissions to the owning tenant. Ownership validation is a response prerequisite.",
              },
            ].map((s) => (
              <div className="detail-card" key={s.n}>
                <p className="eyebrow">{s.n}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">THE DOCUMENTED ROUTING MODEL</p>
          <h2>
            Confidence informs the route.
            <br />
            Policy determines permission.
          </h2>
          <div className="table-wrap">
            <table className="capability-table">
              <thead>
                <tr>
                  <th scope="col">Decision confidence</th>
                  <th scope="col">Intended route</th>
                  <th scope="col">Additional requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>90% and above</td>
                  <td>Eligible for controlled response</td>
                  <td>
                    Confirmed rule, Tier 3/4 asset, allowed action, tenant
                    validation, and execution enabled.
                  </td>
                </tr>
                <tr>
                  <td>70% to below 90%</td>
                  <td>Notify and suggest</td>
                  <td>
                    A human considers the recommendation; confidence alone does
                    not authorize execution.
                  </td>
                </tr>
                <tr>
                  <td>Below 70%</td>
                  <td>Log and escalate</td>
                  <td>No automated endpoint action.</td>
                </tr>
                <tr>
                  <td>Any confidence · Tier 1/2</td>
                  <td>Human approval required</td>
                  <td>
                    Criticality takes precedence over the confidence band.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="notice">
            This describes the intended MVP routing model. Execution also
            depends on policy, provider capability, authorization, and completed
            calibration.
          </p>
        </div>
      </section>
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">SHADOW MODE</p>
          <h2>Build confidence before enabling action.</h2>
          <p>
            Shadow Mode observes alerts, evaluates rules, and records proposed
            outcomes without dispatching response commands. Calibration and
            human review precede controlled execution.
          </p>
          <div className="detail-grid">
            <div className="detail-card">
              <h3>Observe → Review → Calibrate</h3>
              <p>
                Compare recommendations against analyst assessment and
                investigate false positives before enabling a tenant’s response
                policies.
              </p>
            </div>
            <div className="detail-card">
              <h3>Dispatch → Verify → Record</h3>
              <p>
                An API request is not proof of containment. The intended
                workflow checks provider state, surfaces unconfirmed results,
                and records the outcome.
              </p>
            </div>
          </div>
          <div className="notice">
            Response scope is bounded. Identity containment, email containment,
            and persistence removal are future work. Endpoint isolation should
            not be presented as complete incident remediation.
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
