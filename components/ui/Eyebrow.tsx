import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function Eyebrow({ children, className, light }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-semibold uppercase tracking-[0.2em]",
        light ? "text-[#C4A96B]" : "text-[#C4A96B]",
        className,
      )}
    >
      {children}
    </p>
  );
}
