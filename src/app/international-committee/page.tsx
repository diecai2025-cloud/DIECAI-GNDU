"use client"

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // ✅ make sure this path is correct
import Navbar from "@/components/Navbar";
import LampDemo from "@/components/ui/lamp";
import Footer from "@/components/Footer";

// --- Data Constants for the Committee ---
const INTL_COMMITTEE_MEMBERS = [
  {
    name: "Dr. Rambabu Bobba",
    institution:
      "Southern University and A&M College System, Baton Rouge, Louisiana, United States",
  },
  {
    name: "Dr. Elammaran Jayamani",
    institution: "Swinburne University of Technology, Malaysia",
  },
  {
    name: "Dr. M. Murugappan",
    institution: "Kuwait College of Science and Technology, Kuwait",
  },
  {
    name: "Dr. Sushank Chaudhary",
    institution: "Guangdong University of Technology, China",
  },
];

export default function IntlAdvisoryCommittee() {
  return (
   <>
   <Navbar />
   <LampDemo />
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 sm:p-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10 leading-tight uppercase tracking-wider border-b-4 border-blue-200 dark:border-blue-800 pb-3">
          International Advisory Committee
        </h2>

        {/* Table Container */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-4 sm:p-6 border border-blue-100 dark:border-gray-700">
          <p className="text-center text-base text-gray-600 dark:text-gray-400 mb-6 italic">
            The committee members provide global expertise and strategic
            guidance.
          </p>

          {/* Shadcn Table */}
          <Table className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-base">
            {/* Header */}
            <TableHeader className="bg-blue-600 dark:bg-blue-700 text-white">
              <TableRow className="border-b-0">
                <TableHead className="text-white text-lg font-semibold w-1/3 border-r border-blue-500 dark:border-blue-600">
                  Name of Expert
                </TableHead>
                <TableHead className="text-white text-lg font-semibold w-2/3">
                  Institution & Location
                </TableHead>
              </TableRow>
            </TableHeader>

            {/* Body */}
            <TableBody>
              {INTL_COMMITTEE_MEMBERS.map((member, index) => (
                <TableRow
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-700/50"
                  } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  <TableCell className="font-medium text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-600">
                    {member.name}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {member.institution}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    <Footer />
   </>
  );
}
