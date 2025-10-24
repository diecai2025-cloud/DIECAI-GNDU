"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LocationsPage() {
  const places = [
    {
      title: "Golden Temple (Harmandir Sahib)",
      description:
        "The most sacred Sikh shrine, famous for its golden dome and peaceful sarovar.",
      image: "/locations/golden-temple.jpg",
    },
    {
      title: "Jallianwala Bagh",
      description:
        "A national memorial that commemorates the 1919 massacre a turning point in India's freedom struggle.",
      image: "/locations/jallian-wala-bagh.jpg",
    },
    {
      title: "Wagah Border",
      description:
        "Known for its energetic Beating Retreat ceremony every evening at the Indo–Pak border.",
      image: "/locations/wagah-border.jpg",
    },
    {
      title: "Gobindgarh Fort",
      description:
        "Historic fort by Maharaja Ranjit Singh now a vibrant cultural and entertainment hub.",
      image: "/locations/gobindgarh.jpg",
    },
    {
      title: "Ram Tirath Temple",
      description:
        "Ancient temple dedicated to Goddess Sheetla Mata, believed to be the birthplace of Luv–Kush.",
      image: "/locations/ram-tirath.jpg",
    },
    {
      title: "Durgiana Temple",
      description:
        "Hindu temple resembling Golden Temple’s architecture, dedicated to Goddess Durga.",
      image: "/locations/durgiana-mandir.webp",
    },
    {
      title: "Punjab state memorial",
      description:
        "Showcasing their sacrifices and heroic deeds",
      image: "/locations/punjab-state-memorial.webp",
    },
    {
      title: "Hall Bazaar",
      description:
        "Bustling market for phulkari embroidery, Punjabi juttis, and local spices.",
      image: "/locations/hall-bazar.jpg",
    },
    {
      title: "Sadda Pind",
      description:
        "A living Punjabi village experience folk music, crafts, and traditional food.",
      image: "/locations/sadda-pind.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 py-16 px-4 sm:px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            Famous Places in Amritsar
          </span>
        </h1>

        <BentoGrid className="max-w-7xl mx-auto gap-6">
          {places.map((place, i) => (
            <BentoGridItem
              key={i}
              title={
                <span className="block text-lg md:text-xl font-semibold text-blue-300">
                  {place.title}
                </span>
              }
              description={
                <p className="text-sm md:text-base text-gray-300 mt-2 leading-relaxed">
                  {place.description}
                </p>
              }
              header={
                <div className="relative w-full h-52 md:h-64 overflow-hidden rounded-xl group">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all group-hover:from-black/40" />
                </div>
              }
              className="bg-white/5 dark:bg-black/30 border border-white/10 hover:border-blue-500/50 
                         rounded-2xl backdrop-blur-md transition-all duration-300 
                         hover:bg-white/10 hover:scale-[1.02] 
                         hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] overflow-hidden"
            />
          ))}
        </BentoGrid>
      </main>
      <Footer />
    </>
  );
}
