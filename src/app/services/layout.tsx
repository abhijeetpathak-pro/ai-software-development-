import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Services for Growing Businesses',
  description:
    'Software Development Services for Growing Businesses. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/services/' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
