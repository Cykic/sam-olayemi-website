import type { InquiryErrors, InquiryPayload } from "@/types";

export const INQUIRY_ENDPOINT = "/api/inquiries";

export type InquiryResult =
  | { ok: true }
  | { ok: false; message: string; errors?: InquiryErrors };

/** Browser-side: posts the intake form to the route handler */
export const submitInquiry = async (payload: InquiryPayload): Promise<InquiryResult> => {
  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) return { ok: true };

    const body = (await response.json().catch(() => null)) as { message?: string; errors?: InquiryErrors } | null;

    return {
      ok: false,
      message: body?.message ?? "We couldn't send your inquiry. Please try again.",
      errors: body?.errors,
    };
  } catch {
    return { ok: false, message: "You seem to be offline. Check your connection and try again." };
  }
};
