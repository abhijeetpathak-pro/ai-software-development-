// src/app/our-team/CinematicTeamSpotlight.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import { LinkedinIcon } from '@/components/animated/SocialIcons';

interface SpotlightMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  quote: string;
  image: string;
  experience: string;
  stats: string;
  skills: string[];
  linkedin: string;
  email: string;
  portalColor: string;
}

const teamMembers: SpotlightMember[] = [
  {
    id: 'anwar-khan',
    name: 'Anwar Khan',
    role: 'Founder',
    designation: 'Founder & Managing Director',
    quote: 'We built WitQualis on a single conviction: extraordinary software is not born from headcounts, but from vetted engineering rigor, continuous trial, and absolute trust.',
    image: '/images/team/a_khan.webp',
    experience: '12+ Years Leadership',
    stats: 'Enterprise Strategy Leadership',
    skills: ['Venture Strategy', 'Global Engineering Hubs', 'Client Partnerships', 'Distributed Delivery'],
    linkedin: 'https://www.linkedin.com/in/imanwark/',
    email: 'anwar@witqualis.com',
    portalColor: '#e11d48', // Crimson Rose
  },
  {
    id: 'chandrapal-singh',
    name: 'Chandrapal Singh',
    role: 'CTO',
    designation: 'Chief Technology Officer',
    quote: 'Architecting for scale means building autonomous, fault-tolerant systems that execute with sub-millisecond precision under enterprise load.',
    image: '/images/team/chanderpal.jpg',
    experience: '10+ Years Architecture',
    stats: 'AI & Cloud Architecture',
    skills: ['Applied AI & RAG', 'Cloud Architecture', 'Kubernetes Fleets', 'Vector Databases'],
    linkedin: 'https://www.linkedin.com/company/witqualis/posts/?feedView=all',
    email: 'cto@witqualis.com',
    portalColor: '#dc2626', // Red
  },
  {
    id: 'aslam-khan',
    name: 'Aslam Khan',
    role: 'Director',
    designation: 'Sales & Marketing Director',
    quote: 'Our global clients do not just buy staffing — they invest in predictable sprint velocity, transparent communication, and consistent technical delivery.',
    image: '/images/team/aslam.webp',
    experience: '9+ Years Strategy',
    stats: 'Enterprise Client Growth',
    skills: ['International Expansion', 'Key Accounts', 'Staff Augmentation', 'Go-To-Market'],
    linkedin: 'https://www.linkedin.com/in/aslamkhan123/',
    email: 'aslam@witqualis.com',
    portalColor: '#b91c1c', // Dark Red
  },
  {
    id: 'shubham-sharma',
    name: 'Shubham Sharma',
    role: 'BD Manager',
    designation: 'Business Development Manager',
    quote: 'Matching the right engineer with the exact framework version in under 48 hours is what separates WitQualis from traditional staffing.',
    image: '/images/team/Shubham.webp',
    experience: '7+ Years Growth',
    stats: 'Client Success & Growth',
    skills: ['Sprint Discovery', 'Technical Scoping', 'Client Success', 'Rapid Onboarding'],
    linkedin: 'https://www.linkedin.com/in/shubham-sharma-38b585253/',
    email: 'shubham@witqualis.com',
    portalColor: '#e11d48',
  },
  {
    id: 'sonam-jainwal',
    name: 'Sonam Jainwal',
    role: 'HR Manager',
    designation: 'Head of Human Resources',
    quote: 'We vet developers through live-coding and problem-solving assessments before they join a client engagement.',
    image: '/images/team/Sonam.webp',
    experience: '8+ Years People Ops',
    stats: 'Engineering Talent Pipeline',
    skills: ['Structured Vetting', 'Engineering Culture', 'Global Onboarding', 'People Operations'],
    linkedin: 'https://www.linkedin.com/in/sonam-jainwal-695755185/',
    email: 'sonam@witqualis.com',
    portalColor: '#f43f5e',
  },
  {
    id: 'abhijeet-pathak',
    name: 'Abhijeet Pathak',
    role: 'Growth Lead',
    designation: 'Digital Marketing & Growth Lead',
    quote: 'Engineering high-converting digital acquisition funnels, organic search authority, and multi-channel technical brand positioning that scale enterprise software platforms globally.',
    image: '/images/team/Akhil.webp',
    experience: '6+ Years Digital Growth',
    stats: 'Digital Growth Strategy',
    skills: ['SEO & Organic Search', 'Performance Marketing', 'Growth Funnels', 'Brand Architecture'],
    linkedin: 'https://www.linkedin.com/in/abhijeetpathak-digitalmarketing/',
    email: 'Sales@witqualis.com',
    portalColor: '#e11d48',
  },
  {
    id: 'vishal-bidlan',
    name: 'Vishal Bidlan',
    role: 'Vendor Manager',
    designation: 'Vendor & Resource Manager',
    quote: 'Securing mission-critical infrastructure, specialized vendor partnerships, and strict contractual compliance across all global jurisdictions.',
    image: '/images/team/Vishal.webp',
    experience: '7+ Years Procurement',
    stats: 'Standard SLA Practices',
    skills: ['Resource Allocation', 'Vendor Networks', 'SLA Management', 'Contract Operations'],
    linkedin: 'https://www.linkedin.com/in/vishal-bidlan-93a6b43a0/',
    email: 'vendor@witqualis.com',
    portalColor: '#be123c',
  },
];

export default function CinematicTeamSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMember = teamMembers[activeIndex];

  // Auto-rotation every 4 seconds (4000ms) as requested
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    soundFx.playWhoosh();
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    soundFx.playWhoosh();
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    soundFx.playClick();
    setActiveIndex(idx);
  };

  return (
    <section
      id="cinematic-spotlight"
      className="relative py-24 bg-white text-slate-900 overflow-hidden selection:bg-red-500/20 border-b border-slate-200"
    >
      {/* Subtle Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red/Rose Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-red-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading with Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEADERSHIP &amp; ARCHITECTURAL MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">Spotlight Stage</span>
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* THE FROSTED GLASS STUDIO SPOTLIGHT STAGE                                  */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-[32px] border border-slate-200/90 bg-white/75 backdrop-blur-2xl p-6 sm:p-12 shadow-2xl shadow-slate-200/90 overflow-hidden">
          
          {/* Dynamic Overhead Spotlight Glow directed at active member */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[450px] pointer-events-none transition-all duration-500 blur-3xl opacity-30"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${activeMember.portalColor} 0%, transparent 70%)`
            }}
          />

          {/* Top Lineup Glass Tabs of All Executives */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 relative z-20">
            {teamMembers.map((member, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={member.id}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-3.5 sm:px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 flex items-center gap-2 overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/30 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-red-600'}`} />
                  <span>{member.name}</span>

                  {/* Active 4-sec Progress Bar */}
                  {isSelected && (
                    <motion.span
                      key={`prog-${idx}-${activeIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-white/70"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Center Stage: Spotlight Showcase */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
            
            {/* Left: Illuminated Frosted Glass Portal Frame with Member Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden border-2 shadow-2xl group flex-shrink-0 bg-slate-100"
                  style={{
                    borderColor: activeMember.portalColor,
                    boxShadow: `0 10px 40px ${activeMember.portalColor}33`,
                  }}
                >
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  
                  {/* Bottom Portrait Glass Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-slate-900">
                    <p className="text-sm font-bold text-slate-950 leading-tight">{activeMember.name}</p>
                    <p className="text-xs font-mono text-red-600 font-semibold mt-0.5">{activeMember.designation}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Editorial Quote & Technical Specs in Glass Container */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-600">
                      // EXECUTIVE STATEMENT
                    </span>
                    <p className="mt-3 text-lg sm:text-2xl font-medium text-slate-900 leading-snug italic font-serif">
                      "{activeMember.quote}"
                    </p>
                  </div>

                  {/* Highlights Grid in Frosted Glass Badges */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 font-mono text-xs">
                    <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-sm">
                      <span className="text-slate-500 block text-[10px] uppercase font-semibold">Experience</span>
                      <span className="text-slate-950 font-bold text-sm mt-0.5 block">{activeMember.experience}</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-sm">
                      <span className="text-slate-500 block text-[10px] uppercase font-semibold">Track Record</span>
                      <span className="text-red-600 font-bold text-sm mt-0.5 block">{activeMember.stats}</span>
                    </div>
                  </div>

                  {/* Skill Badges in Glass Pills */}
                  <div className="flex flex-wrap gap-2">
                    {activeMember.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="px-3 py-1 rounded-lg bg-red-50/80 border border-red-200/80 text-red-700 text-xs font-mono font-medium shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Direct Contact / LinkedIn Action */}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-500/25 hover:scale-105"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>View LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={`mailto:${activeMember.email}`}
                      onClick={() => soundFx.playClick()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-mono text-xs font-bold transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-red-600" />
                      <span>{activeMember.email}</span>
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Navigation Controls: Clean Previous & Next Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-200 text-xs font-mono text-slate-600">
            <button
              onClick={handlePrev}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex ? 'bg-red-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold transition-all cursor-pointer shadow-sm"
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
