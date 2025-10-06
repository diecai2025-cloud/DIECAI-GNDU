import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { ModeToggle } from './toggle-theme';
import Link from 'next/link';
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Menubar className="px-4 md:px-10 py-4 shadow-md w-full flex justify-between items-center sticky top-0 z-50 bg-background">
      
      {/* Left Section - Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {/* Home */}
        <MenubarMenu>
          <Link href="/" className="px-4">Home</Link>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/about-us" className="px-4">About Program</Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Committee / Keynote Speakers */}
        <MenubarMenu>
          <MenubarTrigger className="px-4">Committee</MenubarTrigger>
          <MenubarContent className="mt-2">
            <MenubarItem>
              <Link href="/organizing-committee" className="px-4">Organizing Committee</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/Keynote-speakers" className="px-4">Keynote Speakers</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Other Menu Items */}
        <MenubarMenu><MenubarTrigger className="px-4">Call for Papers</MenubarTrigger></MenubarMenu>
        <MenubarMenu><MenubarTrigger className="px-4">Guide for Authors</MenubarTrigger></MenubarMenu>
        <MenubarMenu><MenubarTrigger className="px-4">Famous Locations</MenubarTrigger></MenubarMenu>
      </div>

      {/* Right Section - Theme Toggle */}
      <div className="hidden md:block">
        <ModeToggle />
      </div>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center">
        <ModeToggle />
        <button onClick={() => setMobileOpen(!mobileOpen)} className="ml-2 text-2xl">
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background flex flex-col gap-2 px-4 py-4 md:hidden">
          <Link href="/" className="py-2">Home</Link>
          <Link href="/about-us" className="py-2">About Program</Link>
          <div>
            <span className="py-2 block font-semibold">Committee</span>
            <div className="pl-4 flex flex-col gap-1">
              <Link href="/organizing-committee" className="py-1">Organizing Committee</Link>
              <Link href="/Keynote-speakers" className="py-1">Keynote Speakers</Link>
            </div>
          </div>
          <Link href="#" className="py-2">Call for Papers</Link>
          <Link href="#" className="py-2">Guide for Authors</Link>
          <Link href="#" className="py-2">Famous Locations</Link>
        </div>
      )}
    </Menubar>
  );
}

export default Navbar;
