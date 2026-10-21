"use client";
import { Phone, Mail, MapPin, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/InstagramIcon";

const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Harigaon, Paruwa, University Road, Near Home Guard Training Centre, Tezpur, Assam 784501"
)}`;

export default function ContactSection() {
  const { company, project } = SITE_CONFIG;

  return (
    <section id="contact-info" className="section bg-[#171717] text-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label text-[#C8A45D]">Get in Touch</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-white mt-3 mb-4 leading-tight">
            We&rsquo;re Here to<br />
            <span className="text-[#C8A45D]">Help You.</span>
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            Reach out for pricing, floor plans, site visits, or any other project questions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {/* Primary Phone */}
          <a
            href={`tel:${company.phones.primary}`}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8A45D]/60 hover:bg-white/[0.08] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C8A45D]/15 flex items-center justify-center flex-shrink-0 text-[#C8A45D] group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-[11px] text-[#C8A45D] font-bold uppercase tracking-widest mb-1">
                Primary Phone
              </div>
              <div className="text-white font-semibold text-base">{company.phones.primary}</div>
              <div className="text-white/40 text-xs mt-1">Tap to call directly</div>
            </div>
          </a>

          {/* Secondary Phone */}
          <a
            href={`tel:${company.phones.secondary}`}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8A45D]/60 hover:bg-white/[0.08] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C8A45D]/15 flex items-center justify-center flex-shrink-0 text-[#C8A45D] group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-[11px] text-[#C8A45D] font-bold uppercase tracking-widest mb-1">
                Secondary Phone
              </div>
              <div className="text-white font-semibold text-base">{company.phones.secondary}</div>
              <div className="text-white/40 text-xs mt-1">Tap to call directly</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${company.email}`}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C8A45D]/60 hover:bg-white/[0.08] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C8A45D]/15 flex items-center justify-center flex-shrink-0 text-[#C8A45D] group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-[11px] text-[#C8A45D] font-bold uppercase tracking-widest mb-1">
                Email
              </div>
              <div className="text-white font-semibold text-base break-all">{company.email}</div>
              <div className="text-white/40 text-xs mt-1">Tap to send email</div>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-[#C8A45D]/15 flex items-center justify-center flex-shrink-0 text-[#C8A45D]">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-[11px] text-[#C8A45D] font-bold uppercase tracking-widest mb-1">
                Project Location
              </div>
              <address className="not-italic text-white/80 text-xs leading-relaxed">
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
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/60 hover:bg-white/[0.08] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-widest mb-1">
                WhatsApp
              </div>
              <div className="text-white font-semibold text-base">Chat with Us</div>
              <div className="text-white/40 text-xs mt-1">Instant enquiry reply</div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/60 hover:bg-white/[0.08] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <InstagramIcon size={20} />
            </div>
            <div>
              <div className="text-[11px] text-pink-400 font-bold uppercase tracking-widest mb-1">
                Instagram
              </div>
              <div className="text-white font-semibold text-base">@kopou_developers</div>
              <div className="text-white/40 text-xs mt-1">Follow for daily updates</div>
            </div>
          </a>
        </div>

        {/* Cohesive Matching Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 hover:border-[#C8A45D] text-white hover:text-[#C8A45D] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/5"
          >
            <Navigation size={15} />
            <span>Get Directions</span>
          </a>

          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
