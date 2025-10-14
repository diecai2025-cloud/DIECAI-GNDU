"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-2xl md:text-4xl font-bold tracking-tight text-transparent"
      >
        <div>DIECAI-2025</div>
        <div className="text-lg md:text-2xl mt-2">
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
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        // Reduced height (50vh) but keeps full glow layers
        "relative flex h-[70vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        {/* Left Glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-44 overflow-visible w-[25rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        />

        {/* Right Glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-44 w-[25rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        />

        {/* Center Halo Glow */}
        <div className="absolute inset-auto z-40 h-28 w-[22rem] -translate-y-[3rem] rounded-full bg-cyan-400 opacity-60 blur-3xl" />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] -translate-y-[4rem] bg-cyan-400 "
        />

        {/* Top fade mask */}
        <div className="absolute inset-auto z-40 h-24 w-full -translate-y-[10rem] bg-slate-950 " />
      </div>

      {/* Title Layer */}
      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
