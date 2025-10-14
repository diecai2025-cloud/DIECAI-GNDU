"use client";

import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* 🔹 Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side — University Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
              Guru Nanak Dev University
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Department of Electronics Technology
            </p>
          </div>

          {/* Right side — Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href="https://online.gndu.ac.in/department-of-electronics-technology.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors duration-200"
              >
                Electronics Technology
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106745389&keywords=department%20of%20electronics%20technology%2C%20gndu%2C%20amritsar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors duration-200"
              >
                LinkedIn
              </Button>
            </a>

            <a
              href="https://online.gndu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors duration-200"
              >
                GNDU Website
              </Button>
            </a>
          </div>
        </div>

        {/* 🔸 Separator */}
        <Separator className="my-8 border-t border-gray-300 dark:border-gray-800" />

        {/* 🔹 Bottom Section */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            © {new Date().getFullYear()} Guru Nanak Dev University, Amritsar —{" "}
            All Rights Reserved.
          </p>

          <p className="mt-3 flex flex-col sm:flex-row justify-center flex-wrap gap-1 sm:gap-2 text-gray-600 dark:text-gray-400">
            <span>Website engineered by</span>
            <Link
              href="https://www.linkedin.com/in/rohaz-bhalla"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Rohaz Bhalla (ECM)
            </Link>
            <span>&</span>
            <Link
              href="https://www.linkedin.com/in/hitaishi-lohtia-99a219256"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Hitaishi Lohtia (ECE)
            </Link>
          </p>

          <p className="text-gray-500 dark:text-gray-500 text-xs italic mt-1">
            Click the names to visit our LinkedIn profiles
          </p>
        </div>
      </div>
    </footer>
  );
}
