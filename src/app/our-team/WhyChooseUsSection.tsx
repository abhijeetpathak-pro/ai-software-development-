// src/app/our-team/WhyChooseUsSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Cpu, ShieldCheck, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const features = [
  {
    id: 'agile',
    icon: <Users className="w-6 h-6 text-red-600" />,
    badge: 'AGILE SQUADS',
    title: 'Agile Workforce Augmentation',
    description: 'Scale your engineering bandwidth in under 48 hours with pre-vetted senior developers who integrate directly into your sprint cycles, standups, and Git workflow.',
    stats: '48h Deployment',
    color: 'from-red-500/10 to-rose-600/10',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'managed',
    icon: <Cpu className="w-6 h-6 text-red-600" />,
    badge: 'FULL LIFECYCLE',
    title: 'Managed IT Staffing & SRE',
    description: 'Complete workforce management including compliance, IP protection, high-end workstations, hardware security, and dedicated engineering delivery managers.',
    stats: 'IP Security Practices',
    color: 'from-rose-500/10 to-red-600/10',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'vetted',
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    badge: 'VETTED TALENT',
    title: 'Vetted Dedicated Developers',
    description: 'Every engineer goes through multi-stage technical live-coding assessments and system architecture evaluations before joining a client engagement.',
    stats: 'Structured Vetting Process',
    color: 'from-red-500/10 to-pink-600/10',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'growth',
    icon: <TrendingUp className="w-6 h-6 text-red-600" />,
    badge: 'DATA-DRIVEN',
    title: 'Data-Driven Technical Excellence',
    description: 'Beyond code, we optimize for business velocity — delivering measurable reductions in infrastructure latency, higher test coverage, and automated deployment pipelines.',
    stats: '99.4% Sprint Rate',
    color: 'from-rose-500/10 to-red-600/10',
    borderColor: 'border-red-500/30'
  }
];

export default function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="why-choose-us" className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-red-500/20">
      {/* Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PARTNERSHIP BENEFITS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            Key Benefits of Partnering With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              Our Engineering Team
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            We deliver elite technical talent engineered for measurable business outcomes, rapid scalability, and seamless global time-zone alignment.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const isHovered = hoveredCard === feature.id;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setHoveredCard(feature.id);
                }}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-3xl border p-8 bg-white transition-all duration-500 group overflow-hidden ${
                  isHovered ? `border-red-500/60 shadow-2xl shadow-red-500/10 scale-[1.02]` : 'border-slate-200'
                }`}
              >
                {/* Background Ambient Glow on Hover */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${feature.color} rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-300">
                      {feature.icon}
                    </div>

                    <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Stats & CTA */}
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-900">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>{feature.stats}</span>
                    </div>

                    <a
                      href="#wq-contact"
                      onClick={() => soundFx.playClick()}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
