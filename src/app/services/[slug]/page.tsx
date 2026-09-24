import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getServiceBySlug, getServices, getServicesBySlugs } from "@/api";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { pillarById, ROUTES, serviceHref } from "@/constants";
import { contentMetadata, serviceSchema } from "@/utils";

export const dynamicParams = false;

export const generateStaticParams = async () => (await getServices()).map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: PageProps<"/services/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return contentMetadata({ title: service.seo.title, description: service.seo.description, path: serviceHref(slug) });
};

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const pillar = pillarById(service.pillar);
  const related = await getServicesBySlugs(service.related);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />

      <PageHeader
        breadcrumbs={[
          { label: "Services", path: ROUTES.services },
          { label: service.name, path: serviceHref(service.slug) },
        ]}
        eyebrow={pillar.name}
        title={service.name}
        description={service.description}
      />

      <Section rule aria-labelledby="included-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-3">
            <Eyebrow>
              <span id="included-title">What&rsquo;s included</span>
            </Eyebrow>
          </Reveal>
          <Reveal index={1} as="div" className="lg:col-span-9">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-5 text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="approach-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow>How it runs</Eyebrow>
            <h2 id="approach-title" className="text-headline font-display font-semibold">
              Three moves.
            </h2>
          </Reveal>
          <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {service.approach.map((step, index) => (
              <Reveal key={step} as="li" index={index} className="flex flex-col gap-4 border-t border-foreground pt-5">
                <span className="font-mono text-xs text-accent-foreground">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed">{step}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section aria-labelledby="fit-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow>Is it right for you?</Eyebrow>
            <h2 id="fit-title" className="text-headline font-display font-semibold">
              A good fit if…
            </h2>
          </Reveal>
          <ul className="flex flex-col lg:col-span-8">
            {service.goodFitIf.map((item, index) => (
              <Reveal key={item} as="li" index={index} className="border-b border-border py-6 text-xl leading-snug sm:text-2xl">
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface" spacing="compact" aria-labelledby="related-title">
          <h2 id="related-title" className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Often paired with
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-(--radius-card) md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="bg-card">
                <Link
                  href={serviceHref(item.slug)}
                  className="group flex h-full flex-col gap-4 p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:p-8"
                >
                  <span className="flex items-center justify-between gap-4 text-2xl font-medium tracking-[-0.03em]">
                    {item.name}
                    <ArrowIcon />
                  </span>
                  <span className="text-muted-foreground">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaSection />
    </>
  );
}
