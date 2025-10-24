"use client";

import Navbar from "@/components/Navbar";
import LampDemo from "@/components/ui/lamp";
import AboutPageText from "@/components/AboutPageText";
import Footer from "@/components/Footer"
import Department from "@/components/Department";

function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <LampDemo />
      <Department />
      <AboutPageText />
      <Footer />
    </div>
  );
}


export default Page;
