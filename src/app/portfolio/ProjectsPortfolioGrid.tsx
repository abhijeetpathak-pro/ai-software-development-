// src/app/portfolio/ProjectsPortfolioGrid.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowUpRight, CheckCircle2, Layers, Award, X, ExternalLink, Globe, Cpu, ShieldCheck, Clock } from 'lucide-react';
import { clientCaseStudies, ClientCaseStudy } from '@/data/caseStudies';
import { soundFx } from '@/lib/AudioEngine';

const categories = [
  'All',
  'E-Commerce & Food',
  'EdTech & Learning',
  'SaaS & Enterprise',
  'AI & Digital Transformation',
  'Social & Community'
];

export default function ProjectsPortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ClientCaseStudy | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? clientCaseStudies
      : clientCaseStudies.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio-grid" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>COMPREHENSIVE CASE STUDY PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-slate-950 font-display">
              ALL 11 VERIFIED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                CLIENT CASE STUDIES
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-sm">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Explore our full catalog of software engineering and digital transformation deliveries.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => {
            const isSelected = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedProject(p);
              }}
              className="group relative flex flex-col justify-between rounded-3xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-red-600/40 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top: Full-Box Project Image with White BG */}
              <div className="relative h-52 sm:h-60 w-full bg-white border-b border-slate-200 flex items-center justify-center p-6 overflow-hidden">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.client}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 bg-red-50/90 px-3 py-1 rounded-full border border-red-200/80 shadow-xs">
                    {p.caseNumber}
                  </span>
                </div>
                {p.metrics && (
                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[10px] font-mono font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-lg shadow-xs">
                      {p.metrics}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 font-display group-hover:text-red-600 transition-colors">
                    {p.client}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">{p.industry}</p>
                </div>

                <p className="text-xs font-medium italic text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                  &ldquo;{p.tagline}&rdquo;
                </p>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                  {p.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <p className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Key Highlights:</p>
                  {p.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-600 group-hover:underline inline-flex items-center gap-1.5">
                  View Full Case Study &rarr;
                </span>
                <span className="w-8 h-8 rounded-full bg-white group-hover:bg-red-600 text-slate-600 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-2 pr-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
                  {selectedProject.caseNumber}
                </span>

                <div className="flex items-center gap-4 pt-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
                    {selectedProject.client}
                  </h3>
                  {selectedProject.logo && (
                    <Image src={selectedProject.logo} alt={selectedProject.client} width={100} height={36} className="h-8 w-auto object-contain" />
                  )}
                </div>

                <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                  {selectedProject.industry}
                </p>
              </div>

              {/* Tagline */}
              <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 text-rose-800 italic text-sm font-semibold">
                &ldquo;{selectedProject.tagline}&rdquo;
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                <p>{selectedProject.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  KEY HIGHLIGHTS
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              <p className="text-[10px] text-slate-400 italic">
                Client names and descriptions in this document reflect information provided by Witqualis. No metrics, ratings, or outcomes beyond what is stated above are implied or claimed.
              </p>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#contact-requisition"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                >
                  <span>Start Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>Book Discovery Call</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
