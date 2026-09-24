"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/utils";

export type AccordionItem = {
  id: string;
  title: ReactNode;
  /** Shown beside the title, e.g. a running number */
  meta?: ReactNode;
  content: ReactNode;
};

export type AccordionProps = {
  items: readonly AccordionItem[];
  headingLevel?: "h2" | "h3" | "h4";
  defaultOpenId?: string | null;
  tone?: "default" | "inverse";
  className?: string;
};

/**
 * One panel open at a time. Closed panels stay in the DOM, so search engines
 * and find-in-page still see their text, and `inert` keeps them out of the
 * tab order. Height animates with the grid 0fr → 1fr technique.
 */
export const Accordion = ({
  items,
  headingLevel: Heading = "h3",
  defaultOpenId = null,
  tone = "default",
  className,
}: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const baseId = useId();
  const line = tone === "default" ? "border-border" : "border-inverse-border";

  return (
    <div className={cn("border-t", line, className)}>
      {items.map(({ id, title, meta, content }) => {
        const isOpen = openId === id;
        const buttonId = `${baseId}-${id}-button`;
        const panelId = `${baseId}-${id}-panel`;

        return (
          <div key={id} className={cn("border-b", line)}>
            <Heading className="font-sans text-base font-medium sm:text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : id)}
                className="group flex min-h-16 w-full cursor-pointer items-center gap-4 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {meta ? (
                  <span
                    className={cn(
                      "font-mono text-xs",
                      tone === "default" ? "text-muted-foreground" : "text-inverse-muted",
                    )}
                  >
                    {meta}
                  </span>
                ) : null}
                <span className="flex-1">{title}</span>
                <span aria-hidden="true" className="relative size-4 shrink-0">
                  <span className="absolute top-1/2 left-0 h-px w-4 bg-current" />
                  <span
                    className={cn(
                      "absolute top-0 left-1/2 h-4 w-px bg-current transition-transform duration-400 ease-(--ease-out)",
                      isOpen && "scale-y-0",
                    )}
                  />
                </span>
              </button>
            </Heading>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-(--ease-out)",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "pb-6 transition-opacity duration-500",
                    isOpen ? "opacity-100" : "opacity-0",
                  )}
                >
                  {content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
