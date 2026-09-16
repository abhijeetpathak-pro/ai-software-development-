// src/app/portfolio/WhyChooseUsPortfolio.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Headphones, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    icon: Users,
    num: '01',
    title: 'Vetted Engineers',
    subtitle: 'TECHNICAL TALENT',
    description: 'Engineers go through a multi-stage vetting protocol covering algorithmic ability, system architecture, clean code practices, and communication.',
    counterValue: 5,
    decimals: 0,
    prefix: '',
    suffix: '',
    metricsLabel: 'Vetting Stages'
  },
  {
    icon: Zap,
    num: '02',
    title: 'Code Quality Practices',
    subtitle: 'TESTED & REVIEWED',
    description: 'Code goes through automated linting, test suites (unit, integration, E2E), and peer code review as part of the standard delivery process.',
    counterValue: 3,
    decimals: 0,
    prefix: '',
    suffix: '',
    metricsLabel: 'Layers Of Review'
  },
  {
    icon: Clock,
    num: '03',
    title: 'Structured Sprint Delivery',
    subtitle: 'AGILE DISCIPLINE',
    description: 'We follow structured sprint cadences with milestone demos and transparent Jira/Linear tracking.',
    counterValue: 2,
    decimals: 0,
    prefix: '',
    suffix: ' wks',
    metricsLabel: 'Typical Sprint Cadence'
  },
  {
    icon: Headphones,
    num: '04',
    title: 'Dedicated Engineering Support',
    subtitle: 'DIRECT COMMUNICATION',
    description: 'Direct communication via private Slack and Microsoft Teams channels, with engineering leads available for incident response.',
    counterValue: 5,
    decimals: 0,
    prefix: '',
    suffix: '',
    metricsLabel: 'Office Locations Worldwide'
  },
  {
    icon: Lock,
    num: '05',
    title: 'Security & Client IP Rights',
    subtitle: 'CONTRACTUAL GOVERNANCE',
    description: 'Engagements are covered by non-disclosure agreements, and intellectual property created during the engagement is transferred to the client under the signed contract.',
    counterValue: 1,
    decimals: 0,
    prefix: '',
    suffix: '',
    metricsLabel: 'Mutual NDA Per Engagement'
  }
];

export default function WhyChooseUsPortfolio() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Soft Ambient Red Glow */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-red-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE WITQUALIS ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              WHY LEADING BRANDS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                CHOOSE WITQUALIS.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              We combine the speed of an agile startup with the architectural rigor and security of a tier-1 technology enterprise.
            </p>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className={`rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-red-300 hover:bg-white transition-all duration-300 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Num & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-black text-slate-300 group-hover:text-red-500 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider text-red-600 uppercase block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 group-hover:text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric Badge with AnimatedCounter */}
                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black font-mono text-slate-950 group-hover:text-red-600 transition-colors">
                      <AnimatedCounter
                        value={pillar.counterValue}
                        decimals={pillar.decimals}
                        prefix={pillar.prefix}
                        suffix={pillar.suffix}
                      />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      {pillar.metricsLabel}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
