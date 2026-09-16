import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Witqualis to Hire Software Developers or Build Your Product',
  description:
    'Contact Witqualis to Hire Software Developers or Build Your Product. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  // This route renders the same page component as /contact/ (see src/app/contact-us/page.tsx alias).
  // Canonical points to /contact/ to avoid duplicate-content signals while still giving this URL its own title.
  alternates: { canonical: '/contact/' },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
