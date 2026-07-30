import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({
    "0-0": true, // Let the first item of the first company be open by default
  });

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Section id="experience" alt eyebrow="My journey" title="Experience & Activities">
      <div className="flex flex-col gap-8 w-full">
        {experiences.map((exp, compIdx) => {
          const isSingle = exp.items.length === 1;

          if (isSingle) {
            const item = exp.items[0];
            const itemKey = `${compIdx}-0`;
            const isOpen = !!openKeys[itemKey];

            return (
              <Reveal key={exp.company} delay={compIdx * 0.08}>
                <div
                  onClick={() => toggleOpen(itemKey)}
                  className="group cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    {/* Logo/Badge */}
                    {exp.logoLetter && (exp.logoLetter.length > 1 || exp.logoLetter.includes("/")) ? (
                      <img
                        src={exp.logoLetter}
                        alt={exp.company}
                        className="w-12 h-12 rounded-full object-contain bg-white p-1 border border-border/50 shrink-0 shadow-sm"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm border border-border/50 shrink-0 ${exp.logoColor}`}>
                        {exp.logoLetter}
                      </div>
                    )}

                    {/* Content Header Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <span className="text-sm text-muted-foreground font-medium">
                          {item.year}
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-foreground/90 mt-1">
                        {item.title}
                      </h4>

                      <div className="text-xs text-muted-foreground/80 font-medium mt-0.5">
                        {item.location}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-muted-foreground group-hover:text-primary shrink-0 self-start mt-1">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable description */}
                  <motion.div
                    initial={compIdx === 0 ? "open" : "collapsed"}
                    animate={isOpen ? "open" : "collapsed"}
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: 12 },
                      collapsed: { opacity: 0, height: 0, marginTop: 0 }
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pl-0 sm:pl-16"
                  >
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
                      {item.description.map((point, pIdx) => (
                        <li key={pIdx} className="hover:text-foreground transition-colors duration-200">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </Reveal>
            );
          }

          // Multi-item layout (like VSGA with 2 activities)
          return (
            <Reveal key={exp.company} delay={compIdx * 0.08}>
              <div className="flex flex-col">
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6">
                  {exp.logoLetter && (exp.logoLetter.length > 1 || exp.logoLetter.includes("/")) ? (
                    <img
                      src={exp.logoLetter}
                      alt={exp.company}
                      className="w-12 h-12 rounded-full object-contain bg-white p-1 border border-border/50 shrink-0 shadow-sm"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm border border-border/50 shrink-0 ${exp.logoColor}`}>
                      {exp.logoLetter}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.company}
                  </h3>
                </div>

                {/* Items Container with vertical timeline line */}
                <div className="relative ml-6 border-l-2 border-border/60 pl-8 flex flex-col gap-8">
                  {exp.items.map((item, itemIdx) => {
                    const itemKey = `${compIdx}-${itemIdx}`;
                    const isOpen = !!openKeys[itemKey];

                    return (
                      <div key={item.title} className="relative">
                        {/* Timeline Dot */}
                        <span className="absolute -left-[42px] top-[22px] grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                        </span>

                        {/* Interactive Card */}
                        <div
                          onClick={() => toggleOpen(itemKey)}
                          className="group cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-bold group-hover:text-primary transition-colors duration-300">
                                {item.title}
                              </h4>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-muted-foreground group-hover:text-primary"
                              >
                                <ChevronDown size={18} />
                              </motion.div>
                            </div>
                            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
                              {item.year}
                            </span>
                          </div>

                          <div className="text-xs text-muted-foreground/80 font-medium mt-1">
                            {item.location}
                          </div>

                          <motion.div
                            initial={compIdx === 0 && itemIdx === 0 ? "open" : "collapsed"}
                            animate={isOpen ? "open" : "collapsed"}
                            variants={{
                              open: { opacity: 1, height: "auto", marginTop: 12 },
                              collapsed: { opacity: 0, height: 0, marginTop: 0 }
                            }}
                            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
                              {item.description.map((point, pIdx) => (
                                <li key={pIdx} className="hover:text-foreground transition-colors duration-200">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
