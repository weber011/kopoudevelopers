"use client";
import { useState } from "react";
import Image from "next/image";
import { FileCheck, ExternalLink, Eye, X, Download, ShieldCheck } from "lucide-react";
import { EclipseButton } from "@/components/ui/eclipse-button";

export default function CommencementCertificate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="certificate" className="py-16 bg-[#171717] text-white border-t border-b border-[#C8A45D]/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Certificate Information */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-semibold uppercase tracking-widest mb-4">
              <ShieldCheck size={14} /> Official Statutory Approval
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-4">
              Commencement Certificate &amp; <span className="text-[#C8A45D]">Government Sanction</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#C8A45D] mb-6" />
            <p className="text-[#E9E3D8]/80 text-sm leading-relaxed mb-6">
              Kopou Apartments has received formal statutory sanction from the <strong>Tezpur Development Authority (TDA)</strong>, District Sonitpur, Assam. Project commencement took effect from <strong>01-09-2025</strong> under official reference <strong>TDA /BP/ Hari Gaon / 356 / 2025</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white/5 border border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-widest block mb-1">Sanction Authority</span>
                <span className="text-sm font-semibold text-white">Tezpur Development Authority</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-widest block mb-1">Permit Reference</span>
                <span className="text-sm font-semibold text-[#C8A45D]">TDA/BP/Hari Gaon/356/2025</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-widest block mb-1">Commencement Date</span>
                <span className="text-sm font-semibold text-white">01 September 2025</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-widest block mb-1">Signatory Partners</span>
                <span className="text-sm font-semibold text-white">Sushil Kumar Golchha &amp; Mohit Golchha</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <EclipseButton
                variant="gold"
                text="View Full Certificate"
                leftIcon={<Eye size={16} />}
                onClick={() => setIsOpen(true)}
              />
              <a
                href="/images/commencement-certificate.jpeg"
                download="Kopou-Developers-Commencement-Certificate.jpeg"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 hover:border-white text-white hover:bg-white hover:text-[#171717] font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <Download size={15} /> <span>Download Copy</span>
              </a>
            </div>
          </div>

          {/* Certificate Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => setIsOpen(true)}
              className="relative group cursor-pointer border-2 border-[#C8A45D]/40 bg-white p-2 shadow-2xl transition-transform duration-300 hover:scale-[1.02] max-w-sm w-full"
            >
              <div className="relative aspect-[1/1.414] overflow-hidden bg-neutral-100">
                <Image
                  src="/images/commencement-certificate.jpeg"
                  alt="Official Commencement Certificate issued to Kopou Developers by Tezpur Development Authority"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
                  <Eye size={36} className="text-[#C8A45D]" />
                  <span className="text-xs uppercase tracking-widest font-bold">Click to Inspect Official Document</span>
                </div>
              </div>
              <div className="bg-[#171717] py-2 px-3 text-center border-t border-[#C8A45D]/30 flex items-center justify-between">
                <span className="text-[11px] text-[#C8A45D] font-mono">TDA/BP/Hari Gaon/356/2025</span>
                <span className="text-[11px] text-white/70 flex items-center gap-1">
                  <ExternalLink size={11} /> Enlarge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white p-4 shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div>
                <h4 className="text-base font-bold text-neutral-900 font-serif">Kopou Developers — Commencement Certificate</h4>
                <p className="text-xs text-neutral-500 font-mono">Tezpur Development Authority Ref: TDA /BP/ Hari Gaon / 356 / 2025</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-neutral-600 hover:text-black hover:bg-neutral-100"
                aria-label="Close document preview"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="relative flex-1 min-h-[60vh] my-2 overflow-y-auto bg-neutral-100">
              <Image
                src="/images/commencement-certificate.jpeg"
                alt="Commencement Certificate - M/s Kopou Developers"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200 text-xs text-neutral-600">
              <span>Date: 26/07/2025 · Partner: Sushil Kumar Golchha</span>
              <a
                href="/images/commencement-certificate.jpeg"
                download="Kopou-Developers-Commencement-Certificate.jpeg"
                className="inline-flex items-center gap-1 font-semibold text-[#A98747] hover:underline"
              >
                <Download size={14} /> Download Original Image
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
