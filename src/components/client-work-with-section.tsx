"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { clientBrands } from "@/content/about";

export function ClientWorkWithSection() {
  const [activeClient, setActiveClient] = useState(clientBrands[0]?.name ?? "");

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            Clients
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary sm:text-4xl">Who We Work With</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We work with brands that take customer relationships seriously — across retail and shopping centres, hospitality and travel, banking, telecommunications, e-commerce, and healthcare. Our focus is the same in every one: helping brands build lasting connections and loyalty programmes their customers actually value, across EMEA.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="client-marquee" aria-label="Client brands">
            <div className="client-marquee-track">
              {[...clientBrands, ...clientBrands].map((brand, index) => (
                <button
                  key={`${brand.name}-${index}`}
                  type="button"
                  onClick={() => setActiveClient(brand.name)}
                  className="client-marquee-item cursor-pointer text-left transition-colors hover:bg-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
                    {brand.mark}
                  </span>
                  <span className="font-display text-lg font-semibold text-primary">{brand.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {clientBrands.map((brand) => {
            const isActive = activeClient === brand.name;
            const study = brand.caseStudy;

            return (
              <div key={brand.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <button
                  type="button"
                  onClick={() => setActiveClient(isActive ? "" : brand.name)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
                      {brand.mark}
                    </span>
                    <span className="font-display text-xl font-semibold text-primary">{brand.name}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isActive ? "rotate-180" : ""}`} />
                </button>

                {isActive ? (
                  <div className="border-t border-border px-5 py-6 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald">{study.tagline}</p>
                    {study.subTagline ? (
                      <p className="mt-2 text-sm font-medium text-muted-foreground">{study.subTagline}</p>
                    ) : null}

                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The Challenge</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Fikiri&apos;s Role</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">{study.role}</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">What We Worked On</h3>
                      <div className="mt-4 space-y-3">
                        {study.whatWeWorkedOn.map((item, index) => {
                          if (typeof item === "string") {
                            return (
                              <div key={`${brand.name}-${index}`} className="flex items-start gap-3 text-sm text-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                                <span>{item}</span>
                              </div>
                            );
                          }

                          return (
                            <div key={`${brand.name}-${index}`} className="rounded-xl border border-border bg-accent/20 p-4">
                              <h4 className="text-sm font-semibold text-primary">{item.title}</h4>
                              <p className="mt-2 text-sm leading-relaxed text-foreground">{item.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-border bg-accent/20 p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">The Outcome</h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground">{study.outcome}</p>
                    </div>

                    <blockquote className="mt-8 border-l-2 border-emerald/60 pl-4 text-sm leading-relaxed text-primary">
                      “{study.quote}”
                      <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        — {study.quoteAuthor}
                      </footer>
                    </blockquote>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
