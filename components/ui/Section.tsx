import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
}
