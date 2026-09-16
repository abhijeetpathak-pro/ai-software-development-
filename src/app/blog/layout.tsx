import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witqualis Insights | Software Engineering, AI and Team Scaling',
  description:
    'Witqualis Insights | Software Engineering, AI and Team Scaling. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/blog/' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
