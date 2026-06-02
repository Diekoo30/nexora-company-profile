import { CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES, WHY_US } from "@/data/content";

export default function Services() {
  return (
    <Section id="layanan" className="bg-black/50 border-y border-white/5">
      <SectionHeader title="Layanan Utama Kami" subtitle="Apa yang Kami Lakukan" />

      {/* Service cards — percentage bars removed per user decision */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {srv.title}
              </h3>
              <p className="text-sm text-slate-400">{srv.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Why Us section */}
      <div className="mt-32">
        <SectionHeader title="Mengapa Memilih Nexora" subtitle="Nilai Kami" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Dampak &amp; Komitmen
            </h3>
            <p className="text-sm mb-6">
              Kami berkomitmen memberikan solusi yang bernilai dan berkelanjutan
              dengan membantu digitalisasi proses bisnis Anda.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2
                  className="w-5 h-5 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="text-sm text-white">
                  Meningkatkan efisiensi kerja klien
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2
                  className="w-5 h-5 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="text-sm text-white">
                  Sistem siap dikembangkan di masa depan
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {WHY_US.map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-white/10 pl-6 py-2 hover:border-blue-500 transition-colors"
              >
                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
