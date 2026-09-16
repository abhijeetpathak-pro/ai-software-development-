// src/components/GlobalTeam.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Location Data
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
    reviewsCount: '34 Google reviews'
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
    reviewsCount: '34 Google reviews'
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
    reviewsCount: '34 Google reviews'
  },
  {
    id: 'usa',
    country: 'USA',
    flag: 'https://flagcdn.com/w160/us.png',
    address: 'Broadway, Manhattan, New York, NY 10007, United States',
    email: 'sales@witqualis.com',
    phone: '',
    image: '/images/model/usa-location.webp',
    reviews: '4.5',
    reviewsCount: '34 Google reviews'
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: 'https://flagcdn.com/w160/ca.png',
    address: 'Bay Street, Toronto, ON M5H 2Y2, Canada',
    email: 'sales@witqualis.com',
    phone: '',
    image: '/images/model/canada-location.webp',
    reviews: '4.5',
    reviewsCount: '34 Google reviews'
  },
 
];

export default function GlobalTeam() {
  const [activeLocation, setActiveLocation] = useState('india');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeData = locations.find(l => l.id === activeLocation)!;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        const currentIndex = locations.findIndex(l => l.id === activeLocation);
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
    setActiveLocation(id);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-4 py-1.5 rounded-full mb-3 border border-blue-200 dark:border-blue-800">
            GLOBAL PRESENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Trusted by clients across{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              multiple countries
            </span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Transforming Business Across Time Zones
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5+</p>
            <p className="text-xs text-gray-400">Countries</p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">24/7</p>
            <p className="text-xs text-gray-400">Support</p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">250+</p>
            <p className="text-xs text-gray-400">Team Members</p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
          <div>
            <p className="text-2xl font-bold text-green-500">4.5★</p>
            <p className="text-xs text-gray-400">Average Rating</p>
          </div>
        </motion.div>

        {/* Flags Container */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {locations.map((loc) => (
            <motion.button
              key={loc.id}
              onClick={() => handleLocationClick(loc.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                activeLocation === loc.id
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={loc.flag} 
                alt={loc.country} 
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{loc.country}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Panel - Full Image Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation}
            className="relative rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[300px] md:min-h-[350px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
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
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
            
            {/* Glow Effects */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between min-h-[300px] md:min-h-[350px]">
              {/* Left - Address */}
              <div className="flex-1 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={activeData.flag} 
                    alt={activeData.country} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <h3 className="text-2xl font-bold text-white">
                    {activeData.country}
                  </h3>
                </div>

                <div className="space-y-3 max-w-md">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {activeData.address}
                    </p>
                  </div>

                  <a 
                    href={`mailto:${activeData.email}`}
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {activeData.email}
                  </a>

                  {activeData.phone && (
                    <a 
                      href={`tel:${activeData.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {activeData.phone}
                    </a>
                  )}

                  {/* Reviews */}
                  <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-yellow-400">{activeData.reviews}</span>
                      <span className="text-sm text-white/60">★</span>
                    </div>
                    <span className="text-sm text-white/60">{activeData.reviewsCount}</span>
                  </div>
                </div>
              </div>

              {/* Right - Country Name Big */}
              <div className="flex-1 text-center md:text-right mt-6 md:mt-0">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/10 tracking-wider">
                  {activeData.country.toUpperCase()}
                </div>
                <div className="flex items-center justify-center md:justify-end gap-2 mt-4">
                  {locations.map((loc) => (
                    <div 
                      key={loc.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        loc.id === activeLocation 
                          ? 'bg-white w-6' 
                          : 'bg-white/30 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Trust Badge */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-2 bg-blue-50 rounded-full border border-blue-200">
            <span className="text-sm text-gray-600">⭐</span>
            <span className="text-sm font-medium text-blue-600">Trusted by 150+ clients worldwide</span>
            <span className="text-sm text-gray-400 hidden sm:inline">•</span>
            <span className="text-sm text-gray-400">4.5 ★ Average</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}