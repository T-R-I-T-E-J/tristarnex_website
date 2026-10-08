"use client";
import { useState } from "react";
import {
  Check,
  ChevronRight,
  Cpu,
  FileCheck2,
  LockKeyhole,
  Radio,
  RotateCcw,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { demoScenarios, demoOutcome, type DemoMode } from "@/lib/demo";
const steps = [
  { label: "Signal", icon: Radio },
  { label: "Rules", icon: ScanLine },
  { label: "Context", icon: Sparkles },
  { label: "Safety", icon: LockKeyhole },
  { label: "Response", icon: Cpu },
  { label: "Audit", icon: FileCheck2 },
];
export function IncidentDemo() {
  const [mode, setMode] = useState<DemoMode>("standard");
  const [shadow, setShadow] = useState(false);
  const [step, setStep] = useState(0);
  const scenario = demoScenarios[mode];
  const outcome = demoOutcome(mode, shadow);
  const details = [
    {
      kicker: "01 / SECURITY SIGNAL",
      title: scenario.alert,
      body: "A sample Microsoft Defender alert enters the normalization pipeline. The alert and endpoint context remain scoped to the sample customer.",
      rows: [
        ["Source", "Microsoft Defender"],
        ["Endpoint", scenario.hostname],
        ["Customer", "Demo customer A"],
        ["Asset", scenario.tier],
      ],
    },
    {
      kicker: "02 / DETERMINISTIC RULES",
      title: "A rule leads the decision.",
      body: "The rule engine evaluates the normalized event and maps the match to MITRE ATT&CK. The score shown here is sample decision confidence, not authorization to act.",
      rows: [
        ["Rule", scenario.rule],
        ["MITRE ATT&CK", scenario.technique],
        ["Decision confidence", `${scenario.confidence}% · sample`],
        ["Authority", "Deterministic rule engine"],
      ],
    },
    {
      kicker: "03 / AI ASSISTANCE",
      title: "Context you can understand.",
      body: scenario.explanation,
      rows: [
        ["AI role", "Explanation & investigation support"],
        ["Execution access", "None"],
        ["Rule decision", "Read-only context"],
        ["Data", "Illustrative sample only"],
      ],
    },
    {
      kicker: "04 / SAFETY EVALUATION",
      title: shadow
        ? "Observation takes priority."
        : mode === "standard"
          ? "Checks before commands."
          : "Automation has a boundary.",
      body: "Confidence alone is insufficient. Rule confirmation, tenant ownership, action policy, asset criticality, and operating mode must permit the response.",
      rows: [
        ["Rule confirmation", "Matched"],
        ["Action policy", "Isolation allowed · sample"],
        [
          "Asset policy",
          mode === "critical" ? "Human approval required" : "Standard asset",
        ],
        [
          "Operating mode",
          shadow
            ? "Shadow · execution disabled"
            : "Controlled response · sample",
        ],
      ],
    },
    {
      kicker: "05 / RESPONSE ROUTING",
      title: outcome.title,
      body: outcome.message,
      rows: [
        ["Routed action", outcome.action],
        [
          "Endpoint command",
          outcome.state === "verified"
            ? "Simulated dispatch"
            : "Not dispatched",
        ],
        [
          "Human review",
          outcome.state === "escalate"
            ? "Required"
            : "No pending review in this sample",
        ],
        ["Environment", "Simulation only"],
      ],
    },
    {
      kicker: "06 / VERIFICATION & AUDIT",
      title: outcome.verified,
      body:
        outcome.state === "verified"
          ? "A sent command is not a completed response. This simulation confirms isolation and links the result to the original alert, matched rule, and safety decision."
          : "The audit trail records the decision and why execution did not proceed. No endpoint containment is claimed when no response command was dispatched.",
      rows: [
        ["Alert", "DEMO-INC-0042"],
        ["Audit record", "Signal · rule · policy · outcome"],
        ["Result", outcome.verified],
        ["Live systems", "No connection"],
      ],
    },
  ];
  const current = details[step];
  return (
    <div className="demo-shell">
      <div className="demo-toolbar">
        <span className="demo-wordmark">
          Shield<span>MSP</span>
          <small>PRODUCT WALKTHROUGH</small>
        </span>
        <span className="sample-badge">ILLUSTRATIVE DEMO · SAMPLE DATA</span>
      </div>
      <div className="demo-config">
        <div className="scenario-group" aria-label="Demo scenarios">
          {Object.entries(demoScenarios).map(([key, value]) => (
            <button
              key={key}
              aria-pressed={mode === key}
              className={mode === key ? "active" : ""}
              onClick={() => {
                setMode(key as DemoMode);
                setStep(0);
              }}
            >
              {value.name}
            </button>
          ))}
        </div>
        <button
          className="shadow-toggle"
          role="switch"
          aria-checked={shadow}
          onClick={() => {
            setShadow(!shadow);
            setStep(0);
          }}
        >
          <span className={shadow ? "switch on" : "switch"}>
            <span />
          </span>
          Shadow Mode
        </button>
      </div>
      <div className="demo-body">
        <nav className="demo-steps" aria-label="Incident stages">
          {steps.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setStep(i)}
              className={i === step ? "active" : i < step ? "completed" : ""}
              aria-current={i === step ? "step" : undefined}
            >
              <span className="demo-step-icon">
                {i < step ? <Check size={18} /> : <s.icon size={18} />}
              </span>
              <span>{s.label}</span>
              <small>0{i + 1}</small>
            </button>
          ))}
        </nav>
        <div className="demo-detail" aria-live="polite">
          <div className="demo-detail-head">
            <p className="eyebrow">{current.kicker}</p>
            <span className={`outcome-pill ${outcome.state}`}>
              {shadow
                ? "OBSERVE ONLY"
                : step >= 4
                  ? outcome.title
                  : "SAMPLE INCIDENT"}
            </span>
          </div>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          <div className="demo-facts">
            {current.rows.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="demo-actions">
            <button className="demo-reset" onClick={() => setStep(0)}>
              <RotateCcw size={15} /> Restart
            </button>
            <span className="mono">
              {step + 1} / {steps.length}
            </span>
            <button
              className="button primary small"
              onClick={() => setStep((step + 1) % steps.length)}
            >
              {step === 5 ? "Replay incident" : "Next stage"}
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="demo-disclaimer">
        <LockKeyhole size={14} /> A conceptual walkthrough of the intended MVP
        architecture. No live systems or customer data.
      </div>
    </div>
  );
}
