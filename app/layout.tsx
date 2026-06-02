import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexora Technology — Software House Profesional",
  description:
    "Nexora Technology adalah software house yang menghadirkan solusi digital inovatif, efisien, dan berkelanjutan. Layanan meliputi web development, mobile app, UI/UX design, dan API development.",
  keywords: [
    "Nexora Technology",
    "software house",
    "web development",
    "mobile app",
    "UI/UX design",
    "Jember",
  ],
  openGraph: {
    title: "Nexora Technology — Software House Profesional",
    description:
      "Solusi digital inovatif, efisien, dan berkelanjutan untuk kebutuhan bisnis Anda.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
