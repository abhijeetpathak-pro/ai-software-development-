// src/app/careers/LifeAtCompanySection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Camera, Sparkles, PartyPopper, Users, Laptop, Award } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface CulturePhoto {
  id: string;
  title: string;
  category: 'celebrations' | 'workplace' | 'workshops';
  categoryLabel: string;
  image: string;
  description: string;
}

const photos: CulturePhoto[] = [
  {
    id: 'diwali-1',
    title: 'Diwali Festival Celebrations',
    category: 'celebrations',
    categoryLabel: 'Celebrations',
    image: '/images/album/diwali.jpg',
    description: 'Festive lights, traditional sweets, and joyful office celebrations across our hubs.'
  },
  {
    id: 'rangoli-team',
    title: 'Creative Rangoli & Team Art',
    category: 'celebrations',
    categoryLabel: 'Celebrations',
    image: '/images/album/rangoli team.jpg',
    description: 'Annual cultural competitions and bonding sessions with the entire WitQualis family.'
  },
  {
    id: 'team-club',
    title: 'Team Outing & Friday Club',
    category: 'celebrations',
    categoryLabel: 'Celebrations',
    image: '/images/album/club.jpg',
    description: 'Unwinding after major production releases with games, dinners, and music.'
  },
  {
    id: 'diwali-lights',
    title: 'Diwali Joy & Gift Distribution',
    category: 'celebrations',
    categoryLabel: 'Celebrations',
    image: '/images/album/diwali1.jpg',
    description: 'Celebrating milestones and expressing appreciation for our dedicated engineers.'
  },
  {
    id: 'squad-session',
    title: 'Agile Architecture & Tech Sprints',
    category: 'workplace',
    categoryLabel: 'Workplace',
    image: '/images/album/agile-workforce-augmentation.webp',
    description: 'Cross-functional developers collaborating on complex enterprise microservices.'
  },
  {
    id: 'offshore-hub',
    title: 'Collaborative Dev Pods',
    category: 'workplace',
    categoryLabel: 'Workplace',
    image: '/images/album/offshore-development-team.webp',
    description: 'Ergonomic workstations, multi-screen developer setups, and high-speed fiber connectivity.'
  },
  {
    id: 'tech-workshop',
    title: 'Internal AI & Cloud Workshop',
    category: 'workshops',
    categoryLabel: 'Workshops',
    image: '/images/album/chanderpal.jpg',
    description: 'Weekly knowledge transfer sessions on GenAI, Vector DBs, and modern frontend stacks.'
  },
  {
    id: 'remote-scaling',
    title: 'Distributed Hackathons & Demos',
    category: 'workshops',
    categoryLabel: 'Workshops',
    image: '/images/album/remote-team-scaling-india.webp',
    description: 'Internal hackdays where engineers build and demo experimental prototypes.'
  }
];

export default function LifeAtCompanySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="company-life" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20 scroll-mt-20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>BEHIND THE CODE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            LIFE AT OUR COMPANY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              CULTURE, CELEBRATIONS &amp; SESSIONS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            A glimpse into the energy, community, celebrations, and learning environment that makes WitQualis an exceptional place to work and grow.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Moments' },
            { id: 'celebrations', label: '🎉 Celebrations & Events' },
            { id: 'workplace', label: '💻 Workspace & Pods' },
            { id: 'workshops', label: '💡 Workshops & Tech Talks' }
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E31E24] text-white font-bold shadow-md shadow-red-600/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Photo Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="relative z-10 p-5 text-white">
                  <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#E31E24] text-white font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                    {photo.categoryLabel}
                  </span>

                  <h3 className="text-base font-bold font-sans text-white leading-snug drop-shadow-sm">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-slate-200/90 mt-1 line-clamp-2 font-normal">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Culture Quote Ribbon */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-sm sm:text-base text-slate-700 italic font-sans leading-relaxed">
            &ldquo;We don&apos;t just build enterprise software together; we celebrate every win, support each other through technical hurdles, and build lifelong friendships.&rdquo;
          </p>
          <p className="text-xs font-mono font-bold text-[#E31E24] uppercase mt-3">
            — WitQualis Engineering &amp; People Team
          </p>
        </div>

      </div>
    </section>
  );
}
