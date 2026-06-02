import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-400 overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Skip to content link (accessibility) */}
      <a
        href="#tentang"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Langsung ke konten utama
      </a>

      <Navbar />

      <main className="relative pt-32" id="main-content">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Portfolio />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
