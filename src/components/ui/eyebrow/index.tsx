import type { ReactNode } from "react";

import { cn } from "@/utils";

export type EyebrowProps = {
  children: ReactNode;
  /** A running number, e.g. "01", set before the label */
  index?: string;
  tone?: "default" | "inverse";
  as?: "p" | "span";
  className?: string;
};

/** The small uppercase label above headings: mono type and a signal square */
export const Eyebrow = ({ children, index, tone = "default", as: Component = "p", className }: EyebrowProps) => (
  <Component
    className={cn(
      "inline-flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.16em] uppercase sm:text-xs",
      tone === "default" ? "text-muted-foreground" : "text-inverse-muted",
      className,
    )}
  >
    <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent" />
    {index ? <span className={tone === "default" ? "text-foreground" : "text-inverse-foreground"}>{index}</span> : null}
    {children}
  </Component>
);
