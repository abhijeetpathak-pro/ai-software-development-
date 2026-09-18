// src/app/portfolio/ClientsAndStats.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Building, 
  Globe2, 
  Award, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck 
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

const clientLogos = [
  { name: 'Car Dekho', logo: '/images/client/car-dekho.webp' },
  { name: 'Bakingo', logo: '/images/client/bakingo.webp' },
  { name: 'FlowerAura', logo: '/images/client/floweraura.webp' },
  { name: 'Fliplearn', logo: '/images/client/fliplearn.webp' },
  { name: 'Vengreso', logo: '/images/client/vengreso.webp' },
  { name: 'Sutherland', logo: '/images/client/sutherland.webp' },
  { name: 'synKup', logo: '/images/client/synkup.webp' },
  { name: 'Strategic ERP', logo: '/images/client/Strategic ERP.webp' },
  { name: 'Educomp', logo: '/images/client/educomp-school.webp' },
  { name: 'Jangubuzz', logo: '/images/client/Jangubuzz.webp' },
  { name: 'Floofers', logo: '/images/client/floofers.webp' },
  { name: 'Petluvs', logo: '/images/client/petlav.webp' },
  { name: 'SYML', logo: '/images/client/syml.webp' }
];

export default function ClientsAndStats() {
  return (
    <section id="clients-stats" className="relative py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>ENTERPRISE CLIENT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              CLIENT PARTNERSHIPS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                &amp; IMPACT METRICS.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              We empower venture-backed startups and multinational corporations to ship scalable software with unmatched reliability.
            </p>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase text-center mb-8">
            ENTERPRISE PARTNERS &amp; PRODUCTION CLIENTS
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="h-24 rounded-2xl bg-white border border-slate-200 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-[120px] object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats Grid with Animated Counters */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider block">
                [PERFORMANCE BENCHMARKS]
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mt-1">
                WitQualis By The Numbers
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real-Time SLA Validated</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Stat 1: 100+ Projects Delivered */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-950 mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={100} suffix="+" />
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Projects Delivered
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Across web, AI, cloud &amp; mobile platforms
              </p>
            </div>

            {/* Stat 2: 50+ Enterprise Clients */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-red-600 mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={50} suffix="+" />
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Enterprise Clients
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                High-growth scaleups to multinational brands
              </p>
            </div>

            {/* Stat 3: 5+ Yrs Industry Experience */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-950 mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={5} suffix="+ Yrs" />
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Industry Experience
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Engineering excellence since 2020
              </p>
            </div>

            {/* Stat 4: 12+ Countries Served */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-red-600 mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={12} suffix="+" />
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Countries Served
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                USA, UK, UAE, India, Singapore &amp; Europe
              </p>
            </div>

            {/* Stat 5: 99.4% SLA Sprint Adherence */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-600 mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={99.4} decimals={1} suffix="%" />
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                SLA Sprint Adherence
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Structured agile delivery with sprint tracking
              </p>
            </div>

            {/* Stat 6: < 48h Developer Match Speed */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-950 mb-1 group-hover:scale-105 transition-transform">
                &lt; <AnimatedCounter value={48} suffix="h" />
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Developer Match Speed
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Fast-track talent onboarding &amp; sprint integration
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
