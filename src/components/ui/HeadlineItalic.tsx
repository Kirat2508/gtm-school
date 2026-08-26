"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Italic headline phrase with a hand-drawn zigzag that draws in on scroll */
export function HeadlineItalic({
  children,
  className = "",
  stroke = "#E8C547",
}: {
  children: ReactNode;
  className?: string;
  /** Underline stroke — use a darker tone when the italic text is already yellow */
  stroke?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <em className={`relative inline-block italic ${className}`}>
      <span className="relative z-[1]">{children}</span>
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 w-[110%] max-w-none"
        viewBox="0 0 120 8"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M1 5.2 C8 2.2, 14 6.8, 22 4.2 C30 1.6, 36 6.5, 44 3.8 C52 1.2, 58 6.2, 66 4 C74 1.8, 80 6.5, 88 3.5 C96 1, 104 6, 112 3.2 C115 2.4, 118 4.5, 119 5"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={
            reduce ? undefined : { pathLength: 1, opacity: 0.95 }
          }
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </em>
  );
}
