import React, { useState } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-md hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail with Mockup Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#F1F5F9] dark:bg-slate-800 border-b border-[#E2E8F0] dark:border-slate-800">
          {!imageError ? (
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 dark:from-slate-800 dark:to-slate-900 text-slate-400 p-6 text-center">
              <Layers className="w-10 h-10 mb-2 text-[#2563EB]" />
              <span className="text-xs font-semibold text-[#0F172A] dark:text-slate-300">
                {project.title}
              </span>
            </div>
          )}

          {/* Category Tag Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wide bg-white/95 dark:bg-[#0F172A]/95 text-[#0F172A] dark:text-slate-200 backdrop-blur-md shadow-xs border border-[#E2E8F0] dark:border-slate-700">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white font-heading group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-[#64748B] dark:text-slate-300 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#F1F5F9] text-[#0F172A] dark:bg-[#1E293B] dark:text-[#94A3B8] border border-[#E2E8F0]/70 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons (GitHub & Live Demo) */}
      <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-[#E2E8F0] dark:border-slate-800 mt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#0F172A] dark:text-slate-200 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-[#E2E8F0] dark:border-slate-700 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub ↗</span>
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Live Demo of ${project.title}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-xs transition-all duration-150"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
};
