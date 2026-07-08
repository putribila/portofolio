import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  alt,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 ${alt ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-8 max-w-2xl">
              {eyebrow && (
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
