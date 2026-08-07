import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";

import { formatDate, posts } from "@/data/content";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);

    return {
      meta: [
        {
          title: post
            ? `${post.title} — Martin Ngoni`
            : "Article — Martin Ngoni",
        },
        {
          name: "description",
          content:
            post?.excerpt ??
            "Insights on strategy, leadership and decision making.",
        },
        {
          property: "og:title",
          content: post?.title ?? "Martin Ngoni Insights",
        },
        {
          property: "og:description",
          content:
            post?.excerpt ??
            "Insights on strategy, leadership and decision making.",
        },
      ],
    };
  },

  component: BlogPost,
});


function BlogPost() {
  const { slug } = Route.useParams();

  const post = posts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <h1 className="text-3xl font-bold text-primary">
          Article not found
        </h1>

        <p className="mt-3 text-muted-foreground">
          The article you are looking for does not exist.
        </p>

        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
      </section>
    );
  }


  return (
    <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8">

      {/* Back button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All articles
      </Link>


      {/* Header */}
      <header className="mt-8">

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">

          <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
            {post.category}
          </span>

          <span>
            {formatDate(post.date)}
          </span>

          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>

        </div>


        <h1 className="mt-6 text-4xl font-bold leading-tight text-primary sm:text-5xl">
          {post.title}
        </h1>


        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

      </header>


      {/* Cover image */}
      <div className="mt-10 overflow-hidden rounded-3xl">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>


      {/* Article content */}
      <div className="prose prose-lg mt-12 max-w-none">

        {post.content ? (
          post.content
        ) : (
          <p>
            Article content coming soon.
          </p>
        )}

      </div>


      {/* Author */}
      <footer className="mt-14 border-t border-border pt-8">

        <div className="flex items-center gap-3">

          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            MN
          </div>

          <div>
            <p className="font-semibold text-primary">
              Martin Ngoni
            </p>

            <p className="text-sm text-muted-foreground">
              Strategy, leadership & decision making
            </p>
          </div>

        </div>

      </footer>

    </article>
  );
}