import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[3/2] w-full object-fill transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {p.role}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 5 && (
                    <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      +{p.tech.length - 5}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {l.label.includes("GitHub") ? (
                        <Github size={15} />
                      ) : (
                        <ExternalLink size={15} />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            View All Projects <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
