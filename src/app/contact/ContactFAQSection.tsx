// src/app/contact/ContactFAQSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const faqs = [
  {
    q: 'How fast will I receive a response to my inquiry?',
    qSub: 'Response kitne time mein milega?',
    a: 'We aim to respond within 24 to 48 hours. Your inquiry is reviewed directly by our solutions team, who will reach out with technical feasibility insights and preliminary squad sizing.'
  },
  {
    q: 'How quickly can we start the project?',
    qSub: 'Project start hone mein kitna time lagta hai?',
    a: 'Once scope alignment and agreements are finalized, we can kick off within 48 to 72 hours. For dedicated engineering squads and staff augmentation, matched senior developers can be integrated into your Slack and Jira environments almost immediately.'
  },
  {
    q: 'How is the approximate project cost calculated?',
    qSub: 'Approximate cost kaise calculate hoti hai?',
    a: 'Pricing depends on your engagement model. Fixed-scope projects are estimated from milestone story points and architecture complexity; dedicated squads are billed as monthly retainers. A 7-day trial sprint is available for augmented developers.'
  },
  {
    q: 'Do you sign a Non-Disclosure Agreement (NDA) before sharing project details?',
    qSub: 'Kya NDA sign karte hain?',
    a: 'Yes, absolutely. We sign a comprehensive mutual Non-Disclosure Agreement (NDA) before reviewing your proprietary blueprints, wireframes, or codebases. Clients retain intellectual property and code ownership under the terms of the signed engagement contract.'
  },
  {
    q: 'Do you maintain and upgrade existing software & legacy codebases?',
    qSub: 'Kya existing software maintain karte hain?',
    a: 'Yes. We provide full lifecycle maintenance, code audits, bug fixes, modern framework upgrades (e.g., legacy React/Node migration to Next.js 15), cloud DevOps optimization, and round-the-clock SLA support for existing applications.'
  }
];

export default function ContactFAQSection() {
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
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            HAVE QUESTIONS? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              WE HAVE ANSWERS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal">
            Clear, transparent answers about our response times, NDA signing, project estimation, and support terms.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
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
                  <div>
                    <h3 className={`text-base sm:text-lg font-bold font-sans ${isOpen ? 'text-[#E31E24]' : 'text-slate-900'}`}>
                      {faq.q}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">
                      {faq.qSub}
                    </p>
                  </div>

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
