import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import ModelCard from "@/components/ui/ModelCard";
import PageHero from "@/components/sections/PageHero";
import { models } from "@/lib/models";
import { pending } from "@/lib/site";

const intro =
  "Pick a unit as your starting point. Every one can be re-planned, fitted out and painted to suit the job — shell, partial build, or fully finished turnkey.";
// Price sentence waits for Rick's sign-off (pending.showPrices in site.ts).
const boxLine = "Need just the box? We sell new one-trip 20 ft containers from $3,500 and 40 ft high-cubes from $4,850.";

export const metadata: Metadata = {
  title: "Units",
  description: "Container offices, office and storage combos, and two-story stacked builds from Kit Out Container Co.",
};

export default function ModelsPage() {
  return (
    <>
      <PageHero eyebrow="Our units" title="Container units for every site." text={pending.showPrices ? `${intro} ${boxLine}` : intro} />
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
