// src/app/our-team/AlbumSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, X, Maximize2, Heart } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface AlbumPhoto {
  src: string;
  title: string;
  tag: string;
}

const albumPhotos: AlbumPhoto[] = [
  {
    src: '/images/album/diwali.jpg',
    title: 'Diwali Celebrations at WitQualis Hub',
    tag: 'FESTIVAL OF LIGHTS',
  },
  {
    src: '/images/album/diwali1.jpg',
    title: 'Team Togetherness & Festivities',
    tag: 'CULTURE & MOMENTS',
  },
  {
    src: '/images/album/rangoli team.jpg',
    title: 'Creative Team Festival Competitions',
    tag: 'TEAM COLLABORATION',
  },
  {
    src: '/images/album/rangoli.jpg',
    title: 'Traditional Art & Innovation Moments',
    tag: 'CELEBRATIONS',
  },
  {
    src: '/images/album/club.jpg',
    title: 'Team Outing & Offsite Gathering',
    tag: 'OFFSITE & REJUVENATION',
  },
  {
    src: '/images/album/11.webp',
    title: 'Agile Engineering Sprint Retrospectives',
    tag: 'SPRINT COLLABORATION',
  },
  {
    src: '/images/album/9.jpeg',
    title: 'Tech Hackathon & Problem Solving',
    tag: 'HACKATHONS',
  },
  {
    src: '/images/album/agile-workforce-augmentation.webp',
    title: 'Agile Developer Workforce Scaling',
    tag: 'ENGINEERING SQUADS',
  },
  {
    src: '/images/album/dedicated-developers-india.webp',
    title: 'Dedicated Developer Pods in Action',
    tag: 'CLIENT DELIVERY',
  },
  {
    src: '/images/album/distributed-agile-team-setup.webp',
    title: 'Global Standups & Remote Syncs',
    tag: 'GLOBAL TEAMWORK',
  },
  {
    src: '/images/album/managed-it-staffing-india.webp',
    title: 'High-Performance Workstation Setup',
    tag: 'TECH INFRASTRUCTURE',
  },
  {
    src: '/images/album/offshore-development-team.webp',
    title: 'Offshore Team Product Milestones',
    tag: 'PRODUCT RELEASES',
  },
  {
    src: '/images/album/remote-team-scaling-india.webp',
    title: 'Client Architecture Milestone Review',
    tag: 'SPRINT DELIVERY',
  },
  {
    src: '/images/album/vetted-tech-talent-india.webp',
    title: 'Vetted Senior Tech Squads',
    tag: 'TALENT EXCELLENCE',
  },
];

export default function AlbumSection(): JSX.Element {
  const [selectedPhoto, setSelectedPhoto] = useState<AlbumPhoto | null>(null);

  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        {/* Section Header with Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>MOMENTS, CULTURE &amp; CELEBRATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            Life At <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">WitQualis</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            From festival celebrations and team hackathons to global delivery milestones — explore the vibrant culture that powers our engineering.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scrolling Track (Row 1) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-[marquee-left_45s_linear_infinite] hover:[animation-play-state:paused]">
          {[...albumPhotos, ...albumPhotos].map((photo, index) => (
            <motion.div
              key={`${photo.src}-${index}`}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => {
                soundFx.playPop();
                setSelectedPhoto(photo);
              }}
              className="relative w-72 sm:w-84 h-52 sm:h-60 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 group cursor-pointer shadow-lg hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 flex-shrink-0"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Overlay Glass Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider mb-1">
                  {photo.tag}
                </span>
                <p className="text-xs font-bold text-white line-clamp-2">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/80 font-bold mt-2 uppercase">
                  <Maximize2 className="w-3 h-3 text-red-400" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-red-500/40 bg-white p-2 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-2xl overflow-hidden max-h-[70vh]">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block mb-1">
                  {selectedPhoto.tag}
                </span>
                <p className="text-base font-bold text-slate-900">
                  {selectedPhoto.title}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}