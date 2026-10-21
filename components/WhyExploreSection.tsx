"use client";
import { CheckCircle2, ShieldCheck, Landmark, HeartHandshake, MapPin, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Landmark,
    title: "Prime University Road Location",
    description: "Situated in Harigaon along Tezpur's prominent University Road, offering direct connectivity to educational institutes, hospitals, and civic transit.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory RERA Registration",
    description: "Formally registered under Assam RERA (RERAA ST 139 OF 2025-2026) and approved by Tezpur Development Authority (TDA).",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Modern Planning",
    description: "Contemporary 2 & 3 BHK layout designs maximizing natural light, cross-ventilation, and privacy for growing Assamese families.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Builder Ethics",
    description: "Straightforward communication directly with partners Sushil Kumar Golchha & Mohit Golchha, with genuine documents and pricing clarity.",
  },
];

export default function WhyExploreSection() {
  return (
    <section className="section bg-[#F8F6F1]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Why Choose Kopou</span>
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-4">
            A Smart Address for <br />
            <span className="text-[#C8A45D]">Your Future in Tezpur.</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm">
            Discover why homebuyers and investors are exploring Kopou Apartments in Harigaon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="p-6 bg-white border border-[#E5E1DA] hover:border-[#C8A45D] transition-colors relative group"
            >
              <div className="w-12 h-12 rounded-full bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D] mb-5 group-hover:bg-[#171717] group-hover:text-[#C8A45D] transition-colors">
                <r.icon size={22} />
              </div>
              <h3 className="font-serif font-semibold text-lg text-[#171717] mb-2">
                {r.title}
              </h3>
              <p className="text-[#6B6B6B] text-xs leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
