import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Staff Augmentation Services for Flexible Engineering Capacity',
  description:
    'IT Staff Augmentation Services for Flexible Engineering Capacity. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/staff-augmentation/' },
};

export default function StaffAugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
