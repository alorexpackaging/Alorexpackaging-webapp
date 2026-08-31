import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

function FactoryPreview() {
  return (
    <Section tone="ivory">
      <SectionHeading
        eyebrow="Inside The Factory"
        title="This is the floor your order actually runs on."
        description="No stock photography — the cutting, printing and stitching lines behind every bag in this catalog."
        align="center"
      />

      <Reveal index={1} className="mx-auto mt-12 max-w-5xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl ring-1 ring-border">
          <Image
            src="/factory/factory-floor.png"
            alt="Alorex Packaging production floor with fabric rolls and bag-making machinery"
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Alorex Packaging LLP — production floor
          </p>
          <a
            href="/contact#visit"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-strong"
          >
            Request a facility visit
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

export { FactoryPreview };
