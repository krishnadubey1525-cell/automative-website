import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/PageBanner";
import { CtaBanner } from "./index";
import { ArrowRight } from "lucide-react";
import svcMobile from "@/assets/service-mobile.jpg";
import svcServicing from "@/assets/service-servicing.jpg";
import svcBrakes from "@/assets/service-brakes.jpg";
import svcDiag from "@/assets/service-diagnostics.jpg";
import svcBattery from "@/assets/service-battery.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Onsite auto repair Mobile Mechanic" },
      { name: "description", content: "Full list of mobile mechanic services: servicing, logbook, brakes, batteries, diagnostics, pre-purchase inspections, and emergency roadside repairs." },
    ],
  }),
  component: Services,
});

const services = [
  { slug: "mobile-mechanic", img: svcMobile, title: "Mobile Mechanic", desc: "Comprehensive on-site repairs — from minor fixes to major mechanical work, performed at your home, office or roadside." },
  { slug: "car-servicing", img: svcServicing, title: "Car Servicing", desc: "Routine, minor and major car servicing using manufacturer-grade oils, filters and parts to keep your vehicle running its best." },
  { slug: "logbook-servicing", img: svcServicing, title: "Logbook Servicing", desc: "Manufacturer-spec logbook service that preserves your new-car warranty — stamped and recorded." },
  { slug: "brake-repairs", img: svcBrakes, title: "Brake Repairs", desc: "Brake pad and rotor replacement, brake fluid flushes, caliper repairs and complete brake system overhauls." },
  { slug: "battery-replacement", img: svcBattery, title: "Battery Replacement", desc: "On-the-spot battery testing and replacement with quality batteries backed by a multi-year warranty." },
  { slug: "diagnostics", img: svcDiag, title: "Diagnostics", desc: "Advanced computer diagnostics to pinpoint warning lights, electrical faults and intermittent issues." },
  { slug: "oil-changes", img: svcServicing, title: "Oil Changes", desc: "Quick, clean oil and filter changes with full or semi-synthetic oils to suit your engine." },
  { slug: "pre-purchase-inspections", img: svcDiag, title: "Pre-Purchase Inspections", desc: "Detailed inspection reports before you buy — drive away knowing exactly what you're getting." },
  { slug: "emergency-roadside", img: svcMobile, title: "Emergency Roadside Repairs", desc: "Stranded? We're on the way — fast roadside response to get you moving again, 7 days a week." },
];

function Services() {
  return (
    <>
      <PageBanner title="Our Services" crumb="Services" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover-lift flex flex-col animate-fade-up"
                style={{ animationDelay: `${(i % 6) * 0.07}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-smooth" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-muted-foreground flex-1">{s.desc}</p>
                  <Link
                    to="/contact"
                    search={{ service: s.slug }}
                    className="mt-5 btn-primary !py-2.5 !px-5 text-sm self-start"
                  >
                    Request This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
