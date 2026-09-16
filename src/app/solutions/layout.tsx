import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Solutions for Complex Business Needs',
  description:
    'Custom Software Solutions for Complex Business Needs. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/solutions/' },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
