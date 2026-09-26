/**
 * Copy for the home page, section by section.
 * Wrap a word in *asterisks* to set it in the italic serif accent.
 */

export const hero = {
  eyebrow: "Collection Vol. 01 · Autumn ’26",
  title: ["Websites,", "*finished*", "by hand."],
  subtitle:
    "A small studio collection of production-ready website templates. Designed with taste, built in Next.js and documented end to end, so you can launch today instead of next quarter.",
  primaryCta: { label: "Browse the collection", href: "#collection" },
  secondaryCta: { label: "Read the standard", href: "#standard" },
  notes: [
    { value: "100", label: "Lighthouse SEO" },
    { value: "1 folder", label: "for all your content" },
    { value: "Any host", label: "static export" },
  ],
};

export const marquee = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Static export",
  "SEO 100",
  "JSON-LD",
  "Accessible",
  "Reduced-motion aware",
  "Self-hosted fonts",
  "Hand-written CSS",
  "Deploy anywhere",
];

export const collection = {
  eyebrow: "The collection",
  title: "Pieces made to *launch*, not to sit in a folder.",
  intro:
    "Each template is a complete, working website, not a kit of parts.",
};

export const standard = {
  eyebrow: "The Atelier standard",
  title: "Every piece meets the *same* standard.",
  intro:
    "Taste is the part you can see. The standard is the part you can’t: the details that decide whether a site actually ships and keeps working.",
  items: [
    {
      kind: "code",
      title: "All your content in one folder",
      text: "Copy, products, prices, images and links live in typed files. Rebrand without touching a component.",
    },
    {
      kind: "score",
      title: "Search-ready on day one",
      text: "Metadata, Open Graph, JSON-LD, sitemap and robots. Scored 100 for SEO in Lighthouse.",
    },
    {
      kind: "plain",
      title: "Prerendered HTML",
      text: "Static export. Fast on any connection, readable by every crawler.",
    },
    {
      kind: "plain",
      title: "Accessible by default",
      text: "Landmarks, labels, keyboard support, visible focus and reduced-motion support.",
    },
    {
      kind: "tokens",
      title: "One file of design tokens",
      text: "Colours, type, radius and easing as CSS variables. Re-theme in minutes.",
    },
    {
      kind: "hosts",
      title: "Deploy anywhere",
      text: "Step-by-step guides for every major host, or upload the out/ folder to any server.",
    },
  ],
  hosts: ["Vercel", "Netlify", "Cloudflare Pages", "GitHub Pages", "cPanel", "Nginx"],
};

export const howItWorks = {
  eyebrow: "From checkout to live",
  title: "Four steps. One *afternoon*.",
  steps: [
    {
      title: "Choose",
      text: "Pick a template that fits your business. Every preview here is the real page, section by section.",
      code: "",
    },
    {
      title: "Buy once",
      text: "Check out on Gumroad, or email for a payment link. One payment, no subscription, no account to create.",
      code: "",
    },
    {
      title: "Make it yours",
      text: "Edit the content folder and the token file. Your brand, your words, your photos.",
      code: "src/content/site.ts",
    },
    {
      title: "Go live",
      text: "Build once and upload. Vercel, Netlify, Cloudflare or any static host.",
      code: "npm run build",
    },
  ],
};

export const license = {
  eyebrow: "What you get",
  title: "Buy it once. *Own* the site.",
  points: [
    { title: "Complete source", text: "The full Next.js project, not a locked theme or a hosted builder." },
    { title: "Commercial license", text: "One license covers one website, for yourself or for one client." },
    { title: "Documentation", text: "Getting started, customisation, images, SEO and deployment guides." },
    { title: "Updates", text: "Free updates across the major version you bought." },
  ],
};

export const faq = [
  {
    q: "What exactly do I receive after buying?",
    a: "The full source code and everything that ships with the template. Templates on Gumroad download instantly after checkout; for the others, email me and I’ll send a payment link and the files.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not much. Text, prices, images and links are in plain, commented content files, and each template ships with a step-by-step customisation guide. Some comfort with a code editor and a terminal helps.",
  },
  {
    q: "Where can I host it?",
    a: "Anywhere that serves static files: Vercel, Netlify, Cloudflare Pages, GitHub Pages, cPanel, Nginx or S3. The deployment guide covers each one.",
  },
  {
    q: "Can I use a template for a client project?",
    a: "Yes. One license covers one end product, for you or for one client. Building more sites? Buy one license per site, or get in touch for a multi-site license.",
  },
  {
    q: "Can I resell or redistribute a template?",
    a: "No. You can modify it freely and charge your client for the finished site, but you can’t resell or share the template itself, modified or not.",
  },
  {
    q: "Are the demo photos included?",
    a: "No. Demo photos are loaded from Unsplash for preview purposes. Replace them with your own; the images guide lists every size.",
  },
  {
    q: "What if something doesn’t work?",
    a: "Email me. Every template is maintained, and fixes are shared with everyone who bought it.",
  },
];

export const closing = {
  title: "Make it *yours*.",
  text: "Pick a piece from the collection, put your name on it and go live this week.",
  cta: { label: "Browse the collection", href: "/#collection" },
  creator: {
    title: "Building templates of your own?",
    text: "Atelier will open to a few invited creators. Tell me what you make.",
    cta: "Get in touch",
  },
};
