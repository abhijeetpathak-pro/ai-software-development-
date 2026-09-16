// src/app/contact/ContactFormSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Lock, UploadCloud, Sparkles, MessageSquare, PhoneCall, AlertCircle } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';

export const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'SaaS Development',
  'AI & Automation',
  'Cloud & DevOps',
  'Software Consulting',
  'Dedicated Engineering Squad'
];

export const budgetOptions = [
  'Select Budget (Optional)',
  '< $5,000 (Small Scope / MVP)',
  '$5,000 - $15,000 (Standard Project)',
  '$15,000 - $35,000 (Mid-to-Large Scale)',
  '$35,000+ (Enterprise / Dedicated Squad)',
  'Hourly / Monthly Staff Augmentation',
  'Flexible / Open to Discussion'
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    service: 'Web Development',
    budgetRange: '',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Listen for external service select events (from Services section)
  useEffect(() => {
    const handleSelectService = (e: CustomEvent<string>) => {
      if (e.detail && serviceOptions.includes(e.detail)) {
        setFormData((prev) => ({ ...prev, service: e.detail }));
      }
    };

    window.addEventListener('select-service' as any, handleSelectService as any);
    return () => {
      window.removeEventListener('select-service' as any, handleSelectService as any);
    };
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      soundFx.playChirp();
      return;
    }

    setSubmitting(true);
    soundFx.playClick();

    // Simulate API transmission
    setTimeout(() => {
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
          fullName: '',
          workEmail: '',
          phoneNumber: '',
          companyName: '',
          service: 'Web Development',
          budgetRange: '',
          projectDetails: ''
        });
        setErrors({});
      }, 6000);
    }, 800);
  };

  return (
    <section id="contact-form" className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20 scroll-mt-20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL &amp; ENCRYPTED TRANSMISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            CONTACT FORM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              SEND YOUR PROJECT INQUIRY
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            Tell us about your project or team requirement. Our technical solutions director will review your details and follow up within 24 to 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Guarantees & Step Guidance */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider pb-3 border-b border-slate-100">
                <Sparkles className="w-4 h-4" />
                <span>What Happens After Submitting?</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31E24] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 font-sans text-sm">Review &amp; Feasibility</p>
                    <p className="text-slate-500 font-sans text-xs mt-0.5">Our Solutions Architect analyzes requirements and tech stack suitability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31E24] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 font-sans text-sm">30-Min Discovery Call</p>
                    <p className="text-slate-500 font-sans text-xs mt-0.5">We discuss timeline, squad composition, milestones, and commercial terms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#E31E24] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 font-sans text-sm">Sprint Kickoff</p>
                    <p className="text-slate-500 font-sans text-xs mt-0.5">Sprints can start with a trial period, with code ownership under the signed contract.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & NDA Pledge */}
            <div className="rounded-3xl border border-red-200 bg-red-50/60 p-6 text-xs text-slate-700 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#E31E24] font-bold uppercase font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict NDA &amp; IP Protection</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                All transmitted information and documents are governed under strict mutual non-disclosure. Clients retain intellectual property ownership of code delivered under the engagement.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-xs space-y-3 shadow-sm font-sans">
              <p className="font-bold text-slate-900 text-sm">Need immediate assistance?</p>
              <p className="text-slate-600 text-xs">Reach out directly to our global team:</p>
              <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
                <a 
                  href="mailto:info@witqualis.com" 
                  className="flex items-center gap-2 text-slate-800 hover:text-[#E31E24] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  <span>info@witqualis.com</span>
                </a>
                <a 
                  href="https://wa.me/919289633637" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-800 hover:text-emerald-600 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>WhatsApp: +91 9289633637</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 uppercase font-display">Inquiry Transmitted Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our technical solutions director has received your project details and will be in touch.
                  </p>
                  <div className="pt-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
                      A copy has been routed to our Lead Solutions Architect.
                    </span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Service / Requirement Quick Pills */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-2">
                      Service / Requirement <span className="text-[#E31E24]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {serviceOptions.map((srv) => {
                        const isSelected = formData.service === srv;
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => {
                              soundFx.playPop();
                              setFormData({ ...formData, service: srv });
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                              isSelected
                                ? 'bg-[#E31E24] text-white font-bold shadow-md shadow-red-500/20 scale-[1.02]'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                        Full Name <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        } focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                        Work Email <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => {
                          setFormData({ ...formData, workEmail: e.target.value });
                          if (errors.workEmail) setErrors({ ...errors, workEmail: '' });
                        }}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.workEmail ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                        } focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors`}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.workEmail}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number (Optional) & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                        Phone Number / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+1 (555) 000-0000 or +91 ..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Corp or Startup"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown & Budget Range Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                        Service Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 transition-colors cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                        Budget Range <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((bg) => (
                          <option key={bg} value={bg === 'Select Budget (Optional)' ? '' : bg}>
                            {bg}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project details / Message */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1.5">
                      Project Details / Message <span className="text-[#E31E24]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Briefly describe your project goals, required tech stack, deliverables, or target timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full py-4 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {submitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit / Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 font-mono">
                    Protected by 256-bit encryption • Mutual NDA on File • Response &lt; 24h
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
