import Image from "next/image";
import Link from "next/link";
import BgVideo from "@/components/BgVideo";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import ModelExplorer from "@/components/ModelExplorer";
import PhotoGallery from "@/components/PhotoGallery";
import Showreel from "@/components/Showreel";
import { models } from "@/lib/models";

const stats = [
  { value: `${models.length}`, label: "Layouts to start from" },
  { value: "15–60 m²", label: "Floor areas" },
  { value: "2.9 m", label: "High-cube module height" },
];

const steps = [
  { title: "Design", text: "Start from one of our models or bring your own layout. We draw it up, agree finishes and fix the price before any steel is cut." },
  { title: "Build", text: "Your home is built indoors: structure, insulation, wiring, plumbing, kitchen and bathroom, all finished and checked in the workshop." },
  { title: "Deliver", text: "The finished modules travel by truck or ship, are lifted onto your foundations and connected to services." },
];

const aboutPoints = ["Kitchen and bathroom fitted", "Walls, floor and roof insulated", "Every opening reinforced", "Wiring and plumbing tested"];

const reasons: { title: string; text: string; icon: IconName }[] = [
  { title: "Built to travel", text: "A container is a steel frame engineered to be stacked high and shipped across oceans. That makes it a strong, stable shell for a home.", icon: "shield" },
  { title: "Faster than site building", text: "Workshop construction is not held up by weather, and groundworks can happen while the home is being built.", icon: "clock" },
  { title: "A fixed price", text: "You agree the specification and the price up front, with a clear list of what is and is not included.", icon: "tag" },
  { title: "Room to grow", text: "Modules can be added, stacked or moved later as your needs change. Tell us at the design stage and we plan the connections in.", icon: "grow" },
];

const uses = ["Homes", "Guest suites", "Holiday rentals", "Garden studios", "Home offices", "Cafés and kiosks", "Site offices", "Staff accommodation", "Pop-up retail", "Workshops"];
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
      <section className="hero3">
        <div className="hero3-media">
          <BgVideo name="yard" />
        </div>
        <div className="container hero3-inner">
          <div>
            <h1>
              Steel-strong homes, <em>finished</em> before they arrive.
            </h1>
            <p className="hero-sub">We design and build container homes, studios and offices in our workshop, then deliver them ready to connect and live in.</p>
            <div className="btn-row">
              <Link href="/contact#quote" className="btn btn-gold">
                Get a Quote
              </Link>
              <Link href="/models" className="btn btn-outline-white">
                Explore Models
              </Link>
            </div>
          </div>
        </div>
        <div className="hero3-bar">
          <div className="container hero3-bar-inner">
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
      </section>

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
              <span className="eyebrow">Our models</span>
              <h2 className="section-heading">Choose a starting point.</h2>
            </div>
            <Link href="/models" className="btn btn-outline-white">
              See All Models
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
              <Image src="/images/deck-pavilion.jpg" alt="White modular building with large windows opening onto a timber deck" fill sizes="(max-width: 860px) 100vw, 50vw" />
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
            <span className="eyebrow">About Kitout</span>
            <h2 className="section-heading">A home with a steel backbone.</h2>
            <p className="section-body">
              Kitout turns high-cube shipping containers into insulated, fully fitted homes. Every build leaves our workshop finished inside and out, so time on your site is measured in days, not months.
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
              <span className="eyebrow">Gallery</span>
              <h2 className="section-heading">What container building looks like.</h2>
            </div>
            <p className="row-note">Timber decks, full-height glazing and bright, insulated interiors. Select a photo to enlarge it.</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="row-head" data-reveal>
            <div>
              <span className="eyebrow">Why container homes</span>
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
