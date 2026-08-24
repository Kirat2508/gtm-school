"use client";

import { venuePartners } from "@/content/logos";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";

export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden">
      <div
        className="parallax-bg absolute inset-0"
        style={{ backgroundImage: "url(/images/partners-ubcity.webp)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,18,16,0.55), rgba(26,18,16,0.4) 40%, rgba(26,18,16,0.65))",
        }}
        aria-hidden
      />

      <div className="relative z-10 section-pad">
        <div className="container-page text-center">
          <FadeIn>
            <p className="label mb-4 text-[rgba(255,248,240,0.45)]">HOSTED ATROSS</p>
            <h2 className="font-display text-[36px] leading-tight text-white md:text-[52px]">
              Backed by spaces
              <br />
              <em className="italic">where founders build.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[17px] text-[rgba(255,248,240,0.7)]">
              Sessions land at partner venues across Bangalore — from classrooms to
              workspaces.
            </p>
          </FadeIn>

          <Stagger className="mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {venuePartners.map((p) => (
              <StaggerItem key={p.name}>
                <div className="group rounded-2xl border border-white/15 bg-white/95 px-8 py-6 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: p.color }}
                    />
                    <span className="font-display text-xl text-[#1A1210] md:text-2xl">
                      {p.name}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
