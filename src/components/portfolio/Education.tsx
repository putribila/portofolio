import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <Reveal>
        <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <GraduationCap size={22} />
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold">{education.degree}</h3>
              <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-primary">
                {education.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">
              {education.university}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {education.description}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
