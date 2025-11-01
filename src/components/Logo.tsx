"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Logo() {

  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-8 text-center px-4 sm:px-6">
      {/* Added flex-col, items-center, justify-center, mb-8, and responsive padding */}
      <div className="mb-4">
        {/* Added margin-bottom to separate logo from text */}
        <Image
          src="/logos/tej-logo.png"
          alt="DIECAI Logo"
          width={100}
          height={100}
          className="rounded-full hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
