"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { isActiveLink } from "@/components/desktop-nav";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkButton } from "@/components/ui/link-button";
import { CONTACT_DETAILS, MOBILE_NAV_LINKS, PRIMARY_CTA, SITE_CONFIG } from "@/constants";
import { useDisclosure, useScrollLock } from "@/hooks";
import type { WithClassName } from "@/types";
import { cn } from "@/utils";

export const MobileNav = ({ className }: WithClassName) => {
  const { isOpen, close, toggle } = useDisclosure();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpen.current) openButtonRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key !== "Tab" || !panelRef.current) return;

      // Keep Tab inside the open menu
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <div className={className}>
      <button
        ref={openButtonRef}
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex h-10 items-center gap-2.5 rounded-full border border-foreground/15 px-4 font-mono text-[0.6875rem] tracking-[0.14em] uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Menu
        <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-2/3 bg-current" />
        </span>
      </button>

      {/* Always mounted so it can animate both ways; `inert` takes it out of the
          tab order and the accessibility tree while it is closed */}
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!isOpen}
        className={cn(
          "fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background text-foreground",
          "[transition:clip-path_600ms_var(--ease-out),visibility_0s]",
          isOpen
            ? "visible [clip-path:inset(0_0_0_0)]"
            : "invisible [clip-path:inset(0_0_100%_0)] [transition:clip-path_500ms_var(--ease-in-out),visibility_0s_500ms]",
        )}
      >
        <div className="flex h-(--header-h) shrink-0 items-center justify-between px-(--page-px)">
          <Logo onClick={close} />
          <button
            type="button"
            onClick={close}
            className="flex h-10 items-center gap-2.5 rounded-full border border-foreground/15 px-4 font-mono text-[0.6875rem] tracking-[0.14em] uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Close
            <span aria-hidden="true" className="relative size-3.5">
              <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav aria-label="Primary" className="flex-1 px-(--page-px) pt-6 pb-10">
          <ol className="flex flex-col">
            {MOBILE_NAV_LINKS.map(({ label, href }, index) => {
              const isActive = isActiveLink(pathname, href);

              return (
                <li key={href} className="overflow-hidden border-b border-border">
                  <Link
                    href={href}
                    onClick={close}
                    aria-current={isActive ? "page" : undefined}
                    style={{ transitionDelay: isOpen ? `${120 + index * 50}ms` : "0ms" }}
                    className={cn(
                      "flex items-baseline gap-4 py-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "transition-transform duration-700 ease-(--ease-out)",
                      isOpen ? "translate-y-0" : "translate-y-full",
                    )}
                  >
                    <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <span
                      className={cn(
                        "font-display text-[2.75rem] leading-none font-semibold tracking-[-0.05em] sm:text-6xl",
                        isActive && "text-accent",
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="flex flex-col gap-5 border-t border-border px-(--page-px) pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <LinkButton href={PRIMARY_CTA.href} onClick={close} size="lg" fullWidth>
            {PRIMARY_CTA.label}
          </LinkButton>
          <div className="flex items-center justify-between gap-4">
            <a href={`mailto:${CONTACT_DETAILS.email}`} className="link-underline text-sm">
              {CONTACT_DETAILS.email}
            </a>
            <ThemeToggle />
          </div>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">{SITE_CONFIG.tagline}</p>
        </div>
      </div>
    </div>
  );
};
