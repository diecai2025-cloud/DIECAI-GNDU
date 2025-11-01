"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo";
import Image from "next/image";
import { AnimatedTooltip } from "./animated-tooltip";
import { people } from "@/components/Tooltip";

export default function LampDemo() {
  const { theme, systemTheme } = useTheme();

  // Select logo based on theme
  let logoSrc = "/logos/light-logo.png";
  if (theme === "dark") logoSrc = "/logos/dark-logo.png";
  else if (theme === "system")
    logoSrc =
      systemTheme === "dark" ? "/logos/dark-logo.png" : "/logos/light-logo.png";

  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.6, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center text-center space-y-6 -mt-10.5"
      >
        {/* Top Row: Left Logo — Title — Right Logo */}
        <div className="relative w-full flex items-center justify-between px-8 md:px-20">
          {/* Left Logo */}
          <div className="w-24 h-24 md:w-36 md:h-36">
            <Logo />
          </div>

          {/* Center Title with glow underneath */}
          <div className=" hover:scale-105 transition-transform duration-300 relative flex flex-col items-center justify-center">
            <h1
              className={cn(
                "font-bold tracking-tight bg-clip-text text-transparent text-3xl md:text-5xl text-center",
                isDarkMode
                  ? "bg-gradient-to-br from-slate-100 to-cyan-200"
                  : "bg-gradient-to-br from-blue-800 via-cyan-600 to-sky-400"
              )}
            >
              DIECAI - 2025
            </h1>

            {/* Glowing bar under text */}
            <motion.div
              initial={{ width: "0rem", opacity: 0 }}
              whileInView={{ width: "18rem", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="absolute -bottom-3 h-[3px] rounded-full bg-sky-400 dark:bg-cyan-500 shadow-[0_0_20px_4px_rgba(56,189,248,0.6)]"
            />
          </div>

          {/* Right Logo */}
          <div className="relative w-24 h-24 md:w-36 md:h-36 hover:scale-105 transition-transform duration-300">
            <Image
              src={logoSrc}
              alt="DIECAI Conference Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <div className=" hover:scale-105 transition-transform duration-300 text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-snug">
          International Conference on{" "}
          <span className="text-blue-700 dark:text-cyan-300">
            Digital Innovation in Electronics, Communication, and AI
          </span>
        </div>

        {/* Date */}
        <div className=" hover:scale-105 transition-transform duration-300 text-base md:text-xl font-semibold text-blue-700 dark:text-cyan-300">
          18–20 December 2025
        </div>

        {/* Tribute Line */}
        <div className=" hover:scale-105 transition-transform duration-300 font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-tight">
          Tribute to the 350th Martyrdom Anniversary of Sri Guru Tegh Bahadur Ji{" "}
          <br />
          Enlightening Technology with Values.
        </div>
      </motion.div>
      <br />

      <div className="relative flex flex-wrap justify-center gap-5.5 px-2 py-4">
        <AnimatedTooltip items={people} />
      </div>
      <p className=" hover:scale-105 transition-transform duration-300 font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-tight">
        Publicity and Technical Partners
      </p>
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
        "relative flex h-[80vh] flex-col items-center justify-center overflow-hidden w-full z-0 transition-all duration-700",
        "bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 dark:from-slate-950 dark:via-slate-900 dark:to-black"
      )}
    >
      {/* Background glow (soft halo behind content) */}
      <div className="absolute inset-auto z-20 h-28 w-[25rem] rounded-full bg-blue-300 opacity-70 blur-3xl dark:bg-cyan-400 dark:opacity-60" />
      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
