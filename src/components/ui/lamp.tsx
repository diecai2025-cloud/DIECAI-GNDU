"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function LampDemo() {
  const { theme } = useTheme();

  let logoSrc;
  if (theme === "dark") {
    logoSrc = "/logos/dark-logo.png"; // dark mode logo
  } else {
    logoSrc = "/logos/light-logo.png"; // light mode logo
  }

  return (
    <LampContainer>
      {/* Conference Header */}
      <motion.div
        initial={{ opacity: 0.6, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center text-center space-y-4"
      >
        {/* Logo changes dynamically */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src={logoSrc}
            alt="DIECAI Logo"
            fill
            className="object-contain drop-shadow-lg transition-all duration-500"
            priority
          />
        </div>

        {/* Title */}
        <h1
          className={cn(
            "font-bold tracking-tight bg-clip-text text-transparent",
            theme === "dark"
              ? "bg-gradient-to-br from-slate-100 to-cyan-200 text-3xl md:text-5xl"
              : "bg-gradient-to-br from-blue-800 via-cyan-600 to-sky-400 text-3xl md:text-5xl"
          )}
        >
          DIECAI 2025
        </h1>

        {/* Subtitle */}
        <div className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-snug">
          International Conference on{" "}
          <span className="text-blue-700 dark:text-cyan-300">
            Digital Innovation in Electronics, Communication, and AI
          </span>
        </div>

        {/* Date */}
        <div className="text-base md:text-xl font-semibold text-blue-700 dark:text-cyan-300 mt-2">
          18–20 December 2025
        </div>
      </motion.div>
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
          "relative flex h-[70vh] flex-col items-center justify-center overflow-hidden w-full z-0 transition-all duration-700",
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
        <div className="relative z-50 -translate-y-16 flex flex-col items-center px-5">
          {children}
        </div>
      </div>

      {/* Optional footer logo */}
      <Logo />
    </>
  );
};
