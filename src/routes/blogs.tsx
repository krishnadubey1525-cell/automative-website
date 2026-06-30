import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/PageBanner";
import { CtaBanner } from "./index";
import { Calendar, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const posts = [
  { slug: "engine-maintenance-tips", img: blog1, title: "5 Engine Maintenance Tips Every Driver Should Know", excerpt: "Simple habits that keep your engine running smoothly for years and save you thousands in repairs.", date: "June 12, 2026", author: "Alex Carter" },
  { slug: "decoding-dashboard-warning-lights", img: blog2, title: "Decoding Dashboard Warning Lights", excerpt: "What each warning light means, which ones to act on immediately, and which can wait until your next service.", date: "May 28, 2026", author: "Jordan Hayes" },
  { slug: "tire-pressure-fuel-economy", img: blog3, title: "How Tire Pressure Affects Fuel Economy", excerpt: "Underinflated tires can cost you hundreds at the pump. Here's how to check pressure the right way.", date: "May 14, 2026", author: "Sam Patel" },
  { slug: "logbook-service-myths", img: blog1, title: "Logbook Service Myths Debunked", excerpt: "No, you don't have to go to the dealer. Here's how independent logbook servicing protects your warranty.", date: "April 30, 2026", author: "Alex Carter" },
  { slug: "when-to-replace-brake-pads", img: blog2, title: "When To Replace Your Brake Pads", excerpt: "Listen for these warning signs and learn how to inspect your brakes between services.", date: "April 16, 2026", author: "Jordan Hayes" },
  { slug: "winter-car-care-checklist", img: blog3, title: "Winter Car Care Checklist", excerpt: "Cold mornings are tough on cars. Run through this checklist before the temperature drops.", date: "April 02, 2026", author: "Sam Patel" },
];

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — [NEW BRAND NAME] Mobile Mechanic" },
      { name: "description", content: "Practical car care tips, maintenance guides and mechanic-approved advice from the [NEW BRAND NAME] team." },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <>
      <PageBanner title="Blogs" crumb="Blogs" />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                to="/blogs/$slug"
                params={{ slug: p.slug }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up flex flex-col"
                style={{ animationDelay: `${(i % 6) * 0.07}s` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" /> {p.date}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-smooth">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
