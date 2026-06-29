"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden font-heading text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#C4A96B] focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#3A5248] text-[#C4A96B] px-8 py-4 hover:bg-[#4a6659]",
    outline:
      "border border-[#C4A96B] text-[#C4A96B] px-8 py-4 hover:bg-[#C4A96B] hover:text-[#0E0F11]",
    ghost:
      "text-current px-0 py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
  };

  const Arrow = () => (
    <svg
      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          <Arrow />
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      <Arrow />
    </button>
  );
}
