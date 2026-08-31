import { Factory, Boxes, Printer, Shapes, Truck } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";

const INDICATORS = [
  { icon: Factory, label: "Direct Manufacturer" },
  { icon: Boxes, label: "Bulk Production" },
  { icon: Printer, label: "Custom Printing" },
  { icon: Shapes, label: "Multiple Bag Styles" },
  { icon: Truck, label: "Pan-India Supply" },
] as const;

function TrustIndicators() {
  return (
    <section className="border-y border-border bg-card">
      <Container className="grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-between md:py-8">
        {INDICATORS.map(({ icon: Icon, label }, index) => (
          <Reveal key={label} index={index} className="flex items-center gap-3">
            <Icon className="size-5 shrink-0 text-saffron-strong" />
            <span className="text-sm font-medium text-foreground">
              {label}
            </span>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

export { TrustIndicators };
