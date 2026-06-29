"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

const sectorLabel: Record<string, string> = {
  commercial: "Commercial",
  residential: "Residential",
  fitout: "Fitout",
  "interior-design": "Interior Design",
};

export function ProjectsScroll({ projects }: { projects: Project[] }) {
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = [...projects, ...projects];

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setDragging(true);
    setPaused(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !trackRef.current) return;
    const delta = dragStart.current - e.clientX;
    trackRef.current.scrollLeft = scrollStart.current + delta;
  };

  const onMouseUp = () => {
    setDragging(false);
    setPaused(false);
  };

  return (
    <div
      ref={trackRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        className="flex gap-3 py-3"
        style={{
          width: "max-content",
          animation: `marquee-scroll 60s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.map((project, i) => (
          <Link
            key={`${project.slug}-${i}`}
            href={`/projects/${project.slug}`}
            draggable={false}
            className="group relative flex-shrink-0 overflow-hidden isolate"
            style={{ width: "300px", height: "420px" }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="300px"
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11]/90 via-[#0E0F11]/20 to-transparent" />
            <div className="absolute inset-0 bg-[#0E0F11]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Arrow */}
            <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-[#C4A96B]/0 text-[#C4A96B] opacity-0 transition-all duration-300 group-hover:border-[#C4A96B]/50 group-hover:opacity-100">
              <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="mb-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4A96B]">
                {sectorLabel[project.sector]} — {project.suburb}
              </p>
              <h3 className="font-heading text-lg font-bold leading-tight text-white">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
