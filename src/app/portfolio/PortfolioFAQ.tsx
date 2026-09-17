// src/app/portfolio/PortfolioFAQ.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Cpu, 
  ShieldCheck, 
  Clock,
  Layers,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface FAQItem {
  id: string;
  category: 'all' | 'staffing' | 'engineering' | 'pricing' | 'sla';
  categoryLabel: string;
  q: string;
  a: string;
  highlights: string[];
  keywords: string[];
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'staffing',
    categoryLabel: 'Staff Augmentation',
    q: 'How quickly can we hire and onboard vetted senior developers or AI engineering squads?',
    a: 'We maintain an active benchmark pool of pre-vetted engineers across AI/ML, Python, Next.js, Cloud DevOps, and Mobile (Flutter/React Native). Once we finalize your technical scope and interview preference, engineers can be fully integrated into your corporate Slack, Jira/Linear, and Git workflows in under 48 hours.',
    highlights: [
      'Pre-screened engineering talent in India',
      'Instant access to Slack/Jira sprint workflows',
      'No lengthy recruitment pipelines or payroll overhead'
    ],
    keywords: ['hire developers', 'staff augmentation', 'onboard', 'react', 'python', 'ai']
  },
  {
    id: 'faq-2',
    category: 'staffing',
    categoryLabel: 'Trial Sprint',
    q: 'How does the Trial Sprint Sprint work for developer augmentation?',
    a: 'A 7-day trial sprint lets you evaluate a dedicated developer or engineering squad directly in your codebase before committing to a standard engagement.',
    highlights: [
      'Zero financial commitment during 7-day trial',
      'Live sprint evaluation in your actual repositories',
      'Instant talent replacement if expectations are not met'
    ],
    keywords: ['trial sprint', 'developer trial', 'evaluation']
  },
  {
    id: 'faq-3',
    category: 'pricing',
    categoryLabel: 'IP & Contracts',
    q: 'Who owns the intellectual property (IP), source code, patents, and cloud repositories?',
    a: 'Clients retain intellectual property ownership of code delivered under the engagement, per the signed contract. All code commits are pushed directly to your corporate repositories (GitHub, GitLab, Bitbucket), and all cloud infrastructure credentials remain under your sole administrative control.',
    highlights: [
      'Comprehensive mutual Non-Disclosure Agreement (NDA)',
      'Code ownership transfers under the terms of the engagement contract',
      'Direct push to client-owned GitHub/GitLab organizations'
    ],
    keywords: ['ip ownership', 'intellectual property', 'nda', 'source code', 'github', 'security', 'copyright']
  },
  {
    id: 'faq-4',
    category: 'engineering',
    categoryLabel: 'AI & Custom Software',
    q: 'What technologies, frameworks, and AI architectures does WitQualis specialize in?',
    a: 'We engineer modern full-stack and distributed cloud applications utilizing Next.js 15, React 19, TypeScript, Node.js, Python (FastAPI/Django), and Golang. For AI and machine learning, we build enterprise Retrieval-Augmented Generation (RAG) vector pipelines (Pinecone/Milvus), autonomous LLM agents (OpenAI/Claude/DeepSeek), computer vision models, and Kubernetes cloud infrastructure on AWS/GCP.',
    highlights: [
      'Next.js 15 Server Components & Sub-second Edge Runtimes',
      'Autonomous Multi-Agent Systems & Vector Embeddings',
      'Fault-Tolerant Microservices & PostgreSQL Connection Pooling'
    ],
    keywords: ['technologies', 'ai development', 'next.js', 'react', 'rag pipelines', 'llm', 'aws', 'python', 'kubernetes']
  },
  {
    id: 'faq-5',
    category: 'sla',
    categoryLabel: 'Communication & Overlap',
    q: 'What time zone overlap and communication protocols do your engineering teams maintain?',
    a: 'Our developers work overlapping hours with US, UK/Europe, Middle East and Asia-Pacific time zones, with daily standups and collaboration across Slack, Microsoft Teams, Jira and Zoom.',
    highlights: [
      'Overlapping working hours across time zones',
      'Fluent English professional communication',
      'Daily async video/text standup updates'
    ],
    keywords: ['time zone', 'timezone overlap', 'communication', 'slack', 'daily standup', 'usa', 'uk', 'europe']
  },
  {
    id: 'faq-6',
    category: 'pricing',
    categoryLabel: 'Pricing Models',
    q: 'What engagement models and pricing structures do you offer for projects and squads?',
    a: 'We offer three flexible engagement models tailored to your business stage: 1) Dedicated Engineering Squads (fixed monthly rate per developer), 2) Time & Materials (T&M for agile, evolving requirements), and 3) Fixed-Scope Milestone Contracts (predetermined scope, roadmap, and delivery schedule). All models feature transparent invoicing with zero hidden recruitment or termination fees.',
    highlights: [
      'Dedicated monthly squad pricing, quoted per engagement',
      'Fixed-price milestone deliverables for greenfield projects',
      'Flexible 7-day scaling notice without lock-in penalties'
    ],
    keywords: ['pricing', 'engagement model', 'dedicated developer cost', 'fixed price', 'hourly rate', 'invoice']
  },
  {
    id: 'faq-7',
    category: 'sla',
    categoryLabel: 'Quality & 24/7 SLA',
    q: 'How does WitQualis ensure software quality, 99.4% SLA adherence, and post-launch maintenance?',
    a: 'Every pull request undergoes automated CI/CD unit and integration testing with defined coverage thresholds, static vulnerability scans, and peer architectural reviews. Following deployment, our Site Reliability Engineering (SRE) squads provide 24/7 telemetry monitoring, proactive bug patches, performance tuning, and uptime monitoring.',
    highlights: [
      'Automated CI/CD test suites & static analysis',
      '24/7 proactive DevOps telemetry & alerting',
      '< 15-minute critical incident resolution SLA'
    ],
    keywords: ['quality assurance', 'sla', 'uptime', 'maintenance', '24/7 support', 'testing', 'code review', 'sre']
  }
];

const categories = [
  { id: 'all', label: 'All FAQs', icon: HelpCircle },
  { id: 'staffing', label: 'Staff Augmentation', icon: Users },
  { id: 'engineering', label: 'AI & Engineering', icon: Cpu },
  { id: 'pricing', label: 'Pricing & IP Rights', icon: ShieldCheck },
  { id: 'sla', label: 'Support & SLAs', icon: Clock }
];

export default function PortfolioFAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    soundFx.playChirp();
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="relative py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE &amp; DELIVERY FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            FREQUENTLY ASKED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              QUESTIONS &amp; INSIGHTS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-mono">
            Everything you need to know about our developer vetting, trial sprint, AI architectures, and pricing.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords (e.g. 7-day trial, pricing, IP ownership, AI stack, time zone)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 font-mono text-xs focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playChirp();
                  setSelectedCategory(cat.id);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-500/20 scale-105'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-red-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-3xl bg-white border border-slate-200 text-slate-500 font-mono text-xs">
              <p>No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-red-600 font-bold underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-red-300 shadow-xl'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-red-600 uppercase">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-slate-100 text-slate-600 text-sm leading-relaxed space-y-4">
                          <p>{faq.a}</p>

                          {/* Key Highlights Bullet List */}
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                            <p className="text-[11px] font-mono font-bold text-slate-900 uppercase">
                              Key Takeaways:
                            </p>
                            {faq.highlights.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Direct Help Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Have a specific architectural question?</p>
              <p className="text-xs text-slate-500 font-mono">Speak directly with our CTO and senior solutions architects.</p>
            </div>
          </div>

          <a
            href="#schedule-consultation"
            onClick={() => soundFx.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            <span>Book 30-Min Tech Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
