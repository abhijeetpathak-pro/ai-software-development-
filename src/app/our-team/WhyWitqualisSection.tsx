// src/app/our-team/WhyWitqualisSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Globe, Target, Award, Users } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const companyPillars = [
  {
    num: '01',
    title: 'Vetted Technical Minds',
    desc: 'Our rigorous multi-stage vetting process evaluates live coding algorithms, system design architecture, and client communication skills.',
    icon: <Users className="w-5 h-5 text-red-600" />,
  },
  {
    num: '02',
    title: 'Trial Sprint Available',
    desc: 'Evaluate developers directly inside your Jira and GitHub sprints for 15 days with zero financial commitment or risk.',
    icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
  },
  {
    num: '03',
    title: 'Rapid Onboarding',
    desc: 'Match with domain-expert engineers and kick off enterprise sprint cycles in less than 48 hours without recruitment friction.',
    icon: <Zap className="w-5 h-5 text-red-600" />,
  },
  {
    num: '04',
    title: 'Global Time-Zone Alignment',
    desc: 'Our engineering hubs in India, UAE, USA, Australia, and Canada ensure seamless overlap with your daily standups and release windows.',
    icon: <Globe className="w-5 h-5 text-red-600" />,
  },
];

export default function WhyWitqualisSection() {
  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT WITQUALIS TECHNOLOGIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            Built On Rigor, Trust &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              Technical Excellence
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded in 2020, WitQualis Technologies combines high-level AI intelligence with unwavering software craftsmanship. We empower global enterprises to scale without compromise.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Staggered Slide-Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {companyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => soundFx.playHover()}
              className="relative p-8 rounded-[28px] border border-slate-200 bg-white hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/5 group"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <span className="text-3xl font-black font-display text-slate-200 group-hover:text-red-600/30 transition-colors">
                  {pillar.num}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 group-hover:text-red-600 transition-colors mb-2">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
