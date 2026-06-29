import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";
import { HeroHome } from "@/components/sections/HeroHome";
import { Marquee } from "@/components/sections/Marquee";

export const metadata: Metadata = {
  title: "Proudlock — Commercial & Residential Construction, Southeast Queensland",
  description:
    "Built across Southeast Queensland since 2014. Commercial warehouses, industrial fitouts, custom homes, and interior design.",
};

const services = [
  {
    title: "Commercial Construction",
    description: "Warehouses, industrial facilities, office fitouts, refurbishments, hard landscaping.",
    href: "/commercial",
    image: "/images/hero/warehouse-1.jpg",
  },
  {
    title: "Residential Construction",
    description: "Custom homes, apartment projects, renovations — built to endure.",
    href: "/residential",
    image: "/images/projects/custom-homes/1.jpg",
  },
  {
    title: "Interior Design & Architect",
    description: "Design-led interiors for commercial and residential spaces.",
    href: "/interior-design",
    image: "/images/projects/interior-design/1.jpg",
  },
];

export default function Home() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <>
      <HeroHome />
      <Marquee />

      {/* Intro */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24 items-end">
            <AnimateIn>
              <Eyebrow className="mb-6">Southeast Queensland</Eyebrow>
              <h2 className="font-heading text-5xl font-bold leading-[1.05] text-[#0E0F11] md:text-6xl">
                Industrial scale.<br />
                Editorial detail.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="font-body text-lg leading-relaxed text-[#0E0F11]/70">
                Proudlock has been building across Southeast Queensland since 2014. We deliver commercial
                warehouses, industrial fitouts, custom homes, and interior design — at every scale, from
                a single retail fitout to a 7,600 sqm TGA-approved manufacturing facility.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-[#0E0F11]/70">
                Our work is measured in square metres, not promises.
              </p>
              <Button href="/about" variant="outline" className="mt-10 border-[#3A5248] text-[#3A5248] hover:bg-[#3A5248] hover:text-white">
                About Proudlock
              </Button>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[#0E0F11] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">What we build</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-white md:text-5xl">
              Three disciplines.<br />One team.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.08}>
                <Link href={service.href} className="group relative flex flex-col overflow-hidden bg-[#0E0F11]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-70 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <h3 className="mb-3 font-heading text-2xl font-bold text-white">{service.title}</h3>
                      <p className="font-body text-sm leading-relaxed text-white/50">{service.description}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#C4A96B] transition-all duration-200 group-hover:gap-3">
                      Explore
                      <svg className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <Container>
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <AnimateIn>
              <Eyebrow className="mb-4">Portfolio</Eyebrow>
              <h2 className="font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">Selected work</h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <Button href="/projects" variant="outline" className="border-[#3A5248] text-[#3A5248] hover:bg-[#3A5248] hover:text-white self-start sm:self-auto">
                All projects
              </Button>
            </AnimateIn>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#C4A96B]/20 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} priority={i < 3} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="bg-[#3A5248] py-20">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-4">By the numbers</Eyebrow>
            <h2 className="mb-12 font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              A decade of delivery<br />across SEQ.
            </h2>
          </AnimateIn>
          <StatsStrip stats={site.stats} />
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-[#0E0F11] py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <AnimateIn>
              <Eyebrow className="mb-6">Start a conversation</Eyebrow>
              <h2 className="mb-6 font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
                Have a project<br />in mind?
              </h2>
              <p className="mb-10 font-body text-lg text-white/60">
                Commercial, residential, or fitout — tell us what you&apos;re building and we&apos;ll tell you
                how we can help.
              </p>
              <Button href="/contact">Get in touch</Button>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
