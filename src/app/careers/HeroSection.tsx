// src/app/careers/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageSquare, Sparkles, CheckCircle2, Users, Rocket, Globe } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function HeroSection() {
  return (
    <section className="relative min-h-[72vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white text-slate-900 selection:bg-red-500/20 border-b border-slate-200">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Ambient Red/Rose Glows */}
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
              WITQUALIS CAREERS &amp; ENGINEERING SQUADS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left sm:text-right"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-[#E31E24] uppercase">
              [WE ARE HIRING TOP TECH TALENT]
            </span>
            <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
              REMOTE-FIRST • CONTINUOUS LEARNING • GLOBAL IMPACT
            </span>
          </motion.div>
        </div>

        {/* Central Headline & Two-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>JOIN OUR HIGH-PERFORMANCE TEAM</span>
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                <span className="sr-only">Careers at Witqualis — Join Our Engineering and Technology Team — </span>BUILD YOUR CAREER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                  WITH US.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              Join a collective of passionate software architects, product designers, and AI pioneers. At WitQualis, you will learn from seasoned mentors, experiment with cutting-edge tech stacks, and accelerate your personal and professional growth.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#open-roles"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
              >
                <span>View Open Positions</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#company-life"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-[#E31E24]"
              >
                <Users className="w-4 h-4 text-[#E31E24]" />
                <span>Life at WitQualis</span>
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
                <span>Chat with HR</span>
              </a>
            </motion.div>
          </div>

          {/* Quick Perks / Culture Highlight Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100">
                <Rocket className="w-4 h-4" />
                <span>Why Engineers Thrive Here</span>
              </div>

              <div className="space-y-3 font-mono">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Work Model</span>
                  <span className="text-sm font-bold text-slate-900">Remote / Hybrid Flexible</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Appraisals</span>
                  <span className="text-sm font-bold text-[#E31E24]">Bi-Annual Fast-Track</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Learning Stipend</span>
                  <span className="text-sm font-bold text-emerald-600">Annual Tech Budget</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase">Mentorship</span>
                  <span className="text-sm font-bold text-slate-900">1-on-1 CTO Guidance</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <span>Zero Bureaucracy • High Autonomy Culture</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Live Metrics */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Flexible Work Culture</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">4.8 / 5</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Team Satisfaction Score</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">250+</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Global Engineers &amp; Alumni</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">&lt; 5 Days</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Fast-Track Hiring Process</p>
          </div>
        </div>
      </div>

    </section>
  );
}
