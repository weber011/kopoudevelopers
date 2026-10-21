"use client";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WA_LINKS } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site-config";

const apartments = [
  {
    type: "2 BHK",
    title: "2 BHK Apartments",
    description:
      "Explore residential options designed for comfortable everyday living. Thoughtfully planned spaces with well-defined living, dining, and bedroom areas.",
    price: SITE_CONFIG.project.startingPrice,
    priceNote: "Indicative · Subject to confirmation by developer",
    image: "/images/interior-living.jpg",
    waLink: WA_LINKS.twoBHK,
    detailMessage: "2 BHK",
    accent: "#C8A45D",
  },
  {
    type: "3 BHK",
    title: "3 BHK Apartments",
    description:
      "Discover additional space and flexibility for your household. Larger configurations suited to families seeking room to grow.",
    price: "Contact for Pricing",
    priceNote: "Please contact developer for current 3 BHK pricing",
    image: "/images/bedroom-3bhk.jpg",
    waLink: WA_LINKS.threeBHK,
    detailMessage: "3 BHK",
    accent: "#171717",
  },
];

export default function ApartmentConfigurations() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="apartments" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="section-label">Explore the Apartments</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4">
            Find the Space That<br />
            <span className="text-[#C8A45D]">Fits Your Life.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {apartments.map((apt) => (
            <div
              key={apt.type}
              className="group border border-[#E5E1DA] overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={apt.image}
                  alt={`${apt.title} at Kopou Apartments, Tezpur`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* BHK badge */}
                <div className="absolute top-4 left-4 bg-[#171717] text-[#C8A45D] px-3 py-1 text-xs font-bold tracking-widest uppercase">
                  {apt.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-[#171717] mb-3">
                  {apt.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
                  {apt.description}
                </p>

                {/* Price */}
                <div className="border-t border-[#E5E1DA] pt-5 mb-6">
                  <div className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-1">
                    {apt.type === "2 BHK" ? "Starting From" : "Pricing"}
                  </div>
                  <div className="text-2xl font-bold text-[#C8A45D]">{apt.price}</div>
                  <div className="text-xs text-[#6B6B6B] mt-1">{apt.priceNote}</div>
                </div>

                {/* Note */}
                <div className="text-xs text-[#6B6B6B] italic mb-5 bg-[#F4F1EA] p-3">
                  Floor plans, carpet area, specifications, and applicable charges must be confirmed with Kopou Developers.
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => scrollTo("contact")}
                    className="btn-primary flex-1 justify-center text-sm py-3"
                  >
                    Request {apt.type} Details
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href={apt.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 justify-center text-sm py-3"
                  >
                    <MessageCircle size={14} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#6B6B6B] mt-8 max-w-2xl mx-auto">
          * All prices are indicative. Current pricing, availability, floor plans, applicable taxes, and charges must be confirmed directly with Kopou Developers. Temporary photography used for illustration.
        </p>
      </div>
    </section>
  );
}
