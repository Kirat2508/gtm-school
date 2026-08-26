"use client";

import Image from "next/image";
import { BagIcon } from "@solar-icons/react/linear/bag";
import { BuildingsIcon } from "@solar-icons/react/linear/buildings";
import { CaseIcon } from "@solar-icons/react/linear/case";
import { CodeIcon } from "@solar-icons/react/linear/code";
import { GraphUpIcon } from "@solar-icons/react/linear/graph-up";
import { LeafIcon } from "@solar-icons/react/linear/leaf";
import { RocketIcon } from "@solar-icons/react/linear/rocket";
import { UserIcon } from "@solar-icons/react/linear/user";
import { UsersGroupRoundedIcon } from "@solar-icons/react/linear/users-group-rounded";
import { audience, type AudienceTag } from "@/content/audience";
import { FadeIn, RevealMedia, Stagger, StaggerItem } from "@/lib/motion";
import { HeadlineItalic } from "@/components/ui/HeadlineItalic";
import { CursorFloatTips } from "@/components/ui/CursorFloatTips";

const iconMap = {
  leaf: LeafIcon,
  user: UserIcon,
  case: CaseIcon,
  chart: GraphUpIcon,
  users: UsersGroupRoundedIcon,
  rocket: RocketIcon,
  buildings: BuildingsIcon,
  bag: BagIcon,
  code: CodeIcon,
} as const;

const iconTone: Record<AudienceTag["icon"], string> = {
  leaf: "#5F8F6E",
  user: "#4A6B8A",
  case: "#7A6B8F",
  chart: "#5F8F6E",
  users: "#4A6B8A",
  rocket: "#E8C547",
  buildings: "#4A6B8A",
  bag: "#5F8F6E",
  code: "#7A6B8F",
};

function AudiencePill({ tag }: { tag: AudienceTag }) {
  const Icon = iconMap[tag.icon];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,42,74,0.1)] bg-white/70 px-3.5 py-2 text-[13px] font-medium text-[#1B2A4A] shadow-[0_1px_0_rgba(27,42,74,0.03)] backdrop-blur-[2px] md:text-[14px]">
      <Icon
        size={15}
        strokeWidth={1.6}
        color={iconTone[tag.icon]}
        className="shrink-0 opacity-90"
        aria-hidden
      />
      {tag.label}
    </span>
  );
}

export function Audience() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto grid max-w-[1180px] items-center px-5 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-6 lg:py-24 xl:gap-2">
        <div className="relative z-10 lg:col-span-5 xl:col-span-5">
          <FadeIn direction="left">
            <h2 className="section-headline text-[34px] leading-[1.12] md:text-[44px] lg:text-[48px]">
              Built for the way
              <br />
              builders <HeadlineItalic>sell.</HeadlineItalic>
            </h2>

            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#1B2A4A]/65 md:text-[17px]">
              If this sounds like you, you are in the right place.
            </p>
          </FadeIn>

          <CursorFloatTips>
            <Stagger
              className="mt-8 flex max-w-xl flex-wrap gap-2.5 md:mt-9 md:gap-3"
              fast
            >
              {audience.map((tag) => (
                <StaggerItem key={tag.id} variant="pop">
                  <AudiencePill tag={tag} />
                </StaggerItem>
              ))}
            </Stagger>
          </CursorFloatTips>
        </div>

        <RevealMedia
          variant="drift"
          className="relative mt-10 h-[300px] w-full overflow-hidden sm:h-[380px] md:mt-12 md:h-[440px] lg:col-span-7 lg:mt-0 lg:h-[min(620px,72vh)] xl:h-[min(660px,74vh)]"
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 14%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 14%, black 100%)",
            }}
          >
            <Image
              src="/images/sunset-glasshouse.webp"
              alt="Lalbagh Glass House at sunset — illustrated Bangalore landmark"
              fill
              loading="lazy"
              quality={60}
              className="origin-bottom-right scale-[1.14] object-contain object-right-bottom md:scale-[1.18]"
              sizes="(max-width: 1024px) min(100vw, 560px), 58vw"
            />
          </div>
        </RevealMedia>
      </div>
    </section>
  );
}
