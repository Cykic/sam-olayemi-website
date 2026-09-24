import { ARTICLES } from "@/constants/insights";
import type { Article } from "@/types";

const newestFirst = (a: Article, b: Article) => b.publishedAt.localeCompare(a.publishedAt);

export const getArticles = async (limit?: number): Promise<Article[]> =>
  [...ARTICLES].sort(newestFirst).slice(0, limit);

export const getArticleBySlug = async (slug: string): Promise<Article | undefined> =>
  ARTICLES.find((article) => article.slug === slug);

/** Same category first, then the most recent of the rest */
export const getRelatedArticles = async (article: Article, limit = 3): Promise<Article[]> => {
  const others = [...ARTICLES].filter(({ slug }) => slug !== article.slug).sort(newestFirst);
  const sameCategory = others.filter(({ category }) => category === article.category);
  const rest = others.filter(({ category }) => category !== article.category);

  return [...sameCategory, ...rest].slice(0, limit);
};
