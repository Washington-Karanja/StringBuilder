import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { services, serviceIcons as allServiceIcons } from "@/content/services";

const icons = allServiceIcons;

export const metadata = {
  title: "Services — Loyalty, Engagement & Data Strategy",
  description: "Loyalty strategy, CRM and engagement, and customer data and analytics from Fikiri Communication.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Loyalty, CRM and data—in the right sequence"
              description="Data underpins loyalty and marketing. A programme built on a broken customer view will fail in execution, however good the design. That is why we sequence engagements deliberately."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const wide = i === services.length - 1 && services.length % 2 === 1;
            return (
              <Reveal key={service.slug} delay={i * 0.06} className={wide ? "md:col-span-2" : ""}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-lift">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold text-primary">{service.title}</h2>
                      <p className="mt-1 text-sm text-emerald">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                    <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {service.duration}
                    </p>
                    <Button asChild variant="outline" className="shrink-0">
                      <Link href="/book">
                        Request an Audit <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
