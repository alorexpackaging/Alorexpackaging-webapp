"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — multiplied into the delay. */
  index?: number;
  as?: "div" | "li";
};

/**
 * The single scroll-reveal primitive used across the homepage: a
 * short fade + rise, once per element, off by default for anyone
 * with reduced-motion set. Keep every section-level reveal going
 * through this rather than one-off motion.div calls.
 */
function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.08, ease: EASE },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export { Reveal };
