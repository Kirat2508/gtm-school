"use client";

import Image from "next/image";
import { channelLogos } from "@/content/logos";
import { FadeIn, RevealMedia, Stagger, StaggerItem } from "@/lib/motion";
import { HeadlineItalic } from "@/components/ui/HeadlineItalic";

function Atmosphere() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.28]"
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden
    >
      <path
        d="M420 520c18-22 48-24 64-8 12-16 36-18 52-4 16-12 40-8 48 10"
        stroke="#1B2A4A"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M780 180c12-14 32-14 42-4 8-12 26-12 36-2"
        stroke="#1B2A4A"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M640 140c4 3 8 3 12 0M648 146c4 3 8 3 12 0"
        stroke="#1B2A4A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M880 260c3 2 7 2 10 0"
        stroke="#1B2A4A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse
        cx="360"
        cy="200"
        rx="4"
        ry="6"
        stroke="#1B2A4A"
        strokeWidth="0.9"
        transform="rotate(25 360 200)"
      />
      <ellipse
        cx="520"
        cy="280"
        rx="3.5"
        ry="5.5"
        stroke="#1B2A4A"
        strokeWidth="0.9"
        transform="rotate(-18 520 280)"
      />
      <ellipse
        cx="700"
        cy="420"
        rx="3"
        ry="5"
        stroke="#1B2A4A"
        strokeWidth="0.9"
        transform="rotate(32 700 420)"
      />
    </svg>
  );
}

export function Channels() {
  return (
    <section
      id="channels"
      className="channels-editorial relative overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <Atmosphere />

      <RevealMedia
        variant="wipe"
        float={false}
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[78%] w-[min(48%,460px)] sm:w-[38%] lg:h-[95%] lg:w-[32%] xl:w-[34%]"
      >
        <Image
          src="/images/cherry-blossom.webp"
          alt=""
          fill
          loading="lazy"
          quality={60}
          className="origin-bottom-left scale-[1.28] object-contain object-left-bottom"
          sizes="(max-width: 1024px) min(48vw, 280px), 34vw"
        />
      </RevealMedia>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-10 xl:gap-6">
          <FadeIn
            direction="left"
            className="relative z-10 max-w-xl pl-0 sm:pl-[14%] lg:pl-[22%] xl:pl-[24%]"
          >
            <h2 className="section-headline text-[34px] leading-[1.15] md:text-[44px] lg:text-[48px]">
              Every channel your buyers{" "}
              <HeadlineItalic>actually live on.</HeadlineItalic>
            </h2>

            <p className="mt-6 max-w-[28rem] text-[15px] leading-relaxed text-[#1B2A4A]/85 md:text-[16px]">
              LinkedIn, Reddit, Product Hunt, AI search. Walk in with a hunch,
              walk out with a playbook.
            </p>
          </FadeIn>

          <Stagger
            className="relative z-10 mx-auto h-[340px] w-full max-w-[560px] sm:h-[400px] lg:mx-0 lg:ml-auto lg:h-[500px] lg:max-w-[560px] xl:h-[540px] xl:max-w-[600px]"
            fast
          >
            {channelLogos.map((logo, i) => (
              <StaggerItem key={logo.name} variant="pop">
                <div
                  className="channel-logo-float absolute"
                  style={{
                    left: logo.x,
                    top: logo.y,
                    width: logo.size + 20,
                    height: logo.size + 20,
                    transform: `rotate(${logo.rotation}deg)`,
                    animationDelay: `${(i % 5) * 0.35}s`,
                    animationDuration: `${4.6 + (i % 3) * 0.5}s`,
                  }}
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.size}
                    height={logo.size}
                    loading="lazy"
                    quality={70}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
