"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Footer from "@/components/Footer";
import Image from "next/image";
import LampDemo from "@/components/ui/lamp";

export default function Page() {
  return (
    <>
      <Navbar />
      <LampDemo />

      <div className="min-h-screen bg-background text-foreground px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500 dark:text-blue-400">
          Our Keynote Speakers
        </h1>

        {/* ---------- SPEAKERS WITH IMAGES ONLY ---------- */}
        <BentoGrid className="max-w-6xl mx-auto gap-6 md:grid-cols-2 lg:grid-cols-4">
          {speakersWithImages.map((speaker, index) => (
            <BentoGridItem
              key={index}
              header={
                <div className="relative overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="w-full h-44 object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              }
              title={speaker.name}
              description={speaker.designation}
              className="group flex flex-col rounded-xl bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            />
          ))}
        </BentoGrid>
      </div>

      <Footer />
    </>
  );
}

/* ---------- DATA ---------- */

const speakersWithImages = [
  {
    name: "Dr. Gurtej Singh Sandhu",
    designation: "Vice-President, Micron Technologies, USA",
    image: "/keynote/one.png",
  },
  {
    name: "Prof. (Dr.) Hannes Toepfer",
    designation: "Professor, Ilmenau University of Technology, Germany",
    image: "/keynote/two.png",
  },
  {
    name: "Dr. Kamaljeet Singh",
    designation:
      "Director General, Semi-Conductor Laboratory, Ministry of Electronics & IT, Mohali",
    image: "/keynote/three.png",
  },
  {
    name: "Prof. Shantanu Bhattacharya",
    designation:
      "Director, CSIR-Central Scientific Instruments Organisation (CSIO), Chandigarh",
    image: "/keynote/four.png",
  },
  {
    name: "Prof. (Dr.) N.C. Shivaprakash",
    designation:
      "Department of Instrumentation and Applied Physics, IISc Bangalore",
    image: "/keynote/five.png",
  },
  {
    name: "Prof. Sandeep Singh Gill",
    designation:
      "Professor, Dept. of Information Management & Emerging Engineering, NITTTR Chandigarh",
    image: "/keynote/six.png",
  },
  {
    name: "Prof. (Dr.) Jyoteesh Malhotra",
    designation: "Dean Research & Professor, Dept. of ECE, NIT Delhi",
    image: "/keynote/seven.png",
  },
  {
    name: "Prof. (Dr.) Satwinder Singh",
    designation:
      "Professor, Dept. of Computer Science, Central University of Punjab, Bathinda",
    image: "/keynote/eight.png",
  },
  {
    name: "Mr. Bhupinder Singh Mann",
    designation:
      "Chief Services Officer, Teleworld Solutions,14850 Conference Center Dr Suite 250 Chantilly, Virginia, 20151, USA",
    image: "/keynote/nine.png",
  },
  {
    name: "Mr. Rajit Sikka",
    designation:
      "Regional Head Academic Alliances India North,Tata Consultancy Services Ltd. (TCS), New Delhi",
    image: "/keynote/eleven.png",
  },
  {
    name: "Mr. Sushil Khosla",
    designation:
      "Head Operations management, CSR, Tata Consultancy Services Ltd. (TCS), New Delhi",
    image: "/keynote/twelve.png",
  },
  {
    name: "Prof. (Dr.) Gaurav Verma Professor",
    designation:
      "Dr. S. S. Bhatnagar University Institute of Chemical Engineering & Technology,Panjab University, Chandigarh, India",
    image: "/keynote/thirteen.png",
  },
    {
    name: "Mr. Ranjit Singh",
    designation:
      "Area Head, Cyber Security Department, Honeywell, Melbourne, Australia",
    image: "/keynote/fourteen.png",
  },
    {
    name: "Mr. Preet Yadav",
    designation:
      " Head, India Innovation Ecosystem, NXP Semiconductors, Noida",
    image: "/keynote/fifteen.jpg",
  },
];

/* ---------- BLUR PLACEHOLDER ---------- */

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+";
