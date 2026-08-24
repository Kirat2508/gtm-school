"use client";

import { AddIcon } from "@solar-icons/react/bold-duotone/add";
import { MinusIcon } from "@solar-icons/react/bold-duotone/minus";
import { useState, type ReactNode } from "react";

type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  accentColor,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[rgba(26,18,16,0.08)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          {accentColor ? (
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: accentColor }}
            />
          ) : null}
          <span className="font-display text-xl font-semibold text-[var(--text)] md:text-2xl">
            {title}
          </span>
        </div>
        {open ? (
          <MinusIcon size={20} className="shrink-0 text-[var(--text-secondary)]" />
        ) : (
          <AddIcon size={20} className="shrink-0 text-[var(--text-secondary)]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[4000px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

type FaqAccordionProps = {
  question: string;
  answer: string;
};

export function FaqAccordionItem({ question, answer }: FaqAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[rgba(26,18,16,0.08)] py-6">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-[var(--text)] md:text-xl">
          {question}
        </span>
        {open ? (
          <MinusIcon
            size={20}
            className="mt-1 shrink-0 text-[var(--text-secondary)]"
          />
        ) : (
          <AddIcon
            size={20}
            className="mt-1 shrink-0 text-[var(--text-secondary)]"
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
          {answer}
        </p>
      </div>
    </div>
  );
}
