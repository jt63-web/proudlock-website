import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

const sectorLabel: Record<string, string> = {
  commercial: "Commercial",
  residential: "Residential",
  fitout: "Fitout",
  "interior-design": "Interior Design",
};

export function ProjectCard({ project, className, priority }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group relative block overflow-hidden bg-[#0E0F11]", className)}
      aria-label={`View project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={priority}
        />

        {/* Default gradient — fades out on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11]/75 via-transparent to-transparent transition-opacity duration-[400ms] group-hover:opacity-0" />

        {/* Hover overlay — fades in */}
        <div className="absolute inset-0 bg-[#0E0F11]/55 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100" />

        {/* Arrow icon — top right, appears on hover */}
        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-[#C4A96B]/0 bg-[#C4A96B]/0 opacity-0 transition-all duration-300 group-hover:border-[#C4A96B]/60 group-hover:bg-[#C4A96B]/10 group-hover:opacity-100">
          <svg className="size-4 text-[#C4A96B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Default label — visible when not hovered */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-1">
        <h3 className="font-heading text-lg font-bold leading-tight text-white drop-shadow-lg">
          {project.title}
        </h3>
      </div>

      {/* Hover label — slides up, invisible by default */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mb-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C4A96B]">
          {sectorLabel[project.sector]} — {project.suburb}
        </p>
        <h3 className="font-heading text-lg font-bold leading-tight text-white">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
