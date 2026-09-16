// src/app/careers/EmployeeTestimonialsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  image: string;
  tenure: string;
  quote: string;
  highlight: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'mohit',
    name: 'Mohit',
    role: 'Senior Full-Stack Engineer',
    image: '/images/team/Mohit.webp',
    tenure: '3+ Years at WitQualis',
    quote: 'The team gave me the complete architectural freedom to learn, experiment, and grow. At WitQualis, your voice matters, whether you are discussing system design or introducing a new framework.',
    highlight: 'Works on backend microservices and system architecture.'
  },
  {
    id: 'shubham',
    name: 'Shubham',
    role: 'Lead Frontend Developer',
    image: '/images/team/Shubham.webp',
    tenure: '2.5 Years at WitQualis',
    quote: 'Working on enterprise Next.js 15 and real-time WebSockets with US and European clients has elevated my frontend craftsmanship. The async work flexibility is truly unmatched.',
    highlight: 'Builds enterprise frontend applications for global clients.'
  },
  {
    id: 'vishal',
    name: 'Vishal',
    role: 'AI & Cloud Solutions Specialist',
    image: '/images/team/Vishal.webp',
    tenure: '2+ Years at WitQualis',
    quote: 'The learning budget and mentorship here are incredible. I transitioned from backend APIs into LLM pipelines and Vector databases with full support from leadership.',
    highlight: 'Works on AI and cloud solutions delivery.'
  },
  {
    id: 'vinni',
    name: 'Vinni',
    role: 'Senior QA & Automation Engineer',
    image: '/images/team/Vinni photo profile.webp',
    tenure: '2+ Years at WitQualis',
    quote: 'The culture is genuinely supportive and ego-free. We celebrate every sprint milestone together and constantly learn from each other during weekly tech shareouts.',
    highlight: 'Leads QA and test automation practices.'
  },
  {
    id: 'sonam',
    name: 'Sonam',
    role: 'Product Operations & Agile Lead',
    image: '/images/team/Sonam.webp',
    tenure: '3+ Years at WitQualis',
    quote: 'WitQualis strikes the perfect balance between high standards of engineering excellence and genuine empathy for work-life balance and personal well-being.',
    highlight: 'Coordinates agile delivery across client engagements.'
  },
  {
    id: 'himanshi',
    name: 'Himanshi',
    role: 'Talent Acquisition & People Lead',
    image: '/images/team/Himanshi Profile phto copy.webp',
    tenure: '3+ Years at WitQualis',
    quote: 'We strive to make every team member feel valued from day one. Seeing our engineers grow into squad leaders is the most rewarding part of my journey.',
    highlight: 'Leads talent acquisition and onboarding.'
  }
];

export default function EmployeeTestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>VOICES OF WITQUALIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            EMPLOYEE STORIES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              HEAR FROM OUR TEAM
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            Discover what our developers, designers, and leaders say about their day-to-day experience, mentorship, and career growth at WitQualis.
          </p>
        </div>

        {/* 6 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onMouseEnter={() => soundFx.playHover()}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-red-100" />
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 font-sans">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Highlight Tag */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-600 flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-[#E31E24] transition-colors flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-950 font-sans group-hover:text-[#E31E24] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500">{item.role}</p>
                  <p className="text-[10px] font-mono text-[#E31E24] font-bold">{item.tenure}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
