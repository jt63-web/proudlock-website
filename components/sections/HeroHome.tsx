"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export function HeroHome() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[600px] items-end overflow-hidden bg-[#0E0F11]"
      aria-label="Hero"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/hero/warehouse-1.jpg"
          alt="Proudlock commercial warehouse construction, Southeast Queensland"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </motion.div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] via-[#0E0F11]/30 to-transparent" />

      {/* Content fades as you scroll */}
      <motion.div className="relative w-full pb-20 md:pb-28" style={{ opacity }}>
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A96B]"
          >
            Est. 2014 — Southeast Queensland
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-3xl font-heading text-5xl font-bold leading-[1.02] text-white md:text-7xl lg:text-8xl"
          >
            Built across<br />
            Southeast<br />
            Queensland.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-md font-body text-lg text-white/60"
          >
            Partners in building your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/projects">View our work</Button>
            <Button href="/contact" variant="outline">Get in touch</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 md:flex"
        aria-hidden="true"
        style={{ opacity }}
      >
        <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-white/30">Scroll</span>
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
