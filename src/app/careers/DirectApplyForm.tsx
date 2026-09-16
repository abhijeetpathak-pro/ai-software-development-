// src/app/careers/DirectApplyForm.tsx
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Copy, Sparkles, UploadCloud } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';

export default function DirectApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryStack: '',
    experienceYears: '4-6 Years',
    portfolioUrl: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          stack: `Careers Application: ${formData.primaryStack}`,
          experienceYears: formData.experienceYears,
          portfolioUrl: formData.portfolioUrl,
          message: `Application Notes: ${formData.notes || 'Direct candidate resume submission.'}`
        })
      });
    } catch (err) {
      console.error('Candidate application submission error:', err);
    } finally {
      soundFx.playSuccess();
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#e11d48', '#dc2626', '#10b981', '#0284c7']
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          primaryStack: '',
          experienceYears: '4-6 Years',
          portfolioUrl: '',
          notes: ''
        });
      }, 5000);
    }
  };

  const copyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText('hr@witqualis.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="direct-apply" className="relative py-24 bg-[#fafafa] text-slate-900 border-t border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GENERAL CANDIDATE PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            DON'T SEE YOUR EXACT STACK? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              SEND YOUR RESUME DIRECTLY
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-mono">
            We are always scouting exceptional engineering talent ahead of incoming enterprise client requisitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct HR Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct HR & Talent Acquisition</h3>
              <p className="text-xs text-slate-500 font-mono mb-6 leading-relaxed">
                Connect directly with our Talent Acquisition team for fast-track career inquiries.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">HR / Careers</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">hr@witqualis.com</p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 transition-colors shadow-sm"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Box */}
                <a
                  href="https://wa.me/919289633637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">HR WhatsApp Hotline</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        +91 9289633637
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 font-bold">Chat →</span>
                </a>
              </div>
            </div>

            {/* Privacy Pledge */}
            <div className="rounded-3xl border border-red-200 bg-red-50/50 p-6 font-mono text-xs text-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidential Applications</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Your application and current employment details are kept strictly confidential. We never contact your current employer without explicit written permission.
              </p>
            </div>
          </div>

          {/* Right Column: General Submission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 uppercase font-display">Resume Transmitted!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
                    Our Talent Acquisition Lead will review your profile against active and upcoming squad pipelines and follow up within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Primary Tech Stack *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.primaryStack}
                        onChange={(e) => setFormData({ ...formData, primaryStack: e.target.value })}
                        placeholder="e.g. Go, Rust, Flutter, Elixir, Scala"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900"
                      >
                        <option value="2-4 Years">2-4 Years (Mid-Level)</option>
                        <option value="4-6 Years">4-6 Years (Senior)</option>
                        <option value="7-10 Years">7-10 Years (Staff/Lead)</option>
                        <option value="10+ Years">10+ Years (Principal/Architect)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        GitHub / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        placeholder="https://github.com/username"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Drag and Drop Resume */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                      Upload Resume PDF
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:border-red-500 transition-colors bg-slate-50 cursor-pointer">
                      <UploadCloud className="w-6 h-6 text-red-600 mx-auto mb-1" />
                      <p className="text-xs font-mono text-slate-600 font-bold">
                        Click to upload Resume PDF (Max 10MB)
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Submit Candidate Profile</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
