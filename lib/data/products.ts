export type BagVariant =
  | "d-cut"
  | "w-cut"
  | "u-cut"
  | "loop-handle"
  | "box"
  | "bopp"
  | "custom-print";

export type Product = {
  slug: string;
  name: string;
  variant: BagVariant;
  /** One line — used in compact category strips. */
  tagline: string;
  /** Longer copy — used in the full showcase and product detail page. */
  description: string;
  /** Optional real photography. Falls back to the BagIcon line-art panel when unset. */
  image?: string;
  gsm: { min: number; max: number };
  sizes: string[];
  printing: string;
  /** Facet tags — drives the /products filter UI. */
  useCases: string[];
  cta: { label: string; href: string };
  /** Shown in the public catalogue at /products. Older styles stay in the
   *  data set (referenced by other pages/copy) without cluttering the
   *  five-style catalogue this page was scoped to. */
  featured?: boolean;
};

/**
 * The real, physical catalog — the bag styles Alorex manufactures.
 * Single source of truth: referenced by the homepage product
 * sections, the /products catalogue and the footer, so it only
 * needs updating in one place.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "d-cut-bags",
    name: "D-Cut Bags",
    variant: "d-cut",
    tagline: "Die-cut handle, single-piece body.",
    description:
      "A single die-cut sheet with a reinforced handle opening — fast to produce in volume and the standard choice for grocery and general retail counters. Clean, no-frills silhouette that takes print well across the full face of the bag.",
    gsm: { min: 60, max: 90 },
    sizes: ["8 × 10 in", "10 × 12 in", "12 × 14 in", "14 × 16 in", "16 × 18 in", "Custom size on request"],
    printing: "1–4 colour flexo/screen print, one or both faces.",
    useCases: ["Grocery & Retail", "Bulk & Wholesale"],
    cta: { label: "Get a Quote", href: "/contact?product=d-cut-bags" },
    featured: true,
  },
  {
    slug: "w-cut-bags",
    name: "W-Cut Bags",
    variant: "w-cut",
    tagline: "Wider handle span, higher load comfort.",
    description:
      "The W-profile handle cut spreads load across a wider grip, holding its shape better under heavier fills — a common upgrade from D-Cut for apparel and gifting. The extra handle width also opens up more room for wraparound branding.",
    gsm: { min: 70, max: 100 },
    sizes: ["10 × 12 in", "12 × 14 in", "14 × 16 in", "16 × 20 in", "Custom size on request"],
    printing: "1–6 colour flexo print, full-face or wraparound.",
    useCases: ["Apparel & Gifting", "Grocery & Retail"],
    cta: { label: "Get a Quote", href: "/contact?product=w-cut-bags" },
    featured: true,
  },
  {
    slug: "u-cut-bags",
    name: "U-Cut Bags",
    variant: "u-cut",
    tagline: "Rounded cut, compact SKU footprint.",
    description:
      "A tighter, rounded handle cut suited to smaller bag sizes — pharmacies, boutiques and takeaway counters where shelf and counter space is limited.",
    gsm: { min: 60, max: 85 },
    sizes: ["6 × 8 in", "8 × 10 in", "10 × 12 in", "Custom size on request"],
    printing: "1–3 colour flexo/screen print.",
    useCases: ["Pharmacy & Boutique", "Takeaway Counters"],
    cta: { label: "Get a Quote", href: "/contact?product=u-cut-bags" },
  },
  {
    slug: "loop-handle-bags",
    name: "Loop Handle Bags",
    variant: "loop-handle",
    tagline: "Stitched loop straps, higher carry weight.",
    description:
      "Separately stitched fabric loop handles carry more weight than a die-cut opening — built for supermarket and bulk-grocery bags that need to survive a full load. Handles are stitched, not glued, so they hold under repeated use.",
    gsm: { min: 80, max: 120 },
    sizes: ["12 × 14 in", "14 × 16 in", "16 × 18 in", "18 × 20 in", "Custom size on request"],
    printing: "Up to 6 colour print, handle-to-base branding.",
    useCases: ["Bulk & Wholesale", "Grocery & Retail"],
    cta: { label: "Get a Quote", href: "/contact?product=loop-handle-bags" },
    featured: true,
  },
  {
    slug: "box-bags",
    name: "Box Bags",
    variant: "box",
    tagline: "Gusseted base, self-standing shape.",
    description:
      "A gusseted base and structured sides let the bag stand upright and hold its shape loaded or empty — the format retailers reach for when the bag itself is on display. Holds bulkier, irregular loads better than a flat-cut style.",
    gsm: { min: 90, max: 140 },
    sizes: ["10 × 12 × 5 in", "12 × 14 × 6 in", "14 × 16 × 7 in", "Custom size on request"],
    printing: "Full-panel print including gusset and base.",
    useCases: ["Grocery & Retail", "Bulk & Wholesale"],
    cta: { label: "Get a Quote", href: "/contact?product=box-bags" },
    featured: true,
  },
  {
    slug: "bopp-laminated-bags",
    name: "BOPP Laminated Bags",
    variant: "bopp",
    tagline: "Laminated finish, print-ready surface.",
    description:
      "A BOPP film laminate over the non woven base gives a glossy, tear-resistant surface built for sharp multi-color print — the format brands pick when the bag is the billboard.",
    gsm: { min: 90, max: 130 },
    sizes: ["10 × 12 in", "12 × 14 in", "14 × 16 in", "Custom size on request"],
    printing: "Up to 8 colour offset print on laminated film.",
    useCases: ["Brand Marketing", "Retail Chains & Franchises"],
    cta: { label: "Get a Quote", href: "/contact?product=bopp-laminated-bags" },
  },
  {
    slug: "custom-printed-bags",
    name: "Custom Printed Bags",
    variant: "custom-print",
    tagline: "Any style, your branding.",
    description:
      "Take any style on this page — D-Cut, W-Cut, Loop Handle or Box — and put your own logo, colours and copy on it. Full-color offset and flexo printing, placed anywhere on the bag, with a physical sample before a bulk run is booked.",
    gsm: { min: 60, max: 140 },
    sizes: ["Any size or style above", "Made to your spec"],
    printing: "Full-color offset/flexo, logo placement anywhere on the bag, low minimum for the first sample.",
    useCases: ["Brand Marketing", "Apparel & Gifting"],
    cta: { label: "Start Your Custom Order", href: "/contact?product=custom-printed-bags" },
    featured: true,
  },
];

/** The five styles shown on /products — the public catalogue. */
export const CATALOG_PRODUCTS = PRODUCTS.filter((product) => product.featured);

export const getProduct = (slug: string) =>
  PRODUCTS.find((product) => product.slug === slug);

/** Every use-case tag across the catalogue, in first-seen order — drives the filter UI. */
export const CATALOG_USE_CASES = Array.from(
  new Set(CATALOG_PRODUCTS.flatMap((product) => product.useCases))
);
