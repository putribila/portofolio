import { Award, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section id="certifications" alt eyebrow="Credentials" title="Certifications">
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Award size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="text-sm text-muted-foreground">{c.year}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
              >
                View Certificate <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
