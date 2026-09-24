import Link from "next/link";

import { WorkArtwork } from "@/components/work-artwork";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { workHref } from "@/constants";
import type { WorkItem } from "@/types";
import { cn } from "@/utils";

export type ProjectCardProps = {
  item: WorkItem;
  /** Landscape art for wide grid cells, closer to square for narrow ones */
  shape?: "wide" | "tall";
  headingLevel?: "h2" | "h3";
  className?: string;
};

/** The whole card is one link target, via the title link's ::after, so it's still one tab stop */
export const ProjectCard = ({ item, shape = "wide", headingLevel: Heading = "h3", className }: ProjectCardProps) => {
  const isCaseStudy = item.kind === "case-study";

  return (
    <article className={cn("group relative flex flex-col gap-6", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-(--radius-card)",
          shape === "wide" ? "aspect-[4/3] lg:aspect-[16/11]" : "aspect-[4/3] lg:aspect-[4/5]",
        )}
      >
        <WorkArtwork
          variant={item.artwork.variant}
          tone={item.artwork.tone}
          className="transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col gap-3 transition-transform duration-500 ease-(--ease-out) group-hover:translate-x-1">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">
          <span className="text-accent-foreground">{item.label}</span>
          <span aria-hidden="true">/</span>
          <span>{isCaseStudy ? `${item.client} · ${item.year}` : "Capability"}</span>
        </p>

        <Heading className="font-display text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl">
          <Link
            href={workHref(item.slug)}
            className="inline-flex items-center gap-3 outline-none after:absolute after:inset-0 after:rounded-(--radius-card) focus-visible:after:ring-2 focus-visible:after:ring-ring"
          >
            {item.title}
            <ArrowIcon className="text-[0.8em]" />
          </Link>
        </Heading>

        <p className="max-w-[48ch] leading-relaxed text-muted-foreground">{item.summary}</p>
      </div>
    </article>
  );
};
