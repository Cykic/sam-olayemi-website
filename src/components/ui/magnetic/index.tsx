"use client";

import { useEffect, useRef, type ReactNode } from "react";

export type MagneticProps = {
  children: ReactNode;
  /** How far the content can travel towards the pointer, in px */
  strength?: number;
  className?: string;
};

/**
 * Pulls its content slightly towards a mouse pointer. Only runs for a fine
 * pointer without reduced motion, and writes the transform directly so the
 * effect never re-renders React.
 */
export const Magnetic = ({ children, strength = 10, className }: MagneticProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!query.matches) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.transform = `translate3d(${x * strength}px, ${y * strength * 0.6}px, 0)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      element.style.transform = "";
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={`inline-flex transition-transform duration-500 ease-(--ease-out) will-change-transform ${className ?? ""}`}
    >
      {children}
    </span>
  );
};
