import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

const footerNav = [
  {
    heading: "Services",
    links: [
      { label: "Commercial Construction", href: "/commercial" },
      { label: "Residential Construction", href: "/residential" },
      { label: "Interior Design & Architect", href: "/interior-design" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0E0F11] text-white/60" role="contentinfo">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_auto_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Proudlock — home">
              <Image
                src="/images/logos/proudlock-logo.png"
                alt="Proudlock"
                width={64}
                height={64}
                className="mb-6 h-16 w-16 object-contain"
              />
            </Link>
            <p className="max-w-xs font-body text-sm leading-relaxed text-white/50">
              Commercial and residential construction across Southeast Queensland.
              <br />
              <span className="text-white/30">Established {site.established}.</span>
            </p>
            <address className="mt-6 not-italic font-body text-sm text-white/40">
              {site.address.full}
            </address>
            <p className="mt-1 font-body text-sm text-white/40">{site.contact.email}</p>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A96B]">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:text-right">
            <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A96B]">
              Service area
            </p>
            <p className="font-body text-sm leading-relaxed text-white/50">
              Brisbane · Gold Coast<br />
              Sunshine Coast · Ipswich<br />
              Logan · SEQ
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Proudlock. All rights reserved.</p>
          <p className="font-body">
            ACN {site.licences.acn} · ABN {site.licences.abn} · BSA {site.licences.bsa}
          </p>
        </div>
      </Container>
    </footer>
  );
}
