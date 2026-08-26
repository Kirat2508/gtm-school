"use client";

import { site } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/lib/motion";

export function RegistrationCta() {
  return (
    <section
      id="register"
      className="relative overflow-hidden"
      style={{ background: "var(--sky)" }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,248,240,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(26,18,16,0.25), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 section-pad">
        <div className="container-page mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-display text-[40px] leading-tight text-white md:text-[56px]">
              Stop guessing
              <br />
              <em className="italic">your GTM.</em>
            </h2>
            <p className="mt-6 text-lg text-white/85">
              15 sessions. 6 weeks. Bangalore. Sept to Oct 2026.
              <br />
              Every session is free. Every seat is limited.
            </p>
            <div className="mt-10">
              <CtaButton
                href={site.eventUrlPlaceholder}
                variant="light"
                className="!px-10 !py-[18px] !text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.registerCta.label}
              </CtaButton>
              <p className="mt-4 text-sm text-white/50">
                First come, first served. No recordings. In-person only.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
