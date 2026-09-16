// src/app/contact/FinalCTASection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, ArrowRight, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function FinalCTASection() {
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
            <span>READY TO ACCELERATE YOUR ROADMAP?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            HAVE A PROJECT IN MIND? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              LET&apos;S TALK.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Discuss your technical requirements directly with our Chief Technology Officer and Solutions Team. We’ll provide a full architectural breakdown, squad sizing, and sprint schedule.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/witqualis_services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact-form"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm"
            >
              <span>Fill Inquiry Form</span>
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
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Security Guarantee Under CTA */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Mutual NDA</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Fast Scoping Turnaround</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div>
              <span>Trial Sprint Available</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
