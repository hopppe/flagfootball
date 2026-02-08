"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/sponsor-${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

export default function SponsorCarousel() {
  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...sponsors, ...sponsors, ...sponsors].map((s, i) => (
            <div key={i} className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
              <Image src={s.src} alt={s.alt} width={120} height={60} className="grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
