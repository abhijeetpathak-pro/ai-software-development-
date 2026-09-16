// src/app/page.tsx
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Staff Augmentation Company in India for Global Engineering Teams',
  description:
    'Staff Augmentation Company in India for Global Engineering Teams. Explore Witqualis capabilities, delivery approach, proof and next steps for a qualified consultation.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return <HomeClient />;
}
