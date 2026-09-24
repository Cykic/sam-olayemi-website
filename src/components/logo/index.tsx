import Link from "next/link";

import { ROUTES, SITE_CONFIG } from "@/constants";
import { cn } from "@/utils";

export type LogoProps = {
  className?: string;
  onClick?: () => void;
};

/** The wordmark: set in capitals and spaced out, the way the brand is written */
export const Logo = ({ className, onClick }: LogoProps) => (
  <Link
    href={ROUTES.home}
    onClick={onClick}
    aria-label={`${SITE_CONFIG.name}, home`}
    className={cn(
      "inline-flex shrink-0 items-center rounded-sm text-[0.8125rem] font-semibold tracking-[0.18em] uppercase outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
      className,
    )}
  >
    {SITE_CONFIG.name}
  </Link>
);
