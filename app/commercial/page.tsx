import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PageHero } from "@/components/sections/PageHero";
import { getProjectsBySector } from "@/content/projects";

export const metadata: Metadata = {
  title: "Commercial Construction",
  description:
    "Proudlock builds commercial warehouses, industrial facilities, office fitouts, and refurbishments across Southeast Queensland.",
};

const capabilities = [
  { title: "Warehouses & Industrial", description: "Tilt-panel, steel-frame, and hybrid structures up to 10,000 sqm. Mezzanines, high clearance, hardstand." },
  { title: "Office Fitouts", description: "End-to-end fitouts from shell to occupation-ready — joinery, services, finishes." },
  { title: "Medical & Specialist Fitouts", description: "Healthcare-compliant builds. TGA-approved facilities, medical centres, specialist clinics." },
  { title: "Retail & Hospitality", description: "Food production kitchens, cafes, retail shops — built to brand spec and food-grade standards." },
  { title: "Refurbishments", description: "Existing building upgrades — facades, interiors, plant and equipment replacement." },
  { title: "Hard Landscaping", description: "Concrete hardstand, retaining structures, external civil works." },
];

const process = [
  { step: "01", title: "Brief & scope", description: "We work through your requirements — site, size, budget, timeline — and identify what's achievable." },
  { step: "02", title: "Design & approvals", description: "Our team coordinates design consultants and manages planning and building approval submissions." },
  { step: "03", title: "Construction", description: "On-site delivery with regular reporting. No surprises, no excuses." },
  { step: "04", title: "Handover", description: "Practical completion, defects period, and post-handover support." },
];

export default function CommercialPage() {
  const projects = getProjectsBySector("commercial");
  const fitouts = getProjectsBySector("fitout");
  const allCommercial = [...projects, ...fitouts];

  return (
    <>
      <PageHero
        eyebrow="Commercial Construction"
        title="Built for business."
        subtitle="From industrial warehouses to specialist medical fitouts — we deliver commercial builds that perform."
        image="/images/hero/warehouse-1.jpg"
        imageAlt="Proudlock commercial warehouse construction"
      />

      {/* Capabilities */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Capabilities</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">
              What we deliver
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-[#C4A96B]/20 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <AnimateIn key={cap.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-[#F5F2EC] p-8">
                  <h3 className="mb-3 font-heading text-lg font-bold text-[#0E0F11]">{cap.title}</h3>
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
            <h2 className="mb-16 font-heading text-4xl font-bold text-white md:text-5xl">
              How we work
            </h2>
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
            <Eyebrow className="mb-6">Selected projects</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-white md:text-5xl">
              Commercial work
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {allCommercial.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.05} className="h-full">
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
            <h2 className="mb-8 font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">
              Ready to build?
            </h2>
            <Button href="/contact" className="bg-[#3A5248]">Talk to us</Button>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
