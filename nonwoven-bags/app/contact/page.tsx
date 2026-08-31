import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { pageMetadata } from "@/lib/seo";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Get a Bulk Quote",
  description:
    "Get a bulk quote for custom non woven bags — call, WhatsApp or email Alorex Packaging LLP, or send your requirement through our enquiry form.",
  path: "/contact",
});

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: "Call us",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: Mail,
    label: "Email us",
    value: EMAIL,
    href: EMAIL_HREF,
  },
  {
    icon: MapPin,
    label: "Delivery",
    value: "Pan-India dispatch",
    href: undefined,
  },
] as const;

export default function ContactPage() {
  return (
    <Section spacing="lg" tone="ivory">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact Us"
            title="Tell us the bag, the quantity, the deadline."
            description="Whether it's a first sample or a repeat bulk order, the fastest way in is the form or WhatsApp — we typically respond within one business day."
          />

          <ul className="mt-10 flex flex-col gap-5">
            {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-saffron-strong">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-base font-medium text-foreground hover:text-saffron-strong"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-base font-medium text-foreground">
                      {value}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Card id="custom-print" className="scroll-mt-24">
          <CardContent className="pt-4">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Send an enquiry
            </h2>
            <p className="mt-1 mb-5 text-sm text-muted-foreground">
              Opens WhatsApp with your details pre-filled — nothing gets
              typed twice.
            </p>
            <EnquiryForm />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
