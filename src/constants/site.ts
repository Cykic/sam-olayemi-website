const DEFAULT_SITE_URL = "https://sam-olayemi.com";

/**
 * The canonical origin. Tolerates a blank or bare-host NEXT_PUBLIC_SITE_URL
 * (e.g. copied empty from .env.example into the host's settings), because
 * an invalid value here would break every page's metadata at build time.
 */
const resolveSiteUrl = (value: string | undefined) => {
  const trimmed = value?.trim();
  if (!trimmed) return DEFAULT_SITE_URL;

  try {
    return new URL(/^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const SITE_CONFIG = {
  name: "Sam-Olayemi",
  domain: "sam-olayemi.com",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  tagline: "Strategy. Creativity. Technology.",
  motto: "Think clearly. Create boldly. Build intelligently.",
  description:
    "Sam-Olayemi is a multidisciplinary company that builds brands, shapes communication and engineers digital products for startups, SMEs, organisations and leaders.",
  locale: "en_NG",
  country: "NG",
} as const;

export type SocialNetwork = "linkedin" | "instagram" | "x" | "youtube";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  href: string;
};

type ContactDetails = {
  email: string;
  phone?: { display: string; href: string };
  /** International format without "+", for wa.me links */
  whatsapp?: { display: string; number: string };
  location: string;
  responseTime: string;
};

/**
 * TODO(content): confirm the inbox, and add the phone and WhatsApp numbers.
 * Anything left undefined is hidden across the site rather than shown empty.
 */
export const CONTACT_DETAILS: ContactDetails = {
  email: "hello@sam-olayemi.com",
  location: "Nigeria",
  responseTime: "We reply to every project inquiry within two working days.",
};

/** TODO(content): add each profile as it goes live; the footer and contact page list only what's here. */
export const SOCIAL_LINKS: readonly SocialLink[] = [];

export const whatsappHref = (message: string) =>
  CONTACT_DETAILS.whatsapp
    ? `https://wa.me/${CONTACT_DETAILS.whatsapp.number}?text=${encodeURIComponent(message)}`
    : undefined;
