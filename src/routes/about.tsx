import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/PageBanner";
import { CtaBanner } from "./index";
import teamImg from "@/assets/about-team.jpg";
import { ShieldCheck, Award, Users, Wrench, Heart, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — [NEW BRAND NAME] Mobile Mechanic" },
      { name: "description", content: "Meet the dealership-trained, fully-insured mobile mechanic team behind [NEW BRAND NAME]. Over a decade of trusted automotive care." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Customer First", desc: "Every job starts with listening and ends with a car you can rely on." },
  { icon: ShieldCheck, title: "Honest & Insured", desc: "Transparent quotes, fully insured workmanship, no upsells." },
  { icon: Target, title: "Quality Workmanship", desc: "Manufacturer-grade parts and dealership-level standards, every time." },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 12000, suffix: "+", label: "Jobs Completed" },
  { value: 4800, suffix: "+", label: "Happy Customers" },
  { value: 7, suffix: "/7", label: "Days Available" },
];

const team = [
  { name: "Alex Carter", role: "Lead Mechanic", img: teamImg },
  { name: "Jordan Hayes", role: "Diagnostics Specialist", img: teamImg },
  { name: "Sam Patel", role: "Fleet Technician", img: teamImg },
];

function useCount(target: number, duration = 1400) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return [n, ref] as const;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [n, ref] = useCount(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-primary-glow">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-white/70 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}

function About() {
  return (
    <>
      <PageBanner title="About Us" crumb="About Us" />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card animate-fade-up">
            <img src={teamImg} alt="Our team" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="animate-fade-up">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Our Story</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Built on <span className="text-primary">trust</span> and craftsmanship.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              [NEW BRAND NAME] was founded with one simple idea: car repairs shouldn't waste your day.
              Our dealership-trained mechanics bring a fully-equipped workshop to your driveway,
              office or roadside — delivering the same quality you'd expect from a main dealer,
              without the wait or the mark-up.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From routine servicing to complex diagnostics, we treat every vehicle with the
              attention it deserves and back our work with a full warranty.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Fully Insured", "Dealership-Trained", "12-Month Warranty"].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-blue text-primary font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "var(--soft-blue)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Our <span className="text-primary">Mission & Values</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Convenient, honest and expert automotive care — wherever you are.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-7 shadow-card hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-14 h-14 rounded-xl bg-primary-gradient flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-hero-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Our Team</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              The mechanics behind the brand
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <div key={m.name} className="rounded-2xl overflow-hidden shadow-card hover-lift bg-white animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-navy">{m.name}</h3>
                  <p className="text-primary font-medium text-sm">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16" style={{ backgroundColor: "var(--soft-blue)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: "Fully Insured" },
              { icon: Award, label: "Dealership Trained" },
              { icon: Wrench, label: "Genuine Parts" },
              { icon: Users, label: "4.9★ Rated" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-card hover-lift">
                <Icon className="w-10 h-10 text-primary mb-3" />
                <p className="font-semibold text-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
