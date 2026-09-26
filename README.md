# Atelier

**A marketplace for production-ready, deployable websites.**

Atelier is a two-sided marketplace where professional creators publish fully-built, production-ready websites that business buyers can purchase, personalize, and launch — without writing any code.

---

## The Problem

AI has made generating websites cheap and fast — but it hasn't made *taste* and *judgment* cheap. Businesses are flooded with generic, templated output and still struggle to get a site that looks professional and actually works. Meanwhile, skilled creators have no clean way to sell polished, ready-to-ship websites as products.

## The Solution

Atelier connects the two. Creators publish deployable websites built to a defined standard; buyers browse, purchase, customize, and go live in minutes. The value isn't just generation — it's curated, high-quality work that's ready to run.

---

## How It Works

### For Buyers
1. Browse the marketplace and find a website that fits your business.
2. Purchase and instantly own it.
3. Personalize the content, branding, and details.
4. Deploy and go live — no coding required.

### For Creators
1. Build a production-ready website to Atelier's contract/standard.
2. Publish it to the marketplace.
3. Earn when buyers purchase your work.

---

## Architecture Overview

Atelier is built around two systems:

- **System 1 — Marketplace Platform:** Browse, buy, and own. The storefront and transaction layer where buyers discover and purchase websites.
- **System 2 — Build, Configure & Deploy Engine:** The core moat. Takes a purchased website through personalization and one-click deployment, with isolated, secure builds.

**Creator contract:** Each website ships with a defined config/manifest so it can be reliably configured and deployed through the platform.

---

## Key Features

- **Curated Quality** — Real, production-ready websites, not generic AI output.
- **Own It Instantly** — A license/entitlement model: buy once, own it.
- **No-Code Personalization** — Customize content and branding without touching code.
- **One-Click Deploy** — Go from purchase to live site fast.
- **Secure, Isolated Builds** — Every build runs in isolation as a day-one security requirement.
- **Creator Earnings** — A clean channel for creators to monetize their work.

---

## Who It's For

- **Businesses & founders** who need a professional website fast, without hiring an agency or fighting with builders.
- **Creators & developers** who want to sell polished, deployable websites as products.

---

## Why Atelier

An *atelier* is a workshop where skilled craftspeople produce refined, finished work. That's the promise: not raw, mass-generated output — but curated, ready-to-launch craft.

---

# Website v1: developer guide

Built with **Next.js 16**, **React 19** and **TypeScript**, and hand-written CSS. It exports to plain static HTML and can be hosted anywhere.

### Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
npm start          # preview /out
```

### Before you launch

Still to fill in:

| What | Where |
| --- | --- |
| Live demo URL (the button stays hidden while empty) | `src/content/templates.ts` → `links.demo` |
| Social links | `src/content/site.ts` |
| Production domain | `.env.local` → `NEXT_PUBLIC_SITE_URL` (copy `.env.example`) |

### Adding a template

1. Add screenshots to `public/templates/<slug>/`:

   | File | Size |
   | --- | --- |
   | `cover.webp` | 1440 × 900 (16:10), first screen: card thumbnail and share image |
   | `poster.webp` | optional, 1600 × 900 (16:9) video poster; the cover is used when it's missing |

2. Add an entry with `status: "available"` to `src/content/templates.ts`, with its price and YouTube walkthrough id (`video.youtubeId`). Set how it's bought:
   - `buy: { method: "store", url: "https://…gumroad.com/l/…" }` for a Gumroad (or other store) checkout, or
   - `buy: { method: "email" }` to have "Email to buy" buttons open a pre-filled email to `siteConfig.email`.

   Optional details (`stats`, `sections`, `specs`, `included`, `bestFor`, `version`) are hidden on the page when left out. It gets a card on the home page and a page at `/templates/<slug>/`.

Upcoming work uses `status: "in-studio"`: a card with a drawn wireframe in the template's palette, and no detail page. The three current in-studio entries are placeholders, so rename or delete them.

### Structure

```
src/
├── app/                 Routes: home, /templates/[slug], sitemap, robots, 404
├── content/             ← all copy, templates, prices and links
│   ├── site.ts          Brand, SEO, store link, contact
│   ├── templates.ts     The collection
│   └── home.ts          Home page copy (hero, standard, process, FAQ…)
├── components/
│   ├── layout/          Header, Footer
│   ├── home/            One component per home section
│   ├── template/        Detail-page parts
│   └── ui/              Browser frame, scroll preview, icons, reveal
└── styles/              tokens.css (colours, type) + one file per area
```

In copy, wrap a word in `*asterisks*` to set it in the italic accent.

### Deploying

`npm run build` writes a static site to `out/`. Upload it to Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host.
