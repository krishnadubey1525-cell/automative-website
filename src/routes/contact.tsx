import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/PageBanner";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const searchSchema = z.object({ service: z.string().optional() }).catch({});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact Us — Roadside Rescue Mobile Mechanic" },
      { name: "description", content: "Book a mobile mechanic or get a free quote. Call, WhatsApp, or use our quick contact form — we'll be in touch fast." },
    ],
  }),
  component: Contact,
});

const serviceOptions = [
  "Mobile Mechanic", "Car Servicing", "Logbook Servicing", "Brake Repairs",
  "Battery Replacement", "Diagnostics", "Oil Changes", "Pre-Purchase Inspections",
  "Fleet Servicing", "Emergency Roadside Repairs",
];

function slugToLabel(slug?: string) {
  if (!slug) return "";
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

function Contact() {
  const { service } = Route.useSearch();
  const preset = slugToLabel(service);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact Us" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-card p-6 sm:p-10 border border-border/50 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Book a service</h2>
            <p className="mt-2 text-muted-foreground">Fill in the form and we'll get back to you within the hour.</p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-soft-blue text-navy text-center">
                <p className="font-semibold text-lg">Thanks — your request has been received.</p>
                <p className="text-sm text-muted-foreground mt-1">A mechanic will be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <Field label="Full name" required><input required type="text" className="form-input" placeholder="Jane Smith" /></Field>
                <Field label="Phone" required><input required type="tel" className="form-input" placeholder="0416 562 596" /></Field>
                <Field label="Email" className="sm:col-span-2"><input type="email" className="form-input" placeholder="you@example.com" /></Field>
                <Field label="Service type" className="sm:col-span-2">
                  <select className="form-input" defaultValue={preset || ""}>
                    <option value="">Select a service…</option>
                    {serviceOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                  </select>
                </Field>
                <Field label="Message" className="sm:col-span-2">
                  <textarea rows={5} className="form-input resize-none" placeholder="Tell us about your vehicle and what you need help with…" />
                </Field>
                <div className="sm:col-span-2 flex flex-wrap gap-3">
                  <button type="submit" className="btn-primary">
                    <Send className="w-4 h-4" /> Send Request
                  </button>
                  <a href="https://wa.me/61416562596" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold border-2 border-[oklch(0.7_0.17_150)] text-[oklch(0.55_0.17_150)] hover:bg-[oklch(0.7_0.17_150)] hover:text-white transition-smooth hover:scale-105">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </form>
            )}

            <style>{`
              .form-input {
                width: 100%;
                border-radius: 0.875rem;
                border: 1px solid var(--border);
                background: white;
                padding: 0.75rem 1rem;
                font-size: 0.95rem;
                color: var(--foreground);
                outline: none;
                transition: all 0.2s;
              }
              .form-input:focus {
                border-color: var(--primary);
                box-shadow: 0 0 0 4px oklch(0.66 0.18 245 / 0.15);
              }
            `}</style>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, title: "Call us", value: "+61 416 562 596", href: "tel:+61416562596" },
              { icon: Mail, title: "Email", value: "contact@roadside-rescue.com.au", href: "mailto:contact@roadside-rescue.com.au" },
              { icon: MapPin, title: "Service area", value: "Canberra and surrounding suburbs" },
              { icon: Clock, title: "Hours", value: "Mon – Sun · 7am – 7pm" },
            ].map((b, i) => {
              const Icon = b.icon;
              const inner = (
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-soft-blue hover-lift bg-white shadow-card animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-primary-gradient text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">{b.title}</p>
                    <p className="text-navy font-semibold mt-0.5">{b.value}</p>
                  </div>
                </div>
              );
              return b.href ? <a key={b.title} href={b.href}>{inner}</a> : <div key={b.title}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border/50 relative aspect-[16/9] md:aspect-[16/7] min-h-[300px] md:min-h-[400px] bg-soft-blue">
            <iframe
              title="Service area map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2%2C51.45%2C-0.05%2C51.55&amp;layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="block text-sm font-semibold text-navy mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
