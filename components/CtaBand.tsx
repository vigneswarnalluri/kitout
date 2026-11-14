import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta-panel">
          <div>
            <h2>Ready to plan your container build?</h2>
            <p>Tell us where it is going and which unit you have in mind. We will come back with a written quote and a delivery estimate.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact#quote" className="btn btn-gold">
              Request a Quote
            </Link>
            <Link href="/models" className="btn btn-outline-white">
              Browse Units
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
