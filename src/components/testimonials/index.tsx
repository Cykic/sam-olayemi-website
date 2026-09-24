import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TESTIMONIALS } from "@/constants";

/** Renders nothing until genuine testimonials are added in constants/proof.ts */
export const Testimonials = () => {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section aria-labelledby="testimonials-title">
      <Eyebrow>
        <span id="testimonials-title">In their words</span>
      </Eyebrow>
      <div className="mt-12 flex flex-col gap-20">
        {TESTIMONIALS.map(({ quote, name, role, company, logo }, index) => (
          <Reveal key={name} index={index} as="article">
            <figure className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <blockquote className="text-headline font-display font-medium lg:col-span-10">
                <p>“{quote}”</p>
              </blockquote>
              <figcaption className="flex items-center gap-4 lg:col-span-10">
                {logo ? <Image src={logo.src} alt={logo.alt} width={96} height={32} className="h-8 w-auto grayscale" /> : null}
                <span>
                  <span className="block font-medium">{name}</span>
                  <span className="text-muted-foreground">
                    {role}, {company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
