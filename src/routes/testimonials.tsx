import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — What Clients Say About Martin Ngoni" },
      {
        name: "description",
        content:
          "Feedback from founders, executives and senior professionals who have worked with consultant Martin Ngoni.",
      },
      { property: "og:title", content: "Client Testimonials — Martin Ngoni" },
      {
        property: "og:description",
        content: "Feedback from founders, executives and senior professionals.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = testimonials[index]!;

  const go = (step: number) => {
    setDirection(step);
    setIndex((i) => (i + step + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="The work, described by the people who lived it"
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-14">
          <Quote className="h-8 w-8 text-emerald/40" />
          <div className="relative mt-6 min-h-52 sm:min-h-44">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={active.name}
                initial={{ opacity: 0, x: direction * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -28 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display text-xl leading-relaxed text-primary sm:text-2xl">
                  "{active.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {active.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">{active.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{active.role}</p>
                  </div>
                  <span className="ml-auto flex shrink-0 gap-0.5">
                    {Array.from({ length: active.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-emerald text-emerald" />
                    ))}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <div className="flex gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-7 bg-emerald" : "w-2.5 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" aria-label="Previous" onClick={() => go(-1)}>
                <ChevronLeft />
              </Button>
              <Button variant="outline" size="icon" aria-label="Next" onClick={() => go(1)}>
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-emerald text-emerald" />
                  ))}
                </span>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-xs font-semibold text-primary">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/book">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
