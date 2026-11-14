import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import PhotoGallery from "@/components/sections/PhotoGallery";
import QuoteForm from "@/components/sections/QuoteForm";
import { photos } from "@/lib/media";
import { getModel, models, photoAlt } from "@/lib/models";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  return model ? { title: model.name, description: model.summary } : {};
}

export default async function ModelPage({ params }: Params) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const photoCount = photos.filter((p) => p.project === model.project).length;

  return (
    <>
      <PageHero eyebrow={model.tag} title={model.name} text={model.summary}>
        <a href="#specs" className="btn btn-outline-white">
          Specifications
        </a>
        <a href="#quote" className="btn btn-gold">
          Request a Quote
        </a>
      </PageHero>

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link> / <Link href="/models">Units</Link> / {model.name}
        </div>
      </nav>

      <section className="section">
        <div className="container split">
          <div className="split-art" data-reveal="left">
            <div className="photo">
              <Image src={`/images/builds/${model.photo}.jpg`} alt={photoAlt(model)} fill priority sizes="(max-width: 860px) 100vw, 50vw" style={model.pos ? { objectPosition: model.pos } : undefined} />
              <span className="plate">{model.size}</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why the {model.name}</span>
            <div className="divider" />
            <div className="feature-list" data-reveal="stagger">
              {model.why.map((w) => (
                <div key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Overview</span>
            <div className="divider" />
            <h2 className="section-heading">{model.size}</h2>
            <p className="section-body">{model.intro}</p>
            <ul className="pills pills-left">
              {model.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sub-heading">Well suited to</h3>
            <ul className="check-list">
              {model.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="specs">
        <div className="container">
          <span className="eyebrow">Specifications</span>
          <div className="divider" />
          <h2 className="section-heading">{model.name} at a glance</h2>
          <div className="table-wrap">
            <table className="spec-table">
              <tbody>
                {model.specs.map((s) => (
                  <tr key={s.label}>
                    <th scope="row">{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">Dimensions are external and approximate. The final specification is confirmed in your written quote.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container two-col">
          <div>
            <h3 className="sub-heading">Included as standard</h3>
            <ul className="check-list">
              {model.included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sub-heading">Optional upgrades</h3>
            <ul className="check-list">
              {model.upgrades.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {photoCount > 1 ? (
        <section className="section">
          <div className="container">
            <span className="eyebrow">Photos</span>
            <div className="divider" />
            <h2 className="section-heading">This build, inside and out.</h2>
            <PhotoGallery only={model.project} />
          </div>
        </section>
      ) : null}

      <section className="section section-cream" id="quote">
        <div className="container">
          <div className="form-panel">
            <h2>Request a quote for the {model.name}</h2>
            <p>Tell us where it is going and we will send a written price and delivery estimate.</p>
            <QuoteForm defaultModel={model.name} />
          </div>
        </div>
      </section>
    </>
  );
}
