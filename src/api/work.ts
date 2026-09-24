import { WORK_ITEMS } from "@/constants/work";
import type { WorkItem } from "@/types";

/** Client case studies first (newest first), then capability profiles */
const byKindThenYear = (a: WorkItem, b: WorkItem) => {
  if (a.kind !== b.kind) return a.kind === "case-study" ? -1 : 1;
  return (b.year ?? 0) - (a.year ?? 0);
};

export const getWorkItems = async (): Promise<WorkItem[]> => [...WORK_ITEMS].sort(byKindThenYear);

export const getWorkItemBySlug = async (slug: string): Promise<WorkItem | undefined> =>
  WORK_ITEMS.find((item) => item.slug === slug);

export const hasCaseStudies = async () => WORK_ITEMS.some((item) => item.kind === "case-study");
