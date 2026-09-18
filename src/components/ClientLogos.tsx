// src/components/ClientLogos.tsx
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const clients = [
  { 
    name: 'Bakingo', 
    image: '/images/client/bakingo.webp', 
    link: '/portfolio/',
    category: 'Food & Bakery',
    projects: 12
  },
  { 
    name: 'Fliplearn', 
    image: '/images/client/fliplearn.webp', 
    link: '/portfolio/',
    category: 'EdTech & Learning',
    projects: 14
  },
  { 
    name: 'FlowerAura', 
    image: '/images/client/floweraura.webp', 
    link: '/portfolio/',
    category: 'E-Commerce & Florist',
    projects: 11
  },
  { 
    name: 'CarDekho', 
    image: '/images/client/car-dekho.webp', 
    link: '/portfolio/',
    category: 'Automotive Portal',
    projects: 15
  },
  { 
    name: 'Vengreso', 
    image: '/images/client/vengreso.webp', 
    link: '/portfolio/',
    category: 'SaaS Productivity',
    projects: 8
  },
  { 
    name: 'Sutherland', 
    image: '/images/client/sutherland.webp', 
    link: '/portfolio/',
    category: 'Digital Transformation',
    projects: 20
  },
  { 
    name: 'synKup', 
    image: '/images/client/synkup.webp', 
    link: '/portfolio/',
    category: 'AI & Career-Tech',
    projects: 10
  },
  { 
    name: 'Jangubuzz', 
    image: '/images/client/Jangubuzz.webp', 
    link: '/portfolio/',
    category: 'Events & Marketplace',
    projects: 7
  },
  { 
    name: 'Educomp', 
    image: '/images/client/educomp-school.webp', 
    link: '/portfolio/',
    category: 'EdTech Group',
    projects: 16
  },
  { 
    name: 'Petluvs', 
    image: '/images/client/petlav.webp', 
    link: '/portfolio/',
    category: 'Pet Community',
    projects: 6
  },
  { 
    name: 'Strategic ERP', 
    image: '/images/client/Strategic ERP.webp', 
    link: '/portfolio/',
    category: 'Enterprise ERP',
    projects: 18
  },
  { 
    name: 'Floofers', 
    image: '/images/client/floofers.webp', 
    link: '/portfolio/',
    category: 'Pet Care Platform',
    projects: 9
  },
  { 
    name: 'SYML', 
    image: '/images/client/syml.webp', 
    link: '/portfolio/',
    category: 'Healthcare & SaaS',
    projects: 8
  }
];

export default function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = ['All', ...new Set(clients.map(c => c.category))];

  // Filter clients by category
  const filteredClients = selectedCategory && selectedCategory !== 'All'
    ? clients.filter(c => c.category === selectedCategory)
    : clients;

  return (
    <section ref={sectionRef} className="py-16 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header with Animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-teal-500 bg-teal-50 px-4 py-1.5 rounded-full mb-3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Trusted Partners
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
            Empowering leading brands across industries with innovative solutions
          </p>
        </motion.div>

        {/* Category Filter - Interactive */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <p className="text-2xl font-bold text-gray-900">{clients.length}+</p>
            <p className="text-xs text-gray-400">Clients</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-gray-900">100+</p>
            <p className="text-xs text-gray-400">Projects Delivered</p>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div>
            <p className="text-2xl font-bold text-gray-900">4.9★</p>
            <p className="text-xs text-gray-400">Client Rating</p>
          </div>
        </motion.div>

        {/* Logos Grid with Interactive Cards */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center justify-center border border-gray-100 hover:border-teal-300 group relative overflow-hidden"
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow Effect on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    initial={false}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  />

                  {/* Logo Image */}
                  <Link href={client.link} target="_blank" className="block w-full relative z-10">
                    <div className="relative w-full h-16 flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-full w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                        unoptimized={false}
                      />
                    </div>
                    
                    {/* Client Name */}
                    <p className="text-xs text-center text-gray-400 group-hover:text-teal-600 transition-colors mt-2 font-medium">
                      {client.name}
                    </p>

                    {/* Category Badge - Appears on Hover */}
                    <motion.div 
                      className="absolute -top-2 -right-2 bg-teal-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredIndex === index ? 1 : 0,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {client.projects}+
                    </motion.div>

                    {/* Hover Info Card */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div 
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-20"
                          initial={{ opacity: 0, y: 0, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                            {client.category}
                            <span className="w-px h-3 bg-gray-600" />
                            {client.projects} projects
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/portfolio/" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}