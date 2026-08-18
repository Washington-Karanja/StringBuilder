require("dotenv").config({ path: ".env.local" });

const u = process.env.DATABASE_URL;
if (!u) {
  console.log("DATABASE_URL not found in .env.local");
  process.exit(1);
}

const m = u.match(/^postgres(ql)?:\/\/([^:]+):[^@]+@([^/]+)\/(.+)$/);
if (!m) {
  console.log("DATABASE_URL is set but is not a valid postgres URI");
  process.exit(1);
}

console.log("DATABASE_URL loaded OK");
console.log("  user:    ", m[2]);
console.log("  host:    ", m[3]);
console.log("  database:", m[4]);
