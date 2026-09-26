import { howItWorks } from "@/content/home";
import { RichText } from "@/components/ui/RichText";

export function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="label label--rule">{howItWorks.eyebrow}</span>
          <h2 id="process-title" className="section-title">
            <RichText text={howItWorks.title} />
          </h2>
        </div>

        <ol className="steps">
          {howItWorks.steps.map((s, i) => (
            <li key={s.title} className="step reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step__title">{s.title}</h3>
              <p>{s.text}</p>
              {s.code && <code className="step__code">{s.code}</code>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
