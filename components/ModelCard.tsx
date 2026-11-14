import Image from "next/image";
import Link from "next/link";
import { photoAlt, type Model } from "@/lib/models";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <article className="model-card cast">
      <div className="model-card-art">
        <Image src={`/images/${model.photo}.jpg`} alt={photoAlt(model)} fill sizes="(max-width: 860px) 100vw, 50vw" style={model.pos ? { objectPosition: model.pos } : undefined} />
        <span className="plate">{model.size}</span>
      </div>
      <div className="model-card-body">
        <div className="model-card-head">
          <div>
            <p className="model-tag">{model.tag}</p>
            <h3>
              <Link href={`/models/${model.slug}`}>{model.name}</Link>
            </h3>
          </div>
          <span className="arrow-btn" aria-hidden="true">
            →
          </span>
        </div>
        <p className="model-desc">{model.summary}</p>
        <dl className="model-facts">
          {model.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
