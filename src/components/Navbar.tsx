"use client";

import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./toggle-theme";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Menubar
        className="
        mt-0.5 sticky top-0 z-50 w-full flex justify-between items-center
        px-4 sm:px-6 md:px-10 py-4 md:py-6
        bg-background/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800
        transition-all duration-300
      "
      >
        {/* Left: Logo and Desktop Menu */}
        <div className="flex items-center gap-4 md:gap-7">
          {/* GNDU Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/gndu/gndu-logo.png"
              alt="GNDU Logo"
              width={35}
              height={35}
              className="rounded-md hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "Program" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Committee Dropdown */}
            <MenubarMenu>
              <MenubarTrigger className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Committee
              </MenubarTrigger>
              <MenubarContent className="mt-2">
                <MenubarItem>
                  <Link href="/organizing-committee">Organizing Committee</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/Keynote-speakers">Keynote Speakers</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/international-committee">
                    International Advisory Committee
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/national-committee">
                    National Advisory Committee
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* ✅ Call for Papers Button (with Drawer) */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Call for Papers
            </button>

            {/* Guide for Authors Dropdown */}
            <MenubarMenu>
              <MenubarTrigger className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Guide for Authors
              </MenubarTrigger>
              <MenubarContent className="mt-2">
                <MenubarItem>
                  <Link href="/guide-for-authors#annexure-a">
                    Program Schedule & Theme
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/guide-for-authors#brochure-download">
                    Author Guidelines
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/guide-for-authors#conference-tracks">
                    Conference Tracks
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/guide-for-authors#link">Submit Paper</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* Other Links */}
            <Link
              href="/Registration"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Registration
            </Link>
            <Link
              href="/Important-dates"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Important Dates
            </Link>
            <Link
              href="/Locations"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Travel
            </Link>
            <Link
              href="/Contact-us"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          <ModeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl md:hidden hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </Menubar>

      {/* 📱 Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-x-0 top-[70px] z-40 md:hidden
          bg-background/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700
          flex flex-col items-start gap-3 px-6 py-5 shadow-lg animate-in slide-in-from-top-2"
        >
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-blue-600 dark:hover:text-blue-400">
            Program
          </Link>

          <details className="w-full">
            <summary className="font-semibold text-gray-800 dark:text-gray-300 cursor-pointer">
              Committee
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-1">
              <Link
                href="/organizing-committee"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Organizing Committee
              </Link>
              <Link
                href="/Keynote-speakers"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Keynote Speakers
              </Link>
              <Link
                href="/international-committee"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                International Advisory Committee
              </Link>
              <Link
                href="/national-committee"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                National Advisory Committee
              </Link>
            </div>
          </details>

          <button
            onClick={() => setDrawerOpen(true)}
            className="hover:text-blue-600 dark:hover:text-blue-400 text-left w-full"
          >
            Call for Papers
          </button>

          <details className="w-full">
            <summary className="font-semibold text-gray-800 dark:text-gray-300 cursor-pointer">
              Guide for Authors
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-1">
              <Link
                href="/guide-for-authors#annexure-a"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Program Schedule & Theme
              </Link>
              <Link
                href="/guide-for-authors#brochure-download"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Author Guidelines
              </Link>
              <Link
                href="/guide-for-authors#conference-tracks"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Conference Tracks
              </Link>
              <Link
                href="/guide-for-authors#link"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Submit Paper
              </Link>
            </div>
          </details>

          <Link href="/Registration" className="hover:text-blue-600 dark:hover:text-blue-400">
            Registration
          </Link>
          <Link href="/Important-dates" className="hover:text-blue-600 dark:hover:text-blue-400">
            Important Dates
          </Link>
          <Link href="/Locations" className="hover:text-blue-600 dark:hover:text-blue-400">
            Travel
          </Link>
          <Link href="/Contact-us" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact Us
          </Link>
        </div>
      )}

      {/* 🧾 Drawer for Call for Papers */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Submit Your Paper</DrawerTitle>
            <DrawerTitle>
              ALL ACCEPTED PAPERS IN DIECAI-2025 WILL BE PUBLISHED AS BOOK CHAPTERS IN AN EDITED VOLUME (AVAILABLE ONLINE) WITH POTENTIAL INDEXING IN SCOPUS.
            </DrawerTitle>
            <DrawerDescription className="text-blue-400 italic">
              <a href="/guide-for-authors#conference-tracks">
                → Click to learn more about Conference tracks
              </a>
            </DrawerDescription>
            <DrawerDescription className="text-blue-400 italic">
              ↓ Click below to go to the submission portal
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex justify-center gap-4">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button asChild>
                <Link href="/guide-for-authors#link">Submit</Link>
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
