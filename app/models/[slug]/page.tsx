import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContainerArt from "@/components/ContainerArt";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { getModel, models } from "@/lib/models";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  return model ? { title: model.name, description: model.summary } : {};
}

const galleryColours = ["#0D4532", "#272727", "#A37A52"];

export default async function ModelPage({ params }: Params) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <Link href="/">Home</Link> / <Link href="/models">Models</Link> / {model.name}
        </div>
      </nav>

      <PageHero eyebrow={model.tag} title={model.name} text={model.summary}>
        <a href="#specs" className="btn btn-outline-white">
          Specifications
        </a>
        <a href="#quote" className="btn btn-gold">
          Request a Quote
        </a>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div className="split-art" data-reveal="left">
            <ContainerArt variant={model.variant} body={model.body} label={`${model.name} illustration`} />
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
            <h2 className="section-heading">{model.modules}</h2>
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
                <tr>
                  <th scope="row">Bedrooms</th>
                  <td>{model.beds}</td>
                </tr>
                <tr>
                  <th scope="row">Bathrooms</th>
                  <td>{model.baths}</td>
                </tr>
                {model.specs.map((s) => (
                  <tr key={s.label}>
                    <th scope="row">{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">Dimensions are external and approximate. Final specification is confirmed in your written quote.</p>
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

      <section className="section">
        <div className="container">
          <span className="eyebrow">Finishes</span>
          <div className="divider" />
          <h2 className="section-heading">Pick your exterior colour.</h2>
          <div className="gallery" data-reveal="stagger">
            {galleryColours.map((c) => (
              <ContainerArt key={c} variant={model.variant} body={c} label={`${model.name} in an alternative colour`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream" id="quote">
        <div className="container">
          <div className="form-panel">
            <h2>Request a quote for the {model.name}</h2>
            <p>Tell us where you plan to build and we will send a written price and delivery estimate.</p>
            <QuoteForm defaultModel={model.name} />
          </div>
        </div>
      </section>
    </>
  );
}
