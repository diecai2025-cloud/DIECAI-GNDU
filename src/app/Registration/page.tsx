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
        <section className="max-w-4xl mx-auto backdrop-blur-xl bg-white/70 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-8 border border-blue-100 dark:border-gray-700 mb-16 hover:shadow-blue-200 dark:hover:shadow-cyan-800/30 transition-all">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-5">
            Important Instructions
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            <li>For each accepted paper, at least one of the authors must register for the conference.</li>
            <li>One registration in Author’s Registration Category is mandatory for: a) presentation of paper during the conference, and b) inclusion of paper in conference proceedings.</li>
            <li>
              If one of the authors has registered in the author’s registration category, all other authors may register under co-authors’ registration category if they wish to attend and receive certificates. Only registered authors will receive certificates.
            </li>
            <li>Registration fee is non-refundable.</li>
            <li>This is not an IEEE sponsored event, so no publication/paper will be appearing over IEEE explore.</li>
            <li>Plagiarism/Similarity score report checked from Turnitin is mandatory</li>
            <li>
              <Button variant={"outline"} className="text-blue-500">
                <Link
                href="https://cmt3.research.microsoft.com/DIECAI2025"
                target="blank"
              >
                CLICK HERE
              </Link>{" "}
              to Submit papers
              </Button>
            </li>

             <li>
              <Button variant={"outline"} className="text-blue-500" >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfx5SzHAcik7sxwefBe9Zkb-LNFvUssPft_Jm731YcZbyuu0w/viewform"
                target="blank"
              >
                CLICK HERE
              </Link>
              to Register
              </Button>
            </li>
            
          </ul>
        </section>

        {/* ---------------- Author Registration Table ---------------- */}
        <section className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-gray-700 mb-16 hover:shadow-blue-200 dark:hover:shadow-cyan-800/30 transition-all">
          <h3 className="text-3xl font-extrabold text-center text-blue-700 dark:text-cyan-400 mb-6 tracking-wide">
            Author Registration Fee
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Fee covers publication (up to 8 pages), registration kit, and meals.
            ₹300 / USD 5 per extra page beyond 8 pages.
          </p>

          <div className="overflow-x-auto rounded-xl">
            <Table className="border border-gray-200 dark:border-gray-700">
              <TableHeader className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-cyan-700 dark:to-blue-800 text-white">
                <TableRow>
                  <TableHead className="text-center text-white">
                    Category
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Early Bird (INR)
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Early Bird (USD)
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Regular (INR)
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Regular (USD)
                  </TableHead>
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
                    } hover:bg-sky-100 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <TableCell className="font-semibold text-gray-800 dark:text-gray-200 text-left">
                      {fee.category}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 dark:text-gray-300">
                      ₹{fee.early_inr}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 dark:text-gray-300">
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
        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-100 via-sky-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-black p-10 rounded-3xl border border-blue-200 dark:border-gray-700 mb-16 shadow-lg">
          <h5 className="text-2xl font-semibold text-blue-700 dark:text-cyan-300 leading-relaxed">
            All accepted papers in{" "}
            <span className="font-bold">DIECAI-2025</span> will be published as
            book chapters in an edited volume with potential{" "}
            <span className="underline decoration-blue-400">
              SCOPUS Indexing
            </span>
            .
          </h5>
        </section>

        {/* ---------------- Payment Info ---------------- */}
        <section className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-gray-700 mb-16 hover:shadow-blue-200 dark:hover:shadow-cyan-800/30 transition-all text-center">
          <h3 className="text-3xl font-bold text-blue-700 dark:text-cyan-400 mb-4">
            Payment Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            All payments should be made via NEFT/RTGS in advance. Registration
            fee is non-refundable.
          </p>

          <div className="bg-gradient-to-r from-sky-100 to-blue-50 dark:from-gray-900 dark:to-slate-800 border border-blue-200 dark:border-gray-700 rounded-2xl p-8 text-left max-w-md mx-auto">
            <p><strong>Account Name:</strong> UGC GRANTS REGISTRAR GNDU, ASR</p>
            <p><strong>Account Number:</strong> 02881000007953</p>
            <p><strong>Bank Name:</strong> Punjab & Sind Bank</p>
            <p><strong>Branch:</strong> GNDU Campus Branch, Amritsar</p>
            <p><strong>IFSC:</strong> PSIB0000288</p>
            <p><strong>MICR:</strong> 143023013</p>
          </div>
        </section>

        {/* ---------------- Sponsorship Section ---------------- */}
        <section className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-gray-700 hover:shadow-blue-200 dark:hover:shadow-cyan-800/30 transition-all">
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent mb-6">
            Sponsorship Opportunities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 text-justify">
            <strong>DIECAI-2025</strong> invites Technical Sponsors and Industry
            Partners to join this prestigious event. Gain visibility through
            branding, exhibitions, and direct engagement with a global academic
            and professional audience.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-4">
            Benefits to Sponsors
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-8">
            <li>
              <strong>Platinum:</strong> Logo on banners, proceedings, and
              exhibition stalls.
            </li>
            <li>
              <strong>Diamond:</strong> Logo on banners, proceedings, and
              standees.
            </li>
            <li>
              <strong>Gold:</strong> Logo on conference banners and proceedings.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-4">
            Sponsorship Charges
          </h3>
          <div className="overflow-x-auto rounded-xl mb-6">
            <Table className="border border-gray-200 dark:border-gray-700">
              <TableHeader className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-cyan-700 dark:to-blue-800 text-white">
                <TableRow>
                  <TableHead className="text-center text-white">
                    Category
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Indian Sponsors (INR)
                  </TableHead>
                  <TableHead className="text-center text-white">
                    Abroad Sponsors (USD)
                  </TableHead>
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
                    } hover:bg-sky-100 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <TableCell className="font-semibold text-gray-800 dark:text-gray-200 text-left">
                      {fee.category}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 dark:text-gray-300">
                      ₹{fee.inr}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 dark:text-gray-300">
                      ${fee.usd}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-10 text-center">
            * Inclusive of GST
          </p>

          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              <Link href="/Contact-us">Contact Us for Sponsorship</Link>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-sky-600 to-blue-500 hover:from-sky-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
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
