import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/data/industries";
import { PRODUCTS } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Non woven bags matched to how retail, grocery, garments, pharma, events, corporate, institutional and distributor buyers actually use them.",
};

const WHATSAPP_HREF =
  "https://wa.me/919756565319?text=Hello%20Alorex%20Packaging%20LLP%2C%20I%20want%20to%20enquire%20about%20Non%20Woven%20Bags%20for%20my%20industry";

function productName(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug)?.name ?? slug;
}

export default function IndustriesPage() {
  return (
    <>
      <Section spacing="lg" tone="ivory">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="One production line, eight kinds of buyer."
          description="The bag a pharmacy counter needs isn't the bag a distributor reorders by the pallet. We match cut, handle and finish to how each industry actually moves product — then print it with your branding."
        />
      </Section>

      <Section tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.slug} index={index} className="h-full">
                <HoverLift className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-saffron-strong">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-5 font-serif text-xl font-semibold text-foreground">
                      {industry.name}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border pt-5">
                      {industry.productSlugs.map((slug) => (
                        <Badge
                          key={slug}
                          variant="soft"
                          render={<Link href={`/products#${slug}`} />}
                        >
                          {productName(slug)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </HoverLift>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Not Sure Where You Fit"
          title="Tell us your industry — we'll recommend the bag."
          description="Send your use case over WhatsApp or request a quote, and we'll match it to a cut, GSM and print spec from the line above."
          onDark
        />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Get a Bulk Quote <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="whatsapp"
            nativeButton={false}
            render={
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" />
            }
          >
            <MessageCircle /> WhatsApp Us
          </Button>
        </div>
      </Section>
    </>
  );
}
