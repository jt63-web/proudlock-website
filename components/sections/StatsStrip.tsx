"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "./AnimateIn";

interface Stat {
  readonly value: string;
  readonly label: string;
}

export function StatsStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <AnimateIn key={stat.label} delay={i * 0.1}>
          <motion.div
            className="group flex flex-col gap-2 bg-[#0E0F11] p-5 md:p-8 transition-colors duration-300 hover:bg-[#3A5248]/40 cursor-default"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <dt className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A96B]/60 transition-colors duration-300 group-hover:text-[#C4A96B]">
              {stat.label}
            </dt>
            <dd className="font-heading text-3xl font-bold text-white md:text-4xl">
              {stat.value}
            </dd>
          </motion.div>
        </AnimateIn>
      ))}
    </div>
  );
}
