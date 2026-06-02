import { Lightbulb, Target, Rocket, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { COMPANY } from "@/data/content";

export default function About() {
  return (
    <Section id="tentang" className="border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left column — Philosophy */}
        <div>
          <SectionHeader title="Filosofi Nexora" subtitle="Siapa Kami" />
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-white font-medium">Nexora Tech</strong>{" "}
              adalah startup software house yang berfokus pada pengembangan
              solusi digital modern, efisien, dan berkelanjutan.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-400" aria-hidden="true" />
                Aurora = Cahaya
              </h3>
              <p className="text-sm text-blue-100/70">
                {COMPANY.philosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Right column — Vision & Mission */}
        <div className="grid gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <Target
              className="w-8 h-8 text-emerald-400 mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold text-white mb-3">Visi Kami</h3>
            <p className="text-sm">{COMPANY.vision}</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <Rocket
              className="w-8 h-8 text-cyan-400 mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold text-white mb-3">Misi Kami</h3>
            <ul className="space-y-3">
              {COMPANY.mission.map((m, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <CheckCircle2
                    className="w-5 h-5 text-cyan-500/50 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
