"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const phases = [
  {
    src: "/images/build-sequence/phase-1.png",
    label: "Site cleared",
    sub: "Red Queensland clay — day one",
  },
  {
    src: "/images/build-sequence/phase-2.png",
    label: "Slab poured",
    sub: "Reinforced concrete ground slab",
  },
  {
    src: "/images/build-sequence/phase-3.png",
    label: "Panels cast",
    sub: "Tilt-up precast concrete on slab",
  },
  {
    src: "/images/build-sequence/phase-4.png",
    label: "Panels erected",
    sub: "Mobile crane tilt operation",
  },
  {
    src: "/images/build-sequence/phase-5.png",
    label: "Structure complete",
    sub: "Roof, cladding and glazing installed",
  },
  {
    src: "/images/build-sequence/phase-6.jpg",
    label: "Delivered",
    sub: "Est. 2014 — Southeast Queensland",
  },
];

const n = phases.length;
const CROSSFADE = 0.07;

function getOpacityRange(index: number): { input: number[]; output: number[] } {
  const start = index / n;
  const end = (index + 1) / n;

  if (index === 0) {
    return {
      input: [0, end - CROSSFADE, end + CROSSFADE],
      output: [1, 1, 0],
    };
  }
  if (index === n - 1) {
    return {
      input: [0, start - CROSSFADE, start + CROSSFADE, 1],
      output: [0, 0, 1, 1],
    };
  }
  return {
    input: [0, start - CROSSFADE, start + CROSSFADE, end - CROSSFADE, end + CROSSFADE, 1],
    output: [0, 0, 1, 1, 0, 0],
  };
}

function PhaseImage({
  src,
  index,
  progress,
}: {
  src: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const { input, output } = getOpacityRange(index);
  const opacity = useTransform(progress, input, output);

  const start = index / n;
  const end = (index + 1) / n;
  const scale = useTransform(progress, [start, end], [1.0, 1.04]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          priority={index === 0}
          sizes="100vw"
        />
      </motion.div>
    </motion.div>
  );
}

function PhaseCounter({ progress }: { progress: MotionValue<number> }) {
  const [current, setCurrent] = useState(1);

  useMotionValueEvent(progress, "change", (v) => {
    const phase = Math.min(Math.floor(v * n) + 1, n);
    setCurrent(phase);
  });

  return (
    <div className="absolute top-24 right-6 md:right-16 text-right pointer-events-none">
      <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/25">
        {String(current).padStart(2, "0")} / {String(n).padStart(2, "0")}
      </span>
    </div>
  );
}

function ProgressBar({ progress }: { progress: MotionValue<number> }) {
  const scaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 pointer-events-none">
      <motion.div
        className="h-full bg-[#C4A96B] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

function ScrollHint({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 1 / n - 0.05], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 md:flex pointer-events-none"
      style={{ opacity }}
      aria-hidden="true"
    >
      <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-white/30">
        Scroll
      </span>
      <motion.div
        className="h-10 w-px bg-gradient-to-b from-[#C4A96B]/60 to-transparent"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// Phases run over the first 75% of scroll — last 25% is dwell on final image
const PHASE_END = 0.58;

export function BuildSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map raw scroll 0→PHASE_END to phase progress 0→1, clamped at 1
  const phaseProgress = useTransform(scrollYProgress, [0, PHASE_END], [0, 1], { clamp: true });

  // Hero text appears as last phase comes in, stays through the dwell
  const heroOpacity = useTransform(
    scrollYProgress,
    [PHASE_END - 0.08, PHASE_END + 0.04],
    [0, 1],
    { clamp: true }
  );
  const heroY = useTransform(
    scrollYProgress,
    [PHASE_END - 0.08, PHASE_END + 0.04],
    [24, 0],
    { clamp: true }
  );

  return (
    <div ref={containerRef} className="relative h-[1100vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0E0F11]">

        {/* Phase images — driven by phaseProgress (clamped 0→1) */}
        {phases.map((phase, i) => (
          <PhaseImage
            key={phase.src}
            src={phase.src}
            index={i}
            progress={phaseProgress}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11]/85 via-[#0E0F11]/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F11]/50 via-transparent to-transparent pointer-events-none" />

        {/* Final hero text — appears on phase 6, stays through dwell */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 pointer-events-none"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16">
            <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A96B]">
              Est. 2014 — Southeast Queensland
            </p>
            <h1 className="mb-6 max-w-4xl font-heading text-6xl font-bold leading-[1.0] tracking-[-0.02em] text-white md:text-8xl lg:text-[7rem]">
              Built{" "}
              <span style={{ color: "#C4A96B" }}>
                across
              </span>
              <br />Southeast<br />Queensland.
            </h1>
            <p className="mb-10 max-w-md font-body text-lg text-white/60">
              Partners in building your vision.
            </p>
            <div className="flex flex-wrap gap-4 pointer-events-auto">
              <Button href="/projects">View our work</Button>
              <Button href="/contact" variant="outline">Get in touch</Button>
            </div>
          </div>
        </motion.div>

        {/* UI chrome — phase counter uses phaseProgress, scroll hint uses raw */}
        <PhaseCounter progress={phaseProgress} />
        <ProgressBar progress={scrollYProgress} />
        <ScrollHint progress={scrollYProgress} />
      </div>
    </div>
  );
}
