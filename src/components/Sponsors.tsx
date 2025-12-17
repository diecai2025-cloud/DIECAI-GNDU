"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const sponsors = [
  "/sponsors/1.png",
  "/sponsors/2.png",
  "/sponsors/3.jpeg",
  "/sponsors/4.png",
  "/sponsors/5.png",
  "/sponsors/6.jpeg",
  "/sponsors/7.jpeg"
 
];

export default function SponsorsMarquee() {
  return (
    <section className="w-full py-12 overflow-hidden bg-background">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Our Sponsors
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {[...sponsors, ...sponsors].map((logo, index) => (
            <Card
              key={index}
              className="
                w-48 h-24 flex items-center justify-center
                bg-white dark:bg-muted
                border border-border
              "
            >
              <CardContent className="p-4 flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Sponsor logo"
                  width={140}
                  height={60}
                  className="
                    object-contain
                    transition-all duration-300
                    dark:brightness-90 dark:contrast-125
                    hover:brightness-100
                  "
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
