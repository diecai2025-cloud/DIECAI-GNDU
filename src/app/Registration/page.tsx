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

function App() {
  const REGISTRATION_FEES = [
    { category: "Student/ Research Scholar", inr: "7,000", usd: "150" },
    { category: "Faculty, Researcher, and Scientist", inr: "9,000", usd: "250" },
    // { category: "Student/ Research Scholar", inr: "8,500", usd: "170" },
      // { category: "Faculty, Researcher, and Scientist", inr: "11,000", usd: "275" },
    { category: "Industry Professionals", inr: "17,000", usd: "300" },
    { category: "Attendee", inr: "3,000", usd: "50" },
  ];

  const TUTORIAL_FEES = [
    { category: "Online", inr: "1,000", usd: "50" },
    { category: "Offline", inr: "2,000", usd: "75" },
  ];

  return (
    <>
    <Navbar />
    <LampDemo />

    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 sm:p-10 transition-colors duration-300">
      {/* --- Registrations Header --- */}
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-8 tracking-wide uppercase">
        Registration
      </h1>

      {/* --- Instructions Card --- */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 mb-12 border border-blue-100 dark:border-gray-700">
        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-justify">
          <li>
            For each accepted paper, at least one of the authors must register
            for the conference.
          </li>
          <li>
            One registration in Author’s Registration Category is mandatory for:
            a) presentation of paper during the conference, and b) inclusion of
            paper in conference proceedings.
          </li>
          <li>
            Early Bird Discount of 10% on the below mentioned author
            registration fee is valid till September 10, 2025.
          </li>
          <li>Deadline for author registration is 25 September 2025.</li>
          <li className="text-gray-700 dark:text-gray-300 text-justify break-words">
            If one of the authors has registered in the author’s registration
            category, all other authors may register under co-authors’
            registration category if they wish to attend and receive
            certificates. Only registered authors will receive certificates.
          </li>
          <li>
            <Link
              href="/submit-papers"
              className="text-blue-600 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              CLICK HERE
            </Link>{" "}
            to submit papers.
          </li>
        </ul>
      </div>

      {/* --- Registration Fee Table Card --- */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 border border-blue-100 dark:border-gray-700">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-6 tracking-wide">
          Registration fee
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          Fees cover conference kits, access to all sessions, lunches, and
          dinners as per the schedule.
        </p>

        <Table className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <TableHeader className="bg-blue-600 dark:bg-blue-700">
            <TableRow>
              <TableHead className="text-white">Category</TableHead>
              <TableHead className="text-center text-white">
                India (INR)
              </TableHead>
              <TableHead className="text-center text-white">
                Abroad (USD)
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
                    : "bg-gray-50 dark:bg-gray-700/50"
                } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
              >
                <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                  {fee.category}
                </TableCell>
                <TableCell className="text-center font-mono text-gray-700 dark:text-gray-300">
                  {fee.inr}
                </TableCell>
                <TableCell className="text-center font-mono text-gray-700 dark:text-gray-300">
                  {fee.usd}
                </TableCell>
              </TableRow>
            ))}

            {/* Pre Conference Tutorials */}
            <TableRow className="bg-blue-100/70">
              <TableCell
                colSpan={3}
                className="font-bold text-blue-800 dark:text-blue-400 border-t-4 border-blue-600 text-center"
              >
                Pre Conference Tutorials
              </TableCell>
            </TableRow>

            {TUTORIAL_FEES.map((fee, index) => (
              <TableRow
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-700/50"
                } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
              >
                <TableCell className="pl-6 font-medium italic text-gray-700 dark:text-gray-300">
                  {fee.category}
                </TableCell>
                <TableCell className="text-center font-mono text-gray-700 dark:text-gray-300">
                  {fee.inr}
                </TableCell>
                <TableCell className="text-center font-mono text-gray-700 dark:text-gray-300">
                  {fee.usd}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>


      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
