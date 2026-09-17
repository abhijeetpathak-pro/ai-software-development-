// src/app/careers/OpenRolesSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Search, 
  Filter, 
  CheckCircle2, 
  X, 
  Send, 
  Sparkles, 
  UploadCloud, 
  Laptop, 
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';
import confetti from 'canvas-confetti';

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  featured?: boolean;
  skills: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const initialJobs: JobRole[] = [
  {
    id: 'frontend-dev-react',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote / Faridabad (HQ)',
    type: 'Full-Time',
    experience: '2–4 years',
    salary: '₹8,00,000 – ₹16,00,000 / year',
    featured: true,
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Next.js', 'Tailwind CSS'],
    description: 'We are seeking a talented Frontend Developer to build high-performance, responsive web applications using React and Next.js for international enterprise clients.',
    requirements: [
      '2–4 years of hands-on experience with modern React, JavaScript (ES6+), HTML5, and CSS3.',
      'Proficiency in responsive design, CSS Modules / Tailwind CSS, and state management (Zustand/Redux).',
      'Solid understanding of REST APIs, asynchronous programming, and Core Web Vitals optimization.',
      'Experience with Next.js (App Router, Server Components) is a strong plus.'
    ],
    responsibilities: [
      'Develop pixel-perfect, accessible, and high-performance UI components.',
      'Collaborate closely with UI/UX designers and backend engineers to integrate APIs.',
      'Write clean, modular, and maintainable TypeScript/JavaScript code with unit tests.',
      'Participate in sprint planning, code reviews, and agile retrospectives.'
    ]
  },
  {
    id: 'fullstack-architect',
    title: 'Senior Full-Stack Architect',
    department: 'Engineering',
    location: 'Remote / Faridabad (HQ)',
    type: 'Full-Time',
    experience: '4–7 years',
    salary: '₹18,00,000 – ₹32,00,000 / year',
    featured: true,
    skills: ['Next.js 15', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker', 'AWS'],
    description: 'Lead end-to-end technical architecture for enterprise clients, designing scalable microservices, database schemas, and cloud-native deployments.',
    requirements: [
      '4+ years architecting full-stack web applications with Node.js, Next.js, and TypeScript.',
      'Deep expertise in PostgreSQL / MongoDB, Redis caching, and database indexing.',
      'Experience deploying on AWS/GCP with Docker and automated CI/CD pipelines.'
    ],
    responsibilities: [
      'Design high-throughput backend APIs and modern frontend interfaces.',
      'Conduct rigorous architecture reviews and mentor junior and mid-level engineers.',
      'Support service uptime and security compliance for enterprise clients.'
    ]
  },
  {
    id: 'ai-llm-engineer',
    title: 'AI & LLM Solutions Engineer',
    department: 'Engineering',
    location: 'Remote / Faridabad (HQ)',
    type: 'Full-Time',
    experience: '2–5 years',
    salary: '₹16,00,000 – ₹28,00,000 / year',
    featured: true,
    skills: ['Python', 'LangChain', 'OpenAI APIs', 'Vector DBs (Pinecone/Qdrant)', 'RAG Pipelines', 'FastAPI'],
    description: 'Build enterprise AI agents, multi-modal vector search pipelines, and custom RAG applications integrated into business workflows.',
    requirements: [
      'Strong proficiency in Python, FastAPI, LangChain / LlamaIndex, and embedding models.',
      'Hands-on experience building production RAG pipelines and vector database indexing.',
      'Knowledge of prompt engineering, fine-tuning, and LLM evaluation frameworks.'
    ],
    responsibilities: [
      'Build and deploy production-ready AI vector pipelines and autonomous agent workflows.',
      'Optimize latency and token costs for large-scale enterprise LLM deployments.',
      'Integrate AI services seamlessly with modern Next.js/React frontend portals.'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'Senior UI/UX Product Designer',
    department: 'Design',
    location: 'Remote / Faridabad (HQ)',
    type: 'Full-Time',
    experience: '3–6 years',
    salary: '₹12,00,000 – ₹20,00,000 / year',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Wireframing'],
    description: 'Design intuitive, world-class user experiences and multi-brand design systems for web and mobile SaaS platforms.',
    requirements: [
      '3+ years designing complex enterprise SaaS or web applications with Figma.',
      'Demonstrated portfolio showcasing end-to-end UX wireframing to high-fidelity UI.',
      'Strong understanding of design tokens, auto-layout, and developer handoff.'
    ],
    responsibilities: [
      'Create comprehensive design systems and interactive clickable prototypes in Figma.',
      'Conduct user interviews, usability testing, and wireframing iterations.',
      'Collaborate with engineers to ensure pixel-perfect CSS implementation.'
    ]
  },
  {
    id: 'qa-automation-lead',
    title: 'QA Automation Engineer',
    department: 'QA & Testing',
    location: 'Remote / Faridabad (HQ)',
    type: 'Full-Time',
    experience: '2–4 years',
    salary: '₹7,00,000 – ₹14,00,000 / year',
    skills: ['Cypress', 'Playwright', 'Selenium', 'Postman API', 'CI/CD Automation', 'Jest'],
    description: 'Establish automated test suites, end-to-end regression pipelines, and API load testing for high-traffic enterprise applications.',
    requirements: [
      '2+ years in automated web and API testing using Playwright, Cypress, or Selenium.',
      'Experience integrating automated test runs in GitHub Actions or GitLab CI.',
      'Strong analytical debugging skills and understanding of edge cases.'
    ],
    responsibilities: [
      'Write and maintain end-to-end automated test suites for web and mobile platforms.',
      'Perform rigorous API validation and load testing before sprint releases.',
      'Report bugs with clear reproduction steps and collaborate with dev squads.'
    ]
  },
  {
    id: 'cloud-devops-sre',
    title: 'Cloud & DevOps SRE',
    department: 'Engineering',
    location: 'Remote / Faridabad (HQ)',
    type: 'Full-Time',
    experience: '3–6 years',
    salary: '₹14,00,000 – ₹26,00,000 / year',
    skills: ['AWS', 'Kubernetes (K8s)', 'Terraform', 'Docker', 'GitHub Actions', 'Prometheus'],
    description: 'Maintain robust cloud infrastructure, container orchestration, and continuous deployment for international client products.',
    requirements: [
      '3+ years managing AWS/GCP cloud environments, Kubernetes clusters, and Terraform IaC.',
      'Proficiency in Docker containerization and automated blue/green CI/CD pipelines.',
      'Experience with observability tools like Prometheus, Grafana, and Datadog.'
    ],
    responsibilities: [
      'Architect and provision multi-region, fault-tolerant cloud environments.',
      'Automate deployment pipelines and maintain strict infrastructure security.',
      'Monitor application telemetry and resolve infrastructure bottlenecks proactively.'
    ]
  },
  {
    id: 'graduate-engineer-trainee',
    title: 'Software Engineer Trainee (Freshers)',
    department: 'Engineering',
    location: 'Faridabad (HQ) (In-Office) / Hybrid',
    type: 'Internship / Fresher',
    experience: 'Freshers (0–1 year)',
    salary: '₹4,00,000 – ₹6,50,000 / year (Stipend during training)',
    featured: true,
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Data Structures', 'Git', 'Problem Solving'],
    description: 'Accelerated bootcamp-style training for passionate graduates. Learn directly under senior architects and convert to full-time engineer upon graduation.',
    requirements: [
      'B.Tech / BCA / MCA / B.Sc in Computer Science or related degree with strong CS fundamentals.',
      'Good understanding of JavaScript, HTML/CSS, and basic React principles.',
      'High curiosity, problem-solving mindset, and passion for software engineering.'
    ],
    responsibilities: [
      'Complete intensive structured hands-on sprints on modern web stacks.',
      'Pair-program with senior engineers on real customer-facing modules.',
      'Learn best practices in Git version control, unit testing, and agile workflows.'
    ]
  },
  {
    id: 'b2b-sales-marketing',
    title: 'Enterprise Technical Sales Executive',
    department: 'Sales & Marketing',
    location: 'Faridabad (HQ) / Remote',
    type: 'Full-Time',
    experience: '2–5 years',
    salary: '₹8,00,000 – ₹18,00,000 + Attractive Commission',
    skills: ['B2B Sales', 'Tech Scoping', 'Lead Generation', 'CRM', 'Client Relationship'],
    description: 'Drive international enterprise software partnerships across North America, Europe, UAE, and Australia.',
    requirements: [
      '2+ years experience in IT services / software consulting B2B sales.',
      'Excellent verbal and written English communication for US/UK client interactions.',
      'Proven track record in client acquisition, proposal scoping, and contract closing.'
    ],
    responsibilities: [
      'Identify enterprise prospects and conduct discovery consultation calls.',
      'Collaborate with CTO to formulate technical estimates and commercial SOWs.',
      'Nurture long-term client relationships and ensure high renewal satisfaction.'
    ]
  }
];

export default function OpenRolesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedExp, setSelectedExp] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const [activeModalJob, setActiveModalJob] = useState<JobRole | null>(null);
  const [applyStep, setApplyStep] = useState<'details' | 'apply' | 'success'>('details');

  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceYears: '2-4 years',
    linkedinUrl: '',
    portfolioUrl: '',
    coverNote: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);

  // Listen for custom filter events from Departments or Internship sections
  useEffect(() => {
    const handleDeptEvent = (e: CustomEvent<string>) => {
      if (e.detail) {
        setSelectedDept(e.detail);
      }
    };

    const handleInternshipEvent = () => {
      setSelectedType('Internship / Fresher');
    };

    window.addEventListener('filter-department' as any, handleDeptEvent as any);
    window.addEventListener('filter-internship' as any, handleInternshipEvent as any);

    return () => {
      window.removeEventListener('filter-department' as any, handleDeptEvent as any);
      window.removeEventListener('filter-internship' as any, handleInternshipEvent as any);
    };
  }, []);

  const filteredJobs = initialJobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDept = selectedDept === 'All' || job.department === selectedDept;
    
    const matchLocation =
      selectedLocation === 'All' ||
      (selectedLocation === 'Remote' && job.location.includes('Remote')) ||
      (selectedLocation === 'Faridabad (HQ)' && job.location.includes('Faridabad'));

    const matchExp =
      selectedExp === 'All' ||
      (selectedExp === 'Freshers (0-1 yr)' && job.experience.includes('Freshers')) ||
      (selectedExp === '2-4 yrs' && job.experience.includes('2–4')) ||
      (selectedExp === '4-7 yrs' && job.experience.includes('4–7')) ||
      (selectedExp === '3-6 yrs' && job.experience.includes('3–6'));

    const matchType = selectedType === 'All' || job.type === selectedType;

    return matchSearch && matchDept && matchLocation && matchExp && matchType;
  });

  const handleOpenJob = (job: JobRole, directApply: boolean = false) => {
    soundFx.playClick();
    setActiveModalJob(job);
    setApplyStep(directApply ? 'apply' : 'details');
    setErrors({});
  };

  const handleCloseModal = () => {
    soundFx.playClick();
    setActiveModalJob(null);
    setApplyStep('details');
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!applicantData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!applicantData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!applicantData.phone.trim()) newErrors.phone = 'Phone number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      soundFx.playChirp();
      return;
    }

    setSubmitting(true);
    soundFx.playClick();

    setTimeout(() => {
      setSubmitting(false);
      soundFx.playSuccess();
      setApplyStep('success');

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#E31E24', '#dc2626', '#10b981', '#0284c7']
      });

      setTimeout(() => {
        setApplicantData({
          name: '',
          email: '',
          phone: '',
          experienceYears: '2-4 years',
          linkedinUrl: '',
          portfolioUrl: '',
          coverNote: ''
        });
      }, 3000);
    }, 700);
  };

  return (
    <section id="open-roles" className="relative py-24 bg-[#fafafa] text-slate-900 border-b border-slate-200 selection:bg-red-500/20 scroll-mt-20">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,_transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E31E24] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURRENT OPEN REQUISITIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase font-display">
            OPEN POSITIONS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] via-rose-600 to-slate-900">
              JOIN OUR ENGINEERING SQUADS
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            Browse our open opportunities across frontend, backend, AI, and design. Filter by department, experience, or work preference.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm mb-10 space-y-4">
          
          {/* Top Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, skill (React, Next.js, Python), or department..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#E31E24] focus:bg-white focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            
            {/* Department */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">
                Department
              </label>
              <select
                value={selectedDept}
                onChange={(e) => {
                  soundFx.playClick();
                  setSelectedDept(e.target.value);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:border-[#E31E24] focus:outline-none cursor-pointer"
              >
                <option value="All">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design &amp; UI/UX</option>
                <option value="Product">Product &amp; Agile</option>
                <option value="QA & Testing">QA &amp; Testing</option>
                <option value="Sales & Marketing">Sales &amp; Marketing</option>
                <option value="HR & Operations">HR &amp; Operations</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => {
                  soundFx.playClick();
                  setSelectedLocation(e.target.value);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:border-[#E31E24] focus:outline-none cursor-pointer"
              >
                <option value="All">All Locations</option>
                <option value="Remote">Remote Only</option>
                <option value="Faridabad (HQ)">Faridabad (HQ) / Hybrid</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">
                Experience Level
              </label>
              <select
                value={selectedExp}
                onChange={(e) => {
                  soundFx.playClick();
                  setSelectedExp(e.target.value);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:border-[#E31E24] focus:outline-none cursor-pointer"
              >
                <option value="All">All Experience Levels</option>
                <option value="Freshers (0-1 yr)">Freshers (0–1 yr)</option>
                <option value="2-4 yrs">Mid-Level (2–4 yrs)</option>
                <option value="4-7 yrs">Senior (4–7 yrs)</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">
                Employment Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  soundFx.playClick();
                  setSelectedType(e.target.value);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:border-[#E31E24] focus:outline-none cursor-pointer"
              >
                <option value="All">All Employment Types</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Internship / Fresher">Internship / Fresher</option>
              </select>
            </div>

          </div>

          {/* Active Filter Count / Reset */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono text-slate-500">
            <span>Showing {filteredJobs.length} open position{filteredJobs.length !== 1 ? 's' : ''}</span>
            {(selectedDept !== 'All' || selectedLocation !== 'All' || selectedExp !== 'All' || selectedType !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSearchQuery('');
                  setSelectedDept('All');
                  setSelectedLocation('All');
                  setSelectedExp('All');
                  setSelectedType('All');
                }}
                className="text-[#E31E24] hover:underline font-bold cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

        {/* Jobs List Grid */}
        {filteredJobs.length === 0 ? (
          <div className="py-16 text-center rounded-3xl border border-slate-200 bg-white p-8">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900 mb-1">No Openings Match Your Filters</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              Try adjusting your search criteria or submit a general application below. We regularly create roles for exceptional talent!
            </p>
            <a
              href="#general-apply"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E31E24] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md hover:bg-red-700 transition-colors"
            >
              <span>Submit General Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => soundFx.playHover()}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[#E31E24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Meta Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] uppercase px-3 py-1 rounded-full bg-red-50 border border-red-100">
                      {job.department}
                    </span>

                    <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                      {job.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-slate-950 uppercase font-display mb-2 group-hover:text-[#E31E24] transition-colors">
                    {job.title}
                  </h3>

                  {/* Details Pill Row */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E31E24]" />
                      <span>Exp: {job.experience}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-xs font-mono font-bold text-slate-800">
                    {job.salary}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenJob(job, false)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold transition-colors cursor-pointer"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleOpenJob(job, true)}
                      className="px-5 py-2 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-600/20 hover:scale-105 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* JOB DETAILS & APPLICATION MODAL                                           */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModalJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-slate-900 text-white relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono px-3 py-0.5 rounded-full bg-[#E31E24] text-white font-bold uppercase tracking-wider">
                    {activeModalJob.department}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                    {activeModalJob.type}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black uppercase font-display text-white">
                  {activeModalJob.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 mt-2">
                  <span>📍 {activeModalJob.location}</span>
                  <span>⏳ Exp: {activeModalJob.experience}</span>
                  <span className="text-amber-300 font-bold">💰 {activeModalJob.salary}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-900 space-y-6">
                
                {applyStep === 'details' && (
                  <>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider mb-2">
                        Role Overview
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {activeModalJob.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider mb-2">
                        Required Qualifications &amp; Skills
                      </h4>
                      <ul className="space-y-2">
                        {activeModalJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#E31E24] uppercase tracking-wider mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {activeModalJob.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#E31E24] mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                      <button
                        onClick={handleCloseModal}
                        className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-mono font-bold cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => setApplyStep('apply')}
                        className="px-7 py-3 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 cursor-pointer flex items-center gap-2"
                      >
                        <span>Proceed to Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}

                {applyStep === 'apply' && (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-slate-700 font-mono">
                      Applying for: <strong className="text-slate-900">{activeModalJob.title}</strong> ({activeModalJob.location})
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantData.name}
                          onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                        />
                        {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={applicantData.email}
                          onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                          placeholder="rahul@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                        />
                        {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone & Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={applicantData.phone}
                          onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                          Relevant Experience
                        </label>
                        <select
                          value={applicantData.experienceYears}
                          onChange={(e) => setApplicantData({ ...applicantData, experienceYears: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                        >
                          <option value="Fresher / 0-1 year">Fresher / 0–1 year</option>
                          <option value="1-3 years">1–3 years</option>
                          <option value="3-5 years">3–5 years</option>
                          <option value="5+ years">5+ years</option>
                        </select>
                      </div>
                    </div>

                    {/* LinkedIn & Portfolio */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                          LinkedIn Profile URL
                        </label>
                        <input
                          type="url"
                          value={applicantData.linkedinUrl}
                          onChange={(e) => setApplicantData({ ...applicantData, linkedinUrl: e.target.value })}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                          GitHub / Portfolio URL
                        </label>
                        <input
                          type="url"
                          value={applicantData.portfolioUrl}
                          onChange={(e) => setApplicantData({ ...applicantData, portfolioUrl: e.target.value })}
                          placeholder="https://github.com/..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Brief Note */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-600 mb-1">
                        Brief Cover Note / Highlights
                      </label>
                      <textarea
                        rows={3}
                        value={applicantData.coverNote}
                        onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                        placeholder="Why are you a great fit for this role? Mention notice period and current CTC..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:border-[#E31E24] focus:outline-none resize-none"
                      />
                    </div>

                    {/* Upload CV Box */}
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:border-red-500 transition-colors bg-slate-50 cursor-pointer">
                      <UploadCloud className="w-6 h-6 text-[#E31E24] mx-auto mb-1" />
                      <p className="text-xs font-mono text-slate-700 font-bold">
                        Upload Resume / CV (PDF or DOCX max 10MB)
                      </p>
                      <p className="text-[11px] text-slate-400">or email directly to hr@witqualis.com</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setApplyStep('details')}
                        className="text-xs font-mono text-slate-500 hover:text-slate-800 cursor-pointer"
                      >
                        ← Back to Job Details
                      </button>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-8 py-3.5 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 flex items-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {submitting ? <span>Transmitting Application...</span> : (
                          <>
                            <span>Submit Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {applyStep === 'success' && (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 uppercase font-display">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for applying for the <strong className="text-slate-900">{activeModalJob.title}</strong> role. Our recruitment team will review your profile and reach out within 24 to 48 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleCloseModal}
                        className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold uppercase"
                      >
                        Done / Return to Careers
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
