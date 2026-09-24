import Link from "next/link";

import { LogoMark } from "@/components/logo/logo-mark";
import { ROUTES, SITE_CONFIG } from "@/constants";
import { cn } from "@/utils";

export type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export const Logo = ({ className, onClick }: LogoProps) => (
  <Link
    href={ROUTES.home}
    onClick={onClick}
    aria-label={`${SITE_CONFIG.name}, home`}
    className={cn(
      "group/logo inline-flex shrink-0 items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
      className,
    )}
  >
    <LogoMark className="size-6 transition-transform duration-500 ease-(--ease-out) group-hover/logo:rotate-90" />
    <span className="font-display text-[1.1875rem] leading-none font-semibold tracking-[-0.03em]">{SITE_CONFIG.name}</span>
  </Link>
);
