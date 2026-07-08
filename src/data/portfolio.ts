import gizimeal from "@/assets/webgizimeal.png";
import guava from "@/assets/jambu.jpeg";
import dashboard from "@/assets/project1.png";
import dashboardZara from "@/assets/dashboard-zara.jpg";
import { title } from "process";

// [GANTI BAGIAN INI] — Update links, university, certifications, etc.
export const profile = {
  name: "Putri Nabilla",
  role: "Fresh Graduate | Informatics Engineering",
  email: "putrinabilaaa7@gmail.com",
  github: "https://github.com/putribila",
  linkedin: "https://www.linkedin.com/in/putri-nabilla-77a670223", // [GANTI BAGIAN INI]
  cv: "https://drive.google.com/file/d/1BO-dvcW6z2pxgKOqESQbu0PdaRXetber/view?usp=sharing", // [GANTI BAGIAN INI] link CV
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
];

//export const stats = [
//  { value: "3+", label: "Projects Completed" },
//  { value: "15", label: "Image Classes Processed" },
//  { value: "AI + Web", label: "Integration Experience" },
//  { value: "Team", label: "Collaboration Experience" },
//];

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
    image: dashboardZara,
    title: "ZARA Sales Performance Dashboard",
    description:
      "Dashboard interaktif untuk menganalisis pola pembelian pelanggan dan performa penjualan produk ZARA dengan mengidentifikasi pola penjualan, performa produk, dan faktor-faktor yang memengaruhi revenue serta menyajikan insight bisnis melalui visualisasi data.",
    role: "Data Analyst",
    tech: [
      "Python",
      "Google Colab",
      "Google Data Studio",
      "Pandas",
      "Matplotlip",
      "Kaggle",

    ],
    links: [
      { label: "Dashboard", href: "https://datastudio.google.com/reporting/e77ffbee-3848-4ce1-9573-7fe47da3f07b" }, // [GANTI BAGIAN INI]
      { label: "GitHub Repository", href: "https://github.com/putribila/Analisis-Data-Penjualan-Zara" }, // [GANTI BAGIAN INI]
    ],
  },
  {
    image: gizimeal,
    title: "GiziMeal — Capstone Project",
    description:
      "Platform berbasis website yang memanfaatkan kecerdasan buatan (AI) dan Computer Vision untuk mengidentifikasi bahan makanan dari gambar serta merekomendasikan resep sehat. website ini dilengkapi dengan fitur deteksi bahan makanan otomatis, rekomendasi menu, penyajian informasi nilai gizi, hingga edukasi gizi berbasis Chatbot AI.",
    role: "AI Engineer & Web Developer",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN ResNet18",
      "FastAPI",
      "Gemini API",
      "Hugging Face",
      "Vercel",
    ],
    links: [
      { label: "Website", href: "https://gizimeal.projectshowcase.web.id" },
      { label: "Model", href: "https://huggingface.co/CC26-PSU393/gizimeal-model/tree/main" },
      { label: "GitHub", href: "https://github.com/CC26-PSU393-GiziMeal/AI-Engineer" },
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
      "Google Colab",
      "MobileNetV2",
      "Matplotlib",
      "Keras",
      "Kaggle",
      "Scikit-learn",
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
    title: "AI Engineer Cohort - Coding Camp powered by DBS Foundation",
    year: "Februari 2026 - Present",
    description: [
      "Membuat proyek untuk membangun model machine learning menggunakan beberapa metode supervised dan unsupervised learning pada kasus nyata dengan penerapan EDA, pra-pemrosesan data, clustering.",
      "Pembuatan proyek model deep learning yang dapat melakukan klasifikasi gambar dan analisis sentiment dengan data hasil scraping mandiri.",
      "Membuat proyek time series multivariate multi-step menggunakan model dan training yang dikustomisasi.",
      "Mengembangkan keterampilan profesional meliputi critical thinking, problem solving, project management, time management, adaptability, resilience, professional branding, serta komunikasi wawancara",
      "Membuat proyek akhir tim berupa solusi berbasis artificial intelligence seputar rekomendasi menu makanan dengan gizi seimbang."
    ],
  },
  {
    title: "Machine Learning Cohort - MSIB Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    year: "September 2024 - Januari 2025",
    description: [
      "Melaksanakan alur pengembangan proyek Machine Learning secara end-to-end, mulai dari analisis data, pengembangan model, evaluasi, hingga deployment model berbasis web.",
      "Mengolah dan menganalisis data untuk menghasilkan insight yang mendukung penyelesaian permasalahan bisnis dengan membuat dashboard streamlit.",
      "Mengembangkan keterampilan profesional meliputi critical thinking, problem solving, project management, time management, adaptability, resilience, professional branding, serta komunikasi wawancara.",
      "Mengembangkan proyek akhir berupa solusi berbasis Machine Learning yaitu deteksi sampah."
    ],
  },
  {
    title: "Data Analyst - SMKDEV Bootcamp Scholarship",
    year: "5 Februari - 9 Maret 2024",
    description: [
      "Mempelajari dan mempraktikkan konsep statistika, analisis data dasar, serta pengolahan data menggunakan spreadsheet.",
      "Mengerjakan proyek analisis data berbasis studi kasus dengan menerapkan manipulasi data, visualisasi data, dan EDA menggunakan Python.",
      "Membuat capstone project berupa dashboard interaktif menggunakan Google Data Studio untuk menyajikan insight secara lebih informatif."
    ],
  },
  {
    title: "Bootcamp Microsoft Excel - KarirNex ",
    year: "27 November - 8 Desember 2023",
    description: [
      "Mempelajari dan mempraktikkan pengelolaan data menggunakan spreadsheet, mulai dari mengatur worksheets, workbooks, data cells, ranges, tabel, table data, hingga chart.",
      "Mengoperasikan berbagai formula dan fungsi seperti AVERAGE, MAX, SUM, COUNT, COUNTA, COUNTBLANK, IF, dan fungsi lainnya untuk membantu proses analisis serta pengolahan data secara lebih efisien."
    ],
  },
  {
    title: "Junior Web Developer Training and Certification - VSGA Digital Talent Scholarship Kominfo",
    year: "13 Juni - 28 Juli 2023",
    description: [
      "Mempelajari dan mengimplementasikan User Interface serta konsep pemrograman terstruktur dalam pengembangan aplikasi berbasis web.",
      "Menerapkan perintah eksekusi bahasa pemrograman berbasis teks, grafik, dan multimedia dengan penyusunan fungsi, file, library, serta komponen secara rapi dan terorganisir.",
      "Membuat website berita yang menerapkan konsep antarmuka, struktur kode, dan pengelolaan sumber daya pemrograman sebagai proyek akhir."
    ],
  },
  {
    title: "Data Management Staff Training and Certification - VSGA Digital Talent Scholarship Kominfo",
    year: "20 - 24 Juni 2022",
    description: [
      "Melakukan pemasukan data serta memahami aspek keamanan informasi pengguna dalam penggunaan teknologi.",
      "Mengoperasikan perangkat komputer, sistem operasi, peripheral, surat elektronik (e-mail client), pengolah kata tingkat lanjut, dan perangkat lunak lembar kerja tingkat lanjut untuk mendukung pekerjaan administrasi dan pengolahan data."
    ]
  }
];

export const education = [
  {
    university: "STMIK IKMI CIREBON",
    degree: "S1 - Teknik Informatika",
    period: "2022 - 2026",
  },
  {
    university: "SMA NEGERI 2 KOTA CIREBON",
    degree: "MIPA",
    period: "2019 - 2021",
  },
];

export const certifications = [
  {
    name: "MSIB Machine Learning Cohort",
    issuer: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    year: "September 2024 - Januari 2025",
    href: "https://drive.google.com/file/d/1H8bAmQII56ClxdtITbwsIvTXVyEYfsfe/view?usp=sharing",
  },
  {
    name: "Digital Talent Academy Associate Data Scientist + Python",
    issuer: "Kementerian Komunikasi dan Informatika Republik Indonesia",
    year: "Juni 2026",
    href: "https://drive.google.com/file/d/1tNOP47MCnpJb5aB2OWzXE3NWQFdoGRGZ/view?usp=drive_link",
  },
  {
    name: "Programming and Software Development",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "Oktober 2023",
    href: "https://drive.google.com/file/d/1mvG6aWsM9PA3jKjpL6XrnPjbJuzWjDri/view?usp=drive_link",
  },
  {
    name: "Data Management Staff",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "Juni 2022",
    href: "https://drive.google.com/file/d/1q6tx5lI1Q-nBcH_occ4V-t47Vnu6d1io/view?usp=drive_link",
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
