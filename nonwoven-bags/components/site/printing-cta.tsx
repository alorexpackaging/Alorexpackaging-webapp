import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function PrintingCta() {
  return (
    <Section tone="navy">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          eyebrow="Start Your Order"
          title="Ready to put your brand on a bag?"
          description="Send us your logo and quantity — we'll come back with a quote, a lead time, and a digital proof to review."
          onDark
          className="max-w-xl"
        />

        <div className="flex shrink-0 flex-col items-start gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href="/contact#custom-print" />}>
              Request Printing Quote <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="whatsapp"
              nativeButton={false}
              render={
                <a
                  href="https://wa.me/919756565319?text=Hello%20Alorex%20Packaging%20LLP%2C%20I%20want%20to%20enquire%20about%20Custom%20Printed%20Non%20Woven%20Bags"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle /> WhatsApp Us
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="navy">MOQ 500 Pieces</Badge>
            <Badge variant="navy">7–15 Day Turnaround</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}

export { PrintingCta };
