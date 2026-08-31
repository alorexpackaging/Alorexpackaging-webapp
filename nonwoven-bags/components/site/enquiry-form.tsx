"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WHATSAPP_NUMBER } from "@/lib/site-config";

/**
 * The site has no backend to receive form submissions, so the
 * enquiry form composes a pre-filled WhatsApp message from the
 * fields instead of pretending to "send" anywhere — consistent with
 * the WhatsApp-first contact pattern used across the rest of the site.
 */
function EnquiryForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const requirement = String(data.get("requirement") ?? "").trim();

    const lines = [
      "Hello Alorex Packaging LLP, I'd like to enquire about non woven bags.",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      city && `City: ${city}`,
      requirement && `Requirement: ${requirement}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4"
      aria-label="Non woven bag enquiry form"
    >
      <div className="grid gap-1.5">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="phone">Mobile number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="city">City &amp; state</Label>
        <Input id="city" name="city" placeholder="e.g. Surat, Gujarat" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="requirement">What do you need?</Label>
        <Input
          id="requirement"
          name="requirement"
          placeholder="e.g. 10,000 W-Cut bags, custom printed"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Enquiry on WhatsApp <Send />
      </Button>
    </form>
  );
}

export { EnquiryForm };
