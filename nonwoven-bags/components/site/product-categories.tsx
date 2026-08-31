import { Palette } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";
import { BagIcon } from "@/components/site/bag-icon";
import { PRODUCTS } from "@/lib/data/products";

const CATEGORY_SLUGS = [
  "d-cut-bags",
  "w-cut-bags",
  "loop-handle-bags",
  "box-bags",
] as const;

const CATEGORIES = CATEGORY_SLUGS.map(
  (slug) => PRODUCTS.find((product) => product.slug === slug)!
);

function ProductCategories() {
  return (
    <Section tone="ivory" id="products">
      <SectionHeading
        eyebrow="What We Make"
        title="Five bag styles, one production line."
        description="Every style below is cut, printed and stitched in-house — pick a shape, then customize size, GSM and print."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CATEGORIES.map((product, index) => (
          <Reveal key={product.slug} index={index}>
            <HoverLift>
              <a
                href={`/products#${product.slug}`}
                className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-saffron-strong/40"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-accent p-3.5 text-saffron-strong">
                  <BagIcon variant={product.variant} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {product.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>
              </a>
            </HoverLift>
          </Reveal>
        ))}

        <Reveal index={CATEGORIES.length}>
          <HoverLift>
            <a
              href="/contact#custom-print"
              className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-dashed border-saffron-strong/40 bg-accent/40 p-6 text-center transition-colors hover:border-saffron-strong"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-saffron-strong/10 p-3.5 text-saffron-strong">
                <Palette className="size-7" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Custom Printed Bags
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Any style, your branding.
                </p>
              </div>
            </a>
          </HoverLift>
        </Reveal>
      </div>
    </Section>
  );
}

export { ProductCategories };
