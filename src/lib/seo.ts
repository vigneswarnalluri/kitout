import type { Metadata } from "next";
import { faqs } from "./faqs";
import type { Model } from "./models";
import { site } from "./site";

// The address search engines should treat as the real one. Set NEXT_PUBLIC_SITE_URL in Netlify
// once kitoutcontainer.com points at this site; until then the Netlify address is the live one.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://kitoutcontainer.netlify.app").replace(/\/$/, "");

export const abs = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const brand = `${site.name} ${site.tagline}`;
export const HOME_TITLE = `${brand} | Shipping Container Offices & Storage, Bessemer AL`;
const defaultImage = { url: "/images/brand/hero-container.jpg", width: 1672, height: 941, alt: "Kit Out Container Co. shipping container" };

/**
 * Metadata for one page: title, description, canonical URL, Open Graph and Twitter card.
 * Next replaces (not merges) openGraph per page, so every field is set here.
 */
export function pageMeta({ title, description, path, image }: { title?: string; description: string; path: string; image?: { url: string; width: number; height: number; alt: string } }): Metadata {
  const img = image ?? defaultImage;
  const fullTitle = title ? `${title} | ${brand}` : HOME_TITLE;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: brand, locale: "en_US", url: path, title: fullTitle, description, images: [img] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [img.url] },
  };
}

// ---------- Structured data (schema.org JSON-LD) ----------

const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: brand,
    alternateName: site.name,
    slogan: site.slogan,
    description: site.description,
    url: abs("/"),
    logo: abs("/images/brand/logo-dark.png"),
    image: abs(defaultImage.url),
    email: site.email,
    telephone: "+1-256-227-9757",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1166 Raimund Muscoda Rd",
      addressLocality: "Bessemer",
      addressRegion: "AL",
      postalCode: "35020",
      addressCountry: "US",
    },
    hasMap: site.mapHref,
    areaServed: { "@type": "State", name: "Alabama" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
    contactPoint: [{ "@type": "ContactPoint", telephone: "+1-256-227-9757", email: site.email, contactType: "sales", areaServed: "US-AL", availableLanguage: "English" }],
    sameAs: site.social.map((s) => s.href),
    knowsAbout: ["Shipping container offices", "Container storage", "Container homes", "Stacked container buildings", "Shipping container sales"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: abs("/"),
    name: brand,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

// Described as a Service, not a Product: Google's Product results require a price, and prices
// are waiting on the client's sign-off. Switch to Product + Offer once prices go live.
export function unitSchema(m: Model) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(`/models/${m.slug}`)}#service`,
    name: `${m.name} container ${m.project === "stack" ? "building" : "unit"}`,
    serviceType: m.tag,
    description: `${m.summary} ${m.intro}`,
    url: abs(`/models/${m.slug}`),
    image: abs(`/images/builds/${m.photo}.jpg`),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "State", name: "Alabama" },
    category: "Shipping container conversion",
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs().map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
