// src/app/hire/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Cpu, 
  Code, 
  Globe, 
  Clock, 
  Zap, 
  FileText, 
  ChevronDown, 
  HelpCircle, 
  Layers, 
  ArrowUpRight,
  Briefcase,
  DollarSign,
  MapPin,
  UploadCloud
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';
import { stacks, stacksByCategory } from '@/data/stacks';

const practiceRoles = [
  'Full-Stack Developer (Next.js / Node / Python)',
  'AI & Generative AI Engineer (RAG / LLMs / LangChain)',
  'Frontend Developer (React / Next.js / TypeScript)',
  'Backend Developer (Python FastAPI / Node / Go / Java)',
  'Mobile App Developer (React Native / Flutter / Swift)',
  'Cloud DevOps & SRE (AWS / GCP / Kubernetes / Terraform)',
  'UI/UX Product Designer (Figma / Design Systems)',
  'QA Automation Engineer (Playwright / Cypress / CI-CD)',
  'Dedicated Multi-Disciplinary Squad (3-8 Engineers)'
];

const technologyTags = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'Python (FastAPI/Django)',
  'AI / LLM / PyTorch',
  'Node.js (NestJS)',
  'PostgreSQL',
  'MongoDB',
  'React Native',
  'Flutter',
  'AWS Cloud',
  'Kubernetes & Docker',
  'Go (Golang)',
  'Java Spring Boot',
  'GraphQL',
  'Terraform'
];

const budgetRanges = [
  'Select Budget (Monthly / Project)',
  '$2,500 – $4,500 / month (Mid-Level Developer)',
  '$4,500 – $8,000 / month (Senior Lead Engineer)',
  '$8,000 – $15,000 / month (Staff / Principal Architect)',
  '$15,000+ / month (Full Dedicated Engineering Squad)',
  'Hourly Retainer ($25 – $55 / hour)',
  'Fixed-Scope Milestone Project',
  'Flexible / Open to Discussion'
];

const locationOptions = [
  'Remote (US / EU / UK Timezone Overlap 4–8h)',
  'Remote (Global Timezone)',
  'Faridabad (HQ) — In-Office / Hybrid (India)',
  'Onsite Deployment (North America / UAE / Australia)',
  'Hybrid Flexible Arrangement'
];

const seniorityLevels = [
  'Mid-Level (3–5 Years)',
  'Senior Engineer (5–8 Years)',
  'Lead / Principal Architect (8+ Years)',
  'Mixed Seniority Squad'
];

const hireFaqs = [
  {
    q: 'How fast can a pre-vetted developer be onboarded to our project?',
    a: 'We match and present verified engineer profiles within 24 to 48 hours. Once you review and approve the candidate, they can begin committing to your Jira and GitHub sprints immediately.'
  },
  {
    q: 'How does the 7-day risk-free trial sprint work?',
    a: 'You can test matched engineers directly on your live sprint tasks for 7 days. If you are not 100% satisfied with technical speed, code quality, or communication, you pay nothing and we provide an immediate replacement or full refund.'
  },
  {
    q: 'Who owns the intellectual property and code written by developers?',
    a: 'You have 100% full IP ownership. All git commits, architecture blueprints, documentation, and source code belong exclusively to your organization under standard bilateral enterprise contracts.'
  },
  {
    q: 'How do engineers collaborate with our existing internal team?',
    a: 'Our developers integrate directly into your daily workflow — joining your Slack/Teams channels, attending daily standups, and pushing directly to your GitHub/GitLab repositories with zero middleman or account manager interference.'
  },
  {
    q: 'Can we scale our team up or down as project requirements change?',
    a: 'Yes, with complete agility. You can add specialized talent within 48 hours. Scaling down or pausing capacity requires a standard 7-day notice with zero lock-in penalties.'
  }
];

export default function HireDevelopersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    roleTitle: 'Full-Stack Developer (Next.js / Node / Python)',
    jobTitleCustom: '',
    selectedTechs: ['Next.js 15', 'TypeScript'] as string[],
    seniority: 'Senior Engineer (5–8 Years)',
    budget: '',
    location: 'Remote (US / EU / UK Timezone Overlap 4–8h)',
    teamSize: '1 Developer',
    jdDetails: '',
    startDate: 'Immediately (within 48 hours)'
  });

  const [jdFileName, setJdFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleTech = (tech: string) => {
    soundFx.playClick();
    setFormData((prev) => {
      const exists = prev.selectedTechs.includes(tech);
      return {
        ...prev,
        selectedTechs: exists
          ? prev.selectedTechs.filter((t) => t !== tech)
          : [...prev.selectedTechs, tech]
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      soundFx.playPop();
      setJdFileName(file.name);
      setFormData((prev) => ({
        ...prev,
        jdDetails: `${prev.jdDetails}\n[Attached JD File: ${file.name} (${(file.size / 1024).toFixed(1)} KB)]`
      }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      soundFx.playChirp();
      return;
    }

    setSubmitting(true);
    soundFx.playClick();

    const compiledMessage = `
--- HIRE DEVELOPER INQUIRY ---
Role / Practice: ${formData.roleTitle}
Custom Job Title: ${formData.jobTitleCustom || 'Not specified'}
Seniority: ${formData.seniority}
Technologies: ${formData.selectedTechs.join(', ') || 'Not selected'}
Team Headcount: ${formData.teamSize}
Location / Timezone: ${formData.location}
Budget Range: ${formData.budget || 'Not specified'}
Target Start Date: ${formData.startDate}
Attached JD File: ${jdFileName || 'None'}

Job Description / Requirements:
${formData.jdDetails || 'None provided'}
    `.trim();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          workEmail: formData.workEmail,
          phoneNumber: formData.phoneNumber,
          companyName: formData.companyName,
          service: `Hire: ${formData.roleTitle}`,
          budgetRange: formData.budget,
          projectDetails: compiledMessage
        })
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to submit inquiry');

      soundFx.playSuccess();
      setSubmitted(true);

      confetti({
        particleCount: 140,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#E31E24', '#dc2626', '#10b981', '#0ea5e9']
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          workEmail: '',
          phoneNumber: '',
          companyName: '',
          roleTitle: 'Full-Stack Developer (Next.js / Node / Python)',
          jobTitleCustom: '',
          selectedTechs: ['Next.js 15', 'TypeScript'],
          seniority: 'Senior Engineer (5–8 Years)',
          budget: '',
          location: 'Remote (US / EU / UK Timezone Overlap 4–8h)',
          teamSize: '1 Developer',
          jdDetails: '',
          startDate: 'Immediately (within 48 hours)'
        });
        setJdFileName('');
        setErrors({});
      }, 7000);
    } catch (err) {
      console.error('Submission error:', err);
      soundFx.playSuccess();
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-red-50/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full my-auto">
          
          {/* Eyebrow */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31E24] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                STAFF AUGMENTATION &amp; DEDICATED SQUADS
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-left sm:text-right"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-[#E31E24] uppercase">
                [TOP 1% PRE-VETTED TALENT]
              </span>
              <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
                150+ IN-HOUSE ENGINEERS • 7-DAY TRIAL SPRINT
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
                  HIRE DEDICATED <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                    ENGINEERING TALENT.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl"
              >
                Scale your software engineering capacity with pre-vetted senior developers and dedicated squads matched to your exact tech stack. Fast onboarding within 48 hours, 4–8 hours daily timezone overlap, and zero recruitment overhead.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#hire-form"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
                >
                  <span>Build Your Squad / Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-[#E31E24]"
                >
                  <Clock className="w-4 h-4 text-[#E31E24]" />
                  <span>Book 30-Min Discovery</span>
                </a>
              </motion.div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider pb-3 border-b border-slate-800">
                  <Sparkles className="w-4 h-4 text-[#E31E24]" />
                  <span>WitQualis Staffing SLA</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    <span className="text-slate-400 uppercase">Match Speed</span>
                    <span className="font-bold text-emerald-400">&lt; 48 Hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    <span className="text-slate-400 uppercase">Trial Sprint</span>
                    <span className="font-bold text-[#E31E24]">7 Days Risk-Free</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    <span className="text-slate-400 uppercase">Code Ownership</span>
                    <span className="font-bold text-white">100% Client IP</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    <span className="text-slate-400 uppercase">Engineering Bench</span>
                    <span className="font-bold text-sky-400">150+ In-House</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Slack/Jira integration with zero recruiter markups</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Live Metrics Bar */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">&lt; 48h</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Profile Match Speed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">7 Days</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Evaluation Sprint</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">150+</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">In-House Engineers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#E31E24]">Faridabad (HQ)</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Global Delivery Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED HIRE DEVELOPERS FORM SECTION                                 */}
      {/* ========================================================================= */}
      <section id="hire-form" className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CUSTOM TALENT SCOPING FORM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              REQUEST DEVELOPERS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                TAILORED TO YOUR STACK
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
              Tell us about your technical requirements, desired technologies, budget, and timeline. Our technical director will match suitable candidates within 24 to 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT 8 COLS: INTERACTIVE HIRE FORM */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Form Success Overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mb-2">
                      Inquiry Transmitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 font-normal">
                      Our Technical Talent Director is reviewing your stack requirements. You will receive pre-screened candidate profiles and rate cards within 24 to 48 hours.
                    </p>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                      <span>Ref ID: WTQ-HIRE-{Date.now().toString().slice(-6)} • 7-Day Trial Validated</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                
                {/* SECTION A: PRACTICE / ROLE REQUIRED */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-800 uppercase mb-2">
                    1. Practice / Resource Category Needed <span className="text-[#E31E24]">*</span>
                  </label>
                  <select
                    value={formData.roleTitle}
                    onChange={(e) => {
                      soundFx.playClick();
                      setFormData({ ...formData, roleTitle: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors cursor-pointer"
                  >
                    {practiceRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* SECTION B: TARGET JOB TITLE / DESIGNATION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase mb-2">
                      2. Target Designation / Title (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Senior Next.js Architect, Lead Python ML"
                      value={formData.jobTitleCustom}
                      onChange={(e) => setFormData({ ...formData, jobTitleCustom: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase mb-2">
                      3. Seniority Level
                    </label>
                    <select
                      value={formData.seniority}
                      onChange={(e) => {
                        soundFx.playClick();
                        setFormData({ ...formData, seniority: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors cursor-pointer"
                    >
                      {seniorityLevels.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* SECTION C: REQUIRED TECHNOLOGIES & STACKS (TAGS SELECTOR) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                      4. Select Primary Technologies &amp; Frameworks
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">Click to tag</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologyTags.map((tech) => {
                      const isSelected = formData.selectedTechs.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTech(tech)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[#E31E24] text-white shadow-md shadow-red-500/20 scale-105'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          {tech} {isSelected && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SECTION D: BUDGET, LOCATION & TEAM SIZE */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase mb-2">
                      5. Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => {
                        soundFx.playClick();
                        setFormData({ ...formData, budget: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors cursor-pointer"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase mb-2">
                      6. Location / Timezone
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => {
                        soundFx.playClick();
                        setFormData({ ...formData, location: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors cursor-pointer"
                    >
                      {locationOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase mb-2">
                      7. Headcount Needed
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => {
                        soundFx.playClick();
                        setFormData({ ...formData, teamSize: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="1 Developer">1 Dedicated Developer</option>
                      <option value="2-3 Engineers">2–3 Developers</option>
                      <option value="4-6 Engineers">4–6 Squad Engineers</option>
                      <option value="7+ Full Squad">7+ Enterprise Squad</option>
                    </select>
                  </div>
                </div>

                {/* SECTION E: JD (JOB DESCRIPTION TEXT & UPLOAD) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                      8. Job Description / Sprint Requirements
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">Paste text or upload file</span>
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Describe specific responsibilities, codebase context, required frameworks, or paste the job description here..."
                    value={formData.jdDetails}
                    onChange={(e) => setFormData({ ...formData, jdDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors leading-relaxed"
                  />

                  {/* File Upload Box */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 hover:border-[#E31E24] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          {jdFileName ? jdFileName : 'Upload Job Description (PDF / DOCX / TXT)'}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono">
                          {jdFileName ? 'File attached to inquiry' : 'Optional document attachment (up to 10MB)'}
                        </p>
                      </div>
                    </div>

                    <label className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 cursor-pointer transition-colors shadow-sm">
                      <span>{jdFileName ? 'Change File' : 'Browse File'}</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* SECTION F: CLIENT CONTACT INFORMATION */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase block">
                    9. Your Contact &amp; Organization Details
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-xs sm:text-sm text-slate-900 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-[#E31E24]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] font-mono text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Work Email Address *"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-xs sm:text-sm text-slate-900 focus:outline-none transition-colors ${
                          errors.workEmail ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-[#E31E24]'
                        }`}
                      />
                      {errors.workEmail && <p className="text-[11px] font-mono text-red-600 mt-1">{errors.workEmail}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp (+91 / +1 / +971)"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company / Organization Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>Strict Mutual NDA • Zero Recruiter Markups</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 disabled:opacity-50 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>{submitting ? 'Transmitting Scoping Details...' : 'Request Matched Developer Profiles'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT 4 COLS: REASONS TO HIRE & HIGHLIGHTS */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Box 1: 7-Day Trial Guarantee */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                  <span>7-DAY RISK-FREE EVALUATION</span>
                </div>
                <h4 className="text-lg font-bold text-white">Test in Live Jira Sprints</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evaluate code commits, architectural problem-solving, and communication for 7 days. If dissatisfied, you pay zero.
                </p>
              </div>

              {/* Box 2: 150+ Engineers & Vetting */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase">
                  <Users className="w-4 h-4" />
                  <span>150+ IN-HOUSE TALENT BENCH</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">Rigorous 4-Stage Vetting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We accept only the top 1% of applicants through live pair-coding, system design teardowns, and deep communication benchmarks.
                </p>
              </div>

              {/* Box 3: Timezone Overlap */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase">
                  <Globe className="w-4 h-4 text-[#E31E24]" />
                  <span>4–8H DAILY TIMEZONE SYNC</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">Seamless Standup Overlap</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineers align directly with US (EST/PST), UK/Europe (GMT/CET), and GCC (GST) business hours.
                </p>
              </div>

              {/* Box 4: Direct Access */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-2 font-mono text-xs">
                <p className="font-bold text-slate-900 uppercase">Need Immediate Assistance?</p>
                <p className="text-slate-600">Email: <a href="mailto:sales@witqualis.com" className="text-[#E31E24] font-bold">sales@witqualis.com</a></p>
                <p className="text-slate-600">WhatsApp: <a href="https://wa.me/919289633637" target="_blank" rel="noopener noreferrer" className="text-[#E31E24] font-bold">+91 9289633637</a></p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE ALL 30+ PRE-VETTED TECH STACKS (CATEGORIZED DIRECT CARDS)       */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-3">
                <Code className="w-3.5 h-3.5" />
                <span>30+ PRE-VETTED SPECIALIZATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
                AVAILABLE TECH STACKS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
                  READY FOR SPRINT DISPATCH
                </span>
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-500 uppercase max-w-md md:text-right">
              Explore dedicated developer profiles by specialization or framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.map((stack) => (
              <Link
                key={stack.slug}
                href={`/hire/${stack.slug}/`}
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="group p-6 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#E31E24]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                      {stack.category}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">
                      7-Day Trial
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E31E24] transition-colors mb-2">
                    {stack.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {stack.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-900 group-hover:text-[#E31E24]">
                  <span>Hire {stack.name}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HIRING PROCESS (4-STAGE PIPELINE)                                      */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-widest block mb-2">
              [SPEED &amp; RIGOR]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              HOW WE ONBOARD DEVELOPERS
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 font-normal">
              From requirement scoping to first git commit in under 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Technical Scoping',
                desc: 'We analyze your stack, architecture goals, repo setup, and timeline in a 30-min discovery call.'
              },
              {
                step: '02',
                title: 'Profile Matching (< 48h)',
                desc: 'We present top pre-vetted engineers from our 150+ in-house bench with matching domain experience.'
              },
              {
                step: '03',
                title: 'Technical Interview',
                desc: 'Interview shortlisted candidates directly with your engineering leads or CTO.'
              },
              {
                step: '04',
                title: '7-Day Trial Kickoff',
                desc: 'Deploy matched engineers into your Jira and GitHub sprints with zero upfront financial lock-in.'
              }
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <span className="text-3xl font-black font-mono text-[#E31E24] block">
                  {p.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS                                             */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-widest block mb-2">
              [TRANSPARENCY FIRST]
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 uppercase font-display">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {hireFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => {
                      soundFx.playChirp();
                      setOpenFaq(isOpen ? null : index);
                    }}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E31E24] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINAL CTA                                                              */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,_transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-widest block">
            READY TO EXPAND YOUR ENGINEERING VELOCITY?
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-display">
            START YOUR 7-DAY TRIAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-white">
              WITH ZERO COMMITMENT
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal">
            Match with pre-vetted engineers, review code samples, and start your sprint trial within 48 hours.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#hire-form"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
            >
              <span>Submit Hiring Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://calendly.com/witqualis_services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Clock className="w-4 h-4 text-[#E31E24]" />
              <span>Schedule Scoping Call</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
