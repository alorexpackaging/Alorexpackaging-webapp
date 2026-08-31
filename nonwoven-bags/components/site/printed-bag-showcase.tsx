import Image from "next/image";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";

const GALLERY = [
  {
    src: "/products/bopp-bag.png",
    alt: "Glossy white BOPP laminated non woven bag, ready for custom print",
  },
  {
    src: "/products/box-bag.png",
    alt: "Structured box-style non woven bag with a gusseted base",
  },
  {
    src: "/products/w-cut-bag.png",
    alt: "Orange W-Cut non woven bag with a wide handle span",
  },
  {
    src: "/products/loop-handle-bag.png",
    alt: "Non woven bag with stitched loop handles",
  },
] as const;

function PrintedBagShowcase() {
  return (
    <Section tone="ivory">
      <SectionHeading
        eyebrow="Printed Bag Showcase"
        title="Any bag style, one branding line."
        description="Custom printing isn't limited to one shape — the same logo, colours and finish carry across every style we manufacture."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <Reveal>
          <HoverLift className="h-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-border sm:aspect-[16/10] lg:h-full lg:aspect-auto">
              <Image
                src="/products/custom-printed-bag.png"
                alt="Blue non woven bag custom printed with the Alorex Packaging logo"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </HoverLift>
        </Reveal>

        <div className="grid grid-cols-2 gap-6">
          {GALLERY.map((item, index) => (
            <Reveal key={item.src} index={index + 1}>
              <HoverLift>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-border">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export { PrintedBagShowcase };
