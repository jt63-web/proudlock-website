"use client";

import { useState } from "react";
import { Project, ProjectSector } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { AnimateIn } from "./AnimateIn";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: Project[];
}

const filters: { label: string; value: ProjectSector | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Fitout", value: "fitout" },
  { label: "Residential", value: "residential" },
  { label: "Interior Design", value: "interior-design" },
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectSector | "all">("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.sector === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "font-heading text-xs font-semibold uppercase tracking-[0.15em] px-5 py-2.5 transition-all duration-200",
              active === f.value
                ? "bg-[#3A5248] text-[#C4A96B]"
                : "border border-[#0E0F11]/20 text-[#0E0F11]/60 hover:border-[#3A5248] hover:text-[#3A5248]",
            )}
            aria-pressed={active === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-px bg-[#C4A96B]/20 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <AnimateIn key={project.slug} delay={i * 0.04}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center font-body text-[#0E0F11]/40">No projects in this category yet.</p>
      )}
    </>
  );
}
