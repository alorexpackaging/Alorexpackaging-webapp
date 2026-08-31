import { Printer, Palette, CheckCircle2, Clock, Package, Ruler } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";

const CAPABILITIES = [
  {
    icon: Printer,
    title: "Multi-Colour Printing",
    detail:
      "Up to 4 Pantone colours per design, printed directly onto the fabric — not a sticker or patch.",
  },
  {
    icon: Palette,
    title: "Pantone Colour Matching",
    detail:
      "20+ standard colours in stock, with custom Pantone matching when your brand colour has to be exact.",
  },
  {
    icon: CheckCircle2,
    title: "Pre-Print Proof Approval",
    detail:
      "A digital proof is sent for your sign-off first — nothing goes to press until you approve it.",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    detail:
      "7–15 days from proof approval to dispatch, so a print run doesn't stall the rest of your launch.",
  },
  {
    icon: Package,
    title: "Flexible MOQ",
    detail:
      "Custom printed runs start from 500 pieces — enough to brand a first order without a warehouse-sized commitment.",
  },
  {
    icon: Ruler,
    title: "Any Size, Any GSM",
    detail:
      "Fully custom dimensions, with fabric weight from 40 to 120 GSM depending on how the bag will be used.",
  },
] as const;

const SWATCHES = [
  { name: "Saffron", hex: "#FF6B00" },
  { name: "Royal Blue", hex: "#003087" },
  { name: "Crimson", hex: "#C8102E" },
  { name: "Forest Green", hex: "#1B5E20" },
  { name: "Purple", hex: "#4A0080" },
  { name: "Black", hex: "#0D0D0D" },
  { name: "Gold", hex: "#F5E642" },
  { name: "White", hex: "#F8F8F8" },
] as const;

function PrintingCapability() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Printing Capability"
        title="What our in-house print line can do."
        description="Cutting, printing and stitching all happen on the same floor — so your branding is part of the production run, not a separate job handed off to a subcontractor."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map(({ icon: Icon, title, detail }, index) => (
          <Reveal key={title} index={index} className="h-full">
            <HoverLift className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                <Icon className="size-6 text-saffron-strong" />
                <p className="mt-5 text-sm font-semibold text-foreground">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            </HoverLift>
          </Reveal>
        ))}
      </div>

      <Reveal index={CAPABILITIES.length} className="mt-10">
        <div className="rounded-2xl border border-dashed border-saffron-strong/40 bg-accent/40 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Choose your colour
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A sample of our standard palette — plus 12 more standard
                colours, with Pantone matching for anything more specific.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SWATCHES.map((swatch) => (
                <span
                  key={swatch.name}
                  title={swatch.name}
                  className="size-8 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: swatch.hex }}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export { PrintingCapability };
