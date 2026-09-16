import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Witqualis | Join Our Engineering and Technology Team',
  description:
    'Careers at Witqualis | Join Our Engineering and Technology Team. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/careers/' },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
