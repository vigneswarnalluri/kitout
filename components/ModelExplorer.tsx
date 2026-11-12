"use client";

import Link from "next/link";
import { useState } from "react";
import ContainerArt from "./ContainerArt";
import { models } from "@/lib/models";

export default function ModelExplorer() {
  const [active, setActive] = useState(1);
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
            <span className="explorer-area">{x.area.split(" / ")[0]}</span>
          </button>
        ))}
      </div>

      <div className="explorer-panel cast" aria-live="polite">
        <div className="explorer-art" key={m.slug}>
          <ContainerArt variant={m.variant} body={m.body} label={`${m.name} illustration`} />
          <span className="plate">{m.modules}</span>
        </div>
        <div className="explorer-info">
          <p>{m.summary}</p>
          <dl className="model-facts">
            <div>
              <dt>Beds</dt>
              <dd>{m.beds}</dd>
            </div>
            <div>
              <dt>Baths</dt>
              <dd>{m.baths}</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>{m.area.split(" / ")[0]}</dd>
            </div>
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
