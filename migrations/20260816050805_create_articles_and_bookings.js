/**
 * Schema derived from the application code:
 *   - src/lib/articles.ts (Article type + queries)
 *   - src/lib/bookings-actions.ts (insert/select/update)
 */

exports.up = async function (knex) {
  await knex.schema.createTable("articles", (t) => {
    t.bigIncrements("id").primary();
    t.text("title").notNullable();
    t.text("slug").notNullable().unique();
    t.text("excerpt").notNullable().defaultTo("");
    t.text("content");
    t.text("category").notNullable();
    t.text("image");
    t.text("status").notNullable().defaultTo("draft");
    t.specificType("tags", "text[]");
    t.text("reading_time");
    t.timestamp("created_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
    t.timestamp("updated_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable("bookings", (t) => {
    t.bigIncrements("id").primary();
    t.text("name").notNullable();
    t.text("email").notNullable();
    t.text("phone");
    t.text("subject");
    t.text("message");
    t.text("type").notNullable();
    t.text("status").notNullable().defaultTo("Pending");
    t.text("date").notNullable();
    t.text("time").notNullable();
    t.timestamp("created_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
  });

  await knex.raw("alter table public.articles enable row level security");
  await knex.raw("alter table public.bookings enable row level security");
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("bookings");
  await knex.schema.dropTableIfExists("articles");
};
