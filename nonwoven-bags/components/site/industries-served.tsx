import {
  Store,
  Shirt,
  Pill,
  MonitorSmartphone,
  Gift,
  Building2,
} from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const INDUSTRIES = [
  {
    icon: Store,
    name: "Retail & Supermarkets",
    detail: "Counter-ready D-Cut and Box Bags sized for basket-to-bag handoff.",
  },
  {
    icon: Shirt,
    name: "Textile & Apparel Brands",
    detail: "BOPP Laminated carry bags that double as in-store merchandising.",
  },
  {
    icon: Pill,
    name: "Pharmacy & Healthcare",
    detail: "Compact U-Cut bags sized for prescription and OTC counters.",
  },
  {
    icon: MonitorSmartphone,
    name: "E-Commerce & D2C",
    detail: "Consistent bulk batches that match a repeat-order fulfillment cycle.",
  },
  {
    icon: Gift,
    name: "Hospitality & Events",
    detail: "Loop Handle bags for gifting, welcome kits and event merchandise.",
  },
  {
    icon: Building2,
    name: "Corporate & Institutional",
    detail: "Bulk procurement for offices, tenders and institutional supply.",
  },
] as const;

function IndustriesServed() {
  return (
    <Section tone="ivory">
      <SectionHeading
        eyebrow="Industries Served"
        title="Different counters, the same production line."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map(({ icon: Icon, name, detail }, index) => (
          <Reveal key={name} index={index} className="h-full">
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
              <Icon className="size-5 text-saffron-strong" />
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { IndustriesServed };
