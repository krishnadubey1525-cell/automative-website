import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Wrench } from "lucide-react";
import { BRAND_NAME, PHONE_NUMBER, PHONE_TEL, PHONE_NUMBER_2, PHONE_TEL_2, LogoIcon } from "./Header";

const services = [
  "Mobile Mechanic",
  "Car Servicing",
  "Logbook Servicing",
  "Brake Repairs",
  "Battery Replacement",
  "Diagnostics",
];

export function Footer() {
  return (
    <footer className="bg-hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon />
              <span className="font-display font-bold text-lg">{BRAND_NAME}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Calgary's trusted mobile mechanic — bringing professional automotive
              repair and servicing right to your driveway, 7 days a week.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-primary-glow transition-smooth">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-glow transition-smooth">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow transition-smooth">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow transition-smooth">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-primary-glow transition-smooth">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary-glow flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE_NUMBER}</a>
                  <a href={`tel:${PHONE_TEL_2}`} className="hover:text-white">{PHONE_NUMBER_2}</a>
                </div>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Mail className="w-4 h-4 mt-0.5 text-primary-glow flex-shrink-0" />
                <a href="mailto:Onsiteautorepairsca@gmail.com" className="hover:text-white break-all">Onsiteautorepairsca@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-glow flex-shrink-0" />
                <span>143-1725 32 Ave NE, Calgary, AB T2E 7C8, Canada</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary-glow flex-shrink-0" />
                <span>Mon – Sun · 7am – 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "https://www.instagram.com/onsiteautorepair.ca/?hl=en", label: "Instagram" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-primary-glow hover:text-primary-glow transition-smooth hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
