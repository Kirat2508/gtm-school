import { CountUp } from "@/lib/CountUp";
import { Reveal } from "@/lib/Reveal";

const stats = [
  { value: 15, label: "sessions" },
  { value: 6, label: "weeks" },
  { value: 1, label: "complete GTM playbook" },
];

export function Numbers() {
  return (
    <section className="pb-[120px] md:pb-[120px]">
      <div className="container-page">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="card px-8 py-12 text-center">
                <p className="font-display text-[56px] font-bold leading-none text-[var(--text)] md:text-[96px]">
                  <CountUp end={stat.value} />
                </p>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-[17px] italic text-[var(--text-secondary)]">
            Every session ends with a deliverable. Not slides. Not notes. Something
            you actually ship.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
