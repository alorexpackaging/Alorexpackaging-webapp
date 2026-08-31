import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data/products";

type ProductSpecsProps = {
  product: Pick<Product, "gsm" | "sizes" | "printing">;
  /** "compact" for the catalogue card, "full" for the product detail page. */
  variant?: "compact" | "full";
  className?: string;
};

function formatGsm(gsm: Product["gsm"]) {
  return gsm.min === gsm.max ? `${gsm.min} GSM` : `${gsm.min}–${gsm.max} GSM`;
}

/**
 * The one place GSM / Sizes / Printing are rendered — the catalogue
 * card and the product detail page both point here rather than
 * hand-rolling the spec block twice.
 */
function ProductSpecs({ product, variant = "compact", className }: ProductSpecsProps) {
  const gsmLabel = formatGsm(product.gsm);

  if (variant === "compact") {
    return (
      <dl className={cn("flex flex-wrap items-center gap-1.5", className)}>
        <dt className="sr-only">GSM</dt>
        <dd>
          <Badge variant="soft">{gsmLabel}</Badge>
        </dd>
        <dt className="sr-only">Sizes available</dt>
        <dd>
          <Badge variant="outline">
            {product.sizes.length} size{product.sizes.length === 1 ? "" : "s"}
          </Badge>
        </dd>
      </dl>
    );
  }

  return (
    <dl className={cn("grid gap-6 sm:grid-cols-3", className)}>
      <div>
        <dt className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          GSM
        </dt>
        <dd className="mt-2 font-serif text-xl font-semibold text-foreground">{gsmLabel}</dd>
      </div>

      <div>
        <dt className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Sizes
        </dt>
        <dd className="mt-2 flex flex-wrap gap-1.5">
          {product.sizes.map((size) => (
            <Badge key={size} variant="outline">
              {size}
            </Badge>
          ))}
        </dd>
      </div>

      <div>
        <dt className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Printing
        </dt>
        <dd className="mt-2 text-sm leading-relaxed text-foreground">{product.printing}</dd>
      </div>
    </dl>
  );
}

export { ProductSpecs, formatGsm };
