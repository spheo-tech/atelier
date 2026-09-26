import Link from "next/link";
import { siteConfig } from "@/content/site";
import { availableTemplates } from "@/content/templates";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__intro">
            <p className="site-footer__tagline">{siteConfig.tagline}</p>
            <p className="muted">
              A one-person studio making production-ready websites. Questions, custom licenses or a template you’d like to
              see? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>

          <div className="site-footer__cols">
            <div>
              <h2 className="label">Templates</h2>
              <ul>
                {availableTemplates.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/templates/${t.slug}/`}>{t.name}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/#collection">In the studio</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="label">Studio</h2>
              <ul>
                <li>
                  <Link href="/#standard">The standard</Link>
                </li>
                <li>
                  <Link href="/#process">How it works</Link>
                </li>
                <li>
                  <Link href="/#faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="label">Elsewhere</h2>
              <ul>
                <li>
                  <a href={siteConfig.storeUrl} target="_blank" rel="noopener noreferrer">
                    {siteConfig.storeName}
                  </a>
                </li>
                {siteConfig.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="site-footer__word" aria-hidden="true">
          Atelier<span>.</span>
        </p>

        <div className="site-footer__bottom">
          <span>
            © {year} {siteConfig.name}. Made by {siteConfig.author}.
          </span>
          <span>Checkout on {siteConfig.storeName} or by email.</span>
        </div>
      </div>
    </footer>
  );
}
