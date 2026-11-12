import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From first conversation to handover: how a Kitout container home is designed, built and delivered.",
};

const steps = [
  { title: "Talk to us", text: "Send a quote request with your location, the model you like and how you plan to use it. We reply with questions, rough costs and what to check with your local planning office." },
  { title: "Design and quote", text: "We adapt the layout to your plot, agree finishes and fittings, and issue drawings with a fixed written quote that lists exactly what is included." },
  { title: "Workshop build", text: "The modules are cut, reinforced, insulated, wired, plumbed and fitted out indoors. You receive progress photos, and you are welcome to visit." },
  { title: "Site preparation", text: "While we build, your contractor prepares foundations and service connections to the drawings we supply." },
  { title: "Delivery and placement", text: "Finished modules travel by truck, or by ship for overseas orders, and are craned onto the foundations. Multi-module homes are joined and sealed on site." },
  { title: "Connection and handover", text: "Power, water and drainage are connected, everything is tested, and we walk you through your new home." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Six steps from idea to front door." text="Most of the work happens in our workshop, which keeps the build predictable and your site quiet." />
      <section className="section section-cream">
        <div className="container">
          <div className="steps" data-reveal="stagger">
            {steps.map((s, i) => (
              <div className="step" key={s.title}>
                <p className="step-num">0{i + 1}</p>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
