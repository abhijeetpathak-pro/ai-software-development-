// src/app/services/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { stacksByCategory } from '@/data/stacks';
import { clientCaseStudies, ClientCaseStudy } from '@/data/caseStudies';
import { 
  Code2, 
  Users, 
  Rocket, 
  Cpu, 
  Cloud, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  GitMerge, 
  Terminal, 
  Check, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  Award,
  Trophy,
  TrendingUp,
  MessageSquare,
  Globe,
  X
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const coreServices = [
  {
    icon: Code2,
    badge: 'NEXT.JS & FULL-STACK',
    title: 'Custom Web Application Engineering',
    desc: 'High-concurrency web applications, distributed APIs, and multi-tenant SaaS platforms built for low-latency performance, high availability, and frictionless user experiences.',
    deliverables: ['Next.js 15 App Router Architecture', 'Node.js & Python FastAPI Microservices', 'PostgreSQL & Redis Caching'],
    href: '/services/web-development/'
  },
  {
    icon: Palette,
    badge: 'PRODUCT DESIGN',
    title: 'UI/UX Design & Design Systems',
    desc: 'Data-backed UX wireframing, high-converting design systems, and clickable Figma prototypes engineered with exact developer tokens for zero-guesswork handoffs.',
    deliverables: ['Figma Atomic Component Libraries', 'User Journey & Empathy Mapping', 'Interactive Prototyping & Usability Audits'],
    href: '/services/design/'
  },
  {
    icon: Rocket,
    badge: 'MOBILE ENGINEERING',
    title: 'Native iOS & Android App Development',
    desc: 'Native mobile engineering utilizing Swift (iOS) and Kotlin (Android) — designed for 120Hz smooth transitions, hardware integrations, and 5-star App Store launches.',
    deliverables: ['SwiftUI & Swift 6 Native Architecture', 'Kotlin & Jetpack Compose Android Apps', 'Offline-First SQLite / Room Sync'],
    href: '/services/app-development/'
  },
  {
    icon: Layers,
    badge: 'CROSS-PLATFORM',
    title: 'Cross-Platform Mobile (React Native & Flutter)',
    desc: 'Ship on iOS and Android simultaneously from one unified codebase, reducing development timeline and maintenance overhead compared to maintaining two separate native codebases without compromising on feel.',
    deliverables: ['React Native & Expo EAS Cloud Builds', 'Flutter & Impeller Graphics Engine', 'Over-The-Air (OTA) Instant Live Updates'],
    href: '/services/cross-platform-app-development/'
  },
  {
    icon: Cpu,
    badge: 'AI & AUTOMATION',
    title: 'Enterprise AI, LLM & RAG Systems',
    desc: 'Production-ready Retrieval-Augmented Generation (RAG), autonomous AI agent workflows, and fine-tuned models integrated securely with enterprise data.',
    deliverables: ['Vector Embeddings & Pinecone/Qdrant Search', 'LangChain / LlamaIndex AI Pipelines', 'Enterprise Document Copilots & RPA'],
    href: '/contact/'
  },
  {
    icon: Cloud,
    badge: 'DEVOPS & SRE',
    title: 'Cloud DevOps & Kubernetes Orchestration',
    desc: 'Automated Infrastructure as Code (Terraform), Kubernetes cluster orchestration, and automated zero-downtime CI/CD rolling deployments on AWS/GCP.',
    deliverables: ['SLA-Backed Uptime Monitoring', 'Multi-Region High Availability', 'Automated Blue/Green CI/CD Pipelines'],
    href: '/contact/'
  }
];

const deliveryProcess = [
  {
    step: '01',
    title: 'Architecture Discovery & Feasibility',
    desc: 'Our Principal Architect and CTO analyze your technical specs, data schemas, scaling projections, and milestone deliverables.',
    duration: 'Sprint 0'
  },
  {
    step: '02',
    title: 'Sprint Zero & Environment Setup',
    desc: 'We provision staging sandboxes, configure automated GitHub Actions pipelines, and align on coding conventions and Git branches.',
    duration: 'Sprint 0'
  },
  {
    step: '03',
    title: 'Continuous Bi-Weekly Agile Sprints',
    desc: 'High-velocity feature delivery with pair-coding, unit test coverage requirements, and bi-weekly production-ready demos.',
    duration: 'Bi-Weekly Sprints'
  },
  {
    step: '04',
    title: 'Performance & Security Hardening',
    desc: 'Automated stress testing, Core Web Vitals optimization, and automated vulnerability scanning before major releases.',
    duration: 'Pre-Rollout'
  },
  {
    step: '05',
    title: 'Production Deployment & 24/7 SLA',
    desc: 'Zero-downtime canary rollout with real-time telemetry, error monitoring, and dedicated on-call SLA support.',
    duration: 'Ongoing Support'
  }
];

const hubBenefits = [
  {
    title: 'Trial Sprint',
    badge: 'ZERO RISK',
    desc: 'Evaluate matched senior engineers on your active sprint backlog for 15 days. Pay only when completely satisfied.'
  },
  {
    title: 'Client Code & IP Rights',
    badge: 'FULL OWNERSHIP',
    desc: 'All git commits, documentation, architectures, and proprietary algorithms belong exclusively to you from day one.'
  },
  {
    title: 'Fast Scoping Turnaround',
    badge: 'RAPID TURNAROUND',
    desc: 'Our Chief Technology Officer reviews your requirements and provides a formal technical breakdown within 24 to 48 hours.'
  },
  {
    title: 'Overlapping Working Hours',
    badge: '4-8 HOURS DAILY',
    desc: 'Our squads work overlapping hours with US (EST/PST), UK/Europe (GMT/CET), and GCC (GST) business hours.'
  },
  {
    title: 'Pre-Vetted Senior Engineers',
    badge: 'VETTED TALENT',
    desc: 'Engineers tested through rigorous algorithmic, system design, and communication benchmarks.'
  },
  {
    title: 'Enterprise Security & NDA',
    badge: 'MUTUAL NDA',
    desc: 'Comprehensive bilateral confidentiality agreements signed before receiving proprietary blueprints or repositories.'
  }
];

const hubFaqs = [
  {
    q: 'How does billing work for dedicated engineering squads vs staff augmentation?',
    a: 'Staff augmentation is billed on transparent monthly or hourly rates based on the seniority and specialization of each engineer. Dedicated squads are billed on monthly sprint retainers with agreed milestone deliverables. All engagements include itemized timesheets and zero hidden agency overhead.'
  },
  {
    q: 'How quickly can we ramp up or ramp down team capacity?',
    a: 'We offer unmatched agility. You can add specialized engineers within 48 to 72 hours. Scaling down or pausing requires a standard 15-day notice window with zero cancellation penalties.'
  },
  {
    q: 'Who owns the intellectual property and source code?',
    a: 'Intellectual property, git commits, documentation, architectures and algorithms created during the engagement belong to your company under the terms of the signed contract.'
  },
  {
    q: 'How do you approach code quality and test coverage?',
    a: 'We enforce strict automated CI/CD pipelines with unit test coverage requirements, SonarQube static code analysis, peer PR reviews by Principal Architects, and SOC2 compliant secrets management.'
  },
  {
    q: 'Can we test developers before committing to a contract?',
    a: 'We offer a 7-day trial sprint so you can evaluate matched engineers on your active sprint backlog before committing to a longer engagement.'
  }
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ClientCaseStudy | null>(null);

  const toggleFaq = (index: number) => {
    soundFx.playChirp();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-red-50/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">
          
          {/* Eyebrow */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                ENGINEERING SERVICES &amp; SQUAD AUGMENTATION
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-left sm:text-right"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-[#E31E24] uppercase">
                [FULL-LIFECYCLE SOFTWARE DELIVERY]
              </span>
              <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
                24+ SPECIALIZED TECH STACKS • 15-DAY SPRINT TRIAL
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                  <span className="sr-only">Software Development Services for Growing Businesses — </span>FULL-LIFECYCLE SOFTWARE & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                    TALENT AUGMENTATION.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                From end-to-end custom software architecture to embedding senior engineers into your sprint backlog, engagements can start with a trial sprint on live codebase tickets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact/"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-[#E31E24]"
                >
                  <Clock className="w-4 h-4 text-[#E31E24]" />
                  <span>Book 30-Min Discovery Call</span>
                </a>
              </motion.div>
            </div>

            {/* Pillar Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100">
                  <Sparkles className="w-4 h-4" />
                  <span>Delivery Commitments</span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Onboarding Speed</span>
                    <span className="text-sm font-bold text-slate-900">&lt; 48 Hours</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Sprint Trial</span>
                    <span className="text-sm font-bold text-[#E31E24]">Trial Sprint Available</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Code Copyright</span>
                    <span className="text-sm font-bold text-emerald-600">Client-Owned Code</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                  <span>Direct Git Commits to Your Repositories</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">6 Core</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Service Lines</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">24+</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Technology Stacks</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">99.4%</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Sprint SLA Adherence</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">48h</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Talent Placement Speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-3.5 py-1 rounded-full border border-red-200 uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5" />
                <span>ENGINEERING PHILOSOPHY &amp; SQUAD CULTURE</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 uppercase font-display leading-tight">
                Engineering Built for Velocity, Security &amp; Concurrency
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                We do not believe in bloated agency overhead or theoretical slide decks. At WitQualis, our engineering model is built on autonomous, cross-functional squads that work directly within your Git repos, Slack channels, and Jira boards.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Whether you need a dedicated frontend squad on Next.js 15, native mobile developers for iOS/Android, cloud DevOps orchestration on Kubernetes, or custom AI vector search pipelines, we provide pre-vetted engineers matched to your exact stack version.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <h3 className="text-sm font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Our 3 Core Operating Models</span>
                </h3>

                <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-mono">Dedicated Engineering Pods:</strong>
                      <p className="text-slate-500 text-xs">Self-managed pods (Tech Lead, Full-Stack, QA, DevOps) owning feature velocity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-mono">Staff Augmentation:</strong>
                      <p className="text-slate-500 text-xs">Pre-vetted individual developers embedded under your in-house engineering management.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-mono">Fixed-Milestone SOWs:</strong>
                      <p className="text-slate-500 text-xs">Defined scope, pricing, and timeline for turnkey product builds, agreed before kickoff.</p>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Trial Sprint Available</span>
                  <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES / FEATURES SECTION                                            */}
      {/* ========================================================================= */}
      <section id="service-offerings" className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              SERVICES &amp; FEATURES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                WHAT WE DELIVER
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
              Explore our core technical practices. Click any service card to view specialized architecture details and case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 border border-red-100">
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-3 group-hover:text-[#E31E24] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {s.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-200/80 font-mono text-[11px] text-slate-700">
                      {s.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={s.href}
                    onClick={() => soundFx.playClick()}
                    className="mt-6 w-full py-3 px-4 rounded-xl bg-white hover:bg-[#E31E24] hover:text-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-200 group-hover:border-transparent"
                  >
                    <span>View Service Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROCESS SECTION                                                        */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <GitMerge className="w-3.5 h-3.5" />
              <span>DELIVERY LIFECYCLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              HOW WE EXECUTE &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                SCALE SPRINT VELOCITY
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
              Transparent, milestone-based execution with continuous bi-weekly sprint deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliveryProcess.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-[#E31E24] transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-black uppercase text-slate-950 font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-bold">
                  <Check className="w-3.5 h-3.5" />
                  <span>SLA Verified</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGIES SECTION (24+ TECH STACKS)                                  */}
      {/* ========================================================================= */}
      <section id="stack-directory" className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>HIRE BY SPECIALIZATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-slate-950 font-display">
                ALL 24+ DEVELOPER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                  TECHNICAL STACKS
                </span>
              </h2>
            </div>

            <div className="md:text-right max-w-sm">
              <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
                Click any specialization to review experience benchmarks, rates, and candidate availability.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stacksByCategory.map(({ category, stacks }) => (
              <div key={category} className="p-6 rounded-3xl border border-slate-200 bg-slate-50/70 shadow-sm hover:bg-white hover:border-[#E31E24]/40 transition-all">
                <p className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-widest border-b border-slate-200 pb-3 mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {stacks.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/hire/${s.slug}/`}
                        onClick={() => soundFx.playClick()}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-red-50 border border-slate-200 hover:border-red-300 text-xs font-mono text-slate-800 font-bold transition-all group"
                      >
                        <span>Hire {s.name} Devs</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E31E24] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BENEFITS SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>THE WITQUALIS ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              BENEFITS &amp; ASSURANCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                WHY WORK WITH US
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
              Direct communication and experienced senior engineering talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hubBenefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase px-3 py-1 rounded-full bg-red-50 border border-red-100">
                      {b.badge}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24]" />
                  <span>SLA Terms Defined In Contract</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CASE STUDIES SECTION (AUTHENTIC CLIENT CASE STUDIES)                   */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>PROVEN CLIENT RESULTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              CASE STUDIES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                REAL-WORLD IMPACT
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
              Explore how WitQualis solved critical engineering bottlenecks and accelerated product delivery for global enterprise clients. Click any card to view full details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCaseStudies.map((cs) => (
              <div
                key={cs.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCaseStudy(cs);
                }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-[#E31E24]/50 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E31E24] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      {cs.caseNumber}
                    </span>
                    {cs.logo && (
                      <div className="h-8 w-auto flex items-center">
                        <Image src={cs.logo} alt={cs.client} width={90} height={32} className="h-7 w-auto object-contain" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950 font-display group-hover:text-[#E31E24] transition-colors">
                      {cs.client}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{cs.industry}</p>
                  </div>

                  <p className="text-xs font-medium italic text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                    &ldquo;{cs.tagline}&rdquo;
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {cs.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Key Highlights:</p>
                    {cs.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-[#E31E24] font-bold">•</span>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E31E24] group-hover:underline inline-flex items-center gap-1.5">
                    View Full Case Study &rarr;
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#E31E24] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-2 pr-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E31E24] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
                  {selectedCaseStudy.caseNumber}
                </span>

                <div className="flex items-center gap-4 pt-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
                    {selectedCaseStudy.client}
                  </h3>
                  {selectedCaseStudy.logo && (
                    <Image src={selectedCaseStudy.logo} alt={selectedCaseStudy.client} width={100} height={36} className="h-8 w-auto object-contain" />
                  )}
                </div>

                <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                  {selectedCaseStudy.industry}
                </p>
              </div>

              {/* Tagline */}
              <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 text-rose-800 italic text-sm font-semibold">
                &ldquo;{selectedCaseStudy.tagline}&rdquo;
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                <p>{selectedCaseStudy.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  KEY HIGHLIGHTS
                </h4>
                <ul className="space-y-2.5">
                  {selectedCaseStudy.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#E31E24] mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              <p className="text-[10px] text-slate-400 italic">
                Client names and descriptions reflect information provided by Witqualis. No metrics, ratings, or outcomes beyond what is stated above are implied or claimed.
              </p>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/contact/"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                >
                  <span>Start Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Clock className="w-4 h-4 text-[#E31E24]" />
                  <span>Book Discovery Call</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>SERVICES &amp; SPRINT FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              COMMERCIAL &amp; SPRINT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                DELIVERY QUESTIONS
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal">
              Clear answers about our billing models, trial sprint, IP ownership, and code quality practices.
            </p>
          </div>

          <div className="space-y-4">
            {hubFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#E31E24]/50 bg-white shadow-xl ring-1 ring-[#E31E24]/20' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <span className={`text-base sm:text-lg font-bold font-sans ${isOpen ? 'text-[#E31E24]' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                        isOpen ? 'bg-[#E31E24] text-white rotate-180 shadow-md' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA SECTION                                                      */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-black text-white overflow-hidden selection:bg-red-500/30">
        <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#E31E24]" />
              <span>CUSTOM ENTERPRISE SOW &amp; DEDICATED SQUADS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
              NEED A CUSTOM ARCHITECTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                OR SQUAD SCOPE?
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Tell us your sprint milestones and technical requirements. Our CTO will prepare a detailed architecture proposal and assemble candidates in under 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 hover:scale-105"
              >
                <span>Initiate Project Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://calendly.com/witqualis_services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
              >
                <Clock className="w-4 h-4 text-red-400" />
                <span>Schedule 30-Min Discovery</span>
              </a>

              <a
                href="https://wa.me/919289633637"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Solutions Lead</span>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Mutual NDA</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>&lt; 24h Scoping Turnaround</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div>
                <span>Trial Sprint Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
