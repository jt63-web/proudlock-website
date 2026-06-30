"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function VideoHero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#0E0F11]" aria-label="Hero">

      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        aria-hidden="true"
      >
        <source src="/videos/warehouse-walkthrough.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] via-[#0E0F11]/25 to-[#0E0F11]/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F11]/70 via-[#0E0F11]/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end pb-20 md:pb-32">
        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3, ease }}
            className="mb-5 flex items-center gap-3 font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C4A96B]"
          >
            <span className="block h-px w-6 bg-[#C4A96B]" />
            Est. 2014
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 3.2, ease }}
            className="mb-7 font-heading text-5xl font-bold leading-[1.0] tracking-[-0.025em] text-white sm:text-6xl md:text-8xl lg:text-[7.5rem]"
          >
            Built{" "}
            <span style={{ color: "#C4A96B" }}>across</span>
            <br />Southeast<br />Queensland.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease }}
            className="mb-10 max-w-sm font-body text-base leading-relaxed text-white/55 md:text-lg"
          >
            Partners in building your vision.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.7, ease }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/projects">View our work</Button>
            <Button href="/contact" variant="outline">Get in touch</Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 md:flex pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-heading text-[9px] uppercase tracking-[0.3em] text-white/25">Scroll</span>
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-[#C4A96B]/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
}
