"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

export default function AboutPageText() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 
                 bg-gray-50 dark:bg-black 
                 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 
                     text-blue-700 dark:text-blue-400"
          data-aos="fade-up"
        >
          About DIECAI-2025
        </h2>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed">
          <p data-aos="fade-up" data-aos-delay="100">
            The{" "}
            <strong>
              International Conference on Digital Innovation in Electronics,
              Communication and Artificial Intelligence (DIECAI-2025)
            </strong>{" "}
            is proudly organized by the{" "}
            <strong>
              Department of Electronics Technology, Guru Nanak Dev University,
              Amritsar
            </strong>
            , from <strong>18-20 December 2025</strong>. This three-day
            international event will serve as a global platform for{" "}
            <strong>
              academicians, researchers, scientists, industry professionals, and
              students
            </strong>{" "}
            to engage in meaningful discussions on the latest advancements,
            trends, and challenges in{" "}
            <strong>
              electronics, communication, computing, and artificial intelligence
            </strong>
            .
          </p>

          <p data-aos="fade-right" data-aos-delay="200">
            The conference is humbly dedicated to the{" "}
            <strong>supreme sacrifice of Guru Tegh Bahadur Ji</strong>, whose
            life and teachings continue to inspire values of justice,
            compassion, and human dignity. Guided by these principles,
            DIECAI-2025 emphasizes that innovation must be{" "}
            <strong>ethical, inclusive, and sustainable</strong>, ensuring that
            technological progress benefits humanity as a whole. The conference
            aligns its vision with the{" "}
            <strong>United Nations Sustainable Development Goals (SDGs)</strong>
            , linking research in electronics, communication, and AI with global
            priorities such as climate action, reduced inequalities, sustainable
            cities, and responsible innovation.
          </p>

          <p data-aos="fade-left" data-aos-delay="300">
            DIECAI-2025 will feature an exciting program including{" "}
            <strong>
              keynote lectures by distinguished international and national
              experts, plenary talks, technical paper presentations, and
              interactive sessions
            </strong>
            . The conference will cover seven major tracks, ranging from{" "}
            <strong>
              Smart Embedded Systems & IoT, Advanced Materials for Electronics,
              Next-Generation Wireless Connectivity, Optical & Space
              Communication, AI-Powered Electronics, Next-Generation Computing,
            </strong>{" "}
            to <strong>AI and Data Science Applications</strong>. Each track
            highlights cutting-edge research and real-world applications,
            fostering collaborations and future innovations.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            Beyond the technical sessions, DIECAI-2025 aims to promote{" "}
            <strong>global cooperation and interdisciplinary research</strong>.
            By bringing together experts from diverse domains, the conference
            will strengthen academic-industry partnerships and create
            opportunities for young researchers to showcase their work on an
            international stage. With more than{" "}
            <strong>150 expected participants</strong> from across the world,
            DIECAI-2025 will be a vibrant hub of innovation and networking.
          </p>

          <p data-aos="zoom-in" data-aos-delay="500">
            With its unique blend of{" "}
            <strong>
              cultural inspiration, ethical grounding, and technological vision
            </strong>
            , DIECAI-2025 will be more than just a conference—it will shape a
            future where{" "}
            <strong>
              digital innovation uplifts society, protects the environment, and
              advances humanity responsibly
            </strong>
            .
          </p>
          <hr />

          <div
  data-aos="zoom-in"
  data-aos-delay="600"
  className="mt-8 text-center md:text-left px-4"
>
  <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-300 dark:to-sky-400">
    Special Attractions
  </h2>

  <ul className="text-black dark:text-white space-y-2 text-base md:text-lg leading-relaxed">
    <li>⭐ Expert Talks by Eminent Speakers</li>
    <li>📜 Technical Paper & Poster Presentation</li>
    <li>🏆 Best Paper Awards</li>
    <li>💡 Technical Exhibitions</li>
    <li>🌆 Explore Amritsar’s Cultural & Spiritual Landmarks</li>
  </ul>

  <hr className="mt-6 border-t border-blue-300 dark:border-cyan-700 w-2/3 mx-auto" />
</div>


          <a
            href="/guide-for-authors/#annexure-a"
            className="text-blue-400"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            ~ Learn more about Program schedule and theme.
          </a>
          <br />
          <a
            href="/guide-for-authors/#conference-tracks"
            className="text-blue-400"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            ~ Learn more about Conference Tracks and Specific SDG Alignment.
          </a>
        </div>
        <br />
        <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 px-4 text-center md:text-left">
          <Image
            src={"/logos/study-logo.jpg"}
            width={120}
            height={120}
            loading="lazy"
            alt="RUSA logo"
            className="rounded-md shadow-md"
          />
          <p
            className="text-sm md:text-base max-w-xl leading-relaxed text-blue-800 dark:text-cyan-200"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            EVENT SUPPORTED BY{" "}
            <span className="font-semibold">
              Centre for Sustainable Habitat, Guru Nanak Dev University,
              Amritsar
            </span>{" "}
            under{" "}
            <span className="font-semibold">
              Rashtriya Uchchatar Siksha Abhiyan (RUSA) 2.0
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
