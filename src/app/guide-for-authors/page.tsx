"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LampDemo from "@/components/ui/lamp";
import Link from "next/link";

const PROGRAM_SCHEDULE = [
  {
    time: "09.00 am - 09.30 am",
    day1: <>Registration</>,
  },
  {
    time: "09.30 am - 11.00 am",
    day1: (
      <>
        <strong>Inauguration and Registration</strong>
        <br />
        Inauguration speech, Keynote address by Chief Guest <br />
        <br />
      </>
    ),
    day2: (
      <>
        <strong>Track 3:</strong> Next-Generation Wireless Connectivity <br />
        <em>(Venue A, Venue B)</em>
      </>
    ),
    day3: (
      <>
        <strong>Track 6:</strong> Next-Generation Computing & Emerging Trends in
        Computer Science <br />
        <em>(Venue A, Venue B)</em>
      </>
    ),
  },
  {
    time: "11.00 am - 11.30 am",
    day1: <>Tea Break</>,
    day2: <>Tea Break</>,
    day3: <>Tea Break</>,
  },
  {
    time: "11.30 am - 01.00 pm",
    day1: (
      <>
        <strong>Track 1:</strong> Smart Embedded Systems & Intelligent IoT{" "}
        <br />
        <em>(Venue A, B)</em>
      </>
    ),
    day2: (
      <>
        <strong>Track 4:</strong> Optical Networks & Space Communication <br />
        <em>(Venue A, Venue B)</em>
      </>
    ),
    day3: (
      <>
        <strong>Track 7:</strong> AI, Data Science & Emerging Applications{" "}
        <br />
        <em>Technical Session 7 (Venue A, Venue B)</em>
      </>
    ),
  },
  {
    time: "01.00 pm - 02.00 pm",
    day1: <>Lunch Break</>,
    day2: <>Lunch Break</>,
    day3: <>Lunch Break</>,
  },
  {
    time: "02.00 pm - 04.00 pm",
    day1: (
      <>
        <strong>Track 2:</strong> Advanced Materials for Future Electronics
        <br />
        <em>(Venue A, Venue B)</em>
      </>
    ),
    day2: (
      <>
        <strong>Track 5:</strong> AI-Powered Electronics & Communication Systems
        <br />
        <em>(Venue A) + Poster Presentation</em>
      </>
    ),
    day3: <>Valedictory Session</>,
  },
  {
    time: "04.00 pm -",
    day1: <>Local Sight Seeing, Dinner</>,
    day2: <>Dinner</>,
    day3: <>-</>,
  },
];

const TRACKS = [
  {
    title: "Track 1: Smart Embedded Systems & Intelligent IoT",
    topics: [
      "• Embedded Hardware & Software Co-Design",
      "• IoT Architectures, Standards & Protocols",
      "• Cyber-Physical Systems & Digital Twins",
      "• IoT for Smart Cities, Intelligent Transportation, Healthcare & Agriculture",
      "• Security & Privacy in IoT Devices",
      "• IoT for Smart Manufacturing and Predictive Maintenance",
      "• Sensor Networks for Structural Health Monitoring",
    ],
    sdg: "This track supports SDG 9 (Industry, Innovation & Infrastructure) and SDG 11 (Sustainable Cities & Communities) by advancing IoT-driven smart infrastructure and urban solutions. It also contributes to SDG 3 (Good Health & Well-being) through health monitoring devices and SDG 12 (Responsible Consumption & Production) via resource-efficient embedded systems.",
  },
  {
    title: "Track 2: Advanced Materials for Future Electronics",
    topics: [
      "• Nanoelectronics & Nanomaterials, 2D Materials",
      "• Semiconductor Devices & Fabrication Technologies",
      "• Flexible, Wearable & Printed Electronics",
      "• Energy Storage Materials & sustainable Electronics",
      "• Sustainable & Eco-Friendly Electronic Materials",
      "• Smart Materials and Composites for Mechanical and Civil Engineering",
      "• Piezoelectric and Shape Memory Materials for Mechatronic Systems",
    ],
    sdg: "Aligned with SDG 7 (Affordable & Clean Energy) and SDG 9 (Industry, Innovation & Infrastructure), this track explores sustainable semiconductors, nanoelectronics, and energy storage materials. It also contributes to SDG 12 (Responsible Consumption & Production) and SDG 13 (Climate Action) through eco-friendly and recyclable material innovations.",
  },
  {
    title: "Track 3: Next-Generation Wireless Connectivity",
    topics: [
      "• 5G/6G, Terahertz & mmWave Communications",
      "• Massive MIMO, Beamforming & Antenna Design",
      "• Wireless Sensor Networks & Low-Power Communication",
      "• Intelligent Networking & Applications: Autonomous Vehicles, Remote Healthcare, Industry 4.0",
      "• Applications: Autonomous Vehicles, Remote Healthcare, Industry 4.0",
      "• Wireless Communication for Industrial Automation and Smart Manufacturing",
      "• Sensor-Based Monitoring in Smart Infrastructure and Construction Sites",
    ],
    sdg: "This track advances SDG 9 (Industry, Innovation & Infrastructure) by driving breakthroughs in 6G, terahertz, and intelligent wireless systems. It also enables SDG 4 (Quality Education) and SDG 10 (Reduced Inequalities) by improving global access to education and connectivity, while supporting SDG 3 (Good Health & Well-being) through telemedicine applications.",
  },
  {
    title: "Track 4: Optical Networks & Space Communication",
    topics: [
      "• Photonics, Fiber Optics, Sensors, Wireless Optical Communication",
      "• AI in Optical Communication",
      "• Optical Interconnects, Data Centers & Quantum Security",
      "• Optical Sensors for Civil and Mechanical Structural Monitoring",
      "• Laser-Based Measurement and Inspection Systems in Mechatronics",
    ],
    sdg: "Supporting SDG 9 (Industry, Innovation & Infrastructure) and SDG 17 (Partnerships for the Goals), this track emphasizes high-speed optical systems and satellite technologies for global connectivity. It also contributes to SDG 13 (Climate Action) through Earth observation and disaster monitoring, and to SDG 11 (Sustainable Cities & Communities) by enabling digital urban ecosystems.",
  },
  {
    title: "Track 5: AI-Powered Electronics & Communication Systems",
    topics: [
      "• AI in Wireless, Signal/Image Processing, IoT & Embedded Platforms",
      "• Intelligent Circuit & Chip Design, Cognitive Radio",
      "• AI in Robotics, Drones & Autonomous Systems",
      "• AI-Enabled Mechatronic Systems and Intelligent Control",
    ],
    sdg: "This track strengthens SDG 9 (Industry, Innovation & Infrastructure) by embedding AI in circuit design, smart manufacturing, and communication systems. It promotes SDG 3 (Good Health & Well-being) via AI-driven medical technologies, SDG 11 (Sustainable Cities & Communities) through intelligent energy and mobility solutions, and SDG 16 (Peace, Justice & Strong Institutions) with AI for secure and trustworthy networks.",
  },
  {
    title: "Track 6: Next-Generation Computing & Emerging Trends in Computer Science",
    topics: [
      "• Edge/Fog Computing & Cloud Integration, Quantum Algorithms & Architectures",
      "• Blockchain, Federated Learning & Distributed AI",
      "• High-Performance & Green Computing, Metaverse, Web3 & Digital Twins",
      "• Digital Twin Modeling for Smart Factories and Infrastructure",
      "• Simulation and Computational Modeling in Mechanical and Civil Systems",
    ],
    sdg: "This track directly supports SDG 9 (Industry, Innovation & Infrastructure) by driving breakthroughs in next-generation computing, while SDG 16 (Peace, Justice & Strong Institutions) is addressed through blockchain-based transparency and secure digital ecosystems. It contributes to SDG 12 (Responsible Consumption & Production) and SDG 13 (Climate Action) by encouraging green and energy-efficient computing practices. Additionally, it aligns with SDG 10 (Reduced Inequalities) by democratizing access to decentralized and distributed technologies.",
  },
  {
    title: "Track 7: AI, Data Science & Emerging Applications",
    topics: [
      "• ML & Deep Learning, NLP & Speech Tech",
      "• Big Data Analytics & Cloud Computing",
      "• AI for Healthcare, Education, Finance, Agriculture & Climate",
      "• Ethical AI, Trustworthy AI & Policy",
      "• AI in Construction Management, Project Scheduling",
      "• Data-Driven Design Optimization in Mechanical and Civil Engineering",
      "• AI and IoT for Smart Buildings and Infrastructure Resilience",
    ],
    sdg: "Aligned with SDG 2 (Zero Hunger) and SDG 8 (Decent Work & Economic Growth), this track highlights AI applications in agriculture and digital economies. It further supports SDG 13 (Climate Action) through climate modeling, SDG 12 (Responsible Consumption & Production) via supply chain optimization, and SDG 16 (Peace, Justice & Strong Institutions) by fostering ethical and responsible AI use.",
  },
];

const SDG_ALIGNMENT_TEACHINGS = [
  {
    title: "Human Dignity & Freedom",
    sdg: "SDG 16 – Peace, Justice & Strong Institutions",
    details:
      "Guru Ji gave his life to protect the right of others to practice their faith, echoing values of justice, equality, and institutional trust. Link this to AI ethics, **cybersecurity, and **responsible technology (Tracks 5 & 6).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    title: "Equality & Compassion",
    sdg: "SDG 10 – Reduced Inequalities, SDG 3 – Good Health & Well-being",
    details:
      "Guru Ji emphasized care for all, irrespective of caste, creed, or religion. Connect this to IoT for healthcare, **AI in medical diagnostics, and **global digital inclusion (Tracks 1 & 3).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 16a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4zm-5-3.5c-2.42 0-3.33-1.42-3.8-3.5h7.6c-.47 2.08-1.38 3.5-3.8 3.5z" />
      </svg>
    ),
  },
  {
    title: "Environmental Harmony",
    sdg: "SDG 13 – Climate Action, SDG 12 – Responsible Consumption & Production",
    details:
      "Guru Ji taught detachment from materialism and harmony with nature. Relating this to sustainable electronics, **energy-efficient devices, and **climate modeling (Tracks 2, 4 & 6) would strengthen the link.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-7.6z" />
      </svg>
    ),
  },
  {
    title: "Community & Sacrifice",
    sdg: "SDG 17 – Partnerships for the Goals, SDG 11 – Sustainable Cities & Communities",
    details:
      "Guru Ji embodied selfless service (seva). This aligns with smart cities, **IoT for agriculture/healthcare, and **global collaborations in research (Tracks 1 & 4).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.55.74 2.37 1.83 2.37 3.45V19h4v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

// Component to render individual track details (fixed: no truncate, wraps nicely)
const TrackDetail = ({ track }: any) => (
  <div className="border border-blue-200 dark:border-blue-700 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/40 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors shadow-sm mb-6">
    <h5 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
      {track.title}
    </h5>

    <h6 className="font-semibold text-base mb-1 text-gray-800 dark:text-gray-200">
      Key Topics:
    </h6>

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-inside text-gray-600 dark:text-gray-400 ml-4 mb-3 text-sm sm:text-base">
      {track.topics.map((topic: any, index: number) => (
        <li key={index} className="whitespace-normal break-words leading-relaxed">
          {topic}
        </li>
      ))}
    </ul>

    <h6 className="font-semibold text-base mb-1 text-gray-800 dark:text-gray-200">
      SDG Alignment:
    </h6>
    <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
      {track.sdg}
    </p>
  </div>
);

// AlignmentCard unchanged (keeps original styling)
const AlignmentCard = ({ alignment }: any) => (
  <div className="p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-shadow duration-300 hover:shadow-xl">
    <div className="flex items-start mb-3">
      <div className="flex-shrink-0 mr-3 mt-1">{alignment.icon}</div>
      <div className="flex flex-col">
        <h6 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">
          {alignment.title}
        </h6>
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
          {alignment.sdg}
        </p>
      </div>
    </div>
    <p
      className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
      dangerouslySetInnerHTML={{
        __html: alignment.details.replace(/\\(.?)\\*/g, "<strong>$1</strong>"),
      }}
    />
  </div>
);

export default function data(): any {
  return (
    <>
      <Navbar />
      <LampDemo />
      <div>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-4 sm:p-8 md:p-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-100 dark:border-blue-900">
            {/* Annexure A: Detailed Schedule and Theme */}
            <section id="annexure-a" className="mb-12 scroll-mt-24">
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 border-b-2 pb-2 border-blue-100 dark:border-blue-900">
                Program Schedule & Theme
              </h3>

              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Detailed 3-Day Program
              </h4>

              {/* Schedule Table - Handles JSX content now */}
              <div className="overflow-x-auto mb-8 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="min-w-[850px] w-full text-sm sm:text-base">
                  <thead className="bg-blue-600 dark:bg-blue-700 text-white sticky top-0">
                    <tr>
                      <th className="p-3 text-left w-[12%] rounded-tl-xl">Time Slot</th>
                      <th className="p-3 text-left w-[29%]">18/12/2025 (Thu)</th>
                      <th className="p-3 text-left w-[29%]">19/12/2025 (Fri)</th>
                      <th className="p-3 text-left w-[30%] rounded-tr-xl">20/12/2025 (Sat)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {PROGRAM_SCHEDULE.map((session, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-800/70"
                        }
                      >
                        <td className="p-3 font-semibold text-blue-800 dark:text-blue-300 whitespace-nowrap align-top">
                          {session.time}
                        </td>
                        {/* Allow wrapping in table cells for long content */}
                        <td className="p-3 text-gray-700 dark:text-gray-300 align-top whitespace-normal break-words">
                          {session.day1}
                        </td>
                        <td className="p-3 text-gray-700 dark:text-gray-300 align-top whitespace-normal break-words">
                          {session.day2}
                        </td>
                        <td className="p-3 text-gray-700 dark:text-gray-300 align-top whitespace-normal break-words">
                          {session.day3 || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Information Brochure & Paper Submission Section */}
              <section
                id="brochure-download"
                className="mb-12 scroll-mt-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg border border-blue-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  Author Guidelines
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  DIECAI-2025 invites <strong>original research papers</strong> in the broad domains of the conference themes with a special focus on <strong>Sustainable Development</strong>. Papers should be <strong>6–8 pages</strong> in length and prepared according to the specified format.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  <strong>Paper presentations</strong> will be conducted in <strong>offline mode</strong>. In exceptional cases, authors may be allowed <strong>online presentations</strong> with prior approval from the Conference Committee.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Full Paper Submission Deadline:</strong>{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">25 November 2025</span>
                </p>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
                  <strong>All accepted papers in DIECAI-2025 will be published as book chapters in an edited volume (available online) with potential indexing in SCOPUS.</strong>
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/diecai-brochure.pdf">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md">
                      Download Brochure (PDF)
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Dedication and Outcome */}
              <div id="Conference-tracks" className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl border border-blue-200 dark:border-gray-600 shadow-md mb-8">
                <h4 className="text-xl font-bold mt-2 mb-3 text-blue-700 dark:text-blue-300">Conference Dedication & Theme Statement</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4 border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-1">
                  “This conference is humbly dedicated to the supreme sacrifice of Guru Tegh Bahadur Ji, whose martyrdom stands as an eternal symbol of freedom, justice, and protection of human dignity. As the world advances in electronics, communication, and AI, we draw inspiration from his teachings to ensure that innovation serves humanity, preserves equity, and supports the Sustainable Development Goals (SDGs).”
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-semibold mt-4">Conference Outcome/Declaration:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-green-500 dark:border-green-400 pl-4 py-1">
                  “Inspired by the martyrdom of Guru Tegh Bahadur Ji, ICETECAI-2025 commits to fostering innovation that upholds human dignity, reduces inequalities, and advances the SDGs in the spirit of universal compassion and justice.”
                </p>
              </div>

              {/* NEW SECTION: Aligning Teachings with SDGs */}
              <div className="mt-10">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                  Aligning Guru Tegh Bahadur Ji’s Teachings with SDGs
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SDG_ALIGNMENT_TEACHINGS.map((alignment, index) => (
                    <AlignmentCard key={index} alignment={alignment} />
                  ))}
                </div>
              </div>
            </section>

            <hr className="my-10 border-blue-200 dark:border-blue-800" />

            {/* Section 2: Tracks and SDG Details */}
            <section id="conference-tracks" className="mb-12 scroll-mt-24">
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 border-b-2 pb-2 border-blue-100 dark:border-blue-900">
                Conference Tracks and Specific SDG Alignment
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8">
                The conference is structured around 7 critical tracks, each addressing key areas of Digital Innovation and directly aligning with specific Sustainable Development Goals (SDGs).
              </p>

              <div className="grid grid-cols-1 gap-6">
                {TRACKS.map((track, index) => (
                  <TrackDetail key={index} track={track} />
                ))}
              </div>
            </section>

            <hr className="my-10 border-blue-200 dark:border-blue-800" />
            <p className="font-extrabold">
              Format of submitting Papers
              <br />
              <Button variant={"outline"} className="mt-1.5">
                <Link href={""}>Will be updated shortly...!</Link>
              </Button>
            </p>

            <hr className="my-10 border-blue-200 dark:border-blue-800" />

            <div className="scroll-mt-24">
              <h3 id="link" className="py-6">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </h3>

               <h3 id="link" className="py-6">
                Paper submissions should be made through Microsoft CMT. Please visit the submission portal below to submit your paper.
              </h3>


              <Link href="https://cmt3.research.microsoft.com/DIECAI2025"
              target="blank"
              passHref>
                <Button asChild>
                  <span>Submit Paper</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5"></div> 
      </div>
      <Footer />
    </>
  );
}
