import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";
import { BagIcon } from "@/components/site/bag-icon";
import { CATALOG_PRODUCTS } from "@/lib/data/products";

function ProductCategories() {
  return (
    <Section tone="ivory" id="products">
      <SectionHeading
        eyebrow="What We Make"
        title="Five bag styles, one production line."
        description="Every style below is cut, printed and stitched in-house — pick a shape, then customize size, GSM and print."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CATALOG_PRODUCTS.map((product, index) => (
          <Reveal key={product.slug} index={index}>
            <HoverLift>
              <a
                href={`/products/${product.slug}`}
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
      </div>
    </Section>
  );
}

export { ProductCategories };
