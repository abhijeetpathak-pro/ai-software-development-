'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { stacksByCategory } from '@/data/stacks';
import { services, solutions } from '@/data/services';

const aiSolutions = solutions.filter((s) => s.isAI);

type MenuType = 'about' | 'service' | 'solution' | 'ai' | 'team' | null;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: MenuType) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleToggle = (menu: MenuType) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image 
            src="/images/logo.png" 
            alt="WitQualis Technologies" 
            width={120} 
            height={90} 
            className="h-11 sm:h-13 w-auto object-contain"
            priority 
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">
          
           {/* ========================================================= */}
          {/* 1. AI MEGA MENU */}
          {/* ========================================================= */}
          <div
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('ai')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleToggle('ai')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${activeMenu === 'ai' ? 'text-teal-dark font-semibold' : 'text-ink/80 hover:text-teal-dark'}`}
            >
              <span className="flex items-center gap-1.5">
                AI
                <span className="rounded bg-teal/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-teal-dark">NEW</span>
              </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-200 ${activeMenu === 'ai' ? 'rotate-180 text-teal-dark' : ''}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {activeMenu === 'ai' && (
              <div className="absolute -left-20 top-full pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-[620px] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5 bg-slate-50/50">
                    <span className="font-display text-sm font-bold text-ink">AI Practice</span>
                    <Link href="/hire/hire-ai-developers/" onClick={() => setActiveMenu(null)} className="text-xs font-semibold text-teal-dark hover:underline">
                      Hire AI developers &rarr;
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-5">
                    {aiSolutions.map((s, idx) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}/`}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50 group"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50/80 text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors">
                          {idx === 0 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                          {idx === 1 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          )}
                          {idx === 3 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-ink group-hover:text-teal-dark transition-colors">
                            {s.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-ink/55 line-clamp-2">{s.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/10 bg-slate-50 px-6 py-3.5">
                    <div>
                      <h5 className="text-sm font-semibold text-ink">LLMs, RAG &amp; production AI</h5>
                      <p className="text-xs text-ink/60">Talk to an AI engineer about your use case.</p>
                    </div>
                    <Link href="/contact/" onClick={() => setActiveMenu(null)} className="rounded-lg bg-[#E31E24] hover:bg-red-700 text-white px-4 py-2 text-xs font-semibold shadow-sm transition">
                      Start A Project
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* 2. ABOUT US (MANTINE CARD THEME) */}
          {/* ========================================================= */}
          <div 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => handleToggle('about')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${activeMenu === 'about' ? 'text-teal-dark font-semibold' : 'text-ink/80 hover:text-teal-dark'}`}
            >
              <span>About Us</span>
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                className={`transition-transform duration-200 ${activeMenu === 'about' ? 'rotate-180 text-teal-dark' : ''}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {activeMenu === 'about' && (
              <div className="absolute left-0 top-full pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-[580px] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5 bg-slate-50/50">
                    <span className="font-display text-sm font-bold text-ink">About WitQualis</span>
                    <Link href="/our-team/" onClick={() => setActiveMenu(null)} className="text-xs font-semibold text-teal-dark hover:underline">
                      Meet the team &rarr;
                    </Link>
                  </div>

                  {/* 2-Column Grid */}
                  <div className="grid grid-cols-2 gap-3 p-5">
                    {[
                      {
                        name: 'Our Team',
                        href: '/our-team/',
                        desc: 'Meet our leadership, architects, and engineering leads.',
                        icon: (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ),
                      },
                      {
                        name: 'Portfolio',
                        href: '/portfolio/',
                        desc: 'Real-world case studies and production applications shipped.',
                        icon: (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                      },
                      {
                        name: 'Career',
                        href: '/careers/',
                        desc: 'Join our high-performing developer engineering network.',
                        icon: (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ),
                      },
                      {
                        name: 'Contact Us',
                        href: '/contact/',
                        desc: 'Get in touch for consultations, pricing, and trial sprints.',
                        icon: (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                      },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-slate-50 group"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50/80 text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-ink group-hover:text-teal-dark transition-colors">
                            {item.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-ink/55 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Banner */}
                  <div className="flex items-center justify-between border-t border-ink/10 bg-slate-50 px-6 py-3.5">
                    <div>
                      <h5 className="text-sm font-semibold text-ink">Want to know how we work?</h5>
                      <p className="text-xs text-ink/60">Learn more about our developer pairing process.</p>
                    </div>
                    <Link 
                      href="/contact/" 
                      onClick={() => setActiveMenu(null)} 
                      className="rounded-lg border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:bg-slate-100"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* 3. SERVICES MEGA MENU */}
          {/* ========================================================= */}
          <div 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('service')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => handleToggle('service')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${activeMenu === 'service' ? 'text-teal-dark font-semibold' : 'text-ink/80 hover:text-teal-dark'}`}
            >
              <span>Service</span>
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                className={`transition-transform duration-200 ${activeMenu === 'service' ? 'rotate-180 text-teal-dark' : ''}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {activeMenu === 'service' && (
              <div className="absolute -left-16 top-full pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-[620px] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5 bg-slate-50/50">
                    <span className="font-display text-sm font-bold text-ink">Services</span>
                    <Link href="/services/" onClick={() => setActiveMenu(null)} className="text-xs font-semibold text-teal-dark hover:underline">
                      <span className="font-display text-lg font-bold tracking-tight text-ink">
            WitQualis
            <span className="hidden text-teal-dark sm:inline"> Technologies</span>
          </span> &rarr;
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-5">
                    {(services || []).map((s, idx) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}/`}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50 group"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {idx % 4 === 0 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          )}
                          {idx % 4 === 1 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {idx % 4 === 2 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          )}
                          {idx % 4 === 3 && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-ink group-hover:text-teal-dark transition-colors">
                            {s.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-ink/55 line-clamp-2">
                            {s.tagline || 'High performance web & mobile engineering.'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/10 bg-slate-50 px-6 py-3.5">
                    <div>
                      <h5 className="text-sm font-semibold text-ink">Ready to start building?</h5>
                      <p className="text-xs text-ink/60">Deploy pre-vetted engineers with a trial sprint available.</p>
                    </div>
                    <Link href="/contact/" onClick={() => setActiveMenu(null)} className="rounded-lg border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:bg-slate-100">
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* 4. SOLUTIONS MEGA MENU */}
          {/* ========================================================= */}
          <div 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('solution')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => handleToggle('solution')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${activeMenu === 'solution' ? 'text-teal-dark font-semibold' : 'text-ink/80 hover:text-teal-dark'}`}
            >
              <span>Solution</span>
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                className={`transition-transform duration-200 ${activeMenu === 'solution' ? 'rotate-180 text-teal-dark' : ''}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {activeMenu === 'solution' && (
              <div className="absolute -left-28 top-full pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-[620px] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5 bg-slate-50/50">
                    <span className="font-display text-sm font-bold text-ink">Solutions</span>
                    <Link href="/services/" onClick={() => setActiveMenu(null)} className="text-xs font-semibold text-teal-dark hover:underline">
                      <span className="font-display text-lg font-bold tracking-tight text-ink">
            WitQualis
            <span className="hidden text-teal-dark sm:inline"> Technologies</span>
          </span> &rarr;
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-5">
                    {(solutions || []).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}/`}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50 group"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50/80 text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-ink group-hover:text-teal-dark transition-colors">
                              {s.name}
                            </h4>
                            {s.isAI && (
                              <span className="rounded bg-teal/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-teal-dark">
                                AI
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-xs text-ink/55 line-clamp-2">{s.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/10 bg-slate-50 px-6 py-3.5">
                    <div>
                      <h5 className="text-sm font-semibold text-ink">Custom AI &amp; Cloud Systems</h5>
                      <p className="text-xs text-ink/60">LLMs, vector databases, and production RAG pipelines.</p>
                    </div>
                    <Link href="/contact/" onClick={() => setActiveMenu(null)} className="rounded-lg border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:bg-slate-100">
                      Start A Project
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

         

          {/* ========================================================= */}
          {/* 5. DEDICATED TEAM (MANTINE CARD THEME - CLEAN VIEWPORT) */}
          {/* ========================================================= */}
          <div 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('team')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => handleToggle('team')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${activeMenu === 'team' ? 'text-teal-dark font-semibold' : 'text-ink/80 hover:text-teal-dark'}`}
            >
              <span>Dedicated Team</span>
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                className={`transition-transform duration-200 ${activeMenu === 'team' ? 'rotate-180 text-teal-dark' : ''}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {activeMenu === 'team' && (
              <div className="absolute -right-12 top-full pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-[840px] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-ink/10 px-6 py-3.5 bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm font-bold text-ink">Dedicated Engineering Teams</span>
                      <span className="rounded bg-teal/10 px-2 py-0.5 font-mono text-[10px] font-bold text-teal-dark">7 Practices • 30+ Stacks</span>
                    </div>
                    <Link href="/staff-augmentation/" onClick={() => setActiveMenu(null)} className="text-xs font-semibold text-teal-dark hover:underline">
                      How it works &rarr;
                    </Link>
                  </div>

                  {/* Multi-Column Categorized Stacks */}
                  <div className="grid grid-cols-4 gap-5 p-6 max-h-[400px] overflow-y-auto">
                    {(stacksByCategory || []).map(({ category, stacks }) => (
                      <div key={category} className="space-y-2">
                        <div className="flex items-center gap-1.5 border-b border-ink/5 pb-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-dark"></span>
                          <p className="font-display text-[10px] font-bold uppercase tracking-wider text-teal-dark truncate">
                            {category}
                          </p>
                        </div>
                        <ul className="space-y-0.5">
                          {(stacks || []).map((s) => (
                            <li key={s.slug}>
                              <Link 
                                href={`/hire/${s.slug}/`} 
                                onClick={() => setActiveMenu(null)}
                                className="text-xs text-ink/75 hover:text-teal-dark hover:translate-x-1 transition-all font-medium block py-0.5"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Footer Banner */}
                  <div className="flex items-center justify-between border-t border-ink/10 bg-slate-50 px-6 py-3.5">
                    <div>
                      <h5 className="text-sm font-semibold text-ink">Need developers for your upcoming sprint?</h5>
                      <p className="text-xs text-ink/60">Shortlist within 24–48 hours, with a trial sprint available.</p>
                    </div>
                    <Link 
                      href="/hire/" 
                      onClick={() => setActiveMenu(null)}
                      className="rounded-lg bg-[#E31E24] hover:bg-red-700 text-white px-4 py-2 text-xs font-semibold shadow-sm transition"
                    >
                      Hire Developers
                    </Link>
                  </div>

                </div>
              </div>
            )}
          </div>

          <Link href="/blog/" className="text-sm font-medium text-ink/80 hover:text-teal-dark transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <Link href="/contact/" className="btn-primary">
            Talk to Us
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1H18M0 7H18M0 13H18" stroke="#0A0F1E" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-ink/10 bg-white px-5 pb-6 lg:hidden">
          <details className="border-b border-ink/10 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-ink">About Us</summary>
            <div className="mt-3 space-y-1 pl-2">
              <Link href="/our-team/" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">Our Team</Link>
              <Link href="/portfolio/" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">Portfolio</Link>
              <Link href="/careers/" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">Career</Link>
              <Link href="/contact/" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">Contact Us</Link>
            </div>
          </details>

          <details className="border-b border-ink/10 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-ink">Service</summary>
            <div className="mt-3 space-y-1 pl-2">
              {(services || []).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}/`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">
                  {s.name}
                </Link>
              ))}
            </div>
          </details>

          <details className="border-b border-ink/10 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-ink">Solution</summary>
            <div className="mt-3 space-y-1 pl-2">
              {(solutions || []).map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}/`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">
                  {s.name}
                </Link>
              ))}
            </div>
          </details>

          <details className="border-b border-ink/10 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-ink">
              AI <span className="ml-1 rounded bg-teal/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-teal-dark align-middle">NEW</span>
            </summary>
            <div className="mt-3 space-y-1 pl-2">
              {aiSolutions.map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}/`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">
                  {s.name}
                </Link>
              ))}
              <Link href="/hire/hire-ai-developers/" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm font-semibold text-teal-dark">
                Hire AI Developers &rarr;
              </Link>
            </div>
          </details>

          <details className="border-b border-ink/10 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-ink">Dedicated Team</summary>
            <div className="mt-3 space-y-1 pl-2">
              <Link href="/hire/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-bold text-[#E31E24]">
                Hire Developers (All Stacks) &rarr;
              </Link>
              {(stacksByCategory || []).map(({ category, stacks }) => (
                <div key={category} className="pl-2">
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/40">{category}</p>
                  {(stacks || []).map((s) => (
                    <Link key={s.slug} href={`/hire/${s.slug}/`} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-ink/70">
                      {s.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </details>

          <Link href="/blog/" className="block py-3 text-sm font-semibold text-ink/80" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/contact/" className="btn-primary mt-3 w-full justify-center" onClick={() => setMobileOpen(false)}>
            Talk to Us
          </Link>
        </div>
      )}
    </header>
  );
}