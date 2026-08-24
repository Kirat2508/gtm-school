"use client";

import { FadeIn } from "@/lib/motion";

export function Problem() {
  return (
    <section className="section-pad bg-[var(--bg)]">
      <div className="container-page mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="label mb-10 text-[var(--text-tertiary)]">THE REALITY</p>
          <div className="font-display space-y-3 text-[26px] leading-snug text-[var(--text)] md:text-[32px]">
            <p>You built something people should want.</p>
            <p>But nobody knows it exists.</p>
            <p>You posted. You DMed. You tried ads.</p>
            <p>Nothing is compounding.</p>
          </div>
          <div className="my-12" />
          <p className="font-display text-[30px] font-bold leading-snug text-[var(--text)] md:text-[36px]">
            That is not a product problem.
            <br />
            That is a <em className="italic">go-to-market</em> problem.
          </p>
          <p className="mt-8 text-base text-[var(--text-secondary)]">
            And nobody teaches you how to fix it. Until now.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
