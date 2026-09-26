import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { availableTemplates } from "@/content/templates";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    ...availableTemplates.map((t) => ({
      url: `${siteConfig.url}/templates/${t.slug}/`,
      lastModified: t.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
