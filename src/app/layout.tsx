// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClickSpark from '@/components/animated/ClickSpark';
import CustomCursor from '@/components/animated/CustomCursor';
import QuantumChatbot from '@/components/animated/QuantumChatbot';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.witqualis.com'),
  title: {
    default: 'WitQualis Technologies | Staff Augmentation & Software Development',
    template: '%s | WitQualis Technologies',
  },
  description:
    'WitQualis Technologies is a staff augmentation and software development company. Hire dedicated developers or engage our teams for web, mobile, cloud and AI product development.',
  keywords: [
    'hire developers India',
    'IT staff augmentation services',
    'staff augmentation company in India',
    'React developers',
    'Node.js developers',
    'custom software development',
    'AI development company',
  ],
  openGraph: {
    title: 'WitQualis Technologies | Staff Augmentation & Software Development',
    description:
      'Hire dedicated developers or engage our teams for web, mobile, cloud and AI product development.',
    url: 'https://www.witqualis.com',
    siteName: 'WitQualis Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WitQualis Technologies',
    description: 'Staff augmentation and software development, built stack by stack.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Witqualis',
  url: 'https://www.witqualis.com',
  logo: 'https://www.witqualis.com/images/logo.png',
  email: 'info@witqualis.com',
  telephone: '+91-9289633637',
  sameAs: [
    'https://www.linkedin.com/company/witqualis-it-services',
    'https://www.instagram.com/witqualis/',
    'https://www.facebook.com/pg/witqualis',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Unit No.712A, 12 Avenue, RPS Group, Sarai Khawaja',
      addressLocality: 'Faridabad',
      addressRegion: 'Haryana',
      postalCode: '121001',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'F-402, Al Afra building, Al Khaledia Street, Al Majaz 3',
      addressLocality: 'Sharjah',
      addressCountry: 'AE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 508 6-10 Charles Street, Parramatta',
      addressRegion: 'New South Wales',
      postalCode: '2150',
      addressCountry: 'AU',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Broadway, Manhattan',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10007',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Bay Street',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      postalCode: 'M5H 2Y2',
      addressCountry: 'CA',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XSH5QQX');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-teal/30">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XSH5QQX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Global Click Spark Particles */}
        <ClickSpark />

        {/* Global Magnetic Custom Cursor */}
        <CustomCursor />

        {/* Original WitQualis Header / Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>

        {/* Original WitQualis Footer */}
        <Footer />

        {/* Autonomous Floating AI Assistant */}
        <QuantumChatbot />
      </body>
    </html>
  );
}