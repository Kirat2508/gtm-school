"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { faqCards } from "@/content/faq";
import { FadeIn } from "@/lib/motion";
import { HeadlineItalic } from "@/components/ui/HeadlineItalic";

export function Faq() {
  return (
    <section id="faq" className="relative bg-white section-pad">
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-headline text-[30px] leading-tight md:text-[42px]">
              4 questions that might
              <br />
              <HeadlineItalic>be useful for you</HeadlineItalic>
            </h2>
            <p className="mt-3 text-[15px] text-[#6B5B50] md:text-[16px]">
              Quick way to understand your immediate needs
            </p>
          </div>
        </FadeIn>

        <div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-4 lg:items-start lg:gap-8 lg:pb-4"
          style={{ perspective: 1200 }}
        >
          {faqCards.map((card, i) => (
            <motion.article
              key={card.number}
              className={`relative ${card.y}`}
              style={{ transformStyle: "preserve-3d" }}
              initial={{
                opacity: 0,
                y: -80,
                rotateX: 55,
                rotateZ: i % 2 === 0 ? -8 : 8,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateZ: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 16,
                delay: i * 0.14,
              }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
            >
              <div
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-[22px] border p-6 shadow-[0_8px_28px_rgba(26,18,16,0.08)] md:min-h-[300px] md:rounded-[24px] md:p-7"
                style={{
                  backgroundColor: card.tintSolid,
                  borderColor: card.border,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px] md:rounded-[24px]">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    loading="lazy"
                    quality={60}
                    className="object-cover object-center opacity-[0.07] saturate-50"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${card.tintSolid}ee 0%, ${card.tintSolid}99 40%, ${card.tintSolid}cc 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-1 flex-col">
                  <p
                    className="font-display text-[38px] leading-none tracking-tight md:text-[44px]"
                    style={{ color: card.accent }}
                  >
                    {card.number}
                  </p>
                  <h3 className="font-display mt-4 text-[18px] leading-snug text-[#1A1210] md:text-[20px]">
                    {card.question}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#6B5B50] md:text-[14px]">
                    {card.answer}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
