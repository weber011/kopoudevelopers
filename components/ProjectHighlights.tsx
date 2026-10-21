"use client";
import { Home, MapPin, BadgeCheck, Tag } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { icon: Home, label: "Configurations", value: "2 BHK & 3 BHK" },
  { icon: MapPin, label: "Location", value: "Harigaon, Tezpur" },
  { icon: Tag, label: "Starting Price", value: "₹31 Lakhs*" },
  { icon: BadgeCheck, label: "RERA Registered", value: "RERAA ST 139 OF 2025-2026" },
];

export default function ProjectHighlights() {
  return (
    <section id="highlights" className="bg-[#171717] py-6">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C8A45D]/20">
          {highlights.map((h, i) => (
            <div key={h.label} className="flex items-center gap-3 px-4 lg:px-8 py-4">
              <h.icon size={20} className="text-[#C8A45D] flex-shrink-0" />
              <div>
                <div className="text-[#6B6B6B] text-xs uppercase tracking-widest mb-0.5">
                  {h.label}
                </div>
                <div className="text-white font-semibold text-sm">{h.value}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#6B6B6B] text-xs mt-3">
          * Indicative price for 2 BHK. Subject to confirmation by Kopou Developers.
        </p>
      </div>
    </section>
  );
}
