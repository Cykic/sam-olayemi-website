import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ProcessTimeline } from "@/components/process-timeline";
import { TeamGrid } from "@/components/team-grid";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ABOUT_BELIEFS, ABOUT_DISCIPLINES, ABOUT_HERO, ABOUT_STORY, ROUTES } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "About", path: ROUTES.about }]}
        eyebrow={ABOUT_HERO.eyebrow}
        title={ABOUT_HERO.title}
        description={ABOUT_HERO.description}
      />

      <Section rule aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow>{ABOUT_STORY.eyebrow}</Eyebrow>
            <h2 id="story-heading" className="text-headline font-display font-semibold">
              {ABOUT_STORY.title}
            </h2>
          </Reveal>
          <Reveal index={1} className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
            {ABOUT_STORY.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="disciplines-heading">
        <Eyebrow>
          <span id="disciplines-heading">What we work across</span>
        </Eyebrow>
        <ul className="mt-12">
          {ABOUT_DISCIPLINES.map(({ name, body }, index) => (
            <Reveal
              key={name}
              as="li"
              index={index}
              className="grid items-baseline gap-2 border-b border-border py-6 first:border-t md:grid-cols-12 md:gap-10"
            >
              <span className="text-display font-display font-semibold md:col-span-7">{name}.</span>
              <span className="text-lg text-muted-foreground md:col-span-5">{body}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="inverse" aria-labelledby="beliefs-heading">
        <Reveal className="flex flex-col gap-8">
          <Eyebrow tone="inverse">{ABOUT_BELIEFS.eyebrow}</Eyebrow>
          <h2 id="beliefs-heading" className="text-mega max-w-[14ch] font-display font-semibold">
            {ABOUT_BELIEFS.title}
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-24 lg:gap-16">
          {ABOUT_BELIEFS.values.map(({ title, body }, index) => (
            <Reveal key={title} as="li" index={index} className="flex flex-col gap-3 border-t border-inverse-border pt-6">
              <h3 className="text-2xl font-medium tracking-[-0.03em]">{title}</h3>
              <p className="max-w-[44ch] text-inverse-muted">{body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <ProcessTimeline />
      <TeamGrid />
      <CtaSection />
    </>
  );
}
