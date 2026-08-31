import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { TrustIndicators } from "@/components/site/trust-indicators";
import { ProductCategories } from "@/components/site/product-categories";
import { ManufacturingCapability } from "@/components/site/manufacturing-capability";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Non Woven Bag Manufacturer in India",
  fullTitle: `${SITE_NAME} | Non Woven Bag Manufacturer in India`,
  description:
    "Non woven bag manufacturer in India making D-Cut, W-Cut, loop handle and custom printed bags in bulk, factory-direct, with pan-India delivery.",
  path: "/",
});

const WHATSAPP_HREF = whatsappHref(
  "Hello Alorex Packaging LLP, I want to enquire about Non Woven Bags"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ProductCategories />
      <ManufacturingCapability />

      <Section tone="navy">
        <SectionHeading
          eyebrow="Get Started"
          title="Ready to place a bulk order?"
          description="Send us your bag style, size and quantity — we'll confirm GSM, print and lead time, and dispatch a physical sample within 48 hours."
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
