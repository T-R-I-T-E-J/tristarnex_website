import Link from "next/link";
export function Cta() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">LET’S BUILD WHAT COMES NEXT</p>
          <h2>
            Put control at the
            <br />
            center of your response.
          </h2>
        </div>
        <div>
          <p>
            Help shape ShieldMSP around
            <br />
            your MSP’s real-world operations.
          </p>
          <Link className="button primary" href="/contact">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
