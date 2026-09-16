// src/app/careers/WhyJoinSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  Globe, 
  DollarSign, 
  HeartHandshake, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const coreValues = [
  {
    icon: Rocket,
    title: 'Career Growth',
    subtitle: 'Fast-Track Promotions',
    desc: 'Take ownership of architectural decisions and lead cross-functional squads. We believe in meritocracy—your speed of growth depends purely on your ambition and impact.'
  },
  {
    icon: Lightbulb,
    title: 'Learning & Development',
    subtitle: 'Continuous Upskilling',
    desc: 'Annual paid stipends for cloud certifications (AWS, Azure, GCP), AI/LLM research papers, premium developer tools, and ticket sponsorships to tech summits.'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    subtitle: 'Zero Ego & Open Feedback',
    desc: 'Work alongside brilliant engineers who support each other. Structured peer reviews, pair programming, and transparent retrospective discussions foster mutual respect.'
  },
  {
    icon: Globe,
    title: 'Remote / Hybrid Flexibility',
    subtitle: 'Work Where You Are Best',
    desc: 'Complete freedom to work remotely or from our state-of-the-art office hubs in Delhi NCR. We prioritize outcomes, clear documentation, and sprint deliverables over physical hours.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    subtitle: 'Top Market Benchmarking',
    desc: 'Industry-leading salary structures, bi-annual performance appraisals, milestone bonuses, and transparent rewards aligned with global engineering standards.'
  },
  {
    icon: HeartHandshake,
    title: 'Work-Life Balance',
    subtitle: 'Sustainable Sprint Velocity',
    desc: 'No arbitrary weekend fire-drills or burnout deadlines. We champion realistic sprint sizing, comprehensive wellness days, and generous paid time off.'
  }
];

export default function WhyJoinSection() {
  return (
    <section className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>WHY CHOOSE WITQUALIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            WHY JOIN US? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              WHERE TALENT FLOURISHES
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            We are building an environment where engineers love to build, learn, experiment, and succeed together.
          </p>
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-[#E31E24]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-3 group-hover:text-[#E31E24] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                  <span>Standard on all engineering roles</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
