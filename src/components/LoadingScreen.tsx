import React from "react";
import { motion } from "motion/react";

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/30">
          <span className="font-heading font-black">UMK</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
            KADYOB
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
            DIGITAL CREATOR
          </span>
        </div>
        <div className="w-24 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-blue-600"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};
