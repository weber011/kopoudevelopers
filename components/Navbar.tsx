"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WA_LINKS } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Apartments", href: "#apartments" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "RERA", href: "#rera" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#171717] text-[#C8A45D] text-center text-xs py-2 px-4 font-medium tracking-widest z-50 relative">
        RERA REGISTERED · RERAA ST 139 OF 2025-2026 &nbsp;·&nbsp; 2 BHK STARTING ₹31 LAKHS* &nbsp;·&nbsp;
        <a href={`tel:${SITE_CONFIG.company.phones.primary}`} className="underline underline-offset-2">
          CALL NOW
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E1DA]"
            : "bg-white border-b border-[#E5E1DA]"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* LOGO */}
            <button
              onClick={() => handleNav("#home")}
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="Kopou Developers — Home"
            >
              <Image
                src={SITE_CONFIG.images.logo}
                alt="Kopou Developers Logo"
                width={56}
                height={56}
                className="rounded-full object-cover"
                priority
              />
              <div className="hidden sm:block">
                <div className="font-bold text-[#171717] text-sm tracking-wider uppercase leading-tight">
                  Kopou Developers
                </div>
                <div className="text-[10px] text-[#C8A45D] tracking-widest uppercase">
                  Tezpur · Assam
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      active === link.href.replace("#", "")
                        ? "text-[#C8A45D]"
                        : "text-[#252525] hover:text-[#C8A45D]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.company.phones.primary}`}
                className="flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#C8A45D] transition-colors"
              >
                <Phone size={14} />
                {SITE_CONFIG.company.phones.primary.replace("+91", "+91 ")}
              </a>
              <button
                onClick={() => handleNav("#contact")}
                className="btn-gold text-sm px-5 py-2.5"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile: call + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.company.phones.primary}`}
                className="text-[#C8A45D] p-1"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 text-[#171717]"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen border-t border-[#E5E1DA]" : "max-h-0"
          }`}
        >
          <div className="bg-white px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-[#252525] hover:text-[#C8A45D] hover:bg-[#F4F1EA] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 pb-1 border-t border-[#E5E1DA] mt-2 space-y-2">
              <button
                onClick={() => handleNav("#contact")}
                className="btn-gold w-full justify-center text-sm py-3"
              >
                Enquire Now
              </button>
              <a
                href={WA_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm py-3"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
