// src/data/caseStudies.ts

export interface ClientCaseStudy {
  id: string;
  caseNumber: string;
  client: string;
  industry: string;
  category?: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack?: string[];
  metrics?: string;
  metricsLabel?: string;
  logo?: string;
  image?: string;
  serviceCategory?: string;
}

export const clientCaseStudies: ClientCaseStudy[] = [
  {
    id: 'bakingo',
    caseNumber: 'CASE STUDY 01',
    client: 'Bakingo',
    industry: 'Food & Beverage — Online Bakery',
    category: 'E-Commerce & Food',
    tagline: 'Scaling premium, celebration-ready delivery across six major cities',
    description:
      'Bakingo is an FSSAI-certified online bakery focused on delivering high-quality cakes and celebration treats through a global talent network of expert chefs. The brand is currently scaling its managed delivery operations across Gurgaon, Delhi, Noida, Ghaziabad, Bangalore, and Hyderabad, ensuring every order meets the premium quality customers expect for their celebrations.',
    highlights: [
      'FSSAI-certified bakery operations',
      'Managed delivery scaling across 6 major Indian cities',
      'Built on a global network of expert chefs'
    ],
    stack: ['React 18', 'Laravel', 'Redis Cluster', 'MySQL', 'Docker', 'AWS'],
    metrics: '6 Major Cities',
    metricsLabel: 'Managed Delivery Scale',
    logo: '/images/client/bakingo.webp',
    image: '/images/client/bakingo.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'fliplearn',
    caseNumber: 'CASE STUDY 02',
    client: 'Fliplearn',
    industry: 'EdTech — Online Learning Transformation',
    category: 'EdTech & Learning',
    tagline: 'Redefining the teaching-learning process for 400+ schools nationwide',
    description:
      'Fliplearn is an award-winning Online Learning Transformation System that helps schools develop future-ready students through innovative pedagogy. Drawing on a global talent network in India, the platform takes an agile workforce-augmentation approach to education, with the stated goal of increasing student learning outcomes by 50% while reducing teacher workload by 50%. Fliplearn is trusted by 400+ schools and over 4,00,000 students, delivering managed educational services across 26 Indian states.',
    highlights: [
      'Trusted by 400+ schools and 4,00,000+ students',
      'Active across 26 Indian states',
      'Program goal: +50% learning outcomes, −50% teacher workload'
    ],
    stack: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Redis', 'AWS MediaLive'],
    metrics: '400+ Schools',
    metricsLabel: '4,00,000+ Students',
    logo: '/images/client/fliplearn.webp',
    image: '/images/client/fliplearn.webp',
    serviceCategory: 'Cross-Platform App Development'
  },
  {
    id: 'floweraura',
    caseNumber: 'CASE STUDY 03',
    client: 'FlowerAura',
    industry: 'E-Commerce — Online Florist',
    category: 'E-Commerce & Food',
    tagline: 'Fresh-cut flowers, handpicked and delivered across 229+ cities',
    description:
      'FlowerAura is a premier online flower store that draws on a global talent network of expert florists in India to deliver fresh-cut flowers across 229+ cities. Through a highly managed affiliate network, every bloom is handpicked at the perfect stage, and an agile workforce-augmentation approach to logistics and channel management keeps quality consistent nationwide.',
    highlights: [
      'Delivers to 229+ cities across India',
      'Managed affiliate network of expert florists',
      'Nationwide, quality-consistent delivery experience'
    ],
    stack: ['Next.js 15', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
    metrics: '229+ Cities',
    metricsLabel: 'Pan-India Delivery',
    logo: '/images/client/floweraura.webp',
    image: '/images/client/floweraura.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'cardekho',
    caseNumber: 'CASE STUDY 04',
    client: 'CarDekho',
    industry: 'Automotive — Car Search & Discovery',
    category: 'SaaS & Enterprise',
    tagline: 'Connecting car buyers with 4,000+ dealers through rich digital infrastructure',
    description:
      "CarDekho is India's leading car search venture, using a global talent network in India to help users find the right vehicle through rich automotive content and expert reviews. Agile workforce augmentation supports the integration of detailed specs, comparisons, and multimedia for all major brands. With a dedicated development team approach, CarDekho connects over 4,000 dealers and numerous financial institutions through a robust, managed digital infrastructure.",
    highlights: [
      "India's leading car search platform",
      'Connects 4,000+ dealers and financial institutions',
      'Rich specs, comparisons, and multimedia across major brands'
    ],
    stack: ['Python', 'FastAPI', 'RAG Vector DB', 'Voice AI', 'AWS', 'Next.js 15'],
    metrics: '4,000+ Dealers',
    metricsLabel: 'Rich Automotive Portal',
    logo: '/images/client/car-dekho.webp',
    image: '/images/client/car-dekho.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'vengreso',
    caseNumber: 'CASE STUDY 05',
    client: 'Vengreso',
    industry: 'SaaS — Sales Productivity Software',
    category: 'SaaS & Enterprise',
    tagline: 'Helping 2,000+ companies scale sales and revenue',
    description:
      'Vengreso is a premier productivity management software company that draws on a global talent network in India to help every knowledge worker save an hour a day. Through agile workforce augmentation, Vengreso has helped over 2,000 companies scale their sales and revenue via innovative education and technology, empowering sales professionals worldwide to work more efficiently.',
    highlights: [
      'Used by 2,000+ companies to scale sales and revenue',
      'Focused on knowledge-worker productivity',
      'Combines software, education, and technology'
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'AWS Lambda', 'DynamoDB', 'WebExtensions'],
    metrics: '2,000+ Companies',
    metricsLabel: 'Sales Productivity Scale',
    logo: '/images/client/vengreso.webp',
    image: '/images/client/vengreso.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'sutherland',
    caseNumber: 'CASE STUDY 06',
    client: 'Sutherland',
    industry: 'Digital Transformation & CX',
    category: 'AI & Digital Transformation',
    tagline: 'Engineering exceptional customer and employee experiences at scale',
    description:
      'Sutherland is an experience-led digital transformation company that draws on a global talent network in India to help businesses achieve non-linear growth. By integrating agile workforce augmentation, Sutherland combines human-centered design with AI, cognitive technology, and automation — engineering customer and employee experiences powered by real-time analytics and a robust, managed digital infrastructure.',
    highlights: [
      'Human-centered design combined with AI and automation',
      'Focused on non-linear business growth',
      'Powered by real-time analytics'
    ],
    stack: ['Python', 'Azure AI', 'LangChain', 'OpenAI API', 'FastAPI', 'Kubernetes'],
    metrics: 'AI & Automation',
    metricsLabel: 'Digital CX Transformation',
    logo: '/images/client/sutherland.webp',
    image: '/images/client/sutherland.webp',
    serviceCategory: 'UI/UX Design'
  },
  {
    id: 'synkup',
    caseNumber: 'CASE STUDY 07',
    client: 'synKup',
    industry: 'EdTech & AI — Campus-to-Career Ecosystem',
    category: 'AI & Digital Transformation',
    tagline: 'Building an AI-powered campus-to-career recruitment and talent ecosystem',
    description:
      'synKup is an innovative career-tech platform that connects students, college campuses, and enterprise recruiters into a unified ecosystem. By leveraging data-grounded AI assistance for candidate matching, automated shortlisting, profile summarization, and recruiter outreach drafting, synKup streamlines campus placements and hiring workflows with humans retaining final decision control.',
    highlights: [
      'Unified ecosystem connecting Students, Campuses & Recruiters',
      'Data-grounded AI matching, summarization & outreach drafting',
      'Centralized campus placement programmes & student project portfolios'
    ],
    stack: ['Next.js 15', 'Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: 'AI-Assisted',
    metricsLabel: 'Campus-to-Career Platform',
    logo: '/images/client/synkup.webp',
    image: '/images/client/synkup.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'jangubuzz',
    caseNumber: 'CASE STUDY 08',
    client: 'Jangubuzz',
    industry: 'Events & Marketplace',
    category: 'Social & Community',
    tagline: 'A high-performance marketplace connecting creatives, hosts, and event spaces',
    description:
      "Jangubuzz is a dynamic event discovery and hosting platform that draws on a global talent network in India to connect people with local experiences. Through agile workforce augmentation, Jangubuzz offers the 'JB Service Listing' marketplace, where users can hire creatives and book event spaces. The platform serves as a seamless freelance service hub, letting professionals list their services and get booked through a high-performance, managed digital infrastructure.",
    highlights: [
      "'JB Service Listing' marketplace for creatives and venues",
      'Functions as a freelance service hub',
      'Event discovery and hosting in one platform'
    ],
    stack: ['Flutter', 'Node.js', 'Firebase', 'AWS CloudFront', 'FFmpeg'],
    metrics: 'Service Hub',
    metricsLabel: 'Marketplace & Events',
    logo: '/images/client/Jangubuzz.webp',
    image: '/images/client/Jangubuzz.webp',
    serviceCategory: 'Cross-Platform App Development'
  },
  {
    id: 'educomp',
    caseNumber: 'CASE STUDY 09',
    client: 'Educomp',
    industry: 'Education — Global EdTech Group',
    category: 'EdTech & Learning',
    tagline: 'Reaching over 15 million learners across India, Singapore, and the USA',
    description:
      "Educomp Group is one of India's leading education companies, operating a vast global talent network in India alongside 27 offices worldwide to reach over 15 million learners. Through agile workforce augmentation, Educomp stays at the forefront of e-education via pioneering initiatives and strategic subsidiaries such as Learning.com, managing complex digital infrastructure across India, Singapore, and the USA.",
    highlights: [
      'Reaches over 15 million learners',
      '27 offices worldwide',
      'Operates across India, Singapore, and the USA'
    ],
    stack: ['Next.js', 'PostgreSQL', 'Java Spring Boot', 'Docker', 'AWS RDS'],
    metrics: '15M+ Learners',
    metricsLabel: '27 Global Offices',
    logo: '/images/client/educomp-school.webp',
    image: '/images/client/educomp-school.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'petluvs',
    caseNumber: 'CASE STUDY 10',
    client: 'Petluvs',
    industry: 'Social Platform — Pet Community',
    category: 'Social & Community',
    tagline: 'A safe, seamless social platform for pet enthusiasts',
    description:
      'Petluvs is a next-generation social platform for pet enthusiasts, built with a dedicated development team approach to ensure a safe and seamless user experience. Drawing on a global talent network in India, the platform gives pet owners tools to arrange playdates and socialize, while agile workforce augmentation supports critical safety features like real-time animal-abuse reporting. Petluvs is available on both iOS and Android.',
    highlights: [
      'Available on iOS and Android',
      'Real-time animal-abuse reporting as a core safety feature',
      'Built for safe, community-driven pet-owner engagement'
    ],
    stack: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Twilio WebRTC'],
    metrics: 'iOS & Android',
    metricsLabel: 'Pet Community Platform',
    logo: '/images/client/petlav.webp',
    image: '/images/client/petlav.webp',
    serviceCategory: 'App Development'
  },
  {
    id: 'strategic-erp',
    caseNumber: 'CASE STUDY 11',
    client: 'Strategic ERP',
    industry: 'Enterprise SaaS — Real Estate & Infrastructure',
    category: 'SaaS & Enterprise',
    tagline: 'A cloud-based automation platform for complex business operations',
    description:
      'StrategicERP is a premier cloud-based automation platform, built on a global talent network in India to simplify complex business operations. Through agile workforce augmentation, StrategicERP provides specialized modules for the real estate, construction, and infrastructure industries — delivering real-time analytics, mobile accessibility, and seamless project management through a high-performance, managed digital infrastructure.',
    highlights: [
      'Specialized modules for real estate, construction & infrastructure',
      'Real-time analytics and mobile accessibility',
      'End-to-end project management tooling'
    ],
    stack: ['React', 'Java', 'Python', 'SQL', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: 'Specialized ERP',
    metricsLabel: 'Real Estate & Infra',
    logo: '/images/client/Strategic ERP.webp',
    image: '/images/client/Strategic ERP.webp',
    serviceCategory: 'Web Development'
  },
  {
    id: 'floofers',
    caseNumber: 'CASE STUDY 12',
    client: 'Floofers',
    industry: 'Pet-Care Platform',
    category: 'Social & Community',
    tagline: 'A comprehensive, safe platform for pet parents and their community',
    description:
      'Floofers is a premium pet-care platform that draws on a global talent network in India to provide comprehensive pet services and community engagement. Through agile workforce augmentation, the platform integrates high-performance features for pet health tracking, social networking, and marketplace access — ensuring a safe and interactive environment for pet parents that scales with its growing user base.',
    highlights: [
      'Pet health tracking, social networking, and marketplace in one app',
      'Designed for a safe, interactive pet-parent community',
      'Built to scale with a growing user base'
    ],
    stack: ['Next.js 15', 'Shopify Plus API', 'Node.js', 'PostgreSQL', 'Stripe Billing'],
    metrics: 'iOS & Android',
    metricsLabel: 'Pet Care Ecosystem',
    logo: '/images/client/floofers.webp',
    image: '/images/client/floofers.webp',
    serviceCategory: 'App Development'
  }
];

export function getCaseStudyById(id: string): ClientCaseStudy | undefined {
  return clientCaseStudies.find((c) => c.id === id);
}

export function getCaseStudiesByService(serviceSlug: string): ClientCaseStudy[] {
  switch (serviceSlug) {
    case 'design':
      return clientCaseStudies.filter((c) => c.id === 'sutherland' || c.id === 'bakingo');
    case 'web-development':
      return clientCaseStudies.filter((c) => ['synkup', 'cardekho', 'bakingo', 'floweraura', 'strategic-erp', 'vengreso', 'educomp'].includes(c.id));
    case 'app-development':
      return clientCaseStudies.filter((c) => ['floofers', 'petluvs', 'vengreso'].includes(c.id));
    case 'cross-platform-app-development':
      return clientCaseStudies.filter((c) => ['fliplearn', 'jangubuzz', 'petluvs', 'floofers', 'synkup'].includes(c.id));
    default:
      return clientCaseStudies;
  }
}

