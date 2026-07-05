import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({
    0: true, // Let the first one be open by default
  });

  const toggleOpen = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Section id="experience" alt eyebrow="My journey" title="Experience & Activities">
      <div className="relative ml-3 border-l border-border pl-8 sm:ml-4 flex flex-col gap-8">
        {experiences.map((e, i) => {
          const isOpen = !!openIndices[i];
          return (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[42px] top-[22px] grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <div
                  onClick={() => toggleOpen(i)}
                  className="group cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold group-hover:text-primary transition-colors duration-300">
                        {e.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground group-hover:text-primary"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {e.year}
                    </span>
                  </div>

                  <motion.div
                    initial={i === 0 ? "open" : "collapsed"}
                    animate={isOpen ? "open" : "collapsed"}
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: 12 },
                      collapsed: { opacity: 0, height: 0, marginTop: 0 }
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
                      {e.description.map((point, pIdx) => (
                        <li key={pIdx} className="hover:text-foreground transition-colors duration-200">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
