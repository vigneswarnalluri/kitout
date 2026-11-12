import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about container homes: permits, insulation, delivery, foundations and customisation.",
};

const faqs = [
  { q: "Do I need planning permission or a building permit?", a: "Usually, yes, if the building will be lived in. Rules differ by country and by local authority, so check with your planning office early. We supply the drawings and specifications they normally ask for." },
  { q: "Are container homes warm in winter and cool in summer?", a: "Bare steel conducts heat, so insulation is essential. We insulate the walls, floor and roof and fit double-glazed doors and windows. The insulation level is chosen for the climate where the home will stand." },
  { q: "What foundations do I need?", a: "Containers carry their load at the corners, so foundations can be simple: concrete pads, piers or ground screws are common. We provide a foundation plan for your contractor." },
  { q: "How is the home delivered?", a: "Each module travels on a standard truck and is lifted into place with a crane or a side-loader. For overseas orders, modules ship like any other container. Your site needs access for the truck and the lift." },
  { q: "Can I change the layout?", a: "Yes. Our models are starting points. Door and window positions, room layout, finishes and fittings can all be changed, and fully custom designs are welcome." },
  { q: "What is included in the price?", a: "The finished building: structure, insulation, interior lining, wiring, plumbing, kitchen, bathroom, flooring and exterior paint. Delivery, cranage, foundations and service connections are quoted separately because they depend on your site." },
  { q: "Will it rust?", a: "Containers are made from weathering steel designed for years at sea. We treat any cut edges, prime and paint the exterior, and recommend a simple repaint as part of long-term maintenance, as with any steel building." },
  { q: "Can I add to it later?", a: "Yes. Modules can be joined side by side or stacked, and we plan for future extensions if you tell us at the design stage." },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions we hear most often." text="If yours is not here, send it with your quote request and we will answer it directly." />
      <section className="section">
        <div className="container">
          <div className="faq" data-reveal="stagger">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
