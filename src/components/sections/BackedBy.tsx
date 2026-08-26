"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partnersAndSupportedBy } from "@/content/backed";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { HeadlineItalic } from "@/components/ui/HeadlineItalic";

function CornerMarks() {
  const arm = "absolute h-3 w-3 border-[#E8C547]";
  return (
    <>
      <span className={`${arm} top-0 left-0 border-t-2 border-l-2`} aria-hidden />
      <span className={`${arm} top-0 right-0 border-t-2 border-r-2`} aria-hidden />
      <span className={`${arm} bottom-0 left-0 border-b-2 border-l-2`} aria-hidden />
      <span className={`${arm} right-0 bottom-0 border-r-2 border-b-2`} aria-hidden />
    </>
  );
}

function PartnerLogo({
  logo,
  showDivider,
  showMobileDivider,
  large,
  className = "",
}: {
  logo: (typeof partnersAndSupportedBy)[number];
  showDivider?: boolean;
  showMobileDivider?: boolean;
  large?: boolean;
  className?: string;
}) {
  return (
    <StaggerItem variant="pop" className={`relative ${className}`}>
      <motion.div
        className="relative flex min-h-[88px] items-center justify-center px-3 py-4 md:min-h-[110px] md:px-4 md:py-6"
        whileHover={{ scale: 1.06, y: -2 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <Image
          src={logo.src}
          alt={logo.name}
          width={600}
          height={200}
          unoptimized
          className={
            large
              ? "h-12 w-auto max-w-[min(100%,148px)] object-contain object-center md:h-16 md:max-w-[220px]"
              : "h-10 w-auto max-w-[min(100%,132px)] object-contain object-center md:h-12 md:max-w-[170px]"
          }
        />
        {showDivider ? (
          <span
            className="absolute top-[22%] right-0 bottom-[22%] hidden w-px bg-[rgba(27,42,74,0.12)] md:block"
            aria-hidden
          />
        ) : null}
        {showMobileDivider ? (
          <span
            className="absolute top-[22%] right-0 bottom-[22%] w-px bg-[rgba(27,42,74,0.12)] md:hidden"
            aria-hidden
          />
        ) : null}
      </motion.div>
    </StaggerItem>
  );
}

export function BackedBy() {
  const row1 = partnersAndSupportedBy.slice(0, 4);
  const row2 = partnersAndSupportedBy.slice(4, 7);

  return (
    <section
      id="partners"
      className="relative bg-white px-5 py-14 md:px-10 md:py-16"
    >
      <svg
        className="pointer-events-none absolute top-10 right-[8%] hidden h-12 w-16 opacity-25 md:block"
        viewBox="0 0 64 48"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 28c8-10 18-10 24-2 6-8 16-7 22 2"
          stroke="#1B2A4A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M40 12c2.5 1.5 5 1.5 7.5 0"
          stroke="#1B2A4A"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[920px]">
        <FadeIn className="text-center">
          <h2 className="section-headline text-[32px] leading-tight md:text-[40px] lg:text-[44px]">
            Partners and <HeadlineItalic>supported by</HeadlineItalic>
          </h2>
        </FadeIn>

        <div className="relative mt-8 px-2 md:mt-10 md:px-4">
          <CornerMarks />

          {/* Desktop: 4 across. Mobile: 2×2 */}
          <Stagger className="grid grid-cols-2 md:grid-cols-4" fast>
            {row1.map((logo, i) => (
              <PartnerLogo
                key={logo.name}
                logo={logo}
                showDivider={i < row1.length - 1}
                showMobileDivider={i % 2 === 0}
              />
            ))}
          </Stagger>

          <div className="mx-auto h-px w-[92%] bg-[rgba(27,42,74,0.1)]" aria-hidden />

          {/*
            Desktop: 3 across (unchanged).
            Mobile: Leap | Bhive, then Quash centered alone —
            3-col on a narrow screen was the overlap root cause.
          */}
          <Stagger className="mx-auto grid max-w-[720px] grid-cols-2 md:grid-cols-3" fast>
            {row2.map((logo, i) => {
              const isLast = i === row2.length - 1;
              return (
                <PartnerLogo
                  key={logo.name}
                  logo={logo}
                  showDivider={i < row2.length - 1}
                  showMobileDivider={i === 0}
                  large={logo.name === "Leap Scholar"}
                  className={
                    isLast
                      ? "col-span-2 justify-self-center w-full max-w-[50%] md:col-span-1 md:max-w-none"
                      : ""
                  }
                />
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
