// src/app/portfolio/TeamLeadershipSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { soundFx } from '@/lib/AudioEngine';

interface LeaderItem {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  image: string;
  specialization: string;
}

const leaders: LeaderItem[] = [
  {
    name: 'Anwar Khan',
    role: 'Founder & Managing Director',
    subtitle: 'EXECUTIVE LEADERSHIP & VISION',
    bio: 'Pioneering strategic enterprise partnerships, corporate vision, and engineering governance across international markets.',
    image: '/images/team/a_khan.webp',
    specialization: 'Enterprise Strategy & Leadership'
  },
  {
    name: 'Aslam Khan',
    role: 'Director of Global Partnerships',
    subtitle: 'CLIENT SUCCESS & OPERATIONS',
    bio: 'Strategic advisor guiding global enterprises through engineering workforce augmentation, NDA governance, and SLA delivery.',
    image: '/images/team/aslam.webp',
    specialization: 'Client Solutions & SLA Delivery'
  },
  {
    name: 'Chandrapal Singh',
    role: 'Chief Technology Officer',
    subtitle: 'CO-FOUNDER & CHIEF ARCHITECT',
    bio: '10+ years architecting high-concurrency microservices, AI vector pipelines, and mission-critical cloud backends.',
    image: '/images/team/chanderpal.jpg',
    specialization: 'Cloud DevOps & AI Architecture'
  }
];

export default function TeamLeadershipSection() {
  return (
    <section id="team-leadership" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>THE LEADERSHIP &amp; ARCHITECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              MINDS BEHIND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                WITQUALIS EXCELLENCE.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Veteran technology leaders guiding architectural rigor, developer vetting, and enterprise scale for global tech enterprises.
            </p>
          </div>
        </div>

        {/* 3 Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-red-300 hover:bg-white transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6 border border-slate-200 bg-slate-100 shadow-sm">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-red-600/90 text-white font-bold uppercase tracking-wider backdrop-blur-sm">
                      {leader.specialization}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold tracking-wider text-red-600 uppercase block mb-1">
                  {leader.subtitle}
                </span>

                <h3 className="text-2xl font-bold text-slate-950 mb-1 font-display">
                  {leader.name}
                </h3>

                <p className="text-xs font-mono font-bold text-slate-500 mb-3">
                  {leader.role}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {leader.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Executive Leadership</span>
                <CheckCircle2 className="w-4 h-4 text-red-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Team Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>EXPANDED TALENT BENCH</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Looking to Meet Our Full Engineering Squad?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Explore our complete squad of 50+ vetted senior developers, AI researchers, and DevOps SRE architects ready to deploy in under 48 hours.
            </p>
          </div>

          <Link
            href="/our-team/"
            onClick={() => soundFx.playClick()}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 transition-all flex-shrink-0"
          >
            <span>Explore Full Team Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
