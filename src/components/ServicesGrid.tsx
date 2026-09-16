// src/components/ServicesGrid.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    text: "Artificial intelligence simulates human intelligence in machines, enabling them to think, learn, and make decisions to improve efficiency.",
    icon: "✦",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50/80 to-indigo-50/80"
  },
  {
    id: "02",
    title: "MACHINE LEARNING",
    text: "It is a subset of AI that enables systems to learn from data, identify patterns, and make predictions with minimal human intervention.",
    icon: "⌁",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50/80 to-cyan-50/80"
  },
  {
    id: "03",
    title: "SHAREPOINT INTEGRATION",
    text: "Connects SharePoint with applications to streamline management, collaboration, and workflows.",
    icon: "⌘",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50/80 to-teal-50/80"
  },
  {
    id: "04",
    title: "NETSUITE INTEGRATION",
    text: "Integrating NetSuite with systems unifies operations, automates data flow, and boosts productivity.",
    icon: "▤",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50/80 to-orange-50/80"
  },
  {
    id: "05",
    title: "MOBILE APP DEVELOPMENT",
    text: "It is the act of developing apps suitable for mobile devices that involve writing software for small, wireless computing devices.",
    icon: "▣",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50/80 to-purple-50/80"
  },
  {
    id: "06",
    title: "WEBSITE DEVELOPMENT",
    text: "It involves building and maintaining the website; it makes the website look great, works quickly with a smooth user experience.",
    icon: "▱",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50/80 to-blue-50/80"
  },
  {
    id: "07",
    title: "CRM SOFTWARE DEVELOPMENT",
    text: "It is the tool or technique that helps companies make a healthy relationship with their customers by organizing the data.",
    icon: "♧",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50/80 to-pink-50/80"
  },
  {
    id: "08",
    title: "Traiend Developer",
    text: "It is a process involving the creation, maintenance of applications, frameworks of software, design, programming, testing, and bug fixing.",
    icon: "</>",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50/80 to-purple-50/80"
  },
];

// ============================================
// AI VIDEO COMPONENT (Autoplay, Mute, Loop)
// ============================================
function AiVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/ai-tech.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />
      
      {/* Play/Pause Button */}
      <motion.button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-xl">{isPlaying ? '⏸' : '▶'}</span>
      </motion.button>
      
      {/* Bottom Text */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-white/80 text-xs font-medium tracking-wider">
          AI TECHNOLOGY • INTELLIGENT SOLUTIONS
        </p>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
    </motion.div>
  );
}

// ============================================
// SERVICE CARD (3D HOVER EFFECT)
// ============================================
function ServiceCard({ service, className = "", index }: { service: any; className?: string; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateYValue = ((x - centerX) / centerX) * 12;
    const rotateXValue = ((y - centerY) / centerY) * -12;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        background: `linear-gradient(145deg, rgba(255,255,255,0.98), var(--bg-gradient))`,
        borderColor: isHovered ? 'rgba(116,87,231,0.3)' : 'rgba(116,87,231,0.1)',
        boxShadow: isHovered 
          ? '0 20px 60px rgba(76,59,135,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
          : '0 4px 20px rgba(76,59,135,0.05), inset 0 1px 0 rgba(255,255,255,0.9)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      {/* Number */}
      <span className="absolute top-3 right-4 text-[10px] font-bold text-purple-300/60">
        {service.id}
      </span>
      
      {/* Icon */}
      <motion.div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-3 bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {service.icon}
      </motion.div>
      
      {/* Title */}
      <h3 className="text-sm font-bold text-gray-800 mb-1.5 tracking-wide">
        {service.title}
      </h3>
      
      {/* Text */}
      <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
        {service.text}
      </p>
      
      {/* Learn More */}
      <motion.a
        href="#contact"
        className="absolute bottom-4 left-6 inline-flex items-center gap-1.5 text-[10px] font-bold text-purple-600"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        LEARN MORE <span className="text-sm">→</span>
      </motion.a>
      
      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full pointer-events-none`} />
    </motion.article>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-xs font-bold text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-3 border border-purple-200"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            OUR EXPERTISE
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Technology solutions built for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              your business
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto mt-3 text-sm text-gray-500">
            From artificial intelligence to software development, we deliver technology solutions that help businesses innovate, scale and grow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* AI Card - Large */}
          <motion.div 
            className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[420px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <AiVideo />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">✦</span>
                  <h3 className="text-sm font-bold text-white">ARTIFICIAL INTELLIGENCE</h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Artificial intelligence simulates human intelligence in machines, enabling them to think, learn, and make decisions to improve efficiency.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-bold text-white/80 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  LEARN MORE <span className="text-sm">→</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Other Cards */}
          {services.slice(1).map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index + 1}
              className="min-h-[200px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}