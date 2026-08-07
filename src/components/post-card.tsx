import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";

import { formatDate, type Post } from "@/data/content";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{
        slug: post.slug,
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="aspect-16/10 overflow-hidden bg-secondary">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-accent-foreground">
            {post.category}
          </span>

          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug text-primary group-hover:text-navy-soft">
          {post.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span>{formatDate(post.date)}</span>

          <span className="inline-flex items-center gap-1 font-semibold text-emerald">
            Read
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}