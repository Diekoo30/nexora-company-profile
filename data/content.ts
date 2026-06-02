// ============================================================
// Nexora Technology — All Content Data
// ============================================================

import {
  Settings,
  Globe,
  Layout,
  Server,
  Smartphone,
  Monitor,
  Box,
  Cpu,
} from "lucide-react";

import type {
  CompanyData,
  Service,
  ValueProp,
  PortfolioProject,
  ProcessStep,
  TeamMember,
  NavLink,
} from "@/types";

// ── Company ─────────────────────────────────────────────────

export const COMPANY: CompanyData = {
  name: "Nexora Technology",
  shortName: "Nexora Tech",
  tagline: "Inovasi masa depan melalui perangkat lunak cerdas.",
  philosophy:
    "Nexora Tech adalah representasi cahaya teknologi di era berikutnya yang menghubungkan ide, sistem, dan manusia melalui solusi digital cerdas (Aurora = Cahaya).",
  vision:
    "Menjadi software house terpercaya dalam menghadirkan solusi digital inovatif dan berkelanjutan.",
  mission: [
    "Mengembangkan software yang efektif, scalable, dan user-friendly.",
    "Menjadi mitra digital yang profesional dan responsif.",
    "Mendorong transformasi digital melalui teknologi tepat guna.",
  ],
  contact: {
    address: "Jl. Mastrip, Krajan Timur, Sumbersari, Jember",
    phone: "085142487749",
    website: "nexora-company-profile-one.vercel.app",
    whatsapp: "https://wa.me/6285142487749",
    instagram: "https://www.instagram.com/nexora.tech.tif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
};

// ── Navigation ──────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#kontak", label: "Kontak" },
];

// ── Services ────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    icon: Settings,
    title: "Maintenance & System Support",
    desc: "Dukungan teknis berkelanjutan untuk memastikan sistem berjalan optimal.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    desc: "Pembuatan aplikasi berbasis web yang responsif dan berkinerja tinggi.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Desain antarmuka intuitif yang memberikan pengalaman pengguna terbaik.",
  },
  {
    icon: Server,
    title: "API & Backend Development",
    desc: "Arsitektur server-side yang tangguh, aman, dan scalable.",
  },
  {
    icon: Smartphone,
    title: "Mobile App (Android)",
    desc: "Pengembangan aplikasi mobile native Android yang handal.",
  },
];

// ── Why Us ──────────────────────────────────────────────────

export const WHY_US: ValueProp[] = [
  {
    title: "Kebutuhan Klien",
    desc: "Berorientasi penuh pada penyelesaian masalah nyata klien.",
  },
  {
    title: "Tim Adaptif",
    desc: "Tim berlatar belakang teknologi yang kompeten dan fleksibel.",
  },
  {
    title: "Kualitas Kode",
    desc: "Kode rapi, aman, scalable, siap untuk masa depan.",
  },
  {
    title: "Transparansi",
    desc: "Komunikasi terbuka dan transparan di setiap tahap.",
  },
  {
    title: "Solusi Jangka Panjang",
    desc: "Bukan sekadar jadi, tapi bernilai dan berkelanjutan.",
  },
];

// ── Tech Stack ──────────────────────────────────────────────

export const TECH_STACK: string[] = [
  "Laravel",
  "Flutter",
  "PHP",
  "Java",
  "MySQL",
  "Firebase",
  "REST API",
  "Python",
  "OpenCV",
  "MQTT",
  "ESP-32 S3",
  "NetBeans",
  "IOTDB",
  "SVM",
  "Dart",
];

// ── Development Process ─────────────────────────────────────

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "Memahami kebutuhan, tujuan, dan tantangan bisnis Anda.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Merancang arsitektur sistem dan alur kerja yang efisien.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Penulisan kode yang bersih dan implementasi fitur.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Pengujian ketat untuk memastikan kualitas dan keamanan.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Peluncuran produk ke environment production.",
  },
  {
    step: "06",
    title: "Maintenance",
    desc: "Dukungan berkelanjutan dan optimasi sistem.",
  },
];

// ── Portfolio ───────────────────────────────────────────────

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "myapotek",
    name: "MyApotek",
    category: "Aplikasi Desktop Berbasis NetBeans",
    platform: "Desktop",
    period: "Agustus 2023 – Juli 2024",
    tech: ["Java", "MySQL", "NetBeans"],
    desc: "Aplikasi sistem manajemen kasir penjualan obat pada apotek.",
    features: [
      "Login panel",
      "Manajemen stok item",
      "Add, update item",
      "Pembayaran terintegrasi",
      "Pemantauan data penjualan",
    ],
    gradient: "from-teal-500/20 to-emerald-500/5",
    icon: Monitor,
    iconColor: "text-teal-400",
    image: "/portfolio/myapotek.jpg",
  },
  {
    id: "sihadir",
    name: "SiHadir",
    category: "Sistem Berbasis Web & Mobile",
    platform: "Web & Mobile",
    period: "Agustus 2024 – Desember 2024",
    tech: ["PHP", "Java", "MySQL", "Firebase", "API"],
    desc: "Sistem informasi kehadiran (manajemen kehadiran) dengan pengaplikasian barcode untuk presensi.",
    features: [
      "Login & Registrasi Terintegrasi",
      "Dashboard Interaktif Admin & User",
      "Manajemen Data kehadiran",
      "Rekap data jam datang & pulang",
    ],
    gradient: "from-blue-500/20 to-indigo-500/5",
    icon: Smartphone,
    iconColor: "text-blue-400",
    image: "/portfolio/sihadir.jpg",
  },
  {
    id: "bazardwp",
    name: "Bazar DWP POLIJE",
    category: "Sistem Berbasis Laravel & Flutter",
    platform: "Web & Mobile",
    period: "Februari 2025 – Juli 2025",
    tech: ["Laravel", "Flutter", "PHP", "Dart", "MySQL", "API"],
    desc: "Sistem manajemen pengambilan barang dan pembayaran pada bazar DWP POLIJE.",
    features: [
      "Manajemen pembayaran & Pengambilan barang",
      "Verifikasi Terintegrasi API Whatsapp",
      "Akses Login Sesuai Role",
      "Pemantauan daftar data penerima",
    ],
    gradient: "from-purple-500/20 to-pink-500/5",
    icon: Box,
    iconColor: "text-purple-400",
    image: "/portfolio/bazardwp.jpg",
  },
  {
    id: "wattwise",
    name: "WattWise",
    category: "Sistem Internet of Things (IoT)",
    platform: "Embedded System & Web Dashboard",
    period: "Agustus 2025 – Desember 2025",
    tech: [
      "SVM",
      "Python",
      "OpenCV",
      "ESP-32 S3",
      "MQTT",
      "API",
      "IOTDB",
      "MySQL",
    ],
    desc: "Sistem otomatis berbasis web untuk memudahkan pengguna menghemat energi listrik menggunakan Machine Learning & IoT.",
    features: [
      "Monitoring Penggunaan daya listrik",
      "Deteksi kehadiran manusia",
      "Prediksi jumlah tegangan arus listrik kedepannya",
    ],
    gradient: "from-amber-500/20 to-orange-500/5",
    icon: Cpu,
    iconColor: "text-amber-400",
    image: "/portfolio/wattwise.jpg",
  },
];

// ── Team ────────────────────────────────────────────────────

export const TEAM: TeamMember[] = [
  { name: "Jembar Bahri Hakim", role: "Project Manager", initials: "JB", image: "/images/team/jembar.jpeg" },
  { name: "Sulthon Dieko Yusuf M", role: "Frontend Developer", initials: "SD", image: "/images/team/sulthon.jpg" },
  { name: "Muhammad Fachry P", role: "Backend Developer", initials: "MF", image: "/images/team/fachry.jpg" },
  { name: "Caesar Ali", role: "UI/UX Designer", initials: "CA" },
  { name: "Indria Iqma", role: "Mobile Developer", initials: "II", image: "/images/team/indria.jpeg" },
  { name: "Maria Geovhani Mote", role: "Quality Assurance", initials: "MG", image: "/images/team/maria.jpeg" },
];

// ── Future Plans ────────────────────────────────────────────

export const FUTURE_PLANS: string[] = [
  "Pengembangan produk baru",
  "Mockup aplikasi",
  "Rencana bisnis & pemasaran produk baru",
];
