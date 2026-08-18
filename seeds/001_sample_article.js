/**
 * Sample article seed.
 * status is 'published' (lowercase) so the app's getArticles() query
 * .eq("status", "published") actually returns it — otherwise the app
 * silently falls back to local content and it looks like Supabase is empty.
 */

exports.seed = async function (knex) {
  // Remove any existing row with this slug so the seed is re-runnable
  await knex("articles").where({ slug: "welcome-to-supabase" }).del();

  await knex("articles").insert({
    title: "Welcome to Supabase",
    slug: "welcome-to-supabase",
    excerpt: "This article is served live from Postgres, not local fallback content.",
    content: "If you are reading this on the site, the database connection is working end to end.",
    category: "Strategy",
    status: "published",
    tags: ["supabase", "postgres"],
    reading_time: "2 min read",
  });
};
