import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const PHONE_NUMBER = "+61 416 562 596";
export const PHONE_TEL = "+61416562596";
export const BRAND_NAME = "Roadside Rescue";

export function LogoIcon() {
  return (
    <svg className="w-10 h-10 shadow-glow rounded-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="url(#logo-grad)" />
      <path d="M15 60 C17 60 18 59 19 58 C21 54 25 50 31 50 C37 50 41 54 43 58 C44 59 45 60 47 60 L57 60 C59 60 60 59 61 58 C63 54 67 50 73 50 C79 50 83 54 85 58 C86 59 87 60 89 60 L91 60 C92 60 93 59 93 58 C91 48 83 41 71 39 C62 36 50 31 38 34 C28 36 21 42 17 48 C15 52 14 55 14 58 C14 59 14 60 15 60 Z" fill="white" />
      <path d="M10 65 L90 65" stroke="oklch(0.78 0.16 240)" strokeWidth="4" stroke-linecap="round" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.16 0.04 258)" />
          <stop offset="100%" stopColor="oklch(0.28 0.1 245)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <LogoIcon />
            <span className="font-display font-bold text-lg sm:text-xl text-navy tracking-tight hover:text-primary transition-smooth">
              {BRAND_NAME}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm font-medium text-navy/80 hover:text-primary transition-smooth relative py-2"
                activeProps={{
                  className:
                    "text-sm font-semibold text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex btn-primary shine-button !py-2.5 !px-5 text-sm">
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-navy"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
 
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 animate-fade-in">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3 py-3 rounded-lg text-navy/80 hover:bg-soft-blue font-medium"
                activeProps={{
                  className: "px-3 py-3 rounded-lg text-primary bg-soft-blue font-semibold",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="btn-primary shine-button mt-2 text-sm">
              <Phone className="w-4 h-4" /> {PHONE_NUMBER}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
