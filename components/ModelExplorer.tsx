"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { models, photoAlt } from "@/lib/models";

export default function ModelExplorer() {
  const [active, setActive] = useState(0);
  const m = models[active];

  return (
    <div className="explorer">
      <div className="explorer-list">
        {models.map((x, i) => (
          <button key={x.slug} type="button" className="explorer-tab" aria-pressed={i === active} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}>
            <span className="explorer-idx">0{i + 1}</span>
            <span>
              <strong>{x.name}</strong>
              <small>{x.tag}</small>
            </span>
            <span className="explorer-area">{x.short}</span>
          </button>
        ))}
      </div>

      <div className="explorer-panel cast" aria-live="polite">
        <div className="explorer-art" key={m.slug}>
          <Image src={`/images/${m.photo}.jpg`} alt={photoAlt(m)} fill sizes="(max-width: 1000px) 100vw, 60vw" style={m.pos ? { objectPosition: m.pos } : undefined} />
          <span className="plate">{m.size}</span>
        </div>
        <div className="explorer-info">
          <p>{m.summary}</p>
          <dl className="model-facts">
            {m.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="btn-row">
            <Link href={`/models/${m.slug}`} className="btn btn-green">
              View {m.name}
            </Link>
            <Link href="/contact#quote" className="btn btn-outline-green">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
