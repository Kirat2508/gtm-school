import { BotIcon } from "@solar-icons/react/bold-duotone/bot";
import { CheckSquareIcon } from "@solar-icons/react/bold-duotone/check-square";
import { CodeIcon } from "@solar-icons/react/bold-duotone/code";
import { DocumentTextIcon } from "@solar-icons/react/bold-duotone/document-text";
import { GlobalIcon } from "@solar-icons/react/bold-duotone/global";
import { VolumeLoudIcon } from "@solar-icons/react/bold-duotone/volume-loud";
import { deliverables } from "@/content/deliverables";
import { Reveal } from "@/lib/Reveal";

const icons = {
  FileText: DocumentTextIcon,
  CheckSquare: CheckSquareIcon,
  Code: CodeIcon,
  Megaphone: VolumeLoudIcon,
  Globe: GlobalIcon,
  Bot: BotIcon,
} as const;

export function Deliverables() {
  return (
    <section className="section-pad bg-[var(--bg-warm)]">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-[32px] font-bold leading-tight text-[var(--text)] md:text-[48px]">
            You leave with
            <br />
            <em className="font-normal italic">actual stuff.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-[var(--text-secondary)]">
            Not frameworks. Not slide decks. Not pdfs you will never open. Real
            deliverables you use the next morning.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.id} delay={(i % 6) * 50}>
                <article className="card-sm h-full">
                  <Icon
                    size={20}
                    className="text-[var(--text-secondary)]"
                  />
                  <h3 className="mt-3 text-sm font-bold text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-tertiary)]">
                    {item.sessionRef}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
