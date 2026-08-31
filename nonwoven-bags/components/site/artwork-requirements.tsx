import { FileCheck2, Image as ImageIcon, SwatchBook, Type } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const REQUIREMENTS = [
  {
    icon: FileCheck2,
    title: "Vector files, where possible",
    detail:
      "AI, EPS, PDF or SVG for logos and text — vector artwork stays sharp at any print size, unlike a raster file stretched up.",
  },
  {
    icon: ImageIcon,
    title: "High-resolution raster",
    detail:
      "For photographs or textured artwork, send files at a minimum of 300 DPI at the actual size they'll print.",
  },
  {
    icon: SwatchBook,
    title: "Pantone or brand colour codes",
    detail:
      "If your brand colour is fixed, share the exact Pantone reference so it's matched on press rather than approximated.",
  },
  {
    icon: Type,
    title: "Outlined or supplied fonts",
    detail:
      "Convert text to outlines, or send the font files with your artwork, so nothing gets substituted before printing.",
  },
] as const;

function ArtworkRequirements() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Artwork Requirements"
        title="Send us these, and your first proof comes back accurate."
        description="A digital proof is part of every printed order — the fewer guesses it has to make about your artwork, the closer that first proof lands to what you had in mind."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {REQUIREMENTS.map(({ icon: Icon, title, detail }, index) => (
          <Reveal key={title} index={index} className="h-full">
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-background p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-saffron-strong">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal index={REQUIREMENTS.length} className="mt-8">
        <p className="text-sm text-muted-foreground">
          No artwork yet? Our team can also work from a rough sketch, a
          reference image or your existing packaging — we&apos;ll turn it into
          a print-ready proof for your approval.
        </p>
      </Reveal>
    </Section>
  );
}

export { ArtworkRequirements };
