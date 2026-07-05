import { Reveal } from "./Reveal";
import { Section } from "./Section";

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

export function Skills() {
  const techs: TechItem[] = [
    {
      name: "Google Colab",
      color: "#F9AB00",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 8c-2.5 0-4.5 2-4.5 4.5S4.5 17 7 17c1.7 0 3.2-1 4-2.5L13 10c.8-1.5 2.3-2.5 4-2.5 2.5 0 4.5 2 4.5 4.5S19.5 17 17 17" fill="none" />
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
    {
      name: "Kaggle",
      color: "#20BEFF",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.35 22.25h-3.2V1.75h3.2v9.3l3.8-3.7L19 1.75h4.1l-8.4 8.2 4.5 8.1L10.2 12.5l9.2 9.75H15l-5.3-5.2-3.35 3.3v4.4z" />
        </svg>
      ),
    },
    {
      name: "Canva",
      color: "#00C4CC",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 2C6.4 2 2 6.4 2 11.9S6.4 21.8 11.9 21.8s9.9-4.4 9.9-9.9S17.4 2 11.9 2zm4.3 12.6c-.6 1.4-1.8 2.3-3.3 2.5-2 .2-3.8-1-4.3-2.9-.6-2.1.5-4.3 2.6-4.9 1.3-.4 2.7-.1 3.7.8.2.2.2.5 0 .7l-.7.7c-.2.2-.5.1-.7-.1-.6-.5-1.4-.7-2.2-.4-1.2.4-1.9 1.7-1.5 2.9.4 1.2 1.7 1.9 2.9 1.5 1-.3 1.6-1.1 1.8-2h-2.1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3.6c.3 0 .5.2.5.5v1.6c0 1.2-.4 2.3-1.1 3.1z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Excel",
      color: "#107C41",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1.8 14.5l-1.3-2.2-1.3 2.2h-1.5l2-3.1-1.9-3.1h1.5l1.2 2.1 1.2-2.1h1.5l-1.9 3.1 2 3.1h-1.4z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Word",
      color: "#185ABD",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1.5 14.5H14L12.5 12l-1.5 4.5H9.5L7.5 9h1.5l1.2 4.5 1.5-4.5h1.6l1.5 4.5 1.2-4.5h1.5l-2 7.5z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Power Point",
      color: "#C43E1C",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 10.5c0 1.4-1.1 2.5-2.5 2.5H11v1.5H9.5V9H12.5c1.4 0 2.5 1.1 2.5 2.5zm-2.5 1c.6 0 1-.4 1-1s-.4-1-1-1H11v2h1.5z" />
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
      name: "TensorFlow",
      color: "#FF6F00",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.293 5.867L11.52.029a1.002 1.002 0 01.96 0l10.227 5.838a1 1 0 01.5 1.003V17.13a1 1 0 01-.5 1.003L12.48 23.971a1.002 1.002 0 01-.96 0L1.293 18.133A1 1 0 01.793 17.13V6.87a1 1 0 01.5-.18zm10.707 5.308v6.786l4.636-2.612v-4.174zm2-1.129l4.57-2.576-4.57-2.576zm-4-5.152L5.43 7.47l4.57 2.576zm-2 6.281v4.174l4.636 2.612v-6.786z" />
        </svg>
      ),
    },
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
      name: "MySQL",
      color: "#4479A1",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.93-.68 3.7-1.8 5.09z" />
        </svg>
      ),
    },
    {
      name: "PHP",
      color: "#777BB4",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 14H8V8h3.5c1.4 0 2.5 1.1 2.5 2.5S12.9 13 11.5 13H9.5v3zm6 0h-1.5V8h3.5c1.4 0 2.5 1.1 2.5 2.5S18.9 13 17.5 13H15.5v3z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      color: "#1572B6",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.5 6.1H8.7l.2 2.7h9.1l-.3 3.5-5.2 1.4-5.2-1.4-.3-3.6H4.2l.6 7 7.2 2 7.2-2z" />
        </svg>
      ),
    },
    {
      name: "Bootstrap",
      color: "#7952B3",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.5 11c0 1.4-1.1 2.5-2.5 2.5H9V8.5h3c1.4 0 2.5 1.1 2.5 2.5 0 .7-.3 1.3-.8 1.7.5.3.8.9.8 1.8zm-2.5-3H10.5v1.5H12c.4 0 .8-.3.8-.75s-.4-.75-.8-.75zm.5 3.5h-1.5v1.5H12.5c.4 0 .8-.3.8-.75s-.4-.75-.8-.75z" />
        </svg>
      ),
    },
    {
      name: "HTML",
      color: "#E34F26",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.7 6H6.1l.3 3.6h11.2l-.4 4.4-4.8 1.3-4.8-1.3-.3-3H4.1l.6 6.8 7.3 2 7.3-2z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="skills" eyebrow="Tech Stack" title="Tools I Build With" alt>
      <div className="flex flex-col items-center -mt-8">
        {/* Subtitle */}
        <Reveal delay={0.2}>
          <p className="max-w-xl text-center text-base text-muted-foreground sm:text-lg">
            A curated set of technologies I rely on
          </p>
        </Reveal>

        {/* Tech Stack Pills Container */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl">
          {techs.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.05}>
              <div
                className="flex items-center gap-3 rounded-full bg-card border border-border px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md group cursor-default"
              >
                <span
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </span>
                <span className="text-sm font-medium tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

