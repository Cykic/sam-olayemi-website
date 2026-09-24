"use client";

import { useEffect, useState } from "react";

import { Accordion } from "@/components/ui/accordion";
import { LinkButton } from "@/components/ui/link-button";
import { PILLARS, serviceHref } from "@/constants";
import type { Service } from "@/types";
import { cn } from "@/utils";

export type ServiceExplorerProps = {
  services: readonly Service[];
};

const ServiceDetail = ({ service, compact = false }: { service: Service; compact?: boolean }) => (
  <div className="flex flex-col gap-8">
    {compact ? null : (
      <div className="flex flex-col gap-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {PILLARS.find(({ id }) => id === service.pillar)?.shortName}
        </p>
        <h3 className="text-display font-display font-semibold">{service.name}</h3>
      </div>
    )}
    <p className={cn("max-w-[52ch] leading-relaxed", compact ? "text-muted-foreground" : "text-lg sm:text-xl")}>
      {compact ? service.summary : service.description}
    </p>
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {service.includes.map((item) => (
        <li key={item} className="flex items-baseline gap-3 text-[0.9375rem]">
          <span aria-hidden="true" className="size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
    <div>
      <LinkButton href={serviceHref(service.slug)} variant={compact ? "outline" : "primary"}>
        Explore {service.name}
      </LinkButton>
    </div>
  </div>
);

/**
 * Desktop: every service listed on the left, grouped by discipline; pointing
 * at or focusing one swaps the detail on the right. Phones: one accordion
 * per discipline. Both are rendered, and CSS shows the right one.
 */
export const ServiceExplorer = ({ services }: ServiceExplorerProps) => {
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug);
  const selected = services.find(({ slug }) => slug === selectedSlug) ?? services[0];

  /* Pillar anchors (/services#brand) live on the desktop layout; on smaller
     screens that layout is hidden, so send the reader to the mobile group. */
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!PILLARS.some((pillar) => pillar.id === id)) return;
    if (document.getElementById(id)?.offsetParent !== null) return;
    document.getElementById(`${id}-mobile`)?.scrollIntoView();
  }, []);

  if (!selected) return null;

  return (
    <>
      {/* Desktop */}
      <div className="hidden gap-10 lg:grid lg:grid-cols-12">
        <div className="flex flex-col gap-12 lg:col-span-5">
          {PILLARS.map((pillar) => (
            <div key={pillar.id} id={pillar.id} className="scroll-mt-[calc(var(--header-h)+2rem)]">
              <h2 className="flex items-baseline gap-3 border-b border-border pb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                <span className="text-accent-foreground">{pillar.index}</span>
                {pillar.name}
              </h2>
              <ul>
                {services
                  .filter((service) => service.pillar === pillar.id)
                  .map((service) => {
                    const isSelected = service.slug === selected.slug;

                    return (
                      <li key={service.slug}>
                        <button
                          type="button"
                          aria-pressed={isSelected}
                          aria-controls="service-detail"
                          onClick={() => setSelectedSlug(service.slug)}
                          onMouseEnter={() => setSelectedSlug(service.slug)}
                          onFocus={() => setSelectedSlug(service.slug)}
                          className={cn(
                            "group flex w-full cursor-pointer items-center gap-4 py-3 text-left text-2xl font-medium tracking-[-0.03em] outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring",
                            isSelected ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "h-px bg-accent transition-[width] duration-500 ease-(--ease-out)",
                              isSelected ? "w-8" : "w-0",
                            )}
                          />
                          {service.name}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div
            id="service-detail"
            aria-live="polite"
            className="sticky top-[calc(var(--header-h)+3rem)] rounded-(--radius-card) bg-card p-10 xl:p-12"
          >
            <div key={selected.slug} className="animate-[zoom-in_450ms_var(--ease-out)]">
              <ServiceDetail service={selected} />
            </div>
          </div>
        </div>
      </div>

      {/* Phones and tablets */}
      <div className="flex flex-col gap-14 lg:hidden">
        {PILLARS.map((pillar) => (
          <div key={pillar.id} id={`${pillar.id}-mobile`} className="scroll-mt-[calc(var(--header-h)+1.5rem)]">
            <h2 className="mb-2 flex items-baseline gap-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              <span className="text-accent-foreground">{pillar.index}</span>
              {pillar.name}
            </h2>
            <Accordion
              items={services
                .filter((service) => service.pillar === pillar.id)
                .map((service) => ({
                  id: service.slug,
                  title: <span className="text-xl font-medium tracking-[-0.02em]">{service.name}</span>,
                  content: <ServiceDetail service={service} compact />,
                }))}
            />
          </div>
        ))}
      </div>
    </>
  );
};
