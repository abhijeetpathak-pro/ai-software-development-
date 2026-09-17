// src/app/staff-augmentation/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheck, Rocket, Zap, Users, CheckCircle2, Clock, Award, 
  ArrowRight, Sparkles, Check, X, HelpCircle, ChevronDown, 
  UserCheck, Terminal, Calendar, GitCommit
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const comparisonRows = [
  {
    feature: 'Candidate Vetting Standard',
    witqualis: 'Senior engineers vetted via live architecture and pair-coding assessment',
    traditional: 'Keyword-matched unvetted resumes forwarded directly from job boards'
  },
  {
    feature: 'Trial & Risk Protection',
    witqualis: 'Trial sprint available before a longer engagement begins',
    traditional: 'Immediate long-term lock-in contract with hefty upfront placement fee'
  },
  {
    feature: 'Time to Onboard',
    witqualis: 'Under 48 Hours for interview-ready candidate matching',
    traditional: '4 to 8 weeks of sluggish agency back-and-forth'
  },
  {
    feature: 'Workflow Integration',
    witqualis: 'Direct daily standups, Jira tickets, and Slack with 4-8h timezone overlap',
    traditional: 'Opaque middleman account managers intercepting all communication'
  },
  {
    feature: 'Code & IP Ownership',
    witqualis: 'Commits pushed directly to your repositories under standard engagement terms',
    traditional: 'Ambiguous IP clauses with third-party contractor layers'
  }
];

const onboardingRoadmap = [
  {
    day: 'Day 01',
    title: 'Requirement & Stack Sizing Call',
    desc: 'You define exact framework versions, experience seniority, and sprint deliverables with our Technical Director.'
  },
  {
    day: 'Day 02',
    title: '1:1 Candidate Interview & Code Review',
    desc: 'You interview pre-screened candidates. Review their past commits, architecture thinking, and cultural fit.'
  },
  {
    day: 'Day 03',
    title: 'Trial Sprint Kickoff',
    desc: 'Matched engineer is invited to your Slack, Jira, and GitHub repositories to start tackling live sprint tickets immediately.'
  }
];

const popularRoles = [
  { title: 'Full-Stack Next.js 15 Lead', exp: '6+ Years', rate: '$28-$42 / hr', badge: 'HIGH DEMAND', href: '/hire/react-js-developers/' },
  { title: 'AI & LLM / RAG Architect', exp: '8+ Years', rate: '$35-$50 / hr', badge: 'HOT', href: '/hire/python-developers/' },
  { title: 'Cloud DevOps & Kubernetes SRE', exp: '7+ Years', rate: '$32-$48 / hr', badge: 'CRITICAL', href: '/hire/devops-engineers/' },
  { title: 'Python Data Lakehouse Engineer', exp: '6+ Years', rate: '$30-$45 / hr', badge: 'SCALE READY', href: '/hire/python-developers/' },
  { title: 'React Native Mobile Architect', exp: '5+ Years', rate: '$25-$38 / hr', badge: 'POPULAR', href: '/hire/react-native-developers/' },
  { title: 'Backend Node / Go Microservices', exp: '6+ Years', rate: '$28-$42 / hr', badge: 'ENTERPRISE', href: '/hire/node-js-developers/' }
];

const staffAugFaqs = [
  {
    q: 'How does the trial sprint work?',
    a: 'You can test a developer on your real project and live sprint tickets for up to 7 days before committing to a standard engagement.'
  },
  {
    q: 'Can our engineers work in our specific timezone?',
    a: 'Our developers work overlapping hours with US (EST/PST), UK/Europe (GMT/CET), and Middle East (GST) business hours and attend your daily standups.'
  },
  {
    q: 'What is the notice period if we need to pause or scale down?',
    a: 'Notice periods and scale-down terms are set out in the engagement contract.'
  },
  {
    q: 'Can we hire the developer full-time internally later?',
    a: 'Direct-hire transfer options can be discussed with your account manager as part of the engagement terms.'
  },
  {
    q: 'What roles and technologies can Witqualis staff?',
    a: 'Witqualis places full-stack, frontend, backend, mobile, QA, DevOps and cloud engineers, matched to your specific framework and stack. See the roles listed above for current coverage.'
  },
  {
    q: 'How is staff augmentation different from outsourcing a full project?',
    a: 'With staff augmentation, the developer works inside your existing team and processes and you retain day-to-day direction. With project outsourcing, Witqualis owns delivery of a defined scope end-to-end. See the comparison above for details.'
  }
];

export default function StaffAugmentationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    soundFx.playChirp();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* ========================================================================= */}
      {/* SECTION 1: KINETIC HERO SECTION & 48H MATCHING HUD                        */}
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
                ENGINEER STAFF AUGMENTATION
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-left sm:text-right"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
                [PRE-VETTED DEVELOPERS]
              </span>
              <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
                FAST ONBOARDING • TRIAL SPRINT AVAILABLE
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
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display">
                  <span className="sr-only">IT Staff Augmentation Services for Flexible Engineering Capacity — </span>SCALE SPRINT VELOCITY <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                    WITH SENIOR DEVELOPERS.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                Embed pre-vetted senior software engineers directly into your internal engineering squad, with a trial sprint available on live sprint tasks before a longer engagement begins.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact/"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
                >
                  <span>Request Developer Shortlist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://calendly.com/witqualis_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:border-red-500"
                >
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>Schedule 30-Min Discovery</span>
                </a>
              </motion.div>
            </div>

            {/* Quick Facts Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider pb-3 border-b border-slate-100">
                  <Sparkles className="w-4 h-4" />
                  <span>How It Works</span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Candidate Match Speed</span>
                    <span className="text-sm font-bold text-slate-900">&lt; 48 Hours</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Sprint Trial Period</span>
                    <span className="text-sm font-bold text-red-600">Trial Sprint Available</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase">Timezone Overlap</span>
                    <span className="text-sm font-bold text-emerald-600">4-8 Hours Daily</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Client-Owned Intellectual Property</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">48h</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Developer Match Speed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">7 Days</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Trial Sprint</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">2020</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Year Founded</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">5</p>
              <p className="text-[11px] text-slate-500 uppercase mt-0.5">Global Office Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 5-PILLAR COMPARISON MATRIX (WITQUALIS VS TRADITIONAL)           */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>THE TRANSPARENT ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              HOW WITQUALIS COMPARES TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                TRADITIONAL RECRUITERS
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-4">
                  <h3 className="text-base font-black text-slate-950 uppercase font-display">
                    {row.feature}
                  </h3>
                </div>

                <div className="md:col-span-4 p-4 rounded-2xl bg-red-50/60 border border-red-200 flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono font-bold text-red-700 uppercase">WitQualis Standard</p>
                    <p className="text-xs text-slate-800 font-medium mt-0.5">{row.witqualis}</p>
                  </div>
                </div>

                <div className="md:col-span-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Traditional Agency</p>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">{row.traditional}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 3-STAGE RAPID ONBOARDING ROADMAP                                */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>RAPID ONBOARDING PIPELINE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              FROM REQUIREMENT TO LIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                SPRINT IN 3 DAYS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onboardingRoadmap.map((road, i) => (
              <motion.div
                key={road.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-8 rounded-3xl border border-slate-200 bg-slate-50/80 hover:bg-white hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-mono text-red-600 block mb-4">
                    {road.day}
                  </span>
                  <h3 className="text-lg font-black uppercase text-slate-950 font-display mb-2">
                    {road.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {road.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-[10px] font-mono text-emerald-700 font-bold uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fast-Track Stage</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: ACTIVE SENIOR TALENT POOL CARDS                                 */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-[#fafafa] border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-2">
                <Rocket className="w-3.5 h-3.5" />
                <span>ACTIVE TALENT POOL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-slate-950 font-display">
                PRE-VETTED ROLES READY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                  FOR IMMEDIATE DEPLOYMENT
                </span>
              </h2>
            </div>

            <div className="md:text-right max-w-sm">
              <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
                Review verified experience benchmarks and match candidates in under 48 hours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100 text-[10px] font-mono font-bold uppercase">
                      {role.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">{role.rate}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 uppercase font-display mb-2 group-hover:text-red-600 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 mb-6">
                    {role.exp} Seniority • 48h Rapid Onboarding
                  </p>
                </div>

                <Link
                  href={role.href}
                  onClick={() => soundFx.playClick()}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-red-600 group-hover:text-white border border-slate-200 group-hover:border-red-600 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Hire This Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: STAFF AUGMENTATION FAQ ACCORDION                                */}
      {/* ========================================================================= */}
      <section className="relative py-28 bg-white border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>STAFF AUGMENTATION FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
              COMMON QUESTIONS ON <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                DEVELOPER AUGMENTATION
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {staffAugFaqs.map((faq, index) => {
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
      {/* SECTION 6: HIGH-CONVERSION CANDIDATE SHORTLIST CTA                         */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-[#fafafa]">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-2xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FAST SQUAD MATCHING</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 font-display">
              READY TO EMBED SENIOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                DEVELOPERS INTO YOUR TEAM?
              </span>
            </h2>

            <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Start with our trial sprint before committing to a longer engagement.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                onClick={() => soundFx.playClick()}
                className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
              >
                <span>Request Candidate Shortlist</span>
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
