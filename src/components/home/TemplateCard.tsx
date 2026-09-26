import Link from "next/link";
import type { AvailableTemplate } from "@/content/templates";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { buyLink, buyLinkProps } from "@/lib/purchase";
import { cx, formatPrice } from "@/lib/utils";

export function TemplateCard({ template: t }: { template: AvailableTemplate }) {
  const href = `/templates/${t.slug}/`;
  const buy = buyLink(t);
  return (
    <article className={cx("card", t.featured && "card--featured")}>
      <Link href={href} className="card__preview" aria-label={`${t.name}: view details`}>
        <BrowserFrame url={`${t.slug}.template`}>
          <img className="card__thumb" src={t.images.cover} alt={`${t.name} template preview`} loading="lazy" decoding="async" />
        </BrowserFrame>
      </Link>

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

        <h3 className="card__name">
          <Link href={href}>{t.name}</Link>
        </h3>
        <p className="card__summary">{t.summary}</p>

        {t.featured && t.bestFor && (
          <ul className="tags" aria-label="Made for">
            {t.bestFor.slice(0, 4).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}

        <div className="card__buy">
          <span className="price">
            {formatPrice(t.price)}
            <small>one-time</small>
          </span>
          <div className="card__actions">
            <Link className="btn btn--ghost" href={href}>
              Details
              <ArrowRight />
            </Link>
            <a className="btn btn--accent" {...buyLinkProps(buy)}>
              {buy.label}
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
