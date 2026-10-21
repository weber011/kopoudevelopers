"use client";
import { WA_LINKS } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5e] hover:scale-110 transition-all duration-300 rounded-full"
      aria-label="Chat with Kopou Developers on WhatsApp"
      title="Enquire on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
