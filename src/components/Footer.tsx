'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [showMore, setShowMore] = useState(false);

  const extraResources = [
    { name: 'AngularJS Developers', href: '/hire/angular-js-developers/' },
    { name: 'VueJS Developers', href: '/hire/vue-js-developers/' },
    { name: 'React Native Developers', href: '/hire/react-native-developers/' },
    { name: 'Android Developers', href: '/hire/android-developers/' },
    { name: 'iOS Developers', href: '/hire/ios-app-developers/' },
    { name: 'PHP Developers', href: '/hire/php-web-developers/' },
    { name: 'Laravel Developers', href: '/hire/laravel-developers/' },
    { name: '.NET Developers', href: '/hire/asp-net-developers/' },
    { name: 'DevOps & SRE', href: '/hire/devops-engineers/' },
    { name: 'QA Automation', href: '/hire/qa-automation/' },
    { name: 'Gen AI Developers', href: '/hire/gen-ai-developers/' },
    { name: 'Cybersecurity Experts', href: '/hire/cybersecurity-experts/' },
  ];

  return (
    <footer className="bg-black text-white pt-10 sm:pt-12 pb-6 border-t-4 border-[#E31E24]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 lg:gap-8 pb-8">

          {/* COLUMN 1: INQUIRIES & ASSETS (lg:col-span-3) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-3.5">
            <h4 className="text-[#E31E24] font-bold text-xs sm:text-sm tracking-wider uppercase">Inquiries</h4>

            <div className="space-y-2 text-xs text-gray-300">
              <div>
                <p className="font-semibold text-white text-xs">HR / Career:</p>
                <a
                  href="mailto:hr@witqualis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E31E24] transition-colors block text-xs"
                >
                  hr@witqualis.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-white text-xs">Sales Inquiries:</p>
                <a
                  href="mailto:sales@witqualis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E31E24] transition-colors block text-xs"
                >
                  sales@witqualis.com
                </a>
                <a
                  href="https://wa.me/919289633637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E31E24] transition-colors block text-xs mt-0.5"
                >
                  +91 9289633637
                </a>
              </div>
            </div>

            {/* SOCIAL ICONS (INQUIRIES KE NICHE) */}
            <div className="flex items-center gap-2.5 pt-0.5">
              <a href="https://www.instagram.com/witqualis/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E31E24] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/witqualis-it-services" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E31E24] transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://www.facebook.com/pg/witqualis" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E31E24] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="https://clutch.co/profile/witqualis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Clutch Profile">
                <Image src="/images/social/clutch.svg" alt="Clutch" width={18} height={18} className="w-4 h-4 rounded-full bg-white p-0.5" />
              </a>
            </div>

            {/* FLAGS (3-3 FLAG EK SATH: 2 ROWS) */}
            <div className="grid grid-cols-3 gap-2 w-fit pt-0.5">
              {/* Line 1 (3 flags) */}
              <Link href="/contact/#india" className="block hover:opacity-80 transition-opacity" title="India Hub">
                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-auto rounded-xs shadow-xs" />
              </Link>
              <Link href="/contact/#dubai" className="block hover:opacity-80 transition-opacity" title="UAE Hub">
                <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-5 h-auto rounded-xs shadow-xs" />
              </Link>
              <Link href="/contact/#australia" className="block hover:opacity-80 transition-opacity" title="Australia Hub">
                <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-5 h-auto rounded-xs shadow-xs" />
              </Link>
              {/* Line 2 (3 flags) */}
              <Link href="/contact/#america" className="block hover:opacity-80 transition-opacity" title="USA Hub">
                <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-5 h-auto rounded-xs shadow-xs" />
              </Link>
              <Link href="/contact/#canada" className="block hover:opacity-80 transition-opacity" title="Canada Hub">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-5 h-auto rounded-xs shadow-xs" />
              </Link>
              <Link href="/contact/#singapore" className="block hover:opacity-80 transition-opacity" title="Singapore Hub">
                <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="w-5 h-auto rounded-xs shadow-xs" />
              </Link>
            </div>
          </div>

          {/* COLUMN 2: COMPANY (lg:col-span-2) */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-[#E31E24] font-bold text-xs sm:text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {[
                { name: 'About Us', href: '/about/' },
                { name: 'Our Team', href: '/our-team/' },
                { name: 'Portfolio', href: '/portfolio/' },
                { name: 'Careers', href: '/careers/' },
                { name: 'Contact Us', href: '/contact/' },
                { name: 'Blog', href: '/blog/' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-gray-500">&gt;</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SOLUTION (lg:col-span-2) */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-[#E31E24] font-bold text-xs sm:text-sm tracking-wider uppercase">Solution</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {[
                { name: 'AI Development', href: '/solutions/ai-development/' },
                { name: 'Generative AI Solutions', href: '/solutions/generative-ai-solutions/' },
                { name: 'AI Consulting', href: '/solutions/ai-consulting/' },
                { name: 'Machine Learning Development', href: '/solutions/machine-learning-development/' },
                { name: 'Cloud Solutions & Migration', href: '/solutions/cloud-solutions/' },
                { name: 'Enterprise Software', href: '/solutions/enterprise-software/' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-gray-500">&gt;</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: SERVICES (lg:col-span-2) */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-[#E31E24] font-bold text-xs sm:text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {[
                { name: 'Web Development', href: '/services/web-development/' },
                { name: 'App Development', href: '/services/app-development/' },
                { name: 'UI/UX Design', href: '/services/design/' },
                { name: 'Cross Platform Apps', href: '/services/cross-platform-app-development/' },
                { name: 'Staff Augmentation', href: '/staff-augmentation/' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-gray-500">&gt;</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: DEDICATED TEAM (lg:col-span-3) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-[#E31E24] font-bold text-xs sm:text-sm tracking-wider uppercase">Dedicated Team</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li>
                <Link href="/hire/react-js-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-[10px] text-gray-500">&gt;</span> React JS Developers
                </Link>
              </li>
              <li>
                <Link href="/hire/node-js-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-[10px] text-gray-500">&gt;</span> Node.js Developers
                </Link>
              </li>
              <li>
                <Link href="/hire/hire-ai-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-[10px] text-gray-500">&gt;</span> AI &amp; ML Developers
                </Link>
              </li>
              <li>
                <Link href="/hire/hire-python-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-[10px] text-gray-500">&gt;</span> Python Developers
                </Link>
              </li>
              <li>
                <Link href="/hire/flutter-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-[10px] text-gray-500">&gt;</span> Flutter Developers
                </Link>
              </li>

              {showMore && extraResources.map((res) => (
                <li key={res.name}>
                  <Link href={res.href} className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-500">&gt;</span> {res.name}
                  </Link>
                </li>
              ))}

              <li className="pt-2 flex items-center justify-between border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  className="text-white hover:text-[#E31E24] font-semibold text-xs underline cursor-pointer"
                >
                  {showMore ? 'See Less...' : 'See More...'}
                </button>
                <Link
                  href="/hire/"
                  className="text-[#E31E24] hover:text-white font-bold text-xs inline-flex items-center gap-1 transition-colors"
                >
                  Hire Developers &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM RIGHTS BAR */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="WitQualis Technologies"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
              width={200}
              height={150}
            />
          </Link>

          {/* DMCA & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center">
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-01.png?ID=5787413d-e2f7-49c1-9cca-8232606a983d"
              alt="DMCA.com Protection Status"
              className="h-6 w-auto"
            />
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} All Rights Reserved by <Link href="/" className="text-[#E31E24] font-bold hover:underline">WitQualis</Link>
            </p>
          </div>

          {/* Certifications (ISO Badge - Sabse Niche Rectangle) */}
          <div className="flex items-center">
            <div className="rounded-xl overflow-hidden p-2 sm:p-2.5 flex items-center justify-center hover:scale-105 transition-transform duration-200" title="ISO Certified Company">
              <Image
                src="/images/social/ISO-1.webp"
                alt="ISO Certified Company"
                width={260}
                height={130}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
