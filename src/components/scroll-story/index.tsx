"use client";

import { useCallback, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { HOME_STORY } from "@/constants";
import { useScrollProgress } from "@/hooks";
import { cn } from "@/utils";

const SCENES = HOME_STORY.scenes;

/**
 * The cinematic middle of the homepage: one scene per viewport, held in a
 * sticky stage while the page scrolls. Every scene stays in the DOM in
 * reading order, so screen readers and search engines get the full story.
 */
export const ScrollStory = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const onProgress = useCallback((progress: number) => {
    setActive(Math.min(SCENES.length - 1, Math.floor(progress * SCENES.length)));
  }, []);

  useScrollProgress(ref, onProgress);

  return (
    <section
      ref={ref}
      aria-labelledby="story-title"
      className="relative bg-inverse text-inverse-foreground"
      style={{ height: `${SCENES.length * 100}svh` }}
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <Container className="flex h-full flex-col pt-[calc(var(--header-h)+1.5rem)] pb-8 lg:pb-12">
          <h2 id="story-title" className="font-mono text-xs tracking-[0.2em] text-inverse-muted uppercase">
            {HOME_STORY.title}
          </h2>

          <ol className="relative flex-1">
            {SCENES.map((scene, index) => {
              const state = index === active ? "active" : index < active ? "past" : "next";
              const isResult = scene.key === "result";

              return (
                <li
                  key={scene.key}
                  aria-current={state === "active" ? "step" : undefined}
                  className={cn(
                    "absolute inset-0 flex flex-col justify-center gap-6 transition-[opacity,transform,filter] duration-700 ease-(--ease-out)",
                    state === "active" && "opacity-100 blur-0",
                    state === "past" && "-translate-y-10 opacity-0 blur-sm",
                    state === "next" && "translate-y-10 opacity-0 blur-sm",
                  )}
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-inverse-muted uppercase">
                    {String(index + 1).padStart(2, "0")} — {scene.word}
                  </p>

                  {isResult ? (
                    <p className="text-giant font-display font-semibold">
                      <span className="block">{scene.line}</span>
                      <span className="block text-inverse-accent">{scene.body}</span>
                    </p>
                  ) : (
                    <>
                      <p className="text-giant font-display font-semibold">{scene.word}.</p>
                      <div className="flex max-w-xl flex-col gap-2">
                        <p className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">{scene.line}</p>
                        <p className="text-lg text-inverse-muted">{scene.body}</p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Progress: one segment per scene */}
          <div aria-hidden="true" className="grid grid-cols-5 gap-2 sm:gap-3">
            {SCENES.map((scene, index) => (
              <div key={scene.key} className="flex flex-col gap-2">
                <span className="relative h-px overflow-hidden bg-inverse-border">
                  <span
                    className={cn(
                      "absolute inset-0 origin-left bg-inverse-foreground transition-transform duration-700 ease-(--ease-out)",
                      index <= active ? "scale-x-100" : "scale-x-0",
                      index === active && "bg-inverse-accent",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "hidden font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors sm:block",
                    index <= active ? "text-inverse-foreground" : "text-inverse-muted",
                  )}
                >
                  {scene.word}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
