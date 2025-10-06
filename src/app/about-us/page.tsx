"use client";

import Navbar from "@/components/Navbar";
import LampDemo from "@/components/ui/lamp";
import AboutPageText from "@/components/AboutPageText";
import Footer from "@/components/Footer"

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <LampDemo />
      <AboutPageText />
      <Footer />
    </div>
  );
}


export default Page;
