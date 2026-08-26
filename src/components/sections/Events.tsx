"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChatRoundIcon } from "@solar-icons/react/linear/chat-round";
import { CodeIcon } from "@solar-icons/react/linear/code";
import { GlobalIcon } from "@solar-icons/react/linear/global";
import { HashtagIcon } from "@solar-icons/react/linear/hashtag";
import { RocketIcon } from "@solar-icons/react/linear/rocket";
import { UsersGroupRoundedIcon } from "@solar-icons/react/linear/users-group-rounded";
import { eventTopics, type EventTopic } from "@/content/events";
import { site } from "@/content/site";
import { FadeIn, RevealMedia } from "@/lib/motion";
import { HeadlineItalic } from "@/components/ui/HeadlineItalic";

const iconMap = {
  users: UsersGroupRoundedIcon,
  chat: ChatRoundIcon,
  hashtag: HashtagIcon,
  rocket: RocketIcon,
  global: GlobalIcon,
  code: CodeIcon,
} as const;

function EventRow({ topic }: { topic: EventTopic }) {
  const Icon = iconMap[topic.icon];

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -42, y: 14, scale: 0.96 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 220, damping: 20 },
        },
      }}
      className="flex items-center gap-3 rounded-[10px] border border-[rgba(27,42,74,0.14)] bg-white/50 px-3.5 py-3 md:gap-3.5 md:px-4 md:py-3.5"
    >
      <Icon
        size={16}
        strokeWidth={1.55}
        color="#E8C547"
        className="shrink-0 opacity-90"
        aria-hidden
      />
      <span className="font-editorial text-[14px] leading-snug font-semibold text-[#1B2A4A] md:text-[15px]">
        {topic.title}
      </span>
    </motion.li>
  );
}

/** Hand-drawn callout: text above, short curve below pointing left at the CTA */
function ManyMoreCue() {
  return (
    <div
      className="pointer-events-none ml-3 hidden select-none sm:flex sm:flex-col sm:items-start"
      aria-hidden
    >
      <span className="font-editorial ml-6 rotate-[6deg] text-[16px] italic leading-none text-[#E8C547] md:text-[17px]">
        and many more
      </span>
      <svg
        width="96"
        height="34"
        viewBox="0 0 96 34"
        fill="none"
        className="-mt-0.5 text-[#E8C547]"
      >
        {/* Short elegant swoop under the text → left toward the button */}
        <path
          d="M78 6
             C 62 7, 46 18, 28 18
             C 20 18, 12 16, 6 14"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        {/* Arrowhead pointing left */}
        <path
          d="M14 8.5 L4.5 14 L14.5 20"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Atmosphere() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-6 h-40 w-full opacity-[0.3]"
      viewBox="0 0 520 160"
      fill="none"
      aria-hidden
    >
      <path
        d="M60 70c18-10 42-8 54 6 14-12 36-10 46 4"
        stroke="#1B2A4A"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M300 48c14-8 32-6 42 4 10-8 26-6 34 4"
        stroke="#1B2A4A"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse
        cx="220"
        cy="36"
        rx="3.5"
        ry="5.5"
        stroke="#1B2A4A"
        strokeWidth="0.9"
        transform="rotate(-18 220 36)"
      />
      <ellipse
        cx="248"
        cy="28"
        rx="2.8"
        ry="4.5"
        stroke="#1B2A4A"
        strokeWidth="0.9"
        transform="rotate(12 248 28)"
      />
      <ellipse
        cx="400"
        cy="58"
        rx="3"
        ry="4.8"
        stroke="#1B2A4A"
        strokeWidth="0.9"
        transform="rotate(22 400 58)"
      />
    </svg>
  );
}

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-white">
      {/* Corner House — right-anchored; fade via mask only (no white overlay) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(56%,680px)] overflow-hidden lg:block"
        aria-hidden
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 16%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 16%, black 100%)",
        }}
      >
        <Atmosphere />
        <div className="absolute inset-x-0 bottom-0 h-[92%]">
          <RevealMedia
            variant="wipe"
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src="/images/corner-house.webp"
              alt=""
              fill
              className="origin-bottom-right scale-[1.12] object-contain object-right-bottom"
              sizes="680px"
              loading="lazy"
              quality={60}
            />
          </RevealMedia>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 md:px-10 md:py-20 lg:py-24">
        <div className="relative max-w-xl lg:max-w-[560px]">
          <FadeIn>
            <h2 className="section-headline text-[32px] leading-[1.12] md:text-[40px] lg:text-[44px]">
              Events to build, grow
              <br />
              and <HeadlineItalic>scale your GTM.</HeadlineItalic>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#1B2A4A]/65 md:text-[16px]">
              Curated sessions, workshops and conversations
              <br className="hidden sm:block" />
              with operators and experts.
            </p>

            <motion.ul
              className="mt-8 flex flex-col gap-2.5 md:mt-9 md:gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.14, delayChildren: 0.08 },
                },
              }}
            >
              {eventTopics.map((topic) => (
                <EventRow key={topic.id} topic={topic} />
              ))}
            </motion.ul>

            <div className="mt-8 flex items-center gap-0 md:mt-9">
              <a
                href={site.eventUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-grow shrink-0"
              >
                Explore events →
              </a>
              <ManyMoreCue />
            </div>
          </FadeIn>
        </div>

        {/* Mobile / tablet house — below content */}
        <div
          className="relative mx-auto mt-12 h-[300px] w-full max-w-lg overflow-hidden sm:h-[360px] lg:hidden"
          aria-hidden
        >
          <RevealMedia
            variant="wipe"
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src="/images/corner-house.webp"
              alt=""
              fill
              loading="lazy"
              quality={60}
              className="origin-bottom scale-[1.1] object-contain object-bottom"
              sizes="(max-width: 1024px) min(90vw, 480px), 0px"
            />
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
