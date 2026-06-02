import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { TECH_STACK, PROCESS } from "@/data/content";

function getTechIcon(tech: string) {
  const normalized = tech.toLowerCase().trim();
  const rawUrlPrefix = "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/";

  // Map of tech stack names to official PNG icon filenames in marwin1991's repository
  const repoMatches: Record<string, string> = {
    laravel: "laravel.png",
    flutter: "flutter.png",
    php: "php.png",
    java: "java.png",
    mysql: "mysql.png",
    firebase: "firebase.png",
    python: "python.png",
    dart: "dart.png",
    "rest api": "rest.png",
  };

  if (normalized in repoMatches) {
    const filename = repoMatches[normalized];
    return (
      <img
        src={`${rawUrlPrefix}${filename}`}
        alt={`${tech} logo`}
        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
        loading="lazy"
      />
    );
  }

  // Beautiful custom SVG fallbacks for niche technologies not in the repository
  switch (normalized) {
    case "opencv":
      return (
        <svg className="w-5 h-5 text-[#5C3EE8] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>
      );
    case "mqtt":
      return (
        <svg className="w-5 h-5 text-[#66cc00] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2"/>
          <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>
        </svg>
      );
    case "esp-32 s3":
    case "esp-32":
      return (
        <svg className="w-5 h-5 text-[#FF5722] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
      );
    case "netbeans":
      return (
        <svg className="w-5 h-5 text-[#4A90E2] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
          <polyline points="2 8.5 12 15 22 8.5"/>
          <polyline points="12 22 12 15"/>
        </svg>
      );
    case "iotdb":
      return (
        <svg className="w-5 h-5 text-[#3F51B5] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      );
    case "svm":
      return (
        <svg className="w-5 h-5 text-[#9C27B0] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
      );
  }
}

export default function TechStack() {
  return (
    <Section id="teknologi">
      {/* Tech stack pills */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
          Teknologi Modern
        </p>
        <h2 className="text-2xl font-bold text-white">
          Tech Stack yang Kami Gunakan
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
        {TECH_STACK.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium text-sm hover:bg-white/[0.08] hover:text-white hover:-translate-y-1.5 hover:scale-105 active:translate-y-0 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] cursor-default select-none group"
          >
            {getTechIcon(tech)}
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {/* Development Process */}
      <div className="mt-32">
        <SectionHeader
          title="Bagaimana Kami Bekerja"
          subtitle="Proses Pengembangan"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group"
            >
              <span
                className="text-4xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-blue-500/10 transition-colors"
                aria-hidden="true"
              >
                {step.step}
              </span>
              <h3 className="text-white font-semibold mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
