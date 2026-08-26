"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const TIPS = [
  "Shipped? now sell",
  "Build in public",
  "Talk to users",
  "Ship weekly",
  "Find your ICP",
];

/** Desktop-only: tip chips that follow the cursor while hovering the pills */
export function CursorFloatTips({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tipIndex, setTipIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, [active]);

  const tip =
    mounted &&
    createPortal(
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key={TIPS[tipIndex]}
            className="pointer-events-none fixed z-[200] whitespace-nowrap rounded-full border border-[#E8C547]/55 bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#1B2A4A] shadow-[0_10px_28px_rgba(27,42,74,0.18)]"
            style={{
              left: pos.x + 16,
              top: pos.y - 12,
            }}
            initial={{ opacity: 0, scale: 0.72, y: 8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -10, rotate: 4 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            {TIPS[tipIndex]}
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <div
      className="relative"
      onMouseEnter={(e) => {
        // Skip on touch / coarse pointers — desktop hover only
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          setTipIndex(0);
          setPos({ x: e.clientX, y: e.clientY });
          setActive(true);
        }
      }}
      onMouseLeave={() => setActive(false)}
      onMouseMove={(e) => {
        setPos({ x: e.clientX, y: e.clientY });
      }}
    >
      {children}
      {tip}
    </div>
  );
}
