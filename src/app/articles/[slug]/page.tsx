import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

import { ArticleShare } from "@/components/article-share";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, getArticles } from "@/lib/articles";
import { formatDate } from "@/data/content";

export const metadata = {
  title: "Insights — Martin Ngoni",
  description: "Essays on strategy, leadership and decision making.",
};

const articleHeadings = new Set([
  "There Are Two Adoptions",
  "Culture Is the Operative Variable",
  "The Frontline Is Part of the Loyalty Product",
  "Transitions Are the Hard Case",
  "What This Changes in Practice",
  "Technology Still Matters",
  "Programmes Age Into Rigidity",
  "CORE",
  "PERIPHERAL",
  "Timing Is A Design Variable, Not An Afterthought",
  "The Relaunch Won'T Save You — Leadership Will",
  "The Real Loyalty Challenge",
]);

const articleHighlights = new Set([
  "Diagnose before you digitise.",
  "Design for behaviour, not just process.",
  "Measure internal adoption.",
  "Use incentives to start behaviour, not sustain it forever.",
  "01 — Are we changing the core or just the edges?",
  "02 — Are we operating on the customer's clock?",
  "03 — Can the organization actually move?",
]);

const hasStructuredSections = (slug: string) =>
  slug === "culture-not-campaigns" || slug === "your-loyalty-programme-isnt-underperforming";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getArticleBySlug(slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <h1 className="text-3xl font-bold text-primary">Article not found</h1>
        <p className="mt-3 text-muted-foreground">The article you are looking for does not exist.</p>
        <Link href="/articles" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald">
          <ArrowLeft className="h-4 w-4" /> Back to articles
        </Link>
      </section>
    );
  }

  const relatedArticles = (await getArticles())
    .filter((article) => article.status === "Published" && article.slug !== post.slug)
    .sort((first, second) => {
      const firstCategoryMatch = first.category === post.category ? 1 : 0;
      const secondCategoryMatch = second.category === post.category ? 1 : 0;

      if (firstCategoryMatch !== secondCategoryMatch) {
        return secondCategoryMatch - firstCategoryMatch;
      }

      const firstSharedTags = first.tags.filter((tag) => post.tags.includes(tag)).length;
      const secondSharedTags = second.tags.filter((tag) => post.tags.includes(tag)).length;

      if (firstSharedTags !== secondSharedTags) {
        return secondSharedTags - firstSharedTags;
      }

      return second.date.localeCompare(first.date);
    })
    .slice(0, 3);


  return (
    <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8">

      {/* Back button */}
      <Link
        href="/articles"
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

        <div className="mt-6">
          <ArticleShare />
        </div>

      </header>


      {/* Cover image */}
      <div className="mt-10 overflow-hidden rounded-3xl bg-secondary">
        <img
          src={post.cover}
          alt={post.title}
          className="aspect-16/10 w-full object-cover"
        />
      </div>


      {/* Article content */}
      <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
        {post.body.map((paragraph, index) => {
          const text = paragraph.trim();
          const hasSections = hasStructuredSections(post.slug);
          const isImage = /^\/images\/.+\.(jpg|jpeg|png|webp)$/i.test(text);

          if (isImage) {
            return (
              <div key={index} className="mt-10 overflow-hidden rounded-3xl bg-secondary">
                <img src={text} alt="" className="aspect-16/10 w-full object-cover" />
              </div>
            );
          }

          if (hasSections && articleHeadings.has(text)) {
            return (
              <h2 key={index} className="mt-12 text-2xl font-semibold text-primary sm:text-3xl">
                {text}
              </h2>
            );
          }

          if (hasSections && articleHighlights.has(text)) {
            return (
              <h3 key={index} className="mt-8 text-xl font-semibold text-primary sm:text-2xl">
                {text}
              </h3>
            );
          }

          return <p key={index}>{paragraph}</p>;
        })}
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

      {relatedArticles.length > 0 ? (
        <section className="mt-16 border-t border-border pt-10" aria-labelledby="more-insights-heading">
          <h2 id="more-insights-heading" className="text-2xl font-semibold text-primary sm:text-3xl">
            More insights
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <PostCard key={article.slug} post={article} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-16 rounded-3xl border border-border bg-surface p-8 sm:p-12">
        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Book a consultation</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Explore your loyalty, CRM or customer data challenge with Martin Ngoni.
        </p>
        <Button asChild variant="hero" className="mt-6">
          <Link href="/book">Book a consultation</Link>
        </Button>
      </section>

    </article>
  );
}
