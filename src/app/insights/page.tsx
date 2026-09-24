import type { Metadata } from "next";

import { getArticles } from "@/api";
import { CtaSection } from "@/components/cta-section";
import { InsightCard } from "@/components/insight-card";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ROUTES } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("insights");

export default async function InsightsPage() {
  const [featured, ...rest] = await getArticles();

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Insights", path: ROUTES.insights }]}
        eyebrow="Insights"
        title="Notes on brand, communication and technology."
        description="Practical thinking for founders, marketers and leaders on branding, marketing, strategy, software and AI."
      />

      <Section spacing="compact" className="pt-0 lg:pt-0">
        {featured ? (
          <Reveal>
            <InsightCard article={featured} headingLevel="h2" size="feature" />
          </Reveal>
        ) : (
          <p className="text-lg text-muted-foreground">The first articles are on their way.</p>
        )}

        {rest.length > 0 ? (
          <ul className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, index) => (
              <Reveal key={article.slug} as="li" index={index}>
                <InsightCard article={article} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        ) : null}
      </Section>

      <CtaSection />
    </>
  );
}
