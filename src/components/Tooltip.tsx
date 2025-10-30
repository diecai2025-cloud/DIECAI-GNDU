"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
export const people = [
  {
    id: 1,
    name: "INDIAN SOCIETY FOR TECHNICAL EDUCATION.",
    designation: "ISTE",
    image:
      "/tooltip-icons/ISTE.png",
  },
  {
    id: 2,
    name: "IEEE Chandigarh Subsection",
    designation: "Chandigarh",
    image:
      "/tooltip-icons/chandigarh-section.png",
  },
  {
    id: 3,
    name: "IEEE Delhi Section",
    designation: "Delhi",
    image:
      "/tooltip-icons/delhi-section.png",
  },
  {
    id: 4,
    name: "IEEE Photonics Society",
    designation: "Delhi Section Chapter",
    image:
      "/tooltip-icons/photonics.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
