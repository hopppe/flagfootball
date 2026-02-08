"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teams = [
  { src: "/images/teams/ballhawks.png", alt: "Ball Hawks" },
  { src: "/images/teams/cobras.png", alt: "Dhahran Cobras" },
  { src: "/images/teams/eagles.png", alt: "Dammam Eagles" },
  { src: "/images/teams/jaws.png", alt: "Jeddah Jaws" },
  { src: "/images/teams/reapers.png", alt: "Rush Reapers" },
  { src: "/images/teams/rebels.png", alt: "Riyadh Rebels" },
  { src: "/images/teams/hunters.png", alt: "Hunters" },
  { src: "/images/teams/tigers.png", alt: "Jeddah Tigers" },
  { src: "/images/teams/albaharah.png", alt: "Jeddah Al Baharah" },
  { src: "/images/partners/bridgeway.png", alt: "Bridgeway Sports" },
  { src: "/images/partners/teamup.png", alt: "TeamUp Sports" },
];

export default function SponsorCarousel() {
  const doubled = [...teams, ...teams, ...teams];
  return (
    <section className="py-8 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="relative">
        <motion.div
          className="flex gap-16 items-center px-10"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((s, i) => (
            <div key={i} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={s.src}
                alt={s.alt}
                width={100}
                height={100}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
