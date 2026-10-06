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
    id: 'aws-devops-data-ml',
    title: 'AWS DevOps Engineer (Data & ML)',
    department: 'Engineering',
    location: 'Noida, Chennai, Pune',
    type: 'Full-Time',
    experience: '7–10+ years',
    salary: '₹2,00,000 / month (2.0 LPM)',
    featured: true,
    skills: ['CI/CD', 'AWS Platform', 'Design', 'Azure DevOps', 'Kubernetes (EKS)', 'Terraform', 'MLOps', 'Docker', 'Python'],
    description: 'Lead and architect end-to-end cloud infrastructure, CI/CD automation pipelines, and MLOps platforms across AWS and Azure DevOps environments supporting large-scale Data and Machine Learning workloads.',
    requirements: [
      '7–10+ years of hands-on experience in DevOps, Cloud Architecture, and Infrastructure Engineering across AWS and Azure DevOps.',
      'Deep expertise in core AWS services (EKS, ECS, S3, IAM, CloudWatch, Lambda, SageMaker) and Azure DevOps CI/CD pipelines.',
      'Proven track record in designing resilient CI/CD release pipelines, Kubernetes container orchestration, and IaC with Terraform.',
      'Strong background in MLOps, automated training/inference pipeline deployment, and data platform scalability.',
      'Proficiency in Linux internals, shell scripting, and Python automation for cloud engineering.'
    ],
    responsibilities: [
      'Architect, deploy, and manage highly scalable and secure AWS cloud environments for Data & ML squads.',
      'Build and optimize automated CI/CD pipelines using AWS CodePipeline, Azure DevOps, and GitOps practices.',
      'Implement MLOps frameworks, model monitoring, automated artifact versioning, and continuous deployment.',
      'Define and enforce Infrastructure as Code (IaC) standards using Terraform, CloudFormation, and Helm.',
      'Collaborate with Data Scientists, ML Engineers, and Product Squads to ensure 99.99% infrastructure uptime.'
    ]
  },
  {
    id: 'databricks-data-engineer',
    title: 'Databricks Data Engineer',
    department: 'Engineering',
    location: 'Noida, Gurgaon, Jaipur',
    type: 'Full-Time',
    experience: '5–10+ years',
    salary: '₹1,20,000 / month (1.2 LPM)',
    featured: true,
    skills: ['Databricks', 'AWS', 'DevOps', 'Git', 'CI/CD', 'GitLab', 'PySpark', 'Delta Lake', 'SQL'],
    description: 'Architect and build enterprise Lakehouse solutions, high-volume ETL/ELT pipelines, and automated DataOps workflows utilizing Databricks, AWS, and GitLab CI/CD.',
    requirements: [
      '5–10+ years of specialized experience in Data Engineering with deep expertise in Databricks, Apache Spark, and Delta Lake.',
      'Strong proficiency with AWS data ecosystem (S3, Glue, EMR, Redshift, Athena, IAM) and cloud data warehousing.',
      'Hands-on experience implementing DataOps and CI/CD pipelines using GitLab CI, Git, and automated testing suites.',
      'Proficiency in PySpark, Python, advanced SQL, and data orchestration tools (Airflow / Databricks Workflows).',
      'Expertise in data lakehouse design, data governance, performance tuning, and cluster cost optimization.'
    ],
    responsibilities: [
      'Design, develop, and maintain scalable data pipelines and Delta Lake architectures on Databricks.',
      'Implement automated DataOps CI/CD workflows using GitLab for continuous testing, validation, and multi-environment deployment.',
      'Integrate Databricks seamlessly with AWS cloud storage, data lakes, and enterprise analytical warehouses.',
      'Optimize Databricks cluster configurations, query performance, and compute costs.',
      'Ensure enterprise-grade data security, data lineage, quality checks, and regulatory compliance across data pipelines.'
    ]
  },
  {
    id: 'sr-fullstack-developer',
    title: 'SR. Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    experience: '8+ years',
    salary: '$1,200 USD / month',
    featured: true,
    skills: ['Angular', 'Python', 'UI/UX', 'QA', 'DevOps', 'FastAPI / Django', 'TypeScript', 'Docker', 'REST APIs'],
    description: 'Architect and build dynamic, high-performance web applications using Angular on the frontend and Python microservices on the backend, driving UI/UX excellence, QA automation, and DevOps.',
    requirements: [
      '8+ years of proven full-stack development experience building enterprise-grade applications with Angular and Python.',
      'Expert knowledge of modern Angular (v12+ / latest, RxJS, NgRx) and Python frameworks (FastAPI, Django, or Flask).',
      'Strong understanding of UI/UX design principles, responsive UI development, and accessibility standards.',
      'Solid experience with QA automation testing (PyTest, Cypress, Jest) and comprehensive test-driven development.',
      'Hands-on experience with DevOps practices including Docker containerization, CI/CD pipelines, and cloud hosting.'
    ],
    responsibilities: [
      'Architect and build robust, user-centric web frontends in Angular and high-throughput microservices in Python.',
      'Collaborate with designers to implement intuitive, responsive, and pixel-perfect UI/UX components.',
      'Implement end-to-end automated QA testing suites and integrate quality gates into CI/CD deployment pipelines.',
      'Design clean, secure RESTful / GraphQL APIs and manage database schema design and optimizations (PostgreSQL/MongoDB).',
      'Work directly with international clients and cross-functional teams in an agile, remote-first environment.'
    ]
  },
  {
    id: 'react-native-developer',
    title: 'Senior React Native Developer',
    department: 'Engineering',
    location: 'Remote, Bangalore, Chennai',
    type: 'Full-Time',
    experience: '7–10+ years',
    salary: '₹1,20,000 / month (1.2 LPM)',
    featured: true,
    skills: ['React Native', 'Swift', 'Kotlin', 'Java', 'Objective-C', 'APIs', 'TypeScript', 'Redux', 'Mobile CI/CD'],
    description: 'Lead the engineering and architecture of world-class cross-platform mobile applications in React Native with deep native integration in Swift, Kotlin, Java, and Objective-C.',
    requirements: [
      '7–10+ years of professional mobile development experience with deep expertise in React Native and TypeScript.',
      'Strong hands-on native development experience on iOS (Swift, Objective-C) and Android (Kotlin, Java).',
      'Extensive experience in custom Native Module bridging, complex animations (Reanimated), and UI performance tuning.',
      'Proficiency in integrating complex REST / GraphQL APIs, offline caching, push notifications, and biometric auth.',
      'Experience with mobile build automation (Fastlane), App Store and Google Play Console release management.'
    ],
    responsibilities: [
      'Architect and deploy production-grade, highly responsive cross-platform mobile applications for iOS and Android.',
      'Build and maintain custom native modules and bridging layers using Swift, Kotlin, Java, and Objective-C.',
      'Integrate complex RESTful APIs, third-party SDKs, payment gateways, and real-time streaming services.',
      'Optimize application performance, bundle size, memory usage, and 60 FPS UI rendering.',
      'Manage automated testing, CI/CD deployment pipelines, and App Store / Play Store release lifecycles.'
    ]
  },
  {
    id: 'salesforce-multi-solution',
    title: 'Salesforce Multi-Solution Architect',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    experience: '10–15+ years',
    salary: '₹1,30,000 / month (1.3 LPM)',
    featured: true,
    skills: ['RFD/RFP', 'Solution Design', 'Stakeholder Management', 'Service Cloud', 'Sales Cloud', 'Apex & LWC', 'Integrations'],
    description: 'Drive enterprise Salesforce architecture, lead RFD/RFP technical solutioning, engage senior stakeholders, and deliver multi-cloud Salesforce transformations across Sales, Service, and Experience Clouds.',
    requirements: [
      '10–15+ years of extensive IT experience with demonstrated mastery in multi-cloud Salesforce solution architecture.',
      'Proven track record in RFD/RFP responses, technical estimations, architectural blueprints, and client presentations.',
      'Deep expertise in Salesforce Service Cloud, Sales Cloud, Experience Cloud, Lightning Web Components (LWC), and Apex.',
      'Hands-on experience architecting complex enterprise integrations (REST/SOAP, MuleSoft, Middleware, ERP connections).',
      'Exceptional stakeholder management, client-facing consultation skills, and team leadership capability.'
    ],
    responsibilities: [
      'Lead enterprise-level Salesforce solution design, governance models, and multi-cloud architectural blueprints.',
      'Author technical responses for RFDs, RFPs, scope definitions, SOWs, and architectural risk assessments.',
      'Serve as trusted advisor to global C-level stakeholders, translating business goals into robust Salesforce solutions.',
      'Provide technical guidance and oversight to Salesforce developers, ensuring high code quality and architectural integrity.',
      'Design secure, scalable enterprise integration patterns connecting Salesforce with third-party ERP and data systems.'
    ]
  },
  {
    id: 'ai-lead-architect',
    title: 'AI Lead / Architect',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    experience: '7+ years',
    salary: '₹1,40,000 / month (1.4 LPM)',
    featured: true,
    skills: ['Azure OpenAI', 'AI Agents', 'AI Solutions', 'Prompt Engineering', 'LLM & AI Platforms', 'LangChain', 'Python', 'RAG'],
    description: 'Lead the strategy, architecture, and deployment of cutting-edge AI Agents, enterprise Azure OpenAI platforms, advanced RAG systems, and next-generation Generative AI solutions.',
    requirements: [
      '7+ years of total software engineering and AI experience, with proven leadership in building production Generative AI / LLM solutions.',
      'Hands-on expertise with Azure OpenAI services, enterprise OpenAI/Anthropic APIs, and open-weight LLMs.',
      'Demonstrated success in building autonomous AI Agents (LangGraph, CrewAI, AutoGen) and production RAG pipelines.',
      'Deep mastery of Prompt Engineering, LLM evaluation, fine-tuning, embedding models, and Vector DBs (Pinecone, Qdrant, Milvus).',
      'Strong programming proficiency in Python, FastAPI, LangChain, LlamaIndex, Docker, and scalable cloud AI infrastructure.'
    ],
    responsibilities: [
      'Architect and deliver enterprise-grade AI Agents, generative applications, and cognitive automation platforms.',
      'Drive the implementation of Azure OpenAI services, custom LLM fine-tuning, and robust multi-modal search pipelines.',
      'Establish best-in-class Prompt Engineering standards, guardrails, LLM observability, and token cost optimization.',
      'Mentor and lead engineering squads in AI adoption, rapid prototyping, and production deployment.',
      'Partner with client leadership to scope high-value AI use cases and formulate comprehensive technical roadmaps.'
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
    experienceYears: '7-10+ years',
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
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDept = selectedDept === 'All' || job.department.toLowerCase() === selectedDept.toLowerCase();
    
    const matchLocation =
      selectedLocation === 'All' ||
      (selectedLocation === 'Remote' && job.location.toLowerCase().includes('remote')) ||
      (selectedLocation === 'Noida' && job.location.toLowerCase().includes('noida')) ||
      (selectedLocation === 'Gurgaon' && job.location.toLowerCase().includes('gurgaon')) ||
      (selectedLocation === 'Bangalore' && job.location.toLowerCase().includes('bangalore')) ||
      (selectedLocation === 'Chennai' && job.location.toLowerCase().includes('chennai')) ||
      (selectedLocation === 'Pune' && job.location.toLowerCase().includes('pune')) ||
      (selectedLocation === 'Jaipur' && job.location.toLowerCase().includes('jaipur')) ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchExp =
      selectedExp === 'All' ||
      (selectedExp === '5-10+ yrs' && (job.experience.includes('5') || job.experience.includes('7') || job.experience.includes('8') || job.experience.includes('10'))) ||
      (selectedExp === '7-10+ yrs' && (job.experience.includes('7') || job.experience.includes('8') || job.experience.includes('10'))) ||
      (selectedExp === '8+ yrs' && (job.experience.includes('8') || job.experience.includes('10') || job.experience.includes('15'))) ||
      (selectedExp === '10-15+ yrs' && (job.experience.includes('10') || job.experience.includes('15'))) ||
      job.experience.toLowerCase().includes(selectedExp.toLowerCase());

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

  const handleApplicationSubmit = async (e: React.FormEvent) => {
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

    try {
      if (activeModalJob) {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: applicantData.name,
            email: applicantData.email,
            phone: applicantData.phone,
            stack: `Job Application: ${activeModalJob.title} (${activeModalJob.location})`,
            experienceYears: applicantData.experienceYears,
            portfolioUrl: applicantData.portfolioUrl || applicantData.linkedinUrl,
            message: `Applicant for ${activeModalJob.title} | Budget: ${activeModalJob.salary} | Cover Note: ${applicantData.coverNote || 'Direct Job Requisition Application'}`
          })
        });
      }
    } catch (err) {
      console.error('Job application submission error:', err);
    } finally {
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
          experienceYears: '7-10+ years',
          linkedinUrl: '',
          portfolioUrl: '',
          coverNote: ''
        });
      }, 3000);
    }
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
            Browse our open opportunities across DevOps, Databricks, Full Stack, React Native, Salesforce, and AI. Filter by location, experience, or tech stack.
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
              placeholder="Search by job title, skill (AWS, Databricks, Python, React Native, Salesforce, AI), or location..."
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
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Pune">Pune</option>
                <option value="Jaipur">Jaipur</option>
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
                <option value="5-10+ yrs">5–10+ Years</option>
                <option value="7-10+ yrs">7–10+ Years</option>
                <option value="8+ yrs">8+ Years / Lead</option>
                <option value="10-15+ yrs">10–15+ Years / Architect</option>
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
                <option value="Contract / Remote">Contract / Remote</option>
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
                          <option value="5-7 years">5–7 years</option>
                          <option value="7-10+ years">7–10+ years</option>
                          <option value="8+ years (Senior / Lead)">8+ years (Senior / Lead)</option>
                          <option value="10-15+ years (Architect)">10–15+ years (Architect)</option>
                          <option value="15+ years (Principal)">15+ years (Principal)</option>
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
