"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LampDemo from "@/components/ui/lamp";

export default function CommitteesPage() {
  const committees = [
    {
      title: "Chief Patron",
      members: [
        {
          name: "Prof. (Dr.) Karamjeet Singh",
          role: "Vice Chancellor",
          image: "/committee/vc.jpg",
        },
      ],
    },
    {
      title: "Patrons",
      members: [
        {
          name: "Prof. (Dr.) Palwinder Singh",
          role: "Dean Academic Affairs",
          image: "/committee/palwinder-singh.jpg",
        },
        {
          name: "Prof. (Dr.) Karamjit Singh Chahal",
          role: "Registrar",
          image: "/committee/karamjit-chahal.jpg",
        },
        {
          name: "Prof. (Dr.) Vandana Bhalla",
          role: "Director Research",
          image: "/committee/vandana-bhalla.jpg",
        },
      ],
    },
    {
      title: "Convener",
      members: [
        { name: "Prof. (Dr.) Ravinder Kumar", image: "/committee/ravinder-raju.jpg" },
      ],
    },
    {
      title: "Conference Chairs",
      members: [
        {
          name: "Prof. (Dr.) Maninder Lal Singh",
          role: "Publications Chair",
          image: "/committee/maninder-lal-singh.jpg",
        },
        {
          name: "Prof. (Dr.) Ravinder Singh Sawhney",
          role: "Finance and Sponsorship Chair",
          image: "/committee/ravinder-sawhney.jpg",
        },
        {
          name: "Prof. (Dr.) Shalini Behal",
          role: "Technical Program Chair",
          image: "/committee/shalini-behal.jpg",
        },
      ],
    },
    {
      title: "Event Support",
      members: [
        { name: "Prof. (Dr.) Harminder Singh", 
          role : "Coordinator, RUSA 2.0, GNDU, Amritsar",
          image: "/committee/harminder-singh.jpg" },
          
        { name: "Dr. Gopal Kumar Johari", 
          role : "Coordinator, Centre for Sustainable Habitat,GNDU, Amritsar",
          image: "/committee/gopal-kumari.jpg" },
      ],
    },
    {
      title: "Organizing Secretaries",
      members: [
        { name: "Dr. Kuldeep Singh", image: "/committee/kuldeep.jpg" },
        { name: "Dr. Rajandeep Singh", image: "/committee/rajandeep.jpg" },
      ],
    },
    {
      title: "Technical Program Committee",
      members: [
        {
          name: "Prof. (Dr.) Shalini Behal",
          role: "(Chairperson)",
          image: "/committee/shalini-behal.jpg",
        },
        { name: "Dr. Hardeep Kaur", image: "/committee/hardeep-kaur.jpg" },
        { name: "Dr. Rajdeep Singh Sohal", image: "/committee/rajdeep-sohal.jpg" },
        { name: "Dr. Jaskiran Sobti", image: "/committee/jaskiran-sobti.jpg" },
      ],
    },
    {
      title: "Finance / Registration / Sponsorship Committee",
      members: [
        {
          name: "Prof. (Dr.) Ravinder Singh Sawhney",
          role: "(Chairperson)",
          image: "/committee/ravinder-sawhney.jpg",
        },
        { name: "Dr. Sukhdeep Kaur", image: "/committee/sukhdeep.jpg" },
        { name: "Dr. Gurpreet Singh", image: "/committee/gurpreet-singh.jpg" },
        { name: "Er. Rupendeep Kaur", image: "/committee/rupendeep-kaur.jpg" },
      ],
    },
    {
      title: "Publication, Outreach and Certificate Issuance Committee",
      members: [
        {
          name: "Prof. (Dr.) Maninder Lal Singh",
          role: "(Chairperson)",
          image: "/committee/maninder-lal-singh.jpg",
        },
        { name: "Dr. Harminder Singh", image: "/committee/harminder-singh.jpg" },
        { name: "Dr. Pawandeep Kaur", image: "/committee/pawandeep-kaur.jpg" },
        { name: "Dr. Jaipreet Kaur", image: "/committee/jaipreet-kaur.jpg" },
      ],
    },
    {
      title: "Hospitality and Local Organizing Committee",
      members: [
        {
          name: "Dr. Sukhdeep Kaur",
          role: "(Chairperson)",
          image: "/committee/sukhdeep.jpg",
        },
        { name: "Er. Manjit Sandhu", image: "/committee/manjit-sandhu.jpg" },
        { name: "Er. Shivinder Devra", image: "/committee/shivender-devra.jpg" },
        { name: "Dr. Maninder Pal Singh", image: "/committee/maninder-pal.jpg" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <LampDemo />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 dark:from-gray-900 dark:via-gray-950 dark:to-black py-12 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-blue-800 dark:text-blue-400 drop-shadow-md">
            DIECAI-2025 Committees
          </h1>

          <div className="grid gap-10">
            {committees.map((committee, idx) => (
              <Card
                key={idx}
                className="bg-white/90 dark:bg-gray-800/80 shadow-lg border border-blue-100 dark:border-gray-700 rounded-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-semibold text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-gray-700 pb-2 inline-block">
                    {committee.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="mt-6">
                  <div
                    className={`flex flex-wrap justify-center gap-10 ${
                      committee.members.length <= 2
                        ? "sm:gap-16"
                        : committee.members.length === 3
                        ? "sm:justify-center"
                        : "md:justify-between"
                    }`}
                  >
                    {committee.members.map((member, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        {/* Circular Image */}
                        <div className="relative w-32 h-32 mb-4">
                          <Image
                            src={member.image || "/committee/default.jpg"}
                            alt={member.name}
                            fill
                            className="rounded-full object-cover border-4 border-blue-100 dark:border-gray-700 shadow-md"
                          />
                        </div>

                        <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-300 leading-tight">
                          {member.name}
                        </h3>

                        {member.role && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {member.role}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
