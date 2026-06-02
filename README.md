# Nexora Technology — Company Profile Portal 🚀

[![Framework](https://img.shields.io/badge/Framework-Next.js%2016-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Style](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-blue?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Animation](https://img.shields.io/badge/Animations-Framer%20Motion-purple?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Language](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

Portal Profil Perusahaan Resmi untuk **Nexora Technology**, startup *software house* inovatif yang berfokus pada penyediaan solusi digital cerdas, tangguh, dan ramah pengguna. Portal ini dirancang dengan standar kualitas tinggi, estetika visual modern, serta animasi responsif yang mewah.

---

## ✨ Fitur Utama

- **Desain Estetika Premium & Modern**: Skema warna HSL gelap yang disesuaikan dengan cahaya aurora futuristik, border gradien tipis, efek glassmorphism, dan visual yang memukau.
- **Micro-Animations Responsif (Tech Stack)**: Kartu tech stack interaktif yang terintegrasi dengan ikon pustaka GitHub dan memiliki animasi melayang ("ngambang") pegas fisik (*spring physics*) yang sangat halus.
- **Portofolio Pop-up Taktil (Lightbox)**: Showcase galeri poster proyek portofolio 16:9 yang responsif terhadap klik, memunculkan modal lightbox terpusat dan elegan dengan animasi transisi yang mulus.
- **Optimasi Aset Maksimal**: Reduksi ukuran foto tim (hingga 98% kompresi gambar tanpa penurunan kualitas visual) untuk waktu pemuatan instan.
- **Navigasi Mobile Hamburger**: Menu hamburger seluler adaptif yang interaktif dan lancar untuk navigasi di perangkat handphone.
- **100% Aksesibel & Semantis**: Mengikuti standar semantik HTML5, skip-to-content link, atribut ARIA, dan pengelolaan z-index stacking context yang rapi untuk mencegah tumpang tindih dengan navigasi.

---

## 🛠️ Stack Teknologi

Proyek ini dibangun menggunakan arsitektur modern:

*   **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
*   **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/) (Strict Typing)
*   **Styling & Layout**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animasi Transisi**: [Framer Motion](https://www.framer.com/motion/) (Hardware-accelerated)
*   **Ikon Grafis**: [Lucide React](https://lucide.dev/) & [Profile Technology Icons](https://github.com/marwin1991/profile-technology-icons)

---

## 📁 Struktur Folder

```
nexora/
├── app/                  # Next.js App Router (Layouts & Global CSS)
├── components/           # Komponen UI Halaman Utama
│   ├── ui/               # Reusable UI Primitives (Section, Header, dll.)
│   ├── Navbar.tsx        # Sticky Header & Hamburger Mobile Menu
│   ├── Portfolio.tsx     # Showcases & Lightbox Modal Animasi
│   ├── TechStack.tsx     # Tech Stack Cards & Hover Floating Animations
│   └── ...
├── data/                 # Manajemen Konten Sentral (content.ts)
├── public/               # File Statis Aset (Images, Logo, Portfolio)
├── types/                # Strict TypeScript Interface Declarations
├── next.config.ts        # Next.js Static Export Configuration
├── tailwind.config.ts    # Custom Design Tokens Tailwind
└── package.json          # Dependensi Proyek & Skrip Menjalankan
```

---

## 🚀 Memulai Pengembangan

### 1. Kebutuhan Sistem
Pastikan Anda telah memasang **Node.js (v18.x atau lebih baru)** di komputer Anda.

### 2. Pemasangan Dependensi
Clone repositori dan pasang pustaka yang diperlukan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan Lokal
Jalankan dev-server Next.js:
```bash
npm run dev
```
Setelah aktif, buka peramban Anda dan akses:
👉 **[http://localhost:3000](http://localhost:3000)**

### 4. Melakukan Build Statis
Untuk membuat berkas build statis yang dioptimalkan untuk diunggah:
```bash
npm run build
```
Hasil ekspor statis akan berada di dalam direktori `/out`.

---

## ☁️ Deployment di Vercel

Repositori ini telah dikonfigurasi sepenuhnya dan siap untuk di-deploy ke **Vercel** dengan sangat mudah!

1. Masuk ke dashboard **[Vercel](https://vercel.com/new)** Anda.
2. Impor proyek dari repositori GitHub Anda: **`nexora-company-profile`**.
3. Vercel akan otomatis mendeteksi **Next.js** sebagai kerangka kerja utama.
4. Klik **Deploy**! Proyek akan langsung aktif secara publik dalam kurun waktu kurang dari 1 menit.

---

## 📄 Lisensi

Proyek ini dilindungi di bawah hak cipta **Nexora Technology © 2026**. Hak Cipta Dilindungi Undang-Undang.
