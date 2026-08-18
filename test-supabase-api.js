require("dotenv").config({ path: ".env.local" });
const { createClient } = require("@supabase/supabase-js");

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.log("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, status")
    .eq("status", "published");

  if (error) {
    console.log("API error:", error.message);
    process.exit(1);
  }

  console.log("Supabase API works. Published articles returned:", data.length);
  data.forEach((a) => console.log("  -", a.title, "(" + a.slug + ")"));
}

main();
