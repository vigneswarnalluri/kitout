"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { models } from "@/lib/models";
import { nav, site } from "@/lib/site";

const tel = `tel:${site.phone.replace(/\s/g, "")}`;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [marker, setMarker] = useState<{ left: number; width: number } | null>(null);

  const barRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);
  const menuOpen = useRef(false);
  const target = useRef<Element | null>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const closeAll = () => {
    setMegaOpen(false);
    setDrawerOpen(false);
  };

  // The sliding highlight: position it over a link, measured against the bar.
  const moveTo = useCallback((el: Element | null) => {
    target.current = el;
    const bar = barRef.current;
    if (!el || !bar) return setMarker(null);
    const a = el.getBoundingClientRect();
    const b = bar.getBoundingClientRect();
    setMarker({ left: a.left - b.left - 1, width: a.width });
  }, []);
  const toActive = useCallback(() => moveTo(barRef.current?.querySelector(".nav-link.active") ?? null), [moveTo]);

  useEffect(() => {
    menuOpen.current = megaOpen || drawerOpen;
  }, [megaOpen, drawerOpen]);

  // After navigating: close menus and rest the highlight on the current page.
  useEffect(() => {
    closeAll();
    setHidden(false);
    toActive();
  }, [pathname, toActive]);

  // The logo shrinks when the bar goes compact, which slides the links sideways.
  // Re-measure whenever anything in the bar changes size, so the highlight stays on its link.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => moveTo(target.current?.isConnected ? target.current : bar.querySelector(".nav-link.active")));
    Array.from(bar.children).forEach((c) => ro.observe(c));
    return () => ro.disconnect();
  }, [moveTo]);

  useEffect(() => {
    document.fonts?.ready.then(toActive);
    window.addEventListener("resize", toActive);
    return () => window.removeEventListener("resize", toActive);
  }, [toActive]);

  // Compact style once scrolled; hide on the way down, show on the way up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (!menuOpen.current) {
        if (y > 500 && y > lastY.current + 6) setHidden(true);
        else if (y < lastY.current - 6 || y <= 500) setHidden(false);
      }
      lastY.current = y;
    };
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
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  };

  const headerClass = ["site-header", scrolled || drawerOpen ? "scrolled" : "", hidden ? "tucked" : ""].filter(Boolean).join(" ");

  return (
    <>
      <header className={headerClass} onFocus={() => setHidden(false)}>
        <div className="container">
          <div className="navbar cast" ref={barRef}>
            <Link href="/" className="logo" onClick={closeAll} aria-label={`${site.name} ${site.tagline}, home`}>
              <Image src="/images/brand/logo-white.png" alt={`${site.name} ${site.tagline}`} width={1180} height={336} priority />
            </Link>

            <span className="nav-marker" aria-hidden="true" style={marker ? { left: marker.left, width: marker.width, opacity: 1 } : { opacity: 0 }} />

            <nav className="main-nav" aria-label="Main" onMouseLeave={toActive}>
              {nav.map((item) =>
                item.href === "/models" ? (
                  <div key={item.href} className="nav-drop" ref={dropRef} onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                    <button
                      type="button"
                      className={isActive(item.href) ? "nav-link active" : "nav-link"}
                      aria-expanded={megaOpen}
                      aria-controls="models-menu"
                      onMouseEnter={(e) => moveTo(e.currentTarget)}
                      onFocus={(e) => moveTo(e.currentTarget)}
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
                            <span className="mega-thumb">
                              <Image src={`/images/builds/${m.photo}.jpg`} alt="" fill sizes="280px" style={m.pos ? { objectPosition: m.pos } : undefined} />
                            </span>
                            <span className="mega-tag">{m.tag}</span>
                            <strong>{m.name}</strong>
                            <span className="mega-facts">{m.short}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega-foot">
                        <span>Not sure which one fits? Tell us about the job and we will advise.</span>
                        <Link href="/models" className="text-link" onClick={closeAll} tabIndex={megaOpen ? 0 : -1}>
                          View all units <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={isActive(item.href) ? "nav-link active" : "nav-link"}
                    onMouseEnter={(e) => moveTo(e.currentTarget)}
                    onFocus={(e) => moveTo(e.currentTarget)}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="header-actions">
              <Link href="/contact#quote" className="btn btn-gold nav-cta" onClick={closeAll}>
                Get a Quote
                <svg viewBox="0 0 16 10" aria-hidden="true">
                  <path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
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
        </div>
      </header>

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
          <a href={`mailto:${site.email}`} tabIndex={drawerOpen ? 0 : -1}>
            {site.email}
          </a>
          <a href={tel} tabIndex={drawerOpen ? 0 : -1}>
            {site.phone}
          </a>
        </p>
      </div>
    </>
  );
}
