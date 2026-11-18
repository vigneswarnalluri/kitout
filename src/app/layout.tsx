import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { businessSchema, HOME_TITLE, pageMeta, SITE_URL, websiteSchema } from "@/lib/seo";
import { Bricolage_Grotesque, DM_Mono, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/layout/Reveal";
import { site } from "@/lib/site";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });

// Netlify sets CONTEXT during builds. Only the production deploy should be indexed;
// deploy previews and branch deploys are kept out of search results.
const indexable = !process.env.CONTEXT || process.env.CONTEXT === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: `%s | ${site.name} ${site.tagline}` },
  description: site.description,
  applicationName: `${site.name} ${site.tagline}`,
  authors: [{ name: `${site.name} ${site.tagline}`, url: SITE_URL }],
  creator: `${site.name} ${site.tagline}`,
  publisher: `${site.name} ${site.tagline}`,
  category: "Construction",
  formatDetection: { telephone: true, email: true, address: true },
  robots: indexable
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
    : { index: false, follow: false },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
          ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } } : {}),
        },
      }
    : {}),
  ...pageMeta({ description: site.description, path: "/" }),
};

export const viewport: Viewport = { themeColor: "#0D4532" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
