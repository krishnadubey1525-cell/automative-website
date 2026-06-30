import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[oklch(0.7_0.17_150)] text-white flex items-center justify-center shadow-glow hover:scale-110 transition-smooth animate-fade-in"
      style={{ boxShadow: "0 10px 30px -8px oklch(0.7 0.17 150 / 0.6)" }}
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
}
