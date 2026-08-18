/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // service_role has BYPASSRLS but still needs table-level GRANTs.
  // These weren't auto-applied because the tables were created by an
  // external tool (Knex, as the postgres user), which skips Supabase's
  // automatic grant step. We grant ONLY service_role so the app works
  // while bookings PII stays off the public API.
  await knex.raw("grant all privileges on table public.articles to service_role");
  await knex.raw("grant all privileges on table public.bookings to service_role");

  // Inserts rely on bigIncrements, which needs access to the id sequences.
  await knex.raw("grant usage, select on all sequences in schema public to service_role");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw("revoke all privileges on table public.articles from service_role");
  await knex.raw("revoke all privileges on table public.bookings from service_role");
  await knex.raw("revoke usage, select on all sequences in schema public from service_role");
};