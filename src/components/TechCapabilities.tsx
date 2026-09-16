// src/components/TechCapabilities.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Cpu, Cloud, Database, Layout, Server, Smartphone, Layers, Palette, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

// Rich Technology Categories Data
const techData = [
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    shortLabel: 'AI & LLMs',
    icon: <Cpu className="w-5 h-5 text-sky-400" />,
    badge: 'HIGH DEMAND',
    color: 'from-sky-500/20 to-blue-600/20',
    borderColor: 'border-sky-500/40',
    description: 'Enterprise RAG pipelines, autonomous agent architectures, local LLM orchestration, and fine-tuning.',
    techs: [
      { name: 'PyTorch', level: 'Expert', icon: '🔥' },
      { name: 'TensorFlow', level: 'Expert', icon: '🧠' },
      { name: 'OpenAI GPT-4o', level: 'Advanced', icon: '🤖' },
      { name: 'Claude Sonnet 3.7', level: 'Advanced', icon: '⚡' },
      { name: 'LangChain & LangGraph', level: 'Expert', icon: '🔗' },
      { name: 'LlamaIndex RAG', level: 'Expert', icon: '📚' },
      { name: 'Hugging Face', level: 'Advanced', icon: '🤗' },
      { name: 'ChromaDB & Pinecone', level: 'Expert', icon: '🌲' },
      { name: 'Ollama & vLLM', level: 'Advanced', icon: '🦙' },
      { name: 'DeepSeek R1', level: 'Advanced', icon: '🔍' }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    shortLabel: 'Cloud & SRE',
    icon: <Cloud className="w-5 h-5 text-indigo-400" />,
    badge: 'ENTERPRISE',
    color: 'from-indigo-500/20 to-violet-600/20',
    borderColor: 'border-indigo-500/40',
    description: 'Scalable multi-region cloud topology, serverless orchestration, and automated zero-downtime CI/CD pipelines.',
    techs: [
      { name: 'AWS Cloud', level: 'Expert', icon: '☁️' },
      { name: 'Google Cloud (GCP)', level: 'Advanced', icon: '🌐' },
      { name: 'Microsoft Azure', level: 'Advanced', icon: '🔷' },
      { name: 'Docker Containers', level: 'Expert', icon: '🐳' },
      { name: 'Kubernetes (K8s)', level: 'Expert', icon: '☸️' },
      { name: 'Terraform (IaC)', level: 'Advanced', icon: '🏗️' },
      { name: 'GitHub Actions CI/CD', level: 'Expert', icon: '⚡' },
      { name: 'Prometheus & Grafana', level: 'Advanced', icon: '📈' },
      { name: 'Cloudflare Edge', level: 'Expert', icon: '🛡️' }
    ]
  },
  {
    id: 'data',
    label: 'Data Engineering',
    shortLabel: 'Data Engineer',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    badge: 'SCALABLE',
    color: 'from-emerald-500/20 to-teal-600/20',
    borderColor: 'border-emerald-500/40',
    description: 'High-throughput stream processing, distributed vector search, relational scaling, and analytics warehouses.',
    techs: [
      { name: 'PostgreSQL & pgvector', level: 'Expert', icon: '🐘' },
      { name: 'MongoDB Atlas', level: 'Expert', icon: '🍃' },
      { name: 'Redis Caching & PubSub', level: 'Expert', icon: '⚡' },
      { name: 'Apache Kafka', level: 'Advanced', icon: '📨' },
      { name: 'Apache Spark', level: 'Advanced', icon: '✨' },
      { name: 'Snowflake Warehouse', level: 'Advanced', icon: '❄️' },
      { name: 'Elasticsearch', level: 'Expert', icon: '🔎' },
      { name: 'Apache Airflow', level: 'Advanced', icon: '🌪️' },
      { name: 'MySQL & ClickHouse', level: 'Expert', icon: '🐬' }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    shortLabel: 'Frontend',
    icon: <Layout className="w-5 h-5 text-amber-400" />,
    badge: 'MODERN 60FPS',
    color: 'from-amber-500/20 to-orange-600/20',
    borderColor: 'border-amber-500/40',
    description: 'Ultra-responsive client architectures, WebGL shaders, server-side rendering, and micro-frontend design.',
    techs: [
      { name: 'Next.js 15 (App Router)', level: 'Expert', icon: '▲' },
      { name: 'React 18 / 19', level: 'Expert', icon: '⚛️' },
      { name: 'TypeScript', level: 'Expert', icon: '📘' },
      { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
      { name: 'Three.js & WebGL', level: 'Advanced', icon: '🧊' },
      { name: 'Framer Motion', level: 'Expert', icon: '✨' },
      { name: 'Vue.js & Nuxt 3', level: 'Advanced', icon: '💚' },
      { name: 'Angular 18', level: 'Advanced', icon: '🅰️' },
      { name: 'Redux Toolkit & Zustand', level: 'Expert', icon: '📦' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend & Distributed Systems',
    shortLabel: 'Backend',
    icon: <Server className="w-5 h-5 text-purple-400" />,
    badge: 'LOW LATENCY',
    color: 'from-purple-500/20 to-pink-600/20',
    borderColor: 'border-purple-500/40',
    description: 'High-concurrency microservices, gRPC protocols, secure REST APIs, and asynchronous event architectures.',
    techs: [
      { name: 'Node.js & Express', level: 'Expert', icon: '🟢' },
      { name: 'NestJS Framework', level: 'Expert', icon: '🦁' },
      { name: 'Python (FastAPI & Django)', level: 'Expert', icon: '🐍' },
      { name: 'Go (Golang)', level: 'Advanced', icon: '🐹' },
      { name: 'Java & Spring Boot', level: 'Advanced', icon: '☕' },
      { name: 'GraphQL & gRPC', level: 'Expert', icon: '🔺' },
      { name: 'PHP (Laravel 11)', level: 'Expert', icon: '🐘' },
      { name: '.NET Core 8', level: 'Advanced', icon: '🔷' },
      { name: 'Microservices Mesh', level: 'Expert', icon: '🕸️' }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    shortLabel: 'Mobile App',
    icon: <Smartphone className="w-5 h-5 text-rose-400" />,
    badge: 'CROSS-PLATFORM',
    color: 'from-rose-500/20 to-red-600/20',
    borderColor: 'border-rose-500/40',
    description: 'Native performance mobile apps with offline-first sync, push notification pipelines, and biometric security.',
    techs: [
      { name: 'React Native (Expo)', level: 'Expert', icon: '📱' },
      { name: 'Flutter & Dart', level: 'Expert', icon: '💙' },
      { name: 'iOS Swift & SwiftUI', level: 'Advanced', icon: '🍎' },
      { name: 'Android Kotlin', level: 'Advanced', icon: '🤖' },
      { name: 'Capacitor & Ionic', level: 'Advanced', icon: '⚡' },
      { name: 'Mobile SQLite & Realm', level: 'Expert', icon: '💾' }
    ]
  },
  {
    id: 'architecture',
    label: 'Software Architecture',
    shortLabel: 'Architecture',
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    badge: 'ROBUST',
    color: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'border-cyan-500/40',
    description: 'Enterprise design patterns, domain-driven design, zero-trust security topologies, and fault tolerance.',
    techs: [
      { name: 'Domain-Driven Design (DDD)', level: 'Expert', icon: '📐' },
      { name: 'Event-Driven Architecture', level: 'Expert', icon: '⚡' },
      { name: 'CQRS & Event Sourcing', level: 'Advanced', icon: '🔄' },
      { name: 'Hexagonal / Clean Architecture', level: 'Expert', icon: '🔷' },
      { name: 'API Gateway & Service Mesh', level: 'Advanced', icon: '🚪' },
      { name: 'Zero Trust Security', level: 'Advanced', icon: '🔒' }
    ]
  },
  {
    id: 'uiux',
    label: 'UI/UX & Design Systems',
    shortLabel: 'UI/UX Design',
    icon: <Palette className="w-5 h-5 text-fuchsia-400" />,
    badge: 'AESTHETIC',
    color: 'from-fuchsia-500/20 to-pink-600/20',
    borderColor: 'border-fuchsia-500/40',
    description: 'Design systems, interactive prototypes, micro-interaction choreography, and WCAG accessibility standards.',
    techs: [
      { name: 'Figma Auto-Layout & Variables', level: 'Expert', icon: '🎨' },
      { name: 'Design Tokens & Atomic Systems', level: 'Expert', icon: '🧩' },
      { name: 'Framer Interactive Prototypes', level: 'Advanced', icon: '⚡' },
      { name: 'User Journey Mapping', level: 'Expert', icon: '🗺️' },
      { name: 'WCAG 2.1 AA Accessibility', level: 'Expert', icon: '♿' },
      { name: 'Micro-Animation Choreography', level: 'Expert', icon: '✨' }
    ]
  }
];

export default function TechCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>('ai');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const activeData = techData.find((t) => t.id === activeCategory) || techData[0];

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative py-28 bg-background text-foreground border-b border-border/40 overflow-hidden selection:bg-primary/20"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#71717a_0.6px,_transparent_0.6px)] opacity-15 [background-size:24px_24px] pointer-events-none" />

      {/* Radiant Glowing Ambient Beams */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with Strong Bottom-to-Top Slide */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>FULL-STACK &amp; AI CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">Technology Stacks</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            From cutting-edge generative AI &amp; autonomous agents to enterprise cloud infrastructure and low-latency APIs — engineered for scale and mathematical precision.
          </p>
        </motion.div>

        {/* Category Pills Navigation Grid with Bottom-to-Top Slide */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {techData.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(category.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-300 text-center group ${
                  isActive
                    ? `bg-primary/15 border-primary/60 shadow-lg shadow-primary/20 scale-[1.03]`
                    : 'bg-card/60 hover:bg-card/90 border-border/60 hover:border-primary/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className={`p-2 rounded-xl mb-2 transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'bg-primary/20' : 'bg-muted/40'
                }`}>
                  {category.icon}
                </div>

                <span className={`text-xs font-bold font-mono tracking-tight transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground/80 group-hover:text-foreground'
                }`}>
                  {category.shortLabel}
                </span>

                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  {category.techs.length} Tools
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeCategoryDot"
                    className="absolute -bottom-1 w-6 h-1 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Active Technology Drawer Showcase with Slide Up */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-3xl border bg-gradient-to-br ${activeData.color} ${activeData.borderColor} backdrop-blur-xl p-7 sm:p-10 shadow-2xl overflow-hidden`}
          >
            {/* Corner Decorative Watermark */}
            <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header of Active Category */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/40 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card/80 border border-border/60 flex items-center justify-center shadow-md">
                  {activeData.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-black text-foreground">
                      {activeData.label}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {activeData.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
                    {activeData.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-xl bg-card/70 border border-border/60 text-xs font-mono text-foreground font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Verified</span>
              </div>
            </div>

            {/* Tech Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {activeData.techs.map((tech, i) => {
                const isHovered = hoveredTech === tech.name;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    onMouseEnter={() => {
                      soundFx.playHover();
                      setHoveredTech(tech.name);
                    }}
                    onMouseLeave={() => setHoveredTech(null)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`relative p-3.5 rounded-2xl border transition-all duration-300 cursor-default flex items-center gap-3 ${
                      isHovered
                        ? 'bg-card border-primary text-foreground shadow-xl shadow-primary/10'
                        : 'bg-card/60 hover:bg-card/90 border-border/50 text-foreground'
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{tech.icon}</span>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold font-mono truncate text-foreground">
                        {tech.name}
                      </p>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {tech.level}
                      </span>
                    </div>

                    {isHovered && (
                      <motion.div
                        layoutId="techIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Terminal Telemetry Bar */}
            <div className="mt-8 pt-5 border-t border-border/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span>SYS_BENCHMARK: ALL PACKAGES INSTALLED & VERIFIED FOR ENTERPRISE INTEGRATION</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-emerald-400">● LOW LATENCY TARGETS</span>
                <span className="text-sky-400">● ZERO DEPLOYMENT BOTTLENECK</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}