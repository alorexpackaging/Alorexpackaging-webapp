import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";
import { BagIcon } from "@/components/site/bag-icon";
import { PRODUCTS } from "@/lib/data/products";

function ProductShowcase() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Full Catalog"
        title="The complete line, specification by specification."
        description="Every entry below ships from the same floor — swap fabric weight, size or handle style without switching suppliers."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, index) => (
          <Reveal key={product.slug} index={index} className="h-full">
            <HoverLift className="h-full">
              <a
                id={product.slug}
                href={`/products#${product.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-accent p-3 text-saffron-strong">
                  <BagIcon variant={product.variant} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-strong">
                  View specification
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { ProductShowcase };
