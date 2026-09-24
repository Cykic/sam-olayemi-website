import type { Metadata } from "next";

import { getWorkItems, hasCaseStudies } from "@/api";
import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { WorkGrid } from "@/components/work-grid";
import { Section } from "@/components/ui/section";
import { ROUTES } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("work");

export default async function WorkPage() {
  const [items, withCaseStudies] = await Promise.all([getWorkItems(), hasCaseStudies()]);

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Work", path: ROUTES.work }]}
        eyebrow="Work"
        title={withCaseStudies ? "Selected work." : "Selected capabilities."}
        description={
          withCaseStudies
            ? "A selection of brands, campaigns, digital experiences and technology projects."
            : "The brand, campaign, communication and technology work we take on, and how each engagement runs. Client case studies will appear here as they're published."
        }
      />

      <Section spacing="compact" className="pt-0 lg:pt-0">
        <WorkGrid items={items} />
      </Section>

      <CtaSection />
    </>
  );
}
