import React from "react";
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "../data/certifications";

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications Section"
      className="py-20 lg:py-28 bg-white dark:bg-[#0B1120] border-y border-[#E2E8F0] dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Verified & Industry"
          highlight="Certifications"
          description="Continuous professional growth through specialized programs in full-stack web engineering, UI/UX interaction systems, and modern digital development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] p-6 sm:p-7 border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Issuer Badge & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#EFF6FF] dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 font-mono">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-[#0F172A] dark:text-slate-300 border border-[#E2E8F0] dark:border-slate-700">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white font-heading group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}

                {/* Topics Covered */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cert.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white dark:bg-slate-800 text-[#0F172A] dark:text-slate-300 border border-[#E2E8F0]/70 dark:border-slate-700/60"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Credential CTA */}
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-[#64748B] dark:text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Completion
                </span>

                {cert.url && cert.url !== "#" ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] dark:text-blue-400 dark:hover:text-blue-300 transition-colors group/link"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">
                    Verified ID Available
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
