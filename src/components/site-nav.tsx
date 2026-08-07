import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/service", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            Fikiri
          </span>
          <span className="truncate font-display text-[0.95rem] font-semibold tracking-tight text-primary">
            Communications
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary data-[status=active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-3">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/book">Request an Audit</Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary data-[status=active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-3">
              <Link to="/book" onClick={() => setOpen(false)}>
                Request an Audit
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
