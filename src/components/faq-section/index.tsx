import { JsonLd } from "@/components/json-ld";
import { Accordion } from "@/components/ui/accordion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import type { FaqItem } from "@/types";
import { faqSchema, slugify } from "@/utils";

export type FaqSectionProps = {
  eyebrow: string;
  title: string;
  items: readonly FaqItem[];
  tone?: "default" | "surface";
};

/** Question-and-answer pairs with FAQPage structured data */
export const FaqSection = ({ eyebrow, title, items, tone = "default" }: FaqSectionProps) => (
  <Section tone={tone} aria-labelledby="faq-title">
    <JsonLd data={faqSchema(items)} />

    <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      <Reveal className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:col-span-4 lg:self-start">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id="faq-title" className="text-headline font-display font-semibold">
          {title}
        </h2>
      </Reveal>

      <Reveal index={1} className="lg:col-span-7 lg:col-start-6">
        <Accordion
          defaultOpenId={slugify(items[0]?.question ?? "")}
          items={items.map(({ question, answer }) => ({
            id: slugify(question),
            title: question,
            content: <p className="max-w-[62ch] leading-relaxed text-muted-foreground">{answer}</p>,
          }))}
        />
      </Reveal>
    </div>
  </Section>
);
