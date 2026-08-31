import {
  ShoppingBag,
  ShoppingCart,
  Shirt,
  Pill,
  PartyPopper,
  Briefcase,
  Building2,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** Explains how the industry actually uses the bag — not a generic pitch. */
  description: string;
  /** Product slugs from lib/data/products.ts, in recommendation order. */
  productSlugs: string[];
};

/**
 * The buyer segments Alorex sells into. Single source of truth for the
 * /industries page — each entry links back to real catalog products so
 * the recommendation is never a dangling label.
 */
export const INDUSTRIES: Industry[] = [
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    description:
      "Checkout-counter bags that carry your branding out the door — sized for everyday purchases, printed to match shelf and storefront identity.",
    productSlugs: ["d-cut-bags", "w-cut-bags", "bopp-laminated-bags"],
  },
  {
    slug: "grocery",
    name: "Grocery",
    icon: ShoppingCart,
    description:
      "Built to survive a full weekly basket — reinforced handles and a gusseted base that hold shape under real grocery weight, not just at the till.",
    productSlugs: ["loop-handle-bags", "box-bags", "d-cut-bags"],
  },
  {
    slug: "garments",
    name: "Garments",
    icon: Shirt,
    description:
      "A wider-grip handle and a laminated finish for folded apparel and gifting — the format that keeps a purchase looking presentable on the walk home.",
    productSlugs: ["w-cut-bags", "bopp-laminated-bags"],
  },
  {
    slug: "pharma",
    name: "Pharma",
    icon: Pill,
    description:
      "A compact cut sized for pharmacy counters and small SKUs — quick to bag a prescription without eating into limited counter space.",
    productSlugs: ["u-cut-bags"],
  },
  {
    slug: "events",
    name: "Events",
    icon: PartyPopper,
    description:
      "Giveaway and delegate bags printed for a single occasion — sharp multi-color branding at volumes sized to the event, not a seasonal minimum.",
    productSlugs: ["bopp-laminated-bags", "w-cut-bags"],
  },
  {
    slug: "corporate",
    name: "Corporate",
    icon: Briefcase,
    description:
      "Self-standing, branded bags for client gifting and onboarding kits — a structured shape that presents well before it's ever opened.",
    productSlugs: ["box-bags", "bopp-laminated-bags"],
  },
  {
    slug: "institutions",
    name: "Institutions",
    icon: Building2,
    description:
      "Schools, hospitals and hospitality groups ordering on a recurring cycle — durable, lightly-branded bags priced for repeat bulk supply.",
    productSlugs: ["loop-handle-bags", "d-cut-bags", "box-bags"],
  },
  {
    slug: "distributors",
    name: "Distributors",
    icon: Truck,
    description:
      "Mixed-style bulk runs for resale — every cut and GSM on one production line, so a distributor's full catalog ships from a single order.",
    productSlugs: PRODUCTS.map((product) => product.slug),
  },
];

export const getIndustry = (slug: string) =>
  INDUSTRIES.find((industry) => industry.slug === slug);
