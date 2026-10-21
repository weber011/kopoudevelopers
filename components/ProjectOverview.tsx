"use client";
import Image from "next/image";
import { MapPin, Home, Tag, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ProjectOverview() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="project" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="section-label">The Project</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/project-overview.jpg"
                alt="Kopou Apartments – aerial view of the residential development in Tezpur, Assam"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#C8A45D]/30 -z-10" />
          </div>

          {/* Right — Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mb-6">
              A Place to Call<br />
              <span className="text-[#C8A45D]">Your Own.</span>
            </h2>
            <div className="divider" />
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Kopou Apartments is a residential development by Kopou Developers
              located in Harigaon, along University Road in Tezpur, Assam.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Explore available 2 BHK and 3 BHK apartment options, learn about
              the project location, and contact the developer for current
              pricing, floor plans, availability, and site visit arrangements.
            </p>

            {/* Detail cards */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 p-4 bg-[#F4F1EA] border-l-2 border-[#C8A45D]">
                <Home size={18} className="text-[#C8A45D] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-1">Options</div>
                  <div className="font-semibold text-[#171717] text-sm">2 BHK &amp; 3 BHK Residential Apartments</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F4F1EA] border-l-2 border-[#C8A45D]">
                <MapPin size={18} className="text-[#C8A45D] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-1">Location</div>
                  <div className="font-semibold text-[#171717] text-sm">
                    {SITE_CONFIG.project.location.address},<br />
                    {SITE_CONFIG.project.location.landmark},<br />
                    {SITE_CONFIG.project.location.city}, Assam
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F4F1EA] border-l-2 border-[#C8A45D]">
                <Tag size={18} className="text-[#C8A45D] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-1">Indicative Starting Price</div>
                  <div className="font-semibold text-[#171717] text-sm">
                    {SITE_CONFIG.project.startingPrice} for 2 BHK · Subject to confirmation
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo("apartments")}
              className="btn-primary flex items-center gap-2"
            >
              Discover the Apartments <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
