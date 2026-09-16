// src/app/careers/FreshersProgramSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Laptop 
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const freshersPerks = [
  {
    icon: BookOpen,
    title: 'Structured Bootcamp Curriculum',
    desc: 'Intensive 12-week hands-on syllabus covering modern TypeScript, Next.js, Node.js, AI APIs, database design, and Git branching workflows.'
  },
  {
    icon: Users,
    title: 'Dedicated Senior Mentorship',
    desc: 'Every intern is paired with a Principal Architect who conducts daily code reviews, pair-programming sessions, and weekly 1-on-1 check-ins.'
  },
  {
    icon: Laptop,
    title: 'Real Production Code',
    desc: 'No theoretical dummy tasks. You will contribute to live client features, bug fixes, and API integrations seen by thousands of real users.'
  },
  {
    icon: Award,
    title: 'High-Conversion PPO Pathway',
    desc: 'Strong-performing interns may receive a Pre-Placement Offer (PPO) for full-time Software Engineer positions.'
  }
];

export default function FreshersProgramSection() {
  const handleExploreInternships = () => {
    soundFx.playClick();
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('filter-internship');
      window.dispatchEvent(event);

      const openRolesElement = document.getElementById('open-roles');
      if (openRolesElement) {
        openRolesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Two-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Intro & Highlight */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>GRADUATE &amp; FRESHERS ACADEMY</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display leading-tight">
                LAUNCH YOUR TECH CAREER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                  WITH WITQUALIS ACADEMY
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Are you a recent graduate or final-year student passionate about building production-grade software? Our Graduate Engineer Trainee (GET) program gives you skills, tools, and mentorship to grow as a professional software developer.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleExploreInternships}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Explore Internship Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="mailto:hr@witqualis.com?subject=Graduate%20Internship%20Inquiry"
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Email Academic Team</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 4 Key Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {freshersPerks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#E31E24]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-950 font-display uppercase mb-2 group-hover:text-[#E31E24] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Paid Stipend Included</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
