import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-blue-400">Guru Nanak Dev University</h1>
            <p className="text-sm text-gray-400 mt-1">
              Department of Electronics and Technology
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:text-blue-600 dark:hover:text-blue-400">
               &nbsp;&nbsp; 𝕏 &nbsp;&nbsp;
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:text-blue-600 dark:hover:text-blue-400">
                LinkedIn
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:text-blue-600 dark:hover:text-blue-400">
                GNDU
              </Button>
            </a>
          </div>
        </div>

        {/* Separator line */}
        <Separator className="my-6 border-gray-700" />

        {/* Bottom section */}
        <p className="text-center text-sm text-gray-500">
          © 2025 Guru Nanak Dev University. All rights reserved.
          <br />
          This Website is made By Rohaz Bhalla & Hitaishi Lohtia
        </p>
      </div>
    </footer>
  );
}
