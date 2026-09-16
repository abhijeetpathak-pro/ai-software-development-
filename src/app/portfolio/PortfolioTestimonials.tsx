// src/app/portfolio/PortfolioTestimonials.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  logo: string;
  avatar: string;
  quote: string;
  caseStudyLink: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mehul Chopra',
    role: 'Founder',
    company: 'Floofers',
    logo: 'FLOOFERS',
    avatar: '/images/testimonials/Mehul.jpg',
    quote: '"The quality of engineers from Witqualis has been excellent and to the mark. The screening process has been relatively painless where we have never found the need to screen more than 2 candidates per technology. Witqualis, with its wide talent pool has got our organization covered across the entire tech stack."',
    caseStudyLink: '#case-studies-grid',
    rating: 5
  },
  {
    id: '2',
    name: 'Jack Wells',
    role: 'Partner',
    company: 'Vengreso',
    logo: 'VENGRESO',
    avatar: '/images/testimonials/jack_wells.jpg',
    quote: '"WitQualis was helpful in facilitating our connection with qualified developers that fit our project\'s specific needs. Developers who joined our project are skilled and understood what our development goals sought to achieve. They were communicative, ready to review at a moment\'s notice, detailed in their work, offered useful suggestions, and was enjoyable to work with."',
    caseStudyLink: '#case-studies-grid',
    rating: 5
  },
  {
    id: '3',
    name: 'Parth Benerji',
    role: 'COO',
    company: 'StrategicERP',
    logo: 'STRATEGICERP',
    avatar: '/images/testimonials/prath.jpg',
    quote: '"As the COO for our ERP product, I engaged WitQualis for resources in Java, Python, and SQL development. The resources they provided were highly skilled and up to the latest market standards. WitQualis delivered excellent testers and business analysts who played a key role in ensuring the quality and smooth execution of our projects. Their team\'s technical expertise, professionalism, and adaptability have been invaluable."',
    caseStudyLink: '#case-studies-grid',
    rating: 5
  },
  {
    id: '4',
    name: 'Shailendra Choudhary',
    role: 'Associate Director',
    company: 'GirnarSoft',
    logo: 'GIRNARSOFT',
    avatar: '/images/testimonials/Shailendra.jpg',
    quote: '"Witqualis, as a company, has proven to be a highly professional, dependable, and process-driven partner. Their team maintains strong quality, clear communication, and a commitment to timely delivery. Aslam’s dedication has helped us achieve our goals smoothly and on time."',
    caseStudyLink: '#case-studies-grid',
    rating: 5
  },
  {
    id: '5',
    name: 'Jack Wells',
    role: 'Partner',
    company: 'Vengreso',
    logo: 'VENGRESO',
    avatar: '/images/testimonials/jack_wells.jpg',
    quote: '"WitQualis was helpful in facilitating our connection with qualified developers that fit our project\'s specific needs. Developers who joined our project are skilled and understood what our development goals sought to achieve. They were communicative, ready to review at a moment\'s notice, detailed in their work, offered useful suggestions, and was enjoyable to work with. witqualis."',
    caseStudyLink: '#case-studies-grid',
    rating: 5
  }
];

export default function PortfolioTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeTestimonial = testimonials[currentIndex];

  // Auto-rotate every 4 seconds, pauses on user hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    soundFx.playWhoosh();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    soundFx.playWhoosh();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-28 bg-[#fafafa] text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT REPUTATION & REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            WHAT ENTERPRISE LEADERS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              SAY ABOUT WITQUALIS
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* THE AUTO-ROTATING TESTIMONIAL CARD (Matching Reference Screenshot)        */}
        {/* ========================================================================= */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-[28px] border border-slate-200 bg-white text-slate-900 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* TOP ROW: 5 AMBER/ORANGE STARS + CIRCULAR CLIENT AVATAR */}
              <div className="flex items-start justify-between gap-4 mb-6">
                {/* 5 Rating Stars */}
                <div className="flex items-center gap-1.5">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Circular Client Avatar Photo */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-200 shadow-md flex-shrink-0">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = `https://ui-avatars.com/api/?name=${activeTestimonial.name.replace(' ', '+')}&background=e11d48&color=fff&size=160`;
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CENTRAL QUOTE IN LARGE EDITORIAL TYPOGRAPHY */}
              <p className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight mb-8">
                {activeTestimonial.quote}
              </p>

              {/* CLIENT COMPANY LOGO / BRANDING TEXT */}
              <div className="mb-6">
                <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-800 italic">
                  {activeTestimonial.logo}
                </span>
              </div>

              {/* SUBTLE HORIZONTAL DOTTED / DASHED DIVIDER */}
              <div className="border-t border-dashed border-slate-300 my-6" />

              {/* BOTTOM ROW: CLIENT NAME & TITLE (LEFT) + READ CASE STUDY (RIGHT) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-mono text-slate-500 mt-0.5">
                    {activeTestimonial.role} @ {activeTestimonial.company}
                  </p>
                </div>

                <a
                  href={activeTestimonial.caseStudyLink}
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-slate-900 hover:text-red-600 transition-colors group/link"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4 text-red-600 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Step Indicator & Controls */}
          <div className="flex items-center justify-between pt-8 text-xs font-mono text-slate-500">
            <button
              onClick={handlePrev}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* 5 Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-red-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
