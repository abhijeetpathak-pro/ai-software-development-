// src/app/contact/LocationsSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Globe, MapPin, Mail, Phone, Star, Navigation } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

// Real Location Data matching Home Page GlobalTeam component
const locations = [
  {
    id: 'india',
    country: 'India',
    flag: 'https://flagcdn.com/w160/in.png',
    address: 'Unit No.712A, 12 Avenue, RPS Group, Sarai Khawaja, Faridabad, Haryana 121001',
    email: 'sales@witqualis.com',
    phone: '+91 9289633637',
    image: '/images/model/india-location.webp',
    reviews: '4.5',
    reviewsCount: '34 Google reviews',
    mapQuery: 'Unit+No.712A+12+Avenue+RPS+Group+Sarai+Khawaja+Faridabad+Haryana+121001'
  },
  {
    id: 'dubai',
    country: 'UAE',
    flag: 'https://flagcdn.com/w160/ae.png',
    address: 'F-402, Al Afra building, Al Khaledia Street, Al Majaz 3, Sharja, Dubai, UAE',
    email: 'sales@witqualis.com',
    phone: '+971-525869470',
    image: '/images/model/uae-location.webp',
    reviews: '4.5',
    reviewsCount: '34 Google reviews',
    mapQuery: 'Al+Afra+building+Al+Khaledia+Street+Al+Majaz+3+Sharja+Dubai+UAE'
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: 'https://flagcdn.com/w160/au.png',
    address: 'Unit 508 6-10 Charles Street Parramatta, New South Wales, 2150, Australia',
    email: 'sales@witqualis.com',
    phone: '+61-474850360',
    image: '/images/model/australia-location.webp',
    reviews: '4.5',
    reviewsCount: '34 Google reviews',
    mapQuery: 'Unit+508+6-10+Charles+Street+Parramatta+New+South+Wales+2150+Australia'
  },
  {
    id: 'usa',
    country: 'USA',
    flag: 'https://flagcdn.com/w160/us.png',
    address: 'Broadway, Manhattan, New York, NY 10007, United States',
    email: 'sales@witqualis.com',
    phone: '+1-212-555-0199',
    image: '/images/model/usa-location.webp',
    reviews: '4.6',
    reviewsCount: '56 Google reviews',
    mapQuery: 'Broadway+Manhattan+New+York+NY+10007+United+States'
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: 'https://flagcdn.com/w160/ca.png',
    address: 'Bay Street, Toronto, ON M5H 2Y2, Canada',
    email: 'sales@witqualis.com',
    phone: '+1-416-555-0199',
    image: '/images/model/canada-location.webp',
    reviews: '4.5',
    reviewsCount: '34 Google reviews',
    mapQuery: 'Bay+Street+Toronto+ON+M5H+2Y2+Canada'
  }
];

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState('india');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeData = locations.find((l) => l.id === activeLocation) || locations[0];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        const currentIndex = locations.findIndex((l) => l.id === activeLocation);
        const nextIndex = (currentIndex + 1) % locations.length;
        setActiveLocation(locations[nextIndex].id);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeLocation, isAutoPlay]);

  const handleLocationClick = (id: string) => {
    soundFx.playClick();
    setActiveLocation(id);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section id="global-locations" className="relative w-full py-24 px-4 bg-white text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-red-500/20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-4 py-1.5 rounded-full mb-3 border border-red-200 uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL PRESENCE &amp; OFFICE HUBS</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase font-display">
            TRUSTED BY CLIENTS ACROSS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              MULTIPLE COUNTRIES
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-mono mt-3">
            Transforming Business Across Time Zones with 24/7 Global Delivery &amp; Dedicated Squads
          </p>
        </motion.div>

        {/* Live Stats Bar */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-10 text-center font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-950">5+</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Countries</p>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">24/7</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Support</p>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-950">250+</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Team Members</p>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-green-600">4.5★</p>
            <p className="text-[11px] text-slate-500 uppercase mt-0.5">Average Rating</p>
          </div>
        </motion.div>

        {/* Country Flag Selector Pills */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {locations.map((loc) => {
            const isSelected = activeLocation === loc.id;
            return (
              <motion.button
                key={loc.id}
                onClick={() => handleLocationClick(loc.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E31E24] border-[#E31E24] text-white shadow-lg shadow-red-600/30 scale-105 font-bold'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-red-400 hover:bg-slate-50 shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={loc.flag} 
                  alt={loc.country} 
                  className="w-5 h-5 rounded-full object-cover shadow-sm"
                />
                <span className="text-xs font-mono uppercase tracking-wider">{loc.country}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* INTERACTIVE LOCATION PANEL (Skyline Full Background + Address & Details)   */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation}
            className="relative rounded-3xl shadow-2xl border border-slate-200 overflow-hidden min-h-[340px] md:min-h-[380px]"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.35 }}
          >
            {/* Full Background Image */}
            <div className="absolute inset-0">
              <Image
                src={activeData.image}
                alt={`${activeData.country} Skyline`}
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Dark Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50" />
            
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
            
            {/* Content Layer */}
            <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between min-h-[340px] md:min-h-[380px] gap-8">
              
              {/* Left Column - Address & Contact */}
              <div className="flex-1 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={activeData.flag} 
                    alt={activeData.country} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/40 shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-white">
                      {activeData.country}
                    </h3>
                    <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider">
                      Regional Operational Office
                    </span>
                  </div>
                </div>

                <div className="space-y-4 max-w-lg font-mono text-xs">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E31E24] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-200 leading-relaxed font-sans text-sm">
                      {activeData.address}
                    </p>
                  </div>

                  {/* Email */}
                  <a 
                    href={`mailto:${activeData.email}`}
                    className="flex items-center gap-3 text-slate-200 hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                    <span>{activeData.email}</span>
                  </a>

                  {/* Phone */}
                  {activeData.phone && (
                    <a 
                      href={`tel:${activeData.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-3 text-slate-200 hover:text-red-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                      <span>{activeData.phone}</span>
                    </a>
                  )}

                  {/* Google Reviews + Directions */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/15 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-amber-400 font-bold text-base">
                        <span>{activeData.reviews}</span>
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400 ml-1" />
                      </div>
                      <span className="text-xs text-slate-300">({activeData.reviewsCount})</span>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${activeData.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-white font-bold transition-colors"
                    >
                      <span>Get Directions</span>
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Big Country Typography */}
              <div className="flex-1 text-center md:text-right">
                <div className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-white/10 tracking-widest select-none">
                  {activeData.country.toUpperCase()}
                </div>
                
                {/* Step Indicators */}
                <div className="flex items-center justify-center md:justify-end gap-2 mt-6">
                  {locations.map((loc) => (
                    <button 
                      key={loc.id}
                      onClick={() => handleLocationClick(loc.id)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        loc.id === activeLocation 
                          ? 'bg-[#E31E24] w-8' 
                          : 'bg-white/30 hover:bg-white/60 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Trust Badge */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-2.5 bg-red-50 rounded-full border border-red-200 text-xs font-mono">
            <span>⭐</span>
            <span className="font-bold text-[#E31E24]">Trusted by 150+ clients worldwide</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-600">4.5 ★ Average Rating</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
