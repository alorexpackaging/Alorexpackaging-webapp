export type BagVariant =
  | "d-cut"
  | "w-cut"
  | "u-cut"
  | "loop-handle"
  | "box"
  | "bopp";

export type Product = {
  slug: string;
  name: string;
  variant: BagVariant;
  /** One line — used in compact category strips. */
  tagline: string;
  /** Longer copy — used in the full showcase. */
  description: string;
};

/**
 * The real, physical catalog — six bag styles Alorex manufactures.
 * Single source of truth: referenced by the homepage product
 * sections and the footer, so it only needs updating in one place.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "d-cut-bags",
    name: "D-Cut Bags",
    variant: "d-cut",
    tagline: "Die-cut handle, single-piece body.",
    description:
      "A single die-cut sheet with a reinforced handle opening — fast to produce in volume and the standard choice for grocery and general retail counters.",
  },
  {
    slug: "w-cut-bags",
    name: "W-Cut Bags",
    variant: "w-cut",
    tagline: "Wider handle span, higher load comfort.",
    description:
      "The W-profile handle cut spreads load across a wider grip, holding its shape better under heavier fills — a common upgrade from D-Cut for apparel and gifting.",
  },
  {
    slug: "u-cut-bags",
    name: "U-Cut Bags",
    variant: "u-cut",
    tagline: "Rounded cut, compact SKU footprint.",
    description:
      "A tighter, rounded handle cut suited to smaller bag sizes — pharmacies, boutiques and takeaway counters where shelf and counter space is limited.",
  },
  {
    slug: "loop-handle-bags",
    name: "Loop Handle Bags",
    variant: "loop-handle",
    tagline: "Stitched loop straps, higher carry weight.",
    description:
      "Separately stitched fabric loop handles carry more weight than a die-cut opening — built for supermarket and bulk-grocery bags that need to survive a full load.",
  },
  {
    slug: "box-bags",
    name: "Box Bags",
    variant: "box",
    tagline: "Gusseted base, self-standing shape.",
    description:
      "A gusseted base and structured sides let the bag stand upright and hold its shape loaded or empty — the format retailers reach for when the bag itself is on display.",
  },
  {
    slug: "bopp-laminated-bags",
    name: "BOPP Laminated Bags",
    variant: "bopp",
    tagline: "Laminated finish, print-ready surface.",
    description:
      "A BOPP film laminate over the non woven base gives a glossy, tear-resistant surface built for sharp multi-color print — the format brands pick when the bag is the billboard.",
  },
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((product) => product.slug === slug);
