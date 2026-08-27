import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Featured", "Full-Stack Web Application", "UI/UX & Interactive Design", "Cloud & Dev Tooling"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(project.category.toLowerCase());
  });

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#020617] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Recent Work &"
          highlight="Case Studies"
          description="A curated selection of projects demonstrating clean code architecture, accessible user interfaces, and impactful business problem solving."
        />

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-[#E2E8F0] dark:border-slate-800"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
