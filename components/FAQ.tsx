"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Where is Kopou Apartments located?",
    a: "Kopou Apartments is listed at Harigaon, Paruwa, University Road, near Home Guard Training Centre and opposite Maternity Hospital in Tezpur, Sonitpur, Assam. Confirm the precise address with Kopou Developers before visiting.",
  },
  {
    q: "What apartment configurations are available?",
    a: "The supplied material promotes 2 BHK and 3 BHK residential options. Contact Kopou Developers to confirm current availability.",
  },
  {
    q: "What is the starting price?",
    a: "The supplied promotional material lists a starting price of ₹31 Lakhs* for a 2 BHK offering. Current prices and applicable charges must be confirmed with the developer. The asterisk indicates that additional charges may apply.",
  },
  {
    q: "How can I request a floor plan?",
    a: "Use the enquiry form or WhatsApp button on this website to request the latest available floor plans from Kopou Developers.",
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. Contact the developer using the site visit form or WhatsApp button to request a suitable date and time. Your visit is not confirmed until the developer confirms it directly.",
  },
  {
    q: "Which amenities are available?",
    a: "Various amenities appear in promotional material. Please contact Kopou Developers directly for confirmation of which facilities are included in the project and available to residents.",
  },
  {
    q: "How can I verify the RERA registration?",
    a: "Use the official Assam RERA portal at rera.assam.gov.in and search for the project registration number RERAA ST 139 OF 2025-2026.",
  },
  {
    q: "How can I contact the sales team?",
    a: "Use the contact details, enquiry form, and WhatsApp button on this website. Primary number: +91 9435082840. Email: kopoudevelop@gmail.com.",
  },
  {
    q: "Can I get the latest payment or pricing details?",
    a: "Contact Kopou Developers directly for the current price, applicable taxes, additional charges, and any available payment information.",
  },
  {
    q: "How do I get directions to the project?",
    a: "Use the interactive location map and the Get Directions button on this website to open the project location in Google Maps.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4">
              Common <span className="text-[#C8A45D]">Questions.</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5E1DA] divide-y divide-[#E5E1DA]">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-[#F8F6F1] transition-colors"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <span className="font-semibold text-sm text-[#171717] leading-snug flex-1">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C8A45D] flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIdx === i ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
