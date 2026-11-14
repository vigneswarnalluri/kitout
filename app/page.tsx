import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import ModelExplorer from "@/components/ModelExplorer";
import PhotoGallery from "@/components/PhotoGallery";
import Showreel from "@/components/Showreel";
import { models } from "@/lib/models";

const stats = [
  { value: `${models.length}`, label: "Unit types to start from" },
  { value: "20 & 40 ft", label: "Container lengths" },
  { value: "1 or 2", label: "Stories" },
];

const steps = [
  { title: "Design", text: "Start from one of our units or bring your own layout. We agree the plan, the finishes and the price before any steel is cut." },
  { title: "Build", text: "Your unit is built indoors: framing, spray foam insulation, wiring, wall panels, flooring and air conditioning, all finished and checked in the workshop." },
  { title: "Deliver", text: "The finished unit travels by truck, is set in place on your site and connected to power." },
];

// Matches what the photo beside it shows: the 40ft office and storage build.
const aboutPoints = ["Spray foam insulation", "Framed and lined interior", "Wiring and lighting", "Mini-split air conditioning"];

const reasons: { title: string; text: string; icon: IconName }[] = [
  { title: "Built to travel", text: "A container is a steel frame engineered to be stacked high and shipped across oceans. That makes it a strong, secure shell for an office or a store.", icon: "shield" },
  { title: "Faster than site building", text: "Workshop construction is not held up by weather, and your site can be prepared while the unit is being built.", icon: "clock" },
  { title: "A fixed price", text: "You agree the specification and the price up front, with a clear list of what is and is not included.", icon: "tag" },
  { title: "Room to grow", text: "Units can be added, stacked or moved later as your needs change. Tell us at the design stage and we plan the connections in.", icon: "grow" },
];

const uses = ["Site offices", "Secure storage", "Office + storage", "Stacked offices", "Sales offices", "Break rooms", "Workshops", "Equipment stores", "Pop-up retail", "Custom builds"];
const usesA = uses.slice(0, 5);
const usesB = uses.slice(5);

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const track = (
    <div className="marquee-track">
      {items.map((u) => (
        <span key={u}>
          {u}
          <i />
        </span>
      ))}
    </div>
  );
  return (
    <div className={reverse ? "marquee reverse" : "marquee"} aria-hidden="true">
      {track}
      {track}
      {track}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero4">
        <div className="hero4-media">
          <Image src="/images/hero-container.jpg" alt="White shipping container carrying the Kit Out Container Co. logo, in a container terminal at golden hour" fill priority sizes="100vw" />
        </div>
        <div className="container hero4-inner">
          <h1>
            Container offices and storage, <em>finished</em> before they arrive.
          </h1>
          <div className="btn-row">
            <Link href="/contact#quote" className="btn btn-gold">
              Get a Quote
            </Link>
            <Link href="/models" className="btn btn-outline-white">
              Explore Units
            </Link>
          </div>
        </div>
      </section>

      <div className="hero4-strip">
        <div className="container hero4-strip-inner">
          <p className="hero-sub">We convert shipping containers into insulated offices, secure storage and stacked buildings in our workshop, then deliver them ready to plug in and use.</p>
          <dl>
            {stats.map((s) => (
              <div key={s.label}>
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="section" id="services">
        <div className="container">
          <div className="row-head" data-reveal>
            <div>
              <span className="eyebrow">How we work</span>
              <h2 className="section-heading">Three stages, one team.</h2>
            </div>
            <Link href="/process" className="text-link">
              See the full process <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ol className="stages" data-reveal="stagger">
            {steps.map((s, i) => (
              <li className="stage" key={s.title}>
                <div className="stage-top">
                  <span className="stage-label">Stage</span>
                  <span className="outline-num">0{i + 1}</span>
                </div>
                <div className="stage-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Showreel />

      <section className="section section-dark">
        <div className="container">
          <div className="row-head" data-reveal>
            <div>
              <span className="eyebrow">Our units</span>
              <h2 className="section-heading">Choose a starting point.</h2>
            </div>
            <Link href="/models" className="btn btn-outline-white">
              See All Units
            </Link>
          </div>
          <div data-reveal>
            <ModelExplorer />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-art layered" data-reveal="left">
            <div className="photo">
              <Image src="/images/build-exterior.jpg" alt="Cream 40-foot container office with a door, window and mini-split air conditioner" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectPosition: "50% 62%" }} />
            </div>
            <div className="float-card cast">
              <h3>Leaves the workshop with</h3>
              <ul className="check-list">
                {aboutPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div data-reveal="right">
            <span className="eyebrow">About Kit Out</span>
            <h2 className="section-heading">Workspace with a steel backbone.</h2>
            <p className="section-body">
              Kit Out turns shipping containers into insulated, fully finished offices and storage units. Every build leaves our workshop wired, lined and climate controlled, so it is ready to use the day it lands.
            </p>
            <Link href="/about" className="btn btn-green">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <div className="row-head" data-reveal>
            <div>
              <span className="eyebrow">Our work</span>
              <h2 className="section-heading">Offices, storage and stacked builds.</h2>
            </div>
            <p className="row-note">Recent Kit Out builds, from single 40-foot offices to a two-story stack with a deck. Filter by build, and select a photo to enlarge it.</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="row-head" data-reveal>
            <div>
              <span className="eyebrow">Why build with containers</span>
              <h2 className="section-heading">Strong, quick to build and easy to place.</h2>
            </div>
          </div>
          <div className="bento" data-reveal="stagger">
            {reasons.map((r, i) => (
              <article key={r.title} className={i === 0 ? "bento-card bento-tall" : i === 3 ? "bento-card bento-wide" : "bento-card"}>
                <span className="bento-idx">0{i + 1}</span>
                <Icon name={r.icon} />
                {i === 0 ? (
                  <div className="stack-art" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                ) : null}
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee-band">
        <div className="container">
          <div className="row-head">
            <div>
              <span className="eyebrow">What we build</span>
              <h2 className="section-heading">One system, many uses.</h2>
            </div>
          </div>
          <ul className="sr-only">
            {uses.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
        <MarqueeRow items={usesA} />
        <MarqueeRow items={usesB} reverse />
      </section>

      <CtaBand />
    </>
  );
}
