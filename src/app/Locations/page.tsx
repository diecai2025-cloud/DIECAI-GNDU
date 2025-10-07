"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const places = [
    {
      title: "Golden Temple (Harmandir Sahib)",
      description:
        "The most sacred Sikh shrine, famous for its golden dome and peaceful sarovar.",
      image:
        "/#",
    },
    {
      title: "Jallianwala Bagh",
      description:
        "A national memorial that commemorates the 1919 massacre — a turning point in India's freedom struggle.",
      image:
        "/#",
    },
    {
      title: "Wagah Border",
      description:
        "Known for its energetic Beating Retreat ceremony every evening at the Indo–Pak border.",
      image:
        "/#",
    },
    {
      title: "Gobindgarh Fort",
      description:
        "Historic fort by Maharaja Ranjit Singh — now a vibrant cultural and entertainment hub.",
      image:
        "/#",
    },
    {
      title: "Sitla Mandir (Luv–Kush Birthplace)",
      description:
        "Ancient temple dedicated to Goddess Sheetla Mata, believed to be the birthplace of Luv–Kush.",
      image:
        "/#",
    },
    {
      title: "Durgiana Temple",
      description:
        "Hindu temple resembling Golden Temple’s architecture, dedicated to Goddess Durga.",
      image:
        "/#",
    },
    {
      title: "Kesar Da Dhaba",
      description:
        "A 100-year-old dhaba serving rich Punjabi thalis, dal makhani, and ghee-loaded parathas.",
      image:
        "/#",
    },
    {
      title: "Bharawan Da Dhaba",
      description:
        "One of Amritsar’s oldest vegetarian dhabas known for chole, parathas, and lassi.",
      image:
        "/#",
    },
    {
      title: "Hall Bazaar",
      description:
        "Bustling market for phulkari embroidery, Punjabi juttis, and local spices.",
      image:
        "/#",
    },
    {
      title: "Sadda Pind",
      description:
        "A living Punjabi village experience — folk music, crafts, and traditional food.",
      image:
        "/#",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-12 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-12">
        Famous Places in Amritsar
      </h1>

      <BentoGrid className="max-w-7xl mx-auto">
        {places.map((place, i) => (
          <BentoGridItem
            key={i}
            title={
              <span className="block text-lg md:text-xl font-semibold text-blue-300">
                {place.title}
              </span>
            }
            description={
              <p className="text-sm md:text-base text-gray-300 line-clamp-3">
                {place.description}
              </p>
            }
            header={
              <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-xl">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all" />
              </div>
            }
            className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg overflow-hidden"
          />
        ))}
      </BentoGrid>
    </div>
    <>
    <Footer />
    </>
    </>
  );
}
