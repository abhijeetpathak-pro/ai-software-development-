// src/app/portfolio/StartProjectMeeting.tsx
'use client';

import React from 'react';
import { Calendar, MessageSquare, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function StartProjectMeeting() {
  return (
    <section id="schedule-consultation" className="relative py-20 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main CTA Container */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-14 shadow-xl relative overflow-hidden">
          
          {/* Top Banner Accent */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>DIRECT ARCHITECTURAL CONSULTATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Heading & Description */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 leading-tight font-display">
                LET'S START YOUR PROJECT OR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                  BOOK A DISCOVERY MEETING
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Have a clear vision or need help structuring your tech stack? Speak directly with our Chief Technology Officer and Principal Solutions Architects. We map technical feasibility, sprint velocity, and squad sizing in under 30 minutes.
              </p>

              {/* Guarantees Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>48h Talent Placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Trial Sprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>IP & NDA Terms In Contract</span>
                </div>
              </div>
            </div>

            {/* Right: Meeting Booking Action Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Calendly Booking Card */}
              <a
                href="https://calendly.com/witqualis_services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-2xl border border-red-200 bg-white hover:border-red-500 hover:shadow-lg p-5 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      Book 30-Min Discovery Call
                    </h4>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      Direct Calendly link with our CTO
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp Hotline Card */}
              <a
                href="https://wa.me/919289633637"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-2xl border border-slate-200 bg-white hover:border-red-500 hover:shadow-lg p-5 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-md group-hover:bg-red-600 transition-all">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      Instant WhatsApp Hotline
                    </h4>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      +91 9289633637 (Instant Response)
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
