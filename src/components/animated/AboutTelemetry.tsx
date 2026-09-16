// src/components/animated/AboutTelemetry.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Database, Network, Code, ShieldCheck, Activity, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

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

const pillars = [
  {
    id: 'ai',
    title: 'Applied AI & Enterprise RAG Systems',
    icon: Cpu,
    tag: 'PRODUCTION ML & LLMS',
    desc: 'Engineering private enterprise RAG pipelines, fine-tuned embedding search, vector databases (ChromaDB/Pinecone), and low-latency autonomous reasoning agents.',
    metrics: ['Sub-50ms Inference', 'Air-Gapped Privacy', 'Multi-Modal RAG'],
  },
  {
    id: 'architecture',
    title: 'Full-Stack Software Architecture',
    icon: Database,
    tag: 'SCALABLE CLOUD NATIVE',
    desc: 'Building high-concurrency web and mobile platforms, resilient microservices with Next.js 15, FastAPI, Node.js, backed by PostgreSQL and Redis caching layers.',
    metrics: ['10k+ Req/Sec', 'Zero-Downtime CI/CD', 'Docker & Kubernetes'],
  },
  {
    id: 'agentic',
    title: 'Pre-Vetted Dedicated Developer Squads',
    icon: Network,
    tag: 'STAFF AUGMENTATION',
    desc: 'Deploying senior software engineers directly into your Jira/GitHub sprints, with a trial sprint available before a longer engagement begins.',
    metrics: ['Trial Sprint Available', 'Vetted Talent', 'Fast Sprint Kickoff'],
  },
  {
    id: 'creative',
    title: 'Creative UI/UX & WebGL Choreography',
    icon: Code,
    tag: 'MODERN 60FPS EXPERIENCES',
    desc: 'Crafting visceral digital experiences combining modern frontend frameworks, Tailwind CSS, Three.js, spring physics, and buttery-smooth 60FPS UI choreographies.',
    metrics: ['Custom Shaders', 'Spring Physics', '100/100 Lighthouse'],
  },
];

const stats = [
  { num: 250, suffix: '+', decimals: 0, label: 'Enterprise Deliveries' },
  { num: 99.9, suffix: '%', decimals: 1, label: 'Production Uptime' },
  { num: 150, suffix: '+', decimals: 0, label: 'Vetted Engineers' },
  { num: 100, suffix: '%', decimals: 0, label: 'On-Time Sprint Delivery' },
];

export default function AboutTelemetry() {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full selection:bg-primary/20"
    >
      {/* Telemetry Header Badge with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/40 mb-12"
      >
        <div className="flex items-center gap-3">
          <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <Activity className="w-4 h-4 animate-pulse" />
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-foreground uppercase">
            VOLUME I: COMPANY MISSION &amp; CORE FOCUS
          </span>
        </div>
        <div className="flex items-center gap-6 text-[11px] font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>STATUS: ACTIVE DISPATCH</span>
          </span>
          <span className="hidden sm:inline">FOUNDED: 2020</span>
          <span>LATENCY: 12MS</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative Headline & Animated Counters with Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            // WITQUALIS SOFTWARE ENGINEERING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-foreground">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Enterprise Digital Reality</span> Where Intelligence Meets Scale.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Founded in 2020, Witqualis Technologies works with startups and enterprises on custom software engineering, AI platforms, and pre-vetted dedicated developer squads.
          </p>

          {/* Stats Counters Grid with Scroll Animated Numbers */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-md flex flex-col gap-1 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <span className="text-2xl sm:text-3xl font-black font-mono text-foreground group-hover:text-primary transition-colors">
                  <AnimatedCounter
                    value={stat.num}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
                <span className="text-xs font-medium text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Interactive Core Pillars Tabs with Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              CORE SPECIALIZATION PILLARS
            </span>
            <span className="text-xs font-mono text-primary font-bold">
              0{activePillar + 1} / 0{pillars.length}
            </span>
          </div>

          {/* Pillars List */}
          <div className="flex flex-col gap-3.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    setActivePillar(idx);
                    soundFx.playClick();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none group/pillar ${
                    isActive
                      ? 'bg-card/90 border-primary shadow-xl shadow-primary/10 scale-[1.01]'
                      : 'bg-card/30 border-border/40 hover:bg-card/60 hover:border-border/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
                            : 'bg-muted text-muted-foreground group-hover/pillar:text-foreground'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground tracking-tight group-hover/pillar:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono font-semibold tracking-wider text-sky-400">
                          {pillar.tag}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isActive ? 'rotate-90 text-primary' : 'group-hover/pillar:translate-x-1'
                      }`}
                    />
                  </div>

                  {/* Expanded Content with Smooth Animation */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="mt-4 pt-4 border-t border-border/40 flex flex-col gap-3"
                    >
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {pillar.metrics.map((m, mi) => (
                          <span
                            key={mi}
                            className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-medium flex items-center gap-1.5"
                          >
                            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                            {m}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
