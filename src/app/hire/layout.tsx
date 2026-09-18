import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated Developers & Engineering Squads | 7-Day Trial Sprint',
  description:
    'Hire pre-vetted senior software developers, AI engineers, full-stack architects, and dedicated squads from WitQualis Technologies. 7-day risk-free evaluation sprint, 48h matching speed, and 100% IP ownership.',
  alternates: { canonical: '/hire/' },
  openGraph: {
    title: 'Hire Dedicated Developers | WitQualis Technologies',
    description: 'Scale your software development with pre-vetted senior engineering squads. 7-day risk-free sprint trial.',
    url: 'https://www.witqualis.com/hire/'
  }
};

export default function HireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
