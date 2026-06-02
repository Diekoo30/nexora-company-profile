"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, X, ExternalLink, Calendar, MonitorSmartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { PORTFOLIO } from "@/data/content";
import type { PortfolioProject } from "@/types";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <Section id="portofolio" className="bg-[#0f0f13] border-y border-white/5">
      <SectionHeader title="Karya & Solusi Kami" subtitle="Portofolio" />

      <div className="space-y-24">
        {PORTFOLIO.map((project, idx) => {
          const ProjectIcon = project.icon;
          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Project screenshot / mockup */}
              <div className="w-full lg:w-1/2 relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-3xl`}
                  aria-hidden="true"
                />
                
                {/* Image Container with click action */}
                <div 
                  role="button"
                  tabIndex={project.image ? 0 : -1}
                  onClick={() => {
                    if (project.image) {
                      console.log("Opening project:", project.name);
                      setSelectedProject(project);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (project.image) {
                        setSelectedProject(project);
                      }
                    }
                  }}
                  className={`w-full aspect-video rounded-[22px] bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden z-20 text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${project.image ? 'cursor-pointer hover:border-blue-500/50 transition-colors group/btn' : 'cursor-default'}`}
                  aria-label={project.image ? `Lihat detail ${project.name}` : undefined}
                >
                  {/* Faux browser chrome */}
                  <div
                    className="absolute top-0 left-0 right-0 h-10 bg-[#121212] border-b border-white/5 flex items-center gap-2 px-4 z-30"
                    aria-hidden="true"
                  >
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                  {project.image ? (
                    <div className="relative w-full h-full pt-10">
                      {/* Blurred Background covering full area */}
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover opacity-40 blur-md scale-110 pointer-events-none"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        aria-hidden="true"
                      />
                      
                      {/* Foreground Image with original aspect ratio */}
                      <div className="absolute inset-0 pt-10 p-6 flex items-center justify-center z-10 pointer-events-none">
                        <div className="relative w-full h-full pointer-events-none">
                          <Image
                            src={project.image}
                            alt={`Poster ${project.name}`}
                            fill
                            className="object-contain drop-shadow-2xl pointer-events-none"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 pt-10 bg-black/40 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                         <button
                           type="button"
                           onClick={(e) => {
                             e.stopPropagation();
                             if (project.image) {
                               console.log("Opening project from overlay button:", project.name);
                               setSelectedProject(project);
                             }
                           }}
                           className="bg-blue-600 px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover/btn:translate-y-0 transition-transform duration-300 cursor-pointer pointer-events-auto hover:bg-blue-500 active:scale-95 transition-all"
                         >
                           Detail
                           <ExternalLink className="w-4 h-4" />
                         </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ProjectIcon
                        className={`w-12 h-12 ${project.iconColor}`}
                        aria-hidden="true"
                      />
                      <h4 className="text-2xl font-bold text-white/20 mt-4 tracking-wider uppercase">
                        {project.name}
                      </h4>
                    </>
                  )}
                </div>
              </div>

              {/* Project details */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{project.platform}</Badge>
                  <span className="text-xs text-slate-500">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-6">
                  {project.category}
                </p>

                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                      Fitur Utama
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feat, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <CheckCircle2
                            className="w-4 h-4 text-white/30 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-slate-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                      Teknologi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded bg-white/5 text-slate-400 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>

    {/* Detailed Fullscreen Modal — Rendered OUTSIDE Section at z-[9999] with Framer Motion animations! */}
    <AnimatePresence>
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 lg:p-12"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-red-500/80 rounded-full text-white transition-colors border border-white/20 z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(null);
            }}
            aria-label="Tutup detail"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.93, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.93, y: 15, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 340 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Full Image */}
            <div className="w-full lg:w-[52%] bg-black relative flex-shrink-0 min-h-[40vh] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-white/5">
               {/* Blurred background */}
               <Image
                  src={selectedProject.image!}
                  alt=""
                  fill
                  className="object-cover opacity-20 blur-md"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  aria-hidden="true"
                />
               {/* Actual Image */}
               <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedProject.image!}
                      alt={`Detail ${selectedProject.name}`}
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
               </div>
            </div>

            {/* Right: Project Details */}
            <div className="w-full lg:w-[48%] p-6 md:p-8 flex flex-col bg-gradient-to-b from-white/[0.01] to-transparent overflow-y-auto">
              <div className="flex items-center gap-3 mb-6">
                <Badge>{selectedProject.platform}</Badge>
              </div>
              
              <h2 id="modal-title" className="text-3xl font-bold text-white mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-blue-400 font-medium mb-6">
                {selectedProject.category}
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                {selectedProject.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                 <div>
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                       <Calendar className="w-4 h-4" />
                       <span className="text-xs uppercase tracking-wider font-semibold">Periode</span>
                    </div>
                    <p className="text-sm text-white font-medium">{selectedProject.period}</p>
                 </div>
                 <div>
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                       <MonitorSmartphone className="w-4 h-4" />
                       <span className="text-xs uppercase tracking-wider font-semibold">Platform</span>
                    </div>
                    <p className="text-sm text-white font-medium">{selectedProject.platform}</p>
                 </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                    Fitur Utama
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="text-sm flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 text-blue-500 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-slate-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
