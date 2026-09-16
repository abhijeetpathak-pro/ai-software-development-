// src/app/our-team/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Copy, Sparkles, Phone, Mail, MapPin, ArrowRight, Loader2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '@/lib/AudioEngine';

export default function ContactSection(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleNeeded: 'Full-Stack Developer',
    timeline: 'Immediate (Next 48 Hours)',
    message: ''
  });

  const handleCopyEmail = (email: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          stack: `${formData.roleNeeded} (Timeline: ${formData.timeline})`,
          message: formData.message,
        }),
      });
    } catch (err) {
      // Graceful fallback
    } finally {
      setSubmitting(false);
      setFormSubmitted(true);

      // Trigger full-screen celebratory confetti
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#e11d48', '#dc2626', '#34d399', '#f43f5e']
      });
    }
  };

  return (
    <section id="wq-contact" className="relative py-28 bg-[#fafafa] text-slate-900 overflow-hidden selection:bg-red-500/20">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Radiant Glowing Beams */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT TALENT REQUISITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            Onboard Dedicated Developers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              In Under 48 Hours
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Schedule an architecture scoping session with our lead directors or transmit your immediate engineering squad requisition.
          </p>
        </motion.div>

        {/* Two-Column Frosted Glass Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Locations in Glass */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card in Frosted Glass */}
            <div className="p-8 rounded-[32px] bg-white/85 border border-slate-200/90 backdrop-blur-xl shadow-xl flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  DIRECT CHANNELS
                </span>
                <h3 className="text-2xl font-bold text-slate-950 mt-1">Talk With Leadership</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Have a mission-critical release or looking for specialized AI architects? Contact our directors directly.
                </p>
              </div>

              {/* Email Pill */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Primary Inbox</span>
                    <span className="text-xs font-mono font-bold text-slate-900 truncate block">sales@witqualis.com</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyEmail('sales@witqualis.com')}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 text-white font-mono text-[11px] font-bold hover:bg-red-700 transition-all cursor-pointer shrink-0 shadow-sm"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Trial Sprint Badge */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
                </span>
                <div className="flex flex-col text-xs font-mono">
                  <span className="text-emerald-800 font-bold">TRIAL SPRINT AVAILABLE</span>
                  <span className="text-emerald-600 text-[10px]">Zero financial commitment during evaluation</span>
                </div>
              </div>
            </div>

            {/* Global Hubs in Frosted Glass */}
            <div className="p-6 rounded-[28px] bg-white/85 border border-slate-200/90 backdrop-blur-xl shadow-lg">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                GLOBAL ENGINEERING HUBS
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>New Delhi (HQ)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Dubai (UAE)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Sydney (AU)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>New York (USA)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Requisition Form in Frosted Glass */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/90 border border-slate-200/90 backdrop-blur-2xl shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
                    <Sparkles className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 uppercase font-display">
                    Requisition Transmitted
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                    Thank you! Our technical staffing director will review your profile requirements and contact you within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        roleNeeded: 'Full-Stack Developer',
                        timeline: 'Immediate (Next 48 Hours)',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-red-600 text-white font-mono text-xs font-bold uppercase hover:bg-red-700 transition-all cursor-pointer shadow-md shadow-red-500/20"
                  >
                    Submit Another Requisition
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
                      <Send className="w-3.5 h-3.5" />
                      <span>DEVELOPER SQUAD SCOPE</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">FAST ONBOARDING</span>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-700 uppercase font-semibold">Your Name &amp; Company</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer / TechCorp Global"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-700 uppercase font-semibold">Business Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@techcorp.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all"
                    />
                  </div>

                  {/* Role Needed & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-700 uppercase font-semibold">Role Needed</label>
                      <select
                        value={formData.roleNeeded}
                        onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all cursor-pointer"
                      >
                        <option value="Senior AI & RAG Engineer">Senior AI &amp; RAG Engineer</option>
                        <option value="Full-Stack Developer (Next.js / Node)">Full-Stack Developer (Next.js / Node)</option>
                        <option value="Creative WebGL & Frontend Architect">Creative WebGL &amp; Frontend Architect</option>
                        <option value="Cloud DevOps & Kubernetes SRE">Cloud DevOps &amp; Kubernetes SRE</option>
                        <option value="Dedicated Full Squad (3-5 Engineers)">Dedicated Full Squad (3-5 Engineers)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-700 uppercase font-semibold">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all cursor-pointer"
                      >
                        <option value="Immediate (Next 48 Hours)">Immediate (Next 48 Hours)</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Exploratory Architecture Call">Exploratory Architecture Call</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-700 uppercase font-semibold">Project Scope / Technical Requirements</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current tech stack, sprint goals, or developer headcount requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    onMouseEnter={() => soundFx.playHover()}
                    className="mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-full bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all cursor-pointer shadow-lg shadow-red-500/25 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>TRANSMITTING REQUISITION...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT TALENT REQUISITION</span>
                      </>
                    )}
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