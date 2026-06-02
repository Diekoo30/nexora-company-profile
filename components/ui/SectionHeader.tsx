interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24 text-center md:text-left max-w-3xl">
      <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );
}
