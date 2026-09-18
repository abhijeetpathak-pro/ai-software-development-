// src/components/animated/ProjectsSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Award,
  ArrowRight
} from 'lucide-react';
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

export default function ProjectsSection() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<ClientCaseStudy | null>(null);

  const homeProjects = clientCaseStudies.filter((p) => p.id !== 'jangubuzz');

  const filteredProjects =
    selectedCat === 'All'
      ? homeProjects
      : homeProjects.filter((p) => p.category === selectedCat);

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full selection:bg-primary/20">
      {/* Section Header with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/40 pb-8"
      >
        <div className="flex flex-col gap-3">
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            FEATURED ARCHITECTURES &amp; DELIVERIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">Software Architectures</span>
          </h2>
          <p className="text-xs font-mono text-muted-foreground uppercase leading-relaxed mt-1">
            // EXPLORE REAL-WORLD ENTERPRISE CASE STUDIES &amp; PLATFORMS DELIVERED BY WITQUALIS
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 bg-card/60 p-1.5 rounded-2xl border border-border/50 backdrop-blur-md self-start md:self-auto">
          {categories.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCat(cat);
                  soundFx.playClick();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-xl bg-primary z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 3 CARDS PER LINE GRID WITH STAGGERED SCROLL-REVEAL                        */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: (idx % 3) * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={() => {
              soundFx.playPop();
              setActiveModalProject(project);
            }}
            className="group relative rounded-3xl border border-border/70 bg-card/70 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* Top: Full-Bleed Project Image Box */}
            <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-zinc-950 border-b border-border/50">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}

              {/* Gradient Overlays for High-Contrast Badges & Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-zinc-950/60 pointer-events-none" />

              {/* Top Floating Category Pill */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1.5 shadow-md z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{project.caseNumber}</span>
              </div>

              {/* Verified Metric Pill Top Right */}
              {project.metrics && (
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-300 shadow-md z-10">
                  {project.metrics}
                </div>
              )}

              {/* Bottom Client Watermark on Image */}
              <div className="absolute bottom-3 left-4 z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  {project.client}
                </span>
              </div>
            </div>

            {/* Middle: Title, Description & Highlights */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors mb-2">
                  {project.client}
                </h3>

                <p className="text-xs font-semibold text-primary/90 italic mb-2">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                  {project.description}
                </p>

                {/* Key Highlights Mini List */}
                <div className="space-y-1 pt-2 border-t border-border/40">
                  <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                    Key Highlights:
                  </span>
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-foreground/90">
                      <span className="text-primary font-bold">•</span>
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Badges */}
              {project.stack && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-0.5 rounded-md bg-muted/60 border border-border/40 text-[9px] font-mono font-medium text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Card Footer: Case Study Action */}
            <div className="p-4 px-6 border-t border-border/40 bg-card/40 flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED CASE STUDY
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundFx.playPop();
                  setActiveModalProject(project);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-mono font-bold hover:bg-primary/90 transition-all cursor-pointer shadow-sm shadow-primary/20"
              >
                <span>Full Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] overflow-y-auto text-foreground"
            >
              {/* Modal Top Banner */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-border/40 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-border p-2 flex items-center justify-center shrink-0">
                    {activeModalProject.image && (
                      <img
                        src={activeModalProject.image}
                        alt={activeModalProject.client}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                      {activeModalProject.caseNumber} • {activeModalProject.industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
                      {activeModalProject.client}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/15 via-primary/5 to-transparent border border-primary/20 mb-6 text-sm italic font-semibold text-primary">
                &ldquo;{activeModalProject.tagline}&rdquo;
              </div>

              {/* Modal Body */}
              <div className="flex flex-col gap-6">
                {/* Description */}
                <div className="p-5 rounded-2xl bg-muted/30 border border-border/50 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-foreground uppercase tracking-wider block">
                    Case Study Overview:
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 space-y-3">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    KEY HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeModalProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/90 bg-sky-500/5 border border-sky-500/10 p-3 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Production Scale / Metrics */}
                {activeModalProject.metrics && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                    <span className="text-xs font-mono text-muted-foreground font-semibold uppercase">
                      DELIVERY SCALE / HIGHLIGHT:
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {activeModalProject.metrics} {activeModalProject.metricsLabel && `— ${activeModalProject.metricsLabel}`}
                    </span>
                  </div>
                )}

                {/* Stack Tags */}
                {activeModalProject.stack && (
                  <div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      Engineered Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.stack.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-muted/60 border border-border/50 text-xs font-mono font-medium text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Disclaimer from Document */}
                <p className="text-[10px] text-muted-foreground/60 italic pt-2">
                  Client names and descriptions in this document reflect information provided by Witqualis. No metrics, ratings, or outcomes beyond what is stated above are implied or claimed.
                </p>
              </div>

              {/* Modal Footer CTA */}
              <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveModalProject(null);
                    soundFx.playClick();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold hover:bg-primary/90 transition-all shadow-md"
                >
                  <span>Start Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-muted/80 hover:bg-muted text-foreground text-xs font-mono font-bold transition-colors border border-border"
                >
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Book 30-Min Discovery</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
