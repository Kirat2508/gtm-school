"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { faqCards } from "@/content/faq";
import { FadeIn } from "@/lib/motion";

export function Faq() {
  return (
    <section id="faq" className="relative bg-[#FBF6EE] section-pad">
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-headline text-[30px] leading-tight text-[#1B2A4A] md:text-[42px]">
              4 questions that might
              <br />
              <em className="italic">be useful for you</em>
            </h2>
            <p className="mt-3 text-[15px] text-[#6B5B50] md:text-[16px]">
              Quick way to understand your immediate needs
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-4 lg:items-start lg:gap-8 lg:pb-4">
          {faqCards.map((card, i) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative ${card.y}`}
            >
              <div
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-[22px] border p-6 shadow-[0_8px_28px_rgba(26,18,16,0.08)] md:min-h-[300px] md:rounded-[24px] md:p-7"
                style={{
                  backgroundColor: card.tintSolid,
                  borderColor: card.border,
                }}
              >
                {/* Real BLR monument — very light so Q/A stays primary */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px] md:rounded-[24px]">
                  <Image
                    src={card.image}
                    alt=""
                    fill
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
