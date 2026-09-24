"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { REVEAL_ROOT_MARGIN, REVEAL_STAGGER_MS, REVEAL_STAGGER_WRAP } from "@/constants";
import { cn } from "@/utils";

export type RevealDirection = "up" | "fade" | "wipe";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  index?: number;
  as?: "div" | "li" | "article";
};

/* The motion itself is CSS (see `[data-reveal]` in globals.css); this component
   only flips `data-visible` once the block scrolls into view. */
export const Reveal = ({ children, className, direction = "up", index = 0, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    /* The first report also covers content already above the viewport, which
       happens when a visitor scrolls before the page hydrates. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isAbove = entry.boundingClientRect.bottom < (entry.rootBounds?.top ?? 0);

        if (entry.isIntersecting || isAbove) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: REVEAL_ROOT_MARGIN },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Component = as;
  const style = { "--reveal-delay": `${(index % REVEAL_STAGGER_WRAP) * REVEAL_STAGGER_MS}ms` } as CSSProperties;

  return (
    <Component
      ref={ref}
      data-reveal={direction}
      data-visible={isVisible || undefined}
      style={style}
      className={cn(className)}
    >
      {children}
    </Component>
  );
};
