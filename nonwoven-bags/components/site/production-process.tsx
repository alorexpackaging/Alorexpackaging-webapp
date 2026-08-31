"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { PROCESS_STEPS } from "@/lib/data/process";

const SCROLL_OFFSET: ["start 0.8", "end 0.35"] = ["start 0.8", "end 0.35"];

function StepNode({
  label,
  icon: Icon,
  index,
}: {
  label: string;
  icon: (typeof PROCESS_STEPS)[number]["icon"];
  index: number;
}) {
  return (
    <Reveal index={index} className="relative z-10 flex flex-col items-center gap-3 text-center">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-saffron-strong bg-card text-saffron-strong">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-[0.7rem] font-semibold text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-0.5 max-w-[6.5rem] text-sm font-medium text-foreground">
          {label}
        </p>
      </div>
    </Reveal>
  );
}

function ProductionProcess() {
  const desktopRef = React.useRef<HTMLDivElement>(null);
  const mobileRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopRef,
    offset: SCROLL_OFFSET,
  });
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: SCROLL_OFFSET,
  });

  const scaleX = useTransform(desktopProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(mobileProgress, [0, 1], [0, 1]);

  return (
    <Section tone="ivory">
      <SectionHeading
        eyebrow="Production Process"
        title="Nine stages, one continuous run."
        description="Raw material to dispatched carton — every stage happens on our floor, in this order, on every order."
      />

      {/* Desktop — horizontal pipeline */}
      <div ref={desktopRef} className="relative mt-16 hidden lg:block">
        <div className="absolute top-7 right-0 left-0 h-px bg-border" />
        <motion.div
          className="absolute top-7 left-0 h-px origin-left bg-saffron-strong"
          style={{ scaleX: reduceMotion ? 1 : scaleX, width: "100%" }}
        />
        <div className="relative grid grid-cols-9 gap-x-1">
          {PROCESS_STEPS.map((step, index) => (
            <StepNode key={step.label} index={index} {...step} />
          ))}
        </div>
      </div>

      {/* Mobile / tablet — vertical pipeline */}
      <div ref={mobileRef} className="relative mt-14 lg:hidden">
        <div className="absolute top-0 bottom-0 left-7 w-px bg-border" />
        <motion.div
          className="absolute top-0 left-7 w-px origin-top bg-saffron-strong"
          style={{ scaleY: reduceMotion ? 1 : scaleY, height: "100%" }}
        />
        <div className="relative flex flex-col gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal
              key={step.label}
              index={index}
              className="relative z-10 flex items-center gap-4"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-saffron-strong bg-card text-saffron-strong">
                <step.icon className="size-5" />
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {step.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export { ProductionProcess };
