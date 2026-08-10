import { createClient } from "@supabase/supabase-js";

function getSupabaseCredentials() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];

  if (!url || !key) {
    return null;
  }

  return { url, key };
}

export function createServerSupabaseClient() {
  const credentials = getSupabaseCredentials();

  if (!credentials) {
    throw new Error(
      "Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file."
    );
  }

  return createClient(credentials.url, credentials.key, {
    auth: {
      persistSession: false,
    },
  });
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseCredentials() !== null;
}
