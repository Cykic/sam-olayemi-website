import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";

export type LegalPageProps = {
  title: string;
  path: string;
  sections: readonly { heading: string; body: readonly string[] }[];
};

export const LegalPage = ({ title, path, sections }: LegalPageProps) => (
  <>
    <PageHeader breadcrumbs={[{ label: title, path }]} title={title} />
    <Section spacing="compact" className="pt-0 lg:pt-0">
      <div className="flex max-w-[68ch] flex-col gap-12 lg:ml-[25%]">
        {sections.map(({ heading, body }) => (
          <section key={heading} className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">{heading}</h2>
            {body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Section>
  </>
);
