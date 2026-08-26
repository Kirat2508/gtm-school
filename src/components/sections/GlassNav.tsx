"use client";

import Image from "next/image";
import { site } from "@/content/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Channels", href: "#channels" },
  { label: "Topics", href: "#topics" },
  { label: "Events", href: "#events" },
  { label: "Partners", href: "#partners" },
  { label: "Faq", href: "#faq" },
];

export function GlassNav() {
  return (
    <nav className="glass-nav" aria-label="Primary">
      <a href="#" className="glass-nav-logo" aria-label="AI Learn Circle × WIPM">
        <Image
          src="/images/ailc-wipm-nav-logo.png"
          alt=""
          width={872}
          height={274}
          className="h-7 w-auto max-w-[148px] object-contain md:h-8 md:max-w-[168px]"
          priority
          quality={65}
          sizes="168px"
        />
      </a>

      <span className="glass-nav-rule" aria-hidden />

      <div className="flex max-w-[min(70vw,520px)] items-center gap-0.5 overflow-x-auto md:max-w-none">
        {links.map((item) => (
          <a key={item.href} href={item.href} className="glass-nav-link">
            {item.label}
          </a>
        ))}
      </div>

      <span className="glass-nav-rule" aria-hidden />

      <a
        href={site.eventUrlPlaceholder}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-nav-cta"
      >
        View Events
      </a>
    </nav>
  );
}
