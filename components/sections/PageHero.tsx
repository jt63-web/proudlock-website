"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-[#0E0F11]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] via-[#0E0F11]/20 to-transparent" />
      <div className="relative w-full pb-16 md:pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            <h1 className="font-heading text-5xl font-bold leading-[1.04] text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-xl font-body text-lg text-white/60">{subtitle}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
