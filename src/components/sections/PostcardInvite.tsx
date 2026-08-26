"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { IconSeeding } from "@tabler/icons-react";

const PAPER = "#F0E6D4";
const PAPER_POCKET = "#E8DAC4";
const PAPER_BACK = "#E2D2B8";
const INK = "#1B2A4A";

/** Pointed flap — full-width hinge, wide obtuse point */
const FLAP_PATH = "M 0 0 H 200 V 92 L 100 128 L 0 92 Z";

const PAPER_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")";


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

  const cardY = useTransform(
    scrollYProgress,
    [0.55, 0.72, 0.88, 1],
    reduce ? ["-32%", "-32%", "-32%", "-32%"] : ["18%", "-12%", "-30%", "-32%"],
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
      className="relative bg-white"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-[72px] flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-5 py-10 md:top-[80px] md:min-h-[calc(100vh-80px)] md:px-10">
        <div
          className="relative mx-auto aspect-square w-full max-w-[min(90vw,460px)] overflow-visible md:max-w-[500px] lg:max-w-[540px]"
          style={{
            perspective: 1800,
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div
            className="absolute inset-0 z-[1] rounded-[2px]"
            style={{
              background: `linear-gradient(165deg, #F7EFE3 0%, ${PAPER} 45%, #E6D7C0 100%)`,
              boxShadow:
                "0 20px 44px rgba(27,42,74,0.08), 0 4px 14px rgba(27,42,74,0.04)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-multiply"
              style={{ backgroundImage: PAPER_GRAIN }}
              aria-hidden
            />
          </div>

          <svg
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden
          >
            <rect
              x="2.2"
              y="2.2"
              width="195.6"
              height="195.6"
              rx="1.25"
              stroke={INK}
              strokeWidth="0.85"
              opacity="0.32"
              vectorEffect="non-scaling-stroke"
            />
            <rect
              x="5.4"
              y="5.4"
              width="189.2"
              height="189.2"
              rx="0.75"
              stroke={INK}
              strokeWidth="0.4"
              opacity="0.14"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

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
                  filter: "drop-shadow(0 8px 18px rgba(27,42,74,0.1))",
                }}
              >
                <svg
                  viewBox="0 0 200 130"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="flapFace" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F7EFE3" />
                      <stop offset="48%" stopColor={PAPER} />
                      <stop offset="100%" stopColor="#E5D5BC" />
                    </linearGradient>
                  </defs>
                  <path d={FLAP_PATH} fill="url(#flapFace)" />
                  <path
                    d={FLAP_PATH}
                    fill="none"
                    stroke={INK}
                    strokeWidth="0.85"
                    strokeLinejoin="round"
                    opacity="0.28"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d={FLAP_PATH}
                    fill="none"
                    stroke={INK}
                    strokeWidth="0.35"
                    strokeLinejoin="round"
                    opacity="0.12"
                    transform="translate(0 1.4)"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-multiply"
                  style={{
                    backgroundImage: PAPER_GRAIN,
                    clipPath: "polygon(0 0, 100% 0, 100% 71%, 50% 100%, 0 71%)",
                  }}
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 71%, 50% 100%, 0 71%)",
                    WebkitClipPath:
                      "polygon(0 0, 100% 0, 100% 71%, 50% 100%, 0 71%)",
                  }}
                  aria-hidden
                >
                  <IconSeeding
                    size={54}
                    stroke={1.05}
                    className="absolute bottom-[28%] left-3.5 rotate-[-18deg] text-[#6B5344]/30 md:bottom-[30%] md:left-5 md:size-[60px]"
                  />

                  {/* Bangalore landmark — clipped to flap edge */}
                  <div className="absolute right-5 bottom-[30%] h-[68px] w-[80px] md:right-6 md:bottom-[32%] md:h-[76px] md:w-[90px]">
                    <Image
                      src="/images/sunset-glasshouse-postcard.png"
                      alt=""
                      fill
                      loading="lazy"
                      quality={70}
                      className="object-contain object-right-bottom opacity-[0.55] saturate-[0.85]"
                      sizes="90px"
                    />
                  </div>
                </div>

                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 px-5 pt-6 md:px-7 md:pt-7">
                  <div className="relative min-w-0 max-w-[58%] pt-0.5">
                    <p
                      className="text-[23px] leading-[1.05] tracking-[-0.02em] text-[#1B2A4A] md:text-[27px]"
                      style={{
                        fontFamily: "var(--font-headline)",
                        fontWeight: 600,
                      }}
                    >
                      The GTM School
                    </p>
                    <p className="mt-2.5 text-[11px] tracking-[0.03em] text-[#1B2A4A]/42 md:text-[12px]">
                      Bangalore · for builders
                    </p>
                  </div>

                  <div
                    className="relative mt-0.5 flex h-[64px] w-[50px] shrink-0 rotate-[2deg] flex-col items-center justify-center gap-0.5 md:h-[70px] md:w-[54px]"
                    style={{
                      background:
                        "linear-gradient(165deg, #F8F1E6 0%, #EFE3CF 100%)",
                      boxShadow:
                        "0 1px 4px rgba(27,42,74,0.06), inset 0 0 0 1px rgba(27,42,74,0.05)",
                      border: "1.25px dashed rgba(107, 83, 68, 0.45)",
                      borderRadius: "2px",
                    }}
                    aria-hidden
                  >
                    <span
                      className="text-[6.5px] font-medium tracking-[0.18em] text-[#6B5344]/80 uppercase"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      India
                    </span>
                    <span
                      className="text-[14px] font-semibold leading-none tracking-[-0.02em] text-[#1B2A4A] md:text-[15px]"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
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
                  <defs>
                    <linearGradient id="flapBack" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E9D9C2" />
                      <stop offset="100%" stopColor={PAPER_BACK} />
                    </linearGradient>
                  </defs>
                  <path d={FLAP_PATH} fill="url(#flapBack)" />
                  <path
                    d={FLAP_PATH}
                    fill="none"
                    stroke={INK}
                    strokeWidth="0.85"
                    strokeLinejoin="round"
                    opacity="0.24"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

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
                className="flex h-full flex-col rounded-[1.5px] border px-5 pt-5 pb-6 md:px-6 md:pt-6"
                style={{
                  backgroundColor: "#FAF4EA",
                  backgroundImage: `${PAPER_GRAIN}, linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0))`,
                  backgroundBlendMode: "multiply, normal",
                  borderColor: "rgba(27,42,74,0.14)",
                  boxShadow:
                    "0 -6px 20px rgba(27,42,74,0.07), 0 2px 8px rgba(27,42,74,0.04)",
                }}
              >
                <p className="font-hand text-[18px] leading-snug text-[#1B2A4A] md:text-[20px]">
                  Hey builder,
                </p>
                <p className="font-hand mt-1.5 text-[14px] leading-snug text-[#1B2A4A]/90 md:text-[15px]">
                  You&apos;ve built the thing. Now let&apos;s figure out how to
                  get people to care.
                </p>
                <p className="font-hand mt-1.5 text-[14px] leading-snug text-[#1B2A4A]/90 md:text-[15px]">
                  Come learn GTM the way it actually happens — through real
                  conversations, sharp feedback, chai, and a few things that
                  might not work the first time.
                </p>
                <p className="font-hand mt-1.5 text-[14px] leading-snug text-[#1B2A4A]/90 md:text-[15px]">
                  Bring your product. We&apos;ll bring the room.
                </p>
                <p className="font-hand mt-1.5 text-[14px] leading-snug text-[#1B2A4A]/90 md:text-[15px]">
                  Save a seat. We&apos;ll save you a chair.
                </p>
                <p className="font-hand mt-1.5 text-[14px] leading-snug text-[#1B2A4A]/90 md:text-[15px]">
                  Expect candid talks from operators who&apos;ve been in the
                  trenches, live teardown of real GTM motions, and practical
                  frameworks you can steal (ethically). Ask your toughest
                  questions. Share what you&apos;re stuck on. Leave with
                  clarity, not just inspiration.
                </p>
                <p className="font-hand mt-1.5 text-[14px] leading-snug text-[#1B2A4A]/90 md:text-[15px]">
                  Whether you&apos;re pre-launch or post-PMF, this is a space to
                  learn, build, and grow — together.
                </p>
                <div className="mt-2.5 pb-8 md:mt-3 md:pb-10">
                  <p className="font-hand text-[14px] text-[#1B2A4A] md:text-[15px]">
                    With love,
                  </p>
                  <p className="font-hand text-[18px] font-semibold text-[#E8C547] md:text-[20px]">
                    Team AILC &amp; WIPM
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 z-30 h-[40%] rounded-b-[2px]"
            style={{
              background: `linear-gradient(180deg, #F2E6D4 0%, ${PAPER_POCKET} 38%, #E0CFB4 100%)`,
              boxShadow:
                "0 -6px 18px rgba(27,42,74,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.42] mix-blend-multiply"
              style={{ backgroundImage: PAPER_GRAIN }}
              aria-hidden
            />

            <svg
              className="pointer-events-none absolute inset-x-0 top-0 h-9 w-full"
              viewBox="0 0 200 28"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M 5 11 C 58 3.5, 142 3.5, 195 11"
                fill="none"
                stroke={INK}
                strokeWidth="0.85"
                strokeLinecap="round"
                opacity="0.24"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 7 14.5 C 60 7, 140 7, 193 14.5"
                fill="none"
                stroke={INK}
                strokeWidth="0.4"
                strokeLinecap="round"
                opacity="0.1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-4 md:pb-5">
              <div className="flex items-center justify-center gap-4 md:gap-5">
                <Image
                  src="/images/ailc-logo.png"
                  alt="AI Learn Circle"
                  width={280}
                  height={180}
                  className="h-[72px] w-auto max-w-[200px] object-contain object-center opacity-[0.95] md:h-[84px] md:max-w-[230px]"
                />
                <span
                  className="font-editorial select-none text-[16px] leading-none text-[#1B2A4A]/35 md:text-[18px]"
                  aria-hidden
                >
                  ×
                </span>
                <Image
                  src="/images/wipm-logo.png"
                  alt="Women in Product Marketing"
                  width={280}
                  height={180}
                  className="h-[72px] w-auto max-w-[200px] object-contain object-center opacity-[0.95] md:h-[84px] md:max-w-[230px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
