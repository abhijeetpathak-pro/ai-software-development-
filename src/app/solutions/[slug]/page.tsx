// src/app/solutions/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { solutions, getSolutionBySlug } from '@/data/services';
import SolutionDetailClient from './SolutionDetailClient';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: `${solution.seoTitle} | WitQualis Technologies`,
    description: solution.seoDescription,
    alternates: { canonical: `/solutions/${solution.slug}/` }
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const related = solutions
    .filter((s) => s.slug !== solution.slug)
    .map((s) => ({ slug: s.slug, name: s.name, isAI: s.isAI }));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.name,
    description: solution.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'Witqualis',
      url: 'https://www.witqualis.com',
    },
    url: `https://www.witqualis.com/solutions/${solution.slug}/`,
    areaServed: 'Worldwide',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.witqualis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.witqualis.com/solutions/' },
      { '@type': 'ListItem', position: 3, name: solution.name, item: `https://www.witqualis.com/solutions/${solution.slug}/` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SolutionDetailClient solution={solution} relatedSolutions={related} />
    </>
  );
}
