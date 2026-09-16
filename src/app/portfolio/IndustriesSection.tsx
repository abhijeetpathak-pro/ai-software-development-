// src/app/portfolio/IndustriesSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  HeartPulse, 
  ShoppingCart, 
  GraduationCap, 
  Home, 
  CloudRain, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface IndustryItem {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  keySolutions: string[];
  caseStudyRef?: string;
  stats: string;
  statsLabel: string;
}

const industries: IndustryItem[] = [
  {
    id: 'fintech',
    icon: TrendingUp,
    title: 'FinTech & Banking',
    tagline: 'HIGH-FREQUENCY & COMPLIANT LEDGERS',
    description: 'Engineering fault-tolerant payment gateways, double-entry ledger settlement microservices, KYC verification pipelines, and fraud detection algorithms.',
    keySolutions: ['Automated Ledger Reconciliation', 'Multi-Currency Global Payouts', 'PCI-DSS & SOC2 Architecture'],
    caseStudyRef: 'Vengreso & Strategic ERP',
    stats: '2,000+',
    statsLabel: 'Companies Scaled'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Pet Care & Community',
    tagline: 'HEALTH TRACKING & SOCIAL COMMUNITY',
    description: 'Developing comprehensive pet health tracking, social networking, marketplace access, and real-time animal-abuse reporting systems on iOS and Android.',
    keySolutions: ['Health Tracking & Telemetry', 'Social Networking & Playdates', 'Real-Time Safety & Abuse Alerts'],
    caseStudyRef: 'Floofers & Petluvs',
    stats: 'iOS & Android',
    statsLabel: 'Platform Availability'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    tagline: 'HIGH-CONCURRENCY OMNICHANNEL COMMERCE',
    description: 'Re-platforming high-volume online retailers with headless Next.js architectures, sub-second checkout funnels, automated inventory dispatch, and nationwide delivery.',
    keySolutions: ['Managed Delivery Networks', 'Real-Time Inventory Locks', 'Live Driver Fleet Tracking'],
    caseStudyRef: 'Bakingo & FlowerAura',
    stats: '229+ Cities',
    statsLabel: 'Delivery Reach'
  },
  {
    id: 'edtech',
    icon: GraduationCap,
    title: 'Education & EdTech',
    tagline: 'INTERACTIVE LEARNING ECOSYSTEMS',
    description: 'Architecting scalable Online Learning Transformation Systems (LMS), gamified student learning paths, live classroom WebSockets, and curriculum management.',
    keySolutions: ['Interactive Virtual Classrooms', 'Adaptive Student Testing Engines', 'Course Telemetry Dashboards'],
    caseStudyRef: 'Fliplearn & Educomp',
    stats: '15M+',
    statsLabel: 'Learners Empowered'
  },
  {
    id: 'real-estate',
    icon: Home,
    title: 'Real Estate & Infrastructure',
    tagline: 'ENTERPRISE ERP & OPERATIONS AUTOMATION',
    description: 'Cloud-based automation platforms delivering specialized modules for real estate, construction, and infrastructure with real-time analytics and mobile accessibility.',
    keySolutions: ['Real Estate & Construction ERP', 'Real-Time Site Analytics', 'End-to-End Project Management'],
    caseStudyRef: 'Strategic ERP',
    stats: 'Enterprise',
    statsLabel: 'SaaS Platform'
  },
  {
    id: 'saas-cloud',
    icon: Zap,
    title: 'Automotive & Digital CX',
    tagline: 'SEARCH, DISCOVERY & TRANSFORMATION',
    description: 'Connecting millions of buyers with 4,000+ dealers through rich digital infrastructure, and engineering experience-led enterprise AI transformation.',
    keySolutions: ['Rich Auto Specs & Reviews', '4,000+ Dealer Network APIs', 'Experience-Led Digital CX'],
    caseStudyRef: 'CarDekho & Sutherland',
    stats: '4,000+',
    statsLabel: 'Dealers Connected'
  }
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<string>(industries[0].id);

  return (
    <section id="industries" className="relative py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>DOMAIN SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              INDUSTRIES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                WE SERVE &amp; TRANSFORM.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              Deep domain knowledge combined with full-stack engineering expertise to address sector-specific regulatory and scale requirements.
            </p>
          </div>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-black font-mono text-slate-950 block group-hover:text-red-600 transition-colors">
                        {ind.stats}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {ind.statsLabel}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider text-red-600 uppercase block mb-1">
                    {ind.tagline}
                  </span>

                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-slate-900">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {ind.description}
                  </p>

                  {/* Key Solutions */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Key Deliverables
                    </p>
                    {ind.keySolutions.map((sol, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {ind.caseStudyRef ? (
                    <span className="text-[11px] font-mono text-slate-500">
                      Featured: <strong className="text-slate-800">{ind.caseStudyRef}</strong>
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">Enterprise Ready</span>
                  )}

                  <a
                    href="#portfolio-projects"
                    onClick={() => soundFx.playClick()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-600 uppercase hover:text-red-700 transition-colors"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
