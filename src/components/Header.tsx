import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const PHONE_NUMBER = "+1 (587) 876-9062";
export const PHONE_TEL = "+15878769062";
export const PHONE_NUMBER_2 = "+1 (587) 377-0800";
export const PHONE_TEL_2 = "+15873770800";
export const BRAND_NAME = "Onsite auto repair";

export function LogoIcon() {
  return (
    <img 
      src="/logo.jpg" 
      alt="Onsite auto repair logo" 
      className="w-12 h-12 object-contain rounded-xl bg-white shadow-sm border border-border/40 p-0.5" 
    />
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
            <a href={`tel:${PHONE_TEL_2}`} className="hidden md:inline-flex btn-outline-dark !py-2.5 !px-5 text-sm">
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER_2}</span>
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
            <a href={`tel:${PHONE_TEL}`} className="btn-primary shine-button mt-2 text-sm justify-center">
              <Phone className="w-4 h-4" /> {PHONE_NUMBER}
            </a>
            <a href={`tel:${PHONE_TEL_2}`} className="btn-outline-dark mt-2 text-sm justify-center">
              <Phone className="w-4 h-4" /> {PHONE_NUMBER_2}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
