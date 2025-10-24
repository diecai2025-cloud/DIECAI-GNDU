"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Department() {
  return (
    <section className="bg-gray-50 dark:bg-black py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Carousel */}
        <div className="relative w-full">
          <Carousel
            opts={{ align: "start", loop: true }}
            orientation="horizontal"
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/gndu/campus.webp"
                  alt="GNDU Campus"
                  loading="lazy"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/uit.jpg"
                  alt="Electronics Lab"
                  loading="lazy"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/gndu/main-gate.webp"
                  alt="GNDU Main Gate"
                  loading="lazy"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md" />
          </Carousel>
        </div>

        {/* Right Side - Text Section */}
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
              Guru Nanak Dev University, Amritsar
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg sm:text-xl italic">
              Established in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                1969
              </span>{" "}
              to commemorate the{" "}
              <span className="font-semibold">
                500th birth anniversary of Guru Nanak Dev Ji
              </span>
              , GNDU stands as a beacon of education, research, and innovation.
              Rooted in the ideals of equality and service, the university has
              achieved national and international recognition for its academic
              excellence and community impact.
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Department of Electronics Technology
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg sm:text-xl italic">
              The department excels in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Electronics, Communication, Embedded Systems, IoT, and AI
              </span>
              . Equipped with modern research facilities and guided by
              experienced faculty, it nurtures students into innovators and
              researchers ready to shape the technological future through
              interdisciplinary collaboration and ethical innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
