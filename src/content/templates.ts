/**
 * The collection. Every template on the site comes from this file.
 *
 * - `status: "available"` templates get a card and a detail page at
 *   /templates/<slug>/. `buy` decides where the "Buy" buttons go: a store
 *   checkout page (Gumroad…) or an email to you asking for a payment link.
 * - `status: "in-studio"` templates are previews of upcoming work: a card
 *   with a drawn wireframe and a "follow" link, no detail page.
 *
 * Optional fields (stats, sections, specs, included…) are simply left off
 * the detail page when they are missing.
 *
 * To add a template: drop its images in /public/templates/<slug>/
 * (see README.md for the sizes) and add an entry below.
 */

export type Price = {
  amount: number;
  /** ISO 4217 code, e.g. "USD". */
  currency: string;
};

type BaseTemplate = {
  slug: string;
  /** Catalogue number shown as "No. 001". */
  number: string;
  name: string;
  category: string;
  /** One line under the name on cards. */
  summary: string;
  /** Two or three colours used for swatches and accents on the card. */
  palette: string[];
};

export type AvailableTemplate = BaseTemplate & {
  status: "available";
  /** Shown larger, across the full width of the collection grid. */
  featured?: boolean;
  tagline: string;
  /** Paragraphs for the detail page. */
  description: string[];
  bestFor?: string[];
  price: Price;
  /** "store": checkout page on Gumroad, Lemon Squeezy… "email": buyers email siteConfig.email. */
  buy: { method: "store"; url: string } | { method: "email" };
  /** Live demo of the template. Leave out to hide the button. */
  demo?: string;
  version?: string;
  /** ISO date of the latest release. */
  updated?: string;
  /** Big numbers on the detail page. */
  stats?: { value: string; label: string }[];
  /** Page sections, in order. */
  sections?: string[];
  features: { title: string; text: string }[];
  specs?: { label: string; value: string }[];
  /** What is inside the download. */
  included?: string[];
  images: {
    /** 1440 × 900 (16:10). Card thumbnail and share image. */
    cover: string;
    /** 1600 × 900 (16:9) video poster. Defaults to the cover. */
    poster?: string;
  };
  /** Walkthrough video on the detail page. */
  video: {
    /** The id in the YouTube URL, e.g. youtu.be/<id>. */
    youtubeId: string;
    title: string;
  };
};

export type StudioTemplate = BaseTemplate & {
  status: "in-studio";
  /** e.g. "Winter ’26". */
  eta: string;
};

export type Template = AvailableTemplate | StudioTemplate;

export const templates: Template[] = [
  {
    status: "available",
    featured: true,
    slug: "veloura",
    number: "001",
    name: "Veloura",
    category: "Retail",
    summary:
      "A premium Next.js 16 + React 19 landing page template for luxury gifting, boutiques, florists, jewelry and lifestyle brands.",
    tagline: "Luxury gifting & boutique landing page.",
    description: [
      "Veloura is a modern, elegant landing page template designed for gift shops, florists, jewelry boutiques, self-care brands, candle shops, and other premium lifestyle businesses.",
      "Built with Next.js 16, React 19, and TypeScript, Veloura combines a soft editorial design with smooth animations and interactive elements to create a premium shopping experience.",
      "It’s a great starting point for developers, agencies, and small businesses looking to launch a premium-looking gifting or boutique website without building everything from scratch.",
    ],
    bestFor: ["Gift shops", "Florists", "Jewelry boutiques", "Self-care brands", "Candle shops", "Lifestyle brands"],
    price: { amount: 15, currency: "USD" },
    buy: { method: "store", url: "https://ravitejas8.gumroad.com/l/akfybu" },
    version: "1.0.0",
    updated: "2026-09-26",
    palette: ["#8f6dc8", "#efe9f8", "#261a3b"],
    stats: [
      { value: "11", label: "Crafted sections" },
      { value: "100", label: "Lighthouse SEO" },
      { value: "0", label: "UI frameworks" },
      { value: "3", label: "Responsive breakpoints" },
    ],
    sections: [
      "Hero with parallax arch",
      "Crossing marquee ribbons",
      "Occasions panels",
      "The Lavender Edit bento grid",
      "Build-a-Box gift builder",
      "Our Studio sticky story",
      "Lavender-field quote",
      "Love Notes",
      "#Moments gallery",
      "Envelope newsletter",
      "Footer",
    ],
    features: [
      {
        title: "Interactive Build-a-Box",
        text: "Let customers select products, choose ribbon colors, add a personal gift message, and see the total price in real time.",
      },
      {
        title: "Bento product grid",
        text: "Showcase products with flexible layouts, badges, hover effects, and add-to-bag interactions.",
      },
      {
        title: "Premium visual design",
        text: "Elegant typography, lavender-inspired colors, subtle animations, parallax effects, and editorial-style layouts.",
      },
      {
        title: "Fully responsive",
        text: "Optimized layouts and interactions for desktop, tablet, and mobile devices.",
      },
      {
        title: "SEO & performance ready",
        text: "Structured metadata, JSON-LD, sitemap, robots.txt, Open Graph, and static HTML generation.",
      },
      {
        title: "Accessibility focused",
        text: "Semantic HTML, keyboard navigation, focus states, and reduced-motion support.",
      },
      {
        title: "Easy to customize",
        text: "Products, prices, text, images, colors, and links live in simple typed content files, so you don’t modify the core components.",
      },
      {
        title: "Developer friendly",
        text: "Clean TypeScript code, modular components, handwritten CSS, ESLint, and minimal dependencies.",
      },
      {
        title: "Easy deployment",
        text: "Ready for Vercel, Netlify, Cloudflare Pages, GitHub Pages, cPanel, or any standard web server.",
      },
    ],
    specs: [
      { label: "Version", value: "1.0.0 · updated 26 Sep 2026" },
      { label: "Built with", value: "Next.js 16, React 19, TypeScript, hand-written CSS" },
      { label: "Typefaces", value: "Cormorant Garamond, Manrope, Caveat" },
      { label: "Output", value: "Static HTML export, host anywhere" },
      { label: "Browsers", value: "Latest two versions of Chrome, Edge, Safari and Firefox" },
      { label: "License", value: "One end product, for you or one client" },
    ],
    included: [
      "Full Next.js source code",
      "Static build, ready to upload",
      "Getting started, customisation, images, SEO and deployment guides",
      "Commercial license for one end product",
      "Free updates to version 1.x",
    ],
    images: {
      cover: "/templates/veloura/cover.webp",
    },
    video: {
      youtubeId: "UrQCjoysoQQ",
      title: "Veloura walkthrough",
    },
  },

  {
    status: "available",
    slug: "velocity",
    number: "002",
    name: "Velocity",
    category: "Automotive",
    summary:
      "A dark, cinematic 3D showroom for a car launch: orbit the model, change the paint and rev the engine.",
    tagline: "A cinematic 3D car showroom landing page.",
    description: [
      "Velocity is a dark, cinematic landing page built around a real-time 3D car on a lit turntable. Visitors can orbit the car, jump between front, side, rear and top views, and switch between paint finishes.",
      "An engine start button, a rev control and a live RPM gauge, with a sound toggle in the header, make the page feel like a showroom rather than a brochure.",
      "Watch the walkthrough above to see it in motion. Velocity isn’t on a store yet: email to buy and you’ll get a payment link.",
    ],
    bestFor: ["Car launches", "Dealerships", "Automotive brands", "3D product showcases"],
    price: { amount: 20, currency: "USD" },
    buy: { method: "email" },
    palette: ["#22c55e", "#0e1511", "#050605"],
    stats: [
      { value: "3D", label: "Real-time model" },
      { value: "5", label: "Camera views" },
      { value: "7", label: "Paint finishes" },
    ],
    features: [
      {
        title: "Real-time 3D model",
        text: "An interactive 3D car on a lit turntable is the centrepiece of the first screen.",
      },
      {
        title: "Camera presets",
        text: "Jump to 360°, front, side, rear and top views, or let the camera orbit on its own.",
      },
      {
        title: "Paint configurator",
        text: "Swap between seven paint finishes, with the colour name shown live.",
      },
      {
        title: "Engine start & rev",
        text: "Start the engine, rev it and watch the RPM gauge respond.",
      },
      {
        title: "Sound toggle",
        text: "Engine audio with an on/off switch in the header.",
      },
      {
        title: "Specs & test drive",
        text: "Headline specs under the model and a test-drive call to action.",
      },
    ],
    images: {
      cover: "/templates/velocity/cover.webp",
      poster: "/templates/velocity/poster.webp",
    },
    video: {
      youtubeId: "KSv6PqZ5Stc",
      title: "Velocity walkthrough",
    },
  },

  // Upcoming work. Placeholder entries: rename, edit or delete them.
  {
    status: "in-studio",
    slug: "cafe",
    number: "003",
    name: "Café & bistro",
    category: "Hospitality",
    summary: "Menus, reservations and a warm, photographic story for independent restaurants.",
    palette: ["#b5562f", "#f3e6d4", "#2b1d14"],
    eta: "Winter ’26",
  },
  {
    status: "in-studio",
    slug: "portfolio",
    number: "004",
    name: "Studio portfolio",
    category: "Portfolio",
    summary: "A quiet, grid-led portfolio for architects, photographers and design studios.",
    palette: ["#3d4a3f", "#e9ebe4", "#121412"],
    eta: "Winter ’26",
  },
  {
    status: "in-studio",
    slug: "launch",
    number: "005",
    name: "Product launch",
    category: "SaaS",
    summary: "A crisp launch page with pricing, changelog and a waitlist for software products.",
    palette: ["#2f4bd8", "#eef0fb", "#0e1022"],
    eta: "Early ’27",
  },
];

export const availableTemplates = templates.filter((t): t is AvailableTemplate => t.status === "available");

export function getTemplate(slug: string): AvailableTemplate | undefined {
  return availableTemplates.find((t) => t.slug === slug);
}

export const categories = Array.from(new Set(templates.map((t) => t.category)));
