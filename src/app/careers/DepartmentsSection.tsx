// src/app/careers/DepartmentsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Layers, 
  CheckSquare, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Briefcase 
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface DepartmentItem {
  id: string;
  name: string;
  filterKey: string;
  icon: React.ComponentType<{ className?: string }>;
  roleCount: number;
  description: string;
  keySkills: string[];
}

const departments: DepartmentItem[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    filterKey: 'Engineering',
    icon: Code2,
    roleCount: 6,
    description: 'Building distributed cloud architectures, high-performance web & mobile applications, and AI vector pipelines.',
    keySkills: ['Next.js 15 & React', 'Node.js & Python', 'AWS & Kubernetes', 'AI & LangChain']
  },
  {
    id: 'design',
    name: 'Design & UI/UX',
    filterKey: 'Design',
    icon: Palette,
    roleCount: 2,
    description: 'Crafting pixel-perfect design systems, high-converting interactive prototypes, and human-centric digital experiences.',
    keySkills: ['Figma Design Systems', 'User Journey Mapping', 'Motion & Micro-interactions']
  },
  {
    id: 'product',
    name: 'Product & Agile',
    filterKey: 'Product',
    icon: Layers,
    roleCount: 1,
    description: 'Bridging enterprise customer visions with engineering sprints, roadmaps, and high-velocity deliverable milestones.',
    keySkills: ['Scrum & Sprint Planning', 'PRD & Feature Scoping', 'Jira & Client Alignment']
  },
  {
    id: 'qa',
    name: 'QA & Testing',
    filterKey: 'QA & Testing',
    icon: CheckSquare,
    roleCount: 2,
    description: 'Ensuring zero-defect releases with automated end-to-end testing, security scans, and performance benchmarking.',
    keySkills: ['Cypress & Playwright', 'Selenium & Postman', 'Load & Security Audits']
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    filterKey: 'Sales & Marketing',
    icon: TrendingUp,
    roleCount: 2,
    description: 'Driving global enterprise expansion across US, Europe, UAE, and Australia through consultative engineering partnerships.',
    keySkills: ['B2B Enterprise Scoping', 'Outreach Strategy', 'Client Success Management']
  },
  {
    id: 'hr',
    name: 'HR & Operations',
    filterKey: 'HR & Operations',
    icon: Users,
    roleCount: 1,
    description: 'Empowering our people, streamlining global onboarding, fostering an inspiring culture, and managing talent acquisition.',
    keySkills: ['Technical Sourcing', 'People Success', 'Employee Engagement']
  }
];

export default function DepartmentsSection() {
  const handleDepartmentClick = (filterKey: string) => {
    soundFx.playClick();
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('filter-department', { detail: filterKey });
      window.dispatchEvent(event);
      
      const rolesElement = document.getElementById('open-roles');
      if (rolesElement) {
        rolesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>FUNCTIONAL SQUADS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            OUR DEPARTMENTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              EXPLORE TEAMS THAT INSPIRE
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            Choose a department to see open requisitions and discover where your skills can make the greatest impact.
          </p>
        </div>

        {/* 6 Departments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => handleDepartmentClick(dept.filterKey)}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm hover:border-[#E31E24]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono font-bold text-[#E31E24] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                      {dept.roleCount} Open Role{dept.roleCount > 1 ? 's' : ''}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {dept.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 border-t border-slate-200/80 pt-4">
                    {dept.keySkills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700 group-hover:border-red-200"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 flex items-center justify-between text-xs font-mono font-bold text-[#E31E24] group-hover:translate-x-1 transition-transform">
                  <span>View {dept.name} Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
