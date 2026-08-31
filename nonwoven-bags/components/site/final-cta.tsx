import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

function FinalCta() {
  return (
    <Section tone="navy" spacing="lg">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-semibold text-balance text-ivory">
          Ready to place your next bulk order?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-secondary-foreground/70">
          Send your specs — size, GSM, print, quantity — and get a sample
          dispatched within 48 hours.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" nativeButton={false} render={<a href="/contact" />}>
            Get a Bulk Quote <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="whatsapp"
            nativeButton={false}
            render={
              <a
                href="https://wa.me/919756565319?text=Hello%20Alorex%20Packaging%20LLP%2C%20I%27d%20like%20a%20bulk%20quote%20for%20Non%20Woven%20Bags"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle /> WhatsApp Us
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export { FinalCta };
