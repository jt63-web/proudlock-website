import { cn } from "@/lib/utils";

interface Stat {
  readonly value: string;
  readonly label: string;
}

interface StatBlockProps {
  stats: readonly Stat[];
  className?: string;
  light?: boolean;
}

export function StatBlock({ stats, className, light }: StatBlockProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px",
        light ? "bg-white/10" : "bg-[#C4A96B]/20",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col gap-1 p-6",
            light ? "bg-[#0E0F11]" : "bg-[#F5F2EC]",
          )}
        >
          <dt className={cn("font-heading text-xs uppercase tracking-widest", light ? "text-[#C4A96B]/70" : "text-[#C4A96B]")}>
            {stat.label}
          </dt>
          <dd className={cn("font-heading text-2xl font-bold leading-tight", light ? "text-white" : "text-[#0E0F11]")}>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
