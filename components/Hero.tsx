"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin, MessageCircle } from "lucide-react";
import { WA_LINKS } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    document.getElementById("highlights")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToApts = () => {
    document.getElementById("apartments")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-apartment.jpg"
          alt="Kopou Apartments – Premium residential development in Harigaon, Tezpur, Assam"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay — left-side darker for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/80 via-[#171717]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            <MapPin size={14} className="text-[#C8A45D]" />
            <span className="section-label text-[#C8A45D]">
              Kopou Apartments · Tezpur, Assam
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white text-3xl sm:text-5xl lg:text-7xl font-serif font-semibold leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            Your Next Chapter<br />
            <span className="text-[#C8A45D]">Begins Here.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-[#E9E3D8] text-base sm:text-lg lg:text-xl font-light mb-3 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
          >
            Thoughtfully Designed Homes. A Better Way to Live.
          </p>

          {/* Description */}
          <p
            className="text-[#E9E3D8]/80 text-sm sm:text-base mb-6 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            Discover 2 &amp; 3 BHK residential apartment options in Harigaon,
            Tezpur, Assam.
          </p>

          {/* Price Badge */}
          <div
            className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 border border-[#C8A45D]/50 bg-[#171717]/80 backdrop-blur-sm px-4 py-2.5 mb-8 animate-fade-up max-w-full"
            style={{ animationDelay: "0.45s", opacity: 0, animationFillMode: "forwards" }}
          >
            <span className="text-[#C8A45D] font-bold text-lg sm:text-xl">
              {SITE_CONFIG.project.startingPrice}
            </span>
            <span className="text-[#E9E3D8]/70 text-xs sm:border-l sm:border-[#C8A45D]/30 sm:pl-3">
              Indicative · 2 BHK · Subject to confirmation
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up max-w-md sm:max-w-none"
            style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            <button onClick={scrollToApts} className="btn-gold justify-center w-full sm:w-auto py-3">
              Explore Apartments
            </button>
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center w-full sm:w-auto py-3"
            >
              <MessageCircle size={16} />
              Enquire on WhatsApp
            </a>
          </div>

          {/* Location */}
          <a
            href="#location"
            onClick={(e) => { e.preventDefault(); document.getElementById("location")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-1.5 text-[#E9E3D8]/60 text-xs hover:text-[#C8A45D] transition-colors animate-fade-up"
            style={{ animationDelay: "0.55s", opacity: 0, animationFillMode: "forwards" }}
          >
            <MapPin size={12} />
            University Road, Harigaon, Tezpur · Get Directions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-[#C8A45D] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
