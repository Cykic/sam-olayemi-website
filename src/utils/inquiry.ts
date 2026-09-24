import { INQUIRY_BUDGETS, INQUIRY_NEEDS, INQUIRY_TIMELINES } from "@/constants/inquiry";
import type { InquiryErrors, InquiryPayload } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const INQUIRY_LIMITS = {
  details: { min: 20, max: 4000 },
  name: 120,
  company: 160,
  phone: 32,
} as const;

/** Field groups per form step, so each step validates only what it shows */
export const INQUIRY_STEP_FIELDS = [
  ["needs"],
  ["details"],
  ["timeline"],
  ["budget"],
  ["name", "email", "company", "phone"],
] as const satisfies readonly (readonly (keyof InquiryPayload)[])[];

/** Shared by the form and the route handler, so both enforce the same rules */
export const validateInquiry = (
  payload: InquiryPayload,
  fields: readonly (keyof InquiryPayload)[] = INQUIRY_STEP_FIELDS.flat(),
): InquiryErrors => {
  const errors: InquiryErrors = {};
  const has = (field: keyof InquiryPayload) => fields.includes(field);
  const details = payload.details.trim();

  if (has("needs")) {
    const known = new Set<string>(INQUIRY_NEEDS.map(({ value }) => value));
    if (payload.needs.length === 0) errors.needs = "Choose at least one area.";
    else if (payload.needs.some((need) => !known.has(need))) errors.needs = "Choose from the listed areas.";
  }

  if (has("details")) {
    if (details.length < INQUIRY_LIMITS.details.min)
      errors.details = `Give us a little more to go on (at least ${INQUIRY_LIMITS.details.min} characters).`;
    else if (details.length > INQUIRY_LIMITS.details.max)
      errors.details = `Keep it under ${INQUIRY_LIMITS.details.max} characters. We can go deeper on a call.`;
  }

  if (has("timeline") && !INQUIRY_TIMELINES.some(({ value }) => value === payload.timeline))
    errors.timeline = "Choose a timeline.";

  if (has("budget") && !INQUIRY_BUDGETS.some(({ value }) => value === payload.budget))
    errors.budget = "Choose a range, or “Prefer to discuss”.";

  if (has("name")) {
    const name = payload.name.trim();
    if (!name) errors.name = "Tell us your name.";
    else if (name.length > INQUIRY_LIMITS.name) errors.name = "That name is too long.";
  }

  if (has("email") && !EMAIL_PATTERN.test(payload.email.trim()))
    errors.email = "Enter an email address we can reply to.";

  if (has("company") && payload.company.trim().length > INQUIRY_LIMITS.company)
    errors.company = "That company name is too long.";

  if (has("phone")) {
    const phone = payload.phone.trim();
    if (phone && !/^[+()\d\s-]{7,}$/.test(phone)) errors.phone = "Enter a phone number, or leave it blank.";
    else if (phone.length > INQUIRY_LIMITS.phone) errors.phone = "That phone number is too long.";
  }

  return errors;
};
