import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Proudlock — commercial and residential construction across Southeast Queensland.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#0E0F11] pt-40 pb-20">
        <Container>
          <AnimateIn>
            <Eyebrow className="mb-6">Contact</Eyebrow>
            <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">
              Let&apos;s talk about<br />your project.
            </h1>
          </AnimateIn>
        </Container>
      </div>

      <section className="bg-[#F5F2EC] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
            {/* Left: details */}
            <AnimateIn>
              <div className="lg:sticky lg:top-28">
                <p className="mb-10 font-body text-lg leading-relaxed text-[#0E0F11]/70">
                  Commercial or residential — tell us what you&apos;re planning and we&apos;ll get back to you
                  within one business day.
                </p>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#C4A96B]">Address</p>
                    <address className="not-italic font-body text-sm text-[#0E0F11]/70">{site.address.full}</address>
                  </div>
                  <div>
                    <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#C4A96B]">Email</p>
                    <a href={`mailto:${site.contact.email}`} className="font-body text-sm text-[#0E0F11]/70 hover:text-[#3A5248]">
                      {site.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#C4A96B]">Phone</p>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="font-body text-sm text-[#0E0F11]/70 hover:text-[#3A5248]">
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-10 overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=20+Davrod+St+Robertson+QLD+4109&output=embed"
                    width="100%"
                    height="240"
                    className="border-0 grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Proudlock office location"
                    aria-label="Map showing Proudlock office at 20 Davrod St, Robertson QLD 4109"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Right: form */}
            <AnimateIn delay={0.1}>
              <ContactForm />
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
