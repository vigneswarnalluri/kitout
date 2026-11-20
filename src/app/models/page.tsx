import { pageMeta } from "@/lib/seo";
import CtaBand from "@/components/sections/CtaBand";
import ModelCard from "@/components/ui/ModelCard";
import PageHero from "@/components/sections/PageHero";
import { models } from "@/lib/models";
import { pending } from "@/lib/site";

const intro =
  "Pick a unit as your starting point. Every one can be re-planned, fitted out and painted to suit the job — shell, partial build, or fully finished turnkey.";
// Shown while pending.showPrices is on in site.ts.
const boxLine = "Need just the box? We sell new one-trip 20 ft containers from $3,500 and 40 ft high-cubes from $4,850.";

export const metadata = pageMeta({
  title: "Container Offices, Storage Combos & Stacked Units",
  description:
    "Compare Kit Out container units: the 20 ft Office 20, the 40 ft Office 40, the Combo 40 office and storage unit, and two-story stacked offices. Built in Bessemer, Alabama.",
  path: "/models",
  image: { url: "/images/builds/office40-exterior.jpg", width: 945, height: 760, alt: "Gray 40-foot container office with two windows and a steel door" },
});

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
