"use client";

import Link from "next/link";
import { Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { posts } from "@/data/content";
import { services } from "@/content/services";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] items-start">
          <div className="self-start">
            <div className="flex items-center">
              <img src="/images/Fikiri-logo.png" alt="Fikiri Communication" className="h-32 w-auto shrink-0" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Loyalty, CRM and data strategy for businesses that want measurable results.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-emerald/50 hover:text-emerald"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About" },
                { to: "/articles", label: "Blog" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                   <Link href={l.to} className="transition-colors hover:text-emerald">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition-colors hover:text-emerald">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Recent articles
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {posts.slice(0, 2).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/articles/${p.slug}`}
                    className="line-clamp-2 transition-colors hover:text-emerald"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("You're subscribed", {
                  description: "Occasional thinking on loyalty, retention and customer data. No noise.",
                });
                (e.target as HTMLFormElement).reset();
              }}
            >
              <Input type="email" required placeholder="Email address" className="h-10 bg-background" />
              <Button type="submit" size="sm" className="h-10 shrink-0">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fikiri Communication. All rights reserved.</p>
          <p>Privacy · Terms · Built by DNZL</p>
        </div>
      </div>
    </footer>
  );
}
