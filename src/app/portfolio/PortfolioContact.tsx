// src/app/portfolio/PortfolioContact.tsx
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Lock, Copy } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';

const techInterestChips = [
  'AI & LLM RAG',
  'Full-Stack Next.js',
  'Python Data Engineering',
  'Cloud Kubernetes SRE',
  'Mobile (React Native)',
  'Creative WebGL 3D',
  'Dedicated Engineering Squad'
];

export default function PortfolioContact() {
  const [selectedChips, setSelectedChips] = useState<string[]>(['AI & LLM RAG']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Immediate (Under 48 Hours)',
    budget: '$5,000 - $15,000 / mo',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleChip = (chip: string) => {
    soundFx.playPop();
    if (selectedChips.includes(chip)) {
      setSelectedChips(selectedChips.filter((c) => c !== chip));
    } else {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        company: '',
        timeline: 'Immediate (Under 48 Hours)',
        budget: '$5,000 - $15,000 / mo',
        message: ''
      });
    }, 5000);
  };

  const copyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText('info@witqualis.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-requisition" className="relative py-24 bg-white text-slate-900 border-t border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>256-BIT ENCRYPTED TRANSMISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            INITIATE PROJECT SCOPING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              OR DEVELOPER REQUISITION
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-mono">
            Tell us about your technical requirements. We assign pre-vetted engineers and schedule architectural discovery in under 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Endpoints & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Enterprise Engagements</h3>
              <p className="text-xs text-slate-500 font-mono mb-6 leading-relaxed">
                Connect with our solutions director for custom software delivery and workforce augmentation.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Sales & Scoping</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">info@witqualis.com</p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Box */}
                <a
                  href="https://wa.me/919289633637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-500 flex items-center justify-between group transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Instant WhatsApp</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        +91 9289633637
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 font-bold">Chat →</span>
                </a>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="rounded-3xl border border-red-200 bg-red-50/40 p-6 font-mono text-xs text-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise SLA & NDA Pledge</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                All inquiries are covered by mutual non-disclosure.
              </p>
            </div>
          </div>

          {/* Right Column: Requisition Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 uppercase font-display">Transmission Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
                    Our Solutions Architect is preparing a tailored talent portfolio and will reach out within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Selectable Tech Chips */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-3">
                      Required Technology Capabilities *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {techInterestChips.map((chip) => {
                        const isSelected = selectedChips.includes(chip);
                        return (
                          <button
                            type="button"
                            key={chip}
                            onClick={() => toggleChip(chip)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                              isSelected
                                ? 'bg-red-600 text-white font-bold shadow-sm'
                                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Vance"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="michael@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Company & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Company Name / URL
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Vance Analytics"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900"
                      >
                        <option value="Immediate (Under 48 Hours)">Immediate (Under 48 Hours)</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Scope Message */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-slate-500 mb-1.5">
                      Project Goals / Squad Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline tech requirements, key deliverables, or frameworks needed..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-red-600 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <span>Transmit Project Requisition</span>
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
