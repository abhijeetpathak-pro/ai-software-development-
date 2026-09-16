// src/app/portfolio/TechStackExpertise.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  Cpu, 
  Sparkles, 
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    tag: string;
  }[];
}

const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & Web',
    icon: Code2,
    badge: 'SUB-SECOND APPS',
    description: 'Modern, reactive frontend applications with server-side rendering, edge caching, and interactive animations.',
    skills: [
      { name: 'Next.js 15', level: 'Expert', description: 'App Router, Server Components & Edge Runtime', tag: 'Core Stack' },
      { name: 'React 19', level: 'Expert', description: 'Concurrent mode, Server Actions & hooks architecture', tag: 'Core Stack' },
      { name: 'TypeScript', level: 'Expert', description: 'End-to-end strict type-safety across client & APIs', tag: 'Standard' },
      { name: 'Tailwind CSS', level: 'Expert', description: 'Design tokens, dark mode & fluid responsive layouts', tag: 'Styling' },
      { name: 'Vue.js / Nuxt', level: 'Advanced', description: 'Composition API, state pinia & component suites', tag: 'Alternative' },
      { name: 'Framer Motion', level: 'Expert', description: '60 FPS spring physics & micro-interactions', tag: 'Animation' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: Server,
    badge: 'HIGH-CONCURRENCY MICROSERVICES',
    description: 'Event-driven, distributed backend microservices engineered for low latency, high throughput, and fault tolerance.',
    skills: [
      { name: 'Node.js & Express', level: 'Expert', description: 'Asynchronous event-loop & high-concurrency routing', tag: 'Core Stack' },
      { name: 'Python (FastAPI)', level: 'Expert', description: 'Asynchronous APIs, Pydantic validation & ML integration', tag: 'Core Stack' },
      { name: 'Golang', level: 'Advanced', description: 'Ultra-fast goroutines, microservices & network tooling', tag: 'High-Throughput' },
      { name: 'GraphQL & REST', level: 'Expert', description: 'Apollo Server, federation & OpenAPI 3.0 specs', tag: 'API Layer' },
      { name: 'NestJS', level: 'Advanced', description: 'Enterprise TypeScript architecture & dependency injection', tag: 'Enterprise' },
      { name: 'Django / Flask', level: 'Advanced', description: 'Robust ORM, admin scaffolding & data processing', tag: 'Python' }
    ]
  },
  {
    id: 'database',
    name: 'Databases & Vector',
    icon: Database,
    badge: 'ACID & HIGH-THROUGHPUT',
    description: 'Relational data stores, distributed caching, and vector indexing engines for semantic retrieval.',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', description: 'Complex indexing, JSONB, connection pooling & pgvector', tag: 'Primary SQL' },
      { name: 'Redis Cluster', level: 'Expert', description: 'In-memory caching, pub/sub queues & rate limiting', tag: 'Caching' },
      { name: 'MongoDB', level: 'Expert', description: 'Document stores, aggregation pipelines & sharding', tag: 'NoSQL' },
      { name: 'Pinecone / Milvus', level: 'Advanced', description: 'Vector embeddings indexing for LLM RAG pipelines', tag: 'AI Vector' },
      { name: 'Supabase / Firebase', level: 'Expert', description: 'Real-time database triggers, auth & edge functions', tag: 'BaaS' },
      { name: 'Elasticsearch', level: 'Advanced', description: 'Full-text search, faceted filtering & log indexing', tag: 'Search' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: Cloud,
    badge: 'SLA-BACKED UPTIME',
    description: 'Automated CI/CD deployment pipelines, container orchestration, and multi-region cloud provisioning.',
    skills: [
      { name: 'Amazon Web Services (AWS)', level: 'Expert', description: 'ECS, EKS, Lambda, S3, RDS, CloudFront & VPC', tag: 'Primary Cloud' },
      { name: 'Docker & Kubernetes', level: 'Expert', description: 'Microservice containerization & autoscaling clusters', tag: 'Containers' },
      { name: 'Terraform & IaC', level: 'Advanced', description: 'Declarative cloud infrastructure automation & GitOps', tag: 'Infrastructure' },
      { name: 'GitHub Actions / CI/CD', level: 'Expert', description: 'Automated test runners, linting & zero-downtime deploy', tag: 'Automation' },
      { name: 'Google Cloud (GCP)', level: 'Advanced', description: 'Cloud Run, BigQuery, GKE & Vertex AI integration', tag: 'Cloud' },
      { name: 'Datadog & Prometheus', level: 'Advanced', description: 'SRE observability, telemetry metrics & alert routing', tag: 'Monitoring' }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile App Tech',
    icon: Smartphone,
    badge: 'IOS & ANDROID ECOSYSTEM',
    description: 'Cross-platform and native mobile apps built with 60 FPS fluid gesture responsiveness and offline sync.',
    skills: [
      { name: 'Flutter & Dart', level: 'Expert', description: 'Pixel-perfect UI, Skia rendering & single codebase', tag: 'Cross-Platform' },
      { name: 'React Native', level: 'Expert', description: 'New Architecture, TurboModules & Expo EAS pipelines', tag: 'Cross-Platform' },
      { name: 'Swift (iOS)', level: 'Advanced', description: 'SwiftUI, Combine, Apple HealthKit & CoreML', tag: 'iOS Native' },
      { name: 'Kotlin (Android)', level: 'Advanced', description: 'Jetpack Compose, Coroutines & Material You', tag: 'Android Native' },
      { name: 'Firebase Mobile SDK', level: 'Expert', description: 'Push notifications, crashlytics & remote config', tag: 'Mobile BaaS' },
      { name: 'Offline Sync & SQLite', level: 'Expert', description: 'Local-first architecture & background sync queues', tag: 'Offline' }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Cpu,
    badge: 'GENERATIVE AI & AGENTIC WORKFLOWS',
    description: 'Applied LLM systems, autonomous agentic loops, semantic vector search, and custom model fine-tuning.',
    skills: [
      { name: 'OpenAI API & Claude', level: 'Expert', description: 'GPT-4o, Claude 3.5 Sonnet, prompt engineering & tool use', tag: 'LLMs' },
      { name: 'LangChain & LlamaIndex', level: 'Expert', description: 'RAG architectures, chunking strategies & agents', tag: 'Frameworks' },
      { name: 'PyTorch & HuggingFace', level: 'Advanced', description: 'Model fine-tuning, embeddings generation & inference', tag: 'Deep Learning' },
      { name: 'Computer Vision / OpenCV', level: 'Advanced', description: 'Object detection, defect classification & OCR', tag: 'Vision AI' },
      { name: 'Autonomous Agent Workflows', level: 'Expert', description: 'Multi-agent orchestration with human-in-the-loop', tag: 'Autonomous' },
      { name: 'Vector RAG Pipelines', level: 'Expert', description: 'Hybrid sparse-dense retrieval & re-ranking models', tag: 'RAG' }
    ]
  }
];

export default function TechStackExpertise() {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const currentCategory = techCategories.find((cat) => cat.id === activeTab) || techCategories[0];

  return (
    <section id="technologies" className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>PRODUCTION-TESTED TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-slate-950 font-display">
              TECHNOLOGIES &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                STACK EXPERTISE.
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-md">
            <p className="text-xs font-mono text-slate-500 uppercase leading-relaxed">
              We leverage modern, battle-tested frameworks to build resilient digital infrastructure that scales effortlessly.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-slate-200 overflow-x-auto">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playChirp();
                  setActiveTab(cat.id);
                }}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/20 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-600'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details & Skill Cards */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
                {currentCategory.badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-950 font-display">
                {currentCategory.name} Architecture
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal">
                {currentCategory.description}
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Production SLA Validated</span>
            </div>
          </div>

          {/* 6 Skill Detail Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {skill.tag}
                    </span>
                    <span className="text-[11px] font-mono text-red-600 font-bold">
                      {skill.level}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                    {skill.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>WitQualis Core Stack</span>
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
