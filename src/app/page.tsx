import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { GlassNav } from "@/components/sections/GlassNav";

/** Below-fold sections — split JS so mobile boots Hero+Nav first */
const PostcardInvite = dynamic(
  () =>
    import("@/components/sections/PostcardInvite").then((m) => m.PostcardInvite),
  { ssr: true },
);
const BackedBy = dynamic(
  () => import("@/components/sections/BackedBy").then((m) => m.BackedBy),
  { ssr: true },
);
const Channels = dynamic(
  () => import("@/components/sections/Channels").then((m) => m.Channels),
  { ssr: true },
);
const Modules = dynamic(
  () => import("@/components/sections/Modules").then((m) => m.Modules),
  { ssr: true },
);
const Events = dynamic(
  () => import("@/components/sections/Events").then((m) => m.Events),
  { ssr: true },
);
const Audience = dynamic(
  () => import("@/components/sections/Audience").then((m) => m.Audience),
  { ssr: true },
);
const Faq = dynamic(
  () => import("@/components/sections/Faq").then((m) => m.Faq),
  { ssr: true },
);

export default function Home() {
  return (
    <main className="bg-white">
      <div className="pointer-events-none sticky top-0 z-50 flex justify-center px-3 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
        <div className="pointer-events-auto">
          <GlassNav />
        </div>
      </div>
      <Hero />
      <PostcardInvite />
      <BackedBy />
      <Channels />
      <Modules />
      <Events />
      <Audience />
      <Faq />
    </main>
  );
}
