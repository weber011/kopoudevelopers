"use client";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { EclipseButton } from "@/components/ui/eclipse-button";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function InstagramSection() {
  return (
    <section id="instagram" className="section bg-[#F4F1EA]">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <InstagramIcon size={30} className="text-white" />
          </div>
          <span className="section-label">Instagram</span>
          <h2 className="text-4xl font-serif font-semibold text-[#171717] mt-4 mb-4">
            Follow Life at <span className="text-[#C8A45D]">Kopou.</span>
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">
            Discover project updates, residential inspiration, and the latest news from
            Kopou Developers. Follow us on Instagram for the most current content.
          </p>
          <EclipseButton
            variant="primary"
            text="Follow @kopou_developers"
            leftIcon={<InstagramIcon size={16} />}
            onClick={() => window.open(SITE_CONFIG.company.instagram, "_blank")}
          />
          <p className="text-xs text-[#6B6B6B] mt-4">
            Opens Instagram in a new tab. Content is managed by Kopou Developers.
          </p>
        </div>
      </div>
    </section>
  );
}
