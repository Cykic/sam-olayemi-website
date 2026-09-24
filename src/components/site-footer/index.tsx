import Link from "next/link";

import { Container } from "@/components/ui/container";
import {
  CONTACT_DETAILS,
  FOOTER_LINKS,
  LEGAL_LINKS,
  PILLARS,
  ROUTES,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from "@/constants";

const columnTitle = "font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase";

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="pt-16 pb-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <p className="font-display text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
              {SITE_CONFIG.tagline}
            </p>
            <p className="max-w-[36ch] text-muted-foreground">{SITE_CONFIG.motto}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-4 lg:col-span-2 lg:col-start-6">
            <h2 className={columnTitle}>Navigate</h2>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <h2 className={columnTitle}>Services</h2>
            <ul className="flex flex-col gap-2.5">
              {PILLARS.map(({ id, shortName }) => (
                <li key={id}>
                  <Link href={`${ROUTES.services}#${id}`} className="link-underline">
                    {shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <h2 className={columnTitle}>Contact</h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="link-underline break-all">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              {CONTACT_DETAILS.phone ? (
                <li>
                  <a href={CONTACT_DETAILS.phone.href} className="link-underline">
                    {CONTACT_DETAILS.phone.display}
                  </a>
                </li>
              ) : null}
              <li className="text-muted-foreground">{CONTACT_DETAILS.location}</li>
            </ul>

            {SOCIAL_LINKS.length > 0 ? (
              <ul aria-label="Social profiles" className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="link-underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        {/* The wordmark, set as wide as the page: the footer's signature */}
        <p
          aria-hidden="true"
          className="mt-20 overflow-hidden border-b border-border pb-4 text-[14vw] leading-[0.8] font-semibold tracking-[-0.05em] whitespace-nowrap uppercase lg:mt-28 min-[1440px]:text-[12.6rem]"
        >
          {SITE_CONFIG.name}
        </p>

        <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {LEGAL_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="link-underline hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
