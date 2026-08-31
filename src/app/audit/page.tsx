import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { steps } from "@/content/audit";
import { consultationTypes } from "@/content/book";

export const metadata = {
  title: "The Loyalty, CRM & Data Audit — Fikiri Communication",
  description: "An independent, benchmarked diagnostic for loyalty, CRM and customer data.",
};

export default function AuditPage() {
  return <div>
    <section className="relative overflow-hidden border-b border-border"><div className="aurora" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8"><Reveal><SectionHeading eyebrow="The audit" title="The Loyalty, CRM & Data Audit" description="Before you redesign a programme or replace a platform, know exactly where you stand—independently, and against the best in the world." /></Reveal></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><div className="grid gap-10 lg:grid-cols-2"><Reveal><div className="space-y-5 text-base leading-relaxed text-muted-foreground"><h2 className="text-2xl font-semibold text-primary">Why start here</h2><p>An audit is the lowest-risk way to begin. In a matter of weeks you get an objective read on your programme, marketing and data—with a clear, prioritised plan.</p><p>There is no commitment to a large engagement, and the audit fee is credited against implementation work you choose to take forward.</p></div></Reveal><Reveal delay={0.08}><div className="rounded-3xl border border-border bg-card p-8 shadow-soft"><h2 className="text-xl font-semibold text-primary">What you receive</h2><ul className="mt-6 space-y-3">{["A scored maturity assessment", "A benchmarking view", "Prioritised findings", "A recommended roadmap"].map((item) => <li key={item} className="flex gap-3 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />{item}</li>)}</ul></div></Reveal></div>
      <Reveal><SectionHeading eyebrow="Choose your focus" title="Three audits, buy what you need" description="Take the audit that matches your priority—or take all three for a complete picture at a bundled rate." /></Reveal>
       <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{consultationTypes.map((audit, index) => <Reveal key={audit.id} delay={index * .05}><div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft"><h3 className="text-lg font-semibold text-primary">{audit.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audit.description}</p></div></Reveal>)}</div>
    </section>
    <section className="bg-surface py-20"><div className="mx-auto max-w-6xl px-5 sm:px-8"><Reveal><SectionHeading eyebrow="Process" title="How it works" /></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{steps.map(([title, text], index) => <Reveal key={title} delay={index * .05}><div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft"><span className="font-display text-3xl font-bold text-emerald">0{index + 1}</span><h3 className="mt-5 font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div></Reveal>)}</div></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><Reveal><div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground"><h2 className="text-3xl font-semibold">Request your audit</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70">Each audit gives you a clear, prioritised plan. The fee is credited in full against follow-on implementation work if you choose to continue.</p><Button asChild variant="hero" size="lg" className="mt-8"><Link href="/contact">Request an Audit</Link></Button></div></Reveal></section>
  </div>;
}
