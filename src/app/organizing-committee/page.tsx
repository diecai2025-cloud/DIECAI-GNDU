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
      title: "Patron",
      members: [
        {
          name: "Prof. (Dr.) Palwinder Singh",
          role: "Dean Academic Affairs",
          image: "/committee/palwinder-singh.jpg",
        },
      ],
    },
    {
      title: "Co-Patron",
      members: [
        {
          name: "Prof. (Dr.) Vandana Bhalla",
          role: "Director Research",
          image: "/committee/vandana-bhalla.jpg",
        },
      ],
    },
    {
      title: "General Chair / Convener",
      members: [{ name: "Dr. Ravinder Kumar", image: "/committee/ravinder-raju.jpg" }],
    },
    {
      title: "Publications Chair",
      members: [{ name: "Dr. Maninder Lal Singh", image: "/committee/maninder-lal-singh.jpg" }],
    },
    {
      title: "Finance & Sponsorship Chair",
      members: [{ name: "Dr. Ravinder Singh Sawhney", image: "/committee/ravinder-sawhney.jpg" }],
    },
    {
      title: "Technical Program Chair",
      members: [{ name: "Dr. Shalini Behal", image: "/committee/shalini-behal.jpg" }],
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
        { name: "Dr. Shalini Bahel", role: "(Chairperson)", image: "/committee/shalini-bahel.jpg" },
        { name: "Dr. Hardeep Kaur", image: "/committee/hardeep-kaur.jpg" },
        { name: "Dr. Rajdeep Singh Sohal", image: "/committee/rajdeep-sohal.jpg" },
        { name: "Dr. Jaskiran Sobti", image: "/committee/jaskiran-sobti.jpg" },
      ],
    },
    {
      title: "Finance / Registration / Sponsorship Committee",
      members: [
        { name: "Dr. Ravinder Singh Sawhney", role: "(Chairperson)", image: "/committee/ravinder-sawhney.jpg" },
        { name: "Dr. Sukhdeep Kaur", image: "/committee/sukhdeep-kaur.jpg" },
        { name: "Dr. Gurpreet Singh", image: "/committee/gurpreet-singh.jpg" },
        { name: "Er. Rupendeep Kaur", image: "/committee/rupendeep-kaur.jpg" },
      ],
    },
    {
      title: "Publication, Outreach and Certificate Issuance Committee",
      members: [
        { name: "Dr. Maninder Lal Singh", role: "(Chairperson)", image: "/committee/maninder-lal-singh.jpg" },
        { name: "Dr. Harminder Singh", image: "/committee/harminder-singh.jpg" },
        { name: "Dr. Pawandeep Kaur", image: "/committee/pawandeep-kaur.jpg" },
        { name: "Dr. Jaipreet Kaur", image: "/committee/jaipreet-kaur.jpg" },
      ],
    },
    {
      title: "Hospitality and Local Organizing Committee",
      members: [
        { name: "Dr. Sukhdeep Kaur", role: "(Chairperson)", image: "/committee/sukhdeep-kaur.jpg" },
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 py-12 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-700 dark:text-blue-400">
            DIECAI-2025 Committees
          </h1>

          <div className="grid gap-10">
            {committees.map((committee, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    {committee.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {committee.members.map((member, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                      >
                        {/* 🖼 Image or Placeholder */}
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover border border-gray-300 dark:border-gray-600 shadow-md mb-3"
                          />
                        ) : (
                          <div className="w-28 h-28 bg-gray-300 dark:bg-gray-700 rounded-full mb-3 flex items-center justify-center text-gray-500 text-sm">
                            No Image
                          </div>
                        )}

                        <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-300">
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
