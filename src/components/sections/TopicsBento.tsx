"use client";

import { motion } from "framer-motion";
import { bentoItems } from "@/content/bento";
import { site } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";

export function TopicsBento() {
  return (
    <section id="topics" className="section-pad bg-[var(--bg-warm)]">
      <div className="container-page">
        <FadeIn>
          <p className="label mb-4 text-[var(--text-tertiary)]">CURRICULUM</p>
          <h2 className="font-display text-[36px] leading-tight text-[var(--text)] md:text-[52px]">
            Topics, dates &amp;{" "}
            <em className="italic">what you ship.</em>
          </h2>
          <p className="mt-4 max-w-xl text-[17px] text-[var(--text-secondary)]">
            Six modules. Twenty sessions. Every card is something you walk out
            with — not a slide deck.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-3">
          {bentoItems.map((item) => (
            <StaggerItem key={item.id} className={item.span ?? ""}>
              <motion.article
                whileHover={{ y: -4 }}
                className="bento-card h-full"
              >
                <span
                  className="mb-4 inline-block h-2 w-2 rounded-full"
                  style={{ background: item.color }}
                />
                {item.type === "stat" ? (
                  <>
                    <p className="font-display text-[72px] leading-none text-[var(--text)] md:text-[88px]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--text)]">
                      {item.subtitle}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                      {item.meta}
                    </p>
                  </>
                ) : item.type === "pipeline" ? (
                  <>
                    <p className="label text-[var(--text-tertiary)]">{item.meta}</p>
                    <h3 className="font-display mt-2 text-2xl text-[var(--text)]">
                      {item.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.subtitle?.split(" → ").map((step, i) => (
                        <span
                          key={step}
                          className="rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                          style={{
                            borderLeft: i === 0 ? `3px solid ${item.color}` : undefined,
                          }}
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="label text-[var(--text-tertiary)]">{item.meta}</p>
                    <h3 className="font-display mt-2 text-xl text-[var(--text)] md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      {item.subtitle}
                    </p>
                    {item.type === "session" ? (
                      <div className="mt-4">
                        <CtaButton
                          href={site.eventUrlPlaceholder}
                          variant="outline"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="!text-xs !py-2"
                        >
                          {site.checkEventLabel}
                        </CtaButton>
                      </div>
                    ) : null}
                  </>
                )}
                {item.type === "module" || item.type === "stat" ? (
                  <div
                    className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full opacity-20 blur-2xl"
                    style={{ background: item.color }}
                    aria-hidden
                  />
                ) : null}
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
