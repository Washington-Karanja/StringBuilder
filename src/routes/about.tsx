import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Globe2, Linkedin, Target, Users } from "lucide-react";

import aboutPhoto from "@/assets/about-photo.jpg";
import martinPortrait from "@/assets/martin-portrait.jpg";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fikiri Communication" },
      { name: "description", content: "Fikiri Communication is a specialist consulting practice for loyalty, CRM and data analytics." },
      { property: "og:title", content: "About Fikiri Communication" },
      { property: "og:description", content: "Objective loyalty, CRM and data advice built on hands-on programme experience." },
    ],
  }),
  component: About,
});

const disciplines = ["Loyalty strategy", "CRM & engagement", "Customer data & analytics"];

const industries = [
  "Retail & Shopping Centres",
  "Hospitality & Travel",
  "Banking & Financial Services",
  "Telecommunications",
  "E-commerce & Consumer Brands",
  "Healthcare & Pharmacy",
];

const team = [
  {
    name: "Martin Ngoni",
    role: "Founder",
    image: martinPortrait,
    alt: "Martin Ngoni",
    bio: "Martin has spent his career building and running loyalty programmes for industry-leading brands, including Village Market and Circle Rewards—helping them turn everyday customers into lasting, loyal ones. He founded Fikiri Communication on the conviction that loyalty is engineered, not hoped for.",
    credentials: ["Loyalty programme strategy", "CRM & customer data"],
    linkedIn: "#",
  },
  {
    name: "Team member name",
    role: "Role to be confirmed",
    image: aboutPhoto,
    alt: "Placeholder for a future Fikiri Communication team member",
    bio: "A second team profile will be added here with their background, specialist experience and the perspective they bring to the practice.",
    credentials: ["Professional photo pending", "LinkedIn profile pending"],
    linkedIn: "#",
  },
];

const clientBrands = [
  { name: "Village Market", mark: "VM" },
  { name: "Circle Rewards", mark: "CR" },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Customer loyalty that lasts"
              description="Fikiri Communication is a specialist consulting practice helping businesses build customer loyalty that lasts. We work across loyalty, engagement and data analytics so everyday customers become loyal ones, and loyal ones become brand advocates."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img src={aboutPhoto} alt="Fikiri Communication at work" loading="lazy" width={1200} height={1008} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <h2 className="text-2xl font-semibold text-primary">Who we are</h2>
              <p>We do not sell software and we are not tied to any vendor. Our value is objective advice and hands-on experience from people who have built and run loyalty programmes, not just written about them.</p>
              <p>Loyalty is never bought with discounts. It is built deliberately, when a brand makes every customer feel understood, recognised and genuinely rewarded for staying.</p>
              <p>A compelling programme fails if marketing never reaches the right customer, and both fail if the data underneath cannot be trusted. That is why we treat loyalty, CRM and data as one connected system—and start with the data foundation.</p>

              <div className="rounded-2xl border border-border bg-accent/40 p-6">
                <div className="flex items-center gap-2 text-accent-foreground">
                  <Target className="h-4.5 w-4.5" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">The question that matters</h3>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">Is your programme simple, personalised and valuable? Getting you to a confident “yes” on all three is our work.</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="hero"><Link to="/book">Request an Audit</Link></Button>
                <Button asChild variant="outline"><Link to="/service">Explore services</Link></Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center gap-2 text-emerald"><Award className="h-5 w-5" /><h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Our practice</h3></div>
                <ul className="mt-6 space-y-3.5">
                  {disciplines.map((discipline) => <li key={discipline} className="flex items-start gap-3 text-sm text-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />{discipline}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center gap-2 text-emerald"><Globe2 className="h-5 w-5" /><h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Who we work with</h3></div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {industries.map((industry) => <span key={industry} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">{industry}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Team" title="The people behind Fikiri" description="Specialist loyalty, CRM and data experience, brought together to solve the connected challenges behind customer retention." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img src={member.image} alt={member.alt} loading="lazy" className="aspect-16/10 w-full object-cover" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-semibold text-primary">{member.name}</h3><p className="mt-1 text-sm text-emerald">{member.role}</p></div><a href={member.linkedIn} aria-label={`${member.name} LinkedIn profile`} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-emerald/50 hover:text-emerald"><Linkedin className="h-4 w-4" /></a></div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{member.credentials.map((credential) => <span key={credential} className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">{credential}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Experience" title="Brands we have worked with" description="Helping brands build lasting connections and loyalty programmes their customers value." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {clientBrands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.07}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">{brand.mark}</span>
                  <span className="font-display text-lg font-semibold text-primary">{brand.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
