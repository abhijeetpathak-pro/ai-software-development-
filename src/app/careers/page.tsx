// src/app/careers/page.tsx
'use client';

import React from 'react';
import HeroSection from './HeroSection';
import WhyJoinSection from './WhyJoinSection';
import LifeAtCompanySection from './LifeAtCompanySection';
import EmployeeBenefitsSection from './EmployeeBenefitsSection';
import DepartmentsSection from './DepartmentsSection';
import OpenRolesSection from './OpenRolesSection';
import HiringProcessSection from './HiringProcessSection';
import EmployeeTestimonialsSection from './EmployeeTestimonialsSection';
import FreshersProgramSection from './FreshersProgramSection';
import GeneralApplicationSection from './GeneralApplicationSection';
import CareersFAQ from './CareersFAQ';
import CareersFinalCTA from './CareersFinalCTA';

export default function CareersPage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      {/* 1. Hero Section: Heading "Build Your Career With Us", Intro, CTA */}
      <HeroSection />

      {/* 2. Why Join Us? ⭐: 6 Cards (Growth, Learning, Culture, Flexibility, Pay, Balance) */}
      <WhyJoinSection />

      {/* 3. Life at Our Company: Culture showcase, Photos, Celebrations, Workshops */}
      <LifeAtCompanySection />

      {/* 4. Employee Benefits: Health Insurance, PTO, Flexible Working, Learning Budget, etc. */}
      <EmployeeBenefitsSection />

      {/* 5. Departments: Engineering, Design, Product, QA, Sales, HR (Click to filter) */}
      <DepartmentsSection />

      {/* 6. Open Positions ⭐: Interactive Job Cards with Filters, Search, and Apply Modal */}
      <OpenRolesSection />

      {/* 7. Hiring Process: 4-Step Timeline (Apply → Screening → Technical → Offer) */}
      <HiringProcessSection />

      {/* 8. Employee Testimonials: Quotes, Real Employee Photos, and Designations */}
      <EmployeeTestimonialsSection />

      {/* 9. Internship / Freshers Section: Academy, Mentorship, Training, PPO Pathway */}
      <FreshersProgramSection />

      {/* 10. General Application: "Don't see the right role? Send us your profile" Form */}
      <GeneralApplicationSection />

      {/* 11. FAQ: 6 Candidate Questions with Smooth Accordions */}
      <CareersFAQ />

      {/* 12. Final CTA: "Your next opportunity could start here." + Explore Positions CTA */}
      <CareersFinalCTA />
    </main>
  );
}
