import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
        </span>
        Modern Software House
      </div>

      {/* Main headline */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] max-w-5xl mx-auto mb-8">
        Inovasi masa depan melalui{" "}
        <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
          perangkat lunak cerdas.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        {COMPANY.vision}
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#portofolio"
          className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          Lihat Portofolio <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
        <a
          href="#kontak"
          className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
