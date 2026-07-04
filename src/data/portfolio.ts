import gizimeal from "@/assets/project-gizimeal.jpg";
import guava from "@/assets/project-guava.jpg";
import dashboard from "@/assets/project-dashboard.jpg";

// [GANTI BAGIAN INI] — Update links, university, certifications, etc.
export const profile = {
  name: "Putri Nabila",
  role: "Informatics Student | AI Engineer Enthusiast",
  email: "putri.nabila@example.com", // [GANTI BAGIAN INI]
  github: "https://github.com/your-username", // [GANTI BAGIAN INI]
  linkedin: "https://linkedin.com/in/your-profile", // [GANTI BAGIAN INI]
  cv: "#", // [GANTI BAGIAN INI] link CV
  location: "Indonesia",
};

export const heroBadges = [
  "AI Engineer Enthusiast",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
];

export const typingPhrases = [
  "AI Engineering",
  "Machine Learning",
  "Computer Vision",
  "Web Development",
];

export const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "15", label: "Image Classes Processed" },
  { value: "AI + Web", label: "Integration Experience" },
  { value: "Team", label: "Collaboration Experience" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Image Classification",
      "Transfer Learning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Model Evaluation",
      "Class Imbalance Handling",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "OpenCV",
      "FastAPI",
    ],
  },
  {
    title: "Web Development",
    skills: ["React", "Vite", "RESTful API", "API Integration", "Streamlit"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Google Colab",
      "Kaggle",
      "GitHub",
      "Hugging Face",
      "Vercel",
      "Supabase",
      "Railway",
      "Figma",
    ],
  },
];

export const projects = [
  {
    image: gizimeal,
    title: "GiziMeal — Smart Nutrition Recommendation Platform",
    description:
      "Platform berbasis web yang mengenali bahan makanan mentah melalui unggahan gambar, menampilkan hasil klasifikasi, memperkirakan kandungan energi, serta memberikan rekomendasi menu makanan dengan informasi gizi yang relevan.",
    role: "AI Engineer",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "ResNet18",
      "FastAPI",
      "React",
      "Vite",
      "Hugging Face",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", href: "#" }, // [GANTI BAGIAN INI]
      { label: "GitHub Repository", href: "#" }, // [GANTI BAGIAN INI]
    ],
  },
  {
    image: guava,
    title: "Guava Fruit Disease Classification",
    description:
      "Proyek klasifikasi penyakit buah jambu biji menggunakan citra digital dan pendekatan transfer learning untuk membedakan buah sehat dan buah yang mengalami penyakit (Anthracnose, Fruit Fly, Healthy).",
    role: "Machine Learning",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "ResNet50",
      "Scikit-learn",
      "Matplotlib",
    ],
    links: [
      { label: "GitHub Repository", href: "#" }, // [GANTI BAGIAN INI]
      { label: "Read Documentation", href: "#" }, // [GANTI BAGIAN INI]
    ],
  },
  {
    image: dashboard,
    title: "Interactive Nutrition Data Dashboard",
    description:
      "Dashboard interaktif untuk mengeksplorasi data makanan dan kandungan nutrisi — energi, protein, lemak, karbohidrat, serat, kalsium, serta skor keseimbangan gizi dari berbagai menu.",
    role: "Data Analysis",
    tech: ["Python", "Pandas", "Streamlit", "Matplotlib", "Data Analysis"],
    links: [
      { label: "View Dashboard", href: "#" }, // [GANTI BAGIAN INI]
      { label: "GitHub Repository", href: "#" }, // [GANTI BAGIAN INI]
    ],
  },
];

export const experiences = [
  {
    title: "AI Engineer — GiziMeal Capstone Project",
    year: "2026",
    description:
      "Berkontribusi sebagai AI Engineer dalam pengembangan platform GiziMeal: preprocessing dataset, pembuatan pipeline data, pengembangan model deep learning, evaluasi performa model, integrasi API, serta deployment sistem untuk frontend aplikasi.",
  },
  {
    title: "AI Model Development & Evaluation",
    year: "2026",
    description:
      "Pengembangan dan evaluasi model klasifikasi citra menggunakan TensorFlow dan Keras: augmentasi, normalisasi, balancing dataset, analisis overfitting, optimasi hyperparameter, serta evaluasi accuracy, loss, macro-F1 score, dan confusion matrix.",
  },
  {
    title: "API Development & Deployment",
    year: "2026",
    description:
      "Mengembangkan RESTful API berbasis FastAPI untuk inferensi model — menerima unggahan gambar, melakukan preprocessing, menghasilkan prediksi, serta mengirimkan hasil klasifikasi dan informasi nutrisi ke aplikasi frontend.",
  },
];

export const education = {
  degree: "Bachelor of Informatics Engineering",
  university: "[Isi Nama Universitas]", // [GANTI BAGIAN INI]
  period: "[Isi Tahun Masuk] – Present", // [GANTI BAGIAN INI]
  description:
    "Mempelajari dasar pemrograman, pengembangan perangkat lunak, basis data, data science, machine learning, deep learning, computer vision, serta pengembangan aplikasi berbasis web.",
};

export const certifications = [
  {
    name: "[Nama Sertifikasi 1]", // [GANTI BAGIAN INI]
    issuer: "[Nama Penyelenggara]",
    year: "[Tahun]",
    href: "#",
  },
  {
    name: "[Nama Sertifikasi 2]", // [GANTI BAGIAN INI]
    issuer: "[Nama Penyelenggara]",
    year: "[Tahun]",
    href: "#",
  },
  {
    name: "[Nama Sertifikasi 3]", // [GANTI BAGIAN INI]
    issuer: "[Nama Penyelenggara]",
    year: "[Tahun]",
    href: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
