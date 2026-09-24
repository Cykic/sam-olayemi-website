"use client";

import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/utils";

/**
 * Owns only the scrolled state, so the header's markup stays server-rendered.
 * Children shrink via `group-data-scrolled/header:`.
 */
export const HeaderShell = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 12);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      data-scrolled={isScrolled || undefined}
      className={cn(
        "group/header sticky top-0 z-40 w-full border-b transition-[border-color] duration-300 ease-(--ease-out)",
        isScrolled ? "border-border/80" : "border-transparent",
      )}
    >
      {/* The blur sits on its own layer: a backdrop-filter on the header itself
          would become the containing block for the fixed mobile menu and
          shrink it to the header's height */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/75 backdrop-blur-xl backdrop-saturate-150" />
      {children}
    </header>
  );
};
