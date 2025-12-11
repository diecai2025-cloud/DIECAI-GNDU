import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LampDemo from "@/components/ui/lamp";
import React from "react";

const IMPORTANT_DATES = [
  { event: "Full Paper Submission Deadline (Extended)", date: "4 December, 2025" },
  { event: "Paper Acceptance Notification", date: "8 December, 2025" },
  { event: "Deadline for Submission of Camera-Ready Papers", date: "10 December, 2025" },
  { event: "Conference Registration Deadline", date: "10 December, 2025" },
  { event: "Conference Dates", date: "18-20 December, 2025" },
];

export default function ImportantDates() {
  return (
    <>
    <Navbar />
    <LampDemo />
    <div className="bg-gray-50 min-h-screen p-4 sm:p-10 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10 leading-tight uppercase tracking-wider border-b-4 border-blue-200 dark:border-blue-800 pb-3">
          Important Dates
        </h2>

        {/* Date Table Container */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-6 sm:p-8 border border-blue-100 dark:border-gray-700">
          <p className="text-center text-base text-gray-600 dark:text-gray-400 mb-6">
            Mark these critical deadlines for participation in the conference.
          </p>

          <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <table className="min-w-full text-base">
              {/* Table Header */}
              <thead className="bg-blue-600 dark:bg-blue-700 text-white">
                <tr>
                  <th className="p-3 text-left w-3/5">Event</th>
                  <th className="p-3 text-center w-2/5">Date</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {IMPORTANT_DATES.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-700/50"
                    } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <td className="p-4 font-medium text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-600">
                      {item.event}
                    </td>
                    <td
                      className={`p-4 text-center font-bold ${
                        item.event.includes("Deadline") ||
                        item.event.includes("Last date")
                          ? "text-red-600"
                          : "text-blue-800 dark:text-blue-400"
                      }`}
                    >
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 pt-2 border-t border-gray-100 dark:border-gray-700">
            *All deadlines are 11:59 PM IST (Indian Standard Time).
          </p>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 pt-2 border-t border-gray-100 dark:border-gray-700">
            *Registration paper cover length upto 8 pages.<br/>
            Extra pages will be charged <mark className="bg-red-300 text-black">@300</mark> per page
          </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
