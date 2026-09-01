import { Award, CheckCircle2, Globe2, Target, ArrowRight } from "lucide-react";

import Link from "next/link";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { disciplines, industries, principles } from "@/content/about";

export const metadata = {
  title: "About Fikiri Communication",
  description: "Fikiri Communication is a specialist consulting practice for loyalty, CRM and data analytics.",
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. About Fikiri Communication / Who We Are */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="About Fikiri Communication"
              description="Fikiri Communication is a specialist consulting practice helping businesses build customer loyalty that lasts. We work across three connected disciplines — loyalty, engagement, and data analytics — to help brands turn everyday customers into loyal ones, and loyal ones into brand advocates."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img src="/images/martin-team.jpg" alt="Martin Ngoni team" loading="lazy" width={1200} height={1008} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <h2 className="text-2xl font-semibold text-primary">Who We Are</h2>
              <p>We do not sell software and we are not tied to any vendor. Our value is objective advice and hands-on experience from people who have built and run loyalty programmes, not just written about them.</p>
              <p>Loyalty is never bought with discounts. It is built deliberately, when a brand makes every customer feel understood, recognised and genuinely rewarded for staying.</p>
              <p>A compelling programme fails if marketing never reaches the right customer, and both fail if the data underneath cannot be trusted. That is why we treat loyalty, CRM and data as one connected system — and start with the data foundation.</p>

              <div className="rounded-2xl border border-border bg-accent/40 p-6">
                <div className="flex items-center gap-2 text-accent-foreground">
                  <Target className="h-4.5 w-4.5" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">The question that matters</h3>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">Is your programme simple, personalised and valuable? Getting you to a confident "yes" on all three is our work.</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="hero"><Link href="/book">Request an Audit</Link></Button>
                <Button asChild variant="outline"><Link href="/services">Explore services</Link></Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. What We Believe */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Believe"
              title="Loyalty is engineered, not hoped for"
              description="Loyalty is never bought with discounts. It is built, deliberately, when a brand makes every customer feel understood, recognised and genuinely rewarded for staying. And it never stands on its own — a compelling programme fails if the marketing never reaches the right customer, and both fail if the data underneath cannot be trusted. That is why we treat loyalty, CRM and data as one connected system, and why we start with the data foundation everything else is built on."
              align="center"
            />
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {["Data", "CRM / Engagement", "Loyalty"].map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="mt-2 text-sm font-semibold text-primary">{step}</span>
                  </div>
                  {i < 2 ? <ArrowRight className="hidden h-5 w-5 text-emerald sm:block" /> : null}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center gap-2 text-emerald">
                  <Award className="h-5 w-5" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Our practice</h3>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {disciplines.map((discipline) => (
                    <li key={discipline} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      {discipline}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center gap-2 text-emerald">
                  <Globe2 className="h-5 w-5" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Who we work with</h3>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  We work with brands that take customer relationships seriously — across retail and shopping centres, hospitality and travel, banking, telecommunications, e-commerce, and healthcare, including the pharmacy sector, where trust and repeat relationships matter more than almost anywhere. Our focus is the same in every one: helping brands build lasting connections and loyalty programmes their customers actually value, across the Gulf, EMEA and beyond.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. The Question Every Business Should Be Able To Answer */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The foundation"
            title="The question every business should be able to answer"
            description="Whatever your industry, your loyalty programme comes down to one question. Ask it honestly."
            align="center"
          />
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-14">
              <h3 className="text-2xl font-semibold text-primary sm:text-3xl">
                Is it simple, personalised, and valuable?
              </h3>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <h4 className="text-lg font-semibold text-primary">{principle.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto max-w-3xl mt-10 rounded-2xl border border-emerald/30 bg-emerald/5 p-7 text-center sm:p-10">
              <p className="text-base leading-relaxed text-foreground">
                Most programmes fall down on at least one. The best get all three right — and that is the whole difference between a programme customers tolerate and one they cannot imagine leaving. Getting you to a confident "yes" on all three is our work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Clients"
              title="Who We Work With"
              description="We work with brands that take customer relationships seriously — across retail and shopping centres, hospitality and travel, banking, telecommunications, e-commerce, and healthcare. Our focus is the same in every one: helping brands build lasting connections and loyalty programmes their customers actually value, across EMEA."
            />
          </Reveal>

          <div className="mt-10 space-y-8">
            {[
              {
                name: "Village Market",
                tagline: "From a legacy loyalty programme to a digital customer ecosystem",
                challenge:
                  "Village Market wanted to transition its legacy loyalty programme into a more modern digital ecosystem that could provide a more seamless member experience and create a stronger foundation for customer engagement.",
                role:
                  "Fikiri supported the transition by helping shape the move from the traditional loyalty model into a digital ecosystem, with a focus on the customer proposition, programme structure and the foundations required for a more connected loyalty experience.",
                whatWeWorkedOn: [
                  "Digital loyalty programme transition",
                  "Loyalty technology sourcing",
                  "Loyalty proposition and programme structure",
                  "Customer experience considerations",
                  "Digital member engagement",
                  "Foundations for a more connected customer ecosystem",
                ],
                outcome:
                  "The transition created the foundation for a more digitally enabled loyalty experience, giving Village Market a platform from which to build stronger member engagement and more data-informed customer relationships.",
                quote:
                  "Fikiri brought a practical understanding of how loyalty needs to evolve alongside the customer experience. Their approach helped us move beyond simply digitising the programme and think about the broader ecosystem we wanted to create.",
                quoteAuthor: "Village Market",
              },
              {
                name: "Circle Rewards",
                tagline: "Restructuring the value proposition around the customer",
                challenge:
                  "Circle Rewards needed to strengthen its value proposition and create a clearer understanding of its members in order to drive more meaningful engagement and personalisation.",
                role:
                  "Fikiri worked across the programme proposition, customer data and segmentation to create a stronger foundation for more relevant and impactful member engagement.",
                whatWeWorkedOn: [
                  "Value proposition review and restructuring",
                  "Data quality improvement",
                  "Segmentation review and refinement",
                  "Data connectivity and insight integration",
                ],
                outcome:
                  "The work established a stronger connection between proposition, data, segmentation and engagement, creating a more robust foundation for personalised customer experiences and ongoing loyalty optimisation.",
                quote:
                  "Fikiri helped us look at Circle Rewards as more than a loyalty programme. They challenged the proposition, strengthened our understanding of our customer data and helped us rethink how we could use segmentation and connected data to create more relevant experiences.",
                quoteAuthor: "Circle Rewards",
              },
              {
                name: "Guardian Healthcare",
                tagline: "Turning transactional data into a customer retention strategy",
                subTagline: "From transactional data to personalised customer engagement",
                challenge:
                  "Guardian Healthcare had a growing customer database but limited visibility into customer behaviour beyond individual transactions. The business needed to better understand customer value, frequency and retention in order to build more relevant engagement strategies.",
                role:
                  "Fikiri helped establish a customer intelligence framework that connected customer data, behavioural segmentation and engagement strategy.",
                whatWeWorkedOn: [
                  "Customer data assessment and structuring",
                  "Behavioural segmentation",
                  "Customer value and frequency analysis",
                  "Retention and reactivation opportunities",
                  "Personalised CRM strategy",
                  "Customer journey and lifecycle planning",
                ],
                outcome:
                  "The work provided the business with a clearer view of customer behaviour and a structured approach to moving from broad customer communications towards more targeted, lifecycle-led engagement.",
                quote:
                  "Fikiri helped us move beyond looking at transactions in isolation. Their approach gave us a much clearer understanding of our customers and how we could use that insight to create more relevant and purposeful engagement.",
                quoteAuthor: "Guardian Healthcare",
              },
            ].map((study) => (
              <article key={study.name} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="border-b border-border bg-accent/15 px-5 py-4 sm:px-6">
                  <h3 className="text-xl font-semibold text-primary">{study.name}</h3>
                  <p className="mt-2 text-sm font-medium text-emerald">{study.tagline}</p>
                  {study.subTagline ? (
                    <p className="mt-1 text-sm text-muted-foreground">{study.subTagline}</p>
                  ) : null}
                </div>

                <div className="space-y-6 px-5 py-6 sm:px-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The Challenge</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Fikiri&apos;s Role</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{study.role}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">What We Worked On</h4>
                    <ul className="mt-3 space-y-2 text-sm text-foreground">
                      {study.whatWeWorkedOn.map((item) => (
                        <li key={item} className="flex items-start gap-3">
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
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Industries we serve"
            description="Specialist loyalty, CRM and data experience across sectors where customer retention and trust are the main drivers of value."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.06}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-lift">
                <img src={industry.image} alt={industry.name} className="aspect-16/9 w-full object-cover" />
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-primary">{industry.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                  {industry.benchmarks && industry.benchmarks.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {industry.benchmarks.map((benchmark) => (
                        <span key={benchmark} className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
                          {benchmark}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. The Team */}
      {/* Hidden temporarily — restore when team content is ready. */}
      {/*
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Team"
              title="The people behind Fikiri"
              description="Specialist loyalty, CRM and data experience, brought together to solve the connected challenges behind customer retention."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <img src={member.image} alt={member.alt} loading="lazy" className="aspect-16/10 w-full object-cover" />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                        <p className="mt-1 text-sm text-emerald">{member.role}</p>
                      </div>
                      <a href={member.linkedIn} aria-label={`${member.name} LinkedIn profile`} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-emerald/50 hover:text-emerald">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {member.credentials.map((credential) => (
                        <span key={credential} className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 7. Closing CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
            <div className="aurora" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-medium text-primary-foreground">
                <Target className="h-3.5 w-3.5" /> Usually responds within 24 hours
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
                Ready to build loyalty that lasts?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                Let us look at your customer relationships, data and engagement strategy — and identify what it will take to turn more customers into loyal advocates.
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
