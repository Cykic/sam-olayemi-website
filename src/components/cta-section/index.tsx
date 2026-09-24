import { ContactMethods } from "@/components/contact-methods";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/link-button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_DETAILS, CTA_BAND, PRIMARY_CTA } from "@/constants";
import { cn } from "@/utils";

export type CtaSectionProps = {
  /** `giant` closes the homepage; inner pages use the quieter `large` */
  size?: "giant" | "large";
};

/** The closing band on every page but Contact: one statement, one action */
export const CtaSection = ({ size = "large" }: CtaSectionProps) => (
  <section id="contact" aria-labelledby="cta-title" className="bg-inverse text-inverse-foreground">
    <Container className="py-(--section-y)">
      <Reveal className="flex flex-col gap-10">
        <Eyebrow tone="inverse">{CTA_BAND.eyebrow}</Eyebrow>
        <h2 id="cta-title" className={cn(size === "giant" ? "text-giant" : "text-mega", "font-display font-semibold")}>
          {CTA_BAND.title.map((line) => (
            <span key={line} className="block">
              {line}{" "}
            </span>
          ))}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 border-t border-inverse-border pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-10">
        <Reveal className="flex flex-col gap-8 lg:col-span-5">
          <p className="max-w-[40ch] text-lg leading-relaxed text-inverse-muted lg:text-xl">{CTA_BAND.description}</p>
          <div>
            <Magnetic>
              <LinkButton href={PRIMARY_CTA.href} variant="accent" size="lg">
                {PRIMARY_CTA.label}
              </LinkButton>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal index={1} className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
          <ContactMethods tone="inverse" />
          <p className="text-sm text-inverse-muted">{CONTACT_DETAILS.responseTime}</p>
        </Reveal>
      </div>
    </Container>
  </section>
);
