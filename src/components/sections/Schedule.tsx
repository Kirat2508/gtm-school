import { MapPointIcon } from "@solar-icons/react/bold-duotone/map-point";
import { schedule } from "@/content/schedule";
import { site } from "@/content/site";
import { AccordionItem } from "@/components/ui/Accordion";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/lib/Reveal";

export function Schedule() {
  return (
    <section id="sessions" className="section-pad bg-[var(--bg)]">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-[32px] font-bold leading-tight text-[var(--text)] md:text-[48px]">
            The full <em className="font-normal italic">schedule.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-[var(--text-secondary)]">
            15 sessions. Every Saturday and Sunday from September to October. Each
            one standalone, all of them connected.
          </p>
        </Reveal>

        <div className="mt-12">
          {schedule.map((mod, i) => (
            <Reveal key={mod.moduleId} delay={i * 40}>
              <AccordionItem
                accentColor={mod.color}
                defaultOpen={i === 0}
                title={
                  <>
                    Module {mod.letter}: {mod.title}{" "}
                    <span className="text-[var(--text-tertiary)]">
                      · {mod.sessions.length}{" "}
                      {mod.sessions.length === 1 ? "session" : "sessions"}
                    </span>
                  </>
                }
              >
                <ul>
                  {mod.sessions.map((session) => (
                    <li
                      key={session.id}
                      className="flex flex-col gap-3 border-b border-[rgba(26,18,16,0.06)] py-5 last:border-0 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[var(--text)]">
                          {session.date}
                        </p>
                        <h3 className="font-display mt-1 text-xl font-semibold text-[var(--text)]">
                          {session.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-[var(--text-tertiary)]">
                          <MapPointIcon size={14} />
                          {session.venue}
                        </p>
                        <p className="mt-2 text-sm italic text-[var(--text-secondary)]">
                          {session.deliverable}
                        </p>
                      </div>
                      <CtaButton
                        href={session.eventUrl}
                        variant="outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 self-start md:self-center"
                      >
                        {site.checkEventLabel}
                      </CtaButton>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
