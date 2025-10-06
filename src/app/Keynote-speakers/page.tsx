"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Footer from "@/components/Footer"


export default function Page() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white p-8 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">
        Our Keynote Speakers
      </h1>

      <BentoGrid className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <BentoGridItem
          title="Innovation at GNDU"
          description="Showcasing breakthroughs in electronics, communication, and AI research."
          header={
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Innovation"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
            />
          }
          className="bg-gradient-to-br from-blue-600/30 to-indigo-700/20 border border-white/10 rounded-lg overflow-hidden"
        />

        <BentoGridItem
          title="Collaboration"
          description="Global experts, researchers, and innovators sharing ideas and inspiration."
          header={
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Collaboration"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
            />
          }
          className="bg-gradient-to-br from-green-600/30 to-emerald-500/20 border border-white/10 rounded-lg overflow-hidden"
        />

        <BentoGridItem
          title="Sustainability"
          description="Aligning innovation with United Nations"
          header={
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
              alt="Sustainability"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
            />
          }
          className="bg-gradient-to-br from-yellow-600/30 to-orange-500/20 border border-white/10 rounded-lg overflow-hidden"
        />

        <BentoGridItem
          title="IDEAI 2025 Conference"
          description="Join us from 13-15 November 2025 at GNDU, Amritsar."
          header={
            <img
              src="https://images.unsplash.com/photo-1581093588401-22e8d7c0b3a5?auto=format&fit=crop&w=800&q=80"
              alt="Conference"
              className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-t-lg"
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
