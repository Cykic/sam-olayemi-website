import type { CSSProperties } from "react";

import { Convergence } from "@/components/hero-section/convergence";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Magnetic } from "@/components/ui/magnetic";
import { HOME_HERO } from "@/constants";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

/** A product-launch opening: one statement, one line, two actions, and space */
export const HeroSection = () => (
  <>
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-var(--header-h))] flex-col items-center justify-center py-20 text-center"
    >
      <Container className="flex flex-col items-center">
        <h1 id="hero-title" className="text-giant font-display font-semibold">
          {HOME_HERO.headline.map((line, index) => (
            <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span className="block animate-line" style={delay(100 + index * 120)}>
                {line}{" "}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="mt-8 animate-rise font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase sm:mt-10 sm:text-sm"
          style={delay(450)}
        >
          {HOME_HERO.supporting}
        </p>

        <div className="mt-10 flex animate-rise flex-col items-center gap-5 sm:mt-12 sm:flex-row sm:gap-8" style={delay(600)}>
          <Magnetic>
            <LinkButton href={HOME_HERO.primary.href} size="lg">
              {HOME_HERO.primary.label}
            </LinkButton>
          </Magnetic>
          <LinkButton href={HOME_HERO.secondary.href} variant="link" className="text-base text-accent-foreground">
            {HOME_HERO.secondary.label}
          </LinkButton>
        </div>
      </Container>
    </section>

    <Convergence />
  </>
);
