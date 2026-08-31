import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ManufacturingCapability } from "@/components/site/manufacturing-capability";
import { TrustIndicators } from "@/components/site/trust-indicators";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us — Non Woven Bag Manufacturer",
  description:
    "Alorex Packaging LLP is a non woven bag manufacturing company in India, running an in-house cutting, printing and stitching line for bulk B2B orders.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section spacing="lg" tone="ivory">
        <SectionHeading
          as="h1"
          eyebrow="About Alorex Packaging"
          title="A non woven bag manufacturer built to run its own line, start to finish."
          description="We set up Alorex Packaging LLP to close the gap between placing an order and holding a finished bag — cutting, printing, handle-punching and stitching all happen on one factory floor, not across three vendors."
        />

        <div className="mt-10 grid gap-8 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-12">
          <p>
            Most non woven bag manufacturer setups in India split the job:
            one unit cuts fabric, another prints it, a third stitches
            handles. Every handoff adds a lead time and a margin.
            Alorex Packaging keeps that chain in-house — the same batch
            of fabric that comes in as raw non woven material leaves as
            a dispatched carton of finished, printed bags.
          </p>
          <p>
            That matters most to the buyers we build for: retailers
            reordering the same spec every month, distributors mixing
            styles in one bulk run, and brands who need their logo
            printed correctly the first time. Fewer vendors in the
            chain means fewer places for a spec to drift.
          </p>
        </div>
      </Section>

      <ManufacturingCapability />

      <TrustIndicators />

      <Section tone="ivory">
        <SectionHeading
          eyebrow="Where We're Headed"
          title="Non woven, because it has to be."
          description="Non woven fabric is reusable, recyclable in most municipal streams, and a direct substitute for single-use plastic carry bags — which is the whole reason retailers and institutions are switching to it. We build bags on that material because the shift is already happening, not as a marketing layer on top."
        />
        <div className="mt-8">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Talk to Our Team <ArrowRight />
          </Button>
        </div>
      </Section>
    </>
  );
}
