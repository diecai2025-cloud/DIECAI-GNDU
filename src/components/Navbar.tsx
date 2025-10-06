import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { ModeToggle } from './toggle-theme'

import Link from 'next/link'

function Navbar() {
  return (
    <Menubar
      className="px-10 py-6 shadow-md w-full flex justify-between items-center 
                       sticky top-0 z-50 bg-background"
    >
      {/* Left Section - Menu Items */}
      <div className="flex gap-8">
        {/* Home */}
        <MenubarMenu>
          <Link href="/" className="px-4">
              Home
            </Link>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/about-us" className="px-4">
              About Program
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Committee / Keynote Speakers */}
        <MenubarMenu>
          <MenubarTrigger className="px-4">Committee</MenubarTrigger>
          <MenubarContent className="mt-2">
            <MenubarItem>
              <Link href="/organizing-committee" className="px-4">
              Organizing Committee
            </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/Keynote-speakers" className="px-4">
              Keynote speakers
            </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Call for Papers */}
        <MenubarMenu>
          <MenubarTrigger className="px-4">Call for Papers</MenubarTrigger>
        </MenubarMenu>

        {/* Guide for Authors */}
        <MenubarMenu>
          <MenubarTrigger className="px-4">Guide for Authors</MenubarTrigger>
        </MenubarMenu>

        {/* Famous Locations in Amritsar */}
        <MenubarMenu>
          <MenubarTrigger className="px-4">Famous Locations</MenubarTrigger>
        </MenubarMenu>

      </div>

      {/* Right Section - Theme Toggle */}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </Menubar>
  );
}

export default Navbar
