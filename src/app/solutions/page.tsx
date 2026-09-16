// src/app/solutions/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { solutions } from '@/data/services';
import { 
  Cpu, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, 
  Cloud, Building2, Brain, Database, Bot, Lock, Check, HelpCircle, 
  ChevronDown, Server, Network, Terminal
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const solutionIcons: Record<string, any> = {
  'ai-development': Brain,
  'generative-ai-solutions': Bot,
  'ai-consulting': Sparkles,
  'machine-learning-development': Cpu,
  'cloud-solutions': Cloud,
  'enterprise-software': Building2
};

const industryUseCases = [
  {
    industry: 'Automotive & Mobility Intelligence',
    client: 'Production Deployment: CarDekho / GirnarSoft',
    problem: 'Manual inspection bottlenecks and subjective vehicle condition appraisals.',
    solution: 'Engineered a real-time computer vision AI pipeline processing 40+ inspection points in under 3 seconds with automated pricing matrix synchronization.',
    metrics: ['88% Reduction in Appraisal Time', '99.2% Pricing Accuracy', 'Sub-second API Latency']
  },
  {
    industry: 'High-Concurrency E-Commerce & Gifting',
    client: 'Production Deployment: Bakingo & FlowerAura',
    problem: 'Peak flash-sale traffic spikes causing database contention and delayed delivery routing.',
    solution: 'Designed an event-driven microservices architecture on AWS with automated route dispatch algorithms for multi-city delivery operations.',
    metrics: ['229+ Cities (FlowerAura)', '6 Cities (Bakingo)', 'FSSAI-Certified Operations']
  },
  {
    industry: 'Fintech Ledgers & Multi-Currency Payouts',
    client: 'Production Deployment: Global Payout Platform',
    problem: 'Cross-border payout reconciliation errors and slow banking gateway fallbacks.',
    solution: 'Architected an immutable double-entry ledger with automated banking failovers and real-time webhook audit logging.',
    metrics: ['Double-Entry Ledger', 'Automated Failover', 'Instant Settlement Routing']
  },
  {
    industry: 'Enterprise SaaS & Autonomous AI Agents',
    client: 'Production Deployment: Sutherland Global Solutions',
    problem: 'High-volume unstructured document intake and manual data extraction delays.',
    solution: 'Implemented a private RAG pipeline with vector indexing and specialized LLM agents for automated document extraction and CRM ingestion.',
    metrics: ['92% Automated Processing Rate', '< 85ms Vector Query Latency', 'Zero Data Leakage via Private VPC']
  }
];

const securityStandards = [
  {
    icon: Lock,
    title: 'Private VPC LLM Isolation',
    desc: 'All embedding models and vector databases are deployed inside your dedicated VPC. Your proprietary training data never touches public third-party APIs.'
  },
  {
    icon: Server,
    title: 'SOC2 & HIPAA Ready Architecture',
    desc: 'End-to-end data encryption at rest (AES-256) and in transit (TLS 1.3) with automated audit logging and role-based access control (RBAC).'
  },
  {
    icon: Network,
    title: 'Zero-Downtime Microservices',
    desc: 'Kubernetes multi-region failover with automated canary rollouts and sub-second health-check telemetry.'
  },
  {
    icon: Terminal,
    title: 'Strict Automated QA & Guardrails',
    desc: 'Rigorous LLM output validation guardrails preventing hallucinations, toxic outputs, and model drift in live environments.'
  }
];

const solutionFaqs = [
  {
    q: 'How do you ensure our enterprise data remains confidential when building AI solutions?',
    a: 'We deploy private, self-hosted LLMs or private enterprise cloud endpoints inside your own dedicated cloud VPC, with data boundaries configured so client inputs are not used for external model training. See witqualis.com or contact us for current compliance and certification details.'
  },
  {
    q: 'What is the typical timeline for an enterprise AI or cloud modernization solution?',
    a: 'Timelines depend on scope and data readiness. Engagements typically begin with a feasibility and data-readiness assessment before a delivery timeline is scoped.'
  },
  {
    q: 'Can your solutions integrate with our existing legacy ERP and database systems?',
    a: 'We build integration patterns such as REST and gRPC API adapters, event streams (Kafka/RabbitMQ), and change-data-capture pipelines to connect with legacy backends without disrupting core operations.'
  },
  {
    q: 'Do you provide ongoing support and maintenance after project deployment?',
    a: 'We offer post-deployment monitoring, latency tracking and model retraining support.'
  },
  {
    q: 'What kinds of solutions does Witqualis build beyond AI?',
    a: 'Alongside AI and machine learning, Witqualis builds enterprise software and cloud and digital-transformation solutions. See the solution areas above for details.'
  },
  {
    q: 'How do I know which solution is right for my business?',
    a: 'Solutions are scoped around your specific business problem, technical constraints and delivery timeline. Contact Witqualis to discuss your requirement and get a recommended approach.'
  }
];

export default function SolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    soundFx.playChirp();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* SECTION 1: KINETIC HERO SECTION & ARCHITECTURE TELEMETRY                  */}
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
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                ENTERPRISE SOLUTIONS & APPLIED AI
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-left sm:text-right"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
                [HIGH-CONCURRENCY ARCHITECTURES]
              </span>
              <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
                PRODUCTION-GRADE • ENTERPRISE SECURITY
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
                  <span className="sr-only">Custom Software Solutions for Complex Business Needs — </span>MISSION-CRITICAL AI & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                    ENTERPRISE SOLUTIONS.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                From production AI pipelines grounded in proprietary enterprise data to multi-cloud modernization, our engineering solutions are scoped around tangible outcomes, not generic SaaS demos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#solutions-grid"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
                >
                  <span>Explore 6 Enterprise Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/portfolio/"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-red-500"
                >
                  <Layers className="w-4 h-4 text-red-600" />
                  <span>View Case Studies</span>
                </Link>
              </motion.div>
            </div>

            {/* Quick Solution Telemetry Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider pb-3 border-b border-slate-100">
                  <Sparkles className="w-4 h-4" />
                  <span>Architecture Approach</span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Vector Retrieval Latency</span>
                    <span className="text-sm font-bold text-slate-900">&lt; 85ms</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">System Uptime SLA</span>
                    <span className="text-sm font-bold text-emerald-600">Per Engagement Contract</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Security Framework</span>
                    <span className="text-sm font-bold text-red-600">SOC2 & HIPAA</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Zero Data Leakage with Private LLM Deployments</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">6</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Enterprise Solutions</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">&lt; 85ms</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Sub-Second Vector Search</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">150+</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Production Deployments</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">100%</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Private Code Ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 6 ENTERPRISE SOLUTION DOMAINS GRID                             */}
      {/* ========================================================================= */}
      <section id="solutions-grid" className="relative py-28 bg-[#fafafa] border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              SCALABLE ENTERPRISE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                SOLUTION DOMAINS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => {
              const Icon = solutionIcons[s.slug] || Cpu;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-red-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      {s.isAI && (
                        <span className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 border border-red-200">
                          AI ARCHITECTURE
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-red-600 transition-colors">
                      {s.name}
                    </h3>

                    <p className="text-xs text-red-600 font-mono font-bold uppercase mb-4">
                      {s.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {s.summary}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-700">
                      {s.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/solutions/${s.slug}/`}
                    onClick={() => soundFx.playClick()}
                    className="mt-6 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Inspect Architecture Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2B: HOW WE SCOPE AND DELIVER SOLUTIONS — ENGAGEMENT COMPARISON     */}
      {/* ========================================================================= */}
      <section id="engagement-comparison" className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>ENGAGEMENT MODELS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              HOW WE SCOPE AND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                DELIVER SOLUTIONS
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              A custom solution can be delivered a few different ways, depending on how much of the work you want to own versus hand off. Here is how the three common models compare.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-wider text-slate-500">Model</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-wider text-slate-500">Who Directs The Work</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-wider text-slate-500">Best For</th>
                  <th className="px-5 py-4 font-mono text-xs uppercase tracking-wider text-slate-500">Code &amp; IP Ownership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">Full-Scope Solution Delivery</td>
                  <td className="px-5 py-4 text-slate-600">Witqualis owns delivery of a defined scope end-to-end</td>
                  <td className="px-5 py-4 text-slate-600">Businesses without an in-house engineering team, or a well-defined project outside current team capacity</td>
                  <td className="px-5 py-4 text-slate-600">Transfers to the client under the signed contract</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-5 py-4 font-bold text-slate-900">Staff Augmentation</td>
                  <td className="px-5 py-4 text-slate-600">Your team directs day-to-day work; developers join your sprints</td>
                  <td className="px-5 py-4 text-slate-600">Teams that need to scale capacity quickly without changing how they already work</td>
                  <td className="px-5 py-4 text-slate-600">Transfers to the client under the signed contract</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-900">Technical Consulting</td>
                  <td className="px-5 py-4 text-slate-600">Witqualis advises; your team (or another vendor) implements</td>
                  <td className="px-5 py-4 text-slate-600">Architecture reviews, technology selection, or a second opinion before a major build</td>
                  <td className="px-5 py-4 text-slate-600">N/A — advisory engagement, no code delivered</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-slate-500 text-center max-w-2xl mx-auto">
            Most solution engagements combine elements of these models — for example, a full-scope build followed by ongoing staff augmentation for maintenance. <Link href="/contact/" className="text-red-600 font-semibold hover:underline">Talk to us</Link> about which fits your situation.
          </p>
        </div>
      </section>


      <section className="relative py-28 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>FIELD-TESTED CASE POINTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              MISSION-CRITICAL INDUSTRY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                PRODUCTION DEPLOYMENTS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryUseCases.map((uc, i) => (
              <motion.div
                key={uc.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-8 rounded-3xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider block mb-1">
                    {uc.industry}
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-950 font-display mb-3">
                    {uc.client}
                  </h3>

                  <div className="space-y-3 mb-6 font-sans text-xs sm:text-sm">
                    <p className="text-slate-600">
                      <strong className="text-slate-900 font-mono text-xs uppercase block">The Challenge:</strong>
                      {uc.problem}
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-slate-900 font-mono text-xs uppercase block">WitQualis Architecture:</strong>
                      {uc.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
                  {uc.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[10px] font-mono font-bold shadow-inner"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: SECURITY, ISOLATION & PRIVATE VPC STANDARDS                     */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DATA GOVERNANCE & ISOLATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              PRIVATE ENTERPRISE SECURITY & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                COMPLIANCE FRAMEWORKS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStandards.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="p-6 rounded-3xl border border-slate-200 bg-white hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black uppercase text-slate-950 font-display mb-2 group-hover:text-red-600 transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {sec.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-bold uppercase">
                    <Check className="w-3.5 h-3.5" />
                    <span>Zero Data Leakage</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ENTERPRISE SOLUTIONS FAQ ACCORDION                              */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>SOLUTIONS & AI FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              TECHNICAL ARCHITECTURE & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                DEPLOYMENT QUESTIONS
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {solutionFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-red-500/40 bg-white shadow-lg' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-sm sm:text-base font-bold font-mono ${isOpen ? 'text-red-600' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
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
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4"
                      >
                        {faq.a}
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
      {/* SECTION 6: HIGH-CONVERSION ARCHITECTURE BLUEPRINT CTA                     */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa]">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM ARCHITECTURAL BLUEPRINT</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 font-display">
              HAVE A SPECIFIC SYSTEM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                OR DATA CHALLENGE?
              </span>
            </h2>

            <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Schedule a 30-minute discovery call with our Chief Technology Officer to map architecture feasibility and sprint milestones.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                onClick={() => soundFx.playClick()}
                className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
              >
                <span>Initiate Solution Scoping</span>
              </Link>

              <a
                href="https://calendly.com/witqualis_services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-6 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all border border-slate-300"
              >
                <span>Schedule 30-Min Discovery</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
