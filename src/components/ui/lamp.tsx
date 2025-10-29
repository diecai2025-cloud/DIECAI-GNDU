"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function LampDemo() {
  const { theme, systemTheme } = useTheme();

  // Select conference logo based on theme using if/else
  let logoSrc = "/logos/light-logo.png";

  if (theme === "dark") {
    logoSrc = "/logos/dark-logo.png";
  } else if (theme === "system") {
    if (systemTheme === "dark") {
      logoSrc = "/logos/dark-logo.png";
    } else {
      logoSrc = "/logos/light-logo.png";
    }
  }

  // unified gradient condition (dark & system-dark same)
  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <LampContainer>
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
        {/* Top Section: conference logo LEFT, tribute logo RIGHT */}
        <div className="w-full flex items-center justify-between px-8 md:px-16 mt-8">
          {/* Left — Conference Logo */}
          <div className="relative w-28 h-28 md:w-40 md:h-40">
            <Image
              src={logoSrc}
              alt="DIECAI Conference Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Right — Tribute Logo (hidden on mobile) */}
          <div className="hidden md:flex">
            <Logo />
          </div>
        </div>

        {/* Title */}
        <h1
          className={cn(
            "font-bold tracking-tight bg-clip-text text-transparent text-3xl md:text-5xl",
            isDarkMode
              ? "bg-gradient-to-br from-slate-100 to-cyan-200"
              : "bg-gradient-to-br from-blue-800 via-cyan-600 to-sky-400"
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

        {/* Tribute Line */}
        <div className="font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-tight">
          Tribute to the 350th Martyrdom Anniversary of Sri Guru Tegh Bahadur Ji{" "}
          <br />
          Enlightening Technology with Values
        </div>

        {/* Tribute Logo for mobile (below title) */}
        <div className="md:hidden mt-6">
          <Logo />
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
    <div
      className={cn(
        "relative flex h-[70vh] flex-col items-center justify-center overflow-hidden w-full z-0 transition-all duration-700",
        "bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 dark:from-slate-950 dark:via-slate-900 dark:to-black"
      )}
    >
      {/* Glow Layers */}
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute right-1/2 h-48 w-[26rem] bg-gradient-conic from-sky-400 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 h-48 w-[26rem] bg-gradient-conic from-transparent via-transparent to-sky-400 [--conic-position:from_290deg_at_center_top]"
        />

        {/* Halo center */}
        <div className="absolute inset-auto z-30 h-28 w-[25rem] -translate-y-[1rem] rounded-full bg-blue-300 opacity-70 blur-3xl dark:bg-cyan-400 dark:opacity-60" />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "18rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-40 h-[2px] w-[20rem] -translate-y-[0.5rem] bg-sky-400 dark:bg-cyan-500"
        />
      </div>

      {/* Title + content (moved slightly down to align glow properly) */}
      <div className="relative z-50 -translate-y-6 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
