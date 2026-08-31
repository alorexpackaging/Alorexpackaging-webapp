import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Scale, Ruler } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ProductionProcess } from "@/components/site/production-process";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Non Woven Bag Manufacturing Process",
  description:
    "From raw fabric to dispatch — see how Alorex Packaging manufactures non woven bags in nine in-house production stages, with quality inspection before every shipment.",
  path: "/process",
});

const QUALITY_CHECKS = [
  {
    icon: Scale,
    title: "GSM consistency",
    detail:
      "Fabric weight is checked against spec at intake, so a 60 GSM order doesn't drift batch to batch.",
  },
  {
    icon: Ruler,
    title: "Cut & seam accuracy",
    detail:
      "Every D-Cut, W-Cut and loop handle run is measured against the pattern before it moves to printing.",
  },
  {
    icon: ClipboardCheck,
    title: "Print alignment",
    detail:
      "Logo placement and color match are checked on the run, not just on the first proof.",
  },
] as const;

export default function ProcessPage() {
  return (
    <>
      <Section spacing="lg" tone="ivory">
        <SectionHeading
          as="h1"
          eyebrow="Our Process"
          title="Raw fabric to dispatched carton, in nine stages."
          description="Every non woven bag we ship — D-Cut, W-Cut, loop handle or custom printed — moves through the same nine-stage line, in this order, on every order."
        />
      </Section>

      <ProductionProcess />

      <Section tone="white">
        <SectionHeading
          eyebrow="Quality Inspection"
          title="Checked before it leaves the floor, not after a complaint."
          description="Stage seven of the line above is a full inspection pass — here's what it actually checks."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {QUALITY_CHECKS.map(({ icon: Icon, title, detail }, index) => (
            <Reveal key={title} index={index} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                <Icon className="size-6 text-saffron-strong" />
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="See It on Your Order"
          title="Request a sample from this line before you book a bulk run."
          description="A 48-hour sample dispatch confirms the cut, GSM and print before we run your full order."
          onDark
        />
        <div className="mt-8">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Request a Sample <ArrowRight />
          </Button>
        </div>
      </Section>
    </>
  );
}
