import type { Metadata } from "next";

import { getArticles, getServicesBySlugs, getWorkItems } from "@/api";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { BrandJourney } from "@/components/brand-journey";
import { ChapterSection } from "@/components/chapter-section";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturedWork } from "@/components/featured-work";
import { HeroSection } from "@/components/hero-section";
import { InsightsPreview } from "@/components/insights-preview";
import { LogoCloud } from "@/components/logo-cloud";
import { ScrollStory } from "@/components/scroll-story";
import { Testimonials } from "@/components/testimonials";
import {
  COMPANY_FAQ,
  HOME_BRAND,
  HOME_FAQ_INTRO,
  HOME_STRATEGY,
  HOME_TECHNOLOGY,
} from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("home");

export default async function HomePage() {
  const [brandServices, technologyServices, strategyServices, work, articles] = await Promise.all([
    getServicesBySlugs(HOME_BRAND.services),
    getServicesBySlugs(HOME_TECHNOLOGY.services),
    getServicesBySlugs(HOME_STRATEGY.services),
    getWorkItems(),
    getArticles(3),
  ]);

  return (
    <>
      {/* Here's what we do */}
      <HeroSection />

      {/* Why it matters: strategy → creativity → technology → execution → result */}
      <ScrollStory />

      {/* What we can help with, one discipline at a time */}
      <ChapterSection id="brand" eyebrow={HOME_BRAND.eyebrow} title={HOME_BRAND.title} body={HOME_BRAND.body} services={brandServices}>
        <BrandJourney />
      </ChapterSection>

      <ChapterSection id="technology" tone="inverse" eyebrow={HOME_TECHNOLOGY.eyebrow} title={HOME_TECHNOLOGY.title} body={HOME_TECHNOLOGY.body} services={technologyServices}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <ArchitectureDiagram className="text-inverse-foreground lg:col-span-7" />
          <div className="flex flex-col gap-5 lg:col-span-4 lg:col-start-9">
            <h3 className="font-mono text-xs tracking-[0.2em] text-inverse-muted uppercase">What we build with</h3>
            <p className="text-2xl leading-snug font-medium tracking-[-0.03em] text-inverse-foreground">
              {HOME_TECHNOLOGY.stack.join(" · ")}
            </p>
          </div>
        </div>
      </ChapterSection>

      <ChapterSection id="strategy" tone="surface" layout="centered" eyebrow={HOME_STRATEGY.eyebrow} title={HOME_STRATEGY.title} body={HOME_STRATEGY.body} services={strategyServices} />

      {/* Proof */}
      <FeaturedWork items={work.slice(0, 4)} />
      <LogoCloud />
      <Testimonials />

      <InsightsPreview articles={articles} />

      <FaqSection eyebrow={HOME_FAQ_INTRO.eyebrow} title={HOME_FAQ_INTRO.title} items={COMPANY_FAQ} tone="surface" />

      {/* Let's build something */}
      <CtaSection size="giant" />
    </>
  );
}
