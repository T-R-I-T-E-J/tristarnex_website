export function PageHero({
  eyebrow,
  title,
  description,
  mvp = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  mvp?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-kicker">
          <p className="eyebrow">{eyebrow}</p>
          {mvp ? <span className="mvp-tag">MVP IN DEVELOPMENT</span> : null}
        </div>
        <h1>{title}</h1>
        <p className="intro">{description}</p>
      </div>
    </section>
  );
}
