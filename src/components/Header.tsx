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

export const PHONE_NUMBER = "(555) 123-4567";
export const PHONE_TEL = "+15551234567";
export const BRAND_NAME = "[NEW BRAND NAME]";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center shadow-glow">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-navy tracking-tight">
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
            <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm">
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
            <a href={`tel:${PHONE_TEL}`} className="btn-primary mt-2 text-sm">
              <Phone className="w-4 h-4" /> {PHONE_NUMBER}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
