import { license } from "@/content/home";
import { availableTemplates } from "@/content/templates";
import { Check } from "@/components/ui/Icons";
import { RichText } from "@/components/ui/RichText";
import { formatPrice } from "@/lib/utils";

export function License() {
  const cheapest = availableTemplates.reduce<(typeof availableTemplates)[number] | undefined>(
    (min, t) => (!min || t.price.amount < min.price.amount ? t : min),
    undefined,
  );

  return (
    <section className="section license" aria-labelledby="license-title">
      <div className="container license__inner reveal">
        <div className="license__lead">
          <span className="label label--rule">{license.eyebrow}</span>
          <h2 id="license-title" className="section-title">
            <RichText text={license.title} />
          </h2>
          {cheapest && (
            <p className="license__price">
              <span className="label">From</span>
              <strong>{formatPrice(cheapest.price)}</strong>
              <span className="muted">one-time, per website</span>
            </p>
          )}
        </div>
        <ul className="license__points">
          {license.points.map((p) => (
            <li key={p.title}>
              <span className="tick" aria-hidden="true">
                <Check />
              </span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
