"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF6EE]">
      <div className="relative mx-auto max-w-[1280px] lg:min-h-[560px] xl:min-h-[600px]">
        <div className="pointer-events-none relative z-0 mx-auto mt-4 w-[min(100%,480px)] sm:w-[80%] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[62%] xl:w-[64%]">
          <Image
            src="/images/vidhana-soudha-hero.webp"
            alt="Vidhana Soudha, Bangalore"
            width={1672}
            height={941}
            priority
            className="h-auto w-full select-none object-contain object-right-bottom"
            sizes="(max-width: 1024px) 90vw, 64vw"
          />
        </div>

        <div className="relative z-10 max-w-[400px] px-5 pb-10 pt-6 md:max-w-[440px] md:px-10 lg:ml-8 lg:max-w-[480px] lg:px-14 lg:pt-10 lg:pb-16 xl:ml-12 xl:max-w-[500px]">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Image
              src="/images/ailc-logo.png"
              alt="AI Learn Circle"
              width={220}
              height={64}
              className="h-[52px] w-auto max-w-[200px] object-contain object-left md:h-[56px] md:max-w-[220px]"
              priority
            />
            <span
              className="font-editorial text-[14px] text-[#1B2A4A]/45"
              aria-hidden
            >
              ×
            </span>
            <Image
              src="/images/wipm-logo.png"
              alt="Women in Product Marketing"
              width={260}
              height={64}
              className="h-[52px] w-auto max-w-[220px] object-contain object-left md:h-[56px] md:max-w-[240px]"
              priority
            />
          </div>
          <p className="font-editorial mt-1.5 text-[11px] font-normal tracking-[0.02em] text-[#E8C547]/90 italic md:text-[12px]">
            presents
          </p>

          <h1 className="hero-gtm-title mt-5">The GTM School</h1>

          <p className="mt-6 max-w-[340px] text-[14px] leading-relaxed text-[#1B2A4A]/80 md:mt-7 md:text-[15px]">
            20 hands-on sessions. 6 weeks. The complete go-to-market education for
            builders who are done guessing and ready to sell.
          </p>

          <div className="relative mt-4 inline-block">
            <p className="font-editorial text-[18px] font-semibold text-[#1B2A4A] md:text-[20px]">
              28 Aug to 3rd Oct
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
          </div>

          <div className="mt-7">
            <a href="#events" className="hero-cta-grow">
              Let&apos;s grow
            </a>
            <p className="mt-3 text-[12px] text-[#1B2A4A]/70">
              In-person only. Limited seats per session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
