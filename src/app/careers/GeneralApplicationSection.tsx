// src/app/careers/GeneralApplicationSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, UploadCloud, Sparkles, Mail, ShieldCheck, AlertCircle } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';

export default function GeneralApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: 'Full-Stack Engineering',
    experienceYears: '3–5 years',
    portfolioUrl: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      soundFx.playChirp();
      return;
    }

    setSubmitting(true);
    soundFx.playClick();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          stack: `Careers Domain: ${formData.domain}`,
          experienceYears: formData.experienceYears,
          portfolioUrl: formData.portfolioUrl,
          message: formData.message
        })
      });
    } catch (err) {
      console.error('General application submission error:', err);
    } finally {
      setSubmitting(false);
      soundFx.playSuccess();
      setSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#E31E24', '#dc2626', '#10b981', '#0284c7']
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          domain: 'Full-Stack Engineering',
          experienceYears: '3–5 years',
          portfolioUrl: '',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <section id="general-apply" className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20 scroll-mt-20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TALENT PIPELINE NETWORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display leading-tight">
              DON&apos;T SEE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                RIGHT ROLE?
              </span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We are constantly expanding our engineering squads and frequently create bespoke positions for exceptional developers, designers, and AI specialists.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 font-sans text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-mono">
                <Mail className="w-4 h-4 text-[#E31E24]" />
                <span>Direct HR Transmission</span>
              </div>
              <p className="leading-relaxed">
                Send us your profile and portfolio. Our Talent Acquisition Lead personally reviews every submission and will reach out when an opportunity matches your expertise.
              </p>
              <p className="text-[11px] font-mono text-[#E31E24] font-bold pt-1">
                Direct Email: hr@witqualis.com
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Your resume is treated as confidential and not shared externally without consent.</span>
            </div>
          </div>

          {/* Right Column - General Application Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 uppercase font-display">
                    Profile Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your profile has been added to our senior talent pipeline. Our HR team will reach out as soon as a relevant role opens!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-950 uppercase font-display mb-1">
                    Submit Your Resume
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 font-mono">
                    Fill out your core details below to connect with our talent team.
                  </p>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Ananya Roy"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="ananya@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Domain */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        Primary Technical Domain
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                      >
                        <option value="Frontend Development (React/Next.js)">Frontend Development (React/Next.js)</option>
                        <option value="Backend / Full-Stack (Node/Python)">Backend / Full-Stack (Node/Python)</option>
                        <option value="AI / LLM & Data Engineering">AI / LLM &amp; Data Engineering</option>
                        <option value="Cloud / DevOps / Kubernetes">Cloud / DevOps / Kubernetes</option>
                        <option value="Mobile App (React Native/Flutter)">Mobile App (React Native/Flutter)</option>
                        <option value="UI/UX Product Design">UI/UX Product Design</option>
                        <option value="QA / Automation Testing">QA / Automation Testing</option>
                        <option value="Sales / Marketing / HR">Sales / Marketing / HR</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience & Portfolio */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        Total Experience
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                      >
                        <option value="Fresher (0-1 year)">Fresher (0–1 year)</option>
                        <option value="1-3 years">1–3 years</option>
                        <option value="3-5 years">3–5 years</option>
                        <option value="5-8 years">5–8 years</option>
                        <option value="8+ years (Lead/Principal)">8+ years (Lead / Principal)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        GitHub / LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        placeholder="https://..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Brief Pitch / Message */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                      Brief Message / Dream Role Aspirations
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what kind of problems you love solving, your target stack, and notice period..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Resume Upload Box */}
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:border-red-500 transition-colors bg-slate-50 cursor-pointer">
                    <UploadCloud className="w-6 h-6 text-[#E31E24] mx-auto mb-1" />
                    <p className="text-xs font-mono text-slate-700 font-bold">
                      Upload Resume / CV (PDF or DOCX max 10MB)
                    </p>
                    <p className="text-[11px] text-slate-400">or send via email to hr@witqualis.com</p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full py-4 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {submitting ? <span>Transmitting Profile...</span> : (
                      <>
                        <span>Submit Your Resume</span>
                        <Send className="w-4 h-4" />
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
