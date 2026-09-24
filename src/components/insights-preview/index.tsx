import { InsightCard } from "@/components/insight-card";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HOME_INSIGHTS, ROUTES } from "@/constants";
import type { Article } from "@/types";
import { cn, RAIL, RAIL_ITEM, RAIL_RESET } from "@/utils";

export type InsightsPreviewProps = {
  articles: readonly Article[];
};

export const InsightsPreview = ({ articles }: InsightsPreviewProps) => {
  if (articles.length === 0) return null;

  return (
    <Section aria-labelledby="insights-title">
      <SectionHeading
        eyebrow={HOME_INSIGHTS.eyebrow}
        title={<span id="insights-title">{HOME_INSIGHTS.title}</span>}
        action={
          <LinkButton href={ROUTES.insights} variant="outline">
            All insights
          </LinkButton>
        }
      />

      <ul className={cn(RAIL, RAIL_RESET, "mt-14 md:grid md:grid-cols-3 md:gap-10 lg:mt-20")}>
        {articles.map((article, index) => (
          <Reveal key={article.slug} as="li" index={index} className={RAIL_ITEM}>
            <InsightCard article={article} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};
