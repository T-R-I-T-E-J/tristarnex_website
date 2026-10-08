// Public conceptual demo. No live provider connections.
// Routing follows Implementation Roadmap v2, Phase 3 (90 / 70).
export type DemoMode = "standard" | "critical" | "uncertain";
export const demoScenarios = {
  standard: {
    name: "Standard workstation",
    hostname: "DEMO-WS-042",
    tier: "Tier 3 · Standard",
    confidence: 92,
    technique: "T1486",
    alert: "Ransomware execution indicator",
    rule: "Ransomware execution indicator",
    explanation:
      "The sample alert is categorized as ransomware and matches the deterministic rule. Isolation can be considered if every safety check passes.",
  },
  critical: {
    name: "Critical server",
    hostname: "DEMO-DC-001",
    tier: "Tier 1 · Critical",
    confidence: 92,
    technique: "T1486",
    alert: "Ransomware execution indicator",
    rule: "Ransomware execution indicator",
    explanation:
      "The rule confirms the sample alert, but this endpoint is a critical asset. An authorized person must review the response regardless of confidence.",
  },
  uncertain: {
    name: "Uncertain activity",
    hostname: "DEMO-WS-018",
    tier: "Tier 3 · Standard",
    confidence: 65,
    technique: "T1550.002",
    alert: "Potential lateral movement",
    rule: "Potential pass-the-hash",
    explanation:
      "This sample has insufficient decision confidence for automated response. Context and recommended investigation steps are routed to a human.",
  },
} as const;
export function demoOutcome(mode: DemoMode, shadow: boolean) {
  if (shadow)
    return {
      title: "Observe only",
      message:
        "Decision recorded. No command dispatched while Shadow Mode is enabled.",
      action: "No endpoint change",
      verified: "Observation recorded",
      state: "shadow",
    };
  if (mode === "critical")
    return {
      title: "Human approval required",
      message:
        "Critical asset policy blocks automated execution, even with a confirmed rule and high confidence.",
      action: "Escalate for human review",
      verified: "Escalation recorded",
      state: "escalate",
    };
  if (mode === "uncertain")
    return {
      title: "Escalated for review",
      message:
        "Decision confidence is below the routing threshold. No automated endpoint action is authorized.",
      action: "Log and escalate",
      verified: "Escalation recorded",
      state: "escalate",
    };
  return {
    title: "Response verified",
    message:
      "All sample safety checks pass. The simulation dispatches isolation and confirms the endpoint state.",
    action: "Simulated endpoint isolation",
    verified: "Simulated state confirmed",
    state: "verified",
  };
}
