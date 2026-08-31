import * as React from "react";
import { cn } from "@/lib/utils";
import type { BagVariant } from "@/lib/data/products";

type BagIconProps = {
  variant: BagVariant;
  className?: string;
};

/**
 * A small technical line-drawing icon system — one per bag style,
 * built from shared stroke conventions rather than photography.
 * Deliberately spec-sheet in feel: it's what distinguishes an actual
 * cut/handle style, not a generic "shopping bag" clip-art glyph.
 */
function BagIcon({ variant, className }: BagIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-full", className)}
      aria-hidden="true"
    >
      {variant === "d-cut" && (
        <path {...common} d="M14,54 L22,20 Q32,30 42,20 L50,54 Z" />
      )}

      {variant === "w-cut" && (
        <path
          {...common}
          d="M14,54 L22,20 L28,28 L32,20 L36,28 L42,20 L50,54 Z"
        />
      )}

      {variant === "u-cut" && (
        <path {...common} d="M17,54 L24,22 Q32,36 40,22 L47,54 Z" />
      )}

      {variant === "loop-handle" && (
        <>
          <path {...common} d="M14,54 L20,20 L44,20 L50,54 Z" />
          <path {...common} d="M24,20 C24,9 30,9 30,20" />
          <path {...common} d="M34,20 C34,9 40,9 40,20" />
        </>
      )}

      {variant === "box" && (
        <>
          <path {...common} d="M14,54 L20,20 L44,20 L50,54 Z" />
          <path {...common} d="M14,46 L50,46" opacity={0.5} />
          <path {...common} d="M20,46 L14,54 M44,46 L50,54" opacity={0.5} />
          <rect
            {...common}
            x="27"
            y="13"
            width="10"
            height="7"
            rx="1.75"
          />
        </>
      )}

      {variant === "bopp" && (
        <>
          <path {...common} d="M14,54 L21,20 Q32,27 43,20 L50,54 Z" />
          <path {...common} d="M21,32 L35,50" opacity={0.35} />
          <rect
            {...common}
            x="37"
            y="41"
            width="9"
            height="9"
            rx="1.5"
            strokeDasharray="2.5 2.5"
            opacity={0.7}
          />
        </>
      )}
    </svg>
  );
}

export { BagIcon };
