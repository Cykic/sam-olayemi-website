import { NextResponse } from "next/server";

import { EMPTY_INQUIRY, INQUIRY_BUDGETS, INQUIRY_NEEDS, INQUIRY_TIMELINES, labelFor, SITE_CONFIG } from "@/constants";
import { CONTACT_DETAILS } from "@/constants/site";
import type { InquiryPayload } from "@/types";
import { validateInquiry } from "@/utils";

const ZEPTOMAIL_ENDPOINT = "https://api.zeptomail.com/v1.1/email";

/* Best-effort throttle per server instance: enough to blunt a burst, not a substitute for a WAF */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

const isThrottled = (key: string) => {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
};

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

/** Accepts only known fields, as strings, whatever the client sent */
const normalise = (body: unknown): InquiryPayload => {
  const input = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;
  const text = (key: keyof InquiryPayload) => (typeof input[key] === "string" ? (input[key] as string).trim() : "");

  return {
    ...EMPTY_INQUIRY,
    needs: Array.isArray(input.needs) ? input.needs.filter((need): need is InquiryPayload["needs"][number] => typeof need === "string") : [],
    details: text("details"),
    timeline: text("timeline") as InquiryPayload["timeline"],
    budget: text("budget") as InquiryPayload["budget"],
    name: text("name"),
    email: text("email"),
    company: text("company"),
    phone: text("phone"),
    website: text("website"),
  };
};

const renderEmail = (inquiry: InquiryPayload) => {
  const rows: [string, string][] = [
    ["Needs", inquiry.needs.map((need) => labelFor(INQUIRY_NEEDS, need)).join(", ")],
    ["Timeline", labelFor(INQUIRY_TIMELINES, inquiry.timeline)],
    ["Budget", labelFor(INQUIRY_BUDGETS, inquiry.budget)],
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Company", inquiry.company || "—"],
    ["Phone", inquiry.phone || "—"],
  ];

  const table = rows
    .map(([label, value]) => `<tr><td style="padding:6px 16px 6px 0;color:#636368">${label}</td><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  return `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#111">
<h2 style="margin:0 0 16px">New project inquiry</h2>
<table>${table}</table>
<h3 style="margin:24px 0 8px">Project</h3>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(inquiry.details)}</p>
</div>`;
};

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isThrottled(ip)) {
    return NextResponse.json({ message: "Too many inquiries from this connection. Please try again later." }, { status: 429 });
  }

  const inquiry = normalise(await request.json().catch(() => null));

  // A filled honeypot means a bot: report success and drop it
  if (inquiry.website) return NextResponse.json({ ok: true });

  const errors = validateInquiry(inquiry);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Some details need another look.", errors }, { status: 400 });
  }

  const token = process.env.ZEPTOMAIL_TOKEN;
  const to = process.env.INQUIRY_TO_EMAIL || CONTACT_DETAILS.email;
  const from = process.env.INQUIRY_FROM_EMAIL;

  if (!token || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[inquiry] Email delivery isn't configured; logging instead:", inquiry);
      return NextResponse.json({ ok: true });
    }

    console.error("[inquiry] ZEPTOMAIL_TOKEN or INQUIRY_FROM_EMAIL is missing; inquiry not delivered.");
    return NextResponse.json(
      { message: "Our inquiry form is temporarily unavailable." },
      { status: 503 },
    );
  }

  const response = await fetch(ZEPTOMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${token}`,
    },
    body: JSON.stringify({
      from: { address: from, name: `${SITE_CONFIG.name} website` },
      to: [{ email_address: { address: to } }],
      reply_to: [{ address: inquiry.email, name: inquiry.name }],
      subject: `Project inquiry: ${inquiry.name}${inquiry.company ? `, ${inquiry.company}` : ""}`,
      htmlbody: renderEmail(inquiry),
    }),
  }).catch(() => null);

  if (!response?.ok) {
    console.error("[inquiry] ZeptoMail rejected the message:", response?.status, await response?.text().catch(() => ""));
    return NextResponse.json({ message: "We couldn't send your inquiry just now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
