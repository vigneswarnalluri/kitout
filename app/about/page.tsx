import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Kitout builds container homes in the workshop and delivers them ready to live in.",
};

const values = [
  { title: "Finished in the workshop", text: "Building indoors means steady quality and no weather delays." },
  { title: "Clear, fixed quotes", text: "You see what is included, what is optional and what your site contractor needs to do." },
  { title: "Designed around you", text: "Our models are starting points. Layouts, openings and finishes are adapted to each client." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="We build homes out of steel boxes, and we do it properly." text="Kitout is a design-and-build workshop focused on one thing: well-made container buildings." />
      <section className="section">
        <div className="container split">
          <div className="prose" data-reveal="left">
            <span className="eyebrow">Our approach</span>
            <div className="divider" />
            <p>
              A shipping container is a remarkable piece of engineering: a weatherproof steel frame made to carry heavy loads, be stacked high and cross oceans. That makes it a strong starting point for a building, provided the conversion is done with care.
            </p>
            <p>
              We reinforce every opening we cut, insulate the walls, floor and roof, and fit out the interior to the standard you would expect of any new home. Because the work happens in a workshop, each stage can be inspected before the next begins.
            </p>
            <p>
              The result arrives on your plot as a finished building. Your site stays tidy, your neighbours stay happy, and you move in sooner.
            </p>
          </div>
          <div className="split-art" data-reveal="right">
            <div className="photo">
              <Image src="/images/deck-terrace.jpg" alt="Timber terrace with planter and seating beside a modular building" fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-cream">
        <div className="container">
          <div className="strip" data-reveal="stagger">
            {values.map((v, i) => (
              <div className="strip-card" key={v.title}>
                <p className="strip-num">0{i + 1}</p>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
