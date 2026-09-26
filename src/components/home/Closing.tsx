import { closing } from "@/content/home";
import { siteConfig } from "@/content/site";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { RichText } from "@/components/ui/RichText";

export function Closing() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="container">
        <div className="closing__card reveal">
          <h2 id="closing-title" className="closing__title">
            <RichText text={closing.title} />
          </h2>
          <p className="closing__text">{closing.text}</p>
          <a className="btn btn--paper btn--lg" href={closing.cta.href}>
            {closing.cta.label}
            <ArrowRight />
          </a>

          <div className="closing__creator">
            <div>
              <h3>{closing.creator.title}</h3>
              <p>{closing.creator.text}</p>
            </div>
            <a className="link-arrow" href={`mailto:${siteConfig.email}?subject=Creating%20for%20Atelier`}>
              {closing.creator.cta} <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
