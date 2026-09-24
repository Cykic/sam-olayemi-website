import type { Metadata } from "next";

import { getArticles, getServices, getWorkItems } from "@/api";
import { CtaSection } from "@/components/cta-section";
import { EditorialHero } from "@/components/editorial-hero";
import { FaqSection } from "@/components/faq-section";
import { FeaturedWork } from "@/components/featured-work";
import { InsightsPreview } from "@/components/insights-preview";
import { ProcessTimeline } from "@/components/process-timeline";
import { ScrollStory } from "@/components/scroll-story";
import { ServiceExplorer } from "@/components/service-explorer";
import { ServicePillars } from "@/components/service-pillars";
import { StrategicStatement } from "@/components/strategic-statement";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { COMPANY_FAQ, HOME_FAQ_INTRO } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("home");

/** The first brief's homepage order: intro, problem, capabilities, proof, process, conversion */
export default async function HomePage() {
  const [services, work, articles] = await Promise.all([getServices(), getWorkItems(), getArticles(3)]);

  return (
    <>
      <EditorialHero />
      <StrategicStatement />
      <ServicePillars services={services} />
      <FeaturedWork items={work.slice(0, 4)} />
      <ScrollStory />
      <Section aria-labelledby="explorer-title">
        <SectionHeading
          eyebrow="Capabilities"
          title={<span id="explorer-title">What can we help with?</span>}
          description="Choose a capability to see what's involved. Every one connects to the others."
        />
        <div className="mt-16 lg:mt-24">
          <ServiceExplorer services={services} />
        </div>
      </Section>
      <ProcessTimeline />
      <InsightsPreview articles={articles} />
      <FaqSection eyebrow={HOME_FAQ_INTRO.eyebrow} title={HOME_FAQ_INTRO.title} items={COMPANY_FAQ} />
      <CtaSection />
    </>
  );
}
