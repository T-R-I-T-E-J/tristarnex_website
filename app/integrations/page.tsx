import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = {
  title: "Integrations & development direction",
  alternates: { canonical: "/integrations" },
};
const rows = [
  {
    name: "Microsoft Defender",
    status: "MVP focus",
    body: "Primary alert source for the API-based MVP; intended provider path for bounded endpoint response.",
  },
  {
    name: "Sigma & MITRE ATT&CK",
    status: "MVP design",
    body: "Deterministic rule evaluation and technique mapping provide decision and investigation context.",
  },
  {
    name: "AI assistance",
    status: "MVP design",
    body: "Context, explanations, and analyst recommendations; separate from action authorization.",
  },
  {
    name: "SentinelOne",
    status: "Planned adapter",
    body: "Secondary endpoint security source. Connector readiness and action coverage require validation.",
  },
  {
    name: "ConnectWise / Autotask",
    status: "Planned workflow",
    body: "Ticketing with incident context, response history, and escalation guidance.",
  },
  {
    name: "RMM platforms",
    status: "Planned workflow",
    body: "Deployment and operational integration, with scope and provider permissions to be validated.",
  },
  {
    name: "Identity & email",
    status: "Future scope",
    body: "Account and email containment extend beyond the endpoint-focused MVP.",
  },
  {
    name: "Custom agent & Linux",
    status: "Future scope",
    body: "Custom endpoint agent work is deferred. Broader operating-system coverage needs separate validation.",
  },
];
export default function Integrations() {
  return (
    <>
      <PageHero
        eyebrow="SHIELDMSP / INTEGRATIONS"
        title={
          <>
            Extend the tools
            <br />
            <span>you already trust.</span>
          </>
        }
        description="Your security provider remains the detection layer. ShieldMSP is being designed around provider alerts and scoped response APIs, beginning with Microsoft Defender."
        mvp
      />
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">DEVELOPMENT DIRECTION</p>
          <h2>A clear scope. An honest roadmap.</h2>
          <p>
            These labels describe intended MVP scope and planned development.
            They are not a claim of production availability or a certified
            partnership.
          </p>
          <div className="table-wrap">
            <table className="capability-table">
              <thead>
                <tr>
                  <th scope="col">Integration / capability</th>
                  <th scope="col">Development scope</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.name}>
                    <td>{r.name}</td>
                    <td>
                      <span className={`status-tag ${i > 2 ? "planned" : ""}`}>
                        {r.status}
                      </span>
                    </td>
                    <td>{r.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="notice">
            Provider permissions and response capabilities vary. During
            onboarding, supported actions, ownership boundaries, and escalation
            responsibilities must be confirmed for each environment.
          </div>
        </div>
      </section>
      <section className="detail-section">
        <div className="container">
          <h2>Keep detection where it belongs.</h2>
          <div className="detail-grid">
            <div className="detail-card">
              <h3>Signals in. Context preserved.</h3>
              <p>
                Provider-specific alerts are validated and normalized into a
                common schema. Source identity, customer ownership, endpoint,
                and rule context stay associated with the incident.
              </p>
            </div>
            <div className="detail-card">
              <h3>Commands out. Scope constrained.</h3>
              <p>
                Response depends on the provider’s validated capabilities and
                scoped credentials. Sending a command and verifying its result
                are separate stages.
              </p>
            </div>
          </div>
          <Link href="/contact" className="text-link">
            Discuss your MSP’s stack <span>↗</span>
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
