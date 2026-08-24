"use client";

type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Pill({ label, active, onClick, className = "" }: PillProps) {
  return (
    <button
      type="button"
      className={`pill ${active ? "active" : ""} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
