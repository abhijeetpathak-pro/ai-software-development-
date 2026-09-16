// src/app/blog/BlogClientPage.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/data/blog';
import { 
  BookOpen, Clock, Calendar, ArrowRight, Sparkles, Filter, 
  Newspaper, Layers, Terminal, CheckCircle2, ShieldCheck, 
  Send, Mail, Cpu, Flame, Code2
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const categories = ['All Insights', 'AI', 'Engineering', 'Hiring', 'Performance'];

const editorialPillars = [
  {
    icon: Terminal,
    title: 'Code Over Commentary',
    desc: 'Every blueprint includes production-tested code patterns, real architectural diagrams, and measurable latency benchmarks.'
  },
  {
    icon: Flame,
    title: 'Zero Vendor Propaganda',
    desc: 'Unfiltered technical evaluations. We discuss operational bottlenecks, failure modes, and trade-offs rather than sales pitches.'
  },
  {
    icon: Cpu,
    title: 'Field-Tested in Production',
    desc: 'Authored exclusively by senior full-stack architects, AI researchers, and DevOps SREs deploying live enterprise software.'
  }
];

export default function BlogClientPage({ initialPosts }: { initialPosts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Insights');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    selectedCategory === 'All Insights'
      ? initialPosts
      : initialPosts.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategorySelect = (cat: string) => {
    soundFx.playClick();
    setSelectedCategory(cat);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      
      {/* SECTION 1: KINETIC HERO SECTION & TOPIC SELECTOR HUD */}
      <section className="relative min-h-[65vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-white border-b border-slate-200">
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
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                ENGINEERING INSIGHTS & ARTICLES
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-left sm:text-right"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
                LATEST POSTS & INDUSTRY GUIDES
              </span>
              <span className="text-[11px] font-mono text-slate-500 block tracking-wider uppercase">
                SOFTWARE ENGINEERING • SCALING • TECH TEAMS
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-slate-950 uppercase font-display"
            >
              <span className="sr-only">Witqualis Insights — Software Engineering, AI and Team Scaling — </span>NOTES ON ARCHITECTURE, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
                SCALING & SQUAD HIRING.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              Practical technical writing from our senior architects, AI researchers, and engineering leads. Rigorous, field-tested, and built for production teams.
            </motion.p>
          </div>

        </div>

        {/* Live Category Filter Pills */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>Topic:</span>
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-md shadow-red-500/20 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL STANDARDS / VALUE BAR */}
      <section className="border-b border-slate-200 bg-slate-50 py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {editorialPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-red-600 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-mono uppercase tracking-wide text-slate-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: FEATURED HERO POST & EDITORIAL GRID */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {featuredPost && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                FEATURED ARTICLE
              </span>
            </div>

            <Link 
              href={`/blog/${featuredPost.slug}/`}
              onClick={() => soundFx.playClick()}
              className="group block relative rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-red-500/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Cover */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] bg-slate-950 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:hidden" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-white border border-white/20 backdrop-blur-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content Payload */}
                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4 pb-4 border-b border-slate-100">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-red-600" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 group-hover:text-red-600 transition-colors leading-tight mb-4 font-display uppercase">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-4 mb-6 font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold">{featuredPost.author}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* SECTION 4: REMAINING ARTICLES GRID */}
        {gridPosts.length > 0 && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-red-600" />
                <span>ALL ARTICLES ({gridPosts.length})</span>
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                FILTER: {selectedCategory.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  onClick={() => soundFx.playClick()}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-red-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative h-52 w-full bg-slate-950 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-white border border-white/20 backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-slate-950 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug mb-3 uppercase font-display">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 text-[11px] line-clamp-1">{post.author}</span>
                    <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* SECTION 5: NEWSLETTER SUBSCRIPTION HUD */}
      <section className="border-t border-slate-200 bg-slate-950 text-white py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT TO YOUR INBOX</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display mb-4">
            Receive New Blueprints Before They Hit Production.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            No spam, no vendor promos. Just 2 deeply technical blueprints each month on system design, AI architectures, and developer staffing.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-red-600/20"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          {subscribed && (
            <p className="mt-4 text-xs font-mono text-emerald-400 animate-fade-in">
              ✓ You are subscribed to Witqualis Engineering Insights dispatches.
            </p>
          )}
        </div>
      </section>

    </main>
  );
}
