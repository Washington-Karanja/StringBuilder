import { createServerSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { posts as localPosts, type Post } from "@/data/content";

export type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  category: string;
  image: string | null;
  status: string;
  tags: string[] | null;
  reading_time: string | null;
  created_at: string;
  updated_at: string;
};

function mapSupabaseArticleToPost(article: Article): Post {
  const paragraphs = article.content
    ? article.content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
    : [];

  const post: Post = {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt || "",
    category: article.category,
    tags: article.tags || [],
    date: article.created_at?.split("T")[0] || "",
    readingTime: article.reading_time || "3 min read",
    cover: article.image || "/images/blog-post.jpg",
    status: article.status as "Published" | "Draft",
    body: paragraphs.length > 0 ? paragraphs : [],
    content: article.content || undefined,
  };

  if (article.content) {
    post.content = article.content;
  }

  return post;
}

export async function getArticles(): Promise<Post[]> {
  console.log("[DEBUG] isSupabaseConfigured:", isSupabaseConfigured());

  if (!isSupabaseConfigured()) {
    const local = localPosts.filter((p) => p.status === "Published");
    console.log("[DEBUG] returning local fallback:", local.length);
    return local;
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("status", "Published")
      .order("created_at", { ascending: false });

    console.log("[DEBUG] articles query:", { data, error, count: data?.length });
    if (error || !data || data.length === 0) {
      return localPosts.filter((p) => p.status === "Published");
    }

    return data.map(mapSupabaseArticleToPost);
  } catch {
    return localPosts.filter((p) => p.status === "Published");
  }
}

export async function getArticleBySlug(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) {
    return localPosts.find((p) => p.slug === slug) || null;
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return localPosts.find((p) => p.slug === slug) || null;
    }

    return mapSupabaseArticleToPost(data);
  } catch {
    return localPosts.find((p) => p.slug === slug) || null;
  }
}

export async function getAllArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      return [];
    }

    return data;
  } catch {
    return [];
  }
}

export const articleCategories = [
  "Loyalty",
  "Data",
  "Audit",
  "CRM",
  "Strategy",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];
