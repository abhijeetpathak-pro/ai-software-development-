// src/app/our-team/page.tsx
import type { Metadata } from 'next';
import HeroSection from './HeroSection';
import WhyWitqualisSection from './WhyWitqualisSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import CinematicTeamSpotlight from './CinematicTeamSpotlight';
import AlbumSection from './AlbumSection';
import JoinOurTeamSection from './JoinOurTeamSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';

export const metadata: Metadata = {
  title: 'Meet the Witqualis Technology Team',
  description:
    'Meet the Witqualis Technology Team. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/our-team/' },
};

export default function OurTeamPage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      {/* 1. Hero Section with Clean White BG, Frosted Glass Squad Card & Live Count-Up */}
      <HeroSection />

      {/* 2. About WitQualis Section (Rigor, Trust & Technical Excellence) */}
      <WhyWitqualisSection />

      {/* 3. Benefits / Why Partner With Our Engineering Team */}
      <WhyChooseUsSection />

      {/* 4. Cinematic Executive Spotlight Stage with Frosted Glassmorphic Cards & 3s Auto-Rotation */}
      <CinematicTeamSpotlight />

      {/* 5. Life At WitQualis Culture & Moments Album (Red & White Theme with Album Folder Photos) */}
      <AlbumSection />

      {/* 6. Join Our Team & Global Squad Openings Section with Frosted Glass Cards */}
      <JoinOurTeamSection />

      {/* 7. Interactive Spring Accordion FAQ Section */}
      <FAQSection />

      {/* 8. Talent Requisition Transmission Form with Confetti Celebration */}
      <ContactSection />
    </main>
  );
}