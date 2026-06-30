import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar, Phone, Truck, BadgeDollarSign, Clock, Award, Building2, AlertTriangle,
  ArrowRight, Star, ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-mechanic.jpg";
import svcMobile from "@/assets/service-mobile.jpg";
import svcServicing from "@/assets/service-servicing.jpg";
import svcBrakes from "@/assets/service-brakes.jpg";
import svcDiag from "@/assets/service-diagnostics.jpg";
import svcBattery from "@/assets/service-battery.jpg";
import svcFleet from "@/assets/service-fleet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "[NEW BRAND NAME] — Mobile Mechanic [City] · We Come To You" },
      { name: "description", content: "[Region]'s premier mobile mechanic. Same-day servicing, brakes, diagnostics, batteries and roadside repairs at your home, office or roadside." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Truck, title: "Mobile Service", desc: "We come to your home, office, or roadside — no towing, no waiting rooms.", highlight: false },
  { icon: BadgeDollarSign, title: "Honest Pricing", desc: "Up-front quotes, no surprises. Pay only for the work you approve.", highlight: false },
  { icon: Clock, title: "Same Day Availability", desc: "Book today, fixed today. Most jobs completed within hours.", highlight: true },
  { icon: Award, title: "Experienced Mechanics", desc: "Dealership-trained technicians with 15+ years of hands-on expertise.", highlight: false },
  { icon: Building2, title: "Fleet Services", desc: "Keep your business moving with scheduled fleet servicing and reporting.", highlight: false },
  { icon: AlertTriangle, title: "Emergency Repairs", desc: "Stranded? We're on the way. Fast roadside assistance, 7 days a week.", highlight: false },
];

const servicesPreview = [
  { img: svcMobile, title: "Mobile Mechanic", desc: "Full-service repairs at your location." },
  { img: svcServicing, title: "Car Servicing", desc: "Routine and major servicing done right." },
  { img: svcBrakes, title: "Brake Repairs", desc: "Pads, rotors and full brake overhauls." },
  { img: svcDiag, title: "Logbook Servicing", desc: "Maintain your warranty with logbook service." },
];

const testimonials = [
  { name: "Sarah M.", location: "[Suburb]", text: "Showed up on time, fixed my brakes in the driveway and saved me hundreds compared to the dealership.", rating: 5 },
  { name: "James K.", location: "[Suburb]", text: "Honest, professional and fast. Diagnosed my electrical issue same morning. Highly recommend.", rating: 5 },
  { name: "Priya R.", location: "[Suburb]", text: "Logbook service done at my office while I worked. Couldn't be more convenient.", rating: 5 },
];

const gallery = [svcDiag, svcBrakes, svcMobile, svcServicing, svcBattery, svcFleet];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-hero-gradient opacity-80" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs font-semibold uppercase tracking-wider animate-fade-up">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-glow" />
              [Region]'s Premier Mobile Mechanic
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Mobile Mechanic [City]
              <span className="block text-primary-glow">We Come To You</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Professional automotive repair, logbook servicing, brake work and diagnostics
              delivered to your driveway. Fully insured, dealership-trained, and ready 7 days a week.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="btn-primary">
                <Calendar className="w-5 h-5" />
                Book Mobile Mechanic
              </Link>
              <a href="tel:+15551234567" className="btn-outline-light">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              [Region]'s <span className="text-primary">Trusted Mobile Mechanics</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Honest service, expert work, and the convenience of having it all done at your doorstep.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-7 shadow-card hover-lift border border-border/50 animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      f.highlight ? "bg-primary-gradient text-primary-foreground" : "bg-soft-blue text-primary"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20" style={{ backgroundColor: "var(--soft-blue)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="animate-fade-up">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase">Our Services</span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy max-w-2xl">
                Mobile Automotive Care at Your Doorstep
              </h2>
            </div>
            <Link to="/services" className="btn-outline-dark self-start lg:self-end whitespace-nowrap">
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((s, i) => (
              <Link
                key={s.title}
                to="/services"
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Onsite Gallery</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Our Mobile Services In <span className="text-primary">Action</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-card group animate-fade-up ${
                  i === 0 ? "md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
                }`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20" style={{ backgroundColor: "var(--soft-blue)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Testimonials</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-navy/80 mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}

export function CtaBanner() {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-fade-up">
          Ready to get back on the road?
        </h2>
        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto animate-fade-up">
          Book online or call now — we'll come to you, same day in most cases.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-up">
          <Link to="/contact" className="btn-primary">
            <Calendar className="w-5 h-5" /> Book Now
          </Link>
          <a href="tel:+15551234567" className="btn-outline-light">
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
