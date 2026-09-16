// src/app/careers/EmployeeBenefitsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Palmtree, 
  Clock, 
  GraduationCap, 
  Trophy, 
  PartyPopper, 
  CheckCircle2, 
  Gift 
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const benefitsData = [
  {
    icon: HeartPulse,
    title: 'Comprehensive Health Insurance',
    badge: 'Family & Cashless Coverage',
    desc: 'Full medical coverage for you, your spouse, children, and parents with company-sponsored premiums and mental wellness support.',
    points: ['Cashless Hospitalization', 'Pre & Post-Hospitalization Cover', 'Annual Executive Health Checkups']
  },
  {
    icon: Palmtree,
    title: 'Generous Paid Time Off (PTO)',
    badge: 'Rest & Rejuvenation',
    desc: 'Take the time you need to recharge with our structured annual leave policy, emergency sick leaves, and paid festive holidays.',
    points: ['24+ Annual Paid Leaves', 'Paid Festive & National Holidays', 'Compassionate & Sabbatical Leave']
  },
  {
    icon: Clock,
    title: 'Flexible Working Hours',
    badge: 'Async & Outcome-Driven',
    desc: 'Design a workday that suits your peak productivity hours. We evaluate your sprint impact and deliverable quality, not logged hours.',
    points: ['Core Overlap Hours Only', 'Remote-First Option', 'Ergonomic Home Setup Support']
  },
  {
    icon: GraduationCap,
    title: 'Annual Learning Budget',
    badge: 'Stipends & Certifications',
    desc: 'We invest directly in your continuous learning. Get full reimbursement for AWS/GCP/Kubernetes certifications and tech courses.',
    points: ['Paid Cloud & AI Certifications', 'O’Reilly & Udemy Corporate Access', 'Conference & Summit Ticket Grants']
  },
  {
    icon: Trophy,
    title: 'Performance & Milestone Bonuses',
    badge: 'Bi-Annual Appraisals',
    desc: 'Hard work and exceptional engineering impact are recognized and rewarded promptly with structured bi-annual increments.',
    points: ['Bi-Annual Merit Reviews', 'Spot Milestone Awards', 'Referral Bonuses up to ₹50,000']
  },
  {
    icon: PartyPopper,
    title: 'Team Retreats & Activities',
    badge: 'Festivals & Hackathons',
    desc: 'Regular hackathons, game nights, festival parties, and annual offsites bring the entire squad together to bond and celebrate.',
    points: ['Annual Company Retreats', 'Internal Hackathons & Demo Days', 'Festival Gift Boxes & Celebrations']
  }
];

export default function EmployeeBenefitsSection() {
  return (
    <section className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>PERKS &amp; WELL-BEING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            EMPLOYEE BENEFITS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              DESIGNED FOR YOUR SUCCESS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            We provide comprehensive perks that support your health, family, financial stability, and long-term career growth.
          </p>
        </div>

        {/* 6 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase px-3 py-1 rounded-full bg-red-50 border border-red-100">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-3 group-hover:text-[#E31E24] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {b.desc}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {b.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Available from Day 1 of joining
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
