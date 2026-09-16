// src/components/CtaBand.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function CtaBand({
  heading = 'Start with a trial sprint',
  subheading = 'Meet your developer, review their first sprint, and only commit if it’s working.',
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 bg-card border-y border-border/40 selection:bg-primary/20">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#71717a_0.6px,_transparent_0.6px)] opacity-15 [background-size:24px_24px] pointer-events-none" />

      {/* Radiant Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ZERO RISK ONBOARDING</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground text-shiny">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subheading}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact/"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-primary/20 hover:scale-105 transition-all"
          >
            <span>Talk to Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-muted/60 hover:bg-muted text-foreground border border-border/60 font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>See how we work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
