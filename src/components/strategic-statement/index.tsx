import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { EDITORIAL_STATEMENT } from "@/constants";

export const StrategicStatement = () => (
  <Section aria-label={EDITORIAL_STATEMENT.eyebrow}>
    <div className="grid gap-10 lg:grid-cols-12">
      <Reveal className="lg:col-span-3 lg:pt-3">
        <Eyebrow>{EDITORIAL_STATEMENT.eyebrow}</Eyebrow>
      </Reveal>
      <div className="flex flex-col gap-12 lg:col-span-9">
        <Reveal>
          <p className="text-headline font-display font-medium">
            {EDITORIAL_STATEMENT.lead} <span className="text-accent">{EDITORIAL_STATEMENT.accent}</span>
          </p>
        </Reveal>
        <Reveal index={1} className="grid gap-6 md:grid-cols-9">
          <p className="max-w-[54ch] text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-4">
            {EDITORIAL_STATEMENT.body}
          </p>
        </Reveal>
      </div>
    </div>
  </Section>
);
