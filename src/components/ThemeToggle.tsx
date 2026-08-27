import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      id="theme-toggle-button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg text-[#0F172A] hover:text-[#2563EB] bg-[#F1F5F9] hover:bg-slate-200 dark:text-slate-300 dark:hover:text-[#60A5FA] dark:bg-[#1E293B] dark:hover:bg-slate-700 border border-[#E2E8F0] dark:border-slate-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 cursor-pointer ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 stroke-[2.2]" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 stroke-[2.2]" />
        )}
      </motion.div>
    </button>
  );
};
