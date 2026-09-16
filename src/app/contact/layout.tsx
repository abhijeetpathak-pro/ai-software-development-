import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Witqualis | Discuss Your Development or Staffing Need',
  description:
    'Contact Witqualis | Discuss Your Development or Staffing Need. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/contact/' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
