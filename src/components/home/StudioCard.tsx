import type { StudioTemplate } from "@/content/templates";
import { siteConfig } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ArrowUpRight } from "@/components/ui/Icons";

/** An upcoming template: a sketched wireframe in the template's palette. */
export function StudioCard({ template: t }: { template: StudioTemplate }) {
  const [accent, surface, ink] = t.palette;
  return (
    <article
      className="card card--studio"
      style={{ "--c-accent": accent, "--c-surface": surface, "--c-ink": ink } as React.CSSProperties}
    >
      <div className="card__preview">
        <BrowserFrame url={`${t.slug}.template`}>
          <div className="sketch" aria-hidden="true">
            <div className="sketch__nav">
              <i />
              <span />
              <span />
              <span />
            </div>
            <div className="sketch__hero">
              <div>
                <b />
                <b />
                <em />
                <u />
              </div>
              <figure />
            </div>
            <div className="sketch__row">
              <figure />
              <figure />
              <figure />
            </div>
          </div>
          <span className="stamp">In the studio</span>
        </BrowserFrame>
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span className="label">No. {t.number}</span>
          <span className="label">{t.category}</span>
          <span className="swatches" aria-hidden="true">
            {t.palette.map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </span>
        </div>
        <h3 className="card__name">{t.name}</h3>
        <p className="card__summary">{t.summary}</p>
        <div className="card__buy">
          <span className="eta">
            <span className="chip__dot" aria-hidden="true" />
            Expected {t.eta}
          </span>
          <a className="link-arrow" href={siteConfig.storeUrl} target="_blank" rel="noopener noreferrer">
            Follow for release <ArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}
