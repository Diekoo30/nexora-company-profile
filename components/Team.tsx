import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { TEAM, FUTURE_PLANS } from "@/data/content";

export default function Team() {
  return (
    <Section id="tim">
      <SectionHeader title="Orang di Balik Layar" subtitle="Tim Nexora" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {TEAM.map((member, idx) => (
          <div key={idx} className="group text-center">
            {/* Avatar — real photo if available, initials as fallback */}
            <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/50 transition-colors">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={`Foto ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-white/60">
                      {member.initials}
                    </span>
                  </div>
                </div>
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-sm font-semibold text-white truncate">
              {member.name}
            </h3>
            <p className="text-xs text-slate-500">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Future Plans */}
      <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-blue-900/10 to-transparent border border-white/5 flex flex-col md:flex-row gap-12 items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Rencana Ke Depan
          </h3>
          <p className="text-slate-400">
            Roadmap inovasi Nexora Tech di masa depan.
          </p>
        </div>
        <ul className="grid sm:grid-cols-3 gap-6 w-full md:w-auto">
          {FUTURE_PLANS.map((plan, i) => (
            <li
              key={i}
              className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5"
            >
              <span className="text-blue-400 font-mono text-xs">
                0{i + 1}
              </span>
              <span className="text-sm text-white font-medium">{plan}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
