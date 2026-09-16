// src/app/portfolio/page.tsx
import type { Metadata } from 'next';
import HeroSection from './HeroSection';
import AboutCompanySection from './AboutCompanySection';
import ServicesSection from './ServicesSection';
import WhyChooseUsPortfolio from './WhyChooseUsPortfolio';
import ProjectsShowcaseSplit from './ProjectsShowcaseSplit';
import IndustriesSection from './IndustriesSection';
import ProcessSection from './ProcessSection';
import TechCapabilities from '@/components/TechCapabilities';
import HomepageTestimonials from '@/components/animated/HomepageTestimonials';
import TeamLeadershipSection from './TeamLeadershipSection';
import StartProjectMeeting from './StartProjectMeeting';
import PortfolioFAQ from './PortfolioFAQ';
import PortfolioContact from './PortfolioContact';

export const metadata: Metadata = {
  title: 'Witqualis Software Development Portfolio and Case Studies',
  description:
    'Witqualis Software Development Portfolio and Case Studies. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/portfolio/' },
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      {/* 1. Hero Section: Strong headline, Value Prop, CTAs, 3D Glass Metrics & Animated Counters */}
      <HeroSection />

      {/* 2. About Company: Introduction, Mission/Vision, USP, 7-Day Trial & Company Stats */}
      <AboutCompanySection />

      {/* 3. Services: AI Engineering & ML Squads, Staff Augmentation, Web Dev, Mobile, UI/UX, Cloud */}
      <ServicesSection />

      {/* 4. Why Choose Us: Vetted Engineers, Quality, On-time Delivery, Support, Security */}
      <WhyChooseUsPortfolio />

      {/* 5. Our Work / Projects: Real Enterprise Deliveries (CarDekho, Bakingo, FlowerAura, etc.) */}
      <ProjectsShowcaseSplit />

      {/* 6. Industries We Serve: FinTech, Healthcare, E-Commerce, EdTech, PropTech, SaaS */}
      <IndustriesSection />

      {/* 7. Our 7-Step Delivery Process: Discovery -> Strategy -> Design -> Dev -> QA -> Launch -> Support */}
      <ProcessSection />

      {/* 8. Technologies & Stack Capabilities (Exact Home Page TechCapabilities Component) */}
      <TechCapabilities />

      {/* 9. Client Testimonials (Exact Home Page HomepageTestimonials Component) */}
      <HomepageTestimonials />

      {/* 11. Minds Behind WitQualis: Anwar Khan, Aslam Khan, Chandrapal Singh */}
      <TeamLeadershipSection />

      {/* 12. Interactive SEO-Polished FAQ with Search & Category Filters */}
      <PortfolioFAQ />

      {/* 13. Direct Consultation & 30-Min Discovery Meeting CTA */}
      <StartProjectMeeting />

      {/* 14. 256-Bit Encrypted Project Requisition Form */}
      <PortfolioContact />
    </main>
  );
}
