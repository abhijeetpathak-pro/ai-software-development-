// src/components/animated/Preloader.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [typedIndex, setTypedIndex] = useState(0);
  const brandText = 'WitQualis';

  useEffect(() => {
    // Typewriter effect for WitQualis
    const interval = setInterval(() => {
      setTypedIndex((prev) => {
        if (prev >= brandText.length) {
          clearInterval(interval);
          return brandText.length;
        }
        return prev + 1;
      });
    }, 110);

    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) {
        setTimeout(onComplete, 800);
      }
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const progressPercent = Math.min(100, Math.round((typedIndex / brandText.length) * 100));

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle Cyber Grid & Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(227,30,36,0.15)_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
          <div className="absolute top-1/3 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Animated WitQualis Typography */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase">
                <span className="text-white">{brandText.slice(0, Math.min(typedIndex, 3))}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-500 to-amber-300">
                  {brandText.slice(3, typedIndex)}
                </span>
              </h1>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 sm:w-1.5 h-10 sm:h-14 md:h-16 bg-[#E31E24] ml-1.5 rounded-full shadow-[0_0_12px_#E31E24]"
              />
            </motion.div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: typedIndex >= 3 ? 1 : 0, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-xs font-mono tracking-[0.35em] text-slate-400 uppercase"
            >
              Software Engineering &amp; Squad Augmentation
            </motion.p>

            {/* Futuristic Progress Bar & Telemetry Text */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="w-56 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#E31E24] via-rose-500 to-amber-400 rounded-full shadow-[0_0_8px_#E31E24]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.3em] text-slate-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E31E24] animate-ping" />
                <span>INITIALIZING / {progressPercent}%</span>
              </div>
            </div>
          </div>

          {/* SVG Arc Curtain Wipe Layer */}
          <motion.svg
            className="pointer-events-none absolute bottom-0 left-0 w-full h-32 text-slate-950 fill-current z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ d: 'M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z' }}
            exit={{
              d: 'M 0 0 Q 50 100 100 0 L 100 100 L 0 100 Z',
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <path d="M 0 0 Q 50 100 100 0 L 100 100 L 0 100 Z" />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
