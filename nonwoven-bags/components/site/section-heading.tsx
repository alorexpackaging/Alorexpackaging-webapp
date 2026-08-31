import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Use on a Section with tone="navy" so colors flip correctly. */
  onDark?: boolean;
  className?: string;
  /**
   * Heading level of `title`. Every page must have exactly one `h1` —
   * pass "h1" on the SectionHeading that opens the page (its first
   * section) and leave every other one at the "h2" default.
   */
  as?: "h1" | "h2";
};

/**
 * The eyebrow + serif heading + supporting copy pattern used to open
 * every section on the site. Keep this as the only way headings are
 * built at the section level — never hand-roll one inline.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2.5 font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase",
            onDark ? "text-gold" : "text-saffron-strong",
            align === "center" && "justify-center"
          )}
        >
          <span className="eyebrow-rule" aria-hidden="true" />
          {eyebrow}
        </div>
      ) : null}

      <Heading
        className={cn(
          "font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-semibold text-balance",
          onDark ? "text-ivory" : "text-foreground"
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty",
            onDark ? "text-secondary-foreground/70" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
