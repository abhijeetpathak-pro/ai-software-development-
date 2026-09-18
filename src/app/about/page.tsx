// src/app/about/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Cpu, Users, Award, Clock, ArrowRight, CheckCircle2, 
  Sparkles, Building2, Zap, HeartHandshake, Globe, Lock, GitBranch, 
  Terminal, BarChart3, HelpCircle, ChevronDown, Check, Star
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import Link from 'next/link';

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Trial Sprint Before You Commit',
    subtitle: 'Evaluate On Your Own Codebase',
    desc: 'New engagements can begin with a trial sprint on your actual codebase and sprint board, so you can assess a developer\u2019s velocity, communication and code quality before committing to a longer engagement.'
  },
  {
    icon: Cpu,
    title: 'Stack-Specific Matching',
    subtitle: 'Matched To Your Framework, Not A Generalist',
    desc: 'We match engineers to your specific framework and stack (for example Next.js, PyTorch, Kubernetes, or Go microservices) rather than assigning generalists who need to ramp up on the job.'
  },
  {
    icon: Users,
    title: 'Direct Engineering Visibility',
    subtitle: 'Same Access Your Internal Team Has',
    desc: 'You see the same commits, standups, sprint tickets and pull requests your internal team sees, with a direct line to the developers on your engagement.'
  },
  {
    icon: Zap,
    title: 'Flexible Engagements',
    subtitle: 'Scale Or Adjust As Your Roadmap Changes',
    desc: 'Engagements can scale up, change roles, or wind down as your roadmap evolves, with notice terms agreed at contract signing.'
  }
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    desc: 'Witqualis was founded as a software engineering and staff augmentation studio.'
  },
  {
    year: '2021',
    title: 'Staff Augmentation Expansion',
    desc: 'Witqualis expanded into staff augmentation, placing pre-vetted developers directly into client sprint teams alongside its product engineering work.'
  },
  {
    year: '2022',
    title: 'Global Client Base',
    desc: 'Witqualis has delivered engagements for clients across India, the Middle East, Australia, and North America, supported by offices in each region.'
  },
  {
    year: '2024',
    title: 'AI and Cloud Practice',
    desc: 'Witqualis added AI, machine learning, and cloud solutions to its service lines, alongside its existing web, mobile and staff augmentation offerings.'
  }
];

const engineeringStandards = [
  {
    icon: Terminal,
    title: 'Structured Technical Screening',
    desc: 'Candidates go through multiple stages of technical screening, including system design discussion, hands-on coding, and communication assessment.'
  },
  {
    icon: Lock,
    title: 'NDA-Backed Engagements',
    desc: 'Engagements are covered by a mutual non-disclosure agreement, with secure workspace provisioning for client codebases and credentials.'
  },
  {
    icon: GitBranch,
    title: 'Direct Repository Access',
    desc: 'Source code, commits, pull requests and documentation are committed directly to your GitHub or GitLab repositories.'
  },
  {
    icon: Globe,
    title: 'Overlapping Working Hours',
    desc: 'Distributed engineering teams work overlapping hours with clients in North America, Europe and the Middle East to support daily standups and reviews.'
  }
];

const aboutFaqs = [
  {
    q: 'How does Witqualis vet and select developers?',
    a: 'Candidates go through a multi-step technical evaluation that includes a system design or architecture discussion, hands-on coding on a realistic problem, and a communication assessment. Developers are matched to client engagements based on their specific framework and stack experience.'
  },
  {
    q: 'How is Witqualis different from a freelance marketplace or a general staffing agency?',
    a: 'Witqualis manages the vetting, matching and engagement process directly, rather than forwarding self-declared freelancer profiles or unscreened resumes. Engagements include direct repository and standup access, and code delivered under the engagement belongs to the client.'
  },
  {
    q: 'How quickly can a developer or team start on a project?',
    a: 'Most roles are matched and ready to start within 24 to 48 hours, depending on the technology and current availability of matching engineers.'
  },
  {
    q: 'What happens if a matched developer is not the right fit?',
    a: 'A trial sprint of up to 7 days is available at the start of an engagement so you can evaluate fit before committing further. Replacement and exit terms beyond the trial period are agreed as part of the engagement contract.'
  },
  {
    q: 'What services does Witqualis offer beyond staff augmentation?',
    a: 'Alongside staff augmentation, Witqualis works on web and mobile development, cloud solutions, and AI and machine learning projects. See our services and solutions pages for details.'
  },
  {
    q: 'Which industries and regions does Witqualis work with?',
    a: 'Witqualis has offices in India, the UAE, Australia, the United States and Canada, and has worked with clients including CarDekho, Bakingo, FlowerAura, Vengreso, Sutherland, Fliplearn and Jangubuzz across e-commerce, edtech, automotive and enterprise services.'
  }
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    soundFx.playChirp();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* SECTION 1: KINETIC HERO SECTION & LIVE METRICS HUD                        */}
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
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                ABOUT WITQUALIS TECHNOLOGIES
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-left sm:text-right"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
                [ENGINEER-FIRST DNA]
              </span>
              <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
                FOUNDED BY BUILDERS • OPERATING WORLDWIDE
              </span>
            </motion.div>
          </div>

          {/* Headline & Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-6">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                  ABOUT WITQUALIS: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                    TECHNOLOGY AND ENGINEERING DELIVERY PARTNER
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                Witqualis is a staff augmentation and software development company. We vet developers before placing them on client engagements and work directly with client teams on web, mobile, cloud and AI projects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/services/"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
                >
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/our-team/"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-red-500"
                >
                  <Users className="w-4 h-4 text-red-600" />
                  <span>Meet Leadership Team</span>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider pb-3 border-b border-slate-100">
                  <Sparkles className="w-4 h-4" />
                  <span>WitQualis At A Glance</span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Engagement model</span>
                    <span className="text-sm font-black text-slate-900">Staff augmentation & delivery</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Offices</span>
                    <span className="text-sm font-black text-slate-900">India, UAE, Australia, USA, Canada</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Team size</span>
                    <span className="text-sm font-black text-slate-900">150+ Engineers & Architects</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Core stack</span>
                    <span className="text-sm font-black text-slate-900">Web, mobile, cloud & AI</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Client-owned code and IP under standard engagement terms</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics Bar */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            <div>
              <p className="text-lg sm:text-xl font-black text-slate-900">2020</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Year Founded</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">5</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Office Locations</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">150+</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">In-House Engineers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">Web · Mobile · AI</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Core Service Lines</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 4 CORE ENGINEERING PILLARS & VETTING MATRIX                    */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-[#fafafa] border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>THE WITQUALIS ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              OUR DELIVERY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                PHILOSOPHY
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-500 font-mono">
              Engineered to eliminate hiring friction, skill mismatches, and restrictive lock-in contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider block mb-1">
                      {v.subtitle}
                    </span>

                    <h3 className="text-2xl font-black text-slate-950 uppercase font-display mb-3 group-hover:text-red-600 transition-colors">
                      {v.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {v.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Included in every engagement</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ENGINEERING STANDARDS & SECURITY ARCHITECTURE                  */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>QUALITY & SECURITY BENCHMARKS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              ENTERPRISE CODE CRAFTSMANSHIP & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                GOVERNANCE STANDARDS
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-500 font-mono">
              We apply strict automated testing, peer code reviews, and enterprise compliance across every line of committed code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringStandards.map((std, i) => {
              const Icon = std.icon;
              return (
                <motion.div
                  key={std.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="p-6 rounded-3xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black uppercase text-slate-950 font-display mb-2 group-hover:text-red-600 transition-colors">
                      {std.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {std.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 font-bold uppercase">
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified Protocol</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: THE WITQUALIS MILESTONE ROADMAP & JOURNEY                       */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>OUR EVOLUTION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              WHO WITQUALIS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                IS
              </span>
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  i % 2 === 0 ? 'sm:flex-row-reverse' : ''
                } gap-8`}
              >
                {/* Year Marker Badge */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-red-600 flex items-center justify-center z-10 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'} pl-16 sm:pl-0`}>
                  <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white hover:border-red-500/40 hover:shadow-xl transition-all duration-300">
                    <span className="text-xl sm:text-2xl font-black font-mono text-red-600 block mb-1">
                      {m.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 uppercase font-display mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CANDIDATE & ENGAGEMENT FAQ ACCORDION                           */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              EVERYTHING YOU NEED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                TO KNOW ABOUT WITQUALIS
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {aboutFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-red-500/40 bg-white shadow-lg' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-sm sm:text-base font-bold font-mono ${isOpen ? 'text-red-600' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4"
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
      {/* SECTION 6: HIGH-CONVERSION SCOPING CTA & DISCOVERY MEETING               */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa]">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DISCUSS YOUR ENGAGEMENT</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 font-display">
              READY TO SCALE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                ENGINEERING VELOCITY?
              </span>
            </h2>

            <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Talk to our team about your architecture scope and the roles or squad you need to staff.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                onClick={() => soundFx.playClick()}
                className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
              >
                <span>Initiate Project Scoping</span>
              </Link>

              <a
                href="https://calendly.com/witqualis_services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="px-6 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all border border-slate-300"
              >
                <span>Schedule 30-Min Discovery</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
