import { PhoneCall, PenTool, Factory, Truck } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Enquiry & Consultation",
    detail:
      "Share your bag type, quantity, size and printing needs — our team recommends the right spec for your brand and budget.",
  },
  {
    icon: PenTool,
    title: "Design & Proof Approval",
    detail:
      "We prepare your artwork and send a digital proof for review. Production starts only once you've signed off on it.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    detail:
      "Your bags move through fabric, printing, cutting and stitching on the same line, with quality checks at every stage.",
  },
  {
    icon: Truck,
    title: "Quality Check & Dispatch",
    detail:
      "Every batch gets a final inspection before it's packed and dispatched — pan-India, on the timeline we quoted.",
  },
] as const;

function PrintingProcess() {
  return (
    <Section tone="ivory">
      <SectionHeading
        eyebrow="Printing Process"
        title="From enquiry to a printed bag in your hands."
        description="The same four steps for every order, so a first-time buyer and a repeat customer both know what happens next."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ icon: Icon, title, detail }, index) => (
          <Reveal key={title} index={index} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-semibold text-saffron-strong/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-6 text-saffron-strong" />
              </div>
              <p className="mt-5 text-sm font-semibold text-foreground">
                {title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { PrintingProcess };
