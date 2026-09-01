import { Reveal, SectionHeading } from "@/components/reveal";
import { caseStudies } from "@/content/case-studies";

export default function TestimonialsPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Case Studies"
              title="Client work that shaped stronger customer relationships"
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.06}>
              <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="border-b border-border bg-accent/15 px-5 py-4 sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald">{study.client}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-primary">{study.tagline}</h3>
                  {study.subTagline ? (
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{study.subTagline}</p>
                  ) : null}
                </div>

                <div className="space-y-6 px-5 py-6 sm:px-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The Challenge</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Fikiri&apos;s Role</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">{study.role}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">What We Worked On</h4>
                    <ul className="mt-3 grid gap-2 text-sm text-foreground sm:grid-cols-2">
                      {study.whatWeWorkedOn.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-accent/20 p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The Outcome</h4>
                    <p className="mt-3 text-sm leading-relaxed text-foreground">{study.outcome}</p>
                  </div>

                  <blockquote className="border-l-2 border-emerald/60 pl-4 text-sm leading-relaxed text-primary">
                    “{study.quote}”
                    <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      — {study.quoteAuthor}
                    </footer>
                  </blockquote>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
