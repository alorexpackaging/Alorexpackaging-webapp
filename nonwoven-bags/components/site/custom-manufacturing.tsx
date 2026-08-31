import { Check } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

const CHECKLIST = [
  "Custom sizes — cut to your exact dimensions, not our nearest standard.",
  "Fabric GSM chosen for the load, not a single fixed weight.",
  "Pantone-matched colors, mixed and dyed to your brand sheet.",
  "Logo printing in 1–6 colors, screen or offset.",
  "Choice of handle — D-Cut, W-Cut, loop or stitched strap.",
] as const;

const SPEC_ROWS = [
  { label: "Size", value: "Custom" },
  { label: "Fabric GSM", value: "40 – 120" },
  { label: "Color", value: "Pantone-matched" },
  { label: "Print", value: "1–6 colors" },
  { label: "Handle", value: "4 styles" },
  { label: "MOQ", value: "Sample-first" },
] as const;

function CustomManufacturing() {
  return (
    <Section tone="white">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Custom Manufacturing"
            title="Built to your spec sheet, not our default one."
            description="Nothing here is fixed catalog stock — every parameter below is set per order, confirmed on a physical sample before a bulk run is booked."
          />

          <ul className="mt-8 flex flex-col gap-4">
            {CHECKLIST.map((item, index) => (
              <Reveal key={item} index={index} as="li" className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-saffron-strong" />
                <span className="text-sm leading-relaxed text-foreground/85">
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>

          <Button
            className="mt-9"
            nativeButton={false}
            render={<a href="/contact#custom-print" />}
          >
            Start a Custom Order
          </Button>
        </div>

        <Reveal index={1}>
          <div className="rounded-3xl border border-border bg-card p-2 shadow-[0_24px_64px_-24px_rgba(20,16,10,0.18)]">
            <div className="rounded-2xl bg-accent/40 p-6">
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-saffron-strong uppercase">
                Order Specification
              </p>
              <dl className="mt-5 flex flex-col divide-y divide-border">
                {SPEC_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-3.5"
                  >
                    <dt className="text-sm text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export { CustomManufacturing };
