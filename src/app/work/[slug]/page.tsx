import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getServicesBySlugs, getWorkItemBySlug, getWorkItems } from "@/api";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { WorkArtwork } from "@/components/work-artwork";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ROUTES, serviceHref, WORK_FILTERS, workHref } from "@/constants";
import { contentMetadata } from "@/utils";

export const dynamicParams = false;

export const generateStaticParams = async () => (await getWorkItems()).map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: PageProps<"/work/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const item = await getWorkItemBySlug(slug);
  if (!item) return {};

  const kind = item.kind === "case-study" ? `${item.label} case study` : `${item.label} capability`;
  return contentMetadata({ title: `${item.title}: ${kind}`, description: item.summary, path: workHref(slug) });
};

const HEADINGS = {
  "case-study": { overview: "Overview", approach: "Approach", solution: "Solution", outcome: "Outcome" },
  capability: {
    overview: "The challenge",
    approach: "Our approach",
    solution: "What we deliver",
    outcome: "What it's built to change",
  },
} as const;

export default async function WorkItemPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = await getWorkItemBySlug(slug);
  if (!item) notFound();

  const [services, all] = await Promise.all([getServicesBySlugs(item.services), getWorkItems()]);
  const next = all[(all.findIndex(({ slug: other }) => other === item.slug) + 1) % all.length];
  const headings = HEADINGS[item.kind];
  const isCaseStudy = item.kind === "case-study";
  const disciplines = item.categories
    .map((category) => WORK_FILTERS.find(({ value }) => value === category)?.label)
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <section aria-labelledby="work-title">
        <Container className="pt-8 lg:pt-12">
          <div className="animate-rise">
            <Breadcrumbs
              items={[
                { label: "Work", path: ROUTES.work },
                { label: item.title, path: workHref(item.slug) },
              ]}
            />
          </div>

          <div className="mt-14 flex flex-col gap-8 lg:mt-24">
            <div className="animate-rise" style={{ animationDelay: "60ms" }}>
              <Eyebrow>{isCaseStudy ? `${item.label} · ${item.client} · ${item.year}` : `${item.label} · Capability profile`}</Eyebrow>
            </div>
            <h1 id="work-title" className="text-mega animate-rise font-display font-semibold" style={{ animationDelay: "120ms" }}>
              {item.title}
            </h1>
            <p
              className="max-w-[48ch] animate-rise text-xl leading-relaxed text-muted-foreground lg:text-2xl"
              style={{ animationDelay: "200ms" }}
            >
              {item.summary}
            </p>
          </div>
        </Container>

        <Container className="mt-14 lg:mt-20">
          <Reveal direction="wipe" className="aspect-[4/3] overflow-hidden rounded-(--radius-card) md:aspect-[16/8]">
            <WorkArtwork variant={item.artwork.variant} tone={item.artwork.tone} />
          </Reveal>
        </Container>
      </section>

      <Section aria-label="Project details">
        <dl className="grid gap-8 border-b border-border pb-12 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">Type</dt>
            <dd>{isCaseStudy ? "Client case study" : "Capability profile"}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">Disciplines</dt>
            <dd>{disciplines}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">Services</dt>
            <dd className="flex flex-col gap-1">
              {services.map(({ slug: serviceSlug, name }) => (
                <Link key={serviceSlug} href={serviceHref(serviceSlug)} className="link-underline self-start">
                  {name}
                </Link>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-16 flex flex-col gap-16 lg:mt-24 lg:gap-24">
          {(
            [
              ["overview", <p key="p">{item.story.overview}</p>],
              [
                "approach",
                <ol key="o" className="flex flex-col gap-5">
                  {item.story.approach.map((step, index) => (
                    <li key={step} className="flex gap-5">
                      <span className="font-mono text-sm text-accent-foreground">{String(index + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>,
              ],
              ["solution", <p key="p">{item.story.solution}</p>],
              ["outcome", <p key="p">{item.story.outcome}</p>],
            ] as const
          ).map(([key, content]) => (
            <Reveal key={key} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <h2 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase lg:col-span-3 lg:pt-2">
                {headings[key]}
              </h2>
              <div className="max-w-[40ch] text-2xl leading-snug font-medium tracking-[-0.025em] sm:text-3xl lg:col-span-8">
                {content}
              </div>
            </Reveal>
          ))}
        </div>

        {!isCaseStudy ? (
          <p className="mt-20 max-w-[60ch] border-t border-border pt-6 text-sm text-muted-foreground">
            This page describes how we run this kind of engagement. It isn&rsquo;t a record of a specific client project.
          </p>
        ) : null}
      </Section>

      {next && next.slug !== item.slug ? (
        <section aria-label="Next" className="border-t border-border">
          <Container>
            <Link href={workHref(next.slug)} className="group flex flex-col gap-4 py-16 outline-none focus-visible:ring-2 focus-visible:ring-ring lg:py-24">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Next</span>
              <span className="text-display flex items-center gap-6 font-display font-semibold transition-colors group-hover:text-accent-foreground">
                {next.title}
                <ArrowIcon className="text-[0.6em]" />
              </span>
            </Link>
          </Container>
        </section>
      ) : null}

      <CtaSection />
    </>
  );
}
