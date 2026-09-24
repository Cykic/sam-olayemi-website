import type { MetadataRoute } from "next";

import { getArticles, getServices, getWorkItems } from "@/api";
import { articleHref, PAGE_SEO, serviceHref, workHref } from "@/constants";
import { absoluteUrl } from "@/utils";

const PRIORITY: Record<keyof typeof PAGE_SEO, number> = {
  home: 1,
  services: 0.9,
  work: 0.8,
  about: 0.7,
  insights: 0.7,
  contact: 0.8,
  privacy: 0.2,
  terms: 0.2,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const [services, work, articles] = await Promise.all([getServices(), getWorkItems(), getArticles()]);

  return [
    ...Object.entries(PAGE_SEO).map(([key, { path }]) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: PRIORITY[key as keyof typeof PAGE_SEO],
    })),
    ...services.map(({ slug }) => ({
      url: absoluteUrl(serviceHref(slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...work.map(({ slug }) => ({
      url: absoluteUrl(workHref(slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...articles.map(({ slug, publishedAt }) => ({
      url: absoluteUrl(articleHref(slug)),
      lastModified: new Date(publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
