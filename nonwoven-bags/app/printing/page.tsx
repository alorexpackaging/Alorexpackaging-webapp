import type { Metadata } from "next";
import { PrintingHero } from "@/components/site/printing-hero";
import { PrintingCapability } from "@/components/site/printing-capability";
import { PrintingProcess } from "@/components/site/printing-process";
import { ArtworkRequirements } from "@/components/site/artwork-requirements";
import { PrintedBagShowcase } from "@/components/site/printed-bag-showcase";
import { PrintingCta } from "@/components/site/printing-cta";

export const metadata: Metadata = {
  title: "Custom Printing",
  description:
    "In-house custom printing on every non woven bag Alorex Packaging manufactures — multi-colour Pantone matching, digital proof approval, and MOQ from 500 pieces.",
};

export default function PrintingPage() {
  return (
    <>
      <PrintingHero />
      <PrintingCapability />
      <PrintingProcess />
      <ArtworkRequirements />
      <PrintedBagShowcase />
      <PrintingCta />
    </>
  );
}
