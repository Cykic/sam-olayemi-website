"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { WORK_FILTERS } from "@/constants";
import type { WorkCategory, WorkItem } from "@/types";
import { cn } from "@/utils";

export type WorkGridProps = {
  items: readonly WorkItem[];
};

export const WorkGrid = ({ items }: WorkGridProps) => {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const visible = filter === "all" ? items : items.filter(({ categories }) => categories.includes(filter));

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <div role="group" aria-label="Filter work by discipline" className="-mx-(--page-px) overflow-x-auto px-(--page-px) [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max gap-2">
          {WORK_FILTERS.map(({ value, label }) => {
            const isActive = filter === value;
            const count = value === "all" ? items.length : items.filter(({ categories }) => categories.includes(value)).length;

            return (
              <li key={value}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  disabled={count === 0}
                  onClick={() => setFilter(value)}
                  className={cn(
                    "flex h-10 cursor-pointer items-center gap-2 rounded-full px-4 text-sm transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:opacity-40",
                    isActive ? "bg-foreground text-background" : "bg-surface text-foreground hover:bg-foreground/10",
                  )}
                >
                  {label}
                  <span className={cn("font-mono text-[0.6875rem]", isActive ? "opacity-70" : "text-muted-foreground")}>
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} {visible.length === 1 ? "item" : "items"}
      </p>

      <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-y-24">
        {visible.map((item, index) => (
          <li
            key={`${filter}-${item.slug}`}
            className="animate-[zoom-in_600ms_var(--ease-out)_backwards] md:odd:translate-y-0 lg:even:mt-24"
            style={{ animationDelay: `${(index % 4) * 70}ms` }}
          >
            <ProjectCard item={item} shape={index % 2 === 0 ? "wide" : "tall"} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
};
