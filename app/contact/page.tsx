import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote for a container home or get in touch with the Kitout team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your build." text="Send a quote request or reach us directly. We reply within one business day." />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-block">
              <h3>Get in touch</h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </p>
            </div>
            <div className="contact-block">
              <h3>Workshop</h3>
              <p>{site.address}</p>
            </div>
            <div className="contact-block">
              <h3>Hours</h3>
              <ul>
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="form-panel" id="quote">
            <h2>Request a quote</h2>
            <p>A few details are enough to get started.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
