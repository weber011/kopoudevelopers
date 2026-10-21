"use client";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";

export default function PricingSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section bg-white border-t border-[#E5E1DA]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Pricing &amp; Transparency</span>
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-4 leading-tight">
            Your Next Home Starts with <br />
            <span className="text-[#C8A45D]">a Conversation.</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed">
            Honest pricing guidance directly from the developer without inflated broker markups.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14 items-stretch">
          {/* 2 BHK Card */}
          <div className="border-2 border-[#C8A45D] bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-black/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Card Header with integrated badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-widest text-[#C8A45D] font-bold">
                  Configuration
                </span>
                <span className="bg-[#C8A45D] text-[#171717] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Promotional Release
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] mb-5">
                2 BHK Premium Residence
              </h3>

              <div className="mb-6 p-5 rounded-2xl bg-white border border-[#E5E1DA]">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C8A45D]">
                  ₹31 Lakhs*
                </div>
                <div className="text-xs text-[#6B6B6B] mt-1.5 font-medium">
                  Starting price as per promotional release
                </div>
              </div>

              <ul className="text-xs text-[#6B6B6B] space-y-3 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] flex-shrink-0" />
                  <span>Optimized layout for cross-ventilation &amp; natural daylight</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] flex-shrink-0" />
                  <span>Prime Harigaon University Road location</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] flex-shrink-0" />
                  <span>Subject to confirmation of exact unit &amp; floor</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#E5E1DA] space-y-3">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full h-12 rounded-full bg-[#171717] hover:bg-[#C8A45D] text-white hover:text-[#171717] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Request 2 BHK Pricing</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={WA_LINKS.twoBHK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-full border border-emerald-500/40 bg-emerald-50/80 hover:bg-[#25D366] text-emerald-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3 BHK Card */}
          <div className="border border-[#E5E1DA] bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg shadow-black/[0.02] transition-all duration-300 hover:border-[#171717] hover:-translate-y-1">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-widest text-[#6B6B6B] font-bold">
                  Configuration
                </span>
                <span className="bg-[#F4F1EA] text-[#6B6B6B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Spacious Family
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] mb-5">
                3 BHK Spacious Residence
              </h3>

              <div className="mb-6 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E1DA]">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#171717]">
                  Contact for Pricing
                </div>
                <div className="text-xs text-[#6B6B6B] mt-1.5 font-medium">
                  Direct developer quotation on request
                </div>
              </div>

              <ul className="text-xs text-[#6B6B6B] space-y-3 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] flex-shrink-0" />
                  <span>Expansive master suite with private balcony views</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] flex-shrink-0" />
                  <span>Generous living &amp; dedicated dining family zones</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] flex-shrink-0" />
                  <span>Tailored payment milestones directly from builder</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#E5E1DA] space-y-3">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full h-12 rounded-full bg-[#171717] hover:bg-[#C8A45D] text-white hover:text-[#171717] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Request 3 BHK Quote</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={WA_LINKS.threeBHK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-full border border-emerald-500/40 bg-emerald-50/80 hover:bg-[#25D366] text-emerald-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pricing notice */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E1DA] text-center text-xs text-[#6B6B6B] leading-relaxed shadow-sm">
          <div className="flex items-center justify-center gap-1.5 font-bold text-[#171717] mb-1">
            <ShieldCheck size={15} className="text-[#C8A45D]" /> Important Pricing Notice
          </div>
          Prices, availability, specifications, taxes, additional charges (including parking, registration, and electricity meter deposits), and applicable payment terms must be confirmed directly with Kopou Developers. No financial guarantees or unauthorized loans are implied.
        </div>
      </div>
    </section>
  );
}
