import type { MetadataRoute } from "next";
import { absolutePageUrl } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absolutePageUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absolutePageUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absolutePageUrl("/work"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absolutePageUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absolutePageUrl(`/work/${project.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: project.overview ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
