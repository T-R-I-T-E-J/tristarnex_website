import Link from "next/link";
import {
  Activity,
  Fingerprint,
  Layers3,
  ScanLine,
  Play,
  Check,
  LockKeyhole,
} from "lucide-react";
import { ControlPlane } from "@/components/ControlPlane";
import { IncidentDemo } from "@/components/IncidentDemo";
import { Cta } from "@/components/Cta";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="label-line" />
              SHIELDMSP · BUILT FOR MSPS
            </p>
            <h1>
              Security response.
              <br />
              Under your
              <br />
              <span>control.</span>
            </h1>
            <p className="hero-description">
              Turn security alerts into clear decisions and controlled actions.
              Meet the response layer built around your tools, your customers,
              and your judgment.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/contact">
                Let’s talk ShieldMSP
              </Link>
              <a className="button outline" href="#product-tour">
                <Play size={15} fill="currentColor" />
                See how it works
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-cross">+</span>Rules first. AI assisted.
              Human controlled.
            </div>
          </div>
          <div className="hero-art">
            <ControlPlane />
            <div className="art-caption">
              <span>THE RESPONSE CONTROL PLANE</span>
              <span>ARCHITECTURE CONCEPT / 01</span>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>YOUR DETECTION. OUR RESPONSE LAYER.</span>
          <div>
            <span>Deterministic decisions</span>
            <span>Bounded automation</span>
            <span>Verified response</span>
          </div>
          <a href="#platform" aria-label="Explore the platform below">
            ↓
          </a>
        </div>
      </section>
      <section
        className="ecosystem container"
        aria-label="Integration direction"
      >
        <p>
          Built to extend
          <br />
          <strong>the stack you trust.</strong>
        </p>
        <div className="provider">
          <span className="microsoft-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>
            Microsoft Defender<small>PRIMARY MVP FOCUS</small>
          </span>
        </div>
        <div className="provider">
          <Fingerprint size={34} />
          <span>
            SentinelOne<small>PLANNED ADAPTER</small>
          </span>
        </div>
        <div className="provider standards">
          <span className="sigma-mark">Σ</span>
          <span>
            Sigma + MITRE ATT&CK<small>RULES & THREAT CONTEXT</small>
          </span>
        </div>
      </section>
      <section className="section" id="platform">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / THE PLATFORM</p>
              <h2>
                The alert is only
                <br />
                the beginning.
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Detection tells you something happened.
                <br />
                ShieldMSP is designed to help you decide
                <br />
                what happens next.
              </p>
              <Link className="text-link" href="/platform">
                Explore the platform <span>↗</span>
              </Link>
            </div>
          </div>
          <div className="decision-strip">
            {[
              { icon: Activity, name: "Detect", text: "Ingest & normalize" },
              {
                icon: ScanLine,
                name: "Understand",
                text: "Rules & AI context",
              },
              { icon: LockKeyhole, name: "Decide", text: "Evaluate safety" },
              { icon: Layers3, name: "Respond", text: "Act within policy" },
              { icon: Check, name: "Verify", text: "Confirm & audit" },
            ].map((s, i) => (
              <div className="decision-step" key={s.name}>
                <span className="step-index">0{i + 1}</span>
                <s.icon size={27} strokeWidth={1.3} />
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                {i < 4 ? (
                  <span className="step-connector" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="platform-footnote">
            <span>One traceable path from signal to outcome.</span>
            <span>AI adds context. The rule engine owns the decision.</span>
          </div>
        </div>
      </section>
      <section className="section tour-section" id="product-tour">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / INSIDE SHIELDMSP</p>
              <h2>
                Less guessing.
                <br />A clearer next move.
              </h2>
            </div>
            <p className="heading-aside">
              Follow a sample alert through the decision pipeline. Change the
              asset or enable Shadow Mode to see how safety changes the outcome.
            </p>
          </div>
          <IncidentDemo />
        </div>
      </section>
      <section className="section safety-section">
        <div className="container safety-layout">
          <div>
            <p className="eyebrow">03 / SAFETY BY DESIGN</p>
            <h2>
              Intelligence is powerful.
              <br />
              <span>
                Boundaries make
                <br />
                it dependable.
              </span>
            </h2>
            <p className="section-description">
              Your customers’ systems deserve more than a confidence score.
              ShieldMSP’s safety model checks policy, permissions, and asset
              criticality before an action can proceed.
            </p>
            <Link className="button dark-button" href="/safety">
              Explore the safety model
            </Link>
          </div>
          <div className="safety-checklist">
            <div className="checklist-head">
              <LockKeyhole size={22} />
              <span>THE SAFETY GATE</span>
              <span className="mono">POLICY ENFORCED</span>
            </div>
            {[
              {
                n: "01",
                title: "Rule-confirmed decisions",
                body: "Deterministic rules lead. AI explains and supports.",
              },
              {
                n: "02",
                title: "Critical assets stay human controlled",
                body: "Servers and privileged endpoints require approval.",
              },
              {
                n: "03",
                title: "Observe before you automate",
                body: "Shadow Mode evaluates decisions without executing.",
              },
              {
                n: "04",
                title: "Every action has a record",
                body: "Trace the signal, decision, response, and result.",
              },
            ].map((s) => (
              <div className="safety-check" key={s.n}>
                <span className="mono">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <Check size={19} />
              </div>
            ))}
            <div className="checklist-bottom">
              If a required check fails, execution stops.
            </div>
          </div>
        </div>
      </section>
      <section className="section msp-section">
        <div className="container msp-layout">
          <div className="tenant-diagram">
            <div className="tenant-root">
              <Layers3 size={23} />
              <span>
                Your MSP workspace<small>ONE OPERATIONS LAYER</small>
              </span>
            </div>
            <div className="tenant-branches" aria-hidden="true" />
            <div className="tenant-clients">
              {["Customer A", "Customer B", "Customer C"].map((x, i) => (
                <div className="tenant-client" key={x}>
                  <span className="client-glyph">0{i + 1}</span>
                  <h3>{x}</h3>
                  <span className="mono">ISOLATED CONTEXT</span>
                  <div className="endpoint-icons">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ))}
            </div>
            <p className="diagram-note">
              Conceptual tenant model · illustrative environments
            </p>
          </div>
          <div>
            <p className="eyebrow">04 / PURPOSE BUILT FOR MSPS</p>
            <h2>
              More customers.
              <br />
              Same clarity.
            </h2>
            <p className="section-description">
              A shared view of security operations, with distinct boundaries for
              each customer. Keep incident context, execution permissions, and
              audit records tied to the right environment.
            </p>
            <div className="inline-features">
              <span>
                <Check size={16} />
                Tenant-scoped decisions
              </span>
              <span>
                <Check size={16} />
                Clear human escalation
              </span>
              <span>
                <Check size={16} />
                Traceable outcomes
              </span>
            </div>
            <Link className="text-link" href="/platform#for-msps">
              Built around your workflow <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
