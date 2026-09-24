import type { CSSProperties, ReactNode } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { BreadcrumbItem } from "@/utils";
import { cn } from "@/utils";

const rise = (delayMs: number): CSSProperties => ({ animationDelay: `${delayMs}ms` });

export type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs: readonly BreadcrumbItem[];
  /** Beside the standfirst from `lg`: a count, meta, a button */
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
};

/** The opening band of every inner page; its `h1` is the page's only one */
export const PageHeader = ({ eyebrow, title, description, breadcrumbs, aside, children, className }: PageHeaderProps) => (
  <section className={cn("relative isolate overflow-hidden", className)}>
    <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0 -z-10" />

    <Container className="pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="animate-rise" style={rise(0)}>
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <div className="mt-14 flex flex-col gap-8 lg:mt-24">
        {eyebrow ? (
          <div className="animate-rise" style={rise(60)}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        ) : null}

        <h1 className="text-display max-w-[16ch] animate-rise font-display font-semibold" style={rise(120)}>
          {title}
        </h1>

        {description || aside ? (
          <div className="grid gap-8 border-t border-border pt-8 lg:grid-cols-12 lg:gap-10">
            {description ? (
              <p
                className="max-w-[56ch] animate-rise text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-4 lg:text-xl"
                style={rise(200)}
              >
                {description}
              </p>
            ) : null}
            {aside ? (
              <div className="animate-rise lg:col-span-2 lg:col-start-11 lg:justify-self-end" style={rise(260)}>
                {aside}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {children ? (
        <div className="mt-12 animate-rise lg:mt-16" style={rise(320)}>
          {children}
        </div>
      ) : null}
    </Container>
  </section>
);
