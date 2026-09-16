// src/components/animated/TiltProjectCard.tsx
'use client';

import React, { useRef, useState } from 'react';
import { ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFx } from '@/lib/AudioEngine';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  desc: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics: string;
  gradient: string;
}

export default function TiltProjectCard({
  project,
  onOpenPreview,
}: {
  project: ProjectData;
  onOpenPreview: (proj: ProjectData) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotX(rX);
    setRotY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => soundFx.playHover()}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        }}
        className="relative rounded-3xl p-6 sm:p-7 bg-card/70 border border-border/60 hover:border-primary/40 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full group overflow-hidden"
      >
        {/* Dynamic Specular Glare Layer */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
          }}
        />

        {/* Top Decorative Gradient Banner */}
        <div
          className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${project.gradient}`}
        />

        {/* Header Badges */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-muted-foreground font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {project.metrics}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
            {project.desc}
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-1.5 mb-6">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Tech Stack & Actions */}
        <div className="pt-4 border-t border-border/40 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-muted/60 text-[10px] font-mono font-medium text-foreground/80 border border-border/40"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenPreview(project);
              }}
              className="flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer group/btn"
            >
              <Layers className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              <span>EXPLORE CASE STUDY</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-2 rounded-xl bg-muted/60 hover:bg-primary/20 hover:text-primary transition-all border border-border/40"
                  title="Source Code"
                  aria-label="Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                  title="Live Demo"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
