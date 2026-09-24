"use client";

import { HOME_BRAND } from "@/constants";
import { useActiveIndex } from "@/hooks";
import { cn } from "@/utils";

/**
 * Discover → Define → Express → Connect. Each stage lights as it reaches
 * the middle of the screen, and the rule between stages fills behind it.
 */
export const BrandJourney = () => {
  const steps = HOME_BRAND.journey;
  const { reached, register } = useActiveIndex(steps.length);

  return (
    <div>
      <h3 className="sr-only">How a brand comes together</h3>
      <ol className="grid gap-0 md:grid-cols-4 md:gap-6">
        {steps.map(({ step, line }, index) => {
          const isLit = index <= reached;

          return (
            <li
              key={step}
              ref={register(index)}
              className="relative flex gap-6 pb-12 md:flex-col md:gap-8 md:pb-0"
            >
              {/* The connector: vertical on phones, horizontal from md */}
              <span aria-hidden="true" className="relative mt-2 w-px shrink-0 self-stretch bg-border md:mt-0 md:h-px md:w-full">
                <span
                  className={cn(
                    "absolute inset-0 origin-top bg-accent transition-transform duration-1000 ease-(--ease-out) md:origin-left",
                    isLit ? "scale-100" : "scale-y-0 md:scale-x-0 md:scale-y-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute -top-1 -left-1 size-2.5 rounded-full transition-colors duration-500 md:-top-[4.5px] md:left-0",
                    isLit ? "bg-accent" : "bg-border",
                  )}
                />
              </span>

              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-display text-4xl font-semibold tracking-[-0.05em] transition-colors duration-500 lg:text-5xl",
                    isLit ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step}
                </span>
                <span className="max-w-[26ch] text-muted-foreground">{line}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
