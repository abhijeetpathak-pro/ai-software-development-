// src/components/animated/MarqueeRibbons.tsx
'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';
import { soundFx } from '@/lib/AudioEngine';

const row1 = [
  'Next.js 15',
  'TypeScript',
  'Python',
  'PyTorch',
  'TensorFlow',
  'React 18 / 19',
  'Node.js',
  'Three.js',
  'WebGL & GLSL',
  'LangChain',
  'PostgreSQL',
  'Docker & K8s',
  'GraphQL',
  'FastAPI',
  'Tailwind CSS',
  'Redis',
];

const row2 = [
  'AI & Agentic Systems',
  'Full Stack Architecture',
  'High-Throughput APIs',
  'High-Performance WebGL',
  'Distributed Cloud',
  'Predictive ML Models',
  'Creative Web Development',
  'Autonomous Reasoning',
  'Zero-Downtime CI/CD',
  'Scalable Microservices',
];

interface VelocityRowProps {
  items: string[];
  baseVelocity: number;
  isAccent?: boolean;
}

function VelocityRow({ items, baseVelocity, isAccent = false }: VelocityRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  // Modulo wrap helper: wraps value between min and max
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-33.333, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    const currentVelocity = velocityFactor.get();

    if (currentVelocity !== 0) {
      moveBy += moveBy * Math.abs(currentVelocity);
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate items 3 times for infinite seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-1.5">
      <motion.div className="flex flex-nowrap w-max" style={{ x }}>
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFx.playHover()}
            className={`flex items-center gap-3.5 mx-2.5 px-4 py-2 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-default select-none group ${
              isAccent
                ? 'bg-card/40 border-border/40 hover:bg-emerald-500/15 hover:border-emerald-500/40 text-muted-foreground hover:text-foreground font-sans font-bold text-xs sm:text-sm tracking-wider uppercase'
                : 'bg-card/60 border-border/50 hover:bg-primary/15 hover:border-primary/40 text-foreground font-mono font-medium text-xs sm:text-sm tracking-wide'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150 ${
                isAccent
                  ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                  : 'bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
              }`}
            />
            <span className={isAccent ? 'group-hover:text-emerald-400 transition-colors' : 'group-hover:text-primary transition-colors'}>
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeRibbons() {
  return (
    <div className="relative w-full py-6 overflow-hidden bg-background/50 border-y border-border/40 select-none">
      {/* Gradient Mask on left & right edges for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

      {/* Row 1: Leftward Velocity-Responsive Scroll */}
      <VelocityRow items={row1} baseVelocity={-2.2} isAccent={false} />

      {/* Row 2: Rightward Velocity-Responsive Scroll */}
      <VelocityRow items={row2} baseVelocity={2.2} isAccent={true} />
    </div>
  );
}
