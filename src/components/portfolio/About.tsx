import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import aboutImg1 from "@/assets/img1.jpeg";
import aboutImg2 from "@/assets/img2.jpeg";
import aboutImg3 from "@/assets/img3.png";
import aboutImg5 from "@/assets/img5.png";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1.1fr] items-start">
        <Reveal>
          <div className="text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Saya merupakan lulusan S1 Teknik Informatika dari STMIK IKMI Cirebon. Memiliki ketertarikan
              pada bidang Artificial Intelligence, Machine Learning, Deep Learning.
              Saya secara aktif mengikuti berbagai bootcamp dan kursus pelatihan intensif
              untuk memperkuat dasar-dasar teknis termasuk dalam penggunaan Python
              dan pengembangan model kecerdasan buatan. Berpengalaman membangun model klasifikasi citra, mengolah dataset, melakukan eksplorasi data, mengevaluasi performa model, serta membuat dashboard menggunakan streamlit.
            </p>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
                marginTop: isExpanded ? 16 : 0
              }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden space-y-4"
            >
              <p>
                Saya berkomitmen untuk terus belajar, mengasah keterampilan baru, berkolaborasi guna mendorong inovasi,
                dan bertekad untuk terus mengembangkan kemampuan profesional saya agar dapat memberikan kontribusi nyata dan positif bagi dunia teknologi.
              </p>
              <p>
                Saya juga memiliki pengalaman bekerja dalam tim lintas bidang,
                mulai dari Data Science, AI Engineer, hingga Full-Stack
                Development. Saya tertarik untuk terus mengembangkan
                kemampuan teknis dan berkontribusi dalam menciptakan solusi
                digital yang bermanfaat bagi pengguna.
              </p>
            </motion.div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:underline transition-all cursor-pointer focus:outline-none"
            >
              {isExpanded ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Reveal delay={0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[246/157] bg-card">
              <img
                src={aboutImg1}
                alt="Workshop & Kolaborasi Tim"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[246/157] bg-card">
              <img
                src={aboutImg2}
                alt="Kolaborasi"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[246/157] bg-card">
              <img
                src={aboutImg3}
                alt="Pengembangan & Eksperimen Model AI"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[246/157] bg-card">
              <img
                src={aboutImg5}
                alt="Data Science Community Meetup"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}


