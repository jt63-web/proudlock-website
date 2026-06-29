"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/commercial", label: "Commercial" },
  { href: "/residential", label: "Residential" },
  { href: "/interior-design", label: "Interior Design" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg = scrolled || !isHome || menuOpen
    ? "bg-[#3A5248] shadow-sm"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        role="banner"
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link href="/" aria-label="Proudlock — home" className="relative z-10 flex items-center">
            <Image
              src="/images/logos/proudlock-logo.png"
              alt="Proudlock"
              width={56}
              height={56}
              className="h-12 w-12 object-contain transition-transform duration-500 hover:rotate-[15deg] hover:scale-110"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-heading text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-[#C4A96B] after:transition-all after:duration-300 ${
                    isActive
                      ? "text-[#C4A96B] after:w-full"
                      : "text-white/80 hover:text-[#C4A96B] after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 border border-[#C4A96B] px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#C4A96B] transition-all duration-200 hover:bg-[#C4A96B] hover:text-[#0E0F11] active:scale-[0.97]"
            >
              Get in touch
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#0E0F11] px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-heading text-4xl font-bold text-white/80 transition-colors hover:text-[#C4A96B]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-body text-sm text-white/40">4/6 Timms Court, Woodridge QLD 4114</p>
              <p className="mt-0.5 font-body text-xs text-white/25">By appointment only</p>
              <p className="mt-2 font-body text-sm text-white/40">cris@proudlock.com.au</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
