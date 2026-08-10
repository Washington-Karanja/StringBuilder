"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, Mail } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { consultationTypes, timeSlots } from "@/content/book";

const steps = ["Consultation", "Date", "Time", "Details"];

function nextDays(count: number) {
  const out: Date[] = [];
  const d = new Date();
  while (out.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) out.push(new Date(d));
  }
  return out;
}

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const days = useMemo(() => nextDays(10), []);
  const selectedType = consultationTypes.find((t) => t.id === type);

  const canContinue =
    (step === 0 && !!type) ||
    (step === 1 && !!date) ||
    (step === 2 && !!time) ||
    (step === 3 && name.trim() !== "" && email.trim() !== "");

  if (confirmed) {
    return (
      <div className="relative overflow-hidden">
        <div className="aurora" aria-hidden="true" />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8"
        >
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald/15 text-emerald">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h1 className="mt-8 text-3xl font-bold text-primary sm:text-4xl">Booking request sent</h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Thank you, {name.split(" ")[0]}. We’ve received your enquiry and will be in touch within two business days.
          </p>

          <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-left shadow-lift">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Request summary
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <Row label="Consultation" value={selectedType?.name ?? "—"} />
              <Row label="Duration" value={selectedType?.duration ?? "—"} />
              <Row label="Date" value={date ?? "—"} />
              <Row label="Time" value={time ?? "—"} />
              <Row label="Contact" value={`${name} · ${email}`} />
            </dl>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link href="/articles">Read insights while you wait</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <section className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            Booking
          </span>
          <h1 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">
            Ready to talk? Book a call.
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Grab a 30-minute slot and we’ll walk through where your programme stands and whether an audit is the right next step.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-4 gap-2">
          {steps.map((label, i) => (
            <li key={label} className="min-w-0">
              <div
                className={`h-1 rounded-full transition-colors ${i <= step ? "bg-emerald" : "bg-border"}`}
              />
              <p
                className={`mt-2.5 truncate text-xs font-medium ${i <= step ? "text-primary" : "text-muted-foreground"}`}
              >
                {i + 1}. {label}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 ? (
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-primary">Choose a consultation type</h2>
                  {consultationTypes.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setType(t.id)}
                      className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                        type === t.id
                          ? "border-emerald bg-accent/40 shadow-soft"
                          : "border-border hover:border-emerald/40 hover:bg-secondary/60"
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-primary">{t.name}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {t.description}
                        </p>
                        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" /> {t.duration}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-emerald">{t.price}</span>
                    </button>
                  ))}
                </div>
              ) : null}

              {step === 1 ? (
                <div>
                  <h2 className="text-lg font-semibold text-primary">Select an available date</h2>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" /> Weekdays only
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {days.map((d) => {
                      const label = d.toLocaleDateString("en-AU", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      });
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setDate(label)}
                          className={`rounded-xl border px-3 py-4 text-center text-sm font-medium transition-all ${
                            date === label
                              ? "border-emerald bg-emerald text-primary-foreground shadow-soft"
                              : "border-border text-primary hover:border-emerald/40 hover:bg-secondary/60"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <h2 className="text-lg font-semibold text-primary">Select a time</h2>
                  <p className="mt-1.5 text-xs text-muted-foreground">{date}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`rounded-xl border px-3 py-3.5 text-sm font-medium transition-all ${
                          time === slot
                            ? "border-emerald bg-emerald text-primary-foreground shadow-soft"
                            : "border-border text-primary hover:border-emerald/40 hover:bg-secondary/60"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div>
                  <h2 className="text-lg font-semibold text-primary">Your details</h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="bname">Full name</Label>
                      <Input id="bname" value={name} onChange={(e) => setName(e.target.value)} className="h-11" placeholder="Jane Whitmore" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bemail">Email</Label>
                      <Input id="bemail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" placeholder="jane@company.com" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="bphone">Phone (optional)</Label>
                      <Input id="bphone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-11" placeholder="+61 400 000 000" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="bnotes">What would you like to discuss?</Label>
                      <Textarea id="bnotes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} className="resize-none" placeholder="Tell us a little about your programme and what you would like to improve." />
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl bg-surface p-5 text-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Summary
                    </p>
                    <p className="mt-2.5 text-primary">
                      {selectedType?.name} · {date} · {time}
                    </p>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex items-center justify-between border-t border-border pt-6">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ArrowLeft /> Back
            </Button>
            {step < 3 ? (
              <Button variant="hero" disabled={!canContinue} onClick={() => setStep((s) => s + 1)}>
                Continue <ArrowRight />
              </Button>
            ) : (
              <Button variant="hero" disabled={!canContinue} onClick={() => setConfirmed(true)}>
                <Mail /> Submit request
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="truncate text-right font-medium text-primary">{value}</dd>
    </div>
  );
}
