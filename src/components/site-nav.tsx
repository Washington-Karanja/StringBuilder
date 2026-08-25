"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/articles", label: "Blog" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center mr-3 mt-8" onClick={() => setOpen(false)}>
          <img src="/images/Fikiri-logo.png" alt="Fikiri Communication" className="h-28 w-auto shrink-0" />
        </Link>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary ${isActive(link.to) ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-3">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link href="/book" onClick={() => setOpen(false)}>
              Request an Audit
            </Link>
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

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary ${isActive(link.to) ? "text-primary" : "text-muted-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-3">
              <Link href="/book" onClick={() => setOpen(false)}>
                Request an Audit
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
