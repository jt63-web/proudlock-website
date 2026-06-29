import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";

// Dev-only route for design reference
export default function StyleguidePage() {
  if (process.env.NODE_ENV === "production") {
    return <div className="p-20 text-center">Not available in production.</div>;
  }

  return (
    <div className="pt-28 pb-32">
      <Container>
        <h1 className="mb-16 font-heading text-5xl font-bold text-[#0E0F11]">Styleguide</h1>

        {/* Colours */}
        <section className="mb-20">
          <Eyebrow className="mb-6">Colour palette</Eyebrow>
          <div className="flex gap-4 flex-wrap">
            {[
              { name: "ink", hex: "#0E0F11" },
              { name: "green", hex: "#3A5248" },
              { name: "gold", hex: "#C4A96B" },
              { name: "cream", hex: "#F5F2EC" },
              { name: "stone", hex: "#E8E4DC" },
              { name: "white", hex: "#FFFFFF" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col gap-2">
                <div className="h-20 w-32 border border-black/10" style={{ background: c.hex }} />
                <p className="font-heading text-xs font-semibold uppercase tracking-widest text-[#0E0F11]">{c.name}</p>
                <p className="font-mono text-xs text-[#0E0F11]/50">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Type scale */}
        <section className="mb-20">
          <Eyebrow className="mb-6">Typography</Eyebrow>
          <div className="flex flex-col gap-6">
            {[
              { label: "Display / 80px", className: "font-heading text-[80px] font-bold leading-none" },
              { label: "H1 / 64px", className: "font-heading text-6xl font-bold" },
              { label: "H2 / 48px", className: "font-heading text-5xl font-bold" },
              { label: "H3 / 32px", className: "font-heading text-3xl font-bold" },
              { label: "H4 / 24px", className: "font-heading text-2xl font-bold" },
              { label: "Body / 18px", className: "font-body text-lg" },
              { label: "Body small / 14px", className: "font-body text-sm" },
              { label: "Caption / 12px", className: "font-body text-xs" },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-8">
                <span className="w-40 shrink-0 font-body text-xs text-[#0E0F11]/40">{t.label}</span>
                <p className={t.className + " text-[#0E0F11]"}>Proudlock</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <Eyebrow className="mb-6">Buttons</Eyebrow>
          <div className="flex flex-wrap gap-6 items-center">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost button</Button>
            <div className="bg-[#3A5248] p-6">
              <Button variant="outline">Outline on green</Button>
            </div>
          </div>
        </section>

        {/* Stat block */}
        <section className="mb-20">
          <Eyebrow className="mb-6">Stat block</Eyebrow>
          <div className="grid grid-cols-1 gap-8 max-w-lg">
            <StatBlock stats={[
              { value: "Est. 2014", label: "Founded" },
              { value: "10,000+ sqm", label: "Largest site" },
              { value: "SEQ-wide", label: "Service area" },
              { value: "100+", label: "Projects" },
            ]} />
          </div>
        </section>

        {/* Motion note */}
        <section>
          <Eyebrow className="mb-6">Motion</Eyebrow>
          <ul className="flex flex-col gap-2 font-body text-sm text-[#0E0F11]/70">
            <li>Page transitions: fade + translateY(8px), 200ms ease-out</li>
            <li>Scroll reveals: AnimateIn component, translateY(24px) → 0, 700ms expo ease, once:true</li>
            <li>Image hover: scale(1.04), 700ms ease-out</li>
            <li>Button hover: bg transition 200ms + arrow translateX(4px)</li>
            <li>Nav: transparent → bg-green on scroll, 300ms</li>
            <li>Mobile menu: fade + staggered link slideX, 40ms per item</li>
          </ul>
        </section>
      </Container>
    </div>
  );
}
