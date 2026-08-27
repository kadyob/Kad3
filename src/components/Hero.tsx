import React from "react";
import { ArrowRight, Code2, Layers, Terminal, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./Button";
import { BRAND } from "../utils/constants";

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const navbarHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const navbarHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#F8FAFC] dark:bg-[#020617] transition-colors"
    >
      {/* Background Subtle Tech Matrix Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/5 blur-3xl rounded-full dark:bg-blue-600/10" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Headline, Subtitle, CTAs & Quick Mini Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 text-left flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              {/* Eyebrow badge */}
              <div className="flex items-center gap-2">
                <span className="inline-block px-3.5 py-1 bg-[#EFF6FF] text-[#2563EB] text-[11px] font-bold tracking-widest uppercase rounded-full border border-blue-100 dark:bg-blue-950/60 dark:text-blue-400 dark:border-blue-900/50 font-mono">
                  Professional Digital Partner
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.12] sm:leading-[1.1] font-heading">
                Your Digital Vision,
                <br />
                <span className="text-[#2563EB] dark:text-blue-400">Realized.</span>
              </h1>

              {/* Description */}
              <p className="text-[#64748B] dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                I transform complex ideas into modern digital experiences through expert software development, user-centered interface design, and creative technology solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  onClick={handleScrollToProjects}
                  icon={<ArrowRight className="w-4 h-4 ml-1" />}
                  className="bg-[#0F172A] hover:bg-[#1E293B] text-white dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100 shadow-xs"
                >
                  View Portfolio
                </Button>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-button"
                  aria-label={`Chat with UMK on WhatsApp: ${BRAND.whatsapp}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all duration-150 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp ({BRAND.whatsapp})</span>
                </a>

                <div className="flex items-center text-xs sm:text-sm font-medium text-[#64748B] dark:text-slate-400 ml-1">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2 shrink-0 animate-pulse" />
                  Available for new projects
                </div>
              </div>
            </div>

            {/* Featured Mini Project Cards Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-widest mb-3.5 font-mono">
                Featured Disciplines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group bg-white dark:bg-[#0F172A] p-4 rounded-xl border border-[#E2E8F0] dark:border-slate-800 shadow-xs hover:border-[#2563EB]/50 transition-all duration-200">
                  <div className="h-24 bg-[#F1F5F9] dark:bg-slate-800 rounded-lg mb-3 overflow-hidden flex items-center justify-center border border-[#E2E8F0]/60 dark:border-slate-700/60">
                    <div className="text-slate-400 dark:text-slate-500 font-mono text-lg font-bold">
                      &lt; CODE /&gt;
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A] dark:text-white group-hover:text-[#2563EB] transition-colors">
                        Full-Stack Web Apps
                      </h4>
                      <p className="text-[11px] text-[#64748B] dark:text-slate-400 mt-0.5">
                        React • TypeScript • APIs
                      </p>
                    </div>
                    <span className="text-[#2563EB] dark:text-blue-400 font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="group bg-white dark:bg-[#0F172A] p-4 rounded-xl border border-[#E2E8F0] dark:border-slate-800 shadow-xs hover:border-[#2563EB]/50 transition-all duration-200">
                  <div className="h-24 bg-[#F1F5F9] dark:bg-slate-800 rounded-lg mb-3 overflow-hidden flex items-center justify-center border border-[#E2E8F0]/60 dark:border-slate-700/60">
                    <div className="text-slate-400 dark:text-slate-500 font-mono text-lg font-bold">
                      UI/UX
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A] dark:text-white group-hover:text-[#2563EB] transition-colors">
                        Digital Interface Design
                      </h4>
                      <p className="text-[11px] text-[#64748B] dark:text-slate-400 mt-0.5">
                        Design Systems • Micro-interactions
                      </p>
                    </div>
                    <span className="text-[#2563EB] dark:text-blue-400 font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Showcase Card & Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Profile Avatar Card with User's Photo */}
            <div className="bg-white dark:bg-[#0F172A] p-6 rounded-2xl border border-[#E2E8F0] dark:border-slate-800 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#2563EB]/30 shadow-md bg-slate-100 dark:bg-slate-800">
                    <img
                      src={BRAND.avatar}
                      alt="Usman Muhammad (UMK) - KADYOB Digital Creator"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0F172A] flex items-center justify-center shadow-xs" title="Online / Available">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950/80 dark:text-blue-400 text-xs font-mono font-bold mb-1.5 border border-blue-100 dark:border-blue-900/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED CREATOR</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white font-heading">
                    Usman Muhammad
                  </h3>
                  <p className="text-xs text-[#2563EB] dark:text-blue-400 font-bold uppercase tracking-wider font-mono">
                    {BRAND.fullName}
                  </p>
                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 leading-tight">
                    Software Engineer &amp; Creative Digital Technologist
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Quick Bar in Profile Card */}
              <div className="mt-5 pt-4 border-t border-[#E2E8F0] dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400">
                    <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#64748B] dark:text-slate-400 font-mono tracking-wider">
                      WhatsApp Quick Contact
                    </div>
                    <div className="text-xs font-semibold text-[#0F172A] dark:text-white font-mono">
                      {BRAND.whatsapp}
                    </div>
                  </div>
                </div>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs shrink-0"
                >
                  Chat ↗
                </a>
              </div>
            </div>

            {/* Top Stat Row Card */}
            <div className="bg-white dark:bg-[#0F172A] p-5 rounded-2xl border border-[#E2E8F0] dark:border-slate-800 shadow-xs">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-[#F8FAFC] dark:bg-slate-900/80 rounded-xl text-center border border-[#F1F5F9] dark:border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] dark:text-blue-400 font-heading">
                    03+
                  </div>
                  <div className="text-[10px] text-[#64748B] dark:text-slate-400 uppercase font-bold tracking-tight mt-0.5 font-mono">
                    Years Experience
                  </div>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] dark:bg-slate-900/80 rounded-xl text-center border border-[#F1F5F9] dark:border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] dark:text-blue-400 font-heading">
                    15+
                  </div>
                  <div className="text-[10px] text-[#64748B] dark:text-slate-400 uppercase font-bold tracking-tight mt-0.5 font-mono">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Accent Services & Skills Card */}
            <div className="bg-[#0F172A] p-5 sm:p-6 rounded-2xl text-white border border-[#1E293B] shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest font-mono">
                  Services &amp; Stack
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#1E293B] text-slate-300 font-mono">
                  Full-Stack
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center space-x-3 p-2 rounded-xl bg-[#1E293B]/70 border border-slate-700/50">
                  <div className="p-1.5 bg-[#0F172A] rounded-lg text-blue-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-100">
                    UI/UX &amp; Creative Design
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2 rounded-xl bg-[#1E293B]/70 border border-slate-700/50">
                  <div className="p-1.5 bg-[#0F172A] rounded-lg text-emerald-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-100">
                    Web &amp; Software Development
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#1E293B]">
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Git"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1E293B] px-2 py-0.5 rounded-md text-[10px] text-[#94A3B8] font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
