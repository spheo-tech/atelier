"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { ArrowUpRight } from "@/components/ui/Icons";
import { cx } from "@/lib/utils";

const links = [
  { label: "Collection", href: "/#collection" },
  { label: "Standard", href: "/#standard" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cx("site-header", scrolled && "is-scrolled", open && "is-open")}>
      <div className="site-header__inner">
        <Link href="/" className="wordmark" aria-label={`${siteConfig.name}, home`}>
          <span className="wordmark__mark" aria-hidden="true">
            A
          </span>
          <span className="wordmark__text">{siteConfig.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="site-nav__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--ink btn--sm" href={`mailto:${siteConfig.email}`}>
            Contact
            <ArrowUpRight />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span className="mobile-menu__num">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="btn btn--ink" href={`mailto:${siteConfig.email}`}>
          Contact
          <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
