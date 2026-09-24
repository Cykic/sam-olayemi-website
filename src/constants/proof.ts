import type { ClientLogo, TeamMember, Testimonial } from "@/types";

/*
 * Social proof. Each list is empty until real, approved content exists; the
 * sections that use them render nothing while their list is empty.
 * Never add placeholder people, quotes or logos here.
 */

/** TODO(content): add genuine client testimonials, with permission. */
export const TESTIMONIALS: readonly Testimonial[] = [];

/** TODO(content): add client logos (monochrome SVGs in /public/clients), with permission. */
export const CLIENT_LOGOS: readonly ClientLogo[] = [];

/** TODO(content): add leadership and team profiles. */
export const TEAM: readonly TeamMember[] = [];
