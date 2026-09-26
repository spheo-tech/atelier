/**
 * Global brand + SEO settings for the Atelier storefront.
 */

/** Used when no site URL is configured. Replace it with your domain. */
const FALLBACK_URL = "https://atelier.example.com";

/**
 * The production URL, from the first of these that is set:
 *   1. NEXT_PUBLIC_SITE_URL (.env.local or your host's dashboard)
 *   2. VERCEL_PROJECT_PRODUCTION_URL (set automatically on Vercel)
 *   3. FALLBACK_URL above
 */
function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() || FALLBACK_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return new URL(withProtocol).href.replace(/\/$/, "");
}

export const siteConfig = {
  name: "Atelier",
  tagline: "Websites, finished by hand.",
  url: resolveSiteUrl(),
  title: "Atelier | Production-ready website templates, finished by hand",
  description:
    "A small studio collection of production-ready website templates. Built with Next.js, scored 100 for SEO, documented end to end. Buy once, launch today.",
  keywords: [
    "website templates",
    "Next.js templates",
    "landing page templates",
    "React templates",
    "static site templates",
    "premium website templates",
  ],
  language: "en",
  locale: "en_US",
  themeColor: "#13110e",

  /** The maker behind the studio. Shown in the footer and in metadata. */
  author: "Raviteja Salva",

  /** Your store profile, where people browse and follow new releases. */
  storeUrl: "https://ravitejas8.gumroad.com/",
  storeName: "Gumroad",

  /** Contact address: questions, custom licenses, and buying templates that aren't on a store. */
  email: "ravitejastech@gmail.com",

  socials: [
    { label: "X / Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
} as const;
