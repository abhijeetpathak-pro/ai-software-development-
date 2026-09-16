// src/app/portfolio/DeveloperExperienceCards.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, X, ExternalLink, Zap, Award, Shield } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface ExperienceItem {
  id: string;
  num: string;
  role: string;
  categoryLabel: string;
  timeline: string;
  specialization: string;
  description: string;
  stack: string[];
  image: string;
  highlights: string[];
  topOffset: string;
  zIndex: number;
}

const experienceData: ExperienceItem[] = [
  {
    id: 'full-stack',
    num: '01',
    role: 'Senior Full Stack Developer',
    categoryLabel: '01 / EXPERIENCE',
    timeline: '2023 — PRESENT',
    specialization: 'FULL STACK DEVELOPMENT',
    description: 'Building scalable web applications and digital products using modern frontend, backend and cloud technologies.',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    image: '/images/experience/fullstack.jpg',
    highlights: [
      'Sub-second cold starts with Next.js 15 Server Components & Edge Runtime',
      'High-concurrency PostgreSQL connection pooling and Redis caching layer',
      'End-to-end type safety across client and server with TypeScript & Zod'
    ],
    topOffset: 'top-24 sm:top-28',
    zIndex: 10
  },
  {
    id: 'ai-ml',
    num: '02',
    role: 'AI & Machine Learning Architect',
    categoryLabel: '02 / EXPERIENCE',
    timeline: '2023 — PRESENT',
    specialization: 'APPLIED AI & MACHINE LEARNING',
    description: 'Architecting autonomous LLM vector pipelines, fine-tuned embedding search, and real-time inference systems.',
    stack: ['Python', 'OpenAI API', 'LangChain', 'Vector Databases', 'PyTorch', 'FastAPI'],
    image: '/images/experience/ai-ml.jpg',
    highlights: [
      'Retrieval-Augmented Generation (RAG) with sub-100ms similarity lookups',
      'Autonomous agent decision workflows with human-in-the-loop validation',
      'Continuous embedding drift monitoring and fine-tuning pipelines'
    ],
    topOffset: 'top-28 sm:top-32',
    zIndex: 20
  },
  {
    id: 'frontend',
    num: '03',
    role: 'Frontend Creative Developer',
    categoryLabel: '03 / EXPERIENCE',
    timeline: '2022 — PRESENT',
    specialization: 'CREATIVE INTERFACE ENGINEERING',
    description: 'Crafting fluid 60FPS digital interfaces, interactive 3D WebGL scenes, and responsive component design systems.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GLSL'],
    image: '/images/experience/frontend.jpg',
    highlights: [
      'Fluid physics-driven animations with Framer Motion spring physics',
      'Hardware-accelerated 3D shaders and custom interactive canvas elements',
      '100/100 Google Lighthouse Core Web Vitals on high-traffic consumer web apps'
    ],
    topOffset: 'top-32 sm:top-36',
    zIndex: 30
  },
  {
    id: 'backend',
    num: '04',
    role: 'Backend & Distributed Systems',
    categoryLabel: '04 / EXPERIENCE',
    timeline: '2021 — PRESENT',
    specialization: 'DISTRIBUTED SYSTEMS & APIS',
    description: 'Engineering high-concurrency microservices, multi-region event pipelines, and robust database architectures.',
    stack: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    image: '/images/experience/backend.jpg',
    highlights: [
      'Event-driven async microservices handling 40,000+ daily transactions',
      'Zero-data-loss double-entry ledger architecture for fintech settlements',
      'Automated rate limiting, circuit breaking, and sub-15ms API latency'
    ],
    topOffset: 'top-36 sm:top-40',
    zIndex: 40
  },
  {
    id: 'cloud-devops',
    num: '05',
    role: 'Cloud & DevOps SRE',
    categoryLabel: '05 / EXPERIENCE',
    timeline: '2020 — PRESENT',
    specialization: 'CLOUD INFRASTRUCTURE & SRE',
    description: 'Orchestrating resilient multi-cloud Kubernetes clusters, automated CI/CD pipelines, and zero-trust security infrastructure.',
    stack: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Terraform', 'Prometheus'],
    image: '/images/experience/cloud-devops.jpg',
    highlights: [
      'Multi-region Kubernetes fleets with autoscaling and zero-downtime rolling deploys',
      'Infrastructure-as-Code with Terraform and automated drift detection',
      'SLA-backed uptime monitoring with automated failover'
    ],
    topOffset: 'top-40 sm:top-44',
    zIndex: 50
  }
];

export default function DeveloperExperienceCards() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const handleInspect = (item: ExperienceItem) => {
    soundFx.playPop();
    setSelectedExperience(item);
  };

  return (
    <section
      id="developer-showcase"
      className="relative py-28 bg-[#fafafa] text-slate-900 selection:bg-red-500/20 border-b border-slate-200 overflow-visible"
    >
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>STACKING SCROLL EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              DEVELOPER & TECH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                EXPERIENCE MATRIX
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Scroll down to watch each experience card stack smoothly on top of the previous one.
            </p>
            <div className="flex items-center md:justify-end gap-3 mt-3">
              <span className="text-[11px] font-mono text-red-600 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                Vetted Vetted Talent Pool
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STICKY STACKING CARDS CONTAINER (White Background + Red Accents)           */}
        {/* ========================================================================= */}
        <div className="relative space-y-16 pb-20">
          {experienceData.map((item) => (
            <div
              key={item.id}
              style={{ zIndex: item.zIndex }}
              className={`sticky ${item.topOffset} w-full transition-all duration-300`}
            >
              <div
                onMouseEnter={() => soundFx.playHover()}
                className="group relative rounded-[28px] border border-slate-200 bg-white/95 backdrop-blur-xl hover:border-red-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_10px_40px_rgba(225,29,72,0.12)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
                  
                  {/* ------------------------------------------------------------- */}
                  {/* LEFT SIDE: 50% WIDTH TECHNOLOGY VISUAL / IMAGE                */}
                  {/* ------------------------------------------------------------- */}
                  <div className="lg:col-span-6 relative overflow-hidden bg-slate-900 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                    
                    {/* Technology Imagery */}
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-slate-950/40" />

                    {/* Floating Left Pill Badge */}
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-white uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>{item.specialization}</span>
                    </div>

                    {/* Number Overlay Watermark */}
                    <div className="absolute bottom-4 left-6 text-5xl sm:text-6xl font-black font-display text-white/20 pointer-events-none select-none">
                      {item.num}
                    </div>
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* RIGHT SIDE: 50% WIDTH EXPERIENCE CONTENT                      */}
                  {/* ------------------------------------------------------------- */}
                  <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10 bg-white">
                    
                    <div>
                      {/* Top Label */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-red-600 uppercase">
                          {item.categoryLabel}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.timeline}
                        </span>
                      </div>

                      {/* Large Bold Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 uppercase tracking-tight leading-tight font-display group-hover:text-red-600 transition-colors">
                        {item.role}
                      </h3>

                      {/* 1-2 Line Description */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Technology Stack Pills */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 font-medium group-hover:border-red-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Row: VIEW EXPERIENCE + Circular Glowing Red Arrow */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleInspect(item)}
                        className="inline-flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-slate-900 uppercase group/btn hover:text-red-600 transition-colors"
                      >
                        <span>VIEW EXPERIENCE</span>
                        
                        {/* Circular Glowing Red Arrow Button */}
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </button>

                      <span className="text-[11px] font-mono text-slate-400 uppercase hidden sm:inline-block">
                        Trial Sprint Available
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL EXPERIENCE INSPECTION MODAL (White & Red)                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative z-10 w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-2xl text-slate-900 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Details */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] font-mono font-bold uppercase">
                    {selectedExperience.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedExperience.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase font-display">
                  {selectedExperience.role}
                </h3>
                <p className="text-sm font-mono text-slate-600 mt-1">
                  {selectedExperience.description}
                </p>
              </div>

              {/* Core Architectural Highlights */}
              <div className="mb-6 p-6 rounded-2xl bg-red-50/50 border border-red-200">
                <h4 className="text-xs font-mono font-bold uppercase text-red-700 tracking-wider mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Key Architectural Deliverables & Standards</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedExperience.highlights.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-3">
                  Production Frameworks & Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200 flex-wrap gap-4">
                <a
                  href="#portfolio-contact"
                  onClick={() => {
                    setSelectedExperience(null);
                    soundFx.playClick();
                  }}
                  className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/20"
                >
                  Hire {selectedExperience.role}
                </a>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-red-600 font-bold hover:underline"
                >
                  <span>Book Architecture Discovery on Calendly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
