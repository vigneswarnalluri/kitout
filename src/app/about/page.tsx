import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Kit Out Container Co. converts shipping containers into offices and storage units in the workshop and delivers them ready to use.",
};

const values = [
  { title: "Finished in the workshop", text: "Building indoors means steady quality and no weather delays." },
  { title: "Clear, fixed quotes", text: "You see what is included, what is optional and what needs doing on your site." },
  { title: "Built around the job", text: "Our units are starting points. Layouts, openings and finishes are adapted to each customer." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="We build workspaces out of steel boxes, and we do it properly." text="Kit Out is a design-and-build workshop focused on one thing: well-made container buildings." />
      <section className="section">
        <div className="container split">
          <div className="prose" data-reveal="left">
            <span className="eyebrow">Our approach</span>
            <div className="divider" />
            <p>
              A shipping container is a remarkable piece of engineering: a weatherproof steel frame made to carry heavy loads, be stacked high and cross oceans. That makes it a strong starting point for a building, provided the conversion is done with care.
            </p>
            <p>
              We reinforce every opening we cut, frame and insulate the interior, and finish it to the standard you would expect of any new office. Because the work happens in a workshop, each stage can be inspected before the next begins.
            </p>
            <p>
              The result arrives on your site as a finished building. There is no long construction project to manage, and your team can move in sooner.
            </p>
          </div>
          <div className="split-art" data-reveal="right">
            <div className="photo">
              <Image src="/images/builds/build-office.jpg" alt="Finished office interior inside a Kit Out container" fill sizes="(max-width: 860px) 100vw, 50vw" />
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
