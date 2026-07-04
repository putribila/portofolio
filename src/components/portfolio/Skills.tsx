import { Reveal } from "./Reveal";

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

export function Skills() {
  const techs: TechItem[] = [
    {
      name: "Python",
      color: "#3776AB",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18c.9 0 1.7.26 2.42.76.72.5 1.26 1.2 1.61 2.1l-.01.01h-2.12c-.52 0-.94.42-.94.94v2.19h4.38c.62 0 1.15.4 1.32.96.17.56.03 1.16-.37 1.57l-3.44 3.44c-.39.4-1.03.4-1.43 0l-3.44-3.44c-.4-.41-.54-1.01-.37-1.57.17-.56.7-.96 1.32-.96h1.25V6.18c0-.62-.51-1.12-1.12-1.12h-3.44c-.62 0-1.12.5-1.12 1.12v2.19c0 .62.5 1.12 1.12 1.12h1.25v2.19h-1.25c-1.84 0-3.34-1.5-3.34-3.34V6.18c0-1.84 1.5-3.34 3.34-3.34h3.44c.52 0 .94-.42.94-.94V.18zM9.75 23.82c-.9 0-1.7-.26-2.42-.76-.72-.5-1.26-1.2-1.61-2.1l.01-.01h2.12c.52 0 .94-.42.94-.94v-2.19H4.41c-.62 0-1.15-.4-1.32-.96-.17-.56-.03-1.16.37-1.57l3.44-3.44c.39-.4 1.03-.4 1.43 0l3.44 3.44c.4.41.54 1.01.37 1.57-.17.56-.7.96-1.32.96H9.47v2.19c0 .62.51 1.12 1.12 1.12h3.44c.62 0 1.12-.5 1.12-1.12v-2.19c0-.62-.5-1.12-1.12-1.12H12.78v-2.19h1.25c1.84 0 3.34 1.5 3.34 3.34v2.19c0 1.84-1.5 3.34-3.34 3.34H10.87c-.52 0-.94.42-.94.94v1.75z" />
        </svg>
      ),
    },
    {
      name: "TensorFlow",
      color: "#FF6F00",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.293 5.867L11.52.029a1.002 1.002 0 01.96 0l10.227 5.838a1 1 0 01.5 1.003V17.13a1 1 0 01-.5 1.003L12.48 23.971a1.002 1.002 0 01-.96 0L1.293 18.133A1 1 0 01.793 17.13V6.87a1 1 0 01.5-.18zm10.707 5.308v6.786l4.636-2.612v-4.174zm2-1.129l4.57-2.576-4.57-2.576zm-4-5.152L5.43 7.47l4.57 2.576zm-2 6.281v4.174l4.636 2.612v-6.786z" />
        </svg>
      ),
    },
    {
      name: "FastAPI",
      color: "#059669",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.562 18.423l-3.358-3.358 1.414-1.414 1.944 1.944 5.312-5.312 1.414 1.414-6.726 6.726z" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      color: "#E34F26",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.7 6H6.1l.3 3.6h11.2l-.4 4.4-4.8 1.3-4.8-1.3-.3-3H4.1l.6 6.8 7.3 2 7.3-2z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      color: "#1572B6",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.5 6.1H8.7l.2 2.7h9.1l-.3 3.5-5.2 1.4-5.2-1.4-.3-3.6H4.2l.6 7 7.2 2 7.2-2z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm20.06 17.06c-.85-.47-1.3-.77-1.78-1.57-.46-.7-.5-1.54-.5-2.87h-2.15c0 2.27.06 3.47 1 4.38.83.82 2.1 1.2 3.8 1.2 1.55 0 2.87-.36 3.75-1.1.92-.76 1.23-2 1.23-3.55 0-3.32-2.13-4-4.32-4.94l-.8-.34c-1.25-.54-1.78-.92-1.78-1.88 0-.93.73-1.42 1.83-1.42 1 0 1.58.4 2 1.1.34.6.4 1.33.4 2.37h2.13c0-2-.07-3.08-.8-3.93C22 3.5 20.67 3 19 3c-1.72 0-3.12.5-4.04 1.48C14 5.43 13.7 6.7 13.7 8.35c0 3.2 2.1 4 4.3 4.9l.8.35c1.3.56 1.9.98 1.9 2.08 0 1.15-.84 1.63-2.08 1.63-.9 0-1.43-.33-1.84-.75z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm21.6 19.3h-2.6v-7h-3v-2.3h8.6v2.3h-3v7zM15 19.3h-2.6c0-2.8 0-5 .3-7H9.2v-2.3h5.8v9.3z" />
        </svg>
      ),
    },
    {
      name: "React",
      color: "#61DAFB",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7.7a4.3 4.3 0 100 8.6 4.3 4.3 0 000-8.6zm0 10.3c-7.3 0-12-6-12-6s4.7-6 12-6 12 6 12 6-4.7 6-12 6z" />
        </svg>
      ),
    },
    {
      name: "Nextjs",
      color: "#FFFFFF",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.8 18.2l-6.4-8.3v8.3H9.2V6.2h2.2l6.2 8v-8h2.2v12z" />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      color: "#06B6D4",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.7 0-4.5 1.35-5.4 4.05 1.35-1.35 2.7-.9 4.05 1.35.9 1.5 2.1 3.15 4.5 3.15 2.7 0 4.5-1.35 5.4-4.05-1.35 1.35-2.7.9-4.05-1.35-.9-1.5-2.1-3.15-4.5-3.15zM6.6 13.95c-2.7 0-4.5 1.35-5.4 4.05 1.35-1.35 2.7-.9 4.05 1.35.9 1.5 2.1 3.15 4.5 3.15 2.7 0 4.5-1.35 5.4-4.05-1.35 1.35-2.7.9-4.05-1.35-.9-1.5-2.1-3.15-4.5-3.15z" />
        </svg>
      ),
    },
    {
      name: "Streamlit",
      color: "#FF4B4B",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      color: "#F24E1E",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6a3 3 0 11-6 0 3 3 0 016 0zm0 6a3 3 0 11-6 0 3 3 0 016 0zm0 6a3 3 0 11-6 0 3 3 0 016 0zm6-6a3 3 0 11-6 0 3 3 0 016 0zm0-6a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "Git",
      color: "#F05032",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.3 10.9L13.1.7c-.9-.9-2.4-.9-3.3 0L7.4 3.1l3.1 3.1c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.1 3.1c.8-.3 1.8-.1 2.5.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.5l-3.1-3.1c-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5L7 11.2c-.3.3-.3.8 0 1.1l10.2 10.2c.9.9 2.4.9 3.3 0l10.2-10.2c.9-.9.9-2.4 0-3.3z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      color: "#181717",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .3c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0024 12.3c0-6.6-5.4-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col items-center">
        {/* Tech Stack Badge */}
        <Reveal>
          <div className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-300">
            Tech Stack
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.1}>
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Tools I Build With
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-center text-base text-neutral-400 sm:text-lg">
            A curated set of technologies I rely on to build modern web experiences
          </p>
        </Reveal>

        {/* Tech Stack Pills Container */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl">
          {techs.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.05}>
              <div
                className="flex items-center gap-3 rounded-full bg-[#121212] border border-white/5 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#181818] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] group cursor-default"
              >
                <span
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </span>
                <span className="text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

