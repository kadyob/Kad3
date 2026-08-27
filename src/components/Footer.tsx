import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Heart, Code, MessageCircle } from "lucide-react";
import { BRAND, NAV_LINKS } from "../utils/constants";

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0F172A] text-slate-300 dark:bg-[#020617] dark:text-slate-400 border-t border-[#1E293B] dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="UMK Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-extrabold text-base shadow-xs group-hover:bg-[#1D4ED8] transition-colors">
                <span className="tracking-tight font-heading font-black">UMK</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-extrabold tracking-tight text-white leading-none font-heading">
                  KADYOB
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#60A5FA] leading-tight mt-0.5 font-mono">
                  DIGITAL CREATOR
                </span>
              </div>
            </a>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Creating digital experiences through code, creativity, and technology. Empowering businesses and individuals with intuitive web applications.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#94A3B8]">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for new projects &amp; roles
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200 font-mono">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#334155] group-hover:bg-[#2563EB] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200 font-mono">
              Direct Channels
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded-lg bg-[#064E3B]/60 hover:bg-[#064E3B] text-emerald-300 hover:text-white border border-emerald-700/60 transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                  <span className="font-mono">WhatsApp ({BRAND.whatsapp})</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              <a
                href={BRAND.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-slate-300 hover:text-white border border-[#334155] transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-slate-300 hover:text-white border border-[#334155] transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#60A5FA]" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-slate-300 hover:text-white border border-[#334155] transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Email</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 {BRAND.name} ({BRAND.fullName}). All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed &amp; built with</span>
            <Code className="w-3.5 h-3.5 text-[#2563EB] mx-0.5" />
            <span>React, Tailwind CSS &amp; TypeScript.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
