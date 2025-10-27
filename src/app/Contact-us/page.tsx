"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-100 to-white dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100 py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reach out to us for any inquiries regarding{" "}
              <span className="font-semibold text-blue-700 dark:text-cyan-300">
                DIECAI-2025
              </span>
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Email Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-transform duration-300 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
                  <Mail className="h-5 w-5" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  For sponsorship, paper submissions, and registration-related
                  queries:
                </p>
                <hr />
                {[
                  "diecai2025@gmail.com",
                  "rajandeep.ece@gndu.ac.in",
                  "kuldeep.ece@gndu.ac.in",
                ].map((email, i) => (
                  <Button
                    key={i}
                    variant="link"
                    className="w-full text-blue-600 dark:text-blue-400 hover:underline"
                    asChild
                  >
                    <a href={`mailto:${email}`} rel="noopener noreferrer">
                      {email}
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-transform duration-300 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
                  <Phone className="h-5 w-5" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  For direct communication with the organizing team:
                </p>
                <hr />
                {[
                  { num: "+91 94171 43244" },
                  { num: "+91 97795 40889" },
                ].map((p, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    className="w-full text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
                    asChild
                  >
                    <a href={`tel:${p.num.replace(/\s/g, "")}`}>{p.num}</a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Location Section */}
          <Card className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
                <MapPin className="h-5 w-5" /> Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10">
              <p className="text-gray-700 dark:text-gray-300">
                Department of Electronics Technology, Guru Nanak Dev University,
                Amritsar, Punjab - 143005, India
              </p>

              {/* Main Location Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.386119874418!2d74.8124178088299!3d31.638052136561516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196526b773175d%3A0xb78109348cd540b!2sGuru%20Nanak%20Dev%20University%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1760269865561!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>

              <hr className="my-10 border-blue-200 dark:border-gray-700" />

              {/* Ways to Reach */}
              <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
                <MapPin className="h-5 w-5" /> Ways to Reach
              </CardTitle>

              {[
                {
                  name: "Sri Guru Ram Dass Jee International Airport",
                  link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.376081145156!2d74.80428947568929!3d31.705620274129668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196609c25343eb%3A0x2284aab8b51ba16d!2sSri%20Guru%20Ram%20Dass%20Jee%20International%20Airport%2C%20Amritsar!5e0!3m2!1sen!2sin!4v1761299692670!5m2!1sen!2sin",
                },
                {
                  name: "Amritsar Junction Railway Station",
                  link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0249744378552!2d74.86448957568643!3d31.63316657416256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964ade3518571%3A0x9830f5a8a5157f36!2sAmritsar%20Junction!5e0!3m2!1sen!2sin!4v1761300304029!5m2!1sen!2sin",
                },
                {
                  name: "Amritsar Bus Stand",
                  link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13588.708468984527!2d74.87375923503369!3d31.629000580643826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196352cf6525f5%3A0x3f4411fa6a476a27!2sAmritsar%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1761300680345!5m2!1sen!2sin",
                },
              ].map((place, i) => (
                <div key={i} className="space-y-3">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <iframe
                      src={place.link}
                      width="100%"
                      height="300"
                      allowFullScreen
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {place.name}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Accommodation Section */}
          <Card id="accommodation" className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black border border-blue-200 dark:border-gray-700 shadow-lg backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-cyan-400">
                <Home className="h-5 w-5" /> Accommodation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Limited accommodation is available within the{" "}
                <span className="font-semibold text-blue-700 dark:text-cyan-300">
                  GNDU campus
                </span>{" "}
                on a prior request basis with applicable charges. Participants
                are encouraged to make their own arrangements for transport and
                accommodation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
}
