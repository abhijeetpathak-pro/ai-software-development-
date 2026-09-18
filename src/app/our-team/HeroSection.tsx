// src/app/our-team/HeroSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowDown, Users, ShieldCheck, Cpu, Code2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

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
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 pb-16 bg-white text-slate-900 selection:bg-red-500/20 border-b border-slate-200">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red/Rose Soft Glow */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-10 w-[500px] h-[300px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">

        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span className="text-xs sm:text-sm font-mono font-black tracking-widest text-slate-900 uppercase">
              MEET THE MINDS BEHIND WITQUALIS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left sm:text-right"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
              [OUR SQUAD]
            </span>
            <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
              DELIVERING HIGH-IMPACT SOFTWARE &amp; AI GLOBALLY
            </span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* TWO-COLUMN SPLIT LAYOUT: CONTENT ON LEFT + GLASS CARD ON RIGHT             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-4">

          {/* LEFT COLUMN: TYPOGRAPHY & INTRO */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-slate-950 uppercase font-display">
                <span className="sr-only">Meet the Witqualis Technology Team — </span>ARCHITECTS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                  OF DIGITAL REALITY.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              From autonomous AI vector architectures to high-concurrency cloud engineering. We assemble the experienced technical talent in India to scale global enterprise software with speed, and a structured delivery process.
            </motion.p>

            {/* Quick Metrics Bar with Live Count-Up Animation from 0 in Glass container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 grid grid-cols-3 gap-4 w-full max-w-lg p-4 rounded-2xl bg-white/80 border border-slate-200/90 backdrop-blur-xl shadow-lg font-mono"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-red-600">
                  <AnimatedCounter value={150} suffix="+" />
                </p>
                <p className="text-[10px] text-slate-500 uppercase mt-0.5">Vetted Engineers</p>
              </div>
              <div className="border-x border-slate-200 px-3">
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  <AnimatedCounter value={7} suffix="-Day" />
                </p>
                <p className="text-[10px] text-slate-500 uppercase mt-0.5">Trial Sprint</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-600">
                  <AnimatedCounter value={48} suffix="h" />
                </p>
                <p className="text-[10px] text-slate-500 uppercase mt-0.5">Talent Matching</p>
              </div>
            </motion.div>

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cinematic-spotlight"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-red-500/20 hover:scale-105 transition-all"
              >
                <span>Explore Executive Spotlight</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#join-our-team"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Users className="w-4 h-4 text-red-600" />
                <span>Join Our Squad</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE FROSTED GLASS SQUAD TELEMETRY CARD */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="relative w-full max-w-md rounded-3xl border border-slate-200/90 bg-white/70 p-6 backdrop-blur-2xl shadow-2xl shadow-slate-200/90 group overflow-hidden"
            >
              {/* Soft Glass Glow in background */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-200/40 rounded-full blur-3xl pointer-events-none group-hover:bg-red-300/40 transition-colors" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

              {/* Top Glass Card Badge */}
              <div className="flex items-center justify-between gap-2 mb-5 relative z-10">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SQUAD TELEMETRY ACTIVE</span>
                </div>

                <span className="font-mono text-[11px] text-slate-500 font-semibold">
                  EST. 2020
                </span>
              </div>

              {/* Main Team Showcase Collage with Glass Badges */}
              <div className="relative z-10 grid grid-cols-2 gap-3.5 mb-5">

                {/* 1. AI Brain */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] group/item shadow-md">
                  <img
                    src="/images/technologye/AI Brain.jpg"
                    alt="AI Brain & Neural Architecture"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 flex flex-col justify-end">
                    <p className="text-xs font-bold text-white leading-none">AI Neural Systems</p>
                    <p className="text-[9px] font-mono text-red-300 mt-0.5">Cognitive Architecture</p>
                  </div>
                </div>

                {/* 2. AI Technology */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] group/item shadow-md">
                  <img
                    src="/images/technologye/AI technology.jpg"
                    alt="AI Technology & Innovation"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 flex flex-col justify-end">
                    <p className="text-xs font-bold text-white leading-none">AI Technology</p>
                    <p className="text-[9px] font-mono text-red-300 mt-0.5">Enterprise Intelligence</p>
                  </div>
                </div>

                {/* 3. Person doing work */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] group/item shadow-md">
                  <img
                    src="/images/technologye/Person doing work.jpg"
                    alt="Engineering Team at Work"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 flex flex-col justify-end">
                    <p className="text-xs font-bold text-white leading-none">Engineering Squad</p>
                    <p className="text-[9px] font-mono text-red-300 mt-0.5">Agile Dev Execution</p>
                  </div>
                </div>

                {/* 4. Robot touch */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] group/item shadow-md">
                  <img
                    src="/images/technologye/robot touch.jpg"
                    alt="Human-AI Co-creation"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 flex flex-col justify-end">
                    <p className="text-xs font-bold text-white leading-none">Human-AI Synergy</p>
                    <p className="text-[9px] font-mono text-red-300 mt-0.5">Future-Ready Touch</p>
                  </div>
                </div>

              </div>

              {/* Floating Facts Bar */}
              <div className="relative z-10 p-3 rounded-2xl bg-white/90 border border-slate-200 flex items-center justify-between text-xs font-mono shadow-sm">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Vetted Talent Pool</span>
                </div>
                <span className="text-red-600 font-bold">SLA Terms In Contract</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
