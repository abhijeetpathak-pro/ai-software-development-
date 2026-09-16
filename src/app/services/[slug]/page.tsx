// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getServiceBySlug } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.seoTitle} | WitQualis Technologies`,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}/` }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ slug: s.slug, name: s.name }));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'Witqualis',
      url: 'https://www.witqualis.com',
    },
    url: `https://www.witqualis.com/services/${service.slug}/`,
    areaServed: 'Worldwide',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.witqualis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.witqualis.com/services/' },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://www.witqualis.com/services/${service.slug}/` },
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
      <ServiceDetailClient service={service} relatedServices={related} />
    </>
  );
}
