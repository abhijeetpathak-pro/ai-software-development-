// src/components/PageHero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 border-b border-border/40 bg-background selection:bg-primary/20">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#71717a_0.6px,_transparent_0.6px)] opacity-15 [background-size:24px_24px] pointer-events-none" />

      {/* Dynamic Angled Spotlight Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-20 w-[500px] h-[800px] opacity-20 transform -rotate-45"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-32 -right-20 w-[500px] h-[800px] opacity-20 transform rotate-45"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
          <span>{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-foreground text-shiny"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
