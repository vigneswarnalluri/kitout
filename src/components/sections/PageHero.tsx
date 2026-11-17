import type { ReactNode } from "react";

export default function PageHero({ eyebrow, title, text, price, children }: { eyebrow: string; title: string; text?: string; price?: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow eyebrow-boxed">{eyebrow}</span>
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
        {price ? <p className="page-hero-price">{price}</p> : null}
        {children ? <div className="btn-row">{children}</div> : null}
      </div>
    </section>
  );
}
