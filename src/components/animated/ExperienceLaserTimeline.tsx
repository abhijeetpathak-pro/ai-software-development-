// src/components/animated/ExperienceLaserTimeline.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Calendar, CheckCircle2, ChevronDown, Award, Sparkles, Globe, Cpu, Rocket } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  category: string;
  location: string;
  achievements: string[];
  deliverables: string[];
  impact: string;
  technologies: string[];
}

const companyMilestones: MilestoneItem[] = [
  {
    id: 'witqualis-2024',
    year: '2024 — Present',
    title: 'Enterprise AI & Global Dedicated Developer Squads',
    category: 'INTELLIGENT SCALING',
    location: 'India • UAE • USA • Australia • Canada',
    achievements: [
      'Delivered 250+ enterprise production deployments across generative AI, web, mobile, and cloud.',
      'Launched a dedicated developer staffing model with pre-vetted talent and a trial sprint option.',
      'Architected multi-agent LLM systems and autonomous RAG platforms processing 150k+ daily queries.',
    ],
    deliverables: [
      'Enterprise LLM evaluation frameworks (Ragas, TruLens, LangGraph).',
      'High-throughput distributed cloud architectures with Next.js 15, FastAPI, and Kubernetes.',
    ],
    impact: 'Empowered 120+ international clients to accelerate product roadmaps by 3.5x with 99.9% production reliability.',
    technologies: ['Generative AI', 'Next.js 15', 'Python', 'Kubernetes', 'FastAPI', 'PostgreSQL', 'LangGraph'],
  },
  {
    id: 'witqualis-2023',
    year: '2023 — 2024',
    title: 'Generative AI Labs & Autonomous Agent Architectures',
    category: 'APPLIED AI INNOVATION',
    location: 'Global Delivery Center',
    achievements: [
      'Pioneered private enterprise RAG pipelines with air-gapped local model fallbacks (Ollama/vLLM).',
      'Integrated real-time vector embeddings and BM25 hybrid search across multi-terabyte datasets.',
      'Built custom fine-tuning and computer vision pipelines for industrial automated inspection.',
    ],
    deliverables: [
      'Sub-50ms vector search latency on ChromaDB and Pinecone.',
      'Zero-data-leakage enterprise security architectures with TLS 1.3 encryption.',
    ],
    impact: 'AI & Vector Search',
    technologies: ['PyTorch', 'LangChain', 'ChromaDB', 'FastAPI', 'Docker', 'TensorRT', 'OpenCV'],
  },
  {
    id: 'witqualis-2022',
    year: '2022 — 2023',
    title: 'Multi-Region Global Expansion & 100+ Enterprise Clients',
    category: 'GLOBAL REACH',
    location: 'Dubai (UAE) • Sydney (AU) • New York (USA) • Toronto (CA)',
    achievements: [
      'Established international client consultation and engagement hubs across 5 countries.',
      'Scaled engineering workforce to 150+ full-stack and cloud DevOps specialists.',
      'Delivered high-concurrency fintech ledgers, IoT stream processing, and e-commerce platforms.',
    ],
    deliverables: [
      'Event-driven async microservices handling 40k+ daily transactions.',
      'Multi-region AWS / GCP cloud topology with zero-downtime automated CI/CD.',
    ],
    impact: 'Cloud & Microservices',
    technologies: ['AWS Cloud', 'Google Cloud', 'Docker', 'PostgreSQL', 'Redis', 'Kafka', 'React'],
  },
  {
    id: 'witqualis-2021',
    year: '2021 — 2022',
    title: 'Cloud-Native Engineering & Microservice Architecture',
    category: 'INFRASTRUCTURE EXCELLENCE',
    location: 'Faridabad (HQ) & Remote Engineering Force',
    achievements: [
      'Transitioned legacy monolithic client applications to modern micro-frontend and serverless backends.',
      'Implemented automated continuous integration, testing pipelines, and Dockerized deployments.',
      'Partnered with high-growth tech startups in North America and Southeast Asia.',
    ],
    deliverables: [
      'Sub-second cold starts with Next.js Server Components and Edge Middleware.',
      'ACID-compliant PostgreSQL clustering with Redis caching layer.',
    ],
    impact: 'Web Performance',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
  },
  {
    id: 'witqualis-2020',
    year: '2020 — 2021',
    title: 'Foundation & Inception of WitQualis Technologies',
    category: 'FOUNDATIONAL MILESTONE',
    location: 'Faridabad, India',
    achievements: [
      'Founded with a mission to deliver world-class bespoke software engineering and creative digital craftsmanship.',
      'Onboarded the initial core engineering squad of senior full-stack architects and UI/UX designers.',
      'Delivered early commercial web and mobile applications.',
    ],
    deliverables: [
      'Standardized an agile sprint delivery framework with a trial sprint option.',
      'Proprietary component libraries and high-speed delivery boilerplates.',
    ],
    impact: 'Established a 5-star Google review reputation and laid the technological foundation for global scale.',
    technologies: ['React', 'Node.js', 'Python', 'MySQL', 'Express', 'JavaScript', 'AWS'],
  },
];

export default function ExperienceLaserTimeline() {
  const [expandedId, setExpandedId] = useState<string>(companyMilestones[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  // Real-time Scroll-drawn Laser interpolation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 75%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const laserHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const laserOpacity = useTransform(smoothProgress, [0, 0.05], [0.3, 1]);

  const toggleExpand = (id: string) => {
    soundFx.playClick();
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full selection:bg-primary/20"
    >
      {/* Section Header with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-3 mb-16"
      >
        <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-sky-400" />
          VOLUME III: WITQUALIS COMPANY EVOLUTION (FOUNDED 2020)
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Engineering{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">
            Journey &amp; Milestones
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          // SCROLL TO DRAW LASER TELEMETRY &amp; UNLOCK COMPANY ARCHIVES SINCE 2020
        </p>
      </motion.div>

      {/* Laser Timeline Track */}
      <div className="relative pl-6 sm:pl-10">
        {/* Background Guide Rail */}
        <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-border/40 rounded-full" />

        {/* Real-Time Scroll-Drawn Laser Beam */}
        <motion.div
          style={{ height: laserHeight, opacity: laserOpacity }}
          className="absolute left-[7px] sm:left-[11px] top-4 w-[2px] bg-gradient-to-b from-sky-400 via-indigo-500 to-emerald-400 shadow-[0_0_16px_rgba(56,189,248,0.9)] rounded-full origin-top z-10"
        >
          {/* Laser Head Leading Particle */}
          <div className="absolute -left-[3px] bottom-0 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,1)] animate-ping" />
        </motion.div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-10">
          {companyMilestones.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Glowing Laser Node */}
                <div
                  className={`absolute -left-[30px] sm:-left-[38px] top-6 w-5 h-5 rounded-full border-2 bg-background flex items-center justify-center transition-all duration-500 z-20 ${
                    isExpanded
                      ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,1)] scale-125'
                      : 'border-muted-foreground/40 group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.6)]'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isExpanded
                        ? 'bg-sky-400 scale-125 shadow-[0_0_8px_rgba(56,189,248,1)]'
                        : 'bg-muted-foreground/40 group-hover:bg-sky-400'
                    }`}
                  />
                </div>

                {/* Experience Card with 3D Float */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`rounded-3xl p-6 sm:p-8 border backdrop-blur-xl transition-all duration-300 cursor-pointer select-none group/card ${
                    isExpanded
                      ? 'bg-card/90 border-sky-500/50 shadow-2xl shadow-sky-500/10 scale-[1.01]'
                      : 'bg-card/40 border-border/50 hover:bg-card/70 hover:border-sky-400/40 hover:shadow-lg'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover/card:text-primary transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />
                        <span>{item.category}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{item.location}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold border border-primary/25">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-sky-400' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Details with Smooth Spring Animation */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="mt-6 pt-6 border-t border-border/40 flex flex-col gap-5"
                    >
                      {/* Key Achievements */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          // KEY ORGANIZATIONAL ACHIEVEMENTS
                        </span>
                        <div className="flex flex-col gap-2">
                          {item.achievements.map((ach, ai) => (
                            <div key={ai} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Measurable Impact Banner */}
                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                        <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                            Enterprise Impact &amp; Metrics
                          </span>
                          <p className="text-xs sm:text-sm font-medium text-emerald-300/90 mt-0.5">
                            {item.impact}
                          </p>
                        </div>
                      </div>

                      {/* Stack Used */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.technologies.map((t, tidx) => (
                          <span
                            key={tidx}
                            className="px-2.5 py-0.5 rounded-md bg-muted/60 text-[10px] font-mono font-medium text-foreground/80 border border-border/40 hover:border-primary/40 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
