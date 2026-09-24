import type { ArticleBlock } from "@/types";
import { slugify } from "@/utils";

export type ArticleBodyProps = {
  blocks: readonly ArticleBlock[];
};

/** Renders structured article blocks; section headings get anchors */
export const ArticleBody = ({ blocks }: ArticleBodyProps) => (
  <div className="flex flex-col gap-6 text-lg leading-[1.75] text-foreground/85">
    {blocks.map((block, index) => {
      switch (block.type) {
        case "h2":
          return (
            <h2
              key={index}
              id={slugify(block.text)}
              className="mt-8 scroll-mt-[calc(var(--header-h)+2rem)] font-display text-3xl leading-tight font-semibold tracking-[-0.035em] text-foreground"
            >
              {block.text}
            </h2>
          );
        case "list":
          return (
            <ul key={index} className="flex flex-col gap-3">
              {block.items.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="my-6 border-l-2 border-accent pl-6 font-display text-2xl leading-snug font-medium tracking-[-0.03em] text-foreground sm:text-3xl"
            >
              <p>{block.text}</p>
            </blockquote>
          );
        default:
          return <p key={index}>{block.text}</p>;
      }
    })}
  </div>
);
