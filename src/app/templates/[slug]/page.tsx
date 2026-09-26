import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyPanel } from "@/components/template/BuyPanel";
import { VideoPlayer } from "@/components/template/VideoPlayer";
import { ArrowLeft, ArrowUpRight, Check } from "@/components/ui/Icons";
import { siteConfig } from "@/content/site";
import { availableTemplates, getTemplate, templates } from "@/content/templates";
import { buyLink, buyLinkProps } from "@/lib/purchase";
import { formatPrice } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return availableTemplates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTemplate((await params).slug);
  if (!t) return {};
  const title = `${t.name}: ${t.category} website template`;
  return {
    title,
    description: t.summary,
    alternates: { canonical: `/templates/${t.slug}/` },
    openGraph: {
      title,
      description: t.summary,
      url: `/templates/${t.slug}/`,
      images: [{ url: t.images.cover, width: 1440, height: 900, alt: `${t.name} template` }],
    },
    twitter: { card: "summary_large_image", title, description: t.summary, images: [t.images.cover] },
  };
}

export default async function TemplatePage({ params }: Props) {
  const t = getTemplate((await params).slug);
  if (!t) notFound();

  const others = templates.filter((o) => o.slug !== t.slug);
  const buy = buyLink(t);
  const pageUrl = `${siteConfig.url}/templates/${t.slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${t.name} website template`,
    description: t.summary,
    image: `${siteConfig.url}${t.images.cover}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      price: t.price.amount,
      priceCurrency: t.price.currency,
      availability: "https://schema.org/InStock",
      url: buy.external ? buy.href : pageUrl,
    },
  };

  return (
    <article
      className="piece"
      style={{ "--c-accent": t.palette[0], "--c-surface": t.palette[1], "--c-ink": t.palette[2] } as React.CSSProperties}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="piece-head container">
        <Link href="/#collection" className="back-link">
          <ArrowLeft /> The collection
        </Link>

        <div className="piece-head__grid">
          <div className="piece-head__lead">
            <div className="piece-head__meta">
              <span className="label">No. {t.number}</span>
              <span className="label">{t.category}</span>
              {t.version && <span className="label">v{t.version}</span>}
              <span className="swatches" aria-hidden="true">
                {t.palette.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </span>
            </div>
            <h1 className="piece-head__title">{t.name}</h1>
            <p className="piece-head__tagline">{t.tagline}</p>
            {t.bestFor && (
              <div className="piece-head__best">
                <span className="label">Made for</span>
                <ul className="tags">
                  {t.bestFor.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <BuyPanel template={t} />
        </div>
      </header>

      <section className="container showcase" aria-label={`${t.name} video walkthrough`}>
        <div className="showcase__stage reveal">
          <VideoPlayer youtubeId={t.video.youtubeId} title={t.video.title} poster={t.images.poster ?? t.images.cover} />
        </div>
      </section>

      {t.stats && (
        <section
          className="container piece-stats reveal"
          aria-label="At a glance"
          style={{ "--n": t.stats.length } as React.CSSProperties}
        >
          {t.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>
      )}

      <section className={`container piece-about${t.sections ? "" : " piece-about--solo"}`} aria-labelledby="about-title">
        <div className="reveal">
          <span className="label label--rule">About the piece</span>
          <h2 id="about-title" className="section-title section-title--sm">
            The <em className="accent">brief</em>.
          </h2>
          {t.description.map((p) => (
            <p key={p.slice(0, 24)} className="piece-about__p">
              {p}
            </p>
          ))}
        </div>
        {t.sections && (
          <div className="piece-sections reveal">
            <span className="label label--rule">{t.sections.length} sections, in order</span>
            <ol>
              {t.sections.map((s, i) => (
                <li key={s}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      <section className="container piece-features" aria-labelledby="features-title">
        <div className="section-head reveal">
          <span className="label label--rule">Under the hood</span>
          <h2 id="features-title" className="section-title section-title--sm">
            Built to the <em className="accent">standard</em>.
          </h2>
        </div>
        <ul className="features">
          {t.features.map((f, i) => (
            <li key={f.title} className="reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <span className="bento__num">0{i + 1}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {(t.specs || t.included) && (
        <section className="container piece-specs" aria-labelledby="specs-title">
          {t.specs && (
            <div className="reveal">
              <span className="label label--rule">Specifications</span>
              <h2 id="specs-title" className="visually-hidden">
                Specifications
              </h2>
              <dl className="specs">
                {t.specs.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          {t.included && (
            <div className="box reveal">
              <span className="label label--rule">In the box</span>
              <ul>
                {t.included.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="container piece-cta reveal" aria-labelledby="cta-title">
        <div className="piece-cta__card">
          <div>
            <span className="label">No. {t.number}</span>
            <h2 id="cta-title" className="piece-cta__title">
              Make {t.name} <em className="accent">yours</em>.
            </h2>
          </div>
          <div className="piece-cta__buy">
            <span className="price price--light">
              {formatPrice(t.price)}
              <small>one-time</small>
            </span>
            <a className="btn btn--paper btn--lg" {...buyLinkProps(buy)}>
              {buy.label}
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="container more" aria-labelledby="more-title">
          <span id="more-title" className="label label--rule">
            More from the studio
          </span>
          <ul className="more__list">
            {others.map((o) => (
              <li key={o.slug}>
                {o.status === "available" ? (
                  <Link href={`/templates/${o.slug}/`}>
                    <span className="label">No. {o.number}</span>
                    <span className="more__name">{o.name}</span>
                    <span className="muted">{o.category}</span>
                  </Link>
                ) : (
                  <Link href="/#collection">
                    <span className="label">No. {o.number}</span>
                    <span className="more__name">{o.name}</span>
                    <span className="muted">In the studio · {o.eta}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="buy-bar" role="region" aria-label="Purchase">
        <div>
          <strong>{t.name}</strong>
          <span>{formatPrice(t.price)}</span>
        </div>
        <a className="btn btn--accent" {...buyLinkProps(buy)}>
          {buy.short} <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}
