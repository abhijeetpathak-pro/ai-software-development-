// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Preloader from '@/components/animated/Preloader';
import HeroSection from '@/components/animated/HeroSection';
import MarqueeRibbons from '@/components/animated/MarqueeRibbons';
import TechCapabilities from '@/components/TechCapabilities';
import GlobalTeam from '@/components/GlobalTeam';
import AboutTelemetry from '@/components/animated/AboutTelemetry';
import ProjectsSection from '@/components/animated/ProjectsSection';
import ExperienceLaserTimeline from '@/components/animated/ExperienceLaserTimeline';
import InteractiveTerminal from '@/components/animated/InteractiveTerminal';
import HomepageTestimonials from '@/components/animated/HomepageTestimonials';
import ContactSection from '@/components/animated/ContactSection';

export default function HomeClient() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="relative w-full overflow-x-hidden selection:bg-primary/25">
      {/* 1. Preloader Animation with Handwritten Signature Draw & Arc Curtain Wipe */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Main Content Container */}
      <div
        className={`relative z-10 flex flex-col w-full transition-opacity duration-700 ${
          preloaderDone ? 'opacity-100' : 'opacity-95'
        }`}
      >
        {/* 2. Hero Section with Kinetic Typography, Embedded Micro-Icons & 3D Physics Lanyard */}
        <HeroSection />

        {/* 3. Dual-Direction Hardware-Accelerated Infinite Marquee Ribbons */}
        <MarqueeRibbons />

        {/* 4. Core Technology Capabilities & Stacks (AI, Cloud, Data Engineer, Frontend, Backend, etc.) */}
        <TechCapabilities />

        {/* 5. Volume I: Telemetry HUD & Interactive Specialization Pillars */}
        <AboutTelemetry />

        {/* 6. Volume II: 3-Card Grid with Staggered Scroll-Reveal Case Studies */}
        <ProjectsSection />

        {/* 7. Volume III: Glowing Laser Company Evolution Timeline (Founded 2020) */}
        <ExperienceLaserTimeline />

        {/* 8. Volume IV: Live Python Code Typewriter Engine & Telemetry */}
        <InteractiveTerminal />

        {/* 9. Volume V: Client Reputation & Reviews Testimonials */}
        <HomepageTestimonials />

        {/* 10. Volume VI: Technical Consultation Transmission & Confetti Celebration */}
        <ContactSection />

        {/* 11. Client & Global Office Locations (India, UAE, Australia, USA, Canada) */}
        <GlobalTeam />
      </div>
    </div>
  );
}