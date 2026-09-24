"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/ui/container";
import { HOME_PROCESS, PROCESS_STEPS } from "@/constants";
import { useActiveIndex } from "@/hooks";
import { cn } from "@/utils";

/**
 * Six rows, one per stage. As each row crosses the middle of the screen its
 * rule fills and its number lights, so the process builds as you read it.
 */
export const ProcessTimeline = () => {
  const { active, reached, register } = useActiveIndex(PROCESS_STEPS.length);

  return (
    <section aria-labelledby="process-title" className="bg-surface py-(--section-y)">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3 lg:pt-3">
            <Eyebrow>{HOME_PROCESS.eyebrow}</Eyebrow>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-9">
            <h2 id="process-title" className="text-headline font-display font-semibold">
              {HOME_PROCESS.title}
            </h2>
            <p className="max-w-[52ch] text-lg text-muted-foreground">{HOME_PROCESS.description}</p>
          </div>
        </div>

        <ol className="mt-16 lg:mt-24">
          {PROCESS_STEPS.map(({ index, title, description }, position) => {
            const isLit = position <= reached;

            return (
              <li
                key={index}
                ref={register(position)}
                aria-current={position === active ? "step" : undefined}
                className="relative grid gap-3 py-8 sm:grid-cols-12 sm:gap-10 lg:py-10"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border">
                  <span
                    className={cn(
                      "absolute inset-0 origin-left bg-foreground transition-transform duration-1000 ease-(--ease-out)",
                      isLit ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "font-mono text-sm transition-colors duration-500 sm:col-span-2 lg:col-span-3",
                    isLit ? "text-accent-foreground" : "text-muted-foreground",
                  )}
                >
                  {index}
                </span>
                <h3
                  className={cn(
                    "font-display text-4xl font-semibold tracking-[-0.05em] transition-colors duration-500 sm:col-span-5 sm:text-5xl lg:col-span-4",
                    isLit ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {title}
                </h3>
                <p className="max-w-[44ch] text-muted-foreground sm:col-span-5 sm:pt-2 lg:col-span-5">{description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};
