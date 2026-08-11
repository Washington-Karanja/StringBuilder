"use client";

import Link from "next/link";
import {
  BarChart3,
  CalendarCheck,
  Eye,
  FileText,
  Home,
  ImagePlus,
  LogOut,
  MessageSquareQuote,
  Pencil,
  Plus,
  Save,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate, posts as seedPosts } from "@/data/content";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { createArticle, deleteArticle } from "@/lib/articles-actions";

const bookings = [
  { name: "Elena Petrov", type: "Strategy Session", when: "Mon 12 Aug · 10:00", status: "Pending" },
  { name: "Marcus Hale", type: "Personal Consultation", when: "Tue 13 Aug · 14:00", status: "Confirmed" },
  { name: "Nia Adeyemi", type: "Discovery Call", when: "Wed 14 Aug · 09:00", status: "Confirmed" },
  { name: "Tom Bradshaw", type: "Executive Advisory", when: "Fri 16 Aug · 16:30", status: "Pending" },
];

const metrics = [
  { label: "Article views (30d)", value: "18,420", delta: "+12.4%", icon: Eye },
  { label: "Booking requests", value: "37", delta: "+8 this week", icon: CalendarCheck },
  { label: "Newsletter subscribers", value: "2,946", delta: "+134", icon: Users },
  { label: "Published articles", value: "12", delta: "3 drafts", icon: FileText },
];

export default function AdminPage() {
  const [items, setItems] = useState(seedPosts);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const publish = async (status: "Published" | "Draft") => {
    if (!title.trim()) {
      toast.error("Give the article a title first");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("content", "");
    formData.append("category", "Loyalty");
    formData.append("status", status);

    const result = await createArticle(formData);

    if (result.error) {
      toast.error(result.error);
      return;
    }

    if (result.data) {
      setItems((prev) => [result.data, ...prev]);
    }
    setTitle("");
    setExcerpt("");
    toast.success(status === "Published" ? "Article published" : "Draft saved");
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar p-5 lg:flex">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">
              MN
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-sidebar-foreground">Martin Ngoni</p>
              <p className="text-xs text-sidebar-foreground/60">Administrator</p>
            </div>
          </div>
          <nav className="mt-8 space-y-1 text-sm">
            {[
              { icon: BarChart3, label: "Overview" },
              { icon: FileText, label: "Articles" },
              { icon: CalendarCheck, label: "Bookings" },
              { icon: MessageSquareQuote, label: "Testimonials" },
              { icon: Settings, label: "Site settings" },
            ].map((item, i) => (
              <span
                key={item.label}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
                  i === 0
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70"
                }`}
              >
                <item.icon className="h-4 w-4" /> {item.label}
              </span>
            ))}
          </nav>
          <div className="mt-auto space-y-1 text-sm">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
            >
              <Home className="h-4 w-4" /> View site
            </Link>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70">
              <LogOut className="h-4 w-4" /> Sign out
            </span>
          </div>
        </aside>

        <div className="min-w-0 flex-1 px-5 py-8 sm:px-8">
          <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-bold text-primary">Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Welcome back, Martin. Here's what moved this week.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0 lg:hidden">
              <Link href="/">View site</Link>
            </Button>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">{m.label}</span>
                  <m.icon className="h-4 w-4 text-emerald" />
                </div>
                <p className="mt-3 font-display text-2xl font-bold text-primary">{m.value}</p>
                <p className="mt-1 text-xs text-emerald">{m.delta}</p>
              </div>
            ))}
          </div>

          <Tabs defaultValue="articles" className="mt-8">
            <TabsList className="flex h-auto flex-wrap gap-1 bg-secondary p-1">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="content">Site content</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <h2 className="text-sm font-semibold text-primary">All articles</h2>
                  <span className="text-xs text-muted-foreground">{items.length} total</span>
                </div>
                <ul className="divide-y divide-border">
                  {items.map((p) => (
                    <li key={p.slug} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-primary">{p.title}</p>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground">
                          <span>{p.category}</span>
                          <span>{formatDate(p.date)}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 font-semibold ${
                              p.status === "Published"
                                ? "bg-accent text-accent-foreground"
                                : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {p.status}
                          </span>
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-1">
                        <Button variant="ghost" size="icon" aria-label="Edit" onClick={() => toast("Editor opened", { description: p.title })}>
                          <Pencil />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Delete"
                          onClick={async () => {
                            if (p.id) {
                              await deleteArticle(p.id);
                            }
                            setItems((prev) => prev.filter((x) => x.slug !== p.slug));
                            toast.success("Article deleted");
                          }}
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Plus className="h-4 w-4 text-emerald" /> New article
                </h2>
                <div className="mt-5 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="atitle">Title</Label>
                    <Input id="atitle" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Article title" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aexcerpt">Excerpt</Label>
                    <Textarea id="aexcerpt" rows={4} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="A short summary…" className="resize-none" />
                  </div>
                  <button
                    type="button"
                    onClick={() => toast("Image picker opened")}
                    className="grid w-full place-items-center rounded-xl border border-dashed border-border py-8 text-xs text-muted-foreground transition-colors hover:border-emerald/50 hover:text-emerald"
                  >
                    <ImagePlus className="mb-2 h-5 w-5" />
                    Upload cover image
                  </button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => publish("Draft")}>
                      <Save /> Save draft
                    </Button>
                    <Button variant="hero" className="flex-1" onClick={() => publish("Published")}>
                      Publish
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="mt-6">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <ul className="divide-y divide-border">
                  {bookings.map((b) => (
                    <li key={b.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-primary">{b.name}</p>
                        <p className="mt-1 truncate text-xs text-muted-foreground">
                          {b.type} · {b.when}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            b.status === "Confirmed"
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {b.status}
                        </span>
                        <Button size="sm" variant="outline" onClick={() => toast.success(`Confirmed ${b.name}`)}>
                          Confirm
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="mt-6 grid gap-4 md:grid-cols-2">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-primary">{t.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Button variant="ghost" size="icon" aria-label="Edit"><Pencil /></Button>
                      <Button variant="ghost" size="icon" aria-label="Delete"><Trash2 /></Button>
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="content" className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-sm font-semibold text-primary">About page</h2>
                <div className="mt-5 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mission">Mission statement</Label>
                    <Textarea id="mission" rows={4} className="resize-none" defaultValue="To help people make decisions they can defend in a year's time." />
                  </div>
                  <button
                    type="button"
                    onClick={() => toast("Image picker opened")}
                    className="grid w-full place-items-center rounded-xl border border-dashed border-border py-8 text-xs text-muted-foreground transition-colors hover:border-emerald/50 hover:text-emerald"
                  >
                    <ImagePlus className="mb-2 h-5 w-5" /> Upload profile image
                  </button>
                  <Button variant="hero" onClick={() => toast.success("About page updated")}>
                    <Save /> Save changes
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">Services</h2>
                  <ul className="mt-4 divide-y divide-border text-sm">
                    {services.map((s) => (
                      <li key={s.slug} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
                        <span className="truncate text-primary">{s.title}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">{s.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">Contact information</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cemail">Email</Label>
                      <Input id="cemail" className="h-11" defaultValue="hello@martinngoni.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cphone">Phone</Label>
                      <Input id="cphone" className="h-11" defaultValue="+61 2 8000 1234" />
                    </div>
                  </div>
                  <Button className="mt-5" onClick={() => toast.success("Contact details updated")}>
                    <Save /> Update
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
