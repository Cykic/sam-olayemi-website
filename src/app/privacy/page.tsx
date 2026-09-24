import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { CONTACT_DETAILS, ROUTES, SITE_CONFIG } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("privacy");

/* TODO(legal): have this reviewed against the NDPA 2023 before launch */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path={ROUTES.privacy}
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you send a project inquiry, we collect what you enter: your name, email address, and optionally your company and phone number, along with your project details, timeline and budget range.",
            "We don't use advertising trackers. If we add analytics, this page will say which service we use and what it records.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            `We use your details only to respond to your inquiry and, if we work together, to run the project. ${SITE_CONFIG.name} doesn't sell or share your information for marketing.`,
            "Inquiries are delivered to our inbox by an email provider acting on our behalf.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep inquiry details for as long as we need them to respond and, where a project follows, for the period our contractual and legal obligations require.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            `You can ask to see, correct or delete the information we hold about you by emailing ${CONTACT_DETAILS.email}. We'll respond within a reasonable time and as the law requires.`,
          ],
        },
        {
          heading: "Your theme preference",
          body: [
            "If you switch between light and dark mode, your browser stores that choice locally. It isn't sent to us.",
          ],
        },
      ]}
    />
  );
}
