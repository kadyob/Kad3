import React from "react";
import { Code, Palette, Terminal, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { services } from "../data/services";

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "Terminal":
        return <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default:
        return <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Services Section"
      className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#020617] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Creative & Technical"
          highlight="Solutions"
          description="Transforming ambitious concepts into robust, scalable, and beautifully designed digital solutions for businesses, startups, and agencies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-2xl bg-white dark:bg-[#0F172A] p-7 sm:p-8 border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-md hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-sm font-bold text-[#64748B] dark:text-slate-500 tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white font-heading group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs uppercase font-semibold tracking-wider text-[#2563EB] dark:text-blue-400 mt-1 font-mono">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-[#64748B] dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="mt-6 pt-5 border-t border-[#E2E8F0] dark:border-slate-800 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400 font-mono">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#0F172A] dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0] dark:border-slate-800 flex flex-wrap gap-1.5">
                {service.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#F1F5F9] text-[#0F172A] dark:bg-[#1E293B] dark:text-[#94A3B8] border border-[#E2E8F0]/70 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
