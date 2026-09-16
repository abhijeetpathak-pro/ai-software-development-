'use client';

import { useState } from 'react';
import Link from 'next/link';

const servicesData = [
  {
    title: 'Custom Web Engineering',
    description: 'Scalable Next.js, React, Node, and Python architectures.',
    href: '/services/',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform native iOS & Android applications.',
    href: '/services/',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Staff Augmentation',
    description: 'Pre-vetted developers ready to sprint in 48 hours.',
    href: '/staff-augmentation/',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    description: 'Automated CI/CD pipelines, AWS, and Azure setup.',
    href: '/services/',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'AI & Data Engineering',
    description: 'Custom AI agents, LLM integrations, and pipeline automation.',
    href: '/services/',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'MVP & Product Strategy',
    description: 'Rapid prototyping and minimum viable product execution.',
    href: '/services/',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function HeaderMegaMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#020617] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black italic tracking-tighter flex items-center gap-1.5">
          <span>WITQUALIS</span>
          <span className="h-2.5 w-2.5 bg-[#E31E24] rounded-sm"></span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-1 h-full">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/5 rounded-md transition-colors">
            Home
          </Link>

          {/* SERVICES MEGA DROPDOWN */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/5 rounded-md flex items-center gap-1 transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Services</span>
              <svg className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* MEGA MENU PANEL */}
            {isServicesOpen && (
              <div className="absolute top-[65px] left-1/2 -translate-x-1/2 w-[650px] bg-[#020617] border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-200">
                <div className="p-4 flex items-center justify-between border-b border-white/10">
                  <span className="text-sm font-semibold text-white">Engineering Offerings</span>
                  <Link href="/services/" className="text-xs text-sky-400 hover:underline">
                    View all &rarr;
                  </Link>
                </div>

                <div className="p-4 grid grid-cols-2 gap-3">
                  {servicesData.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="p-3 rounded-lg hover:bg-white/5 flex items-start gap-3 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                          {item.title}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="p-4 bg-[#0b1329] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-semibold text-white">Need on-demand tech talent?</h5>
                    <p className="text-xs text-slate-400">Start your developer trial sprint today.</p>
                  </div>
                  <Link
                    href="/contact/"
                    className="px-3.5 py-2 bg-[#E31E24] hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    Hire Developers
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/portfolio/" className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/5 rounded-md transition-colors">
            Portfolio
          </Link>
          <Link href="/about/" className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/5 rounded-md transition-colors">
            About
          </Link>
          <Link href="/blog/" className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/5 rounded-md transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact/"
            className="px-5 py-2 bg-[#E31E24] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:text-slate-300 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#020617] border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5 rounded-md"
            >
              <span>Services</span>
              <svg className={`w-4 h-4 text-sky-400 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 rounded-lg mt-1">
                {servicesData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-sm text-slate-300 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Portfolio
          </Link>
          <Link
            href="/about/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            About
          </Link>
          <Link
            href="/blog/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Blog
          </Link>

          <div className="pt-4">
            <Link
              href="/contact/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-[#E31E24] text-white font-semibold rounded-lg shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}