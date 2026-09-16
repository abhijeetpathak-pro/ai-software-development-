// src/app/careers/HiringProcessSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PhoneCall, Code2, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const steps = [
  {
    step: '01',
    title: 'Apply Online',
    timeframe: 'Day 1',
    icon: FileText,
    desc: 'Submit your resume, GitHub/portfolio links, and relevant project experience via our portal or email directly to hr@witqualis.com.'
  },
  {
    step: '02',
    title: 'Screening Call',
    timeframe: 'Day 2',
    icon: PhoneCall,
    desc: 'A quick 20-30 minute conversation with our Talent Acquisition team to understand your career aspirations, expectations, and role fit.'
  },
  {
    step: '03',
    title: 'Technical / Role Interview',
    timeframe: 'Day 3–4',
    icon: Code2,
    desc: 'A practical, real-world architectural discussion or live pair-coding session with our Engineering Lead. No artificial trick questions.'
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    timeframe: 'Day 5',
    icon: CheckCircle2,
    desc: 'We present a transparent, competitive offer with complete compensation breakdown, welcome kit, and start your guided onboarding.'
  }
];

export default function HiringProcessSection() {
  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FAST-TRACK RECRUITMENT ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            OUR 4-STEP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              HIRING PROCESS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            We value your time. Our hiring pipeline is fast, respectful, transparent, and completed in under 5 business days.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-7 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Number + Timeframe Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-display text-slate-300 group-hover:text-[#E31E24] transition-colors">
                      {s.step}
                    </span>

                    <span className="text-[10px] font-mono font-bold text-slate-600 uppercase px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
                      {s.timeframe}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Feedback Provided After Each Stage</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Candidate Commitment Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-red-50/60 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-xs font-mono text-slate-700">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
            <span>We never ghost candidates. Every applicant receives constructive feedback.</span>
          </div>
          <a
            href="#open-roles"
            onClick={() => soundFx.playClick()}
            className="text-[#E31E24] font-bold hover:underline whitespace-nowrap"
          >
            Explore Open Roles →
          </a>
        </div>

      </div>
    </section>
  );
}
