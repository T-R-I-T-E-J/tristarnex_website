import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { IncidentDemo } from "@/components/IncidentDemo";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = {
  title: "ShieldMSP platform",
  alternates: { canonical: "/platform" },
};
const pipeline = [
  {
    name: "Ingest & validate",
    text: "Security-provider alerts enter a tenant-scoped pipeline. Source and schema validation come before processing.",
  },
  {
    name: "Normalize & deduplicate",
    text: "A common alert format makes provider events usable by the rule engine. Duplicate signals are identified before repeated decisions.",
  },
  {
    name: "Evaluate deterministic rules",
    text: "Sigma rules classify the alert, associate MITRE ATT&CK context, and produce a reproducible decision. The rule engine is the primary authority.",
  },
  {
    name: "Add AI context",
    text: "AI provides explanations and investigation recommendations as an assistance layer. It cannot independently authorize or dispatch endpoint actions.",
  },
  {
    name: "Enforce the safety gate",
    text: "Rule confirmation, confidence routing, asset tier, tenant ownership, and permitted actions determine whether response can proceed or must escalate.",
  },
  {
    name: "Respond, verify & audit",
    text: "Only permitted actions can be dispatched through the relevant provider. Response state is checked and the decision and outcome are recorded.",
  },
];
export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="SHIELDMSP / PLATFORM"
        title={
          <>
            From security signal
            <br />
            to <span>considered action.</span>
          </>
        }
        description="A constrained decision and response layer for MSPs. ShieldMSP is being built to extend your existing endpoint security tools, with deterministic rules, AI assistance, and policy-controlled execution."
        mvp
      />
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">THE ARCHITECTURE</p>
          <h2>Every step has a purpose.</h2>
          <p>
            Detection remains with your security provider. ShieldMSP’s role
            begins with the alert and continues through decision, safe response,
            verification, and audit.
          </p>
          <div className="architecture-list">
            {pipeline.map((s, i) => (
              <div className="architecture-row" key={s.name}>
                <span className="mono">0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="notice">
            AI is an assistance layer alongside the decision pipeline. It does
            not replace the rule engine or bypass the safety gate.
          </div>
        </div>
      </section>
      <section className="detail-section" id="tour">
        <div className="container">
          <p className="eyebrow">INTERACTIVE WALKTHROUGH</p>
          <h2>See the boundaries in action.</h2>
          <p>
            Explore sample outcomes for a standard workstation, critical server,
            and uncertain activity.
          </p>
          <div style={{ marginTop: 35 }}>
            <IncidentDemo />
          </div>
        </div>
      </section>
      <section className="detail-section" id="for-msps">
        <div className="container">
          <p className="eyebrow">THE MSP WORKFLOW</p>
          <h2>Clear context. The right owner.</h2>
          <div className="detail-grid">
            <div className="detail-card">
              <p className="eyebrow">OPERATIONS</p>
              <h3>One view, distinct environments.</h3>
              <p>
                The intended workspace brings incidents and outcomes together
                while preserving customer context and tenant-scoped execution
                permissions.
              </p>
              <ul>
                <li>Matched rules and plain-English explanations</li>
                <li>Criticality and response status for each endpoint</li>
                <li>Escalations with the reason a human is needed</li>
              </ul>
            </div>
            <div className="detail-card">
              <p className="eyebrow">ACCOUNTABILITY</p>
              <h3>A decision you can trace.</h3>
              <p>
                The audit model links the original alert to its rules, safety
                evaluation, action, verification, and responsible actor.
              </p>
              <ul>
                <li>Human and system actions remain distinguishable</li>
                <li>Blocked and observe-only decisions are recorded</li>
                <li>Reconnection follows an authorized review</li>
              </ul>
            </div>
          </div>
          <Link className="text-link" href="/integrations">
            Explore the integration direction <span>↗</span>
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
