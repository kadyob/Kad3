import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "../data/experience";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Experience Timeline Section"
      className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#020617] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Journey"
          title="Experience &"
          highlight="Milestones"
          description="A track record of shipping responsive web software, architecting user interfaces, and collaborating on high-stakes digital initiatives."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical central timeline spine */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-[#E2E8F0] dark:bg-slate-800 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#E2E8F0] dark:bg-slate-800 md:hidden" />

          <div className="space-y-12">
            {experiences.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-10 w-8 h-8 rounded-full bg-[#2563EB] border-4 border-[#F8FAFC] dark:border-[#020617] text-white flex items-center justify-center shadow-xs">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Spacer for alternating desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-200">
                      {/* Period Badge & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950/80 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">
                          {item.type}
                        </span>
                      </div>

                      {/* Position & Organization */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white font-heading">
                        {item.position}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-sm font-medium text-[#2563EB] dark:text-blue-400">
                        <span>{item.organization}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#64748B] dark:text-slate-400 text-xs font-mono">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-3.5 text-[#64748B] dark:text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mt-4 space-y-1.5">
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-start gap-2 text-xs text-[#0F172A] dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mt-5 pt-4 border-t border-[#E2E8F0] dark:border-slate-800 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#F1F5F9] text-[#0F172A] dark:bg-[#1E293B] dark:text-[#94A3B8] border border-[#E2E8F0]/70 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
