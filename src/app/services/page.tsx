import type { Metadata } from "next";

import { getServices } from "@/api";
import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ServiceExplorer } from "@/components/service-explorer";
import { Section } from "@/components/ui/section";
import { ROUTES } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("services");

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Services", path: ROUTES.services }]}
        eyebrow="Services"
        title="Strategy. Creativity. Technology."
        description="Brand, strategy and technology services from one team. Hire us for a single piece of work or the whole programme."
      />

      <Section spacing="compact" className="pt-0 lg:pt-0">
        <ServiceExplorer services={services} />
      </Section>

      <CtaSection />
    </>
  );
}
