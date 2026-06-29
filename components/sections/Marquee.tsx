"use client";

import { motion } from "framer-motion";

const items = [
  "Brisbane",
  "Gold Coast",
  "Sunshine Coast",
  "Ipswich",
  "Logan",
  "Meadowbrook",
  "Kingston",
  "Robertson",
  "Underwood",
  "Berrinba",
  "Tingalpa",
];

export function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-[#C4A96B]/20 bg-[#3A5248] py-4"
      aria-hidden="true"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A96B]/60"
          >
            {item}
            <span className="mx-8 text-[#C4A96B]/30">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
