import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "max-w-2xl text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-block px-3.5 py-1 bg-[#EFF6FF] text-[#2563EB] text-[11px] font-bold tracking-widest uppercase rounded-full border border-blue-100 dark:bg-blue-950/60 dark:text-blue-400 dark:border-blue-900/50 mb-3.5 ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-white leading-tight font-heading">
        {title}{" "}
        {highlight && (
          <span className="text-[#2563EB] dark:text-blue-400">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
