import { getArticles } from "@/lib/articles";
import { ArticlesClient } from "./articles-client";

export const revalidate = 3600;

export default async function ArticlesPage() {
  const articles = await getArticles();
  return <ArticlesClient initialArticles={articles} />;
}
