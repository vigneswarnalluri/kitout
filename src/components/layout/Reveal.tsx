"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades in any element marked data-reveal as it scrolls into view.
// Content stays visible if JavaScript never runs: hiding only applies once
// this component has added the js-reveal class.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add("in");
    });
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
