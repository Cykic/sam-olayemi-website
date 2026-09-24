"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Tracks which of a list of blocks is crossing the middle of the viewport.
 * Drives the scroll-activated sequences (the intersection story, the
 * process timeline) with one IntersectionObserver and no scroll listener.
 *
 * `reached` is the furthest index seen, so a sequence stays lit behind the
 * reader instead of switching off as they scroll past.
 */
export const useActiveIndex = (count: number) => {
  const elements = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(-1);
  const [reached, setReached] = useState(-1);

  const register = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      elements.current[index] = element;
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = elements.current.indexOf(entry.target as HTMLElement);
          if (index < 0) continue;

          if (entry.isIntersecting) {
            setActive(index);
            setReached((previous) => Math.max(previous, index));
          } else if (index === 0 && entry.boundingClientRect.top > 0) {
            // Scrolled back above the first block: the sequence resets
            setActive(-1);
            setReached(-1);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    elements.current.slice(0, count).forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, [count]);

  return { active, reached, register };
};
