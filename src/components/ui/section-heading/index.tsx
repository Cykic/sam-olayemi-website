import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/utils";

export type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Sits under the description on phones, bottom-right from `lg` */
  action?: ReactNode;
  /** `split`: eyebrow in a narrow left column, heading beside it (editorial). `stack`: one column. */
  layout?: "split" | "stack";
  as?: "h1" | "h2";
  tone?: "default" | "inverse";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  index,
  title,
  description,
  action,
  layout = "split",
  as: Heading = "h2",
  tone = "default",
  className,
}: SectionHeadingProps) => {
  const muted = tone === "default" ? "text-muted-foreground" : "text-inverse-muted";

  return (
    <Reveal className={cn("grid gap-6", layout === "split" && "lg:grid-cols-12 lg:gap-10", className)}>
      {eyebrow ? (
        <div className={cn(layout === "split" && "lg:col-span-3 lg:pt-3")}>
          <Eyebrow index={index} tone={tone}>
            {eyebrow}
          </Eyebrow>
        </div>
      ) : null}

      <div
        className={cn(
          "flex flex-col gap-6",
          layout === "split" && (eyebrow ? "lg:col-span-9" : "lg:col-span-9 lg:col-start-4"),
          action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        )}
      >
        <div className="flex max-w-4xl flex-col gap-5">
          <Heading className="text-headline font-display font-semibold">{title}</Heading>
          {description ? <p className={cn("max-w-[58ch] text-lg leading-relaxed", muted)}>{description}</p> : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
};
