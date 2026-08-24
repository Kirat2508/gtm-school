import { Hero } from "@/components/sections/Hero";
import { BackedBy } from "@/components/sections/BackedBy";
import { Channels } from "@/components/sections/Channels";
import { Modules } from "@/components/sections/Modules";
import { Events } from "@/components/sections/Events";
import { Audience } from "@/components/sections/Audience";
import { Faq } from "@/components/sections/Faq";
import { PostcardInvite } from "@/components/sections/PostcardInvite";
import { GlassNav } from "@/components/sections/GlassNav";

export default function Home() {
  return (
    <main className="bg-[#FBF6EE]">
      <div className="pointer-events-none sticky top-0 z-50 flex justify-center px-3 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
        <div className="pointer-events-auto">
          <GlassNav />
        </div>
      </div>
      <Hero />
      <BackedBy />
      <Channels />
      <Modules />
      <Events />
      <Audience />
      <Faq />
      <PostcardInvite />
    </main>
  );
}
