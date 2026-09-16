// src/app/our-team/JoinOurTeamSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Briefcase, ArrowUpRight, CheckCircle2, Globe, Cpu, Laptop, Rocket, X, Send } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';

const openRoles = [
  {
    title: 'Senior AI & RAG Vector Architect',
    type: 'Full-Time',
    location: 'Remote / Global',
    department: 'AI & Data Science',
    badge: 'HIGH DEMAND',
    skills: ['PyTorch', 'LangChain', 'LlamaIndex', 'Pinecone', 'Python FastAPI']
  },
  {
    title: 'Principal Next.js & Full-Stack Engineer',
    type: 'Full-Time',
    location: 'Remote / India Hub',
    department: 'Engineering',
    badge: 'ACTIVE SPRINT',
    skills: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Creative WebGL & Three.js Visualizer',
    type: 'Contract / Sprint',
    location: 'Remote',
    department: 'Creative Web',
    badge: 'IMMEDIATE',
    skills: ['Three.js', 'GLSL Shaders', 'WebGL', 'Framer Motion', 'Canvas']
  },
  {
    title: 'Cloud DevOps & Kubernetes SRE Lead',
    type: 'Full-Time',
    location: 'Remote / Global',
    department: 'Infrastructure',
    badge: 'CRITICAL',
    skills: ['AWS', 'Kubernetes (K8s)', 'Terraform', 'Docker', 'Prometheus']
  },
  {
    title: 'UI/UX Design Systems Architect',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    department: 'Design',
    badge: 'NEW',
    skills: ['Figma Tokens', 'Atomic Design', 'User Research', 'Prototyping']
  }
];

const perks = [
  {
    icon: <Globe className="w-5 h-5 text-red-600" />,
    title: 'Remote / Hybrid Flexibility',
    description: 'Work from our modern tech hubs in India, UAE, and North America or anywhere worldwide.'
  },
  {
    icon: <Cpu className="w-5 h-5 text-red-600" />,
    title: 'Cutting-Edge AI & Tooling',
    description: 'Full enterprise access to Claude 3.7, GPT-4o, GitHub Copilot, and high-performance hardware.'
  },
  {
    icon: <Rocket className="w-5 h-5 text-red-600" />,
    title: '15-Day Paid Evaluation Sprint',
    description: 'A transparent paid trial period to ensure mutual technical and cultural alignment before full lock-in.'
  },
  {
    icon: <Laptop className="w-5 h-5 text-red-600" />,
    title: 'Continuous Upskilling Stipend',
    description: 'Annual budgets for cloud certifications (AWS/GCP), international conferences, and technical courses.'
  }
];

export default function JoinOurTeamSection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applicantSubmitted, setApplicantSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    github: '',
    experienceYears: '3-5 Years',
    message: ''
  });

  const handleApplyClick = (roleTitle: string) => {
    soundFx.playPop();
    setSelectedRole(roleTitle);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setApplicantSubmitted(true);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#dc2626', '#34d399', '#f59e0b']
    });

    setTimeout(() => {
      setApplicantSubmitted(false);
      setSelectedRole(null);
      setApplicantData({
        name: '',
        email: '',
        github: '',
        experienceYears: '3-5 Years',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="join-our-team" className="relative py-28 bg-[#fafafa] text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-red-500/20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL CAREER OPENINGS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            Build The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-slate-900">
              With Our Engineering Squad
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            We are always scouting exceptional architects, creative developers, and AI researchers to join our global delivery teams.
          </p>
        </motion.div>

        {/* 4 Perks Grid in Frosted Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-3xl bg-white/80 border border-slate-200/90 backdrop-blur-xl shadow-md hover:border-red-500/40 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-4">
                {perk.icon}
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-2">{perk.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Roles List in Frosted Glass Cards */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>CURRENT OPEN ROLES ({openRoles.length})</span>
            </span>
            <span className="text-xs font-mono text-slate-500">APPLY DIRECTLY</span>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/90 backdrop-blur-xl shadow-lg hover:border-red-500/50 hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {role.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{role.department}</span>
                    <span className="text-xs font-mono text-slate-400">• {role.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-red-600 transition-colors">
                    {role.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.skills.map((s, si) => (
                      <span
                        key={si}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(role.title)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-md shadow-red-500/20 self-start md:self-auto cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-lg rounded-3xl border border-red-500/40 bg-white p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                    ROLE APPLICATION
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 mt-1">{selectedRole}</h3>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {applicantSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-950">Application Dispatched</h4>
                  <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
                    Our technical recruitment squad will review your GitHub/portfolio and reach out within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-600 uppercase block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 uppercase block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 uppercase block mb-1">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      required
                      value={applicantData.github}
                      onChange={(e) => setApplicantData({ ...applicantData, github: e.target.value })}
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 uppercase block mb-1">Brief Technical Background</label>
                    <textarea
                      rows={3}
                      value={applicantData.message}
                      onChange={(e) => setApplicantData({ ...applicantData, message: e.target.value })}
                      placeholder="Mention your key projects or framework proficiencies..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 outline-none focus:border-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all cursor-pointer shadow-md shadow-red-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Candidacy</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
