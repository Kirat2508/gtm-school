"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => true,
  );

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1280px] lg:min-h-[560px] xl:min-h-[600px]">
        {/* Text first in DOM so mobile shows GTM School before the landmark */}
        <div className="relative z-10 max-w-[440px] px-5 pb-6 pt-6 md:max-w-[480px] md:px-10 lg:ml-8 lg:max-w-[520px] lg:px-14 lg:pt-10 lg:pb-16 xl:ml-12 xl:max-w-[540px]">
          {/* Spacer: keeps room formerly used by logos + "presents" */}
          <div className="h-[62px] md:h-[68px]" aria-hidden />

          <motion.h1
            className="hero-gtm-title mt-5"
            initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            The GTM School
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[360px] text-[14px] leading-relaxed text-[#1B2A4A]/80 md:mt-7 md:text-[15px]"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            20 hands-on sessions. Free. In person, in Bangalore.
          </motion.p>

          <motion.p
            className="mt-3 max-w-[360px] text-[14px] leading-relaxed text-[#1B2A4A]/80 md:text-[15px]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            The complete go-to-market playbook for builders who are done guessing
            and ready to sell.
          </motion.p>

          <motion.p
            className="mt-3 max-w-[360px] text-[14px] leading-relaxed text-[#1B2A4A]/80 md:text-[15px]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
          >
            Every session ends with something you ship: a written ICP, a live
            landing page, a working agent.
          </motion.p>

          <motion.div
            className="relative mt-5 inline-block"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
          >
            <p className="font-editorial text-[18px] font-semibold text-[#1B2A4A] md:text-[20px]">
              28 August to 3 October
            </p>
            <svg
              className="pointer-events-none absolute -bottom-1 left-0 w-[108%] max-w-none"
              viewBox="0 0 200 10"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 6.5C38 3.5 72 2.5 110 4.5C148 6.5 172 7.5 198 4"
                stroke="#E8C547"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </motion.div>

          <motion.div
            className="mt-7"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            <a href="#events" className="hero-cta-grow">
              Save your seat
            </a>
            <p className="mt-3 text-[12px] text-[#1B2A4A]/70">
              In-person only. Limited seats per session.
            </p>
          </motion.div>
        </div>

        {/* Absolute on desktop (unchanged); stacks under copy on mobile */}
        <motion.div
          className="pointer-events-none relative z-0 mx-auto mt-2 w-[min(100%,480px)] pb-6 sm:w-[80%] lg:absolute lg:right-0 lg:bottom-10 lg:mt-0 lg:w-[62%] lg:-translate-y-3 lg:pb-0 xl:bottom-12 xl:w-[64%] xl:-translate-y-4"
          initial={
            reduce
              ? false
              : isDesktop
                ? {
                    opacity: 0,
                    x: 72,
                    y: 36,
                    scale: 1.12,
                    filter: "blur(10px)",
                    rotate: 1.5,
                  }
                : { opacity: 0, y: 24, scale: 1.04 }
          }
          animate={
            isDesktop
              ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  rotate: 0,
                }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{
            duration: isDesktop ? 1.25 : 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: isDesktop ? 0.2 : 0.1,
          }}
        >
          <div className={reduce || !isDesktop ? undefined : "media-float"}>
            <Image
              src="/images/vidhana-soudha-hero.webp"
              alt="Vidhana Soudha, Bangalore"
              width={1672}
              height={941}
              priority
              quality={isDesktop ? 78 : 58}
              className="h-auto w-full select-none object-contain object-right-bottom"
              sizes="(max-width: 768px) min(100vw, 480px), (max-width: 1024px) 80vw, 64vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
