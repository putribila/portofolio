import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" alt eyebrow="My journey" title="Experience & Activities">
      <div className="relative ml-3 border-l border-border pl-8 sm:ml-4">
        {experiences.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <div className="relative mb-9 last:mb-0">
              <span className="absolute -left-[42px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold">{e.title}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {e.year}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
