import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Saya merupakan mahasiswa Teknik Informatika yang memiliki ketertarikan
              pada bidang Artificial Intelligence, Machine Learning, Deep Learning,
              dan pengembangan aplikasi berbasis web. Saya terbiasa mengolah dataset,
              melakukan eksplorasi data, membangun model klasifikasi citra,
              mengevaluasi performa model, serta mengembangkan API untuk kebutuhan
              deployment.
            </p>
            <p>
              Saya juga memiliki pengalaman bekerja dalam tim lintas bidang, mulai
              dari Data Science, AI Engineer, hingga Full-Stack Development. Saya
              tertarik untuk terus mengembangkan kemampuan teknis dan berkontribusi
              dalam menciptakan solusi digital yang bermanfaat bagi pengguna.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
