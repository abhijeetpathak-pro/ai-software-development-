// src/app/careers/CareersFAQ.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const candidateFaqs = [
  {
    q: 'How do I apply for a role at WitQualis?',
    a: 'You can apply directly by clicking "Apply Now" on any open position listed above and uploading your resume/portfolio. Alternatively, you can email your CV directly to hr@witqualis.com mentioning the job title in the subject line.'
  },
  {
    q: 'Can freshers and recent college graduates apply?',
    a: 'Yes, absolutely! We actively recruit passionate graduates through our Graduate Engineer Trainee (GET) and internship programs. Look for roles tagged "Internship / Fresher" or submit your profile through our Freshers Academy section.'
  },
  {
    q: 'Do you offer remote working positions?',
    a: 'Yes. Most of our software engineering and design positions are remote-first, allowing you to work from anywhere. We also have collaborative physical office hubs in Delhi NCR for engineers who prefer hybrid or in-office setups.'
  },
  {
    q: 'What is the interview process like?',
    a: 'Our interview process consists of 4 fast-track stages: (1) Application Review, (2) 30-min HR Screening Call, (3) Practical Technical / Architecture Discussion with an Engineering Lead, and (4) Transparent Offer & Onboarding. We focus on real-world problem-solving rather than rote trivia.'
  },
  {
    q: 'How long does the hiring process take?',
    a: 'From initial screening to a formal offer, we aim to keep the process moving and provide feedback to every candidate.'
  },
  {
    q: 'Can I apply for multiple positions simultaneously?',
    a: 'Yes. If your skillset spans across multiple domains (e.g., Frontend and Full-Stack, or AI and Backend), you can apply for more than one role. Our recruitment team will evaluate your profile for the best-matching opportunity.'
  }
];

export default function CareersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    soundFx.playChirp();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 border-b border-slate-200 selection:bg-red-500/20">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CANDIDATE FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            FREQUENTLY ASKED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              QUESTIONS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal">
            Everything you need to know about our application process, remote policies, freshers hiring, and interview expectations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {candidateFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#E31E24]/50 bg-white shadow-xl ring-1 ring-[#E31E24]/20'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-bold font-sans ${isOpen ? 'text-[#E31E24]' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                      isOpen ? 'bg-[#E31E24] text-white rotate-180 shadow-md' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
