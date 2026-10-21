"use client";
import Image from "next/image";
import { Waves, Dumbbell, Users, ShieldCheck, Zap, Car, Utensils, Baby, Hotel, Sparkles, HeartPulse, Phone } from "lucide-react";

const amenities = [
  { icon: Waves, label: "Swimming Pool", category: "Recreation" },
  { icon: Waves, label: "Kids' Splash Pool", category: "Recreation" },
  { icon: Dumbbell, label: "Fitness Centre", category: "Wellness" },
  { icon: Sparkles, label: "Spa & Sauna", category: "Wellness" },
  { icon: Hotel, label: "Banquet Hall", category: "Community" },
  { icon: Users, label: "Multipurpose Hall", category: "Community" },
  { icon: Baby, label: "Children's Play Area", category: "Recreation" },
  { icon: Utensils, label: "Restaurant & Café", category: "Community" },
  { icon: Car, label: "Dedicated Parking", category: "Convenience" },
  { icon: Zap, label: "24×7 Power Backup", category: "Convenience" },
  { icon: ShieldCheck, label: "Gated Security", category: "Safety" },
  { icon: Phone, label: "Doctor on Call", category: "Safety" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section bg-[#FAF8F5]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Top Editorial Row */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="section-label">Lifestyle &amp; Amenities</span>
            <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4 mb-6 leading-tight">
              More Than a Home.<br />
              <span className="text-[#C8A45D]">A Way of Living.</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#C8A45D] mb-6" />
            <p className="text-[#6B6B6B] leading-relaxed mb-6 text-sm">
              Kopou Apartments is conceptualized to integrate daily convenience and leisurely living in Tezpur. 
              The amenities below represent the planned leisure and lifestyle offerings.
            </p>
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#C8A45D]/30 px-4 py-2.5 rounded-lg text-xs text-[#6B6B6B] shadow-sm">
              <ShieldCheck size={16} className="text-[#C8A45D] flex-shrink-0" />
              <span>All amenities require developer verification for exact phased delivery.</span>
            </div>
          </div>

          {/* Image with clean luxury frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl border border-[#E5E1DA]">
              <Image
                src="/images/amenity-pool.jpg"
                alt="Residential amenities – swimming pool area (illustrative)"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-[#171717]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  Illustrative Visual Concept
                </span>
                <span className="text-white/80 text-[11px]">
                  Confirm with sales team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean, Smooth Amenity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="bg-white border border-[#E5E1DA] hover:border-[#C8A45D] rounded-xl p-5 sm:p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group shadow-sm"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF6EE] text-[#C8A45D] flex items-center justify-center group-hover:bg-[#171717] group-hover:text-[#C8A45D] transition-colors duration-300">
                <a.icon size={20} />
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base text-[#171717] group-hover:text-[#C8A45D] transition-colors">
                  {a.label}
                </div>
                <div className="text-[11px] text-[#6B6B6B] uppercase tracking-wider mt-1 font-medium">
                  {a.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#6B6B6B] mt-10 italic">
          Amenity list based on promotional/search material. Contact developer to verify inclusions.
        </p>
      </div>
    </section>
  );
}
