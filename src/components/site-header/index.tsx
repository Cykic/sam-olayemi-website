import { DesktopNav } from "@/components/desktop-nav";
import { HeaderShell } from "@/components/header-shell";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { PRIMARY_CTA } from "@/constants";

export const SiteHeader = () => (
  <HeaderShell>
    <Container className="flex h-(--header-h) items-center justify-between gap-6 transition-[height] duration-300 ease-(--ease-out) lg:group-data-scrolled/header:h-14">
      <Logo />

      <DesktopNav className="hidden lg:block" />

      <div className="flex items-center gap-2">
        <ThemeToggle className="hidden lg:inline-flex" />
        <LinkButton href={PRIMARY_CTA.href} size="sm" className="hidden md:inline-flex">
          {PRIMARY_CTA.label}
        </LinkButton>
        <MobileNav className="lg:hidden" />
      </div>
    </Container>
  </HeaderShell>
);
