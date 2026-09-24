import type { NavLink } from "@/types";

export const ROUTES = {
  home: "/",
  services: "/services",
  work: "/work",
  about: "/about",
  insights: "/insights",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const serviceHref = (slug: string) => `${ROUTES.services}/${slug}`;
export const workHref = (slug: string) => `${ROUTES.work}/${slug}`;
export const articleHref = (slug: string) => `${ROUTES.insights}/${slug}`;

/** The intake form's anchor on the contact page */
export const START_PROJECT_HREF = `${ROUTES.contact}#start`;

/** One primary and one secondary call to action, used everywhere */
export const PRIMARY_CTA = { label: "Start a Project", href: START_PROJECT_HREF } as const;
export const SECONDARY_CTA = { label: "Explore Our Work", href: ROUTES.work } as const;

/** Desktop navigation: the logo links home and "Start a Project" leads to contact */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Services", href: ROUTES.services },
  { label: "Work", href: ROUTES.work },
  { label: "About", href: ROUTES.about },
  { label: "Insights", href: ROUTES.insights },
  { label: "Contact", href: ROUTES.contact },
];

export const MOBILE_NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: ROUTES.home },
  ...NAV_LINKS,
];

export const FOOTER_LINKS: readonly NavLink[] = NAV_LINKS;

export const LEGAL_LINKS: readonly NavLink[] = [
  { label: "Privacy Policy", href: ROUTES.privacy },
  { label: "Terms", href: ROUTES.terms },
];
