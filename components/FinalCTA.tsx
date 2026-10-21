"use client";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { WA_LINKS } from "@/lib/whatsapp";
import { EclipseButton } from "@/components/ui/eclipse-button";

export default function FinalCTA() {
  return (
    <section id="cta" className="section bg-[#171717] relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

      <div className="container mx-auto px-4 lg:px-6 text-center">
        <span className="section-label text-[#C8A45D]">Ready to Begin?</span>
        <h2 className="text-4xl lg:text-6xl font-serif font-semibold text-white mt-4 mb-6">
          Your Next Home<br />
          <span className="text-[#C8A45D]">Awaits.</span>
        </h2>
        <p className="text-white/60 text-sm max-w-lg mx-auto mb-10">
          Connect with the Kopou Developers team to learn more about
          Kopou Apartments — pricing, floor plans, site visits, and everything in between.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <EclipseButton
            variant="gold"
            text="Schedule a Site Visit"
            leftIcon={<Calendar size={16} />}
            size="default"
            className="w-full sm:w-auto"
            onClick={() => window.open(WA_LINKS.siteVisit, "_blank")}
          />
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <MessageCircle size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
        <p className="text-white/30 text-xs mt-8">
          No commitment required · Kopou Developers will respond with project information
        </p>
      </div>

      {/* Decorative gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
    </section>
  );
}
