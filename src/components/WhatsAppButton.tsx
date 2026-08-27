import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "../utils/constants";

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-button"
      aria-label={`Chat with UMK on WhatsApp: ${BRAND.whatsapp}`}
      className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer group"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white/20 stroke-[2.5]" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
      </div>
      <span className="hidden sm:inline text-xs font-bold tracking-tight font-mono">
        WhatsApp
      </span>
    </a>
  );
};
