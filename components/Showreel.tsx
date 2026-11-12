"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { clips } from "@/lib/media";

export default function Showreel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLElement>(null);
  const inView = useRef(false);
  const clip = clips[active];

  // Start paused for visitors who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  // Only play while the section is on screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting && playing) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playing]);

  // Apply play / pause, and start each newly selected clip.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    if (playing && inView.current) v.play().catch(() => {});
    else v.pause();
  }, [playing, active]);

  const select = (i: number) => {
    setProgress(0);
    setActive(i);
  };

  return (
    <section className="reel" ref={wrapRef} aria-label="How a container becomes a home">
      <video
        key={clip.file}
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={`/videos/${clip.file}.jpg`}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
        onEnded={() => select((active + 1) % clips.length)}
      >
        <source src={`/videos/${clip.file}.mp4`} type="video/mp4" />
      </video>

      <div className="reel-inner">
        <div className="container">
          <div className="reel-caption" key={clip.file}>
            <span className="eyebrow">In the workshop</span>
            <h2>{clip.title}</h2>
            <p>{clip.text}</p>
          </div>
          <div className="reel-tabs">
            {clips.map((c, i) => (
              <button
                key={c.file}
                type="button"
                className="reel-tab"
                aria-pressed={i === active}
                style={{ "--p": i === active ? progress : i < active ? 1 : 0 } as CSSProperties}
                onClick={() => select(i)}
              >
                <span>0{i + 1}</span>
                <strong>{c.label}</strong>
              </button>
            ))}
            <button type="button" className="reel-toggle" aria-label={playing ? "Pause video" : "Play video"} onClick={() => setPlaying((p) => !p)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {playing ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" /> : <path d="M8 5v14l11-7z" fill="currentColor" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
