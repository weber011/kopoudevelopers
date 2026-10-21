"use client";
import { MessageCircle, FileText, Calendar, HelpCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";
import { EclipseButton } from "@/components/ui/eclipse-button";

export default function PricingSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section bg-white border-t border-[#E5E1DA]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Pricing &amp; Transparency</span>
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-4">
            Your Next Home Starts with <br />
            <span className="text-[#C8A45D]">a Conversation.</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm">
            Honest pricing guidance directly from the developer without inflated broker markups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* 2 BHK Card */}
          <div className="border-2 border-[#C8A45D]/40 bg-[#F8F6F1] p-8 relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-[#C8A45D] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              Promotional
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#6B6B6B] block mb-1">Configuration</span>
              <h3 className="text-2xl font-serif font-bold text-[#171717] mb-4">2 BHK Premium Residence</h3>
              <div className="mb-4">
                <span className="text-3xl lg:text-4xl font-serif font-bold text-[#C8A45D]">
                  ₹31 Lakhs*
                </span>
                <span className="text-xs text-[#6B6B6B] block mt-1">Starting price as per promotional release</span>
              </div>
              <ul className="text-xs text-[#6B6B6B] space-y-2 mb-6">
                <li>• Optimized layout for comfort &amp; ventilation</li>
                <li>• Harigaon University Road location</li>
                <li>• Subject to confirmation of exact unit &amp; floor</li>
              </ul>
            </div>
            <div className="space-y-2">
              <EclipseButton
                variant="primary"
                text="Request 2 BHK Pricing"
                className="w-full"
                onClick={() => scrollTo("contact")}
              />
              <a
                href={WA_LINKS.twoBHK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs py-3"
              >
                <MessageCircle size={14} /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* 3 BHK Card */}
          <div className="border border-[#E5E1DA] bg-white p-8 flex flex-col justify-between hover:border-[#171717] transition-colors">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#6B6B6B] block mb-1">Configuration</span>
              <h3 className="text-2xl font-serif font-bold text-[#171717] mb-4">3 BHK Spacious Residence</h3>
              <div className="mb-4">
                <span className="text-2xl lg:text-3xl font-serif font-bold text-[#171717]">
                  Contact for Pricing
                </span>
                <span className="text-xs text-[#6B6B6B] block mt-1">Direct developer quotation on request</span>
              </div>
              <ul className="text-xs text-[#6B6B6B] space-y-2 mb-6">
                <li>• Expansive master suite with balcony views</li>
                <li>• Generous living and dining zones</li>
                <li>• Tailored payment terms available directly</li>
              </ul>
            </div>
            <div className="space-y-2">
              <EclipseButton
                variant="outline"
                text="Request 3 BHK Quote"
                className="w-full"
                onClick={() => scrollTo("contact")}
              />
              <a
                href={WA_LINKS.threeBHK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs py-3"
              >
                <MessageCircle size={14} /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Pricing notice */}
        <div className="max-w-3xl mx-auto p-4 bg-[#F4F1EA] border border-[#E5E1DA] text-center text-xs text-[#6B6B6B] leading-relaxed">
          <strong>Important Pricing Notice:</strong> Prices, availability, specifications, taxes, additional charges (including parking, registration, and electricity meter deposits), and applicable payment terms must be confirmed directly with Kopou Developers. No financial guarantees or unauthorized loans are implied.
        </div>
      </div>
    </section>
  );
}
