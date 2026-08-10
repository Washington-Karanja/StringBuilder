"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function createArticle(formData: FormData) {
  const supabase = createServerSupabaseClient();

  const title = String(formData.get("title") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const category = String(formData.get("category") || "");
  const status = String(formData.get("status") || "draft");

  if (!title) {
    return { error: "Title is required" };
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

  const { data, error } = await supabase
    .from("articles")
    .insert({
      title,
      slug,
      excerpt: excerpt || null,
      content: content || null,
      category,
      status,
      image: null,
      tags: [],
      reading_time: "3 min read",
    })
    .select("*")
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data };
}

export async function updateArticle(id: number, formData: FormData) {
  const supabase = createServerSupabaseClient();

  const title = String(formData.get("title") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const category = String(formData.get("category") || "");
  const status = String(formData.get("status") || "draft");

  if (!title) {
    return { error: "Title is required" };
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

  const { data, error } = await supabase
    .from("articles")
    .update({
      title,
      slug,
      excerpt: excerpt || null,
      content: content || null,
      category,
      status,
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data };
}

export async function deleteArticle(id: number) {
  const supabase = createServerSupabaseClient();

  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}
