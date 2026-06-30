import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProjectsScroll } from "@/components/sections/ProjectsScroll";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";
import { VideoHero } from "@/components/sections/VideoHero";
import { Marquee } from "@/components/sections/Marquee";

export const metadata: Metadata = {
  title: "Proudlock — Commercial & Residential Construction, Southeast Queensland",
  description:
    "Built across Southeast Queensland since 2014. Commercial warehouses, industrial fitouts, custom homes, and interior design.",
};

const services = [
  {
    num: "01",
    title: "Commercial Construction",
    description: "Warehouses, industrial facilities, tilt-up precast, office fitouts and hard landscaping.",
    href: "/commercial",
  },
  {
    num: "02",
    title: "Residential",
    description: "Custom homes, apartment projects, renovations — built to endure.",
    href: "/residential",
  },
  {
    num: "03",
    title: "Interior Design",
    description: "Design-led interiors for commercial and residential spaces.",
    href: "/interior-design",
  },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <VideoHero />
      <Marquee />

      {/* Intro — split two-column */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: dark, headline + stats */}
        <div className="bg-[#0E0F11] px-8 py-20 md:px-14 md:py-28 lg:px-16">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-[#C4A96B]" />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C4A96B]">
                Who we are
              </span>
            </div>
            <h2 className="font-heading text-5xl font-bold leading-[1.02] tracking-[-0.02em] text-white md:text-6xl">
              Industrial scale.<br />
              Editorial detail.
            </h2>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {site.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl font-bold tracking-[-0.02em] text-[#C4A96B]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 font-heading text-[10px] uppercase tracking-[0.18em] text-white/30">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Right: cream, body copy */}
        <div className="bg-[#F5F2EC] px-8 py-20 md:px-14 md:py-28 lg:px-16">
          <AnimateIn delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-[#3A5248]" />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-[#3A5248]">
                Our approach
              </span>
            </div>
            <p className="font-heading text-3xl font-bold leading-[1.1] tracking-[-0.01em] text-[#0E0F11] md:text-4xl">
              Work measured in<br />square metres,<br />not promises.
            </p>
            <p className="mt-8 font-body text-base leading-relaxed text-[#0E0F11]/60">
              Proudlock has been building across Southeast Queensland since 2014. We deliver commercial
              warehouses, industrial fitouts, custom homes, and interior design — at every scale, from
              a single retail fitout to a 7,600 sqm TGA-approved manufacturing facility.
            </p>
            <Button href="/about" variant="outline" className="mt-10 border-[#3A5248] text-[#3A5248]">
              About Proudlock
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Services — numbered editorial grid */}
      <section className="bg-[#0E0F11]">
        <div className="border-b border-white/08 px-8 py-14 md:px-14 lg:px-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#C4A96B]" />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C4A96B]">
                What we build
              </span>
            </div>
            <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
              Three disciplines.<br />One team.
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group flex flex-col justify-between gap-10 px-8 py-12 md:px-10 md:py-14 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <div>
                  <div className="mb-8 font-heading text-[11px] font-bold tracking-[0.22em] text-white/15">
                    {service.num}
                  </div>
                  <h3 className="mb-4 font-heading text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-white/40">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4A96B] transition-all duration-200 group-hover:gap-3">
                  Explore
                  <svg className="size-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Projects — horizontal auto-scroll */}
      <section className="bg-[#0E0F11] border-t border-white/08 pb-0">
        <div className="px-8 py-14 md:px-14 lg:px-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#C4A96B]" />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C4A96B]">
                Portfolio
              </span>
            </div>
            <h2 className="font-heading text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
              Selected work
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex items-center gap-6">
              <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-white/30 hidden sm:block">
                Drag to explore
              </span>
              <Button href="/projects" variant="outline">All projects</Button>
            </div>
          </AnimateIn>
        </div>
        <AnimateIn direction="none">
          <ProjectsScroll projects={featured} />
        </AnimateIn>
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
