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
      <div className="aspect-[4/5] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={priority}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0E0F11]/20 transition-opacity duration-300 group-hover:bg-[#0E0F11]/50" />
      </div>

      {/* Meta — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#C4A96B] opacity-0 transition-all duration-300 group-hover:opacity-100">
          {sectorLabel[project.sector]} — {project.suburb}
        </p>
        <h3 className="font-heading text-lg font-bold leading-tight text-white">
          {project.title}
        </h3>
      </div>

      {/* Location badge — always visible */}
      <div className="absolute left-0 bottom-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-200">
        <h3 className="font-heading text-lg font-bold leading-tight text-white drop-shadow-lg">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
