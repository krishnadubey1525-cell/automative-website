import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageBanner({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative bg-hero-gradient text-white py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        <nav className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
          <Link to="/" className="hover:text-primary-glow">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
