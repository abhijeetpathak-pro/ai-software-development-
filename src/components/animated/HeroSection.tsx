// src/components/animated/HeroSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Bot, ArrowDownRight, Sparkles, Terminal, Code2, Users, ShieldCheck } from 'lucide-react';
import { ClutchIcon, LinkedinIcon } from './SocialIcons';
import { soundFx } from '@/lib/AudioEngine';
import PhysicsBadge from './PhysicsBadge';

export default function HeroSection() {
  const [timeStr, setTimeStr] = useState('');
  const [zapActive, setZapActive] = useState(false);
  const [botActive, setBotActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Parallax Controls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });
  const contentY = useTransform(smoothProgress, [0, 1], [0, 80]);
  const contentScale = useTransform(smoothProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0.25]);
  const spotlightLeftY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const spotlightRightY = useTransform(smoothProgress, [0, 1], [0, -70]);
  const lanyardY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const lanyardRotate = useTransform(smoothProgress, [0, 1], [0, -6]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerZap = () => {
    setZapActive(true);
    soundFx.playZap();
    setTimeout(() => setZapActive(false), 600);
  };

  const triggerBot = () => {
    setBotActive(true);
    soundFx.playBot();
    setTimeout(() => setBotActive(false), 700);
  };

  // Reusable bottom-to-top slide variant helper
  const slideUp = (delay: number) => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 selection:bg-cyan-500/20"
    >
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#71717a_0.6px,_transparent_0.6px)] dark:bg-[radial-gradient(circle,_#52525b_0.6px,_transparent_0.6px)] opacity-20 [background-size:24px_24px] pointer-events-none" />

      {/* Dynamic Angled Spotlight Beams with Scroll Parallax */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Left Spotlight */}
        <motion.div
          style={{ y: spotlightLeftY }}
          className="absolute -top-40 -left-20 w-[600px] h-[1200px] opacity-25 dark:opacity-20 transform -rotate-45"
        >
          <div
            className="w-full h-full"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 80%)',
            }}
          />
        </motion.div>
        {/* Right Spotlight */}
        <motion.div
          style={{ y: spotlightRightY }}
          className="absolute -top-40 -right-20 w-[600px] h-[1200px] opacity-25 dark:opacity-20 transform rotate-45"
        >
          <div
            className="w-full h-full"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 80%)',
            }}
          />
        </motion.div>
      </div>

      {/* Left Sticky Vertical Badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center group/badge"
      >
        <a
          href="#contact"
          onClick={() => soundFx.playClick()}
          className="bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 py-8 px-3.5 text-[9px] font-black uppercase tracking-[0.4em] shadow-xl rounded-r-2xl border-r border-y border-zinc-200 dark:border-zinc-800 backdrop-blur-md transition-transform duration-300 hover:translate-x-1.5 flex flex-col items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="[writing-mode:vertical-rl] rotate-180">HIRE PRE-VETTED DEVELOPERS</span>
        </a>
      </motion.div>

      {/* Main Hero Container with Scroll Scale & Fade */}
      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Kinetic Typography Column */}
          <div className="lg:col-span-8 flex flex-col justify-center gap-1 sm:gap-2">
            {/* Top Subtitle Badge - Slide Up */}
            <motion.div {...slideUp(0.1)} className="flex items-center gap-3 mb-2">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[11px] font-mono font-semibold tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                <span>WITQUALIS TECHNOLOGIES — AI &amp; SOFTWARE ENGINEERING</span>
              </span>
            </motion.div>

            {/* Line 1: AI & DATA - Slide Up from bottom */}
            <div className="relative group">
              <motion.div {...slideUp(0.25)} className="flex items-center justify-between">
                <h1 className="text-[clamp(3.2rem,8.5vw,9.5rem)] font-black leading-[0.88] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-zinc-500 select-none animate-shimmer">
                  <span className="sr-only">Staff Augmentation Company in India for Global Engineering Teams — </span>AI &amp; DATA
                </h1>

                {/* Floating Social / Links */}
                <div className="hidden sm:flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                  <a
                    href="https://clutch.co/profile/witqualis"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-2.5 rounded-full bg-muted/60 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border/50 hover:scale-110"
                    aria-label="Clutch Profile"
                  >
                    <ClutchIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/company/witqualis"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-2.5 rounded-full bg-muted/60 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border/50 hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Line 2: SOFT [⚡] WARE - Slide Up from bottom */}
            <div className="relative">
              <motion.div {...slideUp(0.4)} className="flex items-center flex-wrap">
                <div className="text-[clamp(3.2rem,8.5vw,9.5rem)] font-black leading-[0.88] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-zinc-500 select-none flex items-center">
                  <span>SOFT</span>
                  <button
                    onClick={triggerZap}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`inline-flex items-center justify-center mx-1 sm:mx-2 p-1.5 sm:p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 cursor-pointer transition-all duration-300 hover:scale-115 ${
                      zapActive ? 'ring-4 ring-sky-400/50 shadow-[0_0_30px_rgba(56,189,248,0.8)] scale-125' : ''
                    }`}
                    title="Click for Electric Charge"
                    aria-label="Interactive Zap Icon"
                  >
                    <Zap
                      className={`w-[0.65em] h-[0.65em] text-sky-400 transition-transform ${
                        zapActive ? 'fill-sky-400 rotate-12 scale-125' : 'group-hover:text-sky-300'
                      }`}
                    />
                  </button>
                  <span>WARE</span>
                </div>
              </motion.div>
            </div>

            {/* Line 3: EN [🤖] GINEER - Slide Up from bottom */}
            <div className="relative">
              <motion.div {...slideUp(0.55)} className="flex items-center flex-wrap justify-between">
                <div className="text-[clamp(3.2rem,8.5vw,9.5rem)] font-black leading-[0.88] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-zinc-500 select-none flex items-center">
                  <span>EN</span>
                  <button
                    onClick={triggerBot}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`inline-flex items-center justify-center mx-1 sm:mx-2 p-1.5 sm:p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 cursor-pointer transition-all duration-300 hover:scale-115 ${
                      botActive ? 'ring-4 ring-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.8)] scale-125' : ''
                    }`}
                    title="Click to Activate Bot AI"
                    aria-label="Interactive Bot Icon"
                  >
                    <Bot
                      className={`w-[0.65em] h-[0.65em] text-amber-400 transition-transform ${
                        botActive ? 'fill-amber-400 -rotate-12 scale-125' : 'group-hover:text-amber-300'
                      }`}
                    />
                  </button>
                  <span>GINEER</span>
                </div>

                {/* Subtext description */}
                <p className="text-xs md:text-sm text-muted-foreground max-w-[260px] font-medium leading-relaxed uppercase tracking-wider pt-2 lg:pt-0">
                  Custom Software Development, Enterprise AI &amp; Pre-Vetted Dedicated Developer Squads.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Physics Lanyard Simulation with Slide Up */}
          <motion.div
            {...slideUp(0.4)}
            style={{ y: lanyardY, rotate: lanyardRotate }}
            className="lg:col-span-4 flex justify-center lg:justify-end items-center mt-6 lg:mt-0"
          >
            <PhysicsBadge />
          </motion.div>
        </div>

        {/* Hero Bottom Bar: Slide Up from bottom */}
        <motion.div
          {...slideUp(0.7)}
          className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Location & Status Indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">
              <span className="text-foreground font-semibold">DELHI &amp; GLOBAL HUBS</span> — {timeStr || 'LIVE TIME'}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Interactive Terminal Launcher */}
            <a
              href="#terminal-section"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/60 hover:bg-muted text-xs font-mono font-semibold tracking-wider transition-all duration-300 border border-border/60"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>LAUNCH TERMINAL</span>
            </a>

            {/* Expanding Pill CTA ("Explore Projects") */}
            <a
              href="#projects"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="group flex items-center"
            >
              <div className="relative flex items-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 h-11 w-11 group-hover:w-44 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden shadow-xl border border-white/20">
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[11px] font-black uppercase tracking-widest pl-5 pr-10">
                  Explore Work
                </span>
                <div className="absolute right-0 flex items-center justify-center size-11 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
