"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function AboutDeveloper() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="section bg-[#F4F1EA]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <span className="section-label">About the Developer</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4 mb-6">
              Building with<br />
              <span className="text-[#C8A45D]">Purpose.</span>
            </h2>
            <div className="divider" />
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Kopou Developers is associated with the Kopou Apartments residential
              project in Tezpur, Assam — a development aimed at bringing
              thoughtfully designed, accessible residential spaces to Harigaon,
              along the University Road corridor.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              The project is oriented around clear communication with prospective
              buyers: offering accurate information about apartment configurations,
              project location, pricing, and the steps involved in arranging a
              site visit.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Kopou Apartments is registered under the Assam Real Estate
              Regulatory Authority (RERA), bringing an additional layer of
              accountability and transparency to the project.
            </p>

            {/* Partners */}
            <div className="border-t border-[#E5E1DA] pt-6 mb-8">
              <div className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-2">Partners</div>
              <div className="flex gap-6">
                {SITE_CONFIG.company.partners.map((p) => (
                  <div key={p} className="text-[#171717] font-semibold text-sm">
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollTo("apartments")}
              className="btn-primary flex items-center gap-2"
            >
              Explore Kopou Apartments <ArrowRight size={16} />
            </button>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/images/kopou-logo.jpeg"
                alt="Kopou Developers – Building dreams with quality and trust"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-[#C8A45D]/30 -z-10" />
            {/* Tagline */}
            <div className="mt-4 p-4 bg-[#171717] text-center">
              <p className="text-[#C8A45D] text-sm italic font-light tracking-wide">
                &ldquo;{SITE_CONFIG.company.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
