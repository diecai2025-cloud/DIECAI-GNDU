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
              { href: "/about-us", label: "About Program" },
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

            {/* Other Links */}
            <Link
              href="/guide-for-authors"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Guide for Authors
            </Link>
            <Link
              href="/Registrations"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Registrations
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
              Famous Locations
            </Link>
            <Link
              href="/Contact-us"
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact Us
            </Link>

            {/* Drawer Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Submit Papers
            </button>
          </div>
        </div>

        {/* Right: Theme Toggle & Mobile Menu Button */}
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
            About Program
          </Link>
          <details className="w-full">
            <summary className="font-semibold text-gray-800 dark:text-gray-300 cursor-pointer">
              Committee
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-1">
              <Link href="/organizing-committee" className="hover:text-blue-600 dark:hover:text-blue-400">
                Organizing Committee
              </Link>
              <Link href="/Keynote-speakers" className="hover:text-blue-600 dark:hover:text-blue-400">
                Keynote Speakers
              </Link>
              <Link href="/international-committee" className="hover:text-blue-600 dark:hover:text-blue-400">
                International Advisory Committee
              </Link>
              <Link href="/national-committee" className="hover:text-blue-600 dark:hover:text-blue-400">
                National Advisory Committee
              </Link>
            </div>
          </details>

          <button
            onClick={() => setDrawerOpen(true)}
            className="hover:text-blue-600 dark:hover:text-blue-400 text-left w-full"
          >
            Submit Papers
          </button>
          <Link href="/guide-for-authors" className="hover:text-blue-600 dark:hover:text-blue-400">
            Guide for Authors
          </Link>
          <Link href="/Registrations" className="hover:text-blue-600 dark:hover:text-blue-400">
            Registrations
          </Link>
          <Link href="/Important-dates" className="hover:text-blue-600 dark:hover:text-blue-400">
            Important Dates
          </Link>
          <Link href="/Locations" className="hover:text-blue-600 dark:hover:text-blue-400">
            Famous Locations
          </Link>
          <Link href="/Contact-us" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact Us
          </Link>
        </div>
      )}

      {/* 🧾 Drawer for Submit Papers */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Submit Your Paper</DrawerTitle>
            <DrawerDescription>
              ~ Click below to go to the submission portal
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex justify-center gap-4">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button asChild>
                <Link href="/submit-papers">Submit</Link>
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
