import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shipping Container Office FAQ",
  description:
    "Answers on container offices and storage in Alabama: permits, insulation, delivery, site preparation, security, rust, custom layouts and buying empty containers.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]} />
      <PageHero eyebrow="FAQ" title="Questions we hear most often." text="If yours is not here, send it with your quote request and we will answer it directly." />
      <section className="section">
        <div className="container">
          <div className="faq" data-reveal="stagger">
            {faqs().map((f) => (
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
