import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm";
};

export function Card({ children, className = "", size = "default" }: CardProps) {
  return (
    <div className={`${size === "sm" ? "card-sm" : "card"} ${className}`}>
      {children}
    </div>
  );
}
