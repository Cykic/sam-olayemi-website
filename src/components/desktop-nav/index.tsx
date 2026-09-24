"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/constants";
import type { WithClassName } from "@/types";
import { cn } from "@/utils";

export const isActiveLink = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export const DesktopNav = ({ className }: WithClassName) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={className}>
      <ul className="flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = isActiveLink(pathname, href);

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative block rounded-sm px-3.5 py-2 text-sm transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  /* The indicator draws in from the left and sits under the active page */
                  "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-400 after:ease-(--ease-out)",
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100",
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
