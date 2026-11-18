import type { MetadataRoute } from "next";
import { photos } from "@/lib/media";
import { models } from "@/lib/models";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly", images: string[] = []) => ({
    url: abs(path),
    lastModified,
    changeFrequency,
    priority,
    ...(images.length ? { images: images.map((f) => abs(f)) } : {}),
  });

  return [
    page("/", 1, "weekly", ["/images/brand/hero-container.jpg", ...photos.map((p) => `/images/builds/${p.file}.jpg`)]),
    page("/models", 0.9, "monthly"),
    ...models.map((m) =>
      page(`/models/${m.slug}`, 0.8, "monthly", [`/images/builds/${m.photo}.jpg`, ...photos.filter((p) => p.project === m.project && p.file !== m.photo).map((p) => `/images/builds/${p.file}.jpg`)]),
    ),
    page("/contact", 0.8, "yearly"),
    page("/process", 0.6, "yearly"),
    page("/about", 0.6, "yearly"),
    page("/faq", 0.6, "monthly"),
  ];
}
