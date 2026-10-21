"use client";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";
import { EclipseButton } from "@/components/ui/eclipse-button";
import { InstagramIcon } from "@/components/InstagramIcon";

const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Harigaon, Paruwa, University Road, Near Home Guard Training Centre, Tezpur, Assam 784501"
)}`;

export default function ContactSection() {
  const { company, project } = SITE_CONFIG;

  return (
    <section id="contact-info" className="section bg-[#171717]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label text-[#C8A45D]">Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-white mt-4">
            We&rsquo;re Here to<br />
            <span className="text-[#C8A45D]">Help You.</span>
          </h2>
          <p className="text-white/60 mt-4 text-sm max-w-md mx-auto">
            Reach out for pricing, floor plans, site visits, or any other project questions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <a
            href={`tel:${company.phones.primary}`}
            className="group flex items-start gap-4 p-6 border border-white/10 hover:border-[#C8A45D]/50 transition-colors"
          >
            <div className="w-10 h-10 bg-[#C8A45D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A45D]/20 transition-colors">
              <Phone size={18} className="text-[#C8A45D]" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Primary Phone</div>
              <div className="text-white font-semibold text-sm">{company.phones.primary}</div>
              <div className="text-white/40 text-xs mt-0.5">Click to call</div>
            </div>
          </a>

          {/* Secondary Phone */}
          <a
            href={`tel:${company.phones.secondary}`}
            className="group flex items-start gap-4 p-6 border border-white/10 hover:border-[#C8A45D]/50 transition-colors"
          >
            <div className="w-10 h-10 bg-[#C8A45D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A45D]/20 transition-colors">
              <Phone size={18} className="text-[#C8A45D]" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Secondary Phone</div>
              <div className="text-white font-semibold text-sm">{company.phones.secondary}</div>
              <div className="text-white/40 text-xs mt-0.5">Click to call</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${company.email}`}
            className="group flex items-start gap-4 p-6 border border-white/10 hover:border-[#C8A45D]/50 transition-colors"
          >
            <div className="w-10 h-10 bg-[#C8A45D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A45D]/20 transition-colors">
              <Mail size={18} className="text-[#C8A45D]" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</div>
              <div className="text-white font-semibold text-sm break-all">{company.email}</div>
              <div className="text-white/40 text-xs mt-0.5">Click to email</div>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-4 p-6 border border-white/10 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 bg-[#C8A45D]/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-[#C8A45D]" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Project Location</div>
              <address className="not-italic text-white/80 text-sm leading-relaxed">
                {project.location.address}<br />
                {project.location.landmark}<br />
                {project.location.city}, {project.location.state} – {project.location.pincode}
              </address>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 border border-white/10 hover:border-green-500/50 transition-colors"
          >
            <div className="w-10 h-10 bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle size={18} className="text-green-400" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">WhatsApp</div>
              <div className="text-white font-semibold text-sm">Chat with Us</div>
              <div className="text-white/40 text-xs mt-0.5">Opens WhatsApp</div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 border border-white/10 hover:border-pink-500/50 transition-colors"
          >
            <div className="w-10 h-10 bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
              <InstagramIcon size={18} className="text-pink-400" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Instagram</div>
              <div className="text-white font-semibold text-sm">@kopou_developers</div>
              <div className="text-white/40 text-xs mt-0.5">Follow for updates</div>
            </div>
          </a>
        </div>

        {/* CTA Row */}
        <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-white/10">
          <EclipseButton
            variant="outline"
            text="Get Directions"
            leftIcon={<Navigation size={14} />}
            onClick={() => window.open(DIRECTIONS, "_blank")}
          />
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={16} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
