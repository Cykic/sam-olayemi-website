import { ProjectCard } from "@/components/project-card";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HOME_WORK, SECONDARY_CTA } from "@/constants";
import type { WorkItem } from "@/types";
import { cn } from "@/utils";

/* An editorial rhythm: wide and narrow cells alternate row by row */
const SPANS = ["lg:col-span-7", "lg:col-span-5 lg:mt-24", "lg:col-span-5", "lg:col-span-7 lg:mt-24"] as const;

export type FeaturedWorkProps = {
  items: readonly WorkItem[];
};

export const FeaturedWork = ({ items }: FeaturedWorkProps) => (
  <Section aria-labelledby="featured-work-title">
    <SectionHeading
      eyebrow={HOME_WORK.eyebrow}
      title={<span id="featured-work-title">{HOME_WORK.title}</span>}
      description={HOME_WORK.description}
      action={
        <LinkButton href={SECONDARY_CTA.href} variant="outline">
          {SECONDARY_CTA.label}
        </LinkButton>
      }
    />

    <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-y-24">
      {items.map((item, index) => (
        <Reveal key={item.slug} index={index % 2} className={cn(SPANS[index % SPANS.length])}>
          <ProjectCard item={item} shape={index % 4 === 0 || index % 4 === 3 ? "wide" : "tall"} />
        </Reveal>
      ))}
    </div>
  </Section>
);
