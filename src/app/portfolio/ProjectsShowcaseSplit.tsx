// src/app/portfolio/ProjectsShowcaseSplit.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Award, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { clientCaseStudies, ClientCaseStudy } from '@/data/caseStudies';
import { soundFx } from '@/lib/AudioEngine';

export default function ProjectsShowcaseSplit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModal, setSelectedModal] = useState<ClientCaseStudy | null>(null);

  const activeProject = clientCaseStudies[activeIndex] || clientCaseStudies[0];

  const handleNext = () => {
    soundFx.playWhoosh();
    setActiveIndex((prev) => (prev + 1) % clientCaseStudies.length);
  };

  const handlePrev = () => {
    soundFx.playWhoosh();
    setActiveIndex((prev) => (prev - 1 + clientCaseStudies.length) % clientCaseStudies.length);
  };

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    soundFx.playClick();
    setActiveIndex(idx);
  };

  return (
    <section id="portfolio-projects" className="relative py-28 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>REAL CLIENT CASE STUDIES ({clientCaseStudies.length} DELIVERIES)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-slate-950 font-display">
              PROVEN PRODUCTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                SHIPPED FOR INDUSTRY LEADERS
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-sm">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Explore how WitQualis engineering teams solve complex architectural bottlenecks across {clientCaseStudies.length} major client deliveries.
            </p>
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 flex-wrap mb-10">
          {clientCaseStudies.map((proj, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{proj.client}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Split Layout */}
        <div className="relative w-full rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Left Column: Full-Box Project Client Image & Brand Showcase Card */}
              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-300 bg-white shadow-2xl group flex flex-col justify-between min-h-[380px] sm:min-h-[460px]">
                
                {/* Full Box Image Area */}
                <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center p-6 sm:p-10">
                  {activeProject.image && (
                    <img
                      src={activeProject.image}
                      alt={activeProject.client}
                      className="w-full h-full max-h-[280px] sm:max-h-[320px] object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-md"
                    />
                  )}
                </div>

                {/* Top Bar on Preview */}
                <div className="flex items-center justify-between gap-3 relative z-20 p-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-red-400 uppercase shadow-md">
                    {activeProject.caseNumber}
                  </span>

                  {/* Metric Highlight Badge */}
                  {activeProject.metrics && (
                    <div className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 border border-emerald-500 text-white font-mono text-xs font-bold backdrop-blur-md shadow-md">
                      <span>{activeProject.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Bar on Preview with sleek contrast gradient */}
                <div className="relative z-20 p-6 pt-14 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight">
                    {activeProject.client}
                  </h3>
                  <p className="text-xs font-mono text-slate-300 mt-1">
                    Industry: {activeProject.industry}
                  </p>
                </div>
              </div>

              {/* Right Column: Project Details & Highlights */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                      {activeProject.caseNumber} • {activeProject.industry}
                    </span>
                  </div>
                  
                  <div className="my-3 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 text-rose-800 italic text-sm font-semibold">
                    &ldquo;{activeProject.tagline}&rdquo;
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeProject.description}
                  </p>

                  {/* Key Highlights Grid */}
                  <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200 my-4 space-y-2.5">
                    <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                      KEY HIGHLIGHTS:
                    </span>
                    <div className="space-y-1.5">
                      {activeProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack Tags */}
                  {activeProject.stack && (
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase text-slate-500 mb-2">Engineered Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.stack.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-800 font-semibold shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      soundFx.playPop();
                      setSelectedModal(activeProject);
                    }}
                    className="flex-1 py-3 px-5 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#contact-requisition"
                    onClick={() => soundFx.playClick()}
                    className="py-3 px-5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-mono text-xs font-bold transition-all border border-slate-300 shadow-sm"
                  >
                    Build Similar
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
            <button
              onClick={handlePrev}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Project</span>
            </button>

            <span className="hidden sm:inline-block font-semibold">
              Case Study {activeIndex + 1} of {clientCaseStudies.length}
            </span>

            <button
              onClick={handleNext}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>Next Project</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl z-10 text-slate-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 cursor-pointer transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 max-h-16 flex items-center justify-center">
                  {selectedModal.image && (
                    <img
                      src={selectedModal.image}
                      alt={selectedModal.client}
                      className="max-h-10 max-w-[120px] object-contain"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>{selectedModal.caseNumber} • {selectedModal.industry}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-display">
                    {selectedModal.client}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <div className="my-4 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 text-rose-800 italic text-sm font-semibold">
                &ldquo;{selectedModal.tagline}&rdquo;
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 mb-2">
                    Case Study Description
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {selectedModal.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600" />
                    KEY HIGHLIGHTS
                  </h5>
                  <div className="space-y-2">
                    {selectedModal.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scale / Metric */}
                {selectedModal.metrics && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-900 font-bold uppercase">
                      DELIVERY SCALE &amp; IMPACT:
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      {selectedModal.metrics} {selectedModal.metricsLabel && `(${selectedModal.metricsLabel})`}
                    </span>
                  </div>
                )}

                {/* Stack */}
                {selectedModal.stack && (
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Engineered Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedModal.stack.map((st) => (
                        <span key={st} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Disclaimer */}
                <p className="text-[10px] text-slate-400 italic pt-2">
                  Client names and descriptions in this document reflect information provided by Witqualis. No metrics, ratings, or outcomes beyond what is stated above are implied or claimed.
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href="#contact-requisition"
                    onClick={() => {
                      setSelectedModal(null);
                      soundFx.playClick();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/20"
                  >
                    <span>Deploy Similar Squad</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://calendly.com/witqualis_services"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold transition-colors"
                  >
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>Book 30-Min Discovery Call</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
