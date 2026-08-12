"use client";

import { Linkedin, MapPin, Send, Twitter, Youtube } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { details } from "@/content/contact";
import { submitContact } from "@/lib/bookings-actions";

function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = true,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} type={type} required={required} placeholder={placeholder} className="h-11" />
    </div>
  );
}

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Prefer to send details first?"
              description="Tell us a little about your programme and we'll come back to you within two business days."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <form
            ref={formRef}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10"
            action={async (formData) => {
              setSending(true);
              try {
                const result = await submitContact(formData);
                if (result.success) {
                  toast.success("Message sent", {
                    description: "Thank you—we've received your enquiry and will be in touch within two business days.",
                  });
                  formRef.current?.reset();
                } else {
                  toast.error(result.error || "Something went wrong. Please try again.");
                }
              } catch (err) {
                toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
              } finally {
                setSending(false);
              }
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" name="name" label="Full name" placeholder="Enter Name" />
              <Field id="email" name="email" label="Email" type="email" placeholder="name@company.com" />
              <Field id="phone" name="phone" label="Phone" type="tel" placeholder="+254 700 000 000" required={false} />
              <Field id="subject" name="subject" label="Audit focus" placeholder="Loyalty, CRM or data audit" />
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your programme, customer data or the opportunity you want to explore."
                className="resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="mt-7 w-full sm:w-auto" disabled={sending}>
              {sending ? "Sending…" : (<>Request an Audit <Send /></>)}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <d.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-primary">
                    {d.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Follow
              </p>
              <div className="mt-4 flex gap-2">
                {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social profile"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-emerald/50 hover:text-emerald"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="grid-lines grid h-48 place-items-center bg-surface">
                <div className="text-center">
                  <MapPin className="mx-auto h-6 w-6 text-emerald" />
                  <p className="mt-2 text-sm font-medium text-primary">Nairobi</p>
                  <p className="text-xs text-muted-foreground">Map placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
