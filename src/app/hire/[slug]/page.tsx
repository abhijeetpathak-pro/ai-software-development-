// src/app/hire/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { stacks, getEnrichedStack, getStackBySlug } from '@/data/stacks';
import HireStackClient from './HireStackClient';

export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stack = getStackBySlug(slug);
  if (!stack) return {};
  return {
    title: `${stack.seoTitle} | WitQualis Technologies`,
    description: stack.seoDescription,
    alternates: { canonical: `/hire/${stack.slug}/` }
  };
}

export default async function HireStackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const enrichedStack = getEnrichedStack(slug);
  if (!enrichedStack) notFound();

  const related = stacks
    .filter((s) => s.category === enrichedStack.category && s.slug !== enrichedStack.slug)
    .map((s) => ({ slug: s.slug, name: s.name, category: s.category }))
    .slice(0, 5);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: enrichedStack.name,
    description: enrichedStack.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'Witqualis',
      url: 'https://www.witqualis.com',
    },
    url: `https://www.witqualis.com/hire/${enrichedStack.slug}/`,
    areaServed: 'Worldwide',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.witqualis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Staff Augmentation', item: 'https://www.witqualis.com/staff-augmentation/' },
      { '@type': 'ListItem', position: 3, name: enrichedStack.name, item: `https://www.witqualis.com/hire/${enrichedStack.slug}/` },
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
      <HireStackClient stack={enrichedStack} relatedStacks={related} />
    </>
  );
}
