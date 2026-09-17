'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [showMore, setShowMore] = useState(false);

  const extraResources = [
    { name: 'Android Developers', href: '/hire/android/' },
    { name: 'iOS Developers', href: '/hire/ios/' },
    { name: 'PHP Developer', href: '/hire/php/' },
    { name: 'Codeigniter Developers', href: '/hire/codeigniter/' },
    { name: 'Laravel Developers', href: '/hire/laravel/' },
    { name: 'Magento Developers', href: '/hire/magento/' },
    { name: '.NET Developers', href: '/hire/net/' },
    { name: 'Python Developers', href: '/hire/python/' },
    { name: 'Drupal Developers', href: '/hire/drupal/' },
    { name: 'BigCommerce Developers', href: '/hire/bigcommerce/' },
    { name: 'Ecommerce Developers', href: '/hire/ecommerce/' },
    { name: 'NodeJS Developers', href: '/hire/nodejs/' },
    { name: 'Joomla Developers', href: '/hire/joomla/' },
    { name: 'MEAN Developers', href: '/hire/mean/' },
    { name: 'MERN Stack Developers', href: '/hire/mern-stack/' },
    { name: 'Power BI Consultants', href: '/hire/power-bi/' },
    { name: 'SQL Developers', href: '/hire/sql/' },
    { name: 'Database Developers', href: '/hire/database/' },
    { name: 'Azure Developers', href: '/hire/azure/' }
  ];

  return (
    <>
      <footer className="bg-black text-white pt-16 border-t-4 border-[#E31E24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* MAIN FOOTER COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
            
            {/* COLUMN 1: INQUIRIES */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[#E31E24] font-bold text-sm tracking-wider uppercase">Inquiries</h4>
              
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="font-bold text-white mb-0.5">HR / Career :</p>
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
                  <p className="font-bold text-white mb-0.5">Sales Inquiries :</p>
                  <a 
                    href="mailto:info@witqualis.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-[#E31E24] transition-colors block text-xs"
                  >
                    info@witqualis.com
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

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://www.instagram.com/witqualis/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#E31E24] text-lg transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/witqualis-it-services" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#E31E24] text-lg transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/pg/witqualis" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#E31E24] text-lg transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://clutch.co/profile/witqualis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Clutch Profile">
                  <Image src="/images/social/clutch.svg" alt="Clutch" width={22} height={22} className="w-5 h-5 rounded-full bg-white p-0.5" />
                </a>
              </div>

              {/* FLAGS GRID */}
              <div className="grid grid-cols-3 gap-2 w-32 pt-2">
                <Link href="/contact/#india" className="block hover:opacity-80">
                  <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-6 h-auto rounded-sm mx-auto" />
                </Link>
                <Link href="/contact/#dubai" className="block hover:opacity-80">
                  <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-6 h-auto rounded-sm mx-auto" />
                </Link>
                <Link href="/contact/#australia" className="block hover:opacity-80">
                  <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-6 h-auto rounded-sm mx-auto" />
                </Link>
                <Link href="/contact/#america" className="block hover:opacity-80">
                  <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-6 h-auto rounded-sm mx-auto" />
                </Link>
                <Link href="/contact/#canada" className="block hover:opacity-80">
                  <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-6 h-auto rounded-sm mx-auto" />
                </Link>
                <Link href="/contact/#singapore" className="block hover:opacity-80">
                  <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="w-6 h-auto rounded-sm mx-auto" />
                </Link>
              </div>
            </div>

            {/* COLUMN 2: COMPANY */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[#E31E24] font-bold text-sm tracking-wider uppercase">Company</h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {['Our Team', 'Portfolio', 'Career', 'Contact Us', 'Blog'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}/`} 
                      className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                    >
                      <span className="text-[10px] text-gray-400">&gt;</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: HIRE RESOURCE (WITH TOGGLE) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[#E31E24] font-bold text-sm tracking-wider uppercase">Hire Resource</h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li>
                  <Link href="/hire/angular-js-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400">&gt;</span> AngularJS Developers
                  </Link>
                </li>
                <li>
                  <Link href="/hire/react-js-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400">&gt;</span> React JS Developers
                  </Link>
                </li>
                <li>
                  <Link href="/hire/vue-js-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400">&gt;</span> VueJS Developers
                  </Link>
                </li>
                <li>
                  <Link href="/hire/react-native-developers/" className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400">&gt;</span> React Native Developers
                  </Link>
                </li>

                {showMore && extraResources.map((res) => (
                  <li key={res.name}>
                    <Link href={res.href} className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-400">&gt;</span> {res.name}
                    </Link>
                  </li>
                ))}

                <li>
                  <button 
                    type="button"
                    onClick={() => setShowMore(!showMore)} 
                    className="text-white hover:text-[#E31E24] font-semibold text-xs pt-1 underline cursor-pointer"
                  >
                    {showMore ? 'See Less...' : 'See More...'}
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: SOLUTION */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[#E31E24] font-bold text-sm tracking-wider uppercase">Solution</h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {[
                  { name: 'Business & Technical Consulting', href: '/services/' },
                  { name: 'Product Design', href: '/services/' },
                  { name: 'Product Development', href: '/services/' },
                  { name: 'Staff Augmentation', href: '/staff-augmentation/' },
                  { name: 'MVP', href: '/services/' },
                  { name: 'Industries', href: '/about/' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                    >
                      <span className="text-[10px] text-gray-400">&gt;</span> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 5: SERVICES */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[#E31E24] font-bold text-sm tracking-wider uppercase">Services</h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {[
                  'Web Development',
                  'App Development',
                  'Design',
                  'Cross Platform App Development'
                ].map((item) => (
                  <li key={item}>
                    <Link 
                      href="/services/" 
                      className="hover:text-[#E31E24] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                    >
                      <span className="text-[10px] text-gray-400">&gt;</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* BOTTOM RIGHTS BAR */}
          <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="WitQualis Technologies"
                className="h-8 w-auto"
                width={170} 
                height={150} 
              />
            </div>

            {/* DMCA & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
              <img 
                src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-01.png?ID=5787413d-e2f7-49c1-9cca-8232606a983d" 
                alt="DMCA.com Protection Status" 
                className="h-7 w-auto"
              />
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} All Rights Reserved by <Link href="/" className="text-[#E31E24] font-bold hover:underline">WitQualis</Link>
              </p>
            </div>

            {/* Certifications (ISO Badges) */}
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-full overflow-hidden bg-white p-0.5 flex items-center justify-center shadow-md border border-white/20">
                <Image 
                  src="/images/social/ISO-1.svg" 
                  alt="ISO 27001:2022 Certified Company" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-14 w-14 rounded-full overflow-hidden bg-white p-0.5 flex items-center justify-center shadow-md border border-white/20">
                <Image 
                  src="/images/social/ISO-2.svg" 
                  alt="ISO 9001:2015 Certified Company" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}