import { Hero } from "@/components/site/hero";
import { TrustIndicators } from "@/components/site/trust-indicators";
import { ProductCategories } from "@/components/site/product-categories";
import { ManufacturingCapability } from "@/components/site/manufacturing-capability";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ProductionProcess } from "@/components/site/production-process";
import { ProductShowcase } from "@/components/site/product-showcase";
import { IndustriesServed } from "@/components/site/industries-served";
import { CustomManufacturing } from "@/components/site/custom-manufacturing";
import { FactoryPreview } from "@/components/site/factory-preview";
import { FinalCta } from "@/components/site/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ProductCategories />
      <ManufacturingCapability />
      <WhyChooseUs />
      <ProductionProcess />
      <ProductShowcase />
      <IndustriesServed />
      <CustomManufacturing />
      <FactoryPreview />
      <FinalCta />
    </>
  );
}
