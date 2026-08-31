import { IndianRupee, Wrench, ClipboardCheck, Truck } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";

const REASONS = [
  {
    icon: IndianRupee,
    title: "Factory-direct pricing",
    detail:
      "You're buying off our production floor, not a distributor's markup — the same batch, minus the middle margin.",
  },
  {
    icon: Wrench,
    title: "Customization without a second vendor",
    detail:
      "Size, GSM, handle style and logo print are handled on one line — no separate printer to coordinate with or wait on.",
  },
  {
    icon: ClipboardCheck,
    title: "Sample before you commit",
    detail:
      "A physical sample ships within 48 hours of your enquiry, so the bulk order is confirmed against something you've actually held.",
  },
  {
    icon: Truck,
    title: "Logistics built for reorders",
    detail:
      "Pan-India dispatch means a repeat order is a phone call, not a renegotiation — the same spec, the same lead time.",
  },
] as const;

function WhyChooseUs() {
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Four reasons buyers stay past the first order."
        onDark
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {REASONS.map(({ icon: Icon, title, detail }, index) => (
          <Reveal key={title} index={index} className="h-full">
            <HoverLift className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold text-ivory">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/65">
                    {detail}
                  </p>
                </div>
              </div>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { WhyChooseUs };
