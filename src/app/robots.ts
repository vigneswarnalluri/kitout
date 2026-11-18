import type { MetadataRoute } from "next";
import { abs, SITE_URL } from "@/lib/seo";

// Deploy previews and branch deploys on Netlify are blocked; only production is crawled.
const indexable = !process.env.CONTEXT || process.env.CONTEXT === "production";

export default function robots(): MetadataRoute.Robots {
  if (!indexable) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: abs("/sitemap.xml"),
    host: SITE_URL,
  };
}
