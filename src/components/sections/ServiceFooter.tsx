// src/app/components/ServiceFooter.tsx
'use client';

import React from 'react';

const services = [
  { name: 'SEO Services', url: '/seo-services' },
  { name: 'Search Engine Marketing', url: '/search-engine-marketing' },
  { name: 'Social Media Marketing', url: '/social-media-marketing' },
  { name: 'Pay Per Click Management', url: '/ppc-management' },
  { name: 'SEO Copywriting', url: '/seo-copywriting' },
  { name: 'Digital Marketing', url: '/digital-marketing' },
  { name: 'Brand Consulting', url: '/brand-consulting' },
  { name: 'HR and Payroll Management Software', url: '/hr-payroll' },
  { name: 'Jewellery Software', url: '/jewellery-software' },
  { name: 'CRM Software', url: '/crm-software' },
  { name: 'Real Estate Software', url: '/real-estate-software' },
  { name: 'Inventory Management Software', url: '/inventory-software' },
  { name: 'Hospital Management Software', url: '/hospital-software' },
  { name: 'School Management Software', url: '/school-software' },
  { name: 'Website Design', url: '/website-design' },
  { name: 'Website Development', url: '/website-development' },
  { name: 'CRM Software Development', url: '/crm-development' },
  { name: 'Software Development', url: '/software-development' },
  { name: 'Educational Web Portal Development', url: '/educational-portal' },
  { name: 'Restaurant Web Portal Development', url: '/restaurant-portal' },
  { name: 'Health Care Portal Development', url: '/healthcare-portal' },
  { name: 'Travel Portal Development', url: '/travel-portal' },
  { name: 'Real Estate Portal Development', url: '/real-estate-portal' },
  { name: 'E-commerce Website Development', url: '/ecommerce-development' },
  { name: 'Mobile App Development', url: '/mobile-app-development' },
  { name: 'Windows App Development', url: '/windows-app' },
  { name: 'Xamarin App Development', url: '/xamarin-app' },
  { name: 'Hybrid App Development', url: '/hybrid-app' },
  { name: 'Native App Development', url: '/native-app' },
  { name: 'UI/UX Design', url: '/ui-ux-design' },
  { name: 'Lead Management System', url: '/lead-management' },
];

export default function ServiceFooter() {
  return (
    <section className="service-footer-revamp">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12 text-center services-header">
            <span className="section-badge">Explore Our Offerings</span>
            <h2 className="services-revamp-title">OUR SERVICES</h2>
            <div className="h-line-glow"></div>
            <p className="services-desc">
              Transforming ideas into powerful digital solutions across every technology domain
            </p>
          </div>
        </div>

        {/* Tags Grid */}
        <div className="row">
          <div className="col-12">
            <div className="tag-box-revamp">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.url} 
                  className="service-tag-link"
                >
                  <span className="service-tag-btn">{service.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}