import { Layers, ScanLine, Palette, Gauge } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const CAPABILITIES = [
  {
    icon: Layers,
    stat: "6+",
    label: "Bag styles in active production",
    detail:
      "D-Cut, W-Cut, U-Cut, Loop Handle, Box and BOPP Laminated — running on the same line, not sourced from different vendors.",
  },
  {
    icon: ScanLine,
    stat: "100%",
    label: "Inspected before dispatch",
    detail:
      "Every batch is checked for seam strength, GSM consistency and print alignment before it leaves the floor.",
  },
  {
    icon: Palette,
    stat: "In-house",
    label: "Cutting & printing",
    detail:
      "Fabric cutting, handle punching and logo printing all happen on-site — no subcontracted print run to wait on.",
  },
  {
    icon: Gauge,
    stat: "48-Hr",
    label: "Sample turnaround",
    detail:
      "Confirm size, GSM and print on a physical sample within two working days of your enquiry, before a bulk run is booked.",
  },
] as const;

function ManufacturingCapability() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Manufacturing Capability"
        title="Built for bulk, checked one batch at a time."
        description="Production capacity means nothing without consistency — here's how the two stay together on our floor."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map(({ icon: Icon, stat, label, detail }, index) => (
          <Reveal key={label} index={index} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
              <Icon className="size-6 text-saffron-strong" />
              <p className="mt-5 font-serif text-3xl font-semibold text-foreground">
                {stat}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { ManufacturingCapability };
