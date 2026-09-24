/**
 * Content models. Everything the site renders comes through these shapes,
 * so moving the content from `src/constants` into a CMS (Sanity, Payload,
 * Contentful) means changing the functions in `src/api`, not the pages.
 */

export type PillarId = "brand" | "technology" | "strategy";

export type Pillar = {
  id: PillarId;
  index: string;
  name: string;
  shortName: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  pillar: PillarId;
  /** One line: cards, explorer rows and meta descriptions */
  summary: string;
  /** The service page's opening paragraph */
  description: string;
  includes: readonly string[];
  /** How the engagement usually runs, in three short moves */
  approach: readonly string[];
  goodFitIf: readonly string[];
  related: readonly string[];
  seo: { title: string; description: string };
};

export type WorkCategory = "brand" | "marketing" | "communication" | "technology" | "software" | "strategy";

export type ArtworkVariant = "orbits" | "signal" | "manuscript" | "blueprint" | "stack" | "frames";

export type ArtworkTone = "ink" | "paper" | "signal" | "moss" | "clay" | "slate";

/**
 * A `case-study` is client work and carries a client and year. A
 * `capability` profiles how a kind of engagement runs; it names no client
 * and claims no results, and the site labels it as such.
 */
export type WorkItem = {
  slug: string;
  kind: "case-study" | "capability";
  title: string;
  label: string;
  categories: readonly WorkCategory[];
  summary: string;
  services: readonly string[];
  client?: string;
  year?: number;
  artwork: { variant: ArtworkVariant; tone: ArtworkTone };
  story: {
    overview: string;
    approach: readonly string[];
    solution: string;
    outcome: string;
  };
};

export type InsightCategory =
  | "Branding"
  | "Marketing"
  | "Strategy"
  | "Technology"
  | "Software Engineering"
  | "AI"
  | "Business"
  | "Communication";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  /** ISO date */
  publishedAt: string;
  body: readonly ArticleBlock[];
  seo?: { title: string; description: string };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: { src: string; alt: string };
};

export type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: { src: string; alt: string };
  linkedIn?: string;
};
