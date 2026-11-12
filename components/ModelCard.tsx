import Link from "next/link";
import type { Model } from "@/lib/models";
import ContainerArt from "./ContainerArt";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <article className="model-card cast">
      <div className="model-card-art">
        <ContainerArt variant={model.variant} body={model.body} label={`${model.name} illustration`} />
        <span className="plate">{model.modules}</span>
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
          <div>
            <dt>Beds</dt>
            <dd>{model.beds}</dd>
          </div>
          <div>
            <dt>Baths</dt>
            <dd>{model.baths}</dd>
          </div>
          <div>
            <dt>Area</dt>
            <dd>{model.area.split(" / ")[0]}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
