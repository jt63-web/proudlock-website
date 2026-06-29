import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { projects, getProjectBySlug } from "@/content/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
    openGraph: { images: [{ url: project.coverImage }] },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <>
      {/* Hero */}
      <div className="relative h-[80vh] min-h-[500px] bg-[#0E0F11]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <Container>
            <AnimateIn>
              <Eyebrow className="mb-4">{project.sector} — {project.suburb}</Eyebrow>
              <h1 className="font-heading text-4xl font-bold text-white md:text-6xl">{project.title}</h1>
            </AnimateIn>
          </Container>
        </div>
      </div>

      {/* Overview + stats */}
      <section className="bg-[#F5F2EC] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.5fr_1fr] items-start">
            <AnimateIn>
              <Eyebrow className="mb-6">Overview</Eyebrow>
              <p className="font-body text-xl leading-relaxed text-[#0E0F11]/80">{project.overview}</p>
            </AnimateIn>
            {project.stats && project.stats.length > 0 && (
              <AnimateIn delay={0.1}>
                <StatBlock stats={project.stats} />
              </AnimateIn>
            )}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.images.length > 1 && (
        <section className="bg-[#0E0F11] py-20 md:py-28">
          <Container>
            <AnimateIn>
              <Eyebrow className="mb-12">Gallery</Eyebrow>
            </AnimateIn>
            <div className="columns-1 gap-px sm:columns-2 lg:columns-3">
              {project.images.map((src, i) => (
                <AnimateIn key={src} delay={i * 0.04} className="mb-px break-inside-avoid">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <Image
                      src={src}
                      alt={`${project.title} — image ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Prev / Next */}
      <nav className="bg-[#3A5248]" aria-label="Project navigation">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group flex flex-col gap-1 border-r border-[#C4A96B]/20 p-8 transition-colors hover:bg-[#4a6659]">
              <span className="font-heading text-xs uppercase tracking-widest text-[#C4A96B]/60">Previous</span>
              <span className="font-heading text-xl font-bold text-white group-hover:text-[#C4A96B] transition-colors">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group flex flex-col gap-1 p-8 text-right transition-colors hover:bg-[#4a6659]">
              <span className="font-heading text-xs uppercase tracking-widest text-[#C4A96B]/60">Next</span>
              <span className="font-heading text-xl font-bold text-white group-hover:text-[#C4A96B] transition-colors">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>

      {/* Back + CTA */}
      <section className="bg-[#0E0F11] py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Button href="/projects" variant="ghost" className="text-white/60 hover:text-white">
            ← All projects
          </Button>
          <Button href="/contact">Start a project</Button>
        </Container>
      </section>
    </>
  );
}
