import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Use on dark (navy) backgrounds, e.g. the footer. */
  onDark?: boolean;
  className?: string;
};

/**
 * Brand lockup — emblem + wordmark. The emblem geometry is the
 * original Alorex mark (bag silhouette + handle ring); colors are
 * theme tokens rather than baked-in hex so it works on both the
 * light navbar and the navy footer.
 */
function Logo({ onDark = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Alorex Packaging LLP — Home"
      className={cn("flex items-center gap-2.5", className)}
    >
      <svg
        viewBox="0 0 60 68"
        className="h-8 w-auto shrink-0 md:h-9"
        aria-hidden="true"
      >
        <path
          d="M 15 28 Q 30 -10 45 28 L 40 28 Q 30 6 20 28 Z"
          className={onDark ? "fill-gold" : "fill-gold-light"}
        />
        <path
          fillRule="evenodd"
          className="fill-saffron-strong"
          d="M 15 28 L 4 66 L 56 66 L 45 28 Z M 20 28 L 12 60 L 48 60 L 40 28 Z"
        />
        <rect
          x="7"
          y="42"
          width="46"
          height="5.5"
          rx="1.5"
          className="fill-saffron-strong"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-[0.2em]",
            onDark ? "text-ivory" : "text-foreground"
          )}
        >
          ALOREX
        </span>
        <span
          className={cn(
            "mt-1 font-display text-[0.6rem] font-medium tracking-[0.3em]",
            onDark ? "text-gold" : "text-saffron-strong"
          )}
        >
          PACKAGING LLP
        </span>
      </span>
    </Link>
  );
}

export { Logo };
