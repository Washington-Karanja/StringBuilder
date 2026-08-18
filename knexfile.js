// Knex configuration migrations only.
// The connection string lives in .env.local (git-ignored), never in this file.
require("dotenv").config({ path: ".env.local" });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Add your Supabase Session-pooler connection string to .env.local"
  );
}

module.exports = {
  client: "pg",
  connection: {
    connectionString,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
};
