import { hero } from "@/content/home";
import { availableTemplates, templates } from "@/content/templates";
import { ArrowRight } from "@/components/ui/Icons";
import { RichText } from "@/components/ui/RichText";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__top">
          <span className="chip">
            <span className="chip__dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <span className="label hero__count">
            {String(availableTemplates.length).padStart(2, "0")} available · {templates.length - availableTemplates.length}{" "}
            in the studio
          </span>
        </div>

        <div className="hero__grid">
        <h1 id="hero-title" className="hero__title">
          {hero.title.map((line, i) => (
            <span key={i} className="hero__line" style={{ animationDelay: `${120 + i * 110}ms` }}>
              <RichText text={line} />
            </span>
          ))}
        </h1>

        <div className="hero__aside">
          <p className="hero__sub">{hero.subtitle}</p>
          <div className="hero__ctas">
            <a className="btn btn--ink btn--lg" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight />
            </a>
            <a className="btn btn--ghost btn--lg" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <dl className="hero__notes">
            {hero.notes.map((n) => (
              <div key={n.label}>
                <dt>{n.value}</dt>
                <dd>{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        </div>
      </div>

    </section>
  );
}
