import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Use | Kopou Developers",
  description: "Terms of Use and project disclaimers for Kopou Apartments, Tezpur.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 bg-[#F8F6F1]">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl bg-white p-8 sm:p-12 border border-[#E5E1DA] shadow-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A98747] hover:underline mb-8 font-semibold"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#171717] mb-4">
            Terms of Use &amp; Disclaimers
          </h1>
          <p className="text-xs text-[#6B6B6B] mb-8">
            Project: Kopou Apartments · Promoter: Kopou Developers · RERA: {SITE_CONFIG.rera.registrationNumber}
          </p>

          <div className="space-y-6 text-sm text-[#6B6B6B] leading-relaxed">
            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                1. Project Information &amp; Indicative Pricing
              </h2>
              <p>
                The information provided on this website is for informational and demonstrative purposes only. Any pricing mentioned (including the promotional starting price of ₹31 Lakhs for 2 BHK configurations) is indicative and subject to change without prior notice. Final pricing, unit availability, statutory taxes (including GST), stamp duty, registration charges, and maintenance fees must be verified directly through an official agreement with Kopou Developers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                2. Architectural Visualizations and Imagery
              </h2>
              <p>
                Photographs, render perspectives, and visual depictions displayed on this demonstration website include illustrative and artistic representations intended to showcase lifestyle concepts. They do not constitute a legal warranty or representation of finished construction. Actual structural finishes, landscaping, and colors may vary as per approved TDA architectural specifications.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                3. Statutory Regulatory Disclosures
              </h2>
              <p>
                Kopou Apartments is registered with Assam RERA under registration number <strong>{SITE_CONFIG.rera.registrationNumber}</strong>. Planning sanction was granted by Tezpur Development Authority under reference <strong>{SITE_CONFIG.rera.buildingPermit}</strong>. Prospective buyers are encouraged to review statutory documents on the official regulatory portal at <a href="https://rera.assam.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#A98747] underline">rera.assam.gov.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                4. Governing Jurisdiction
              </h2>
              <p>
                Any legal inquiries, agreements, or transactions related to Kopou Apartments shall be governed by the laws of India and subject to the jurisdiction of the competent courts in Sonitpur / Tezpur, Assam.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
