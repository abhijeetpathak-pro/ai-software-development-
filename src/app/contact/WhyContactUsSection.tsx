// src/app/contact/WhyContactUsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Receipt, ShieldCheck, UserCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const trustPillars = [
  {
    icon: Zap,
    title: 'Fast Response',
    badge: '< 24 Hours SLA',
    description: 'Every technical inquiry receives a dedicated review from our solutions lead, with a response within 24 to 48 hours.'
  },
  {
    icon: Users,
    title: 'Experienced Development Team',
    badge: 'Senior Engineers',
    description: 'Our engineers are pre-vetted with proven track records in full-stack web, cloud, AI, and mobile ecosystems—ready to hit the ground running.'
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    badge: 'Zero Hidden Costs',
    description: 'Clear commercial terms with milestone-based fixed SOWs or flexible monthly squad retainers. What we estimate is what you pay.'
  },
  {
    icon: ShieldCheck,
    title: 'NDA / Confidentiality',
    badge: 'Client-Owned IP',
    description: 'Complete intellectual property security. We sign mutual non-disclosure agreements before reviewing proprietary blueprints or codebases.'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Project Manager',
    badge: 'Agile Scrum Lead',
    description: 'A dedicated technical project manager coordinates sprints, daily standups, Jira tracking, and ensures clear, proactive communication.'
  }
];

export default function WhyContactUsSection() {
  return (
    <section className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUE &amp; ASSURANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            WHY CONTACT US? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              TRUST-BUILDING COMMITMENTS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            We operate as your dedicated engineering partner—delivering enterprise-grade reliability, transparent communication, and rapid turnaround.
          </p>
        </div>

        {/* 5 Trust Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            const isWide = index === 3 || index === 4; // Make the last row clean on 3-col grid

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                onMouseEnter={() => soundFx.playHover()}
                className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase px-3 py-1 rounded-full bg-red-50 border border-red-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified WitQualis Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
