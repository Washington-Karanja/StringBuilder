"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";

import { PostCard } from "@/components/post-card";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, formatDate, type Post } from "@/data/content";

export function ArticlesClient({ initialArticles }: { initialArticles: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const published = useMemo(() => initialArticles.filter((p) => p.status === "Published"), [initialArticles]);
  const featured = published[0];
  const filtered = useMemo(
    () =>
      published.slice(1).filter((p) => {
        const matchesCategory = category === "All" || p.category === category;
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        return matchesCategory && matchesQuery;
      }),
    [published, category, query],
  );

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Writing that thinks out loud"
              description="Essays on how decisions actually get made inside organisations — and what to do when the obvious answer isn't working."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        {!featured ? (
          <p className="py-20 text-center text-muted-foreground">No articles published yet.</p>
        ) : (
          <Reveal>
            <Link
              href={`/articles/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift lg:grid-cols-2"
            >
              <div className="aspect-16/10 overflow-hidden bg-secondary lg:aspect-auto">
                <img
                  src={featured.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-emerald px-2.5 py-1 font-semibold text-primary-foreground">
                    Featured
                  </span>
                  <span>{featured.category}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold leading-snug text-primary sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    MN
                  </span>
                  <div className="text-xs">
                    <p className="font-semibold text-primary">Martin Ngoni</p>
                    <p className="text-muted-foreground">{formatDate(featured.date)}</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-emerald/50 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="h-11 pl-10"
              aria-label="Search articles"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-sm font-medium text-primary">No articles match that search</p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Try a different keyword or category.
            </p>
            <Button
              variant="outline"
              className="mt-5"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : null}

        <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-surface p-8 text-center sm:p-14">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Insights, every other Tuesday
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            One essay on decision-making, strategy or leadership. No promotions, no filler, and one
            click to leave whenever you like.
          </p>
          <form
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
            }}
          >
            <Input type="email" required placeholder="you@company.com" className="h-11 bg-background" />
            <Button type="submit" variant="hero" className="h-11 shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
