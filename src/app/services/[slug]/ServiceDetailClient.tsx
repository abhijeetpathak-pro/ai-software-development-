'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Layers, 
  GitMerge, 
  Cpu, 
  Trophy, 
  HelpCircle, 
  ChevronDown, 
  Zap, 
  Lock, 
  Globe, 
  Terminal,
  TrendingUp,
  MessageSquare,
  Award,
  X
} from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { getCaseStudiesByService, ClientCaseStudy } from '@/data/caseStudies';
import { soundFx } from '@/lib/AudioEngine';

interface Props {
  service: ServiceItem;
  relatedServices: { slug: string; name: string }[];
}

export default function ServiceDetailClient({ service, relatedServices }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ClientCaseStudy | null>(null);

  const serviceCaseStudies = getCaseStudiesByService(service.slug);

  const toggleFaq = (index: number) => {
    soundFx.playChirp();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[72vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white border-b border-slate-200">
        {/* Subtle Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-red-50/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">
          
          {/* Breadcrumb + Eyebrow */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/" className="hover:text-red-600 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#E31E24] font-bold">{service.name}</span>
            </nav>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse" />
              <span>TRIAL SPRINT AVAILABLE</span>
            </div>
          </div>

          {/* Central Headline & Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">
            
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{service.name.toUpperCase()} PRACTICE</span>
                </span>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                  {service.name} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                    ENGINEERING SQUADS.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                {service.summary}
              </motion.p>

              {/* Actions */}
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

            {/* Quick Commitments Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Engagement Snapshot</span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Proposal Speed</span>
                    <span className="text-sm font-bold text-slate-900">24–48 Hours</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Trial Sprint</span>
                    <span className="text-sm font-bold text-[#E31E24]">7-Day Trial</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">IP &amp; Code</span>
                    <span className="text-sm font-bold text-emerald-600">100% Client Owned</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                  <span>Direct Commit Access to Your Repos</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Live Metrics */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">&lt; 48 Hours</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Squad Deployment</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">7 Days</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Trial Sprint</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Code &amp; IP Rights</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">99.4%</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Sprint SLA Adherence</p>
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
                <span>{service.overview.subtitle}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 uppercase font-display leading-tight">
                {service.overview.title}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {service.overview.paragraph1}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {service.overview.paragraph2}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <h3 className="text-sm font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Strategic Engineering Pillars</span>
                </h3>

                <ul className="space-y-3">
                  {service.overview.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Standard on all contracts</span>
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
      <section className="relative py-24 bg-white border-b border-slate-200">
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
              Engineered with modern tools, strict code reviews, and automated testing to ensure your product scales without technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase px-3 py-1 rounded-full bg-red-50 border border-red-100">
                      {f.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-slate-400 group-hover:text-[#E31E24] transition-colors" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 uppercase font-display mb-3 group-hover:text-[#E31E24] transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {f.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                    {f.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2.5 text-xs text-slate-800 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-bold text-[#E31E24]">
                  <span>Included in SOW &amp; Retainer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
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
              OUR ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                DELIVERY PROCESS
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
              Transparent, milestone-based execution with continuous bi-weekly sprint deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-[#E31E24] transition-colors">
                      {p.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {p.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-black uppercase text-slate-950 font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SLA Verified</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGIES SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECH STACK MATRIX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              TECHNOLOGIES &amp; TOOLS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                PROVEN AT SCALE
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
              We leverage modern battle-tested frameworks, cloud infrastructure, and developer tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.technologies.map((t, idx) => (
              <div
                key={t.category}
                className="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-200 mb-4 flex items-center justify-between">
                  <span>{t.category}</span>
                  <span className="text-slate-400">{t.items.length} Tools</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 font-bold shadow-sm"
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
            {service.benefits.map((b, idx) => (
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
                  <span>SLA Terms In Contract</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CASE STUDIES SECTION                                                   */}
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
              Explore how we solved critical engineering bottlenecks and accelerated product delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((cs, idx) => (
              <div
                key={cs.title}
                className="p-8 rounded-3xl border border-slate-200 bg-slate-50/70 shadow-sm hover:bg-white hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase px-3 py-1 rounded-full bg-red-50 border border-red-100">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">{cs.client}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 uppercase font-display mb-3">
                    {cs.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    <p><strong className="text-slate-900 font-mono">The Challenge:</strong> {cs.challenge}</p>
                    <p><strong className="text-slate-900 font-mono">Our Solution:</strong> {cs.solution}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                  <h4 className="text-[11px] font-mono font-bold text-slate-600 uppercase">Measurable Outcomes:</h4>
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-900 font-semibold font-sans">
                      <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cs.stack.map((stk) => (
                    <span
                      key={stk}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[10px] font-mono text-slate-700 font-bold"
                    >
                      {stk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              {service.name.toUpperCase()} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                QUESTIONS &amp; ANSWERS
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal">
              Clear answers about our developer matching, SLA terms, codebase access, and pricing.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => {
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
      {/* 8. FEATURED REAL CLIENT CASE STUDIES (WITH INTERACTIVE MODAL)            */}
      {/* ========================================================================= */}
      {serviceCaseStudies.length > 0 && (
        <section className="relative py-24 bg-slate-50 border-b border-slate-200">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <Trophy className="w-3.5 h-3.5" />
                <span>CLIENT CASE STUDIES &amp; DELIVERIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
                PROVEN {service.name.toUpperCase()} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                  REAL-WORLD CASE STUDIES
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal">
                Explore how WitQualis engineering squads delivered scalable systems and business transformation for global enterprises. Click any project to open the full case study.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCaseStudy(cs);
                  }}
                  className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#E31E24]/50 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E31E24] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        {cs.caseNumber}
                      </span>
                      {cs.logo && (
                        <div className="h-8 w-auto flex items-center">
                          <Image src={cs.logo} alt={cs.client} width={90} height={32} className="h-7 w-auto object-contain" />
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-slate-900 font-display group-hover:text-[#E31E24] transition-colors">
                        {cs.client}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">{cs.industry}</p>
                    </div>

                    <p className="text-xs font-medium italic text-rose-700 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
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

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E31E24] group-hover:underline inline-flex items-center gap-1.5">
                      View Full Case Study &rarr;
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#E31E24] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <span>READY TO SCALE YOUR {service.name.toUpperCase()} SYSTEM?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
              START YOUR {service.name.toUpperCase()} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                PROJECT TODAY.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Discuss your roadmap with our Chief Technology Officer and Solutions Team. We’ll prepare a complete architecture estimate and squad roster in under 24 hours.
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
                <span>Book 30-Min Discovery</span>
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
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>100% Mutual NDA</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>&lt; 24h Scoping Turnaround</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div>
                <span>7-Day Trial Sprint</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
