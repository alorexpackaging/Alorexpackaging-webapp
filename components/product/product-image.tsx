import Image from "next/image";
import { cn } from "@/lib/utils";
import { BagIcon } from "@/components/site/bag-icon";
import type { Product } from "@/lib/data/products";

type ProductImageProps = {
  product: Pick<Product, "name" | "variant" | "image">;
  /** "card" for grid tiles, "hero" for the product detail page. */
  size?: "card" | "hero";
  className?: string;
};

/**
 * The single place a product's visual is rendered. No product
 * photography exists yet, so every style falls back to its BagIcon
 * line-art on a soft brand panel — set `image` on the product once a
 * real photo exists and this switches over with no caller changes.
 */
function ProductImage({ product, size = "card", className }: ProductImageProps) {
  if (product.image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl ring-1 ring-border",
          size === "hero" ? "aspect-[4/3]" : "aspect-[5/4]",
          className
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={size === "hero" ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 20vw, 45vw"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-accent ring-1 ring-border",
        size === "hero" ? "aspect-[4/3] p-12 sm:p-16" : "aspect-[5/4] p-8",
        className
      )}
      aria-hidden="true"
    >
      <BagIcon
        variant={product.variant}
        className={cn("text-saffron-strong", size === "hero" ? "size-40 sm:size-52" : "size-20 sm:size-24")}
      />
    </div>
  );
}

export { ProductImage };
