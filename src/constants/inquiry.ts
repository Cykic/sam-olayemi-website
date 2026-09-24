import type { InquiryBudget, InquiryNeed, InquiryPayload, InquiryTimeline } from "@/types";

type Option<T extends string> = { value: T; label: string; hint?: string };

export const INQUIRY_NEEDS: readonly Option<InquiryNeed>[] = [
  { value: "branding", label: "Branding", hint: "Positioning, identity, voice" },
  { value: "marketing", label: "Marketing", hint: "Strategy, campaigns, channels" },
  { value: "content", label: "Content", hint: "Copy, social, ghostwriting" },
  { value: "strategy", label: "Strategy", hint: "Business, brand, digital" },
  { value: "software", label: "Software", hint: "Apps, platforms, APIs" },
  { value: "website", label: "Website", hint: "Company site, e-commerce, CMS" },
  { value: "consulting", label: "Consulting", hint: "Advice and reviews" },
  { value: "training", label: "Training", hint: "Workshops, talks, programmes" },
  { value: "other", label: "Other", hint: "Something else entirely" },
];

export const INQUIRY_TIMELINES: readonly Option<InquiryTimeline>[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "flexible", label: "Flexible" },
];

/** Naira ranges for the local market; international clients can choose "Prefer to discuss" */
export const INQUIRY_BUDGETS: readonly Option<InquiryBudget>[] = [
  { value: "under-1m", label: "Under ₦1 million" },
  { value: "1m-5m", label: "₦1 million – ₦5 million" },
  { value: "5m-15m", label: "₦5 million – ₦15 million" },
  { value: "15m-plus", label: "₦15 million and above" },
  { value: "discuss", label: "Prefer to discuss" },
];

export const INQUIRY_STEPS = [
  { title: "What do you need?", description: "Choose everything that applies." },
  { title: "Tell us about the project", description: "What are you working on, and what would success look like?" },
  { title: "What is your timeline?", description: "When would you like to get started?" },
  { title: "Estimated budget", description: "A rough range helps us suggest the right scope." },
  { title: "How can we reach you?", description: "We'll reply by email." },
] as const;

export const INQUIRY_SUCCESS = {
  title: "Thank you.",
  body: "Thanks. We've received your project inquiry and will get back to you shortly.",
} as const;

export const EMPTY_INQUIRY: InquiryPayload = {
  needs: [],
  details: "",
  timeline: "",
  budget: "",
  name: "",
  email: "",
  company: "",
  phone: "",
  website: "",
};

export const labelFor = <T extends string>(options: readonly Option<T>[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value;
