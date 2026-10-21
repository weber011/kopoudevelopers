import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectHighlights from "@/components/ProjectHighlights";
import ProjectOverview from "@/components/ProjectOverview";
import AboutDeveloper from "@/components/AboutDeveloper";
import ApartmentConfigurations from "@/components/ApartmentConfigurations";
import PricingSection from "@/components/PricingSection";
import CommencementCertificate from "@/components/CommencementCertificate";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import WhyExploreSection from "@/components/WhyExploreSection";
import LocationMap from "@/components/LocationMap";
import ReraDetails from "@/components/ReraDetails";
import SiteVisitSection from "@/components/SiteVisitSection";
import EnquiryForm from "@/components/EnquiryForm";
import InstagramSection from "@/components/InstagramSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] selection:bg-[#C8A45D]/30 selection:text-black pb-20 md:pb-0 overflow-x-hidden">
      {/* 1. Navbar with Top Announcement and Official Kopou Developers Logo */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Fast Stats & Highlights */}
      <ProjectHighlights />

      {/* 4. Project Overview */}
      <ProjectOverview />

      {/* 5. About Kopou Developers */}
      <AboutDeveloper />

      {/* 6. Apartment Configurations (2 BHK & 3 BHK) */}
      <ApartmentConfigurations />

      {/* 7. Dedicated Pricing Section */}
      <PricingSection />

      {/* 8. Official Statutory Commencement Certificate (Tezpur Development Authority) */}
      <CommencementCertificate />

      {/* 9. Visual Gallery with Lightbox */}
      <Gallery />

      {/* 10. Lifestyle & Amenities */}
      <Amenities />

      {/* 11. Why Explore Kopou Section */}
      <WhyExploreSection />

      {/* 12. Interactive Location Map (Leaflet / OpenStreetMap) */}
      <LocationMap />

      {/* 13. Full Assam RERA Regulatory Disclosures */}
      <ReraDetails />

      {/* 14. Book a Site Visit Tour */}
      <SiteVisitSection />

      {/* 15. Property Enquiry Form */}
      <EnquiryForm />

      {/* 16. Instagram Lifestyle Showcase */}
      <InstagramSection />

      {/* 17. Frequently Asked Questions */}
      <FAQ />

      {/* 18. Detailed Contact Information */}
      <ContactSection />

      {/* 19. Final Conversion CTA */}
      <FinalCTA />

      {/* 20. Luxury Footer with Official Brand Mark */}
      <Footer />

      {/* 21. Floating Instant WhatsApp Action (Desktop) */}
      <WhatsAppButton />

      {/* 22. Mobile Fixed Quick-Contact Bar (Call, WhatsApp, Book Tour) */}
      <MobileStickyBar />
    </main>
  );
}
