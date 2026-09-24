"use client";

import { useRef, type CSSProperties } from "react";

import { HOME_CONVERGE } from "@/constants";
import { useScrollProgress } from "@/hooks";

/**
 * Directly under the hero. As the reader scrolls through it, the three
 * disciplines arrive one after another, then fold into the company name.
 * The visuals are CSS (`.converge-*` in globals.css) reading `--p`.
 */
export const Convergence = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref);

  return (
    <section ref={ref} aria-label={HOME_CONVERGE.caption} className="converge relative h-[260svh]">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden">
        <p className="sr-only">
          {HOME_CONVERGE.words.join(", ")}: brought together as {HOME_CONVERGE.result}. {HOME_CONVERGE.caption}
        </p>

        <div aria-hidden="true" className="relative grid place-items-center">
          <div className="grid font-display text-[clamp(2.5rem,1rem+7vw,7.5rem)] leading-none font-semibold tracking-[-0.05em] [grid-area:1/1]">
            {HOME_CONVERGE.words.map((word, index) => (
              <span
                key={word}
                className="converge-word block py-[0.02em] text-center will-change-[transform,opacity,filter]"
                style={{ "--i": index } as CSSProperties}
              >
                {word}.
              </span>
            ))}
          </div>

          <span className="converge-result font-display text-[clamp(2.5rem,0.5rem+8.5vw,9rem)] leading-none font-semibold whitespace-nowrap uppercase will-change-[transform,opacity,filter] [grid-area:1/1]">
            {HOME_CONVERGE.result}
          </span>
        </div>

        <p
          aria-hidden="true"
          className="converge-caption absolute bottom-[12svh] font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
        >
          {HOME_CONVERGE.caption}
        </p>
      </div>
    </section>
  );
};
