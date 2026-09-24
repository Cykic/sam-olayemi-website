import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getArticleBySlug, getArticles, getRelatedArticles } from "@/api";
import { ArticleBody } from "@/components/article-body";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { InsightCard } from "@/components/insight-card";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { articleHref, ROUTES, SITE_CONFIG } from "@/constants";
import { articleSchema, contentMetadata, formatLongDate, readingMinutes } from "@/utils";

export const dynamicParams = false;

export const generateStaticParams = async () => (await getArticles()).map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return contentMetadata({
    title: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.excerpt,
    path: articleHref(slug),
    publishedTime: article.publishedAt,
    section: article.category,
  });
};

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article);

  return (
    <>
      <JsonLd data={articleSchema(article, article.seo?.description ?? article.excerpt)} />

      <article aria-labelledby="article-title">
        <Container className="pt-8 lg:pt-12">
          <div className="animate-rise">
            <Breadcrumbs
              items={[
                { label: "Insights", path: ROUTES.insights },
                { label: article.title, path: articleHref(article.slug) },
              ]}
            />
          </div>

          <header className="mx-auto mt-14 flex max-w-4xl flex-col gap-8 lg:mt-24">
            <div className="animate-rise" style={{ animationDelay: "60ms" }}>
              <Eyebrow>{article.category}</Eyebrow>
            </div>
            <h1 id="article-title" className="text-display animate-rise font-display font-semibold" style={{ animationDelay: "120ms" }}>
              {article.title}
            </h1>
            <p className="animate-rise text-xl leading-relaxed text-muted-foreground" style={{ animationDelay: "200ms" }}>
              {article.excerpt}
            </p>
            <p
              className="flex flex-wrap gap-x-4 gap-y-1 border-y border-border py-4 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
              style={{ animationDelay: "260ms" }}
            >
              <span>By {SITE_CONFIG.name}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>{formatLongDate(article.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(article)} min read</span>
            </p>
          </header>

          <div className="mx-auto max-w-[68ch] py-14 lg:py-20">
            <ArticleBody blocks={article.body} />
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <Section tone="surface" aria-labelledby="related-title">
          <h2 id="related-title" className="text-headline font-display font-semibold">
            Keep reading.
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <InsightCard article={item} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaSection />
    </>
  );
}
