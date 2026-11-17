import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote for a container office or storage unit, or get in touch with the Kit Out team.",
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
                <a href={site.phoneHref}>{site.phone}</a> (call or WhatsApp)
                <br />
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </p>
            </div>
            <div className="contact-block">
              <h3>Workshop</h3>
              <p>
                <a href={site.mapHref} target="_blank" rel="noopener noreferrer">
                  {site.address}
                </a>
              </p>
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
            <div className="contact-block">
              <h3>Follow us</h3>
              <p className="contact-social">
                {site.social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </p>
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
