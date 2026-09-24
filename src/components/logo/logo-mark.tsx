import { cn } from "@/utils";

/** Two squares overlapping in one signal-coloured cell: the disciplines meeting in the work */
export const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
    <rect x="1.25" y="1.25" width="13.5" height="13.5" stroke="currentColor" strokeWidth="2.5" />
    <rect x="9.25" y="9.25" width="13.5" height="13.5" stroke="currentColor" strokeWidth="2.5" />
    <rect x="10.5" y="10.5" width="3" height="3" fill="var(--accent)" />
  </svg>
);
