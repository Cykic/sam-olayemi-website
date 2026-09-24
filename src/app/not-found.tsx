import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { PRIMARY_CTA, ROUTES } from "@/constants";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">404</p>
      <h1 className="text-display mt-6 font-display font-semibold">This page doesn&rsquo;t exist.</h1>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">It may have moved, or the link may be mistyped.</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <LinkButton href={ROUTES.home} size="lg">
          Back to home
        </LinkButton>
        <LinkButton href={PRIMARY_CTA.href} size="lg" variant="outline">
          {PRIMARY_CTA.label}
        </LinkButton>
      </div>
    </Container>
  );
}
