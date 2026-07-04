import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile, heroBadges, typingPhrases } from "@/data/portfolio";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 90;
    const timer = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(typingPhrases);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Open to opportunities
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Hello, I'm <span className="text-primary">Putri Nabila</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-muted-foreground">
            {profile.role}
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            I'm interested in{" "}
            <span className="font-semibold text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary align-middle">
              &nbsp;
            </span>
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Mahasiswa Teknik Informatika yang tertarik pada pengembangan teknologi
            berbasis Artificial Intelligence, Machine Learning, Deep Learning, dan
            Computer Vision. Berpengalaman membangun model klasifikasi citra,
            mengembangkan RESTful API, serta mengintegrasikan solusi AI ke dalam
            aplikasi berbasis web.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl border-2 border-primary/30" />
          <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full bg-accent/60" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <img
              src={profileImg}
              alt="Putri Nabila"
              width={800}
              height={960}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {heroBadges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
