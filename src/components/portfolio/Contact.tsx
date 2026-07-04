import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Check } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const contactItems = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: MapPin, label: profile.location, href: undefined },
  ];

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Connect">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Saya terbuka untuk kesempatan kolaborasi, diskusi proyek, magang,
              maupun peluang pengembangan karier di bidang Artificial Intelligence,
              Machine Learning, Data Science, dan Software Development.
            </p>
            <div className="mt-7 space-y-3">
              {contactItems.map(({ icon: Icon, label, href }) => {
                const inner = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 truncate text-sm font-medium">{label}</span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" id="name" />
              <Field label="Email" id="email" type="email" />
            </div>
            <div className="mt-4">
              <Field label="Subject" id="subject" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  type = "text",
}: {
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
