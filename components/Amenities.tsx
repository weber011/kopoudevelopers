"use client";
import Image from "next/image";
import { Waves, Dumbbell, Users, ShieldCheck, Zap, Car, Coffee, Utensils, Baby, Hotel, Sparkles, HeartPulse, Phone } from "lucide-react";

// ⚠️ These amenities appear in promotional/search material related to 'Club Kopou'.
// Their exact inclusion in the Kopou Apartments project must be confirmed by the developer before public launch.
// Each amenity is labelled with a verification status.

const amenities = [
  { icon: Waves, label: "Swimming Pool", category: "Recreation", note: "Awaiting confirmation" },
  { icon: Waves, label: "Kids' Splash Pool", category: "Recreation", note: "Awaiting confirmation" },
  { icon: Dumbbell, label: "Fitness Centre", category: "Wellness", note: "Awaiting confirmation" },
  { icon: Sparkles, label: "Spa & Sauna", category: "Wellness", note: "Awaiting confirmation" },
  { icon: Hotel, label: "Banquet Hall", category: "Community", note: "Awaiting confirmation" },
  { icon: Users, label: "Multipurpose Hall", category: "Community", note: "Awaiting confirmation" },
  { icon: Baby, label: "Children's Play Area", category: "Community", note: "Awaiting confirmation" },
  { icon: Utensils, label: "Restaurant & Café", category: "Community", note: "Awaiting confirmation" },
  { icon: Car, label: "Parking", category: "Convenience", note: "Awaiting confirmation" },
  { icon: Zap, label: "Power Backup", category: "Convenience", note: "Awaiting confirmation" },
  { icon: ShieldCheck, label: "24×7 Security", category: "Safety", note: "Awaiting confirmation" },
  { icon: Phone, label: "Doctor on Call", category: "Safety", note: "Awaiting confirmation" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section bg-[#F4F1EA]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <span className="section-label">Lifestyle &amp; Amenities</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4 mb-6">
              More Than a Home.<br />
              <span className="text-[#C8A45D]">A Way of Living.</span>
            </h2>
            <div className="divider" />
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              The following amenities appear in promotional material associated
              with the project. Please contact Kopou Developers to confirm
              which facilities are included and available to residents.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#C8A45D]/10 border border-[#C8A45D]/30 px-4 py-2 text-xs text-[#6B6B6B]">
              <ShieldCheck size={14} className="text-[#C8A45D]" />
              All amenities require developer confirmation before being relied upon.
            </div>
          </div>
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/amenity-pool.jpg"
              alt="Residential amenities – swimming pool area (illustrative)"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#171717]/80 text-white text-xs px-3 py-1.5">
              Illustrative — Confirm amenities with developer
            </div>
          </div>
        </div>

        {/* Amenity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="bg-white border border-[#E5E1DA] p-5 flex flex-col items-start gap-3 hover:border-[#C8A45D] transition-colors group"
            >
              <a.icon size={22} className="text-[#C8A45D] group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-sm text-[#171717]">{a.label}</div>
                <div className="text-xs text-[#6B6B6B] mt-0.5">{a.category}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#6B6B6B] mt-8 italic">
          Amenity list based on promotional/search material. Contact developer to verify inclusions.
        </p>
      </div>
    </section>
  );
}
