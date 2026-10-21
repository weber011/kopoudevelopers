"use client";
import { ShieldCheck, Landmark, HeartHandshake, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Landmark,
    title: "Prime University Road Location",
    description: "Situated in Harigaon along Tezpur's prominent University Road, offering direct connectivity to educational institutes, hospitals, and civic transit.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory RERA Registration",
    description: "Formally registered under Assam RERA (RERAA ST 139 OF 2025-2026) and sanctioned by Tezpur Development Authority (TDA).",
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
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-4 leading-tight">
            A Smart Address for <br />
            <span className="text-[#C8A45D]">Your Future in Tezpur.</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed">
            Discover why homebuyers and investors are exploring Kopou Apartments in Harigaon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-7 sm:p-8 bg-white border border-[#E5E1DA] hover:border-[#C8A45D] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8A45D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#C8A45D] flex items-center justify-center mb-6 group-hover:bg-[#171717] group-hover:text-[#C8A45D] transition-colors duration-300 border border-[#C8A45D]/20">
                  <r.icon size={24} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#171717] mb-3 group-hover:text-[#C8A45D] transition-colors">
                  {r.title}
                </h3>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
