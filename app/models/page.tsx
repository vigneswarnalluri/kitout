import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import ModelCard from "@/components/ModelCard";
import PageHero from "@/components/PageHero";
import { models } from "@/lib/models";

export const metadata: Metadata = {
  title: "Models",
  description: "Container home models from a 20ft studio to a two-storey, two-bedroom home.",
};

export default function ModelsPage() {
  return (
    <>
      <PageHero eyebrow="Our models" title="Container homes for every plot." text="Pick a layout as your starting point. Every model can be adapted, extended and finished to suit you." />
      <section className="section section-cream">
        <div className="container">
          <div className="card-grid card-grid-2" data-reveal="stagger">
            {models.map((m) => (
              <ModelCard key={m.slug} model={m} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
