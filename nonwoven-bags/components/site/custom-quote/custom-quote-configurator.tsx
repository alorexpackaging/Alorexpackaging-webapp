"use client";

import * as React from "react";
import { MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { QUOTE_FIELDS } from "@/lib/data/custom-quote-options";
import { OptionPicker } from "@/components/site/custom-quote/option-picker";

const WHATSAPP_NUMBER = "919756565319";
const ENQUIRY_EMAIL = "info@alorexpackaging.com";

type Selections = Record<string, string>;
type CustomTexts = Record<string, string>;

type ContactDetails = {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
};

const EMPTY_CONTACT: ContactDetails = {
  name: "",
  company: "",
  phone: "",
  email: "",
  city: "",
  notes: "",
};

/** Resolves a field's current selection into readable copy for the summary/message. */
function describeSelection(
  fieldId: string,
  selections: Selections,
  customTexts: CustomTexts
) {
  const field = QUOTE_FIELDS.find((f) => f.id === fieldId);
  if (!field) return "Not specified";
  const value = selections[fieldId];
  if (!value) return "Not specified";
  const option = field.options.find((o) => o.value === value);
  if (!option) return "Not specified";
  if (field.customValue === value && customTexts[fieldId]?.trim()) {
    return `${option.label} — ${customTexts[fieldId].trim()}`;
  }
  return option.label;
}

function CustomQuoteConfigurator() {
  const [selections, setSelections] = React.useState<Selections>({});
  const [customTexts, setCustomTexts] = React.useState<CustomTexts>({});
  const [contact, setContact] = React.useState<ContactDetails>(EMPTY_CONTACT);

  const updateSelection = (fieldId: string, value: string) =>
    setSelections((prev) => ({ ...prev, [fieldId]: value }));

  const updateCustomText = (fieldId: string, value: string) =>
    setCustomTexts((prev) => ({ ...prev, [fieldId]: value }));

  const updateContact = (key: keyof ContactDetails, value: string) =>
    setContact((prev) => ({ ...prev, [key]: value }));

  const hasQuantity = Boolean(
    selections.quantity &&
      (selections.quantity !== "custom" || customTexts.quantity?.trim())
  );
  const canSubmit =
    contact.name.trim().length > 1 &&
    contact.phone.trim().length > 6 &&
    hasQuantity;

  const message = React.useMemo(() => {
    const lines = [
      "New Custom Bag Enquiry — Alorex Packaging",
      "",
      `Bag Type: ${describeSelection("bagType", selections, customTexts)}`,
      `Size: ${describeSelection("size", selections, customTexts)}`,
      `GSM: ${describeSelection("gsm", selections, customTexts)}`,
      `Colour: ${describeSelection("colour", selections, customTexts)}`,
      `Printing: ${describeSelection("printing", selections, customTexts)}`,
      `Handle: ${describeSelection("handle", selections, customTexts)}`,
      `Quantity: ${describeSelection("quantity", selections, customTexts)}`,
      "",
      "Contact details:",
      `Name: ${contact.name || "—"}`,
      `Company: ${contact.company || "—"}`,
      `Phone: ${contact.phone || "—"}`,
      `Email: ${contact.email || "—"}`,
      `City / State: ${contact.city || "—"}`,
    ];
    if (contact.notes.trim()) {
      lines.push("", `Notes: ${contact.notes.trim()}`);
    }
    return lines.join("\n");
  }, [selections, customTexts, contact]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  const mailtoHref = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
    `Custom Bag Quote Request — ${contact.company || contact.name || "New Enquiry"}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      {/* ── Spec picker ─────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl font-semibold">
            Build Your Spec
          </CardTitle>
          <CardDescription>
            Tap one option per field — no drawing tools, no price
            calculator. Our team confirms feasibility and pricing on
            your quote call.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {QUOTE_FIELDS.map((field, index) => (
            <React.Fragment key={field.id}>
              <OptionPicker
                field={field}
                value={selections[field.id] ?? ""}
                customText={customTexts[field.id] ?? ""}
                onChange={(value) => updateSelection(field.id, value)}
                onCustomTextChange={(value) =>
                  updateCustomText(field.id, value)
                }
              />
              {index < QUOTE_FIELDS.length - 1 ? <Separator /> : null}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>

      {/* ── Live summary + contact + submit ────────────────────── */}
      <Card className="lg:sticky lg:top-24">
        <CardHeader>
          <CardTitle className="font-serif text-xl font-semibold">
            Your Spec
          </CardTitle>
          <CardDescription>
            Updates as you pick — this is exactly what we&apos;ll receive.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-1.5 text-sm">
          {QUOTE_FIELDS.map((field) => (
            <div
              key={field.id}
              className="flex items-baseline justify-between gap-4 border-b border-border/60 py-1.5 last:border-none"
            >
              <span className="text-muted-foreground">{field.label}</span>
              <span
                className={
                  selections[field.id]
                    ? "text-right font-medium text-foreground"
                    : "text-right text-muted-foreground/60 italic"
                }
              >
                {describeSelection(field.id, selections, customTexts)}
              </span>
            </div>
          ))}
        </CardContent>

        <CardContent className="flex flex-col gap-3 pt-2">
          <div className="grid gap-1.5">
            <Label htmlFor="contact-name">Full name *</Label>
            <Input
              id="contact-name"
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => updateContact("name", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="contact-phone">Mobile *</Label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={contact.phone}
                onChange={(e) => updateContact("phone", e.target.value)}
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="contact-company">Company</Label>
              <Input
                id="contact-company"
                placeholder="Business name"
                value={contact.company}
                onChange={(e) => updateContact("company", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                value={contact.email}
                onChange={(e) => updateContact("email", e.target.value)}
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="contact-city">City &amp; state</Label>
              <Input
                id="contact-city"
                placeholder="e.g. Surat, Gujarat"
                value={contact.city}
                onChange={(e) => updateContact("city", e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="contact-notes">Anything else? (optional)</Label>
            <Textarea
              id="contact-notes"
              placeholder="Reference sample, artwork status, delivery timeline…"
              value={contact.notes}
              onChange={(e) => updateContact("notes", e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-stretch gap-3">
          {canSubmit ? (
            <>
              <Button
                size="lg"
                variant="whatsapp"
                className="w-full"
                nativeButton={false}
                render={
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle /> Request Custom Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                nativeButton={false}
                render={<a href={mailtoHref} />}
              >
                <Mail /> Send by Email Instead
              </Button>
            </>
          ) : (
            <>
              <Button size="lg" className="w-full" disabled>
                <MessageCircle /> Request Custom Quote
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Add your name, mobile number and quantity to send your
                enquiry.
              </p>
            </>
          )}
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 shrink-0 text-saffron-strong" />
            No spam — goes straight to our sampling team.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export { CustomQuoteConfigurator };
