import React from "react";
import { Check, Compass, Cpu, Sparkles, Award, Clock, Briefcase, Zap } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { BRAND } from "../utils/constants";

export const About: React.FC = () => {
  const statIcons = [
    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  ];

  const highlights = [
    "Bridging the gap between creative visual design and robust software engineering",
    "Clean, semantic code adhering to accessibility (WCAG 2.2 AA) and modern standards",
    "Performance-obsessed approach yielding fast load times and fluid 60fps animations",
    "Collaborative and transparent communication from initial wireframe to live deployment",
  ];

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="py-20 lg:py-28 bg-white dark:bg-[#0B1120] border-y border-[#E2E8F0] dark:border-slate-800 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Creative Technologist &"
          highlight="Software Developer"
          description="Combining modern software engineering, thoughtful digital design, and innovative solutions to turn concepts into useful, high-impact digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
          {/* Left: Detailed Story and Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-[#64748B] dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] dark:bg-slate-900/60 border border-[#E2E8F0] dark:border-slate-800">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#2563EB]/40 shrink-0 shadow-xs">
                <img
                  src={BRAND.avatar}
                  alt="Usman Muhammad (UMK)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#2563EB] dark:text-blue-400">
                  {BRAND.fullName}
                </div>
                <div className="text-sm font-bold text-[#0F172A] dark:text-white">
                  Usman Muhammad (UMK)
                </div>
                <div className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5">
                  Direct WhatsApp: <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold hover:underline">{BRAND.whatsapp}</a>
                </div>
              </div>
            </div>

            <p className="font-medium text-[#0F172A] dark:text-slate-100">
              Hello! I'm <strong className="text-[#2563EB] dark:text-blue-400 font-bold">UMK</strong>, operating under the brand <strong className="text-[#0F172A] dark:text-white font-semibold">KADYOB DIGITAL CREATOR</strong>. I specialize in building meaningful web applications and digital interfaces that solve real-world problems.
            </p>

            <p>
              My work unites the analytical precision of software development with the intuition of creative digital design. Whether crafting an intuitive startup MVP, architecting a robust dashboard, or refining brand touchpoints, I focus on experiences that people genuinely enjoy using.
            </p>

            <p>
              I care deeply about maintainable code architecture, strict accessibility, lightning-fast performance, and delivering measurable value to businesses, clients, and end users.
            </p>

            {/* Checklist of Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-slate-900/60 border border-[#E2E8F0] dark:border-slate-800 text-sm text-[#0F172A] dark:text-slate-200"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#EFF6FF] dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Key Stats Bento Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {BRAND.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-slate-800 hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 transition-all duration-200 group flex flex-col justify-between shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-700 shadow-xs group-hover:scale-105 transition-transform">
                    {statIcons[idx]}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-mono">
                    STAT 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white font-heading tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#0F172A] dark:text-slate-200">
                    {stat.label}
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
