export type InquiryNeed =
  | "branding"
  | "marketing"
  | "content"
  | "strategy"
  | "software"
  | "website"
  | "consulting"
  | "training"
  | "other";

export type InquiryTimeline = "asap" | "1-3-months" | "3-6-months" | "flexible";

export type InquiryBudget = "under-1m" | "1m-5m" | "5m-15m" | "15m-plus" | "discuss";

export type InquiryPayload = {
  needs: InquiryNeed[];
  details: string;
  timeline: InquiryTimeline | "";
  budget: InquiryBudget | "";
  name: string;
  email: string;
  company: string;
  phone: string;
  /** Honeypot: people never see this field, so anything in it is a bot */
  website: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>;
