import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/site/container";

const spacingClasses = {
  sm: "py-14 md:py-20",
  default: "py-20 md:py-28 lg:py-32",
  lg: "py-28 md:py-36 lg:py-40",
} as const;

const toneClasses = {
  ivory: "bg-background text-foreground",
  white: "bg-card text-card-foreground",
  navy: "bg-secondary text-secondary-foreground",
} as const;

type SectionProps = React.ComponentProps<"section"> & {
  /** Vertical rhythm — keep to these three, never a one-off py-*. */
  spacing?: keyof typeof spacingClasses;
  /** Background/foreground pairing for the section. */
  tone?: keyof typeof toneClasses;
  /** Set false to render children directly without the Container wrapper. */
  contained?: boolean;
};

/**
 * The single building block for page sections — owns vertical rhythm
 * and background tone so every page shares the same spacing system.
 */
function Section({
  className,
  spacing = "default",
  tone = "ivory",
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(spacingClasses[spacing], toneClasses[tone], className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}

export { Section };
