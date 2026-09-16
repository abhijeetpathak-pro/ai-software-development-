// src/components/animated/FloatingNavbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import SoundToggle from './SoundToggle';
import { soundFx } from '@/lib/AudioEngine';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Terminal', href: '#terminal-section' },
  { label: 'Contact', href: '#contact' },
];

export default function FloatingNavbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial dark mode
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    soundFx.playChirp();
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header
      className={`fixed top-4 inset-x-0 z-[9000] flex justify-center px-4 transition-all duration-300 pointer-events-none ${
        scrolled ? 'translate-y-0' : 'translate-y-1'
      }`}
    >
      <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 rounded-full bg-background/80 dark:bg-zinc-950/80 border border-border/60 dark:border-zinc-800/80 shadow-2xl backdrop-blur-xl max-w-5xl w-full">
        {/* Logo / Brand Mark */}
        <a
          href="#"
          onClick={() => soundFx.playClick()}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-2.5 group pl-1 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1.5px] shrink-0">
            <div className="w-full h-full bg-background dark:bg-zinc-950 rounded-[10px] flex items-center justify-center font-black text-xs text-foreground group-hover:scale-105 transition-transform">
              WQ
            </div>
          </div>
          <span className="font-bold text-sm tracking-tight text-foreground hidden sm:inline">
            WITQUALIS
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/40 dark:bg-zinc-900/40 p-1 rounded-full border border-border/40">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:bg-background/80 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Sound, Theme, CTA */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <SoundToggle />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2.5 rounded-full bg-background/80 dark:bg-zinc-900/80 hover:bg-muted dark:hover:bg-zinc-800 border border-border/60 dark:border-zinc-800 text-foreground transition-all duration-300 hover:scale-105 shadow-md"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Hire / Brief CTA */}
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:scale-102"
          >
            <span>Start Sprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
