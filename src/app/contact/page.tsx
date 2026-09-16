// src/app/contact/page.tsx
'use client';

import React from 'react';
import HeroSection from './HeroSection';
import ContactFormSection from './ContactFormSection';
import ContactInfoSection from './ContactInfoSection';
import ServicesGridSection from './ServicesGridSection';
import LocationsSection from './LocationsSection';
import WhyContactUsSection from './WhyContactUsSection';
import ContactFAQSection from './ContactFAQSection';
import FinalCTASection from './FinalCTASection';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      {/* 1. Hero / Intro: Heading "Let’s Build Something Great Together", Description, CTAs */}
      <HeroSection />

      {/* 2. Contact Form ⭐: Full Name, Work Email, Phone, Company, Service, Budget, Message */}
      <ContactFormSection />

      {/* 3. Contact Information: Email, Phone / WhatsApp, Office Address, Business Hours */}
      <ContactInfoSection />

      {/* 4. Services / “How Can We Help?”: 7 Service Cards with Click-to-Inquire */}
      <ServicesGridSection />

      {/* 5. Office Location / Map: Matching Home Page Interactive Global Locations */}
      <LocationsSection />

      {/* 6. Why Contact Us?: 5 Trust-Building Commitments */}
      <WhyContactUsSection />

      {/* 7. FAQ: Key Questions (Start time, Cost, NDA, Maintenance, Response time) */}
      <ContactFAQSection />

      {/* 8. Final CTA: "Have a project in mind? Let’s talk." + "Book a Free Consultation" */}
      <FinalCTASection />
    </main>
  );
}
