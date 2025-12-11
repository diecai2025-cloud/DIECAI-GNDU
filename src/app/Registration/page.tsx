"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LampDemo from "@/components/ui/lamp";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

function RegistrationPage() {
  const REGISTRATION_FEES = [
    {
      category: "P.G. Students / Research Scholar",
      early_inr: "3500",
      early_usd: "75",
      regular_inr: "4000",
      regular_usd: "80",
    },
    {
      category: "Academicians / Faculty / Scientist",
      early_inr: "5500",
      early_usd: "100",
      regular_inr: "6000",
      regular_usd: "110",
    },
    {
      category: "Industry Professional",
      early_inr: "7000",
      early_usd: "120",
      regular_inr: "8000",
      regular_usd: "130",
    },
    {
      category: "Attendee / Co-Author",
      early_inr: "3000",
      early_usd: "50",
      regular_inr: "3500",
      regular_usd: "55",
    },
    {
      category: "U.G. Student",
      early_inr: "2000",
      early_usd: "35",
      regular_inr: "2500",
      regular_usd: "40",
    },
  ];

  const SPONSORSHIP_FEES = [
    { category: "Platinum Sponsor", inr: "35000", usd: "500" },
    { category: "Diamond Sponsor", inr: "25000", usd: "400" },
    { category: "Gold Sponsor", inr: "15000", usd: "300" },
  ];

  return (
    <>
      <Navbar />
      <LampDemo />

      <div className="bg-gradient-to-b from-blue-50 to-sky-100 dark:from-gray-950 dark:to-slate-900 min-h-screen py-12 px-6 sm:px-10 transition-colors duration-300">
        
        {/* ---------------- Header ---------------- */}
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent mb-10">
          REGISTRATION
        </h1>

        {/* ---------------- Instructions ---------------- */}
        <section className="max-w-4xl mx-auto backdrop-blur-xl bg-white/70 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-8 border border-blue-100 dark:border-gray-700 mb-16 transition-all">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-5">
            Important Instructions
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">

            <li>For each accepted paper, at least one of the authors must register for the conference.</li>
            <li>One registration in Author’s Category is mandatory for presentation and inclusion in proceedings.</li>
            <li>If one author registers as Author, other authors may register as Co-Authors for certificates & attendance.</li>
            <li>Registration fee is non-refundable.</li>
            <li>This is not an IEEE sponsored event; no paper will appear in IEEE Xplore.</li>
            <li>Plagiarism/Similarity score report from Turnitin is mandatory.</li>

            <li>
              <Button variant="outline" className="text-white bg-blue-500 dark:bg-blue-800">
                <Link href="https://cmt3.research.microsoft.com/DIECAI2025" target="_blank">
                  CLICK HERE
                </Link>{" "}
                to Submit Papers
              </Button>
            </li>

            <li>
              <Button variant="outline" className="text-white bg-blue-500 dark:bg-blue-800">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfx5SzHAcik7sxwefBe9Zkb-LNFvUssPft_Jm731YcZbyuu0w/viewform"
                  target="_blank"
                >
                  CLICK HERE
                </Link>{" "}
                to Register
              </Button>
            </li>

          </ul>
        </section>

        {/* ---------------- Author Registration Table ---------------- */}
        <section className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-gray-700 mb-16">
          <h3 className="text-3xl font-extrabold text-center text-blue-700 dark:text-cyan-400 mb-6">
            Author Registration Fee
          </h3>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Fee includes publication (up to 8 pages), registration kit, and meals.
            Extra pages: ₹300 / USD 5 per page.
            <br />
            <span className="font-semibold">
              Early Bird Registration Till:{" "}
              <span className="text-red-600">20 November, 2025</span>
            </span>
          </p>

          <div className="overflow-x-auto rounded-xl">
            <Table className="border border-gray-200 dark:border-gray-700">
              <TableHeader className=" bg-blue-500 dark:bg-blue-800 text-white">
                <TableRow>
                  <TableHead className="text-center">Category</TableHead>
                  <TableHead className="text-center">Early Bird (INR)</TableHead>
                  <TableHead className="text-center">Early Bird (USD)</TableHead>
                  <TableHead className="text-center">Regular (INR)</TableHead>
                  <TableHead className="text-center">Regular (USD)</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {REGISTRATION_FEES.map((fee, index) => (
                  <TableRow
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-blue-50/50 dark:bg-gray-700/50"
                    } hover:bg-sky-100 dark:hover:bg-gray-700`}
                  >
                    <TableCell className="font-semibold text-gray-800 dark:text-gray-200 text-left">
                      {fee.category}
                    </TableCell>

                    <TableCell className="text-center text-gray-700 dark:text-gray-300 line-through">
                      ₹{fee.early_inr}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 dark:text-gray-300 line-through">
                      ${fee.early_usd}
                    </TableCell>

                    <TableCell className="text-center text-gray-700 dark:text-gray-300">
                      ₹{fee.regular_inr}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 dark:text-gray-300">
                      ${fee.regular_usd}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* ---------------- Publication Info ---------------- */}
        <section className="max-w-4xl mx-auto text-center p-10 rounded-3xl border border-blue-200 dark:border-gray-700 mb-16 shadow-lg bg-white/80 dark:bg-gray-900/40">
          <h5 className="text-2xl font-semibold text-blue-700 dark:text-cyan-300 leading-relaxed">
            All accepted papers in <strong>DIECAI-2025</strong> will be published
            as book chapters in an edited volume with potential{" "}
            <span className="underline decoration-blue-400">
              SCOPUS Indexing
            </span>
            .
          </h5>
        </section>

        {/* ---------------- Payment Info ---------------- */}
        <section className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-10 mb-16 border border-blue-100 dark:border-gray-700 text-center">
          <h3 className="text-3xl font-bold text-blue-700 dark:text-cyan-400 mb-4">
            Payment Information
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Payments must be made via NEFT/RTGS. Registration fee is non-refundable.
          </p>

          <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-8 max-w-md mx-auto bg-white dark:bg-gray-900">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold text-gray-800 dark:text-gray-200 w-1/3">
                    Account Name:
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    UGC GRANTS REGISTRAR GNDU, ASR
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                    Account Number:
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    02881000007953
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                    Bank Name:
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    Punjab & Sind Bank
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                    Branch:
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    GNDU Campus Branch, Amritsar
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                    IFSC:
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    PSIB0000288
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                    MICR:
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    143023013
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* ---------------- Sponsorship Section ---------------- */}
        <section className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-gray-700">
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent mb-6">
            Sponsorship Opportunities
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            <strong>DIECAI-2025</strong> invites Sponsors and Industry Partners
            to join this event. Gain visibility through branding, exhibitions,
            and global outreach.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-3">
            Benefits to Sponsors
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8">
            <li><strong>Platinum:</strong> Logo on banners, proceedings, and exhibition stalls.</li>
            <li><strong>Diamond:</strong> Logo on banners, proceedings, and standees.</li>
            <li><strong>Gold:</strong> Logo on conference banners and proceedings.</li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-4">
            Sponsorship Charges
          </h3>

          <div className="overflow-x-auto mb-6">
            <Table className="border border-gray-200 dark:border-gray-700">
              <TableHeader className="text-white bg-blue-500 dark:bg-blue-800">
                <TableRow>
                  <TableHead className="text-center">Category</TableHead>
                  <TableHead className="text-center">Indian Sponsors (INR)</TableHead>
                  <TableHead className="text-center">Abroad Sponsors (USD)</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {SPONSORSHIP_FEES.map((fee, index) => (
                  <TableRow
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-blue-50/50 dark:bg-gray-700/50"
                    } hover:bg-sky-100 dark:hover:bg-gray-700`}
                  >
                    <TableCell className="font-semibold">{fee.category}</TableCell>
                    <TableCell className="text-center">₹{fee.inr}</TableCell>
                    <TableCell className="text-center">${fee.usd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm italic text-center">
            * Inclusive of GST
          </p>

          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Button
              asChild
              className="text-white bg-blue-500 dark:bg-blue-800 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              <Link href="/Contact-us">Contact Us for Sponsorship</Link>
            </Button>

            <Button
              asChild
              className="text-white bg-blue-500 dark:bg-blue-800 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              <Link href="/Contact-us#accommodation">Accommodation</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationPage;
