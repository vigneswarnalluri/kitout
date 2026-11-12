"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ContainerArt from "./ContainerArt";
import { models } from "@/lib/models";
import { nav, site } from "@/lib/site";

const tel = `tel:${site.phone.replace(/\s/g, "")}`;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const closeAll = () => {
    setMegaOpen(false);
    setDrawerOpen(false);
  };

  // Close menus after navigating.
  useEffect(closeAll, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // Stop the page scrolling behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMegaSoon = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Quote requests answered within one business day</span>
          <span className="topbar-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={tel}>{site.phone}</a>
          </span>
        </div>
      </div>

      <header className={scrolled ? "site-header scrolled" : "site-header"}>
        <div className="container header-inner">
          <Link href="/" className="logo" onClick={closeAll}>
            <span className="logo-mark" aria-hidden="true" />
            <span>
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main">
            {nav.map((item) =>
              item.href === "/models" ? (
                <div key={item.href} className="nav-drop" ref={dropRef} onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                  <button
                    type="button"
                    className={isActive(item.href) ? "nav-link active" : "nav-link"}
                    aria-expanded={megaOpen}
                    aria-controls="models-menu"
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {item.label}
                    <svg className="chev" viewBox="0 0 12 8" aria-hidden="true">
                      <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </button>
                  <div id="models-menu" className={megaOpen ? "mega open" : "mega"}>
                    <div className="mega-grid">
                      {models.map((m) => (
                        <Link key={m.slug} href={`/models/${m.slug}`} className="mega-item" onClick={closeAll} tabIndex={megaOpen ? 0 : -1}>
                          <ContainerArt variant={m.variant} body={m.body} label="" />
                          <span className="mega-tag">{m.tag}</span>
                          <strong>{m.name}</strong>
                          <span className="mega-facts">{m.area.split(" / ")[0]}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mega-foot">
                      <span>Not sure which one fits? Tell us about your plot and we will advise.</span>
                      <Link href="/models" className="text-link" onClick={closeAll} tabIndex={megaOpen ? 0 : -1}>
                        View all models <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={isActive(item.href) ? "nav-link active" : "nav-link"} onClick={closeAll}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="header-actions">
            <Link href="/contact#quote" className="btn btn-gold nav-cta" onClick={closeAll}>
              Get a Quote
            </Link>
            <button
              type="button"
              className={drawerOpen ? "burger open" : "burger"}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="mobile-menu"
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <span className="scroll-progress" aria-hidden="true" />

        <div id="mobile-menu" className={drawerOpen ? "drawer open" : "drawer"} aria-hidden={!drawerOpen}>
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className={isActive(item.href) ? "drawer-link active" : "drawer-link"} onClick={closeAll} tabIndex={drawerOpen ? 0 : -1}>
                  {item.label}
                </Link>
                {item.href === "/models" ? (
                  <div className="drawer-sub">
                    {models.map((m) => (
                      <Link key={m.slug} href={`/models/${m.slug}`} onClick={closeAll} tabIndex={drawerOpen ? 0 : -1}>
                        {m.name} <span>{m.tag}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <Link href="/contact#quote" className="btn btn-gold" onClick={closeAll} tabIndex={drawerOpen ? 0 : -1}>
            Get a Quote
          </Link>
          <p className="drawer-contact">
            <a href={`mailto:${site.email}`} tabIndex={drawerOpen ? 0 : -1}>{site.email}</a>
            <a href={tel} tabIndex={drawerOpen ? 0 : -1}>{site.phone}</a>
          </p>
        </div>
      </header>
    </>
  );
}
