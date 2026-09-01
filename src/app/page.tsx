import Link from "next/link";
import { ArrowRight, Award, Briefcase, CalendarCheck, Compass, TrendingUp, ShieldCheck, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/reveal";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/content";
import { services } from "@/content/services";
import { stats } from "@/content/home";
import { caseStudies } from "@/content/case-studies";

const icons = { Briefcase, Compass, TrendingUp, ShieldCheck, MessageSquare };

export const metadata = {
  title: "Fikiri Communication — Loyalty, CRM & Data Strategy",
  description: "Loyalty, CRM and data strategy for businesses that want measurable results.",
};

export default function Home() {
  const published = posts.filter((p) => p.status === "Published");

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="aurora" aria-hidden="true" />
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Loyalty, CRM & data strategy
            </span>
            <h1 className="text-balance-tight mt-6 text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
              Loyalty that earns its keep.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We help retailers, banks, airlines, medical care, telcos and consumer brands turn loyalty and customer data into measurable commercial results.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link href="/book">Request an Audit <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">How we work</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-emerald/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
                <img
                  src="/images/martin-portrait.jpg"
                  alt="Portrait of Martin Ngoni"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass-panel absolute -bottom-6 -left-4 hidden rounded-2xl p-4 shadow-lift sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald/15 text-emerald">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary">Fikiri Communication</p>
                    <p className="text-xs text-muted-foreground">Loyalty, CRM & data strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Three connected disciplines"
            description="Most loyalty programmes underperform because the proposition does not move behaviour, the marketing misses the moment, or the data is not good enough to trust."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-lift">
                  {Icon && (
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-6 text-lg font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Insights" title="Thinking on loyalty, retention and customer data" />
              <Button asChild variant="outline">
                <Link href="/articles">All articles <ArrowRight /></Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {published.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Case Studies" title="Client work that shaped stronger customer relationships" />
          </Reveal>
          <div className="mt-12 space-y-6">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.06}>
                <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                  <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="p-7 sm:p-8 lg:p-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald">{study.client}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl">{study.tagline}</h3>
                      {study.subTagline ? (
                        <p className="mt-2 text-sm font-medium text-muted-foreground">{study.subTagline}</p>
                      ) : null}

                      <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The challenge</h4>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Fikiri&apos;s role</h4>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">{study.role}</p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">What we worked on</h4>
                        <ul className="mt-3 grid gap-2 text-sm text-foreground sm:grid-cols-2">
                          {study.whatWeWorkedOn.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between border-t border-border bg-accent/30 p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The outcome</h4>
                        <p className="mt-3 text-sm leading-relaxed text-foreground">{study.outcome}</p>
                      </div>

                      <blockquote className="mt-8 border-l-2 border-emerald/60 pl-4 text-sm leading-relaxed text-primary">
                        “{study.quote}”
                        <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          — {study.quoteAuthor}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
            <div className="aurora" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-medium text-primary-foreground">
                <CalendarCheck className="h-3.5 w-3.5" /> Usually responds within 24 hours
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
                Ready to make loyalty work harder?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                Tell us where you are and we'll tell you where the opportunity is.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link href="/book">Request an Audit</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
