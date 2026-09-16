// src/app/portfolio/DeveloperShowcaseScroll.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Cpu, Shield, ExternalLink, UserCheck } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface TechDeveloper {
  id: string;
  role: string;
  category: string;
  badge: string;
  experience: string;
  rate: string;
  headline: string;
  description: string;
  skills: string[];
  deliverables: string[];
  themeColor: string;
  characterImg: string;
  postureTitle: string;
}

const developers: TechDeveloper[] = [
  {
    id: 'ai-rag',
    role: 'AI & LLM / RAG Architect',
    category: 'Artificial Intelligence',
    badge: 'HIGH DEMAND',
    experience: '8+ Years Senior',
    rate: '$35-$50 / hr',
    headline: 'Autonomous Agents & Vector Pipelines',
    description: 'Specializes in high-accuracy Retrieval-Augmented Generation, fine-tuned transformer models, and real-time embedding indexing for enterprise knowledge bases.',
    skills: ['PyTorch', 'LangChain', 'LlamaIndex', 'Pinecone', 'FastAPI', 'OpenAI API', 'Claude 3.7'],
    deliverables: ['Sub-100ms vector similarity lookup', '99.2% RAG hallucination suppression', 'Production autonomous agent loops'],
    themeColor: '#0284c7', // Sky blue
    characterImg: '/images/model/suited-developer-1.jpg',
    postureTitle: 'Lead AI Engineer Active'
  },
  {
    id: 'machine-learning',
    role: 'ML & Deep Learning Engineer',
    category: 'Machine Learning',
    badge: 'CORE SPRINT',
    experience: '7+ Years Senior',
    rate: '$32-$48 / hr',
    headline: 'Computer Vision & Predictive Analytics Models',
    description: 'Designs edge computer vision pipelines, anomaly detection systems, and automated MLOps CI/CD pipelines with continuous drift monitoring.',
    skills: ['TensorFlow', 'Computer Vision', 'YOLO v10', 'Scikit-Learn', 'MLflow', 'Docker', 'CUDA'],
    deliverables: ['Real-time object detection at 60FPS', 'Automated model retraining pipelines', '99.4% precision anomaly classification'],
    themeColor: '#4f46e5', // Indigo
    characterImg: '/images/model/suited-developer-2.jpg',
    postureTitle: 'Senior MLOps Architect Active'
  },
  {
    id: 'python-data',
    role: 'Python & Data Engineer',
    category: 'Data Engineering',
    badge: 'SCALE READY',
    experience: '9+ Years Principal',
    rate: '$30-$45 / hr',
    headline: 'High-Throughput ETL & Real-Time Data Streams',
    description: 'Builds fault-tolerant data pipelines processing millions of daily records using distributed compute engines, async microservices, and modern data warehouses.',
    skills: ['Python 3.12', 'FastAPI', 'Apache Spark', 'Kafka', 'Snowflake', 'PostgreSQL', 'Airflow'],
    deliverables: ['10M+ daily events ingestion pipeline', 'Zero-latency async API microservices', 'Automated data lakehouse orchestration'],
    themeColor: '#059669', // Emerald
    characterImg: '/images/model/suited-developer-1.jpg',
    postureTitle: 'Principal Data Engineer Active'
  },
  {
    id: 'fullstack-nextjs',
    role: 'Full-Stack Next.js 15 Lead',
    category: 'Full-Stack Web',
    badge: 'POPULAR',
    experience: '8+ Years Lead',
    rate: '$28-$42 / hr',
    headline: 'Micro-Frontend SaaS & High-Concurrency Systems',
    description: 'Engineers responsive, server-rendered web applications with React 19 Server Components, TypeScript safety, and sub-second cold starts.',
    skills: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Redis'],
    deliverables: ['100/100 Google Lighthouse Core Vitals', 'Sub-millisecond edge API caching', 'Real-time WebSocket collaboration'],
    themeColor: '#d97706', // Amber
    characterImg: '/images/model/suited-developer-2.jpg',
    postureTitle: 'Full-Stack Lead Architect Active'
  },
  {
    id: 'cloud-devops',
    role: 'Cloud DevOps & SRE Lead',
    category: 'Infrastructure',
    badge: 'CRITICAL',
    experience: '10+ Years Lead',
    rate: '$35-$50 / hr',
    headline: 'Multi-Cloud Kubernetes & Zero-Trust Infrastructure',
    description: 'Orchestrates enterprise Kubernetes fleets, Terraform Infrastructure-as-Code, and automated zero-downtime rolling deployments across AWS and GCP.',
    skills: ['AWS', 'Kubernetes (K8s)', 'Terraform', 'Docker', 'Prometheus', 'Grafana', 'GitHub Actions'],
    deliverables: ['SLA-backed infrastructure uptime monitoring', 'Automated disaster recovery in under 5 mins', 'Zero-trust IAM & SOC2 compliance'],
    themeColor: '#e11d48', // Rose
    characterImg: '/images/model/suited-developer-1.jpg',
    postureTitle: 'Principal Cloud SRE Active'
  },
  {
    id: 'creative-webgl',
    role: 'Creative WebGL & 3D Visualizer',
    category: 'Creative Tech',
    badge: 'SPECIALIST',
    experience: '6+ Years Specialist',
    rate: '$30-$45 / hr',
    headline: 'Interactive 3D Experiences & Custom GLSL Shaders',
    description: 'Brings digital products to life with fluid 60FPS WebGL graphics, Three.js spatial physics, interactive shaders, and kinetic typography animations.',
    skills: ['Three.js', 'WebGL', 'GLSL Shaders', 'Framer Motion', 'Canvas API', 'Blender', 'TypeScript'],
    deliverables: ['60FPS hardware-accelerated 3D scenes', 'Custom particle & physics simulations', 'Fluid touch-responsive kinetic typography'],
    themeColor: '#7c3aed', // Violet
    characterImg: '/images/model/suited-developer-2.jpg',
    postureTitle: 'Creative 3D Engineer Active'
  }
];

export default function DeveloperShowcaseScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDev = developers[activeIndex];

  const handleNext = () => {
    soundFx.playWhoosh();
    setActiveIndex((prev) => (prev + 1) % developers.length);
  };

  const handlePrev = () => {
    soundFx.playWhoosh();
    setActiveIndex((prev) => (prev - 1 + developers.length) % developers.length);
  };

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    soundFx.playClick();
    setActiveIndex(idx);
  };

  return (
    <section id="developer-showcase" className="relative py-20 bg-white text-slate-900 border-b border-slate-200 selection:bg-sky-500/20">
      {/* Subtle Light Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold tracking-widest uppercase mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>SPECIALIZED ENGINEERING COLLECTIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-slate-950 font-display">
              PRE-VETTED DEVELOPERS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900">
                READY FOR IMMEDIATE SPRINT
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-sm">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Select any specialized role to inspect technical stack, deliverables, and rates.
            </p>
            <div className="flex items-center md:justify-end gap-2 mt-2">
              <span className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                48-Hour Rapid Integration
              </span>
            </div>
          </div>
        </div>

        {/* Technology Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 flex-wrap mb-10">
          {developers.map((dev, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={dev.id}
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-sky-400' : 'bg-slate-400'}`} />
                <span>{dev.role.split(' ')[0]} {dev.role.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* LIGHT STAGE: SQUARE TECH CARD + SUITED DEVELOPER CHARACTER                */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur p-6 sm:p-10 shadow-xl overflow-hidden mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* ----------------------------------------------------------------- */}
            {/* LEFT: THE SQUARE TECH CARD (Light Mode)                           */}
            {/* ----------------------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDev.id}
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[440px]"
                >
                  {/* Top Bar: Badge & Hourly Rate */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider text-white shadow-sm"
                        style={{ background: activeDev.themeColor }}
                      >
                        {activeDev.badge}
                      </span>

                      <span className="text-xs font-mono font-bold text-slate-700 px-3 py-1 rounded-full bg-slate-100">
                        {activeDev.rate}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight font-display">
                      {activeDev.role}
                    </h3>

                    <p className="text-xs font-mono font-bold tracking-wider text-sky-600 mt-1 uppercase">
                      {activeDev.experience} • {activeDev.headline}
                    </p>

                    {/* Bio Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeDev.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="my-4">
                    <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Core Frameworks & Tools
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDev.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-800 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-700">
                    {activeDev.deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="#portfolio-contact"
                      onClick={() => soundFx.playClick()}
                      className="flex-1 py-3 px-4 rounded-full text-white font-mono text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md hover:opacity-90 flex items-center justify-center gap-2"
                      style={{ background: activeDev.themeColor }}
                    >
                      <span>Hire This Engineer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="https://calendly.com/witqualis_services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold transition-all border border-slate-300 flex items-center gap-1.5"
                    >
                      <span>Schedule 1:1</span>
                      <ExternalLink className="w-3 h-3 text-slate-600" />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* ----------------------------------------------------------------- */}
            {/* RIGHT: THE SUITED DEVELOPER CHARACTER                            */}
            {/* ----------------------------------------------------------------- */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`char-${activeDev.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative flex flex-col items-center max-w-sm w-full"
                >
                  {/* Character Image Frame */}
                  <div className="relative w-full rounded-3xl overflow-hidden border border-slate-300 bg-white shadow-2xl p-2">
                    <img
                      src={activeDev.characterImg}
                      alt={activeDev.role}
                      className="w-full h-[400px] sm:h-[440px] object-cover object-top rounded-2xl"
                    />

                    {/* Telemetry Status Bar */}
                    <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs font-mono text-slate-800 shadow-md">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-sky-600" />
                        <span className="font-bold">{activeDev.postureTitle}</span>
                      </div>
                      <span className="text-emerald-600 font-bold">🟢 Available</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Developer</span>
            </button>

            <span className="font-bold text-slate-900">
              {activeIndex + 1} / {developers.length}
            </span>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all shadow-sm"
            >
              <span>Next Developer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
