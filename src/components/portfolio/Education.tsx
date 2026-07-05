import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((edu, idx) => (
          <Reveal key={idx} delay={idx * 0.08}>
            <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-primary">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {edu.university}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
