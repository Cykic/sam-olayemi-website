import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ROUTES } from "@/constants";
import { breadcrumbSchema, type BreadcrumbItem } from "@/utils";

export type BreadcrumbsProps = {
  /** Everything after Home; the last item is the current page */
  items: readonly BreadcrumbItem[];
  className?: string;
};

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  const trail = [{ label: "Home", path: ROUTES.home }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] text-muted-foreground uppercase">
          {trail.map(({ label, path }, index) => {
            const isCurrent = index === trail.length - 1;

            return (
              <li key={path} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {isCurrent ? (
                  <span aria-current="page" className="line-clamp-1 text-foreground">
                    {label}
                  </span>
                ) : (
                  <Link href={path} className="link-underline rounded-sm outline-none hover:text-foreground">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
