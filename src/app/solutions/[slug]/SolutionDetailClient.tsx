// src/app/solutions/[slug]/SolutionDetailClient.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ChevronDown, 
  Zap, 
  Lock, 
  Terminal,
  AlertTriangle,
  Server,
  Activity,
  Award,
  Database,
  Bot,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sliders,
  Play
} from 'lucide-react';
import { SolutionItem } from '@/data/services';
import { soundFx } from '@/lib/AudioEngine';

interface Props {
  solution: SolutionItem;
  relatedSolutions: { slug: string; name: string; isAI?: boolean }[];
}

export default function SolutionDetailClient({ solution, relatedSolutions }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [simulatedPromptIndex, setSimulatedPromptIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    soundFx.playChirp();
    setOpenFaq(openFaq === index ? null : index);
  };

  const samplePrompts = [
    {
      query: "Execute semantic retrieval across enterprise claims repo (10M vectors)",
      response: "Retrieved 8 contextual chunks via Qdrant Hybrid Search in 38ms. Guardrail confidence: 99.8%. Hallucination score: 0.00%.",
      latency: "38ms",
      tokens: "1,420 t/s",
      guardrail: "PASSED (SOC2)",
    },
    {
      query: "Extract tabular financial data & PII redaction from 40-page lease contract",
      response: "Extracted 14 structured tables into Pydantic schema. 0 parsing errors. Redacted 12 SSN/Account numbers on-the-fly.",
      latency: "44ms",
      tokens: "1,850 t/s",
      guardrail: "PASSED (HIPAA)",
    },
    {
      query: "Autonomous multi-agent task: Reconcile banking payouts against ERP ledger",
      response: "Matched 5,420 ledger lines. Triggered 3 automated webhooks. Zero discrepancies. Audit log written to KMS encrypted storage.",
      latency: "52ms",
      tokens: "1,200 t/s",
      guardrail: "PASSED (AES-256)",
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white border-b border-slate-200">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-red-50/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">
          
          {/* Top Bar: Breadcrumb + Trial Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/solutions/" className="hover:text-red-600 transition-colors">Solutions</Link>
              <span>/</span>
              <span className="text-[#E31E24] font-bold">{solution.name}</span>
            </nav>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse" />
              <span>TRIAL SPRINT AVAILABLE</span>
            </div>
          </div>

          {/* Central Headline & Live Telemetry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">
            
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{solution.heroBadge || (solution.isAI ? 'ENTERPRISE AI ARCHITECTURE' : 'ENTERPRISE SOLUTION')}</span>
                </span>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                  {solution.name} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                    ENGINEERED TO SCALE.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                {solution.summary}
              </motion.p>

              {/* Action Buttons */}
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
                  <span>Initiate Solution Scoping</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-red-500"
                >
                  <Clock className="w-4 h-4 text-[#E31E24]" />
                  <span>Book 30-Min Discovery</span>
                </a>
              </motion.div>
            </div>

            {/* Interactive Live Telemetry / Prompt Simulation Box */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-4">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">production-runtime.ts</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                    LIVE STREAM
                  </span>
                </div>

                {/* Prompt Switcher */}
                <div className="flex gap-2 pt-1">
                  {samplePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        soundFx.playHover();
                        setSimulatedPromptIndex(idx);
                      }}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded transition-all ${
                        simulatedPromptIndex === idx
                          ? 'bg-[#E31E24] text-white font-bold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      Task #{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Simulated Terminal Query & Result */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-3">
                  <div>
                    <span className="text-red-400 font-bold">&gt; input_query: </span>
                    <span className="text-slate-300">{samplePrompts[simulatedPromptIndex].query}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-emerald-300 leading-relaxed text-[11px]">
                    <span className="text-amber-400 font-bold">&lt; execution_output: </span>
                    <span>{samplePrompts[simulatedPromptIndex].response}</span>
                  </div>
                </div>

                {/* Real-time Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Inference</span>
                    <span className="text-xs font-bold text-red-400">{samplePrompts[simulatedPromptIndex].latency}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Throughput</span>
                    <span className="text-xs font-bold text-slate-200">{samplePrompts[simulatedPromptIndex].tokens}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Guardrails</span>
                    <span className="text-[10px] font-bold text-emerald-400">{samplePrompts[simulatedPromptIndex].guardrail}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Private VPC Air-Gapped</span>
                  </div>
                  <span className="text-slate-500">AES-256 • TLS 1.3</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Live Metrics Bar */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            {solution.heroStats && solution.heroStats.length > 0 ? (
              solution.heroStats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 uppercase mt-0.5">{stat.label}</p>
                </div>
              ))
            ) : (
              <>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">&lt; 45ms</p>
                  <p className="text-[11px] text-slate-500 uppercase mt-0.5">Vector Retrieval Latency</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">99.6%</p>
                  <p className="text-[11px] text-slate-500 uppercase mt-0.5">Deterministic Guardrail Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                  <p className="text-[11px] text-slate-500 uppercase mt-0.5">Private VPC Data Isolation</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">7 Days</p>
                  <p className="text-[11px] text-slate-500 uppercase mt-0.5">Trial Sprint</p>
                </div>
              </>
            )}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. INDUSTRY CHALLENGES SECTION                                            */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>01 / INDUSTRY CHALLENGES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              WHY NAIVE IMPLEMENTATIONS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                FAIL IN PRODUCTION.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Moving from a prototype to a high-concurrency enterprise system exposes fundamental bottlenecks in safety, latency, cost, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                      CHALLENGE #{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      c.severity === 'CRITICAL'
                        ? 'bg-red-50 text-red-700 border-red-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {c.severity || 'HIGH RISK'}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-950 font-display mb-3">
                    {c.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {c.problem}
                  </p>

                  <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100 text-xs font-mono text-slate-700">
                    <span className="text-red-700 font-bold block mb-1">BUSINESS IMPACT:</span>
                    <p className="text-slate-600">{c.consequence}</p>
                  </div>
                </div>

                {c.stat && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#E31E24] font-bold">
                    <Activity className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{c.stat}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR ARCHITECTURAL SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>02 / OUR ARCHITECTURAL SOLUTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              HOW WITQUALIS SOLVES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                ENTERPRISE SCALE.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Our engineering squads deploy battle-tested architectural patterns designed for deterministic safety, sub-50ms latency, and private cloud data sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.ourSolutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-red-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-50 border border-red-200">
                      {sol.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      ARCH #{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#E31E24] tracking-wider uppercase block mb-1">
                    {sol.subtitle}
                  </span>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 font-display mb-3">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {sol.architecturalPoints.map((pt, pidx) => (
                      <div key={pidx} className="flex items-start gap-2.5 text-xs font-mono text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">SLA Terms In Contract</span>
                  <span className="text-[#E31E24] font-bold">PRODUCTION READY &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURES & MODULES SECTION                                             */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Sliders className="w-3.5 h-3.5" />
              <span>03 / CORE CAPABILITIES & FEATURES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              PRODUCTION-GRADE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                FEATURE MODULES.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Every deliverable is engineered with strict type safety, modular microservice interfaces, and comprehensive CI/CD test automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 border border-red-200">
                      {f.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      MODULE 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-950 font-display mb-3">
                    {f.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {f.desc}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block">
                      KEY DELIVERABLES:
                    </span>
                    {f.deliverables.map((deliv, didx) => (
                      <div key={didx} className="flex items-center gap-2 text-xs font-mono text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24] flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {f.highlight && (
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                    <span>{f.highlight}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGIES STACK SECTION                                             */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>04 / ENTERPRISE TECH STACK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              MODELS, VECTOR ENGINES & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                CLOUD INFRASTRUCTURE.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              We leverage state-of-the-art open weights and frontier models paired with industrial vector databases and Kubernetes orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.technologies.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 bg-[#fafafa] shadow-sm hover:border-red-500/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-200 mb-4">
                  <Database className="w-3.5 h-3.5" />
                  <span>{t.category}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      onMouseEnter={() => soundFx.playHover()}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 font-semibold shadow-2xs hover:border-[#E31E24] hover:text-[#E31E24] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CASE STUDY SECTION                                                     */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>05 / PROVEN ENTERPRISE IMPACT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              REAL PRODUCTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                CASE STUDIES.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Inspect tangible business results and performance benchmarks achieved for high-concurrency enterprises.
            </p>
          </div>

          <div className="space-y-10">
            {solution.caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Narrative & Blueprint */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#E31E24] px-3 py-1 rounded-full bg-red-50 border border-red-200 uppercase">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        Client: {cs.client}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950 font-display">
                      {cs.title}
                    </h3>

                    <div className="space-y-4 text-sm text-slate-600">
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-900 uppercase block mb-1">
                          OPERATIONAL BOTTLENECK:
                        </span>
                        <p className="leading-relaxed">{cs.challenge}</p>
                      </div>

                      <div>
                        <span className="text-xs font-mono font-bold text-slate-900 uppercase block mb-1">
                          ARCHITECTURAL SOLUTION:
                        </span>
                        <p className="leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Results Bullets */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase block">
                        QUANTIFIABLE DELIVERABLES & RESULTS:
                      </span>
                      {cs.results.map((r, ridx) => (
                        <div key={ridx} className="flex items-center gap-2.5 text-xs font-mono text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                      <span className="text-xs font-mono text-slate-400 mr-2 uppercase">Stack:</span>
                      {cs.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-mono font-semibold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metrics Scorecard */}
                  <div className="lg:col-span-4 bg-slate-950 text-white p-6 rounded-2xl border border-slate-800 space-y-6">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider pb-3 border-b border-slate-800">
                      <TrendingUp className="w-4 h-4" />
                      <span>Production Impact</span>
                    </div>

                    <div className="space-y-4">
                      {cs.metrics && cs.metrics.length > 0 ? (
                        cs.metrics.map((m, midx) => (
                          <div key={midx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-mono text-slate-400 uppercase block">{m.label}</span>
                            <span className="text-2xl font-black font-mono text-[#E31E24]">{m.value}</span>
                          </div>
                        ))
                      ) : (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">Turnaround</span>
                          <span className="text-2xl font-black font-mono text-emerald-400">-88% Latency</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>Verified Live Enterprise Production</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BENEFITS & STRATEGIC VALUE SECTION                                     */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>06 / ENTERPRISE BENEFITS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              WHY ENTERPRISES CHOOSE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                WITQUALIS SQUADS.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Experience the velocity and precision of dedicated engineering pods with contractual risk mitigation and full IP transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-[#fafafa] p-8 shadow-sm hover:border-red-500/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 border border-red-200">
                      {b.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">0{i + 1}</span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-950 font-display mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-mono text-[#E31E24] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Defined In Contract</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>07 / FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              TECHNICAL & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                GOVERNANCE FAQS.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Clear answers on data privacy, deployment timelines, infrastructure costs, and trial engagements.
            </p>
          </div>

          <div className="space-y-4">
            {solution.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-950 hover:text-[#E31E24] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180 text-[#E31E24]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CTA BAND SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / DEPLOY PRODUCTION ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 font-display leading-[1.02]">
            BUILD YOUR {solution.name.toUpperCase()} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              WITH ZERO RISK.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a technical discovery session with our Principal AI Architects to evaluate use-case feasibility, model sizing, and sprint velocity.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
            >
              <span>Initiate Solution Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://calendly.com/witqualis_services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-red-500"
            >
              <Clock className="w-4 h-4 text-[#E31E24]" />
              <span>Book 30-Min Discovery</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Mutual NDA Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>7-Day Trial Sprint</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>100% IP Code Ownership</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
