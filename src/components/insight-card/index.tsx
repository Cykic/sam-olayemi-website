import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { articleHref } from "@/constants";
import type { Article } from "@/types";
import { cn, formatLongDate, readingMinutes } from "@/utils";

export type InsightCardProps = {
  article: Article;
  headingLevel?: "h2" | "h3";
  size?: "default" | "feature";
  className?: string;
};

/** Typographic, not pictorial: category, title, excerpt, date and reading time */
export const InsightCard = ({ article, headingLevel: Heading = "h3", size = "default", className }: InsightCardProps) => (
  <article className={cn("group relative flex h-full flex-col gap-5 border-t border-border pt-6", className)}>
    <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-accent-foreground uppercase">{article.category}</p>

    <Heading
      className={cn(
        "font-display font-semibold tracking-[-0.035em]",
        size === "feature" ? "text-3xl leading-[1.05] sm:text-5xl" : "text-2xl leading-tight",
      )}
    >
      <Link
        href={articleHref(article.slug)}
        className="outline-none after:absolute after:inset-0 focus-visible:after:ring-2 focus-visible:after:ring-ring"
      >
        {article.title}
      </Link>
    </Heading>

    <p className={cn("leading-relaxed text-muted-foreground", size === "feature" && "max-w-[60ch] text-lg")}>
      {article.excerpt}
    </p>

    <p className="mt-auto flex items-center gap-3 pt-2 font-mono text-[0.6875rem] tracking-[0.12em] text-muted-foreground uppercase">
      <time dateTime={article.publishedAt}>{formatLongDate(article.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes(article)} min read</span>
      <ArrowIcon className="ml-auto text-base text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </p>
  </article>
);
