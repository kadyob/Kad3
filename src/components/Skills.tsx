import React, { useState } from "react";
import { Layout, Code2, Wrench, Briefcase, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { skillCategories, SkillCategory } from "../data/skills";

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const getCategoryIcon = (iconName: SkillCategory["iconName"]) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Wrench":
        return <Wrench className="w-5 h-5" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const filteredCategories =
    activeCategoryId === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategoryId);

  return (
    <section
      id="skills"
      aria-label="Skills & Capabilities Section"
      className="py-20 lg:py-28 bg-white dark:bg-[#0B1120] border-y border-[#E2E8F0] dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="Technical & Professional"
          highlight="Expertise"
          description="A balanced toolkit combining modern frontend frameworks, programming fundamentals, developer workflows, and collaborative problem solving."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategoryId("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
              activeCategoryId === "all"
                ? "bg-[#2563EB] text-white shadow-xs"
                : "bg-[#F1F5F9] dark:bg-slate-800 text-[#0F172A] dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            All Disciplines
          </button>

          {skillCategories.map((category) => {
            const isSelected = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "bg-[#F1F5F9] dark:bg-slate-800 text-[#0F172A] dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {getCategoryIcon(category.iconName)}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] p-6 sm:p-8 border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-[#EFF6FF] dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white font-heading">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#64748B] dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges and Items */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3.5 rounded-xl border transition-all duration-200 ${
                          skill.highlight
                            ? "bg-white dark:bg-[#0B1120] border-[#2563EB]/40 dark:border-blue-900/60 shadow-xs"
                            : "bg-white dark:bg-[#0B1120]/60 border-[#E2E8F0] dark:border-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="inline-flex items-center text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950 dark:text-blue-400">
                              CORE
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="mt-1 text-[11px] text-[#64748B] dark:text-slate-400 leading-snug">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
