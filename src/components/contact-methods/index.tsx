import { CONTACT_DETAILS, SOCIAL_LINKS, whatsappHref } from "@/constants";
import { cn } from "@/utils";

export type ContactMethodsProps = {
  tone?: "default" | "inverse";
  /** Include social profiles alongside direct contact */
  withSocial?: boolean;
  className?: string;
};

/** Email, phone, WhatsApp and social profiles: only the ones that exist */
export const ContactMethods = ({ tone = "default", withSocial = false, className }: ContactMethodsProps) => {
  const whatsapp = whatsappHref("Hello Sam-Olayemi, I'd like to talk about a project.");

  const methods = [
    { label: "Email", value: CONTACT_DETAILS.email, href: `mailto:${CONTACT_DETAILS.email}` },
    CONTACT_DETAILS.phone
      ? { label: "Phone", value: CONTACT_DETAILS.phone.display, href: CONTACT_DETAILS.phone.href }
      : null,
    CONTACT_DETAILS.whatsapp && whatsapp
      ? { label: "WhatsApp", value: CONTACT_DETAILS.whatsapp.display, href: whatsapp, external: true }
      : null,
    ...(withSocial
      ? SOCIAL_LINKS.map(({ label, href }) => ({ label, value: href.replace(/^https?:\/\/(www\.)?/, ""), href, external: true }))
      : []),
  ].filter((method) => method !== null);

  return (
    <dl className={cn("grid gap-x-10 gap-y-6 sm:grid-cols-2", className)}>
      {methods.map(({ label, value, href, ...rest }) => (
        <div key={label} className="flex flex-col gap-1.5">
          <dt
            className={cn(
              "font-mono text-[0.6875rem] tracking-[0.14em] uppercase",
              tone === "default" ? "text-muted-foreground" : "text-inverse-muted",
            )}
          >
            {label}
          </dt>
          <dd>
            <a
              href={href}
              {...("external" in rest ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="link-underline text-lg break-all"
            >
              {value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
};
