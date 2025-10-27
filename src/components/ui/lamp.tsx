"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo"; 

export default function LampDemo() {
  const { theme } = useTheme();

  return (
    <LampContainer>
      {/* ✅ Logo placed above the title */}

      <motion.h1
        initial={{ opacity: 0.6, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "mt-4 py-4 text-center font-bold tracking-tight bg-clip-text text-transparent",
          theme === "dark"
            ? "bg-gradient-to-br from-slate-100 to-cyan-200 text-3xl md:text-5xl"
            : "bg-gradient-to-br from-blue-800 via-cyan-600 to-sky-400 text-3xl md:text-5xl"
        )}
      >
        <div>DIECAI-2025</div>
        <div className="text-lg md:text-2xl mt-3">
          International Conference on Digital Innovation in Electronics,
          Communication and AI
        </div>
        <div className="text-base md:text-xl mt-2 text-blue-700 dark:text-cyan-300">
          18–20 December 2025
        </div>
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
    <>
   
    <div
      className={cn(
        "relative flex h-[60vh] flex-col items-center justify-center overflow-hidden w-full z-0 transition-all duration-700",
        "bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 dark:from-slate-950 dark:via-slate-900 dark:to-black"
      )}
    >
      {/* Glow Layers */}
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Left Glow */}
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute right-1/2 h-48 w-[26rem] bg-gradient-conic from-sky-400 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />
        {/* Right Glow */}
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 h-48 w-[26rem] bg-gradient-conic from-transparent via-transparent to-sky-400 [--conic-position:from_290deg_at_center_top]"
        />

        {/* Halo center */}
        <div className="absolute inset-auto z-30 h-28 w-[20rem] -translate-y-[2rem] rounded-full bg-blue-300 opacity-70 blur-3xl dark:bg-cyan-400 dark:opacity-60" />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "18rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-40 h-[2px] w-[18rem] -translate-y-[3rem] bg-sky-400 dark:bg-cyan-500"
        />
      </div>

      {/* Title Layer */}
      <div className="relative z-50 -translate-y-20 flex flex-col items-center px-5">
        {children}
      </div>
       </div>
                <Logo />
                 </>
  );
};
