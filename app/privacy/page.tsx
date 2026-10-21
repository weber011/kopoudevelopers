import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Kopou Developers",
  description: "Privacy Policy and information handling practices of Kopou Developers.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6B6B6B] mb-8">
            Last Updated: 2026 · Kopou Developers, Harigaon, Tezpur, Assam
          </p>

          <div className="space-y-6 text-sm text-[#6B6B6B] leading-relaxed">
            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                1. Information We Collect
              </h2>
              <p>
                When you interact with the Kopou Developers website, request pricing, or schedule a site visit, you may provide personal information including your full name, mobile telephone number, email address, and property configuration preferences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide is used solely to respond to your specific inquiries, share project brochures, discuss current apartment availability, and coordinate site visits to Kopou Apartments in Harigaon, Tezpur.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                3. WhatsApp and Third-Party Communication
              </h2>
              <p>
                Our website offers direct click-to-chat integration via WhatsApp. When you opt to enquire through WhatsApp, your inquiry text is pre-filled on your own device and transmitted directly via WhatsApp's infrastructure in accordance with Meta's privacy terms. We do not intercept or record messages outside of standard customer service communication.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                4. Data Sharing and Third Parties
              </h2>
              <p>
                Kopou Developers does not sell, rent, or trade your contact details to third-party marketing brokers or advertisers. Your details are accessible only to the designated sales and customer coordination team for Kopou Apartments.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                5. Contacting the Developer
              </h2>
              <p>
                If you have questions regarding your data or would like your contact details removed from our inquiry register, please email{" "}
                <a href={`mailto:${SITE_CONFIG.company.email}`} className="text-[#A98747] underline">
                  {SITE_CONFIG.company.email}
                </a>{" "}
                or call {SITE_CONFIG.company.phones.primary}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
