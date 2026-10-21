"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, BadgeCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  const { company, project, rera } = SITE_CONFIG;

  return (
    <footer className="bg-[#171717] text-white border-t border-white/10">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand with Official Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={SITE_CONFIG.images.logo}
                alt="Kopou Developers Official Logo"
                width={56}
                height={56}
                className="rounded-full object-cover border border-[#C8A45D]/40"
              />
              <div>
                <div className="font-bold tracking-wider uppercase text-sm">Kopou Developers</div>
                <div className="text-[#C8A45D] text-xs tracking-widest uppercase">Tezpur · Assam</div>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-5">
              {company.tagline}.<br />
              Residential development in Harigaon, Tezpur, Assam.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C8A45D] font-semibold">
              <BadgeCheck size={14} />
              RERA: {rera.registrationNumber}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div className="text-[#C8A45D] text-xs font-bold uppercase tracking-widest mb-5">Navigate</div>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Apartments", "#apartments"],
                ["Amenities", "#amenities"],
                ["Gallery", "#gallery"],
                ["Location", "#location"],
                ["RERA Details", "#rera"],
                ["Commencement Certificate", "#certificate"],
                ["Contact", "#contact"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/60 text-sm hover:text-[#C8A45D] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <div className="text-[#C8A45D] text-xs font-bold uppercase tracking-widest mb-5">Contact</div>
            <div className="space-y-4">
              <a href={`tel:${company.phones.primary}`} className="flex items-start gap-2 text-white/60 hover:text-[#C8A45D] transition-colors text-sm">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                {company.phones.primary}
              </a>
              <a href={`tel:${company.phones.secondary}`} className="flex items-start gap-2 text-white/60 hover:text-[#C8A45D] transition-colors text-sm">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                {company.phones.secondary}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-2 text-white/60 hover:text-[#C8A45D] transition-colors text-sm break-all">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                {company.email}
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic leading-relaxed">
                  {project.location.address},<br />
                  {project.location.landmark},<br />
                  {project.location.city}, {project.location.state} – {project.location.pincode}
                </address>
              </div>
            </div>
          </div>

          {/* Col 4 — Social + Legal */}
          <div>
            <div className="text-[#C8A45D] text-xs font-bold uppercase tracking-widest mb-5">Connect</div>
            <div className="space-y-3 mb-8">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#C8A45D] transition-colors text-sm"
              >
                <InstagramIcon size={14} />
                @kopou_developers
              </a>
              <a
                href={WA_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors text-sm"
              >
                <MessageCircle size={14} />
                WhatsApp Enquiry
              </a>
              <a
                href={rera.officialPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#C8A45D] transition-colors text-sm"
              >
                <ExternalLink size={14} />
                Assam RERA Portal
              </a>
            </div>
            <div className="text-[#C8A45D] text-xs font-bold uppercase tracking-widest mb-3">Legal</div>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-white/60 hover:text-[#C8A45D] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-white/60 hover:text-[#C8A45D] transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Kopou Developers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/30 text-xs">
              All prices are indicative. Confirm with developer.
            </p>
            <a
              href="https://webbybuilder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors text-xs"
            >
              Website by WebbyBuilder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
