import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCatalog } from "@/components/product/product-catalog";
import { CATALOG_PRODUCTS, CATALOG_USE_CASES } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Non Woven Bag Catalogue",
  description:
    "Browse Alorex Packaging's non woven bag catalogue — D-Cut, W-Cut, Loop Handle, Box and Custom Printed Bags. Compare GSM, sizes and printing options, then get a factory-direct quote.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Non Woven Bag Catalogue | Alorex Packaging LLP",
    description:
      "D-Cut, W-Cut, Loop Handle, Box and Custom Printed non woven bags — GSM, sizes and printing compared side by side.",
    url: "/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <Section spacing="lg">
      <SectionHeading
        eyebrow="Product Catalogue"
        title="Five bag styles, built factory-direct."
        description="Every style is cut, printed and stitched in-house. Compare GSM, sizes and printing below, then get a quote on the one that fits your load and your branding."
      />

      <div className="mt-12">
        <ProductCatalog products={CATALOG_PRODUCTS} useCases={CATALOG_USE_CASES} />
      </div>
    </Section>
  );
}
