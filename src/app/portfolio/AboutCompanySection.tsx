// src/app/portfolio/AboutCompanySection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Users, Cpu, Clock, Sparkles, ArrowRight } from 'lucide-react';
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

const uspItems = [
  {
    icon: Users,
    title: 'Vetted Talent',
    description: 'Every developer undergoes rigorous multi-stage algorithmic, system design, and communication screening.'
  },
  {
    icon: Clock,
    title: 'Rapid Matching',
    description: 'Deploy pre-vetted engineers into your active Git and Jira sprint workflows in under two business days.'
  },
  {
    icon: ShieldCheck,
    title: 'Trial Sprint',
    description: 'Evaluate developer velocity and code quality in your live codebase during a 7-day trial sprint.'
  },
  {
    icon: Award,
    title: 'Client-Owned Code and IP',
    description: 'Commits, documentation, and cloud architecture remain client property under the terms of the engagement contract.'
  }
];

export default function AboutCompanySection() {
  return (
    <section id="about-company" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT WITQUALIS TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              EMPOWERING ENTERPRISES WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                ENGINEERING PRECISION.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              We are an elite software engineering & AI consultancy delivering robust, fault-tolerant platforms for forward-thinking global brands.
            </p>
          </div>
        </div>

        {/* Top 2-Column: Introduction & Mission / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Company Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>WHO WE ARE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
                Your Strategic Technology Partner for Scalable Digital Realities
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to eliminate technical bottlenecks, WitQualis Technologies bridges the gap between ambitious enterprise vision and flawless code execution. We assemble dedicated squads of senior software architects, AI researchers, and full-stack developers to build mission-critical products.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether augmenting existing engineering teams or building complex digital platforms from scratch, our agile delivery model is built for high velocity and low management overhead.
              </p>
            </div>

            {/* Quick Stats Strip with Animated Counters */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
              <div>
                <p className="text-2xl font-black text-red-600">
                  <AnimatedCounter value={5} suffix="+ Yrs" />
                </p>
                <p className="text-[11px] text-slate-500 uppercase mt-0.5">Experience</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">
                  <AnimatedCounter value={120} suffix="+" />
                </p>
                <p className="text-[11px] text-slate-500 uppercase mt-0.5">Clients</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">
                  <AnimatedCounter value={300} suffix="+" />
                </p>
                <p className="text-[11px] text-slate-500 uppercase mt-0.5">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-black text-red-600">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-[11px] text-slate-500 uppercase mt-0.5">Countries</p>
              </div>
            </div>
          </div>

          {/* Right: Mission & Vision Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase">Our Mission</h4>
                  <p className="text-xs font-mono text-red-600">ACCELERATING VELOCITY</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower global businesses by delivering exceptional, scalable, and resilient software solutions backed by high-calibre technical minds and an obsession with quality.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase">Our Vision</h4>
                  <p className="text-xs font-mono text-rose-600">GLOBAL LEADERSHIP</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be recognized worldwide as the foremost technology engineering copilot, renowned for solving intricate software challenges with speed, transparency, and innovation.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom: Company USP Cards */}
        <div>
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
              [WHAT GIVES US AN EDGE]
            </h4>
            <p className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight font-display mt-1">
              Witqualis Value Proposition
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspItems.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h5 className="text-base font-bold text-slate-900 mb-2">{usp.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{usp.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono font-semibold text-red-600">
                    <span>Included In Every Engagement</span>
                    <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
