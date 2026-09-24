import type { Metadata } from "next";

import { ContactMethods } from "@/components/contact-methods";
import { FaqSection } from "@/components/faq-section";
import { PageHeader } from "@/components/page-header";
import { ProjectInquiryForm } from "@/components/project-inquiry-form";
import { Section } from "@/components/ui/section";
import { CONTACT_DETAILS, CONTACT_FAQ, CTA_BAND, ROUTES } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Contact", path: ROUTES.contact }]}
        eyebrow="Start a project"
        title="Tell us what you’re building."
        description={CTA_BAND.description}
      />

      <Section id="start" spacing="compact" className="scroll-mt-(--header-h) pt-0 lg:pt-0" aria-label="Project inquiry">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="rounded-(--radius-card) bg-card p-6 sm:p-10 lg:col-span-8">
            <ProjectInquiryForm />
          </div>

          <aside aria-labelledby="direct-title" className="flex flex-col gap-10 lg:col-span-3 lg:col-start-10 lg:pt-10">
            <div className="flex flex-col gap-6">
              <h2 id="direct-title" className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Prefer to talk directly?
              </h2>
              <ContactMethods withSocial className="sm:grid-cols-1" />
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Response time</p>
              <p>{CONTACT_DETAILS.responseTime}</p>
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Based in</p>
              <p>{CONTACT_DETAILS.location}</p>
            </div>
          </aside>
        </div>
      </Section>

      <FaqSection eyebrow="Working together" title="Before you get in touch." items={CONTACT_FAQ} tone="surface" />
    </>
  );
}
