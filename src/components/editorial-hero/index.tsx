import type { CSSProperties } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/link-button";
import { Magnetic } from "@/components/ui/magnetic";
import { Marquee } from "@/components/ui/marquee";
import { EDITORIAL_HERO, MARQUEE_ITEMS, PRIMARY_CTA, SECONDARY_CTA } from "@/constants";
import { cn } from "@/utils";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const FLOW = [
  { label: "Brand", detail: "Position · Identity · Voice" },
  { label: "Communication", detail: "Message · Content · Campaign" },
  { label: "Technology", detail: "Web · Product · Platform" },
] as const;

/** Nodes light up in turn while a pulse travels along each connector */
const HeroFlow = () => (
  <figure aria-label="How the work connects: brand, then communication, then technology, delivered by one team">
    <ol className="flex flex-col md:flex-row md:items-stretch">
      {FLOW.map(({ label, detail }, index) => (
        <li key={label} className="flex flex-col md:flex-1 md:flex-row md:items-center">
          {index > 0 ? (
            <span
              aria-hidden="true"
              className="flow-line ml-5 h-8 w-px md:ml-0 md:h-px md:w-auto md:min-w-6 md:flex-1"
              style={{ "--flow-delay": `${index * 2 - 0.6}s` } as CSSProperties}
            />
          ) : null}
          <div
            className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 px-4 py-4 md:flex-col md:items-start md:gap-6 md:px-5 md:py-5 motion-safe:animate-[node-cycle_6s_linear_infinite]"
            style={delay(index * 2000)}
          >
            <span
              aria-hidden="true"
              className="size-2.5 shrink-0 rounded-full bg-border motion-safe:animate-[dot-cycle_6s_linear_infinite]"
              style={delay(index * 2000)}
            />
            <span className="flex flex-col gap-1">
              <span className="font-display text-xl font-semibold tracking-[-0.02em]">{label}</span>
              <span className="font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase">{detail}</span>
            </span>
          </div>
        </li>
      ))}
    </ol>
    <figcaption className="mt-4 flex items-center gap-3 font-mono text-[0.625rem] tracking-[0.14em] text-muted-foreground uppercase">
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
      One team, one strategy
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </figcaption>
  </figure>
);

export const EditorialHero = () => (
  <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
    <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0 -z-10" />

    <Container className="pt-10 pb-14 sm:pt-14 lg:pt-20 lg:pb-20">
      <div className="flex animate-rise flex-wrap items-center justify-between gap-4">
        <Eyebrow>{EDITORIAL_HERO.eyebrow}</Eyebrow>
        <p className="hidden font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase sm:block">
          For {EDITORIAL_HERO.audiences.join(" · ")}
        </p>
      </div>

      <h1 id="hero-title" className="text-mega mt-10 font-display font-semibold sm:mt-14 lg:mt-16">
        {EDITORIAL_HERO.headline.map((line, index) => (
          <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
            <span
              className={cn("block animate-line", index === EDITORIAL_HERO.headline.length - 1 && "text-accent")}
              style={delay(80 + index * 90)}
            >
              {line}{" "}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="flex animate-rise flex-col gap-8 lg:col-span-5" style={delay(450)}>
          <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground lg:text-xl">{EDITORIAL_HERO.standfirst}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Magnetic className="w-full sm:w-auto">
              <LinkButton href={PRIMARY_CTA.href} size="lg" fullWidth>
                {PRIMARY_CTA.label}
              </LinkButton>
            </Magnetic>
            <LinkButton href={SECONDARY_CTA.href} size="lg" variant="outline">
              {SECONDARY_CTA.label}
            </LinkButton>
          </div>
        </div>
        <div className="animate-rise lg:col-span-7" style={delay(600)}>
          <HeroFlow />
        </div>
      </div>
    </Container>

    <div className="border-y border-border py-5 font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
      <Marquee items={MARQUEE_ITEMS} label="Capabilities" />
    </div>
  </section>
);
