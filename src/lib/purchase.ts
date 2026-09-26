import { siteConfig } from "@/content/site";
import type { AvailableTemplate } from "@/content/templates";
import { formatPrice } from "./utils";

export type BuyLink = {
  href: string;
  /** Full button label, e.g. "Buy on Gumroad". */
  label: string;
  /** Short label for tight spots, e.g. the mobile buy bar. */
  short: string;
  /** Opens in a new tab (store checkout) rather than the mail app. */
  external: boolean;
};

/** Where a template's "Buy" buttons point: its store page, or an email to the studio. */
export function buyLink(t: AvailableTemplate): BuyLink {
  if (t.buy.method === "store") {
    return { href: t.buy.url, label: `Buy on ${siteConfig.storeName}`, short: "Buy now", external: true };
  }
  const subject = `Buying ${t.name} (${formatPrice(t.price)})`;
  const body = `Hi,\n\nI'd like to buy the ${t.name} template. Could you send me a payment link?\n\nThanks!`;
  return {
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    label: "Email to buy",
    short: "Email to buy",
    external: false,
  };
}

/** Props for an <a> that follows a BuyLink. */
export function buyLinkProps(link: BuyLink) {
  return link.external ? { href: link.href, target: "_blank", rel: "noopener noreferrer" } : { href: link.href };
}
