"use client";

import Image from "next/image";
import { BuildingsIcon } from "@solar-icons/react/bold-duotone/buildings";
import { GraphUpIcon } from "@solar-icons/react/bold-duotone/graph-up";
import { TargetIcon } from "@solar-icons/react/bold-duotone/target";
import { UsersGroupRoundedIcon } from "@solar-icons/react/bold-duotone/users-group-rounded";
import { workflowModules, type WorkflowModule } from "@/content/workflow";
import { FadeIn, RevealMedia, Stagger, StaggerItem } from "@/lib/motion";
import { HeadlineItalic } from "@/components/ui/HeadlineItalic";

const icons = {
  building: BuildingsIcon,
  chart: GraphUpIcon,
  target: TargetIcon,
  users: UsersGroupRoundedIcon,
};

function ModuleCard({ mod }: { mod: WorkflowModule }) {
  const Icon = icons[mod.icon];

  return (
    <article
      className="module-card relative flex min-h-[200px] overflow-hidden rounded-[16px] border md:min-h-[220px]"
      style={{
        backgroundColor: mod.tint,
        borderColor: mod.border,
      }}
    >
      <div className="relative z-10 flex w-[68%] flex-col p-4 pr-3 md:w-[64%] md:p-5 md:pr-4">
        <span
          className="mb-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: mod.badge }}
          aria-hidden
        >
          <Icon size={14} />
        </span>

        <h3 className="font-editorial text-[15px] leading-snug text-[#1B2A4A] md:text-[17px]">
          {mod.number}. {mod.title}
        </h3>

        <p className="mt-2 text-[12.5px] leading-relaxed text-[#1B2A4A]/80 md:mt-2.5 md:text-[13.5px] md:leading-[1.55]">
          {mod.description}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] md:w-[44%]">
        <Image
          src={mod.image}
          alt=""
          fill
          loading="lazy"
          quality={60}
          className="origin-bottom-right scale-[1.08] object-contain object-right-bottom opacity-95"
          sizes="(max-width: 768px) 42vw, 22vw"
        />
      </div>
    </article>
  );
}

export function Modules() {
  return (
    <section id="topics" className="relative overflow-hidden bg-white">
      <RevealMedia
        variant="bloom"
        float={false}
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[70%] w-[min(90%,880px)] opacity-[0.68] sm:h-[76%] sm:w-[72%] lg:h-[86%] lg:w-[62%] xl:w-[60%]"
      >
        <Image
          src="/images/blr-infra.webp"
          alt=""
          fill
          loading="lazy"
          quality={60}
          className="origin-bottom-left scale-[1.18] object-contain object-left-bottom"
          sizes="(max-width: 1024px) min(90vw, 640px), 62vw"
        />
      </RevealMedia>

      <svg
        className="pointer-events-none absolute top-16 right-[8%] z-0 hidden h-28 w-48 opacity-25 md:block"
        viewBox="0 0 180 100"
        fill="none"
        aria-hidden
      >
        <path
          d="M20 60c10-14 28-16 40-6 8-12 24-14 34-4 10-8 24-6 30 6"
          stroke="#1B2A4A"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M110 28c3 2 7 2 10 0M130 36c3 2 6 2 9 0"
          stroke="#1B2A4A"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[920px] px-5 py-14 md:px-10 md:py-16 lg:py-18">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="section-headline text-[32px] leading-tight md:text-[40px] lg:text-[44px]">
            The curriculum, <HeadlineItalic>in four parts</HeadlineItalic>
          </h2>
        </FadeIn>

        <Stagger className="relative mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:mt-9">
          {workflowModules.map((mod) => (
            <StaggerItem key={mod.id} variant="pop">
              <ModuleCard mod={mod} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
