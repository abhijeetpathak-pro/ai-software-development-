// src/app/portfolio/HeroSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Zap, 
  ArrowDown 
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
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

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24 pb-16 bg-white text-slate-900 selection:bg-red-500/20 border-b border-slate-200">
      {/* Clean Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Soft Ambient Red/Rose Glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[300px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">
        
        {/* Top Eyebrow Tag */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span className="text-xs sm:text-sm font-mono font-black tracking-widest text-slate-900 uppercase">
              WITQUALIS COMPANY PORTFOLIO &amp; DELIVERIES
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left sm:text-right"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
              [ENTERPRISE CASE STUDIES]
            </span>
            <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
              300+ PRODUCTION APPS SHIPPED ACROSS 15+ COUNTRIES
            </span>
          </motion.div>
        </div>

        {/* Central Headline & Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-4">
          
          {/* Left: Strong Headline, What Company Does, Value Prop, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-slate-950 uppercase font-display">
                <span className="sr-only">Witqualis Software Development Portfolio and Case Studies — </span>ARCHITECTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                  DIGITAL REALITIES
                </span> <br />
                &amp; SCALABLE SOFTWARE.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              Witqualis engineers AI-driven architectures, cloud systems, and modern web/mobile applications, and deploys dedicated engineering squads for global enterprises.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl font-mono"
            >
              A structured delivery process, a trial sprint option, and client-owned IP under standard engagement terms.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio-projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-red-600/25 hover:scale-105 transition-all"
              >
                <span>View Our Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact-requisition"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-red-500"
              >
                <Zap className="w-4 h-4 text-red-600" />
                <span>Start A Project</span>
              </a>

              <a
                href="#schedule-consultation"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-600" />
                <span>Book Discovery Call</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Interactive 3D Frosted Glass Company Matrix Card */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-slate-200/90 group overflow-hidden"
            >
              {/* Soft Glass Glow in background */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-200/40 rounded-full blur-3xl pointer-events-none group-hover:bg-red-300/40 transition-colors" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-6 relative z-10 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>PRODUCTION BENCHMARKS ACTIVE</span>
                </div>

                <span className="font-mono text-[11px] text-slate-500 font-semibold">
                  EST. 2020
                </span>
              </div>

              {/* 4 Core Company Metrics Grid with Animated Counters */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-6 font-mono">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:border-red-200 transition-colors">
                  <p className="text-3xl font-black text-slate-950">
                    <AnimatedCounter value={300} suffix="+" />
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">Projects Delivered</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:border-red-200 transition-colors">
                  <p className="text-3xl font-black text-red-600">
                    <AnimatedCounter value={120} suffix="+" />
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">Enterprise Clients</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:border-red-200 transition-colors">
                  <p className="text-3xl font-black text-emerald-600">
                    <AnimatedCounter value={99.4} decimals={1} suffix="%" />
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">SLA Adherence</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:border-red-200 transition-colors">
                  <p className="text-3xl font-black text-slate-900">
                    &lt; <AnimatedCounter value={48} suffix="h" />
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">Talent Matching</p>
                </div>
              </div>

              {/* Active Service Chips */}
              <div className="relative z-10 space-y-2 mb-6">
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Core Enterprise Capabilities
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Staff Augmentation', 'Custom Web Apps', 'Mobile (Flutter/RN)', 'UI/UX Design', 'Cloud DevOps', 'AI & ML Squads'].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Facts Bar */}
              <div className="relative z-10 p-3 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs font-mono shadow-sm">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Trial Sprint</span>
                </div>
                <span className="text-red-600 font-bold">SLA Terms In Contract</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* Bottom Live Metrics Bar with Animated Counters */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-8 border-t border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">
              <AnimatedCounter value={300} suffix="+" />
            </p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Projects Delivered</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-red-600">
              <AnimatedCounter value={120} suffix="+" />
            </p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">
              <AnimatedCounter value={15} suffix="+" />
            </p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Countries We Cover</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-red-600">
              <AnimatedCounter value={48} suffix="h" />
            </p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Developer Match Speed</p>
          </div>
        </div>
      </div>

    </section>
  );
}
