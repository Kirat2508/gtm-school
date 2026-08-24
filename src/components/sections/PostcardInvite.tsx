"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const PAPER = "#E8D9C0";
const PAPER_BACK = "#E2D2B6";

/** Pointed flap — full-width hinge, wide obtuse point */
const FLAP_PATH = "M 0 0 H 200 V 92 L 100 128 L 0 92 Z";

export function PostcardInvite() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const flapRotate = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.66, 0.78],
    reduce ? [162, 162, 162, 162] : [0, 22, 105, 162],
  );

  // Closed: flap above letter. Open: flap below letter + pushed back in 3D
  const flapStack = useTransform(
    scrollYProgress,
    [0.38, 0.52, 0.68],
    [35, 22, 5],
  );
  const flapDepth = useTransform(
    scrollYProgress,
    [0.38, 0.55, 0.72],
    reduce ? [-120, -120, -120] : [30, -50, -160],
  );

  // ~85% out to read; bottom stays in the pocket
  const cardY = useTransform(
    scrollYProgress,
    [0.55, 0.72, 0.88, 1],
    reduce ? ["-26%", "-26%", "-26%", "-26%"] : ["18%", "-8%", "-24%", "-26%"],
  );
  const cardRotate = useTransform(
    scrollYProgress,
    [0.55, 0.88],
    reduce ? [-1, -1] : [0.6, -1],
  );

  return (
    <section
      ref={ref}
      id="postcard"
      className="relative bg-[#FBF6EE]"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-[72px] flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-5 py-10 md:top-[80px] md:min-h-[calc(100vh-80px)] md:px-10">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-medium tracking-[0.06em] text-[#E8C547]">
            A note for you
          </p>
          <h2 className="section-headline mt-3 text-[28px] leading-tight text-[#1B2A4A] md:text-[36px]">
            Something in the post
          </h2>
        </div>

        <div
          className="relative mx-auto mt-8 aspect-square w-full max-w-[380px] overflow-visible md:mt-10 md:max-w-[420px]"
          style={{
            perspective: 1800,
            perspectiveOrigin: "50% 0%",
          }}
        >
          {/* Back wall */}
          <div
            className="absolute inset-0 z-[1] rounded-[3px]"
            style={{
              background: PAPER,
              boxShadow: "0 12px 30px rgba(27,42,74,0.08)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.09'/%3E%3C/svg%3E\")",
              }}
              aria-hidden
            />
          </div>

          {/* Outer frame — behind the letter so it can exit past the top edge */}
          <svg
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden
          >
            <rect
              x="2.5"
              y="2.5"
              width="195"
              height="195"
              rx="1.5"
              stroke="#1B2A4A"
              strokeWidth="1.15"
              opacity="0.42"
              vectorEffect="non-scaling-stroke"
            />
            <rect
              x="5.8"
              y="5.8"
              width="188.4"
              height="188.4"
              rx="1"
              stroke="#1B2A4A"
              strokeWidth="0.55"
              opacity="0.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Flap — covers letter when closed; stays behind letter when open */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-[78%]"
            style={{ zIndex: flapStack }}
          >
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                rotateX: flapRotate,
                z: flapDepth,
                transformOrigin: "50% 0%",
                transformStyle: "preserve-3d",
              }}
            >
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                filter: "drop-shadow(0 6px 12px rgba(27,42,74,0.1))",
              }}
            >
              <svg
                viewBox="0 0 200 130"
                className="h-full w-full"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d={FLAP_PATH} fill={PAPER} />
                <path
                  d={FLAP_PATH}
                  fill="none"
                  stroke="#1B2A4A"
                  strokeWidth="1.15"
                  strokeLinejoin="round"
                  opacity="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={FLAP_PATH}
                  fill="none"
                  stroke="#1B2A4A"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  opacity="0.18"
                  transform="translate(0 1.2)"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Cover branding — name + stamp */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 px-5 pt-4 md:px-6 md:pt-5">
                <div className="min-w-0 pt-0.5">
                  <p className="text-[10px] font-medium tracking-[0.04em] text-[#8B5E4A] md:text-[11px]">
                    Postcard
                  </p>
                  <p className="font-editorial mt-1 text-[22px] leading-none text-[#1B2A4A] md:text-[26px]">
                    The GTM School
                  </p>
                  <p className="mt-1.5 text-[12px] text-[#1B2A4A]/55 md:text-[13px]">
                    Bangalore · for builders
                  </p>
                </div>
                <div
                  className="flex h-[58px] w-[48px] shrink-0 rotate-[3deg] flex-col items-center justify-center border-2 border-dashed border-[#87CEEB] bg-[#EDDFC8] md:h-[64px] md:w-[52px]"
                  aria-hidden
                >
                  <span className="text-[7px] font-semibold tracking-wider text-[#E8C547]">
                    India
                  </span>
                  <span className="font-editorial text-[13px] text-[#1B2A4A] md:text-[14px]">
                    BLR
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0"
              style={{
                transform: "rotateX(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              aria-hidden
            >
              <svg
                viewBox="0 0 200 130"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <path d={FLAP_PATH} fill={PAPER_BACK} />
                <path
                  d={FLAP_PATH}
                  fill="none"
                  stroke="#1B2A4A"
                  strokeWidth="1.05"
                  strokeLinejoin="round"
                  opacity="0.35"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            </motion.div>
          </motion.div>

          {/*
            Letter — z-20: always in front of back + open flap,
            always behind the front pocket (z-30).
          */}
          <div
            className="absolute inset-0 z-20 overflow-x-clip"
            style={{ clipPath: "inset(-70% 0 0 0)" }}
          >
            <motion.article
              style={{
                y: cardY,
                rotate: cardRotate,
              }}
              className="absolute inset-x-[6%] top-[8%] bottom-[8%] origin-bottom"
            >
              <div
                className="flex h-full flex-col rounded-sm border-[1.5px] border-[#1B2A4A]/18 px-5 pt-5 pb-6 md:px-6 md:pt-6"
                style={{
                  backgroundColor: "#F7F0E4",
                  boxShadow: "0 -4px 16px rgba(27,42,74,0.1)",
                }}
              >
                <p className="font-hand text-[22px] leading-snug text-[#1B2A4A] md:text-[24px]">
                  Hey builder,
                </p>
                <p className="font-hand mt-2 text-[17px] leading-snug text-[#1B2A4A]/90 md:text-[19px]">
                  Bangalore is waiting, and so are we.
                </p>
                <p className="font-hand mt-2 text-[17px] leading-snug text-[#1B2A4A]/90 md:text-[19px]">
                  Come learn GTM the way it is actually done: rooms, people,
                  chai, real talk.
                </p>
                <p className="font-hand mt-2 text-[17px] leading-snug text-[#1B2A4A]/90 md:text-[19px]">
                  Save a seat. We will save you a chair.
                </p>
                <div className="mt-auto border-t border-[#1B2A4A]/10 pt-4">
                  <p className="font-hand text-[17px] text-[#1B2A4A]">
                    With love,
                  </p>
                  <p className="font-hand text-[22px] font-semibold text-[#E8C547] md:text-[24px]">
                    Team AILC &amp; WIPM
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Front pocket — always in front of the letter’s lower edge */}
          <div
            className="absolute inset-x-0 bottom-0 z-30 h-[40%] rounded-b-[3px]"
            style={{
              background: PAPER,
              boxShadow: "0 -4px 14px rgba(27,42,74,0.06)",
            }}
          >
            <svg
              className="pointer-events-none absolute inset-x-0 top-0 h-8 w-full"
              viewBox="0 0 200 24"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M 4 10 C 60 3, 140 3, 196 10"
                fill="none"
                stroke="#1B2A4A"
                strokeWidth="1.05"
                strokeLinecap="round"
                opacity="0.34"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 6 13 C 62 6, 138 6, 194 13"
                fill="none"
                stroke="#1B2A4A"
                strokeWidth="0.55"
                strokeLinecap="round"
                opacity="0.16"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-5 md:pb-6">
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <Image
                  src="/images/ailc-logo.png"
                  alt="AI Learn Circle"
                  width={140}
                  height={40}
                  className="h-8 w-auto max-w-[120px] object-contain md:h-9 md:max-w-[140px]"
                />
                <span
                  className="font-editorial text-[13px] text-[#1B2A4A]/35"
                  aria-hidden
                >
                  ×
                </span>
                <Image
                  src="/images/wipm-logo.png"
                  alt="Women in Product Marketing"
                  width={160}
                  height={40}
                  className="h-8 w-auto max-w-[130px] object-contain md:h-9 md:max-w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
