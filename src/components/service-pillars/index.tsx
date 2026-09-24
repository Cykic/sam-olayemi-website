import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PILLARS, ROUTES, serviceHref } from "@/constants";
import type { Service } from "@/types";

export const ServicePillars = ({ services }: { services: readonly Service[] }) => (
  <Section tone="surface" aria-labelledby="pillars-title">
    <SectionHeading
      eyebrow="What we do"
      title={<span id="pillars-title">Three disciplines. One team.</span>}
      description="Hire us for one piece of work or the whole programme. Either way, every discipline informs the others."
    />
    <ol className="mt-16 grid gap-px overflow-hidden rounded-(--radius-card) border border-border bg-border lg:mt-24 lg:grid-cols-3">
      {PILLARS.map((pillar, index) => (
        <Reveal key={pillar.id} as="li" index={index} className="flex flex-col gap-8 bg-surface p-6 sm:p-8 lg:p-10">
          <span className="font-display text-6xl leading-none font-semibold tracking-[-0.05em] text-accent lg:text-7xl">{pillar.index}</span>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.02em] lg:text-[1.75rem]">{pillar.name}</h3>
            <p className="leading-relaxed text-muted-foreground">{pillar.description}</p>
          </div>
          <ul className="mt-auto flex flex-col border-t border-border">
            {services
              .filter((service) => service.pillar === pillar.id)
              .map(({ slug, name }) => (
                <li key={slug} className="border-b border-border">
                  <Link href={serviceHref(slug)} className="group flex min-h-11 items-center justify-between gap-4 py-2 text-[0.9375rem] transition-colors hover:text-accent-foreground">
                    {name}
                    <ArrowIcon className="opacity-40 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
          </ul>
          <Link href={`${ROUTES.services}#${pillar.id}`} className="link-underline self-start font-mono text-xs tracking-[0.14em] uppercase">
            Explore {pillar.shortName}
          </Link>
        </Reveal>
      ))}
    </ol>
  </Section>
);
