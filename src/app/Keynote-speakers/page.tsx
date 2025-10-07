"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Footer from "@/components/Footer"
import Image from "next/image";
import LampDemo from "@/components/ui/lamp";


export default function Page() {
  return (
    <>
    <Navbar />
    <LampDemo />
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white p-8 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">
        Our Keynote Speakers
      </h1>

      <BentoGrid className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <BentoGridItem
          title="Innovation at GNDU"
          description="Showcasing breakthroughs in electronics, communication, and AI research."
          header={
            <Image
              src="/#"
              alt="Innovation"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
              width={100}
              height={100}
            />
          }
          className="bg-gradient-to-br from-blue-600/30 to-indigo-700/20 border border-white/10 rounded-lg overflow-hidden"
        />

        <BentoGridItem
          title="Collaboration"
          description="Global experts, researchers, and innovators sharing ideas and inspiration."
          header={
            <Image
              src="/#"
              alt="Collaboration"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
              width={100}
              height={100}
            />
          }
          className="bg-gradient-to-br from-green-600/30 to-emerald-500/20 border border-white/10 rounded-lg overflow-hidden"
        />

        <BentoGridItem
          title="Sustainability"
          description="Aligning innovation with United Nations"
          header={
            <Image
              src="/#"
              alt="Sustainability"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
              width={100}
              height={100}
            />
          }
          className="bg-gradient-to-br from-yellow-600/30 to-orange-500/20 border border-white/10 rounded-lg overflow-hidden"
        />

        <BentoGridItem
          title="IDEAI 2025 Conference"
          description="Join us from 13-15 November 2025 at GNDU, Amritsar."
          header={
            <Image
              src="/#"
              alt="Conference"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
              width={100}
              height={100}
            />
          }
          className="bg-gradient-to-br from-red-600/30 to-orange-600/20 border border-white/10 rounded-lg overflow-hidden"
        />
      </BentoGrid>
    </div>
    <Footer />
    </>
  );
}
