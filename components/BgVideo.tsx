"use client";

import { useEffect, useRef } from "react";

// Silent looping background video. Stays on its poster image for visitors
// who have asked their device to reduce motion.
export default function BgVideo({ name }: { name: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video ref={ref} muted loop playsInline preload="metadata" poster={`/videos/${name}.jpg`} aria-hidden="true" tabIndex={-1}>
      <source src={`/videos/${name}.mp4`} type="video/mp4" />
    </video>
  );
}
