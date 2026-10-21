"use client";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";

export default function MobileStickyBar() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#171717]/95 backdrop-blur-lg border-t border-[#C8A45D]/30 md:hidden shadow-2xl px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
      role="navigation"
      aria-label="Mobile quick contact actions"
    >
      <div className="grid grid-cols-3 gap-2 items-center max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${SITE_CONFIG.company.phones.primary}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-white/10 hover:bg-white/15 text-white active:scale-95 transition-all text-center min-h-[48px]"
          aria-label="Call Kopou Developers"
        >
          <Phone size={18} className="text-[#C8A45D] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wide">Call Now</span>
        </a>

        {/* Instant WhatsApp Button */}
        <a
          href={WA_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#25D366] hover:bg-[#20ba59] text-white active:scale-95 transition-all text-center min-h-[48px] shadow-sm"
          aria-label="Enquire via WhatsApp"
        >
          <MessageCircle size={18} className="mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide">WhatsApp</span>
        </a>

        {/* Site Visit / Enquire Button */}
        <button
          onClick={scrollToContact}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#C8A45D] hover:bg-[#b8934c] text-[#171717] active:scale-95 transition-all text-center min-h-[48px] font-semibold"
          aria-label="Schedule a site visit"
        >
          <Calendar size={18} className="mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide">Book Visit</span>
        </button>
      </div>
    </div>
  );
}
