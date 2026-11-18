import { pageMeta } from "@/lib/seo";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";

export const metadata = pageMeta({
  title: "How It Works: From Quote to Delivery",
  description:
    "Six steps from first call to handover: design and fixed quote, workshop build in Bessemer, AL, site preparation, delivery by truck and power connection. Shell, partial or turnkey builds.",
  path: "/process",
  image: { url: "/images/builds/build-foam.jpg", width: 1206, height: 904, alt: "Spray foam insulation going into a Kit Out container build" },
});

const steps = [
  { title: "Talk to us", text: "Send a quote request with your location, the unit you like and how you plan to use it. We reply with questions, rough costs and anything worth checking with your local authority." },
  { title: "Design and quote", text: "We fit the layout to the job, agree finishes and fittings, and issue a fixed written quote that lists exactly what is included." },
  { title: "Workshop build", text: "The container is cut, reinforced, framed, insulated, wired and fitted out indoors. You receive progress photos, and you are welcome to visit. Shell, partial build, or fully finished turnkey — you choose how far we take it." },
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
