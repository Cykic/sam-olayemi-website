"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Scroll progress through a tall element (0 at its top, 1 once its bottom
 * reaches the bottom of the viewport). Written to the element as `--p`, so
 * CSS drives the visuals without re-rendering React. Listens to scroll only
 * while the element is on screen.
 */
export const useScrollProgress = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onChange?: (progress: number) => void,
) => {
  const callback = useRef(onChange);

  useEffect(() => {
    callback.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 1;

      element.style.setProperty("--p", progress.toFixed(4));
      callback.current?.(progress);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
};
