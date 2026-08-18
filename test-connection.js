require("dotenv").config({ path: ".env.local" });
const { Client } = require("pg");

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    console.log("Connected to Postgres");

    const v = await client.query("select version()");
    console.log("  " + v.rows[0].version.split(",")[0]);

    const t = await client.query(
      "select table_name from information_schema.tables where table_schema = 'public' order by table_name"
    );
    if (t.rows.length === 0) {
      console.log("public schema has no tables yet (expected - we haven't migrated)");
    } else {
      console.log("Tables in public schema:");
      t.rows.forEach((r) => console.log("  - " + r.table_name));
    }
  } catch (err) {
    console.log("Connection failed:", err.message);
  } finally {
    await client.end();
  }
}

main();
