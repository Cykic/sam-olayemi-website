import { SERVICES } from "@/constants/services";
import type { PillarId, Service } from "@/types";

/*
 * Content access. These read local constants today; swapping them for CMS
 * queries is the only change needed to move content out of the repo.
 */

export const getServices = async (pillar?: PillarId): Promise<readonly Service[]> =>
  pillar ? SERVICES.filter((service) => service.pillar === pillar) : SERVICES;

export const getServiceBySlug = async (slug: string): Promise<Service | undefined> =>
  SERVICES.find((service) => service.slug === slug);

/** Keeps the order of `slugs` and skips any that no longer exist */
export const getServicesBySlugs = async (slugs: readonly string[]): Promise<Service[]> =>
  slugs.flatMap((slug) => SERVICES.find((service) => service.slug === slug) ?? []);
