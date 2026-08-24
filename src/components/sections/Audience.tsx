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
import { FadeIn } from "@/lib/motion";

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
    <section
      id="about"
      className="relative overflow-hidden bg-[#FBF6EE]"
    >
      <div className="relative mx-auto grid max-w-[1180px] items-center px-5 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-6 lg:py-24 xl:gap-2">
        {/* Left content ~40–45% */}
        <div className="relative z-10 lg:col-span-5 xl:col-span-5">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.06em] text-[#E8C547]">
              Built for builders
            </p>

            <h2 className="section-headline mt-4 text-[34px] leading-[1.12] text-[#1B2A4A] md:text-[44px] lg:text-[48px]">
              Built for the way
              <br />
              builders{" "}
              <span className="text-[#E8C547]">sell.</span>
            </h2>

            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#1B2A4A]/65 md:text-[17px]">
              If this sounds like you, you are in the right place.
            </p>

            <div className="mt-8 flex max-w-xl flex-wrap gap-2.5 md:mt-9 md:gap-3">
              {audience.map((tag) => (
                <AudiencePill key={tag.id} tag={tag} />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right illustration ~55–60% — integrated scene, not a card */}
        <div className="relative mt-10 h-[280px] sm:h-[340px] md:mt-12 md:h-[400px] lg:col-span-7 lg:mt-0 lg:h-[min(560px,68vh)] xl:h-[min(600px,70vh)]">
          <div
            className="absolute inset-0 lg:-right-8 lg:-bottom-10 lg:left-[-6%] xl:-right-14"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 100%), linear-gradient(to top, transparent 0%, black 14%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 100%), linear-gradient(to top, transparent 0%, black 14%, black 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <Image
              src="/images/sunset-glasshouse.png"
              alt="Lalbagh Glass House at sunset — illustrated Bangalore landmark"
              fill
              priority={false}
              className="object-contain object-right-bottom scale-[1.06] lg:scale-[1.12] lg:object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          {/* Soft cream wash so edges dissolve into the section */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #FBF6EE 0%, rgba(251,246,238,0.55) 14%, rgba(251,246,238,0) 38%), linear-gradient(0deg, #FBF6EE 0%, rgba(251,246,238,0.4) 12%, rgba(251,246,238,0) 32%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
