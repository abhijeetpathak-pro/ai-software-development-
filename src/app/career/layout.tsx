import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Opportunities at Witqualis',
  description:
    'Career Opportunities at Witqualis. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  // This route renders the same page component as /careers/ (see src/app/career/page.tsx alias).
  // Canonical points to /careers/ to avoid duplicate-content signals while still giving this URL its own title.
  alternates: { canonical: '/careers/' },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
