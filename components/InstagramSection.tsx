"use client";
import { SITE_CONFIG } from "@/lib/site-config";
import { InstagramIcon } from "@/components/InstagramIcon";
import { ArrowUpRight } from "lucide-react";

export default function InstagramSection() {
  return (
    <section id="instagram" className="section bg-[#FAF8F5]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl mx-auto bg-white border border-[#E5E1DA] rounded-3xl p-8 sm:p-14 shadow-xl shadow-black/[0.03] flex flex-col items-center justify-center text-center relative overflow-hidden group">
          {/* Subtle gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]" />

          {/* Centered Instagram Gradient Icon with soft glow */}
          <div className="w-20 h-20 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/25 mb-6 group-hover:scale-105 transition-transform duration-300">
            <InstagramIcon size={38} className="text-white" />
          </div>

          <span className="section-label">Official Social Channel</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#171717] mt-3 mb-4 leading-tight">
            Follow Life at <span className="text-[#C8A45D]">Kopou.</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-lg mb-8">
            Discover project updates, architectural progress, and the latest stories from
            Kopou Developers. Join our Instagram community for real-time announcements.
          </p>

          {/* Centered Luxury Button */}
          <a
            href={SITE_CONFIG.company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#171717] hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            <InstagramIcon size={16} />
            <span>Follow @kopou_developers</span>
            <ArrowUpRight size={15} />
          </a>

          <p className="text-xs text-[#6B6B6B] mt-5">
            Opens Instagram in a new tab · Official developer page
          </p>
        </div>
      </div>
    </section>
  );
}
