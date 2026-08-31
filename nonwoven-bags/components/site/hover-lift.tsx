"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type HoverLiftProps = React.ComponentProps<typeof motion.div>;

/**
 * The one hover treatment for card-like surfaces across the
 * homepage — a small spring lift, not a different gesture per
 * section. Wrap a Card in this rather than adding ad hoc
 * hover:-translate-y utilities.
 */
function HoverLift({ className, children, ...props }: HoverLiftProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { HoverLift };
