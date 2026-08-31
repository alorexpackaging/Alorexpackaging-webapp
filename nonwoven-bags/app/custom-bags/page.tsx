import type { Metadata } from "next";
import {
  ArrowRight,
  Factory,
  MessageCircle,
  Palette,
  Ruler,
  Truck,
} from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { HoverLift } from "@/components/site/hover-lift";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CustomQuoteConfigurator } from "@/components/site/custom-quote/custom-quote-configurator";

export const metadata: Metadata = {
  title: "Custom Non Woven Bags — Bulk Manufacturing",
  description:
    "Spec your custom non woven bag — bag type, size, GSM, colour, printing and handle — and request a bulk quote directly from Alorex Packaging's factory floor.",
};

const TRUST_STRIP = [
  { icon: Factory, label: "Factory-Direct Pricing" },
  { icon: Ruler, label: "Any Size, Any GSM" },
  { icon: Palette, label: "Custom Colour & Print" },
  { icon: Truck, label: "Pan-India Bulk Delivery" },
] as const;

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Share Your Spec",
    description:
      "Pick bag type, size, GSM, colour, printing, handle and quantity below — takes under a minute.",
  },
  {
    step: "02",
    title: "Sample & Quote",
    description:
      "Our team confirms feasibility and factory-direct pricing, with samples dispatched within 48 hours.",
  },
  {
    step: "03",
    title: "Confirm & Produce",
    description:
      "Approve the sample and we run your bulk order and ship it pan-India, on schedule.",
  },
] as const;

export default function CustomBagsPage() {
  return (
    <>
      {/* ── Intro ──────────────────────────────────────────────── */}
      <Section spacing="lg" tone="ivory">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Custom Manufacturing · B2B Bulk Orders"
            title={
              <>
                Custom Non Woven Bags,{" "}
                <span className="text-saffron-strong">Built to Your Spec.</span>
              </>
            }
            description="Tell us the bag type, size, GSM, colour, printing and handle you need — we'll confirm feasibility, sample it and quote factory-direct pricing for your bulk run."
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#configurator" />}>
              Start Your Spec <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="whatsapp"
              nativeButton={false}
              render={
                <a
                  href="https://wa.me/919756565319?text=Hello%20Alorex%20Packaging%20LLP%2C%20I%20want%20a%20custom%20bag%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle /> WhatsApp Our Team
            </Button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-6 border-t border-border pt-10 sm:grid-cols-4">
          {TRUST_STRIP.map(({ icon: Icon, label }, index) => (
            <Reveal key={label} index={index} className="flex items-center gap-3">
              <Icon className="size-5 shrink-0 text-saffron-strong" />
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Configurator ───────────────────────────────────────── */}
      <Section id="configurator" tone="white" spacing="lg">
        <SectionHeading
          eyebrow="One Screen · No Price Calculator"
          title="Tell Us What You Need"
          description="A simple spec sheet, not a design tool — pick one option per field, add your details and send it straight to our sampling team."
        />

        <div className="mt-12">
          <CustomQuoteConfigurator />
        </div>
      </Section>

      {/* ── How it works ───────────────────────────────────────── */}
      <Section tone="ivory">
        <SectionHeading
          eyebrow="After You Send It"
          title="From Spec to Shipped Order"
          description="Three steps, no back-and-forth — every enquiry gets a factory response, not an auto-reply."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, index) => (
            <Reveal key={item.step} index={index} as="li">
              <HoverLift>
                <Card className="h-full justify-between">
                  <CardHeader>
                    <span className="font-display text-2xl font-semibold text-saffron-strong/70">
                      {item.step}
                    </span>
                    <CardTitle className="font-serif text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <Section tone="navy">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <SectionHeading
            eyebrow="Ready When You Are"
            title="Bulk orders start with one honest quote."
            description="No minimums quoted online, no guessing — send your spec and a real quote comes back from the factory floor."
            onDark
            className="max-w-xl"
          />
          <div className="flex flex-shrink-0 flex-wrap items-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#configurator" />}>
              Request Custom Quote <ArrowRight />
            </Button>
            <Badge variant="navy">+91 97565 65319</Badge>
          </div>
        </Container>
      </Section>
    </>
  );
}
