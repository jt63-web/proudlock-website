import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PageHero } from "@/components/sections/PageHero";
import { getProjectsBySector } from "@/content/projects";

export const metadata: Metadata = {
  title: "Residential Construction",
  description:
    "Proudlock builds custom homes and residential projects across Southeast Queensland. Renovations, apartments, and bespoke builds.",
};

const capabilities = [
  { title: "Custom Homes", description: "From design brief to handover — bespoke homes built to your specification." },
  { title: "Renovations", description: "House, apartment, and bathroom renovations. Structural and cosmetic." },
  { title: "Apartment Projects", description: "Multi-unit residential projects for investors and developers." },
  { title: "Extensions", description: "Additions and extensions — new rooms, upper levels, entertaining areas." },
];

const process = [
  { step: "01", title: "Consultation", description: "Site visit, brief review, preliminary budget and programme." },
  { step: "02", title: "Design & approvals", description: "Coordinate architects, engineers, and council approvals." },
  { step: "03", title: "Construction", description: "Professional on-site delivery with scheduled progress updates." },
  { step: "04", title: "Handover", description: "Defects-free completion and a home ready to move into." },
];

export default function ResidentialPage() {
  const projects = getProjectsBySector("residential");

  return (
    <>
      <PageHero
        eyebrow="Residential Construction"
        title="Homes built<br/>to endure."
        subtitle="Custom homes, renovations, and residential projects across Southeast Queensland."
        image="/images/projects/custom-homes/1.jpg"
        imageAlt="Proudlock custom home construction"
      />

      {/* Capabilities */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Capabilities</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">What we build</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-[#C4A96B]/20 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <AnimateIn key={cap.title} delay={i * 0.06}>
                <div className="bg-[#F5F2EC] p-10">
                  <h3 className="mb-3 font-heading text-xl font-bold text-[#0E0F11]">{cap.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-[#0E0F11]/60">{cap.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-[#3A5248] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Process</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-white md:text-5xl">How we work</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.08}>
                <div className="border-t border-[#C4A96B]/30 pt-8">
                  <p className="mb-4 font-heading text-xs font-bold text-[#C4A96B]">{step.step}</p>
                  <h3 className="mb-3 font-heading text-xl font-bold text-white">{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="bg-[#0E0F11] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Portfolio</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-white md:text-5xl">Residential work</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
            {projects.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F2EC] py-24">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Get started</Eyebrow>
            <h2 className="mb-8 font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">Ready to build?</h2>
            <Button href="/contact" className="bg-[#3A5248]">Talk to us</Button>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
