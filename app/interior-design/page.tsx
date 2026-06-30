import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PageHero } from "@/components/sections/PageHero";
import { getProjectsBySector } from "@/content/projects";

export const metadata: Metadata = {
  title: "Interior Design & Architect",
  description:
    "Proudlock delivers design-led interiors for commercial and residential spaces across Southeast Queensland.",
};

const approach = [
  { title: "Concept & vision", description: "Translating brief into spatial concept — mood, material palette, and layout strategy." },
  { title: "Technical documentation", description: "Detailed drawings, specifications, and coordination with structural and services consultants." },
  { title: "Construction delivery", description: "In-house build capability means design intent is executed precisely, not interpreted." },
  { title: "Styling & completion", description: "FF&E procurement, styling, and final presentation." },
];

export default function InteriorDesignPage() {
  const projects = getProjectsBySector("interior-design");

  return (
    <>
      <PageHero
        eyebrow="Interior Design & Architect"
        title={<>Design that<br />performs.</>}
        subtitle="Spaces that work as well as they look — commercial and residential interiors across SEQ."
        image="/images/projects/interior-design/1.jpg"
        imageAlt="Proudlock interior design"
      />

      {/* Approach */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24 items-start">
            <AnimateIn>
              <Eyebrow className="mb-6">Approach</Eyebrow>
              <h2 className="font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">
                Design-led.<br />Build-backed.
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-[#0E0F11]/60">
                Our interior design capability sits inside the same team that builds. That means every
                design decision is tested against what can actually be built — on time, on budget,
                to specification.
              </p>
            </AnimateIn>
            <div className="flex flex-col gap-px bg-[#C4A96B]/20">
              {approach.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.07}>
                  <div className="bg-[#F5F2EC] p-8">
                    <h3 className="mb-2 font-heading text-lg font-bold text-[#0E0F11]">{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-[#0E0F11]/60">{item.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="bg-[#0E0F11] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Portfolio</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-white md:text-5xl">Interior work</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.07}>
                <ProjectCard project={project} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#3A5248] py-24">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Start a project</Eyebrow>
            <h2 className="mb-8 font-heading text-4xl font-bold text-white md:text-5xl">
              Have a space in mind?
            </h2>
            <Button href="/contact" variant="outline">Get in touch</Button>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
