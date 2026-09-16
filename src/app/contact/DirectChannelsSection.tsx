// src/app/contact/DirectChannelsSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MessageSquare, CheckCircle2, Copy, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function DirectChannelsSection() {
  const [copiedSales, setCopiedSales] = useState(false);
  const [copiedHr, setCopiedHr] = useState(false);

  const copyEmail = (email: string, type: 'sales' | 'hr') => {
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    if (type === 'sales') {
      setCopiedSales(true);
      setTimeout(() => setCopiedSales(false), 2000);
    } else {
      setCopiedHr(true);
      setTimeout(() => setCopiedHr(false), 2000);
    }
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>INSTANT COMMUNICATION GATEWAYS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            DIRECT ENTERPRISE & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              RECRUITMENT CHANNELS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-mono">
            Choose your preferred communication medium. All project requests receive a response in under 24 hours.
          </p>
        </div>

        {/* 4 Direct Channel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Enterprise Sales & Scoping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-red-500/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider block mb-1">
                PROJECT SCOPING & SOW
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                Enterprise Sales
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Architecture consultation, squad scoping, and commercial proposals.
              </p>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 truncate shadow-inner">
                info@witqualis.com
              </div>
            </div>

            <button
              onClick={() => copyEmail('info@witqualis.com', 'sales')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-200/80 hover:bg-red-600 hover:text-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {copiedSales ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Sales Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Card 2: HR & Careers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-red-500/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider block mb-1">
                TALENT & ONBOARDING
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                HR & Recruitment
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Career opportunities, engineering interview stages, and partnerships.
              </p>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 truncate shadow-inner">
                hr@witqualis.com
              </div>
            </div>

            <button
              onClick={() => copyEmail('hr@witqualis.com', 'hr')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-200/80 hover:bg-red-600 hover:text-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {copiedHr ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy HR Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Card 3: Instant WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-emerald-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                INSTANT RESPONSE HOTLINE
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                WhatsApp Connect
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Chat directly with our Technical Solutions Director in real time.
              </p>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 truncate shadow-inner">
                +91 9289633637
              </div>
            </div>

            <a
              href="https://wa.me/919289633637"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 4: Discovery Call on Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-red-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Calendar className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider block mb-1">
                SCHEDULE DISCOVERY
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                30-Min CTO Call
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Map technical feasibility, sprint velocity, and squad sizing directly.
              </p>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 truncate shadow-inner">
                Direct Calendly Slot
              </div>
            </div>

            <a
              href="https://calendly.com/witqualis_services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
