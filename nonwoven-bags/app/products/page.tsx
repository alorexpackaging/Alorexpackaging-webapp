import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { BagIcon } from "@/components/site/bag-icon";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/data/products";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Custom & Printed Non Woven Bags",
  description:
    "Non woven bag range from Alorex Packaging — D-Cut, W-Cut, U-Cut, loop handle, box and BOPP laminated bags, custom printed and supplied in bulk for retail and institutional buyers.",
  path: "/products",
});

const WHATSAPP_HREF = whatsappHref(
  "Hello Alorex Packaging LLP, I want a bulk quote for custom printed non woven bags"
);

export default function ProductsPage() {
  return (
    <>
      {PRODUCTS.map((product) => (
        <script
          key={product.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              category: "Non Woven Bags",
              material: "Non-woven polypropylene fabric",
              url: `${SITE_URL}/products#${product.slug}`,
              brand: { "@type": "Brand", name: SITE_NAME },
              manufacturer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            }),
          }}
        />
      ))}

      <Section spacing="lg" tone="ivory">
        <SectionHeading
          as="h1"
          eyebrow="What We Make"
          title="Six non woven bag styles, one production line."
          description="Every style below is cut, printed and stitched in-house at our own facility — pick a shape, then customize size, GSM, handle and print for your bulk order."
        />
      </Section>

      <Section tone="white" spacing="sm">
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.slug} index={index} className="h-full">
              <article
                id={product.slug}
                className="flex h-full scroll-mt-24 flex-col gap-4 rounded-2xl border border-border bg-background p-6 sm:flex-row sm:items-start"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent p-3 text-saffron-strong">
                  <BagIcon variant={product.variant} />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-saffron-strong">
                    {product.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Custom Printing"
              title="Custom printed non woven bags, your branding on every panel."
              description="Logo printing, size, GSM and handle style are all handled on our own line — send your artwork and we print it in-house, not through a subcontracted print run you have to wait on."
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Bulk Supply"
              title="Bulk non woven bags, priced factory-direct."
              description="Volume orders are what our line is built for. Confirm your spec on a sample first, then reorder the same batch on a phone call — no distributor margin in between."
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
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
