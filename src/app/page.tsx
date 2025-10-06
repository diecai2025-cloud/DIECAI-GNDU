"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* 🔹 Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/uit.jpg"
          alt="GNDU Building"
          fill
          priority
          className="object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-gray-100">
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          International Conference on
          <br />
          <span className="text-blue-400">
            Digital Innovation in Electronics, Communication and AI
          </span>
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-3"
        >
          IDEAI-2025
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-200 mb-1"
        >
          Organized by the{" "}
          <strong>Department of Electronics Technology</strong>
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-lg md:text-xl text-gray-200 mb-6"
        >
          <strong>Guru Nanak Dev University, Amritsar</strong>
        </p>

        {/* 🔹 Event Info Tags */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-8"
          data-aos="zoom-in"
          data-aos-delay="350"
        >
          <span className="bg-blue-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm md:text-base shadow-md border border-white/10">
            📅 13 – 15 November 2025
          </span>
          <span className="bg-gray-900/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm md:text-base shadow-md border border-white/10">
            📍 GNDU, Amritsar
          </span>
        </div>

        {/* 🔹 CTA Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="flex justify-center"
        >
          <a
            href="/about-us"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* 🔹 Animated Blur Orbs (for modern vibe) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
