/**
 * Option catalog for the /custom-bags configurator. Kept as plain
 * data (no logic, no pricing) so the spec picker stays a simple
 * pick-one-per-field form rather than a computed configurator —
 * intentional, see app/custom-bags/page.tsx.
 */

export type QuoteOption = {
  value: string;
  label: string;
  /** Short supporting copy shown under the chip label on desktop. */
  hint?: string;
  /** Hex swatch — colour field only. */
  swatch?: string;
};

export type QuoteField = {
  id: string;
  label: string;
  description: string;
  options: QuoteOption[];
  /** Selecting this value reveals a free-text input for detail. */
  customValue?: string;
  customPlaceholder?: string;
};

export const QUOTE_FIELDS: QuoteField[] = [
  {
    id: "bagType",
    label: "Bag Type",
    description: "The cut and construction style.",
    options: [
      { value: "d-cut", label: "D-Cut Bags", hint: "Die-cut handle" },
      { value: "w-cut", label: "W-Cut Bags", hint: "Wider handle span" },
      { value: "u-cut", label: "U-Cut Bags", hint: "Compact, rounded cut" },
      {
        value: "loop-handle",
        label: "Loop Handle Bags",
        hint: "Stitched fabric loops",
      },
      { value: "box", label: "Box Bags", hint: "Gusseted, self-standing" },
      {
        value: "bopp",
        label: "BOPP Laminated",
        hint: "Glossy, print-ready finish",
      },
      { value: "unsure", label: "Not Sure — Advise Me" },
    ],
  },
  {
    id: "size",
    label: "Size",
    description: "Approximate finished dimensions.",
    options: [
      { value: "small", label: "Small", hint: "≈ 10 × 12 in" },
      { value: "medium", label: "Medium", hint: "≈ 12 × 14 in" },
      { value: "large", label: "Large", hint: "≈ 14 × 18 in" },
      { value: "jumbo", label: "Jumbo", hint: "18 in +" },
      { value: "custom", label: "Custom Size" },
    ],
    customValue: "custom",
    customPlaceholder: "e.g. 14 × 16 × 4 in (W × H × Gusset)",
  },
  {
    id: "gsm",
    label: "GSM (Fabric Weight)",
    description: "Thicker fabric, higher load capacity.",
    options: [
      { value: "60", label: "60 GSM" },
      { value: "70", label: "70 GSM" },
      { value: "80", label: "80 GSM" },
      { value: "90", label: "90 GSM" },
      { value: "100-plus", label: "100+ GSM" },
      { value: "unsure", label: "Not Sure — Recommend" },
    ],
  },
  {
    id: "colour",
    label: "Colour",
    description: "Base fabric colour before print.",
    options: [
      { value: "natural", label: "Natural", swatch: "#e9e2d3" },
      { value: "white", label: "White", swatch: "#ffffff" },
      { value: "navy", label: "Navy", swatch: "#1c2840" },
      { value: "red", label: "Red", swatch: "#b3352c" },
      { value: "green", label: "Green", swatch: "#2f6b45" },
      { value: "black", label: "Black", swatch: "#161616" },
      { value: "custom", label: "Custom / Pantone Match" },
    ],
    customValue: "custom",
    customPlaceholder: "e.g. Pantone 186 C, or match a sample you'll send",
  },
  {
    id: "printing",
    label: "Printing",
    description: "How the brand goes on the bag.",
    options: [
      { value: "unprinted", label: "Unprinted / Plain" },
      { value: "one-colour", label: "1-Colour Print" },
      { value: "multi-colour", label: "2–4 Colour Print" },
      { value: "digital", label: "Digital / Photo Print" },
      { value: "unsure", label: "Not Sure — Suggest Options" },
    ],
  },
  {
    id: "handle",
    label: "Handle",
    description: "Carry style for the finished bag.",
    options: [
      { value: "die-cut", label: "Die-Cut Handle" },
      { value: "loop", label: "Loop / Stitched Handle" },
      { value: "rope", label: "Rope / Cord Handle" },
      { value: "none", label: "No Handle" },
    ],
  },
  {
    id: "quantity",
    label: "Quantity",
    description: "Per design/colourway, bulk production run.",
    options: [
      { value: "5k-10k", label: "5,000 – 10,000 pcs" },
      { value: "10k-25k", label: "10,000 – 25,000 pcs" },
      { value: "25k-50k", label: "25,000 – 50,000 pcs" },
      { value: "50k-plus", label: "50,000+ pcs" },
      { value: "custom", label: "Custom Quantity" },
    ],
    customValue: "custom",
    customPlaceholder: "e.g. 7,500 pcs",
  },
];
