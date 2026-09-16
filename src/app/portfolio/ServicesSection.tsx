// src/app/portfolio/ServicesSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  Smartphone, 
  Palette, 
  Cpu, 
  Cloud, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2,
  Layers,
  ArrowRight,
  Bot
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  popularTech: string[];
}

const services: ServiceItem[] = [
  {
    id: 'ai-ml-team',
    icon: Cpu,
    title: 'AI Engineering & ML Squads',
    badge: 'AUTONOMOUS AI & LLMS',
    description: 'Deploy dedicated AI engineers, data scientists, and ML architects to build autonomous agentic workflows, custom RAG vector search, fine-tuned LLMs, and computer vision pipelines.',
    highlights: [
      'Enterprise Vector RAG with Sub-100ms Latency',
      'Autonomous Multi-Agent Orchestration & Tool Calling',
      'Custom Model Fine-Tuning & Quantization'
    ],
    deliverables: ['AI Research Engineers', 'RAG Vector Pipelines', 'Autonomous LLM Agents'],
    popularTech: ['PyTorch', 'OpenAI API', 'LangChain', 'Pinecone', 'FastAPI', 'DeepSeek']
  },
  {
    id: 'staff-augmentation',
    icon: Users,
    title: 'Staff Augmentation',
    badge: 'VETTED TALENT',
    description: 'Scale your in-house engineering team with dedicated senior developers, architects, and QA engineers who integrate into your Git and Jira sprints within 24 to 48 hours.',
    highlights: [
      'Trial Sprint Period',
      'Overlapping Working Hours Across Time Zones',
      'Zero Recruitment Overhead & Payroll Hassle'
    ],
    deliverables: ['Dedicated Senior Engineers', 'Full-Stack Squads', 'Scrum Leads'],
    popularTech: ['React/Next.js', 'Python/Django', 'Node.js', 'DevOps SRE', 'AWS']
  },
  {
    id: 'web-development',
    icon: Code2,
    title: 'Custom Web Development',
    badge: 'HIGH-PERFORMANCE WEB APPS',
    description: 'Architecting ultra-fast, SEO-optimized, and highly secure web applications, enterprise portals, and SaaS platforms built with cutting-edge frameworks and microservices.',
    highlights: [
      'Sub-second Edge Server Component Rendering',
      'High-concurrency PostgreSQL / Redis Caching',
      'Full End-to-End Type Safety (TypeScript & Zod)'
    ],
    deliverables: ['Enterprise SaaS Portals', 'Headless E-Commerce', 'B2B Dashboards'],
    popularTech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'GraphQL']
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    badge: 'IOS & ANDROID NATIVE / CROSS-PLATFORM',
    description: 'Crafting intuitive, fluid, and robust mobile experiences with offline caching, push notifications, and hardware sensor integrations that users love.',
    highlights: [
      '60 FPS Smooth Fluid Gestures & Micro-interactions',
      'Single Codebase Multi-platform Efficiency',
      'App Store & Play Store Compliance & Publishing'
    ],
    deliverables: ['iOS / Android Apps', 'Cross-Platform Flutter Apps', 'React Native PWA'],
    popularTech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design & Systems',
    badge: 'HUMAN-CENTERED DESIGN',
    description: 'Designing intuitive user interfaces, cohesive design systems, and conversion-focused customer journeys based on behavioral analytics and user research.',
    highlights: [
      'Interactive Figma Prototypes & Design Tokens',
      'Accessibility (WCAG 2.1 AA) Compliance',
      'Conversion Rate Optimization (CRO) Focused'
    ],
    deliverables: ['Figma Design Systems', 'Interactive Prototypes', 'UX Wireframes'],
    popularTech: ['Figma', 'Adobe XD', 'Tailwind Tokens', 'Framer', 'Protopie']
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Solutions & DevOps',
    badge: 'ZERO-DOWNTIME INFRASTRUCTURE',
    description: 'Modernizing cloud topology with automated CI/CD deployment pipelines, container orchestration, multi-region failover, and infrastructure-as-code (IaC).',
    highlights: [
      'High-Availability Uptime Architecture',
      'Automated GitHub Actions / GitLab CI/CD',
      'Cloud Spend Audit & Cost Optimization Review'
    ],
    deliverables: ['Kubernetes Clusters', 'IaC Terraform Modules', 'SRE Monitoring'],
    popularTech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              COMPREHENSIVE SERVICES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                TAILORED FOR SCALE.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              From dedicated AI squads &amp; developer augmentation to full-cycle cloud transformation, we engineer reliable software that drives enterprise growth.
            </p>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Corner Red Line Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 uppercase">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights
                    </p>
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.popularTech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact-requisition"
                    onClick={() => soundFx.playClick()}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-900 group-hover:text-red-600 uppercase tracking-wider transition-colors"
                  >
                    <span>Request Service Consultation</span>
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
