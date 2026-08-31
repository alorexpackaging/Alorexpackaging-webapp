"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { QuoteField } from "@/lib/data/custom-quote-options";

type OptionPickerProps = {
  field: QuoteField;
  value: string;
  customText: string;
  onChange: (value: string) => void;
  onCustomTextChange: (value: string) => void;
};

/**
 * One pick-one-of-N chip group — the only interaction unit the
 * custom-bags configurator uses. Deliberately a single click per
 * field, no nested steps, no conditional field-to-field logic
 * beyond the one "custom" text reveal.
 */
function OptionPicker({
  field,
  value,
  customText,
  onChange,
  onCustomTextChange,
}: OptionPickerProps) {
  const showCustomInput = field.customValue && value === field.customValue;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <Label htmlFor={`${field.id}-group`} className="text-sm font-semibold text-foreground">
          {field.label}
        </Label>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          {field.description}
        </span>
      </div>

      <div
        id={`${field.id}-group`}
        role="radiogroup"
        aria-label={field.label}
        className="mt-3 flex flex-wrap gap-2"
      >
        {field.options.map((option) => {
          const selected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                selected
                  ? "border-transparent bg-primary text-primary-foreground shadow-[0_6px_16px_-6px_var(--brand-saffron-strong)]"
                  : "border-border bg-background text-foreground/75 hover:bg-muted hover:text-foreground"
              )}
            >
              {selected ? <Check className="size-3.5" /> : null}
              {option.swatch ? (
                <span
                  aria-hidden="true"
                  className="size-3 shrink-0 rounded-full ring-1 ring-black/10"
                  style={{ backgroundColor: option.swatch }}
                />
              ) : null}
              {option.label}
              {option.hint ? (
                <span
                  className={cn(
                    "hidden text-xs font-normal sm:inline",
                    selected
                      ? "text-primary-foreground/75"
                      : "text-muted-foreground"
                  )}
                >
                  · {option.hint}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {showCustomInput ? (
        <Input
          value={customText}
          onChange={(event) => onCustomTextChange(event.target.value)}
          placeholder={field.customPlaceholder}
          className="mt-2.5 max-w-sm"
          aria-label={`${field.label} — details`}
        />
      ) : null}
    </div>
  );
}

export { OptionPicker };
