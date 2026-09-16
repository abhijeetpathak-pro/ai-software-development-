// src/app/contact/ContactInfoSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Copy, CheckCircle2, MessageSquare, ArrowUpRight, Globe } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

export default function ContactInfoSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative py-20 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            CONTACT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              INFORMATION
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-normal">
            Reach out via email, phone, WhatsApp, or visit our primary development and operational hubs.
          </p>
        </div>

        {/* 4 Cards Grid: Email, Phone/WhatsApp, Office Address, Business Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Business Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider block mb-1">
                PRIMARY INQUIRIES
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                Business Email
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                For project proposals, architecture consultations, or squad hiring.
              </p>

              <div className="space-y-1.5">
                <a
                  href="mailto:info@witqualis.com"
                  className="block p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 hover:text-[#E31E24] transition-colors truncate"
                >
                  info@witqualis.com
                </a>
                <a
                  href="mailto:sales@witqualis.com"
                  className="block p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-600 hover:text-[#E31E24] transition-colors truncate"
                >
                  sales@witqualis.com
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy('info@witqualis.com', 'email')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-200/70 hover:bg-[#E31E24] hover:text-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Primary Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* 2. Phone / WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-emerald-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                <Phone className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                DIRECT &amp; WHATSAPP
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                Phone &amp; WhatsApp
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Instant calling &amp; real-time messaging with our solutions lead.
              </p>

              <div className="space-y-1.5">
                <a
                  href="tel:+919289633637"
                  className="block p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                >
                  +91 9289633637
                </a>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-500">
                  Quick WhatsApp Assistance
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://wa.me/919289633637"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* 3. Office Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.16 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider block mb-1">
                HQ &amp; DELIVERY CENTER
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                Office Address
              </h3>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans shadow-inner">
                <p className="font-semibold text-slate-900 mb-0.5">WitQualis Technologies</p>
                <p>Unit No.712A, 12 Avenue, RPS Group, Sarai Khawaja, Faridabad, Haryana 121001, India</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Unit+No.712A+12+Avenue+RPS+Group+Sarai+Khawaja+Faridabad+Haryana+121001"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-200/70 hover:bg-[#E31E24] hover:text-white text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View On Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* 4. Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.24 }}
            onMouseEnter={() => soundFx.playHover()}
            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                <Clock className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider block mb-1">
                OPERATIONAL TIMINGS
              </span>

              <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2">
                Business Hours
              </h3>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase">Working Days</span>
                  <span className="font-bold text-slate-900">Mon – Fri: 9:00 AM – 7:00 PM IST</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase">Global Support</span>
                  <span className="font-bold text-emerald-600">24/7 Timezone Coverage (US, UK, UAE, AU)</span>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/witqualis_services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/20 cursor-pointer"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
