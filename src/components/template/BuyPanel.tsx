import type { AvailableTemplate } from "@/content/templates";
import { siteConfig } from "@/content/site";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import { buyLink, buyLinkProps } from "@/lib/purchase";
import { formatPrice } from "@/lib/utils";

export function BuyPanel({ template: t }: { template: AvailableTemplate }) {
  const buy = buyLink(t);
  const byEmail = t.buy.method === "email";

  return (
    <aside className="buy-panel" aria-label="Purchase">
      <div className="buy-panel__price">
        <span className="price">
          {formatPrice(t.price)}
          <small>{t.price.currency} · one-time</small>
        </span>
      </div>
      <a className="btn btn--accent btn--lg btn--block" {...buyLinkProps(buy)}>
        {buy.label}
        <ArrowUpRight />
      </a>
      {t.demo && (
        <a className="btn btn--ghost btn--lg btn--block" href={t.demo} target="_blank" rel="noopener noreferrer">
          Open live demo
          <ArrowUpRight />
        </a>
      )}
      <ul className="buy-panel__list">
        {byEmail ? (
          <>
            <li>
              <Check /> Email and get a payment link
            </li>
            <li>
              <Check /> Source code sent after payment
            </li>
          </>
        ) : (
          <>
            <li>
              <Check /> Instant download after checkout
            </li>
            <li>
              <Check /> License for one website
            </li>
            {t.version && (
              <li>
                <Check /> Free updates to v{t.version.split(".")[0]}.x
              </li>
            )}
          </>
        )}
      </ul>
      <p className="buy-panel__note">
        {byEmail ? (
          <>
            Not on a store yet. Write to <a href={buy.href}>{siteConfig.email}</a> and you’ll hear back personally.
          </>
        ) : (
          <>Secure checkout on {siteConfig.storeName}. You’ll get an email with your download.</>
        )}
      </p>
    </aside>
  );
}
