import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Witqualis | Technology and Engineering Delivery Partner',
  description:
    'About Witqualis | Technology and Engineering Delivery Partner. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/about/' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
