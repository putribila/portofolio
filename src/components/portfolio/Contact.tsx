import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/putri-nabilla-77a670223",
      href: profile.linkedin,
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/putribila",
      href: profile.github,
    },
  ];

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
        <Reveal>
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Get in touch
              </span>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Let's Connect
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              Saya terbuka untuk kesempatan kolaborasi, diskusi proyek, magang,
              maupun peluang pengembangan karier di bidang Artificial Intelligence,
              Machine Learning, Data Science, dan Software Development.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="divide-y divide-border/60">
              {contactItems.map(({ icon: Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-6 first:pt-0 last:pb-0 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        {title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
