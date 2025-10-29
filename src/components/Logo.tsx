"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Logo() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-8 text-center px-4 sm:px-6">
      {/* Added flex-col, items-center, justify-center, mb-8, and responsive padding */}
      <div className="mb-4">
        {/* Added margin-bottom to separate logo from text */}
        <Image
          src="/logos/teg.jpg"
          alt="DIECAI Logo"
          width={100}
          height={100}
          className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300" // Increased shadow to 'lg'
        />
      </div>

      <div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`leading-tight 
            ${
              theme === "dark"
                ? "text-cyan-300"
                : " text-blue-700"
            }
            transition-colors duration-100`}
        >
          {/* Tribute to the 350th Martyrdom Anniversary of Sri Guru Tegh Bahadur Ji
          <br className="sm:hidden" />
          — Enlightening Technology with Values */}
        </motion.h3>
      </div>
    </div>
  );
}
