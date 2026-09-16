// src/components/animated/HomepageTestimonials.tsx
'use client';

import React, { useState, useEffect } from 'react';
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
  rating: number;
}

// Testimonials confirmed as genuine by Witqualis.
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mehul Chopra',
    role: '',
    company: 'Floofers',
    logo: 'FLOOFERS',
    avatar: '/images/testimonials/Mehul.jpg',
    quote: '"The quality of engineers from Witqualis has been excellent and to the mark. The screening process has been relatively painless where we have never found the need to screen more than 2 candidates per technology. Witqualis, with its wide talent pool has got our organization covered across the entire tech stack."',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jack Wells',
    role: '',
    company: 'Vengreso',
    logo: 'VENGRESO',
    avatar: '/images/testimonials/jack_wells.jpg',
    quote: '"WitQualis was helpful in facilitating our connection with qualified developers that fit our project\u2019s specific needs. Developers who joined our project are skilled and understood what our development goals sought to achieve. They were communicative, ready to review at a moment\u2019s notice, detailed in their work, offered useful suggestions, and was enjoyable to work with."',
    rating: 5,
  },
  {
    id: '3',
    name: 'Parth Benerji',
    role: 'COO',
    company: 'StrategicERP',
    logo: 'STRATEGICERP',
    avatar: '/images/testimonials/prath.jpg',
    quote: '"As the COO for our ERP product, I engaged WitQualis for resources in Java, Python, and SQL development. The resources they provided were highly skilled and up to the latest market standards. WitQualis delivered excellent testers and business analysts who played a key role in ensuring the quality and smooth execution of our projects. Their team\u2019s technical expertise, professionalism, and adaptability have been invaluable."',
    rating: 5,
  },
  {
    id: '4',
    name: 'Shailendra Choudhary',
    role: 'Associate Director',
    company: 'GirnarSoft',
    logo: 'GIRNARSOFT',
    avatar: '/images/testimonials/Shailendra.jpg',
    quote: '"Witqualis, as a company, has proven to be a highly professional, dependable, and process-driven partner. Their team maintains strong quality, clear communication, and a commitment to timely delivery. Aslam’s dedication has helped us achieve our goals smoothly and on time."',
    rating: 5,
  },
  {
    id: '5',
    name: 'Jack Wells',
    role: 'Partner',
    company: 'Vengreso',
    logo: 'VENGRESO',
    avatar: '/images/testimonials/jack_wells.jpg',
    quote: '"WitQualis was helpful in facilitating our connection with qualified developers that fit our project\'s specific needs. Developers who joined our project are skilled and understood what our development goals sought to achieve. They were communicative, ready to review at a moment\'s notice, detailed in their work, offered useful suggestions, and was enjoyable to work with. witqualis."',
    rating: 5,
  },
];

export default function HomepageTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (testimonials.length === 0) {
    return null;
  }

  const activeTestimonial = testimonials[currentIndex];

  const handleNext = () => {
    soundFx.playWhoosh();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    soundFx.playWhoosh();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full selection:bg-primary/20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '5s' }} />
          <span>CLIENT REPUTATION &amp; REVIEWS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          What Enterprise Leaders <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">
            Say About WitQualis
          </span>
        </h2>
        <p className="mt-4 text-xs sm:text-sm font-mono text-muted-foreground uppercase leading-relaxed">
          // PROVEN TRACK RECORD DELIVERING MISSION-CRITICAL PLATFORMS GLOBALLY
        </p>
      </motion.div>

      {/* Auto-Rotating Testimonial Card with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl mx-auto"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[32px] border border-border/80 bg-card/90 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Top Row: Stars Rating + Avatar */}
            <div className="flex items-start justify-between gap-4 mb-6">
              {/* 5 Stars */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-5 h-5 ${starIndex <= Math.round(activeTestimonial.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-muted-foreground/30'
                      }`}
                  />
                ))}
              </div>

              {/* Circular Avatar */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg flex-shrink-0">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = `https://ui-avatars.com/api/?name=${activeTestimonial.name.replace(' ', '+')}&background=0284c7&color=fff&size=160`;
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Central Editorial Quote */}
            <p className="text-lg sm:text-2xl font-bold text-foreground leading-snug tracking-tight mb-8">
              {activeTestimonial.quote}
            </p>

            {/* Client Company Logo / Name */}
            <div className="mb-6">
              <span className="text-xl sm:text-2xl font-black font-mono tracking-tight text-primary italic">
                {activeTestimonial.logo}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-border/40 my-6" />

            {/* Bottom Row: Name & Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-0.5">
                  {activeTestimonial.role} @ {activeTestimonial.company}
                </p>
              </div>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-primary hover:text-primary/80 transition-colors group/link"
              >
                <span>Explore Deliveries</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation & Indicator Controls */}
        <div className="flex items-center justify-between pt-8 text-xs font-mono text-muted-foreground">
          <button
            onClick={handlePrev}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card hover:bg-card/80 border border-border/60 text-foreground font-bold transition-all shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2.5'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card hover:bg-card/80 border border-border/60 text-foreground font-bold transition-all shadow-sm cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
