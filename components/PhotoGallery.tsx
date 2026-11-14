"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { photos, projects } from "@/lib/media";

// Pass `only` to show a single build without the filter tabs.
export default function PhotoGallery({ only }: { only?: string }) {
  const [filter, setFilter] = useState<string>(only ?? "all");
  const [open, setOpen] = useState<number | null>(null);

  const shown = useMemo(() => (filter === "all" ? photos : photos.filter((p) => p.project === filter)), [filter]);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

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

  const current = open === null ? null : shown[open];
  const tabs = [{ key: "all", label: "All builds", count: photos.length }, ...projects.map((p) => ({ key: p.key, label: p.label, count: photos.filter((x) => x.project === p.key).length }))];

  return (
    <>
      {only ? null : (
        <div className="gallery-tabs" role="group" aria-label="Filter photos by build">
        {tabs.map((t) => (
          <button key={t.key} type="button" className="gallery-tab" aria-pressed={filter === t.key} onClick={() => setFilter(t.key)}>
            {t.label}
            <span>{t.count}</span>
          </button>
        ))}
      </div>
      )}

      <div className="gallery-grid" data-reveal="stagger">
        {shown.map((p, i) => (
          <button key={p.file} type="button" className="shot" onClick={() => setOpen(i)} aria-label={`Enlarge photo: ${p.caption}`}>
            <Image src={`/images/${p.file}.jpg`} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 860px) 50vw, 33vw" />
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
                {(open ?? 0) + 1} / {shown.length}
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
