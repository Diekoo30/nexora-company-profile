import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300">
      {children}
    </span>
  );
}
