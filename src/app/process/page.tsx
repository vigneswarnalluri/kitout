import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From first conversation to handover: how a Kit Out container office or storage unit is designed, built and delivered.",
};

const steps = [
  { title: "Talk to us", text: "Send a quote request with your location, the unit you like and how you plan to use it. We reply with questions, rough costs and anything worth checking with your local authority." },
  { title: "Design and quote", text: "We fit the layout to the job, agree finishes and fittings, and issue a fixed written quote that lists exactly what is included." },
  { title: "Workshop build", text: "The container is cut, reinforced, framed, insulated, wired and fitted out indoors. You receive progress photos, and you are welcome to visit." },
  { title: "Site preparation", text: "While we build, you prepare a firm, level base and a power supply, to the details we provide." },
  { title: "Delivery and placement", text: "The finished unit travels by truck and is set in place. Stacked builds are assembled and secured on site." },
  { title: "Connection and handover", text: "Power is connected, everything is tested, and we walk you through your new space." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Six steps from idea to open door." text="Most of the work happens in our workshop, which keeps the build predictable and your site clear." />
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
