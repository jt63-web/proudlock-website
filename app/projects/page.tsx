import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Proudlock's portfolio of commercial, residential, fitout, and interior design projects across Southeast Queensland.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#0E0F11] pt-40 pb-16">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Portfolio</Eyebrow>
            <h1 className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              All projects
            </h1>
          </AnimateIn>
        </Container>
      </div>

      {/* Filterable grid */}
      <section className="bg-[#F5F2EC] py-16 md:py-24">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>
    </>
  );
}
