import Image from "next/image";
import { ChatRoundIcon } from "@solar-icons/react/linear/chat-round";
import { CodeIcon } from "@solar-icons/react/linear/code";
import { GlobalIcon } from "@solar-icons/react/linear/global";
import { HashtagIcon } from "@solar-icons/react/linear/hashtag";
import { RocketIcon } from "@solar-icons/react/linear/rocket";
import { UsersGroupRoundedIcon } from "@solar-icons/react/linear/users-group-rounded";
import { eventTopics, type EventTopic } from "@/content/events";
import { site } from "@/content/site";
import { FadeIn } from "@/lib/motion";

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
    <li className="flex items-center gap-3 rounded-[10px] border border-[rgba(27,42,74,0.14)] bg-white/50 px-3.5 py-3 md:gap-3.5 md:px-4 md:py-3.5">
      <Icon
        size={16}
        strokeWidth={1.55}
        color="#E8C547"
        className="shrink-0 opacity-90"
        aria-hidden
      />
      <span className="text-[14px] leading-snug font-medium text-[#1B2A4A] md:text-[15px]">
        {topic.title}
      </span>
    </li>
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
    <section id="events" className="relative overflow-hidden bg-[#FBF6EE]">
      {/* Corner House — anchored to the right, no aggressive mask washout */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[46%] lg:block"
        aria-hidden
      >
        <Atmosphere />
        <div className="absolute right-[-4%] bottom-[-2%] h-[78%] w-[110%]">
          <Image
            src="/images/corner-house.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
            sizes="46vw"
            priority={false}
          />
        </div>
        {/* Soft cream dissolve only on the left edge into the list */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #FBF6EE 0%, rgba(251,246,238,0.92) 10%, rgba(251,246,238,0.35) 28%, rgba(251,246,238,0) 48%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 md:px-10 md:py-20 lg:py-24">
        <div className="relative max-w-xl lg:max-w-[560px]">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.06em] text-[#E8C547]">
              GTM series
            </p>
            <h2 className="section-headline mt-3 text-[32px] leading-[1.12] text-[#1B2A4A] md:text-[40px] lg:text-[44px]">
              Events to build, grow
              <br />
              and scale your GTM.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#1B2A4A]/65 md:text-[16px]">
              Curated sessions, workshops and conversations
              <br className="hidden sm:block" />
              with operators and experts.
            </p>

            <ul className="mt-8 flex flex-col gap-2.5 md:mt-9 md:gap-3">
              {eventTopics.map((topic) => (
                <EventRow key={topic.id} topic={topic} />
              ))}
            </ul>

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

        {/* Mobile / tablet house — below content, clear and unmasked */}
        <div
          className="relative mx-auto mt-12 h-[260px] w-full max-w-md sm:h-[320px] lg:hidden"
          aria-hidden
        >
          <Image
            src="/images/corner-house.png"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="90vw"
          />
        </div>
      </div>
    </section>
  );
}
