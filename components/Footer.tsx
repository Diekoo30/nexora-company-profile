import Image from "next/image";
import { COMPANY } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="Nexora Logo"
            width={48}
            height={48}
            className="opacity-70"
          />
          <span>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
