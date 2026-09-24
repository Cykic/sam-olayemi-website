import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { serviceHref } from "@/constants";
import type { Service } from "@/types";
import { cn } from "@/utils";

export type ChapterSectionProps = {
  id: string;
  eyebrow: string;
  title: readonly string[];
  body: string;
  services: readonly Service[];
  tone?: "default" | "surface" | "inverse";
  /** `split`: statement left, services right. `centered`: statement over a service row. */
  layout?: "split" | "centered";
  children?: ReactNode;
};

/**
 * One chapter of the homepage (Brand, Technology, Strategy): a statement set
 * large, one sentence, and the services as an editorial list rather than
 * a grid of cards.
 */
export const ChapterSection = ({
  id,
  eyebrow,
  title,
  body,
  services,
  tone = "default",
  layout = "split",
  children,
}: ChapterSectionProps) => {
  const inverse = tone === "inverse";
  const muted = inverse ? "text-inverse-muted" : "text-muted-foreground";
  const line = inverse ? "border-inverse-border" : "border-border";
  const headingId = `${id}-title`;

  const heading = (
    <h2 id={headingId} className="text-mega font-display font-semibold">
      {title.map((part) => (
        <span key={part} className="block">
          {part}{" "}
        </span>
      ))}
    </h2>
  );

  const serviceList = (
    <ul className={cn("border-t", line)}>
      {services.map(({ slug, name, summary }, index) => (
        <li key={slug} className={cn("border-b", line)}>
          <Link
            href={serviceHref(slug)}
            className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 py-5 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-6"
          >
            <span className={cn("font-mono text-xs", muted)}>{String(index + 1).padStart(2, "0")}</span>
            <span className="flex flex-col gap-1">
              <span className="text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent-foreground sm:text-3xl">
                {name}
              </span>
              <span className={cn("max-w-[52ch] text-sm leading-relaxed sm:text-[0.9375rem]", muted)}>{summary}</span>
            </span>
            <ArrowIcon className="self-center text-lg opacity-30 transition-opacity group-hover:opacity-100" />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Section id={id} tone={tone} aria-labelledby={headingId}>
      {layout === "split" ? (
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="flex flex-col gap-8 lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:col-span-6 lg:self-start">
            <Eyebrow tone={inverse ? "inverse" : "default"}>{eyebrow}</Eyebrow>
            {heading}
            <p className={cn("max-w-[40ch] text-lg leading-relaxed sm:text-xl", muted)}>{body}</p>
          </Reveal>
          <Reveal index={1} className="lg:col-span-6">
            {serviceList}
          </Reveal>
        </div>
      ) : (
        <div className="flex flex-col gap-16 lg:gap-24">
          <Reveal className="flex flex-col items-center gap-8 text-center">
            <Eyebrow tone={inverse ? "inverse" : "default"}>{eyebrow}</Eyebrow>
            {heading}
            <p className={cn("max-w-[40ch] text-lg leading-relaxed sm:text-xl", muted)}>{body}</p>
          </Reveal>
          <Reveal index={1} className="mx-auto w-full max-w-4xl">
            {serviceList}
          </Reveal>
        </div>
      )}

      {children ? <div className="mt-20 lg:mt-32">{children}</div> : null}
    </Section>
  );
};
