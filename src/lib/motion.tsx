"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const springSoft = { type: "spring" as const, stiffness: 120, damping: 18 };
const springPop = { type: "spring" as const, stiffness: 260, damping: 18 };

function useIsMobile() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(max-width: 768px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(max-width: 768px)").matches,
    () => false,
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.86, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.68, rotate: -6, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: springPop,
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

type Direction = "up" | "down" | "left" | "right" | "scale" | "pop";

const directionMap: Record<Direction, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  pop: popIn,
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.2,
  direction = "up",
}: Props & { direction?: Direction }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={directionMap[direction]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  fast = false,
  amount = 0.12,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -6% 0px" }}
      variants={fast ? staggerFast : stagger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: Direction;
}) {
  return (
    <motion.div className={className} variants={directionMap[variant]}>
      {children}
    </motion.div>
  );
}

type RevealVariant = "rise" | "bloom" | "wipe" | "drift";

const revealPresetsDesktop: Record<
  RevealVariant,
  {
    initial: Record<string, number | string>;
    animate: Record<string, number | string>;
    transition: Record<string, unknown>;
  }
> = {
  rise: {
    initial: { opacity: 0, scale: 1.12, y: 56, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.05, ease },
  },
  bloom: {
    initial: { opacity: 0, scale: 0.82, rotate: -2, filter: "blur(12px)" },
    animate: { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" },
    transition: { duration: 1.1, ease },
  },
  wipe: {
    initial: {
      opacity: 0.35,
      clipPath: "inset(18% 8% 0% 8% round 12px)",
      scale: 1.06,
      y: 28,
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      y: 0,
    },
    transition: { duration: 1.15, ease },
  },
  drift: {
    initial: { opacity: 0, x: 64, scale: 1.05, rotate: 1.5 },
    animate: { opacity: 1, x: 0, scale: 1, rotate: 0 },
    transition: { ...springSoft, mass: 0.9 },
  },
};

/** Same motion without CSS blur — blur is costly on mobile GPUs */
const revealPresetsMobile: Record<
  RevealVariant,
  {
    initial: Record<string, number | string>;
    animate: Record<string, number | string>;
    transition: Record<string, unknown>;
  }
> = {
  rise: {
    initial: { opacity: 0, scale: 1.06, y: 36 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.7, ease },
  },
  bloom: {
    initial: { opacity: 0, scale: 0.92, y: 24 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.7, ease },
  },
  wipe: {
    initial: { opacity: 0, y: 28, scale: 1.03 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.75, ease },
  },
  drift: {
    initial: { opacity: 0, x: 32, scale: 1.02 },
    animate: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 0.7, ease },
  },
};

/** Image / media reveal — pick a variant for variety across sections */
export function RevealMedia({
  children,
  className = "",
  delay = 0,
  variant = "rise",
  float = true,
}: Props & { variant?: RevealVariant; float?: boolean }) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const preset = (isMobile ? revealPresetsMobile : revealPresetsDesktop)[
    variant
  ];
  const enableFloat = float && !reduce && !isMobile;

  return (
    <motion.div
      className={className}
      initial={reduce ? false : preset.initial}
      whileInView={reduce ? undefined : preset.animate}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ ...preset.transition, delay }}
    >
      <div
        className={`relative h-full w-full${enableFloat ? " media-float" : ""}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
