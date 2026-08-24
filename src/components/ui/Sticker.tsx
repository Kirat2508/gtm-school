import type { CSSProperties } from "react";

type StickerProps = {
  label: string;
  rotation?: number;
  floatDuration?: number;
  className?: string;
};

export function Sticker({
  label,
  rotation = 0,
  floatDuration = 4,
  className = "",
}: StickerProps) {
  return (
    <div
      className={`sticker ${className}`}
      style={
        {
          "--rotation": `${rotation}deg`,
          "--float-duration": `${floatDuration}s`,
        } as CSSProperties
      }
    >
      {label}
    </div>
  );
}
