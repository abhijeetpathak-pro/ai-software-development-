// src/app/blog/[slug]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getMergedPosts } from '@/lib/sanity/queries';
import { Clock, Calendar, ArrowLeft, ArrowRight, Sparkles, BookOpen, Share2, UserCircle2, ShieldCheck } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await getMergedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export const revalidate = 60; // ISR revalidation

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle || `${post.title} | WitQualis`;
  const description = post.metaDescription || post.excerpt;
  const imageUrl = post.image.startsWith('http') ? post.image : `https://www.witqualis.com${post.image}`;
  const canonicalUrl = `/blog/${post.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: `https://www.witqualis.com${canonicalUrl}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getMergedPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.image.startsWith('http') ? post.image : `https://www.witqualis.com${post.image}`,
    datePublished: post.date,
    dateModified: post.updatedDate,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Witqualis',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.witqualis.com/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.witqualis.com/blog/${post.slug}/`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.witqualis.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.witqualis.com/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.witqualis.com/blog/${post.slug}/` },
    ],
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 overflow-x-hidden selection:bg-red-500/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Article Header & Cover Banner */}
      <article className="relative overflow-hidden pt-28 pb-12 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,_transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-red-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-red-600 font-bold">{post.category}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-mono font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-red-600" />
              <span>Published {post.date}</span>
              <span>&middot;</span>
              <span>Updated {post.updatedDate}</span>
              <span>&middot;</span>
              <Clock className="w-3.5 h-3.5 text-red-600" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 font-display leading-[1.08] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal border-l-4 border-red-600 pl-4 py-1 italic bg-red-50/40 rounded-r-2xl mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-8">
            <span className="flex items-center gap-1.5">
              <UserCircle2 className="w-4 h-4 text-red-600" />
              Written by {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              {post.reviewedBy}
            </span>
          </div>

          {/* Large High-Definition Cover Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </article>

      {/* 2. Article Content Body */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-sans font-normal">
          {post.content.map((block, i) => {
            const trimmed = block.trim();

            // Check for markdown image: ![Alt](url)
            const mdImgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (mdImgMatch) {
              const altText = mdImgMatch[1] || post.title;
              const imgSrc = mdImgMatch[2].trim();
              return (
                <figure key={i} className="my-8 rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xl">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={imgSrc}
                      alt={altText}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {altText && altText !== post.title && (
                    <figcaption className="p-3 text-center text-xs font-mono text-slate-400 bg-slate-900/90 border-t border-slate-800">
                      {altText}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // Check for direct image URL line
            if (
              trimmed.startsWith('/') ||
              trimmed.startsWith('http://') ||
              trimmed.startsWith('https://')
            ) {
              if (/\.(jpg|jpeg|png|webp|gif|svg|avif)(\?.*)?$/i.test(trimmed)) {
                return (
                  <figure key={i} className="my-8 rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xl">
                    <div className="relative w-full aspect-[16/9]">
                      <Image
                        src={trimmed}
                        alt={`Figure ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                );
              }
            }

            // Check for headings
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={i} className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950 font-display mt-10 mb-4 pt-4 border-t border-slate-100">
                  {trimmed.replace(/^##\s+/, '')}
                </h2>
              );
            }

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={i} className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900 font-display mt-6 mb-3">
                  {trimmed.replace(/^###\s+/, '')}
                </h3>
              );
            }

            // Standard paragraph
            return (
              <p key={i} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 leading-relaxed text-slate-800">
                {block}
              </p>
            );
          })}

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="p-6 rounded-2xl bg-red-50/60 border border-red-100 mt-10">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-red-700 mb-3">Related Witqualis Pages</p>
              <ul className="flex flex-wrap gap-3">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-semibold text-red-700 hover:text-red-800 hover:underline">
                      {link.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 3. Related Articles */}
      <section className="py-20 bg-[#fafafa] border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950 font-display">
              Read More Engineering Blueprints
            </h2>
            <Link href="/blog/" className="text-xs font-mono font-bold text-red-600 hover:text-red-700 uppercase flex items-center gap-1">
              <span>All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}/`}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-red-500/40 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-[10px] font-mono font-bold uppercase mb-2 inline-block">
                      {r.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 uppercase font-display group-hover:text-red-600 transition-colors leading-snug">
                      {r.title}
                    </h3>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-0 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{r.readTime}</span>
                  <span className="text-red-600 font-bold group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="relative py-24 bg-white">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 font-display">
            BUILD HIGH-PERFORMANCE SOFTWARE WITH WITQUALIS
          </h2>
          <p className="text-xs sm:text-base text-slate-600 max-w-lg mx-auto">
            Discuss your technical roadmap and scale your development team with a trial sprint before committing further.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:scale-105 transition-all"
            >
              <span>Connect with Our Technical Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
