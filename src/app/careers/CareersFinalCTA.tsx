// src/app/careers/CareersFinalCTA.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, Briefcase, ShieldCheck } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function CareersFinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-black text-white overflow-hidden selection:bg-red-500/30">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#E31E24]" />
            <span>ACCELERATE YOUR ENGINEERING TRAJECTORY</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            YOUR NEXT OPPORTUNITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              COULD START HERE.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Take the leap and build world-class products with an elite team of engineers. Explore our current open requisitions or connect with our talent team today.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#open-roles"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#general-apply"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              <span>Submit General Profile</span>
            </a>

            <a
              href="https://wa.me/919289633637"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp HR</span>
            </a>
          </div>

          {/* Security & Response Info */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Confidential Applications</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>&lt; 5-Day Fast-Track Decision</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div>
              <span>Remote / Hybrid Freedom</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
