import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Proudlock — commercial and residential construction across Southeast Queensland since 2014.",
};

const pillars = [
  {
    title: "Direct delivery",
    description:
      "No layers, no hand-offs. Proudlock principals are involved in every project. You speak to the people building your project, not a project manager three steps removed.",
  },
  {
    title: "At every scale",
    description:
      "From a single medical fitout to a 7,600 sqm TGA-approved facility — the same attention applies. Scale changes. Standards don't.",
  },
  {
    title: "SEQ-built expertise",
    description:
      "A decade of projects across Brisbane, Logan, Gold Coast, Sunshine Coast, and Ipswich. We know the councils, the supply chains, and the contractors.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#3A5248] pt-40 pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] items-end">
            <AnimateIn>
              <Eyebrow className="mb-6">About Proudlock</Eyebrow>
              <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white md:text-6xl">
                Built on a decade<br />of delivery.
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="font-body text-lg leading-relaxed text-white/70">
                Proudlock was established in 2014 to deliver commercial and residential construction
                across Southeast Queensland. We&apos;ve built warehouses, medical centres, retail
                fitouts, custom homes, and interior spaces — always with the same direct approach.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-white/70">
                We don&apos;t sub out strategy and deliver labour. We build what we design, and we
                design what we can build.
              </p>
            </AnimateIn>
          </div>
        </Container>
      </div>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-px bg-[#C4A96B]/20">
        {["/images/hero/warehouse-1.jpg", "/images/hero/warehouse-3.jpg", "/images/hero/warehouse-5.jpg"].map((src, i) => (
          <div key={i} className="relative aspect-[3/2] overflow-hidden bg-[#0E0F11]">
            <Image src={src} alt="Proudlock project" fill sizes="33vw" className="object-cover opacity-80" />
          </div>
        ))}
      </div>

      {/* Pillars */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">What sets us apart</Eyebrow>
            <h2 className="mb-16 font-heading text-4xl font-bold text-[#0E0F11] md:text-5xl">
              Three things we won&apos;t compromise on.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 gap-px bg-[#C4A96B]/20 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4 bg-[#F5F2EC] p-10">
                  <span className="font-heading text-[#C4A96B] text-4xl font-bold leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#0E0F11]">{pillar.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-[#0E0F11]/60">{pillar.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Licences */}
      <section className="bg-[#0E0F11] py-16">
        <Container>
          <AnimateIn>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Eyebrow className="mb-4">Licences & registrations</Eyebrow>
                <p className="font-body text-sm text-white/40">
                  ACN {site.licences.acn} · ABN {site.licences.abn} · BSA Licence {site.licences.bsa}
                </p>
              </div>
              <Button href="/contact" variant="outline">
                Work with us
              </Button>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
