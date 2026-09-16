// src/components/animated/PhysicsBadge.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { soundFx } from '@/lib/AudioEngine';

export default function PhysicsBadge() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Physics simulation state (spring pendulum model)
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const isDraggingRef = useRef(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const stringRef = useRef<SVGPathElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const k = 0.08; // Spring stiffness
    const damping = 0.92; // Friction damping
    const gravity = 0.2; // Gravity pull down

    const updatePhysics = () => {
      if (!isDraggingRef.current) {
        // Return to equilibrium (0, 0)
        const fx = -k * posRef.current.x;
        const fy = -k * posRef.current.y + gravity;

        velRef.current.x = (velRef.current.x + fx) * damping;
        velRef.current.y = (velRef.current.y + fy) * damping;

        posRef.current.x += velRef.current.x;
        posRef.current.y += velRef.current.y;
      }

      const x = posRef.current.x;
      const y = posRef.current.y;
      const rot = Math.max(-35, Math.min(35, x * 0.18));
      const rotY = Math.max(-25, Math.min(25, x * 0.1));

      if (cardRef.current) {
        cardRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) rotateY(${rotY}deg)`;
      }

      // Update lanyard SVG curve
      if (stringRef.current) {
        const startX = 140;
        const startY = 0;
        const endX = 140 + x * 0.5;
        const endY = 80 + y * 0.6;
        const ctrlX = (startX + endX) / 2 + x * 0.2;
        const ctrlY = (startY + endY) / 2 + 10;
        stringRef.current.setAttribute('d', `M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`);
      }

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const dx = e.clientX - mouseRef.current.prevX;
        const dy = e.clientY - mouseRef.current.prevY;
        posRef.current.x += dx;
        posRef.current.y += dy;
        velRef.current.x = dx;
        velRef.current.y = dy;
        mouseRef.current.prevX = e.clientX;
        mouseRef.current.prevY = e.clientY;
      }
    };

    const onMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
        soundFx.playPop?.();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    setHasInteracted(true);
    mouseRef.current.prevX = e.clientX;
    mouseRef.current.prevY = e.clientY;
    soundFx.playClick();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[280px] h-[380px] flex flex-col items-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* Interaction Hint */}
      {!hasInteracted && (
        <div className="absolute -top-6 bg-primary/10 border border-primary/30 text-primary text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full animate-bounce tracking-widest pointer-events-none">
          ✦ Drag &amp; Swing ID
        </div>
      )}

      {/* Lanyard Strap SVG */}
      <svg className="w-[280px] h-[90px] overflow-visible absolute top-0 pointer-events-none z-10">
        {/* Clip / Attachment hook */}
        <circle cx="140" cy="8" r="6" fill="#64748b" />
        <rect x="137" y="4" width="6" height="8" rx="2" fill="#94a3b8" />
        <path
          ref={stringRef}
          d="M 140 0 Q 140 40 140 80"
          stroke="#475569"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 140 0 Q 140 40 140 80"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.8"
        />
      </svg>

      {/* Draggable Card */}
      <div
        ref={cardRef}
        onMouseDown={handleMouseDown}
        className={`absolute top-[75px] w-[240px] rounded-2xl p-4.5 bg-gradient-to-b from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 border border-zinc-700/60 shadow-2xl backdrop-blur-xl transition-shadow cursor-grab active:cursor-grabbing ${
          isDragging ? 'shadow-cyan-500/20 scale-[1.02]' : 'hover:shadow-primary/10'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Holographic Shimmer Sheen Layer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-sky-500/10 to-transparent opacity-60 pointer-events-none" />

        {/* Card Clip Slot */}
        <div className="mx-auto w-12 h-2.5 rounded-full bg-zinc-800 border border-zinc-700/80 mb-3 flex items-center justify-center">
          <div className="w-8 h-1 bg-zinc-950 rounded-full" />
        </div>

        {/* Header telemetry badge */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
            <span className="text-[9px] font-mono font-semibold tracking-widest text-emerald-400">
              AUTHENTICATED
            </span>
          </div>
          <span className="text-[9px] font-mono text-zinc-400 font-medium">SYS//2026</span>
        </div>

        {/* Profile Card Body */}
        <div className="flex items-center gap-3 mb-3.5">
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1.5px] shrink-0 overflow-hidden shadow-md">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center font-black text-base text-white tracking-tighter">
              WQ
            </div>
            <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-sky-400" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs font-bold text-white tracking-wide">WITQUALIS</h4>
            <span className="text-[9px] text-sky-400 font-mono font-medium">AI &amp; FULL STACK</span>
            <span className="text-[8px] text-zinc-400 font-mono tracking-tighter mt-0.5">ID: WQ-CORP-9082</span>
          </div>
        </div>

        {/* Hologram Chip & Barcode */}
        <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-2.5 flex items-center justify-between mb-3">
          <div className="flex flex-col gap-1">
            <div className="w-6 h-4.5 rounded bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 border border-amber-200/40 opacity-90 relative overflow-hidden">
              <div className="absolute inset-0 border-t border-b border-amber-900/40 top-1.5" />
            </div>
            <span className="text-[7px] font-mono text-zinc-400">NFC CHIP</span>
          </div>

          {/* Barcode representation */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-[2px] h-5 opacity-70">
              {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2].map((w, i) => (
                <div
                  key={i}
                  className="bg-zinc-200 h-full rounded-sm"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
            <span className="text-[7px] font-mono tracking-widest text-zinc-400">0354-9A21-636</span>
          </div>
        </div>

        {/* Footer Pill */}
        <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400 pt-1">
          <span>ROLE: ENTERPRISE ENG</span>
          <span className="text-emerald-400">● AVAILABLE</span>
        </div>
      </div>
    </div>
  );
}
