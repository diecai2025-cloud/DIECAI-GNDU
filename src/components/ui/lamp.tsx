"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function LampDemo() {
  const { theme } = useTheme();

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.6, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "mt-6 py-4 text-center font-bold tracking-tight bg-clip-text text-transparent",
          theme === "dark"
            ? "bg-gradient-to-br from-slate-100 to-cyan-200 text-3xl md:text-5xl"
            : "bg-gradient-to-br from-gray-800 to-cyan-600 text-3xl md:text-5xl"
        )}
      >
        <div>DIECAI-2025</div>
        <div className="text-lg md:text-2xl mt-3">
          International Conference on Digital Innovation in Electronics,
          Communication and AI
        </div>
        <div className="text-base md:text-xl mt-2">13–15 November 2025</div>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[60vh] flex-col items-center justify-center overflow-hidden w-full z-0 transition-all duration-700",
        // Background adjusts by theme
        "bg-gradient-to-b from-gray-100 via-white to-sky-100 dark:from-slate-950 dark:via-slate-900 dark:to-black"
      )}
    >
      {/* Glow Layers */}
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Left Glow */}
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute right-1/2 h-48 w-[26rem] bg-gradient-conic from-cyan-400 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />
        {/* Right Glow */}
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 h-48 w-[26rem] bg-gradient-conic from-transparent via-transparent to-cyan-400 [--conic-position:from_290deg_at_center_top]"
        />

        {/* Halo center */}
        <div className="absolute inset-auto z-30 h-28 w-[20rem] -translate-y-[2rem] rounded-full bg-cyan-300 opacity-70 blur-3xl dark:bg-cyan-400 dark:opacity-60" />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "18rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-40 h-[2px] w-[18rem] -translate-y-[3rem] bg-cyan-400 dark:bg-cyan-500"
        />
      </div>

      {/* Title Layer */}
      <div className="relative z-50 -translate-y-20 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
