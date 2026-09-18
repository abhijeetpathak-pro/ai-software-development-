// src/app/contact/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, ShieldCheck, Sparkles, Zap, MessageSquare } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white text-slate-900 selection:bg-red-500/20 border-b border-slate-200">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-red-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">

        {/* Top Eyebrow Tag */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
              WITQUALIS ARCHITECTURAL ADVISORY & SQUADS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left sm:text-right"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-[#E31E24] uppercase">
              [START A PROJECT • HIRE DEDICATED SQUADS]
            </span>
            <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
              5 GLOBAL HUBS • FAST SCOPING TURNAROUND
            </span>
          </motion.div>
        </div>

        {/* Central Headline & Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET&apos;S CONNECT & TRANSFORM</span>
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                <span className="sr-only">Contact Witqualis — Discuss Your Development or Staffing Need — </span>LET&apos;S BUILD SOMETHING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                  GREAT TOGETHER.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              Whether you are scaling an enterprise product, modernizing legacy systems, building custom SaaS, or engineering advanced AI workflows, our senior architects and engineering squads are ready to deliver with speed, security, and precision.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact-form"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
              >
                <span>Fill Project Inquiry Form</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://calendly.com/witqualis_services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-[#E31E24]"
              >
                <Clock className="w-4 h-4 text-[#E31E24]" />
                <span>Book Free Discovery Call</span>
              </a>

              <a
                href="https://wa.me/919289633637"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +91 9289633637</span>
              </a>
            </motion.div>
          </div>

          {/* Quick Commitments Box */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100">
                <Zap className="w-4 h-4" />
                <span>WitQualis Scoping Commitments</span>
              </div>

              <div className="space-y-3 font-mono">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Response Time SLA</span>
                  <span className="text-sm font-bold text-slate-900">&lt; 24 Hours</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">NDA Protection</span>
                  <span className="text-sm font-bold text-emerald-600">Mutual NDA</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Developer Trial</span>
                  <span className="text-sm font-bold text-[#E31E24]">Trial Sprint Available</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Pricing Transparency</span>
                  <span className="text-sm font-bold text-slate-900">Zero Hidden Costs</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <span>Direct Access to Principal Technical Architects</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Quick Metrics */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">5 Global</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Operating Hubs</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">&lt; 24h</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Proposal Speed</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">150+</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Senior Developers</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">100%</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">IP & Code Ownership</p>
          </div>
        </div>
      </div>

    </section>
  );
}
