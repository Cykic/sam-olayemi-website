import type { Article } from "@/types";

const WORDS_PER_MINUTE = 225;

const blockText = (article: Article) =>
  article.body
    .map((block) => (block.type === "list" ? block.items.join(" ") : block.text))
    .join(" ");

export const readingMinutes = (article: Article) =>
  Math.max(1, Math.round(blockText(article).split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
