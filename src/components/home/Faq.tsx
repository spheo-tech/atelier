import { faq } from "@/content/home";
import { siteConfig } from "@/content/site";
import { Plus } from "@/components/ui/Icons";

export function Faq() {
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__lead reveal">
          <span className="label label--rule">Questions</span>
          <h2 id="faq-title" className="section-title">
            Before you <em className="accent">buy</em>.
          </h2>
          <p className="muted">
            Something not covered here? Write to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and you’ll
            hear back from the person who built it.
          </p>
        </div>
        <div className="faq__list reveal">
          {faq.map((item, i) => (
            <details key={item.q} className="faq__item" open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <Plus className="faq__icon" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
