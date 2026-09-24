import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { CONTACT_DETAILS, ROUTES, SITE_CONFIG } from "@/constants";
import { pageMetadata } from "@/utils";

export const metadata: Metadata = pageMetadata("terms");

/* TODO(legal): have this reviewed before launch */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      path={ROUTES.terms}
      sections={[
        {
          heading: "Using this website",
          body: [
            `This website is provided by ${SITE_CONFIG.name} to describe our services and let you get in touch. By using it, you agree to these terms.`,
          ],
        },
        {
          heading: "Content",
          body: [
            "The text, design and graphics on this site belong to us unless stated otherwise. You're welcome to share links and quote short passages with attribution.",
            "Articles are general information, not professional advice for your specific situation.",
          ],
        },
        {
          heading: "Inquiries and projects",
          body: [
            "Sending an inquiry doesn't create an agreement. Any project we take on is governed by a separate written proposal or contract.",
          ],
        },
        {
          heading: "Changes and contact",
          body: [`We may update these terms from time to time. Questions? Email ${CONTACT_DETAILS.email}.`],
        },
      ]}
    />
  );
}
