import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoverLift } from "@/components/site/hover-lift";
import { ProductImage } from "@/components/product/product-image";
import { ProductSpecs } from "@/components/product/product-specs";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

/**
 * The one card used everywhere a product is listed — the /products
 * catalogue grid today, any future homepage or related-products strip
 * tomorrow. Change how a product is presented once, here.
 */
function ProductCard({ product, className }: ProductCardProps) {
  return (
    <HoverLift className={className}>
      <Link
        href={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-saffron-strong/40"
      >
        <ProductImage product={product} className="rounded-none rounded-t-2xl ring-0" />

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">{product.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
          </div>

          <ProductSpecs product={product} variant="compact" />

          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-strong">
            {product.cta.label}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </HoverLift>
  );
}

export { ProductCard };
