"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";

const CUSTOM_BAG_SRC = "/products/custom-printed-bag.png";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function PrintingHero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden bg-background pt-14 pb-20 md:pt-20 md:pb-28">
      <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <motion.div
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2.5 font-display text-xs font-semibold tracking-[0.18em] text-saffron-strong uppercase"
          >
            <span className="eyebrow-rule" aria-hidden="true" />
            Custom Branding
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="max-w-xl font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-semibold text-balance text-foreground"
          >
            Your logo. Your colours. Your story — on every bag.
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
          >
            In-house printing on every bag we manufacture — vivid colours,
            Pantone matching, and a digital proof you approve before a single
            bag goes to press.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="/contact#custom-print" />}
            >
              Request Printing Quote <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="whatsapp"
              nativeButton={false}
              render={
                <a
                  href="https://wa.me/919756565319?text=Hello%20Alorex%20Packaging%20LLP%2C%20I%20want%20to%20enquire%20about%20Custom%20Printed%20Non%20Woven%20Bags"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle /> WhatsApp Us
            </Button>
          </motion.div>

          <motion.p
            {...rise(0.3)}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <CheckCircle2 className="size-4 shrink-0 text-saffron-strong" />
            Custom printed runs from 500 pieces — proof approved before
            production.
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-border sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={CUSTOM_BAG_SRC}
              alt="Custom printed non woven bag with the Alorex Packaging logo"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/10" />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-[0_16px_48px_-12px_rgba(20,16,10,0.25)] ring-1 ring-border sm:left-6">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">
                7–15 Day Print Turnaround
              </p>
              <p className="text-xs text-muted-foreground">
                From order confirmation to dispatch
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { PrintingHero };
