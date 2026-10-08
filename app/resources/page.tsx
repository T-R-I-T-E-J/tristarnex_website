import type { Metadata } from "next";
import Link from "next/link";
import { Workflow, LockKeyhole, Plug } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = {
  title: "ShieldMSP resources",
  alternates: { canonical: "/resources" },
};
const faqs = [
  {
    q: "Is ShieldMSP a replacement for our EDR?",
    a: "No. Detection stays with the existing security provider. ShieldMSP is being built as the decision and controlled response layer above provider alerts.",
  },
  {
    q: "Does AI decide which endpoints to isolate?",
    a: "AI provides assistance and context. The deterministic rule engine leads the decision, and the safety gate enforces authorization and policy before a permitted action can proceed.",
  },
  {
    q: "Can we evaluate the system without endpoint changes?",
    a: "Shadow Mode is part of the intended safety architecture. It observes, evaluates, and records proposed outcomes without executing response commands.",
  },
  {
    q: "What happens to a critical server?",
    a: "The documented model routes Tier 1 critical systems and Tier 2 privileged endpoints to human approval, regardless of the confidence score.",
  },
  {
    q: "Is ShieldMSP production-ready?",
    a: "ShieldMSP is in MVP development. The website demonstrates the intended architecture with sample data. Production readiness, provider support, and pilot scope must be confirmed directly with the team.",
  },
  {
    q: "Where can I get technical documentation?",
    a: "Contact the Tristarnex team to discuss the current implementation, integration requirements, and appropriate technical material. The public platform and safety pages provide a conceptual overview.",
  },
];
export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="TRISTARNEX / RESOURCES"
        title={
          <>
            Understand the system.
            <br />
            <span>Know the boundaries.</span>
          </>
        }
        description="Start with the product architecture, explore the safety model, and see where integrations fit. Clear explanations for the teams evaluating ShieldMSP."
      />
      <section className="detail-section">
        <div className="container">
          <h2>A closer look at ShieldMSP.</h2>
          <div className="resource-list">
            {[
              {
                icon: Workflow,
                title: "The decision pipeline",
                body: "Follow an alert from validated ingestion to a verified response and audit record.",
                href: "/platform",
                label: "Explore the architecture",
              },
              {
                icon: LockKeyhole,
                title: "Safety & human control",
                body: "Understand rule primacy, asset criticality, Shadow Mode, and execution boundaries.",
                href: "/safety",
                label: "Read the safety model",
              },
              {
                icon: Plug,
                title: "Integration direction",
                body: "See the intended MVP foundation and the capabilities on the roadmap.",
                href: "/integrations",
                label: "View integration scope",
              },
            ].map((s) => (
              <article className="resource-card" key={s.href}>
                <s.icon size={35} strokeWidth={1.3} />
                <p className="eyebrow">PRODUCT EXPLAINER</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link className="text-link" href={s.href}>
                  {s.label}
                  <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-section">
        <div className="container">
          <p className="eyebrow">COMMON QUESTIONS</p>
          <h2>Clarity before commitment.</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
