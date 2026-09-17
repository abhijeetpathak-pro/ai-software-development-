// src/components/animated/AnimatedFooter.tsx
'use client';

import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { soundFx } from '@/lib/AudioEngine';

export default function AnimatedFooter() {
  const scrollToTop = () => {
    soundFx.playWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-border/40 bg-background/80 backdrop-blur-md pt-16 pb-12 overflow-hidden select-none">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#71717a_0.5px,_transparent_0.5px)] opacity-10 [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12">
        {/* Top Callout Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-border/30">
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              DIGITAL EXCELLENCE
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mt-2">
              Ready to ship something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">game-changing?</span>
            </h3>
          </div>

          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 text-white font-mono font-bold text-xs uppercase tracking-widest shadow-xl shadow-sky-500/20 hover:opacity-90 transition-all shrink-0 self-start md:self-auto cursor-pointer"
          >
            Start Conversation
          </a>
        </div>

        {/* Middle Links & Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              NAVIGATION
            </span>
            <a href="#" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">Identity &amp; Focus</a>
            <a href="#projects" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">Flagship Work</a>
            <a href="#experience" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">Journey &amp; Impact</a>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              SYSTEMS
            </span>
            <a href="#terminal-section" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">Interactive CLI</a>
            <a href="#about" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">RAG AI Pipelines</a>
            <a href="#about" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">Agentic Frameworks</a>
            <a href="#about" onClick={() => soundFx.playClick()} className="text-xs text-muted-foreground hover:text-primary transition-colors">WebGL Shaders</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              NETWORK
            </span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <TwitterIcon className="w-3.5 h-3.5" /> Twitter / X
            </a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              HEADQUARTERS
            </span>
            <span className="text-xs text-muted-foreground">Faridabad, Haryana, India / Global</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            2026 © WITQUALIS • ARCHITECTING DIGITAL REALITY • ALL RIGHTS RESERVED
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-card/60 hover:bg-card border border-border/60 text-xs font-mono text-foreground transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
