"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
      aria-label="Navigasi utama"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          aria-label={`${COMPANY.name} — Beranda`}
        >
          <Image
            src="/logo/logo.png"
            alt="Nexora Technology Logo"
            width={72}
            height={72}
            className="drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all"
          />
          <span className="text-white font-bold tracking-wide text-2xl">
            NEXORA
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#kontak"
          className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Hubungi Kami
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10"
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
