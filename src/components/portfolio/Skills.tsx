import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" alt eyebrow="What I work with" title="Skills & Technologies">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-base font-bold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
