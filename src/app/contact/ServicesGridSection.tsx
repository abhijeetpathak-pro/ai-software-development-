// src/app/contact/ServicesGridSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Layers, 
  Cpu, 
  Cloud, 
  Briefcase, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    category: 'Full-Stack & Frontend',
    icon: Code2,
    description: 'Scalable web applications, modern JAMstack architectures, high-converting portals, and enterprise Next.js/React platforms.',
    highlights: ['Next.js 15 & React', 'Node.js & Python APIs', 'SEO & Core Web Vitals < 95+']
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    category: 'iOS & Android Native/Cross-Platform',
    icon: Smartphone,
    description: 'High-performance cross-platform and native mobile apps designed for seamless touch experiences, offline sync, and real-time responsiveness.',
    highlights: ['React Native & Flutter', 'Native iOS (Swift) / Android (Kotlin)', 'App Store & Play Store SLA']
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    category: 'Product Design & Design Systems',
    icon: Palette,
    description: 'Human-centric UI/UX design, interactive Figma prototypes, design systems, and conversion-focused wireframes.',
    highlights: ['Figma Design Systems', 'User Research & Wireframing', 'Micro-interactions & UX Audits']
  },
  {
    id: 'saas-dev',
    name: 'SaaS Development',
    category: 'Cloud-Native & Multi-Tenant',
    icon: Layers,
    description: 'End-to-end multi-tenant SaaS architecture, subscription billing, multi-role RBAC security, and automated client provisioning.',
    highlights: ['Multi-Tenant Database Design', 'Stripe / Paddle Integration', 'High Scalability & Zero Downtime']
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    category: 'LLMs, RAG & Agents',
    icon: Cpu,
    description: 'Intelligent AI agents, custom vector RAG pipelines, fine-tuned LLM models, and automated business process workflows.',
    highlights: ['LangChain / LlamaIndex', 'Custom RAG & Vector Embeddings', 'Workflow & RPA Automation']
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    category: 'Infra, CI/CD & Kubernetes',
    icon: Cloud,
    description: 'Automated CI/CD pipelines, Kubernetes orchestration, multi-cloud infrastructure as code (Terraform), and SRE-monitored uptime.',
    highlights: ['AWS, GCP & Azure Architecture', 'Docker & Kubernetes (K8s)', 'Automated CI/CD & Security Audits']
  },
  {
    id: 'software-consulting',
    name: 'Software Consulting',
    category: 'Architecture & Modernization',
    icon: Briefcase,
    description: 'Comprehensive codebase audits, legacy tech modernization, technical roadmapping, and fractional CTO advisory.',
    highlights: ['Codebase & Security Audits', 'Architecture Strategy & Scoping', 'Legacy-to-Cloud Migration']
  }
];

export default function ServicesGridSection() {
  const handleSelectService = (serviceName: string) => {
    soundFx.playClick();
    // Dispatch custom event to auto-select chip in Contact Form
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('select-service', { detail: serviceName });
      window.dispatchEvent(event);
      
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED ENGINEERING CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            HOW CAN WE HELP? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              OUR CORE SERVICES
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            Choose a service to fast-track your technical scoping. Click any card below to automatically select it in the project inquiry form.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((srv, index) => {
            const Icon = srv.icon;
            const isLastSpan = index === 6; // Center the 7th item on 3-col grid if desired or make it full/wide

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => handleSelectService(srv.name)}
                className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isLastSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-red-50 group-hover:text-[#E31E24] transition-colors">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {srv.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-4">
                    {srv.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#E31E24] group-hover:translate-x-1 transition-transform">
                  <span>Inquire About This Service</span>
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
