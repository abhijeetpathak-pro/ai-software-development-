// src/app/our-team/TeamShowcase.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Mail, Phone, ExternalLink, X, Award, CheckCircle2, Code2, Globe, Cpu } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/animated/SocialIcons';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'ai-cloud' | 'fullstack' | 'operations';
  categoryLabel: string;
  image: string;
  experience: string;
  skills: string[];
  bio: string;
  stats: string;
  email: string;
  phone: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 'anwar-khan',
    name: 'Anwar Khan',
    role: 'Founder & Managing Director',
    category: 'leadership',
    categoryLabel: 'Executive Leadership',
    image: '/images/team/a_khan.webp',
    experience: '12+ Years Exp',
    skills: ['Enterprise Strategy', 'Venture Scaling', 'Global IT Delivery', 'Client Partnerships'],
    bio: 'Visionary entrepreneur spearheading global talent expansion and enterprise digital transformations across North America, Europe, and Asia-Pacific.',
    stats: 'Enterprise Strategy Leadership',
    email: 'anwar@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/in/imanwark/',
    }
  },
  {
    id: 'chandrapal-singh',
    name: 'Chandrapal Singh',
    role: 'Chief Technology Officer (CTO)',
    category: 'ai-cloud',
    categoryLabel: 'AI & Cloud Architects',
    image: '/images/team/chanderpal.jpg',
    experience: '10+ Years Exp',
    skills: ['Applied AI & RAG', 'Cloud Architecture', 'Distributed Systems', 'Kubernetes'],
    bio: 'Leading technical roadmap, high-throughput microservices, and private RAG vector architectures for enterprise and high-growth clients.',
    stats: 'AI & Cloud Architecture',
    email: 'cto@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/company/witqualis/posts/?feedView=all',
    }
  },
  {
    id: 'aslam-khan',
    name: 'Aslam Khan',
    role: 'Sales & Marketing Director',
    category: 'leadership',
    categoryLabel: 'Executive Leadership',
    image: '/images/team/aslam.webp',
    experience: '9+ Years Exp',
    skills: ['International Expansion', 'Staff Augmentation', 'Key Accounts', 'Go-To-Market'],
    bio: 'Directing international business development, enterprise client acquisition, and offshore engineering team structuring.',
    stats: 'Enterprise Client Growth',
    email: 'aslam@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/in/aslamkhan123/',
    }
  },
  {
    id: 'shubham-sharma',
    name: 'Shubham Sharma',
    role: 'Business Development Manager',
    category: 'operations',
    categoryLabel: 'Growth & Operations',
    image: '/images/team/Shubham.webp',
    experience: '7+ Years Exp',
    skills: ['Client Success', 'Sprint Discovery', 'Technical Scoping', 'Account Growth'],
    bio: 'Bridging engineering capabilities with client roadmaps and coordinating developer deployment onto client engagements.',
    stats: 'Client Success & Growth',
    email: 'shubham@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/in/shubham-sharma-38b585253/',
    }
  },
  {
    id: 'sonam-jainwal',
    name: 'Sonam Jainwal',
    role: 'Head of Human Resources',
    category: 'operations',
    categoryLabel: 'Growth & Operations',
    image: '/images/team/Sonam.webp',
    experience: '8+ Years Exp',
    skills: ['Talent Vetting', 'Engineering Culture', 'Global Onboarding', 'People Ops'],
    bio: 'Overseeing the engineer assessment pipeline, culture, and offshore talent onboarding.',
    stats: 'Engineering Talent Pipeline',
    email: 'sonam@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/in/sonam-jainwal-695755185/',
    }
  },
  {
    id: 'abhijeet-pathak',
    name: 'Abhijeet Pathak',
    role: 'Digital Marketing & Growth Lead',
    category: 'operations',
    categoryLabel: 'Growth & Operations',
    image: '/images/team/Akhil.webp',
    experience: '6+ Years Exp',
    skills: ['Data-Driven Growth', 'Performance Marketing', 'Brand Strategy', 'Analytics'],
    bio: 'Spearheading digital footprint, technical brand positioning, and multichannel growth strategies for WitQualis and client portfolios.',
    stats: 'Digital Growth Strategy',
    email: 'Sales@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/in/abhijeetpathak-digitalmarketing/',
    }
  },
  {
    id: 'vishal-bidlan',
    name: 'Vishal Bidlan',
    role: 'Vendor & Resource Manager',
    category: 'operations',
    categoryLabel: 'Growth & Operations',
    image: '/images/team/Vishal.webp',
    experience: '7+ Years Exp',
    skills: ['Resource Allocation', 'Vendor Networks', 'SLA Management', 'Contract Operations'],
    bio: 'Managing strategic vendor relationships, specialized skill acquisition, and contractual compliance for high-velocity tech stacks.',
    stats: 'Standard SLA Practices',
    email: 'vendor@witqualis.com',
    phone: '+91 9289633637',
    social: {
      linkedin: 'https://www.linkedin.com/in/vishal-bidlan-93a6b43a0/',
    }
  }
];

const categories = [
  { id: 'all', label: 'All Leaders & Engineers' },
  { id: 'leadership', label: 'Executive Leadership' },
  { id: 'ai-cloud', label: 'AI & Cloud Architects' },
  { id: 'operations', label: 'Growth & Operations' }
];

export default function TeamShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <section id="team-grid" className="relative py-28 bg-background text-foreground border-b border-border/40 overflow-hidden selection:bg-primary/20">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#71717a_0.6px,_transparent_0.6px)] opacity-15 [background-size:24px_24px] pointer-events-none" />

      {/* Radiant Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ELITE ENGINEERING SQUADS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground text-shiny">
            Meet Our Creative Minds
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            The strategists, architects, and engineering directors driving high-velocity execution, AI research, and agile developer staffing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                    : 'bg-card/70 hover:bg-card text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Team Members Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, index) => {
              const isHovered = hoveredCard === member.id;
              return (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setHoveredCard(member.id);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group rounded-3xl border border-border/60 bg-card/60 hover:bg-card/90 backdrop-blur-xl p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Status & Experience Badge */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for Sprint</span>
                      </div>

                      <span className="font-mono text-[11px] text-muted-foreground font-semibold">
                        {member.experience}
                      </span>
                    </div>

                    {/* Member Avatar & Details */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-muted/60 border border-border/80 p-0.5 group-hover:border-primary transition-colors">
                        <img
                          src={member.image}
                          alt={member.name}
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            img.onerror = null;
                            img.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=0284c7&color=fff&size=128`;
                          }}
                          className="w-full h-full object-cover rounded-[14px]"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                          {member.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono truncate mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                      {member.bio}
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-muted/50 border border-border/40 text-[11px] font-mono text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    {/* Socials */}
                    <div className="flex items-center gap-2">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-card border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-card border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-card border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                        >
                          <TwitterIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Inspect Profile Button */}
                    <button
                      onClick={() => {
                        soundFx.playPop();
                        setSelectedMember(member);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 font-mono text-[11px] font-bold uppercase transition-all duration-300 shadow-sm"
                    >
                      <span>Inspect</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Engineer Credentials Inspection Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-2xl rounded-3xl border border-primary/40 bg-card p-6 sm:p-8 shadow-2xl shadow-primary/20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted/60 border border-primary/40 p-1 flex-shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black text-foreground">
                      {selectedMember.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-mono text-[10px] font-bold uppercase">
                      {selectedMember.categoryLabel}
                    </span>
                  </div>

                  <p className="text-sm font-mono text-primary mt-1">
                    {selectedMember.role}
                  </p>

                  <div className="flex items-center gap-4 mt-3 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      {selectedMember.experience}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold">
                      {selectedMember.stats}
                    </span>
                  </div>
                </div>
              </div>

              {/* Full Bio */}
              <div className="p-4 rounded-2xl bg-muted/30 border border-border/40 mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Executive Brief & Focus
                </h4>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Core Competencies */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                  Core Technical & Domain Stacks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Outreach */}
              <div className="pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 hover:border-primary text-xs font-mono text-foreground transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>{selectedMember.email}</span>
                  </a>
                  <a
                    href={`tel:${selectedMember.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 hover:border-primary text-xs font-mono text-foreground transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Endpoint</span>
                  </a>
                </div>

                <a
                  href="#wq-contact"
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25 hover:scale-105 transition-all"
                >
                  <span>Engage Squad</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
