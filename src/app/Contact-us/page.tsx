"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 py-12 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Reach out to us for any inquiries regarding DIECAI-2025
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Email Card */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                  <Mail className="h-5 w-5" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For any paper submissions, sponsorships, or queries:
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="mailto:info@gndu.ac.in"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    info@gndu.ac.in
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                  <Phone className="h-5 w-5" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For direct communication with the organizing team:
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="tel:+911832254000"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    +91 183 225 4000
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location Section */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                <MapPin className="h-5 w-5" /> Our Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Department of Electronics Technology, Guru Nanak Dev University, Amritsar, Punjab - 143005, India
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.386119874418!2d74.8124178088299!3d31.638052136561516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196526b773175d%3A0xb78109348cd540b!2sGuru%20Nanak%20Dev%20University%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1760269865561!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
