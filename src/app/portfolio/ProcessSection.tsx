// src/app/portfolio/ProcessSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  GitBranch, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Headphones, 
  Sparkles, 
  ArrowRight,
  Clock,
  Layers
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface StepItem {
  num: string;
  title: string;
  stage: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  duration: string;
}

const processSteps: StepItem[] = [
  {
    num: '01',
    stage: 'DISCOVERY',
    title: 'Discovery & Requirements Alignment',
    icon: Search,
    description: 'We deep dive into your business objectives, target audience personas, technical constraints, and key delivery milestones to construct a bulletproof project roadmap.',
    deliverables: ['Technical Requirement Document (TRD)', 'Feature Prioritization Matrix', 'Scope & Budget Signoff'],
    duration: 'Week 1'
  },
  {
    num: '02',
    stage: 'STRATEGY',
    title: 'System Architecture & Strategy',
    icon: GitBranch,
    description: 'Our senior technical architects design database schemas, API contracts, cloud topology, microservice boundaries, and security compliance frameworks.',
    deliverables: ['System Architecture Blueprint', 'Database Schema Models', 'DevOps & Cloud Topology'],
    duration: 'Week 1 — 2'
  },
  {
    num: '03',
    stage: 'DESIGN',
    title: 'UI/UX Design & Design Tokens',
    icon: Palette,
    description: 'We construct intuitive user flows, high-fidelity Figma prototypes, and modular design systems optimized for conversion and accessibility (WCAG).',
    deliverables: ['Interactive Figma Prototypes', 'Component Design System', 'User Journey Maps'],
    duration: 'Week 2 — 3'
  },
  {
    num: '04',
    stage: 'DEVELOPMENT',
    title: 'Agile Sprint Development',
    icon: Code2,
    description: 'We build in iterative 2-week sprints with daily standups and bi-weekly demo releases. Clean modular code, type-safety, and direct push to your Git repositories.',
    deliverables: ['Sprint Demo Builds', 'Direct Git Commits', 'Jira / Linear Sprint Logs'],
    duration: 'Bi-Weekly Sprints'
  },
  {
    num: '05',
    stage: 'TESTING & QA',
    title: 'Rigorous QA & Security Testing',
    icon: CheckCircle2,
    description: 'Every release is subjected to automated unit, integration, and end-to-end tests, along with OWASP vulnerability scanning and high-concurrency load stress tests.',
    deliverables: ['Automated Test Suites', 'Security Vulnerability Audit', 'Cross-Browser/Device QA Matrix'],
    duration: 'Continuous in Sprint'
  },
  {
    num: '06',
    stage: 'LAUNCH',
    title: 'Zero-Downtime Deployment',
    icon: Rocket,
    description: 'We manage production cloud provisioning, SSL certificates, CDN edge routing, and blue-green zero-downtime deployments with instant rollback contingencies.',
    deliverables: ['Production Cloud Provisioning', 'Monitoring & Alerting Setup', 'DNS & Edge CDN Routing'],
    duration: 'Launch Day'
  },
  {
    num: '07',
    stage: 'SUPPORT',
    title: '24/7 SLA Support & Scaling',
    icon: Headphones,
    description: 'Post-launch, our SRE and maintenance squads provide 24/7 telemetry monitoring, bug fixes, security patches, and continuous feature expansion.',
    deliverables: ['24/7 Telemetry & Uptime SLA', 'Proactive Incident Resolution', 'Feature Enhancement Sprints'],
    duration: 'Ongoing'
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>SYSTEMATIC EXECUTION METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              OUR 7-STEP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                DELIVERY PROCESS.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Discovery → Strategy → Design → Development → Testing → Launch → Support. A structured pipeline designed for predictability and zero friction.
            </p>
          </div>
        </div>

        {/* Process Steps Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {processSteps.slice(0, 4).map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onMouseEnter={() => {
                  setActiveStep(idx);
                  soundFx.playHover();
                }}
                className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between group ${
                  activeStep === idx
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl'
                    : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-red-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      activeStep === idx ? 'bg-red-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
                    }`}>
                      {step.stage}
                    </span>
                    <span className={`font-mono text-xl font-black ${
                      activeStep === idx ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                      {step.num}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${
                    activeStep === idx ? 'text-white' : 'text-slate-950'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    activeStep === idx ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-slate-200/40">
                    {step.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px]">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                          activeStep === idx ? 'text-red-400' : 'text-red-600'
                        }`} />
                        <span className={activeStep === idx ? 'text-slate-200' : 'text-slate-700'}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-6 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
                  activeStep === idx ? 'border-slate-800 text-red-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.duration}</span>
                  </span>
                  <span>Step {step.num}/07</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Steps 5, 6, 7 in a 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.slice(4, 7).map((step, idx) => {
            const actualIdx = idx + 4;
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onMouseEnter={() => {
                  setActiveStep(actualIdx);
                  soundFx.playHover();
                }}
                className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between group ${
                  activeStep === actualIdx
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl'
                    : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-red-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      activeStep === actualIdx ? 'bg-red-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
                    }`}>
                      {step.stage}
                    </span>
                    <span className={`font-mono text-xl font-black ${
                      activeStep === actualIdx ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                      {step.num}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${
                    activeStep === actualIdx ? 'text-white' : 'text-slate-950'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    activeStep === actualIdx ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-slate-200/40">
                    {step.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px]">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                          activeStep === actualIdx ? 'text-red-400' : 'text-red-600'
                        }`} />
                        <span className={activeStep === actualIdx ? 'text-slate-200' : 'text-slate-700'}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-6 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
                  activeStep === actualIdx ? 'border-slate-800 text-red-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.duration}</span>
                  </span>
                  <span>Step {step.num}/07</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
