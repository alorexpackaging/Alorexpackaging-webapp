import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Why Choose Our Non Woven Bag Factory",
  description:
    "Factory-direct pricing, in-house custom printing and 48-hour sample dispatch — why bulk buyers choose Alorex Packaging as their non woven bag manufacturer.",
  path: "/why-us",
});

const WHATSAPP_HREF = whatsappHref(
  "Hello Alorex Packaging LLP, I'd like to discuss a bulk non woven bag order"
);

export default function WhyUsPage() {
  return (
    <>
      <Section spacing="lg" tone="ivory">
        <SectionHeading
          as="h1"
          eyebrow="Why Choose Us"
          title="What a factory-direct non woven bag manufacturer actually gets you."
          description="Anyone can quote a price per bag. What decides whether you reorder is what happens after the first invoice — and that comes down to owning the production line, not brokering it."
        />
      </Section>

      <WhyChooseUs />

      <Section tone="white">
        <SectionHeading
          eyebrow="Get Started"
          title="Compare us against your current supplier."
          description="Send your current spec and price — we'll quote the same bag, factory-direct, with a sample before you commit to a bulk run."
        />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Get a Bulk Quote <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="whatsapp"
            nativeButton={false}
            render={
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" />
            }
          >
            <MessageCircle /> WhatsApp Us
          </Button>
        </div>
      </Section>
    </>
  );
}
