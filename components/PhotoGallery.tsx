"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { photos } from "@/lib/media";

export default function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="gallery-grid" data-reveal="stagger">
        {photos.map((p, i) => (
          <button key={p.file} type="button" className="shot" onClick={() => setOpen(i)} aria-label={`Enlarge photo: ${p.caption}`}>
            <Image src={`/images/${p.file}.jpg`} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
            <span className="shot-cap">{p.caption}</span>
          </button>
        ))}
      </div>

      {current ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-btn lightbox-close" aria-label="Close" autoFocus onClick={() => setOpen(null)}>
            ×
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ←
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/${current.file}.jpg`} alt={current.alt} />
            <figcaption>
              <span>
                {(open ?? 0) + 1} / {photos.length}
              </span>
              {current.caption}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}
