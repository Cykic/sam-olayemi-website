import type { Metadata } from "next";

import { articleHref, ROUTES, serviceHref } from "@/constants/routes";
import { OG_IMAGE, PAGE_SEO, type PageSeoKey } from "@/constants/seo";
import { PILLARS } from "@/constants/services";
import { CONTACT_DETAILS, SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";
import type { Article, FaqItem, Service } from "@/types";

export const absoluteUrl = (path: string) => new URL(path, SITE_CONFIG.url).toString();

const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

export const pageMetadata = (key: PageSeoKey): Metadata => {
  const { title, description, path } = PAGE_SEO[key];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title, description, siteName: SITE_CONFIG.name, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
};

export type ContentMetadataInput = {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  section?: string;
};

/** Service, work and article pages. The title gets the site-name suffix from the root template. */
export const contentMetadata = ({ title, description, path, publishedTime, section }: ContentMetadataInput): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: publishedTime ? "article" : "website",
    url: path,
    title,
    description,
    siteName: SITE_CONFIG.name,
    images: [OG_IMAGE],
    ...(publishedTime ? { publishedTime, section, authors: [SITE_CONFIG.name] } : {}),
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
});

/* ------------------------------------------------------------------ *
 * Structured data. One Organization entity, referenced by @id from
 * every other node, keeps the company's identity consistent for
 * search engines and AI assistants.
 * ------------------------------------------------------------------ */

export const organizationSchema = (services: readonly Service[]) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: absoluteUrl("/icon.svg"),
  image: absoluteUrl(OG_IMAGE.url),
  description: SITE_CONFIG.description,
  slogan: SITE_CONFIG.tagline,
  email: CONTACT_DETAILS.email,
  ...(CONTACT_DETAILS.phone ? { telephone: CONTACT_DETAILS.phone.display } : {}),
  address: { "@type": "PostalAddress", addressCountry: SITE_CONFIG.country },
  areaServed: { "@type": "Country", name: CONTACT_DETAILS.location },
  knowsAbout: [
    "Brand strategy",
    "Marketing strategy",
    "Strategic communications",
    "Content strategy",
    "Copywriting",
    "Ghostwriting",
    "Creative direction",
    "Software engineering",
    "Web development",
    "Digital product development",
    "Technology consulting",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT_DETAILS.email,
    url: absoluteUrl(ROUTES.contact),
    availableLanguage: ["English"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: PILLARS.map((pillar) => ({
      "@type": "OfferCatalog",
      name: pillar.name,
      itemListElement: services
        .filter((service) => service.pillar === pillar.id)
        .map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.name, url: absoluteUrl(serviceHref(service.slug)) },
        })),
    })),
  },
  ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS.map(({ href }) => href) } : {}),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  inLanguage: "en-NG",
  publisher: { "@id": ORGANIZATION_ID },
});

export const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(serviceHref(service.slug))}#service`,
  name: service.name,
  serviceType: service.name,
  description: service.description,
  url: absoluteUrl(serviceHref(service.slug)),
  provider: { "@id": ORGANIZATION_ID },
  areaServed: { "@type": "Country", name: CONTACT_DETAILS.location },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.name} services`,
    itemListElement: service.includes.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
});

export const articleSchema = (article: Article, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(articleHref(article.slug))}#article`,
  mainEntityOfPage: absoluteUrl(articleHref(article.slug)),
  headline: article.title,
  description,
  image: absoluteUrl(OG_IMAGE.url),
  datePublished: article.publishedAt,
  dateModified: article.publishedAt,
  articleSection: article.category,
  inLanguage: "en-NG",
  author: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
});

export const faqSchema = (items: readonly FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});

export type BreadcrumbItem = {
  label: string;
  path: string;
};

export const breadcrumbSchema = (items: readonly BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ label, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: label,
    item: absoluteUrl(path),
  })),
});
