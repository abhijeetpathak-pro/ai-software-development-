// src/data/services.ts

export type ServiceFeature = {
  title: string;
  badge: string;
  desc: string;
  deliverables: string[];
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
  duration: string;
};

export type TechCategory = {
  category: string;
  items: string[];
};

export type ServiceBenefit = {
  title: string;
  badge: string;
  desc: string;
};

export type ServiceCaseStudy = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceItem = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  seoTitle: string;
  seoDescription: string;
  overview: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    highlights: string[];
  };
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  technologies: TechCategory[];
  benefits: ServiceBenefit[];
  caseStudies: ServiceCaseStudy[];
  faqs: ServiceFAQ[];
};

export const services: ServiceItem[] = [
  {
    slug: 'design',
    name: 'UI/UX Design',
    tagline: 'Interfaces Engineered to Convert, Captivate, and Scale',
    summary:
      'Human-centric UI/UX design grounded in real user behavioral flows — design systems, wireframes, and interactive prototypes built for pixel-perfect developer handoff.',
    deliverables: [
      'UX Research & User Journey Mapping',
      'Figma Design Systems & Atomic Components',
      'Interactive Clickable Prototypes',
      'Developer-Ready Tokens & Specifications'
    ],
    seoTitle: 'UI/UX Design & Product Design Services',
    seoDescription:
      'Enterprise UI/UX design services from WitQualis Technologies — user research, scalable design systems, and Figma prototypes engineered for high conversion and seamless handoff.',
    overview: {
      title: 'Design That Bridges Business Strategy & User Delight',
      subtitle: 'DATA-INFORMED & CONVERSION-OPTIMIZED PRODUCT DESIGN',
      paragraph1:
        'Great digital products are not designed by guessing. Our UI/UX design team combines deep user research, behavioral telemetry, and atomic design systems to create intuitive interfaces that reduce friction and maximize conversion rates.',
      paragraph2:
        'We collaborate directly with your engineering squads to ensure every Figma component maps 1:1 with frontend UI code (React, Next.js, Tailwind), eliminating developer ambiguity and speeding up production rollouts.',
      highlights: [
        'Atomic Design System tokens for multi-brand consistency',
        'Mobile-first responsive UX adhering to WCAG 2.1 AA accessibility',
        'Zero-gap developer handoff with ready-to-code tokens'
      ]
    },
    features: [
      {
        title: 'User Research & Journey Mapping',
        badge: 'DISCOVERY & UX',
        desc: 'Uncover user bottlenecks through heuristic audits, competitor benchmarking, and detailed journey mapping to establish clear product empathy.',
        deliverables: ['User Personas & Scenarios', 'Information Architecture (IA)', 'Interactive Wireframes']
      },
      {
        title: 'Enterprise Design Systems',
        badge: 'SCALABILITY',
        desc: 'Build unified component libraries with reusable Figma variants, typography hierarchies, and dark/light color tokens across platforms.',
        deliverables: ['Atomic Component Library', 'Auto-Layout UI Components', 'Design Token JSON Exporters']
      },
      {
        title: 'High-Fidelity Interactive Prototyping',
        badge: 'VALIDATION',
        desc: 'Simulate real product interactions, micro-animations, and edge-case user states before committing engineering resources to development.',
        deliverables: ['Clickable Figma Prototypes', 'Micro-Interactions & Transitions', 'Stakeholder Demo Sandboxes']
      },
      {
        title: 'UX Audits & Conversion Optimization',
        badge: 'PERFORMANCE',
        desc: 'Identify drop-off points in existing apps and execute iterative redesign sprints that boost onboarding completion and retention.',
        deliverables: ['Heuristic Evaluation Report', 'A/B Testing Wireframes', 'Core Usability Recommendations']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Research & User Discovery',
        desc: 'We map target persona workflows, analyze user pain points, and define strategic design success metrics.',
        duration: 'Sprint 1 (Week 1)'
      },
      {
        step: '02',
        title: 'Wireframing & Information Architecture',
        desc: 'Low-fidelity wireframes and structural user flows are mapped out to validate hierarchy and navigation.',
        duration: 'Sprint 1 (Week 2)'
      },
      {
        step: '03',
        title: 'High-Fidelity UI & Design System',
        desc: 'Polished visual design, brand color tokens, typography, and responsive screen states are created in Figma.',
        duration: 'Sprint 2 (Week 3)'
      },
      {
        step: '04',
        title: 'Interactive Prototyping & User Testing',
        desc: 'We build clickable prototypes, conduct stakeholder walkthroughs, and refine micro-interactions based on feedback.',
        duration: 'Sprint 2 (Week 4)'
      },
      {
        step: '05',
        title: 'Developer Handoff & QA Review',
        desc: 'Clean token handoff to frontend engineers, asset exports, and design QA during production implementation.',
        duration: 'Ongoing Sprint Support'
      }
    ],
    technologies: [
      {
        category: 'Design & Prototyping Tools',
        items: ['Figma', 'FigJam', 'Adobe XD', 'Sketch', 'Principle', 'Framer']
      },
      {
        category: 'Design Systems & Handoff',
        items: ['Storybook', 'Zeroheight', 'Tokens Studio', 'Zeplin', 'Lottie Animation']
      },
      {
        category: 'Research & Usability',
        items: ['Hotjar', 'CrazyEgg', 'Maze User Testing', 'Google Analytics 4', 'Mixpanel']
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Test our dedicated UI/UX designers on real sprint wireframes for 15 days before making a long-term commitment.'
      },
      {
        title: 'Client IP & Asset Ownership',
        badge: 'FULL RIGHTS',
        desc: 'All Figma files, design tokens, illustrations, and source assets are transferred directly to your organization.'
      },
      {
        title: 'Developer-First Handoff',
        badge: 'ZERO GUESSWORK',
        desc: 'Our designers write production-ready specs with exact CSS properties, padding rules, and Tailwind token names.'
      },
      {
        title: 'Conversion-Focused UX',
        badge: 'MEASURABLE ROI',
        desc: 'Every layout decision is engineered to lower bounce rates and increase customer activation and trial conversions.'
      },
      {
        title: 'Timezone Synchronization',
        badge: 'DAILY OVERLAP',
        desc: 'Direct collaboration during US, UK, and UAE business hours with instant Figma comments and Slack reviews.'
      },
      {
        title: 'Senior Designer Bench',
        badge: 'VETTED TALENT',
        desc: 'Pre-vetted product designers with extensive backgrounds in FinTech, Healthcare, SaaS, and B2B enterprise apps.'
      }
    ],
    caseStudies: [
      {
        title: 'Enterprise FinTech Dashboard Redesign',
        client: 'Global Wealth Management Platform',
        industry: 'FinTech & Banking',
        challenge: 'Complex multi-currency investment workflows caused high support tickets and a 38% user onboarding drop-off rate.',
        solution: 'Engineered an atomic design system in Figma with intuitive transaction widgets, real-time portfolio telemetry, and dark mode.',
        results: [
          'Design-to-development handoff accelerated by 3x'
        ],
        stack: ['Figma', 'Tokens Studio', 'Storybook', 'Tailwind CSS']
      },
      {
        title: 'Healthcare Patient Portal & Mobile App UX',
        client: 'North American Telehealth Network',
        industry: 'Healthcare SaaS',
        challenge: 'Patients struggled to schedule consultations and access lab records across fragmented desktop and mobile views.',
        solution: 'Designed a unified, WCAG AA compliant cross-platform experience with 1-click booking and biometric login flows.',
        results: [
          'Zero accessibility compliance violations'
        ],
        stack: ['Figma', 'Framer Prototype', 'Design System', 'WCAG 2.1 AA']
      }
    ],
    faqs: [
      {
        q: 'How does your UI/UX design handoff to developers work?',
        a: 'We provide structured Figma files with auto-layout, organized variant components, responsive break points, and design token documentation (mapping directly to Tailwind or CSS variables) so developers can implement pixel-perfect screens without guessing.'
      },
      {
        q: 'Do you create design systems from scratch or work with existing ones?',
        a: 'We do both. We can audit and expand your existing design system or build a brand-new atomic design library with dark/light themes, typography scales, and tokenized variables.'
      },
      {
        q: 'Can we hire dedicated UI/UX designers on a monthly basis?',
        a: 'Yes. We offer dedicated product designers on monthly retainers who integrate directly into your sprint rituals, Slack channels, and Jira boards.'
      },
      {
        q: 'Do you provide interactive clickable prototypes for investor pitches?',
        a: 'Yes! We create high-fidelity, interactive Figma or Framer prototypes complete with realistic transitions and data states, ideal for user testing and executive demos.'
      },
      {
        q: 'How quickly can a designer start on our project?',
        a: 'We can match and onboard a pre-vetted senior UI/UX designer into your team within 24 to 48 hours, with a trial sprint available before a longer commitment.'
      }
    ]
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'High-Performance Web Applications Engineered to Scale',
    summary:
      'Custom full-stack web application engineering across Next.js 15, React, Node.js, Python, and cloud infrastructure — built for high concurrency, sub-second latency, and zero downtime.',
    deliverables: [
      'Custom Full-Stack Next.js 15 & React Platforms',
      'High-Throughput Microservices & REST/GraphQL APIs',
      'Headless E-Commerce & Multi-Tenant SaaS Portals',
      'Sub-Second Google Core Web Vitals Optimization'
    ],
    seoTitle: 'Custom Web Development Services & Engineering Squads',
    seoDescription:
      'Custom web development services by WitQualis Technologies — Next.js, React, Node.js, and Python web apps built for enterprise scalability and sub-second load times.',
    overview: {
      title: 'Architecting Web Systems That Handle Real Enterprise Load',
      subtitle: 'MODERN FULL-STACK ENGINEERING & CLOUD ARCHITECTURE',
      paragraph1:
        'In modern enterprise software, slow load times and rigid monoliths translate directly to lost revenue. Our engineering squads design and build modern, modular web applications utilizing server-side rendering (SSR), edge computing, and distributed microservices.',
      paragraph2:
        'Whether you are migrating legacy systems to Next.js 15, engineering high-concurrency B2B platforms, or integrating real-time AI capabilities, we provide dedicated squads that own quality, sprint velocity, and production uptime.',
      highlights: [
        'Next.js 15 App Router with Server Components for sub-second TTFB',
        'Enterprise-grade security, OAuth2/OIDC authentication, and SOC2 compliance'
      ]
    },
    features: [
      {
        title: 'Custom Enterprise Web Apps',
        badge: 'NEXT.JS 15 & REACT',
        desc: 'Build scalable web portals, client dashboards, and admin panels featuring server-side rendering, edge caching, and atomic state management.',
        deliverables: ['Next.js 15 App Router Architecture', 'Zustand/Redux State Management', 'Tailwind CSS & Modular Components']
      },
      {
        title: 'High-Throughput Backend & APIs',
        badge: 'NODE.JS & PYTHON',
        desc: 'Design resilient microservices, asynchronous message queues, and high-concurrency REST/GraphQL APIs with database pooling and caching.',
        deliverables: ['Node.js & FastAPI Microservices', 'PostgreSQL & Redis Caching', 'Kafka / RabbitMQ Event Streams']
      },
      {
        title: 'Multi-Tenant SaaS Platforms',
        badge: 'CLOUD-NATIVE',
        desc: 'End-to-end SaaS architecture with isolated tenant databases, automated tenant provisioning, Stripe/Paddle subscription billing, and RBAC security.',
        deliverables: ['Multi-Tenant Database Schemas', 'Subscription & Metered Billing', 'Role-Based Access Control (RBAC)']
      },
      {
        title: 'Legacy Modernization & Migration',
        badge: 'ZERO DOWNTIME',
        desc: 'Deconstruct aging monoliths (PHP/Java/.NET) into high-velocity React/Next.js and microservice architectures with zero data loss or downtime.',
        deliverables: ['Strangler Fig Migration Strategy', 'API Gateway Implementation', 'Incremental Cloud Migration']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Architecture & Schema Discovery',
        desc: 'We analyze your data schemas, traffic forecasts, security constraints, and map out the complete microservice architecture.',
        duration: 'Sprint 0 (Week 1)'
      },
      {
        step: '02',
        title: 'Environment Provisioning & CI/CD',
        desc: 'Sandboxed staging environments, automated GitHub Actions pipelines, and code formatting rules are established.',
        duration: 'Sprint 0 (Week 2)'
      },
      {
        step: '03',
        title: 'Bi-Weekly Agile Sprints',
        desc: 'Continuous feature engineering with pair-coding, mandatory unit tests, and bi-weekly production-ready release demos.',
        duration: 'Sprint Execution (Bi-Weekly)'
      },
      {
        step: '04',
        title: 'Performance & Security Hardening',
        desc: 'Stress testing under high concurrency, Core Web Vitals optimization, and automated vulnerability scanning.',
        duration: 'Pre-Release Sprint'
      },
      {
        step: '05',
        title: 'Production Deployment & SLA Monitoring',
        desc: 'Zero-downtime canary rollout with real-time Datadog/Sentry telemetry and 24/7 on-call SLA support.',
        duration: 'Continuous SLA Support'
      }
    ],
    technologies: [
      {
        category: 'Frontend Frameworks',
        items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Three.js']
      },
      {
        category: 'Backend & APIs',
        items: ['Node.js', 'Express', 'NestJS', 'Python FastAPI', 'Django', 'Go', 'GraphQL', 'REST']
      },
      {
        category: 'Databases & Caching',
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma ORM', 'Pinecone Vector DB']
      },
      {
        category: 'DevOps & Cloud',
        items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Vercel', 'GitHub Actions']
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Test our matched full-stack developers in your live sprint for 15 days. Pay only when completely satisfied.'
      },
      {
        title: 'Client Code & IP Ownership',
        badge: 'FULL IP RIGHTS',
        desc: 'All git commits, documentation, architectures, and proprietary code belong entirely to you from day one.'
      },
      {
        title: 'Sub-Second Page Load Speed',
        badge: '< 100MS TTFB',
        desc: 'We optimize for Google Core Web Vitals to deliver lightning-fast page transitions and superior SEO rankings.'
      },
      {
        title: 'Direct Senior Developer Access',
        badge: 'NO MIDDLEMEN',
        desc: 'Collaborate directly with matched senior engineers on Slack, Zoom standups, and Linear/Jira boards.'
      },
      {
        title: 'Overlapping Working Hours',
        badge: '4-8 HOURS DAILY',
        desc: 'Our squads work overlapping hours with US (EST/PST), UK/Europe (GMT/CET), and GCC (GST) business hours.'
      },
      {
        title: 'Enterprise Security by Default',
        badge: 'SOC2 & OIDC',
        desc: 'Enforced encryption at rest and in transit, secrets rotation, and strict OWASP Top 10 vulnerability prevention.'
      }
    ],
    caseStudies: [
      {
        title: 'High-Concurrency B2B SaaS Platform',
        client: 'Enterprise Supply Chain Logistics',
        industry: 'Logistics & Supply Chain',
        challenge: 'A legacy monolithic platform crashed during flash logistics load and suffered from 4.2-second page render times.',
        solution: 'Re-architected the portal using Next.js 15, distributed Node.js microservices on AWS EKS, and Redis caching layer.',
        results: [
          'Rebuilt on a distributed microservices architecture for improved page load performance',
          'Redesigned for higher simultaneous transaction capacity'
        ],
        stack: ['Next.js 15', 'Node.js', 'PostgreSQL', 'AWS EKS', 'Redis']
      },
      {
        title: 'Real-Time Telemetry & Analytics Dashboard',
        client: 'Industrial IoT Analytics Provider',
        industry: 'IoT & Energy Systems',
        challenge: 'Needed a responsive dashboard capable of streaming live sensor data from 50,000+ devices with sub-50ms latency.',
        solution: 'Engineered a React + WebSocket web client with WebGL-accelerated chart rendering and time-series database indexing.',
        results: [
          'Built for low-latency real-time data streaming',
          'Optimized rendering for high-frequency data updates'
        ],
        stack: ['React', 'TypeScript', 'WebSockets', 'TimescaleDB', 'Docker']
      }
    ],
    faqs: [
      {
        q: 'Can you work within our existing GitHub/GitLab repositories and tools?',
        a: 'Yes. Our developers integrate seamlessly into your established ecosystem — committing directly to your GitHub/GitLab repos, joining your Slack/Teams channels, and attending daily agile standups.'
      },
      {
        q: 'What engagement models do you support for web development?',
        a: 'We offer dedicated engineering squads (monthly retainer), individual staff augmentation (hourly/monthly rates), and milestone-based fixed-price projects with deliverables agreed in the contract.'
      },
      {
        q: 'How do you handle testing and code quality assurance?',
        a: 'We enforce automated testing pipelines using Jest, Playwright, and Cypress with mandatory pull request reviews by Principal Architects and strict static analysis.'
      },
      {
        q: 'How fast can a web development team be deployed?',
        a: 'We can match and onboard pre-vetted senior developers within 48 hours, ready to contribute to sprint tickets from day one.'
      },
      {
        q: 'Do you handle post-launch maintenance and cloud support?',
        a: 'Yes. We provide 24/7 SLA maintenance packages covering security patches, cloud cost optimization, server monitoring, and feature iteration.'
      }
    ]
  },
  {
    slug: 'app-development',
    name: 'App Development',
    tagline: 'Native iOS & Android Apps Built for Raw Performance & Retention',
    summary:
      'Native mobile engineering utilizing Swift (iOS) and Kotlin (Android) — designed for buttery 120Hz animations, hardware sensor integration, offline-first sync, and frictionless App Store launches.',
    deliverables: [
      'Native iOS Apps (Swift & SwiftUI)',
      'Native Android Apps (Kotlin & Jetpack Compose)',
      'Offline-First Data Sync & Local Caching',
      'App Store & Google Play Launch & SLA Support'
    ],
    seoTitle: 'Native Mobile App Development Services (iOS & Android)',
    seoDescription:
      'Native iOS and Android mobile app development by WitQualis Technologies — Swift, Kotlin, Jetpack Compose, and SwiftUI apps built for top performance and 5-star store ratings.',
    overview: {
      title: 'Native Mobile Experiences That Users Love and Keep',
      subtitle: 'HIGH-PERFORMANCE SWIFT & KOTLIN MOBILE ENGINEERING',
      paragraph1:
        'When your product demands uncompromising speed, seamless 120Hz UI transitions, deep hardware access (Bluetooth, Biometrics, CoreML, Camera), or platform-native conventions, native mobile development is non-negotiable.',
      paragraph2:
        'Our mobile engineers build robust, battery-efficient native applications using Swift/SwiftUI for Apple ecosystems and Kotlin/Jetpack Compose for Android, backed by automated CI/CD build distribution.',
      highlights: [
        'SwiftUI and Jetpack Compose for declarative, responsive mobile UIs',
        'Offline-first architecture with SQLite / Room / Realm local sync',
        'Full App Store & Google Play compliance, review management, and CI/CD'
      ]
    },
    features: [
      {
        title: 'Native iOS App Development',
        badge: 'SWIFT & SWIFTUI',
        desc: 'Build fluid, Apple-standard iOS applications supporting iPhone, iPad, Apple Watch, WidgetKit, and Apple Pay integrations.',
        deliverables: ['Swift 6 & SwiftUI Architecture', 'CoreData / SwiftData Local Sync', 'Apple Pay & In-App Purchases']
      },
      {
        title: 'Native Android App Development',
        badge: 'KOTLIN & COMPOSE',
        desc: 'Engineered with modern Kotlin Coroutines, Jetpack Compose, and Material You guidelines for peak performance across diverse device ecosystems.',
        deliverables: ['Kotlin & Jetpack Compose UIs', 'Room Database & WorkManager', 'Google Play Billing & Push Services']
      },
      {
        title: 'Hardware & Sensor Integration',
        badge: 'IOT & BLE',
        desc: 'Deep hardware connectivity including Bluetooth Low Energy (BLE), NFC, GPS Geofencing, Biometric authentication, and Camera SDKs.',
        deliverables: ['BLE Peripheral & Central Sync', 'Biometric FaceID / Fingerprint Auth', 'Camera & Image Processing SDKs']
      },
      {
        title: 'Automated Mobile CI/CD & Fastlane',
        badge: 'DEVOPS',
        desc: 'Automated build signing, test distribution via TestFlight and Firebase App Distribution, and seamless zero-stress App Store releases.',
        deliverables: ['Fastlane Build Automation', 'Automated TestFlight Deployment', 'Crashlytics Real-Time Telemetry']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Mobile Architecture & UX Specs',
        desc: 'We map out platform-specific navigation patterns (iOS Human Interface vs Material You) and define offline data sync schemas.',
        duration: 'Sprint 0 (Week 1)'
      },
      {
        step: '02',
        title: 'Core Engine & API Contracts',
        desc: 'Setting up clean architecture (MVVM / MVI), networking clients, authentication flows, and local secure storage.',
        duration: 'Sprint 1 (Weeks 2-3)'
      },
      {
        step: '03',
        title: 'UI Implementation & Hardware Hooks',
        desc: 'Declarative screen builds in SwiftUI and Jetpack Compose with haptics, animations, and sensor integrations.',
        duration: 'Sprint 2 (Weeks 4-6)'
      },
      {
        step: '04',
        title: 'Device Matrix QA & Memory Profiling',
        desc: 'Testing across real physical devices, profiling battery usage, network throttling tests, and memory leak elimination.',
        duration: 'Sprint 3 (Weeks 7-8)'
      },
      {
        step: '05',
        title: 'App Store Launch & Monitoring',
        desc: 'App Store and Google Play submissions, compliance verification, and post-launch crash telemetry monitoring.',
        duration: 'Launch & Continuous Updates'
      }
    ],
    technologies: [
      {
        category: 'iOS Ecosystem',
        items: ['Swift 6', 'SwiftUI', 'UIKit', 'Combine', 'SwiftData', 'CoreML', 'TestFlight', 'XCTest']
      },
      {
        category: 'Android Ecosystem',
        items: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Room DB', 'Koin / Hilt', 'Retrofit', 'JUnit']
      },
      {
        category: 'Mobile DevOps & Analytics',
        items: ['Fastlane', 'GitHub Actions', 'Firebase Crashlytics', 'App Center', 'Mixpanel', 'Sentry']
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Evaluate matched mobile engineers on your native repository during a trial sprint.'
      },
      {
        title: 'Uncompromising 120Hz Speed',
        badge: 'NATIVE PERFORMANCE',
        desc: 'Zero lag, instant cold-starts, and silky smooth scroll performance on both flagship and budget devices.'
      },
      {
        title: 'Offline-First Reliability',
        badge: 'SEAMLESS SYNC',
        desc: 'Apps continue working seamlessly offline and auto-sync transactions as soon as connectivity resumes.'
      },
      {
        title: 'App Store Submission Support',
        badge: 'STORE GUIDELINES',
        desc: 'We follow Apple App Store and Google Play Store review guidelines throughout development.'
      },
      {
        title: 'Battery & Memory Optimized',
        badge: 'EFFICIENCY',
        desc: 'Rigorous memory profiling ensures your app consumes minimal battery and background system resources.'
      },
      {
        title: 'Client Codebase Ownership',
        badge: 'IP OWNED',
        desc: 'Complete source code, certificates, signing keys, and store listings belong exclusively to you.'
      }
    ],
    caseStudies: [
      {
        title: 'Connected Health & Wearable iOS/Android App',
        client: 'Smart Medical Wearables Brand',
        industry: 'Healthcare & IoT',
        challenge: 'Needed real-time Bluetooth LE synchronization from wearable heart-rate monitors with continuous background data streaming.',
        solution: 'Engineered native Swift and Kotlin apps with custom background BLE central managers and offline SQLite encryption.',
        results: [
          '4.9-star average rating across 15,000+ reviews',
          'Zero connection drops during 24-hour continuous monitoring',
          'Featured by Apple on the App Store Health category'
        ],
        stack: ['SwiftUI', 'Kotlin Compose', 'CoreBluetooth', 'Fastlane', 'Firebase']
      },
      {
        title: 'On-Demand Delivery & Logistics Mobile App',
        client: 'Middle Eastern Delivery Fleet',
        industry: 'Logistics & Quick Commerce',
        challenge: 'Drivers experienced frequent app freezes in low-connectivity zones and inaccurate real-time GPS location updates.',
        solution: 'Built high-efficiency native apps with background geofencing, optimized vector map rendering, and local transaction queues.',
        results: [
          'Sub-second real-time GPS tracking latency',
          'Handled 250,000+ daily successful deliveries'
        ],
        stack: ['Kotlin', 'Jetpack Compose', 'Swift', 'Google Maps SDK', 'Room DB']
      }
    ],
    faqs: [
      {
        q: 'When should we choose Native development over Cross-Platform (Flutter/React Native)?',
        a: 'Native development (Swift/Kotlin) is ideal when your application relies heavily on deep hardware access (BLE, complex camera processing, audio DSP), 120Hz graphics animations, platform-specific widgets, or when platform performance cannot be compromised.'
      },
      {
        q: 'Do you handle the complete App Store and Google Play Store submission process?',
        a: 'Yes. We manage certificates, provisioning profiles, privacy compliance policies, screenshot assets, store metadata, and address any Apple/Google review queries until the app is live.'
      },
      {
        q: 'How do you test native apps on different device sizes and OS versions?',
        a: 'We test across real physical test devices and automated device cloud farms (Firebase Test Lab) covering different screen ratios, OS versions, and network throttling conditions.'
      },
      {
        q: 'Can your mobile developers integrate with our existing backend APIs?',
        a: 'Yes. Our developers regularly integrate with REST, GraphQL, gRPC, and WebSocket backends using OpenAPI specs, Swagger contracts, and Postman collections.'
      }
    ]
  },
  {
    slug: 'cross-platform-app-development',
    name: 'Cross Platform App Development',
    tagline: 'One Unified Codebase, Two App Stores, Zero Compromise on Feel',
    summary:
      'High-velocity cross-platform mobile development using React Native and Flutter \u2014 launch feature-complete iOS and Android applications simultaneously from a single shared codebase.',
    deliverables: [
      'React Native & Expo Cross-Platform Apps',
      'Flutter & Dart High-Performance Applications',
      'Shared Business Logic & Reusable UI Systems',
      'Over-The-Air (OTA) Instant Update Pipelines'
    ],
    seoTitle: 'Cross-Platform Mobile App Development (React Native & Flutter)',
    seoDescription:
      'Cross-platform app development with React Native and Flutter from WitQualis Technologies — launch on iOS and Android simultaneously with one codebase and native performance.',
    overview: {
      title: 'Ship Twice as Fast Without Doubling Your Engineering Team',
      subtitle: 'ENTERPRISE REACT NATIVE & FLUTTER DEVELOPMENT',
      paragraph1:
        'Building separate native teams for iOS and Android often leads to duplicated sprint efforts, mismatched feature releases, and bloated budgets. Modern cross-platform frameworks — React Native and Flutter — solve this problem elegantly.',
      paragraph2:
        'Our cross-platform engineering squads build enterprise-grade mobile products sharing a majority of the codebase across iOS and Android while maintaining near-native rendering speeds, native gesture responsiveness, and Over-The-Air (OTA) instant updates.',
      highlights: [
        'React Native (New Architecture / Hermes) and Flutter (Impeller Engine)',
        'Over-The-Air (OTA) code pushes using Expo EAS / CodePush to fix bugs instantly',
        'Unified design system components rendered with native platform parity'
      ]
    },
    features: [
      {
        title: 'React Native & Expo Development',
        badge: 'REACT NATIVE',
        desc: 'Leverage the power of React and TypeScript to build high-performance mobile apps with Hermes bytecode compilation and TurboModules.',
        deliverables: ['React Native 0.75+ Architecture', 'Expo EAS Cloud Builds', 'Hermes JIT/AOT Optimization']
      },
      {
        title: 'Flutter & Dart Mobile Engineering',
        badge: 'FLUTTER',
        desc: 'High-fidelity, hardware-accelerated UIs powered by Google’s Skia/Impeller graphics engine with 60–120 FPS consistency.',
        deliverables: ['Flutter 3.x Multi-Platform Engine', 'Bloc / Riverpod State Management', 'Custom Flutter Canvas Widgets']
      },
      {
        title: 'Native Module Bridges & SDKs',
        badge: 'DEEP INTEGRATION',
        desc: 'Custom Swift and Kotlin native bridges when your app needs specialized native third-party SDKs, biometrics, or camera hardware.',
        deliverables: ['Custom JSI / TurboModule Bridges', 'Payment Gateway Integrations', 'Push Notification Services']
      },
      {
        title: 'Over-The-Air (OTA) Live Updates',
        badge: 'INSTANT DEPLOY',
        desc: 'Deploy critical bug fixes and UI updates directly to user devices in seconds without waiting days for App Store review cycles.',
        deliverables: ['Expo EAS Update / CodePush', 'Zero-Downtime Hotfix Rollouts', 'Staged Rollout Telemetry']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Framework Evaluation & Architecture',
        desc: 'We assess whether React Native or Flutter is the optimal fit for your tech stack, team background, and performance needs.',
        duration: 'Sprint 0 (Week 1)'
      },
      {
        step: '02',
        title: 'Shared Component & State Architecture',
        desc: 'Setting up clean state management (Zustand/Bloc), navigation trees, and universal design tokens across iOS and Android.',
        duration: 'Sprint 1 (Weeks 2-3)'
      },
      {
        step: '03',
        title: 'Feature Sprints & Native Bridge Hooks',
        desc: 'Building core screens, connecting APIs, configuring biometric auth, payments, and push notifications.',
        duration: 'Sprint 2 (Weeks 4-6)'
      },
      {
        step: '04',
        title: 'Cross-Device QA & Frame Profiling',
        desc: 'Automated testing across both iOS and Android device farms to ensure zero frame drops and identical visual parity.',
        duration: 'Sprint 3 (Weeks 7-8)'
      },
      {
        step: '05',
        title: 'Dual Store Launch & OTA Pipelines',
        desc: 'Simultaneous deployment to Apple App Store and Google Play Store with configured Over-The-Air live update pipelines.',
        duration: 'Launch & Continuous Sprints'
      }
    ],
    technologies: [
      {
        category: 'Frameworks & Engines',
        items: ['React Native', 'Expo EAS', 'Flutter', 'Dart', 'Hermes Engine', 'Impeller Graphics']
      },
      {
        category: 'State & Navigation',
        items: ['Zustand', 'Redux Toolkit', 'React Navigation', 'Flutter Bloc', 'Riverpod', 'React Query']
      },
      {
        category: 'Native SDKs & Tools',
        items: ['Stripe SDK', 'Firebase Suite', 'OneSignal', 'CodePush', 'Fastlane', 'Sentry Mobile']
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Test our React Native or Flutter squads in your active sprint environment during a trial sprint.'
      },
      {
        title: '50% Faster Time to Market',
        badge: 'RAPID LAUNCH',
        desc: 'One codebase means simultaneous releases on iOS and Android with single-point maintenance.'
      },
      {
        title: 'Over-The-Air (OTA) Updates',
        badge: 'INSTANT FIXES',
        desc: 'Push hotfixes directly to your users in minutes without waiting for App Store review approvals.'
      },
      {
        title: 'Cost-Effective Scaling',
        badge: 'MAXIMUM ROI',
        desc: 'Significantly reduce engineering payroll by maintaining one unified mobile team instead of two.'
      },
      {
        title: 'Near-Native 60–120 FPS Speed',
        badge: 'PERFORMANCE',
        desc: 'Hermes and Impeller engines ensure smooth scroll physics and instant gesture responsiveness.'
      },
      {
        title: 'Client Codebase Ownership',
        badge: 'IP OWNED',
        desc: 'You maintain full intellectual property rights, build scripts, signing keys, and repository ownership.'
      }
    ],
    caseStudies: [
      {
        title: 'Cross-Platform B2C E-Commerce & Marketplace',
        client: 'Omnichannel Fashion Retailer',
        industry: 'E-Commerce & Retail',
        challenge: 'Maintaining separate native iOS and Android apps led to desynchronized feature launches and double engineering costs.',
        solution: 'Built a unified React Native + Expo app with instant search, Apple Pay / Google Pay, and CodePush OTA updates.',
        results: [
          'Simultaneous iOS and Android feature releases on day one',
          '4.8-star average store rating with 500k+ active downloads'
        ],
        stack: ['React Native', 'Expo EAS', 'TypeScript', 'Stripe', 'CodePush']
      },
      {
        title: 'FinTech Investment & Crypto Wallet App',
        client: 'Global Crypto & Stocks Trading Firm',
        industry: 'FinTech & Trading',
        challenge: 'Required high-frequency candlestick charts and sub-100ms real-time price updates with native security.',
        solution: 'Engineered a Flutter application with custom Skia chart rendering and encrypted biometric wallet security.',
        results: [
          'Silky 120Hz chart rendering with zero stutter',
          'Biometric authentication completed in < 150ms',
          'Over $80M in monthly trading volume processed'
        ],
        stack: ['Flutter', 'Dart', 'Bloc', 'WebSockets', 'Biometrics SDK']
      }
    ],
    faqs: [
      {
        q: 'Should we choose React Native or Flutter for our cross-platform project?',
        a: 'If your existing team or web app is built with React/TypeScript, React Native provides maximum code and skill reusability. If you need highly customized, pixel-identical canvas graphics and complex animations, Flutter offers exceptional rendering control with its Impeller engine.'
      },
      {
        q: 'Can React Native and Flutter apps access native device features like Bluetooth or Camera?',
        a: 'Yes. Both frameworks support native bridges and TurboModules, allowing full access to Bluetooth LE, camera, push notifications, Apple Pay, FaceID, and custom native SDKs.'
      },
      {
        q: 'How does Over-The-Air (OTA) update deployment work?',
        a: 'With tools like Expo EAS Update or CodePush, JavaScript and asset changes are downloaded directly by user apps in the background, allowing you to deploy UI updates and critical bug fixes instantly without submitting to the App Store.'
      },
      {
        q: 'How do you handle animations and performance bottlenecks in cross-platform apps?',
        a: 'We use hardware-accelerated libraries like React Native Reanimated 3 (which runs animations on the native UI thread) or Flutter’s native rendering engine to support smooth, high-frame-rate performance.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

// Re-export solutions
export type SolutionChallenge = {
  title: string;
  problem: string;
  consequence: string;
  severity?: 'CRITICAL' | 'HIGH' | 'MODERATE';
  stat?: string;
};

export type SolutionOurApproach = {
  title: string;
  subtitle: string;
  desc: string;
  architecturalPoints: string[];
  badge: string;
};

export type SolutionFeature = {
  title: string;
  badge: string;
  desc: string;
  deliverables: string[];
  highlight?: string;
};

export type SolutionBenefit = {
  title: string;
  badge: string;
  desc: string;
};

export type SolutionCaseStudy = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
};

export type SolutionFAQ = {
  q: string;
  a: string;
};

export type SolutionItem = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  heroBadge?: string;
  heroStats?: { label: string; value: string }[];
  capabilities: string[];
  seoTitle: string;
  seoDescription: string;
  isAI?: boolean;
  challenges: SolutionChallenge[];
  ourSolutions: SolutionOurApproach[];
  features: SolutionFeature[];
  technologies: TechCategory[];
  caseStudies: SolutionCaseStudy[];
  benefits: SolutionBenefit[];
  faqs: SolutionFAQ[];
};

export const solutions: SolutionItem[] = [
  {
    slug: 'ai-development',
    name: 'AI Development',
    tagline: 'Production-Grade AI Features Engineered to Ship Past the Demo',
    summary:
      'End-to-end custom AI engineering — from foundation model fine-tuning and sub-50ms RAG pipelines to autonomous agent orchestration and automated guardrails that ensure deterministic, enterprise-safe outputs.',
    heroBadge: 'ENTERPRISE AI ARCHITECTURE',
    heroStats: [
      { label: 'Vector Retrieval Latency', value: '< 45ms' },
      { label: 'Trial Sprint', value: 'Available' }
    ],
    capabilities: [
      'Custom LLM Fine-Tuning (LoRA / QLoRA)',
      'High-Throughput RAG & Hybrid Vector Pipelines',
      'Autonomous Multi-Agent Systems & Tool Calling',
      'Production MLOps, Guardrails & Drift Monitoring'
    ],
    seoTitle: 'Enterprise AI Development Company | Custom LLM & RAG Systems',
    seoDescription:
      'WitQualis Technologies delivers enterprise AI development services — custom LLMs, RAG pipelines, autonomous agents, and deterministic guardrails deployed in private VPCs.',
    isAI: true,
    challenges: [
      {
        title: 'Hallucinations & Prompt Vulnerabilities',
        problem: 'Off-the-shelf generative models hallucinate facts and remain vulnerable to prompt injection attacks when fed sensitive enterprise queries.',
        consequence: 'Brand risk, customer mistrust, and legal liability in regulated environments.',
        severity: 'CRITICAL',
        stat: '67% of AI pilots stall due to output unpredictability'
      },
      {
        title: 'Data Leakage & Public Cloud Risks',
        problem: 'Sending confidential customer PII or proprietary IP to public SaaS API endpoints violates SOC2, HIPAA, and GDPR standards.',
        consequence: 'Compliance fines, regulatory scrutiny, and competitor access to proprietary data.',
        severity: 'CRITICAL',
        stat: '100% of regulated enterprises require on-prem / private VPC isolation'
      },
      {
        title: 'Runaway Token Costs & Sluggish Latency',
        problem: 'Unoptimized LLM chains incur exponential API bills while suffering from 4–10 second response times during concurrent traffic.',
        consequence: 'Negative unit economics and degraded end-user experience.',
        severity: 'HIGH',
        stat: 'Up to 5x higher inference costs without semantic caching & quantization'
      },
      {
        title: 'Zero MLOps Governance & Model Drift',
        problem: 'AI prototypes built without continuous telemetry fail in production when input data distributions inevitably shift.',
        consequence: 'Silent degradation of accuracy and high maintenance overhead.',
        severity: 'HIGH',
        stat: '85% of AI models degrade in accuracy within 6 months without automated evals'
      }
    ],
    ourSolutions: [
      {
        title: 'Deterministic Guardrail Engine',
        subtitle: 'ZERO-HALLUCINATION ENFORCEMENT',
        desc: 'We engineer multi-tier validation layers (NeMo Guardrails, Guardrails AI, and custom semantic validators) that filter prompts and verify outputs before reaching the client.',
        architecturalPoints: [
          'Pre-inference prompt sanitization & PII redaction filters',
          'Post-inference citation validation against retrieved source documents',
          'Real-time confidence scoring with fallback to deterministic rule engines'
        ],
        badge: 'SAFETY PRACTICES'
      },
      {
        title: 'Private VPC & On-Premise LLM Isolation',
        subtitle: 'AIR-GAPPED COMPLIANCE',
        desc: 'All embeddings, vector indexes, and model weights are deployed entirely within your private AWS, Azure, GCP VPC or on-premise hardware clusters.',
        architecturalPoints: [
          'Zero data sharing with external third-party model providers',
          'Fine-tuned open-source models (Llama 3.3, Mistral, DeepSeek-R1) self-hosted on vLLM',
          'End-to-end AES-256 encryption at rest and TLS 1.3 in transit'
        ],
        badge: 'ZERO LEAKAGE'
      },
      {
        title: 'Sub-50ms Hybrid RAG & Semantic Caching',
        subtitle: 'HIGH-CONCURRENCY ARCHITECTURE',
        desc: 'We combine dense vector search with sparse keyword search (BM25) and Redis semantic caching to deliver sub-50ms response times while cutting API token costs by up to 70%.',
        architecturalPoints: [
          'Distributed vector index sharding supporting 100M+ embeddings'
        ],
        badge: 'SUB-50MS LATENCY'
      },
      {
        title: 'Automated MLOps & Continuous Evaluation',
        subtitle: 'CONTINUOUS ACCURACY MONITORING',
        desc: 'Automated CI/CD pipelines for continuous evaluation, latency tracking, automated dataset curation, and scheduled parameter fine-tuning.',
        architecturalPoints: [
          'Automated golden dataset evaluation with RAGAS and TruLens',
          'Real-time token drift alerts and anomaly detection in Datadog/Grafana',
          'Canary model rollouts with automated rollback on accuracy dips'
        ],
        badge: 'CONTINUOUS MLOPS'
      }
    ],
    features: [
      {
        title: 'Custom LLM Fine-Tuning & Distillation',
        badge: 'LORA & QLORA',
        desc: 'Fine-tune open-weight state-of-the-art models on your domain terminology, internal contracts, or product catalogs for superior accuracy at 1/10th the inference cost.',
        deliverables: ['Domain-specific LoRA adapters', 'Quantized GGUF/AWQ model weights', 'Automated synthetic dataset generators'],
        highlight: 'Domain-tailored models that outperform general commercial LLMs'
      },
      {
        title: 'Enterprise RAG & Hybrid Vector Search',
        badge: 'SUB-SECOND RETRIEVAL',
        desc: 'Connect your live enterprise data (Postgres, Snowflake, Notion, Jira, SharePoint) to an intelligent vector knowledge mesh with real-time sync.',
        deliverables: ['Automated ETL document chunking pipelines', 'Hybrid dense/sparse vector index', 'Context-aware conversational memory'],
        highlight: 'Zero hallucinations with verifiable line-item source citations'
      },
      {
        title: 'Autonomous Multi-Agent Workflows',
        badge: 'AGENTIC AI',
        desc: 'Deploy collaborating AI agents capable of multi-step reasoning, external API execution, database querying, and deterministic business logic execution.',
        deliverables: ['LangGraph / CrewAI multi-agent state machines', 'Automated tool & function calling contracts', 'Human-in-the-loop escalation gates'],
        highlight: 'Replace repetitive 15-minute human workflows with 3-second autonomous execution'
      },
      {
        title: 'Production Guardrails & Telemetry',
        badge: 'ENTERPRISE GOVERNANCE',
        desc: 'Full-spectrum observability monitoring token consumption, per-request latency, prompt cost attribution, and jailbreak detection in real time.',
        deliverables: ['NeMo Guardrail validation policies', 'Langfuse / Arize Phoenix observability', 'Automated red-teaming test suites'],
        highlight: 'Full audit trails meeting SOC2 Type II compliance'
      }
    ],
    technologies: [
      {
        category: 'Foundation & Open-Source LLMs',
        items: ['Llama 3.3 (70B/8B)', 'Claude 3.5 Sonnet', 'GPT-4o / GPT-4o-mini', 'DeepSeek-R1', 'Mistral Large 2', 'Qwen 2.5 72B']
      },
      {
        category: 'Vector Databases & Indexing',
        items: ['Qdrant', 'Pinecone', 'pgvector (PostgreSQL)', 'Milvus', 'Weaviate', 'ChromaDB']
      },
      {
        category: 'Frameworks & Orchestration',
        items: ['LangChain', 'LlamaIndex', 'LangGraph', 'DSPy', 'CrewAI', 'Semantic Kernel']
      },
      {
        category: 'Inference Engines & MLOps',
        items: ['vLLM', 'Triton Inference Server', 'Ollama', 'MLflow', 'RAGAS', 'Langfuse', 'Docker / EKS']
      }
    ],
    caseStudies: [
      {
        title: 'Automated Vehicle Appraisal Computer Vision & AI Pipeline',
        client: 'CarDekho / GirnarSoft',
        industry: 'Automotive & Mobility Intelligence',
        challenge: 'Manual vehicle inspection and damage assessment took 45+ minutes per car with subjective pricing inconsistencies across 2,000+ inspection hubs.',
        solution: 'Engineered an edge-deployed computer vision and multimodal AI pipeline evaluating 40+ inspection points in under 3 seconds with automated pricing matrix synchronization.',
        results: [
          'Sub-3s end-to-end cloud inference time under peak load'
        ],
        stack: ['PyTorch', 'YOLOv8', 'FastAPI', 'PostgreSQL', 'AWS GPU EKS'],
        metrics: [
          { label: 'Inference Speed', value: '< 3s' }
        ]
      },
      {
        title: 'Private Enterprise RAG & Autonomous Document Extraction',
        client: 'Sutherland Global Solutions',
        industry: 'Enterprise BPO & SaaS',
        challenge: 'Thousands of complex unstructured multi-page PDFs, contracts, and claims were processed manually, causing 48-hour SLA backlogs and human transcription errors.',
        solution: 'Implemented a private VPC hybrid RAG architecture with Qdrant vector indexing and specialized fine-tuned LLM agents for automated document extraction and CRM ingestion.',
        results: [
          '< 85ms vector query latency across 5M+ indexed pages',
          'Zero data leakage via dedicated private AWS VPC'
        ],
        stack: ['Llama 3.3', 'Qdrant', 'LangGraph', 'AWS PrivateLink', 'Python FastAPI'],
        metrics: [
          { label: 'Vector Query Latency', value: '< 85ms' },
        ]
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Evaluate our dedicated AI engineers in your live sprint for 15 days before making any long-term commitment.'
      },
      {
        title: 'Client Code & Model Ownership',
        badge: 'FULL IP RIGHTS',
        desc: 'All training pipelines, fine-tuned weights, prompts, and architecture code belong exclusively to your company.'
      },
      {
        title: 'Private Data Boundary',
        badge: 'PRIVATE VPC',
        desc: 'Your proprietary training data and customer inputs never leave your secure cloud perimeter.'
      },
      {
        title: 'Sub-50ms Latency SLAs',
        badge: 'REAL-TIME SPEED',
        desc: 'Engineered with quantized vLLM inference and semantic caching for instant, human-like interaction.'
      },
      {
        title: 'Pre-Vetted Senior AI Engineers',
        badge: 'VETTED TALENT',
        desc: 'Senior AI architects with production deployment experience across enterprise and high-growth SaaS environments.'
      },
      {
        title: 'Overlapping Working Hours',
        badge: '4-8 HOURS DAILY',
        desc: 'Seamless daily standups, instant Slack communication, and direct sprint pairing with US, UK, and EU timezones.'
      }
    ],
    faqs: [
      {
        q: 'How do you prevent hallucinations in production AI applications?',
        a: 'We use a combination of deterministic guardrail layers (NeMo Guardrails), strict context grounding with hybrid RAG (BM25 + Dense vector search), source citation validators, and automated temperature/confidence thresholds that trigger deterministic fallbacks when certainty is low.'
      },
      {
        q: 'Can we run AI models entirely inside our own private cloud or on-premise infrastructure?',
        a: 'We specialize in deploying open-source models (such as Llama 3.3, Mistral, and DeepSeek) inside your private AWS/Azure/GCP VPC or on-premise Kubernetes clusters using vLLM and Triton Inference Server, so your data stays inside your own boundary.'
      },
      {
        q: 'What is the difference between fine-tuning and Retrieval-Augmented Generation (RAG)?',
        a: 'RAG retrieves relevant external documents at query time and passes them into the model’s context window — ideal for dynamic knowledge bases that change frequently. Fine-tuning adjusts the model’s underlying weights to master specific formats, jargon, or reasoning styles. We often combine both for optimal accuracy.'
      },
      {
        q: 'How fast can a dedicated AI squad be onboarded to our project?',
        a: 'We can match and deploy a pre-vetted AI engineering squad to your repository and communication channels within 48 hours, with a trial sprint available before a longer commitment.'
      },
      {
        q: 'How do you optimize LLM inference costs for high-volume applications?',
        a: 'We implement semantic caching (serving identical or similar queries from cache without LLM calls), model routing (routing easy queries to lightweight quantized models like Llama-3-8B and complex tasks to frontier models), and 4-bit/8-bit AWQ quantization.'
      }
    ]
  },
  {
    slug: 'generative-ai-solutions',
    name: 'Generative AI Solutions',
    tagline: 'Enterprise Generative AI Grounded in Your Proprietary Data',
    summary:
      'Custom enterprise copilots, document intelligence engines, and automated generative workflows engineered to eliminate manual knowledge work while strictly respecting enterprise data sovereignty.',
    heroBadge: 'ENTERPRISE GENERATIVE AI',
    heroStats: [
      { label: 'Document Ingestion Speed', value: '10K pgs/min' },
      { label: 'Trial Period', value: '15 Days' }
    ],
    capabilities: [
      'Enterprise Copilots & Conversational Knowledge Agents',
      'Intelligent Document Processing (IDP) & OCR Pipelines',
      'Automated Content & Code Generation Engines',
      'Multi-Modal Voice, Vision & Document Workflows'
    ],
    seoTitle: 'Generative AI Development Services | Enterprise Copilots & IDP',
    seoDescription:
      'Build custom Generative AI solutions with WitQualis Technologies — enterprise copilots, document intelligence, and multi-modal generative agents grounded in your private data.',
    isAI: true,
    challenges: [
      {
        title: 'Generic Chatbots Failing Complex Workflows',
        problem: 'Generic commercial chat interfaces lack domain context, struggle with tabular data, and cannot trigger backend transactional workflows.',
        consequence: 'Low employee adoption, workflow friction, and zero measurable productivity gains.',
        severity: 'HIGH',
        stat: '72% of generic enterprise chatbot rollouts fail to achieve daily active usage'
      },
      {
        title: 'Unstructured Data Chaos',
        problem: 'Critical business intelligence is trapped in PDFs, legacy scanned invoices, audio recordings, and messy spreadsheets that resist simple search.',
        consequence: 'Thousands of hours lost to manual data re-entry and verification.',
        severity: 'CRITICAL',
        stat: '80% of enterprise data is unstructured and unreachable by conventional search'
      },
      {
        title: 'Copyright & Compliance Ambiguity',
        problem: 'Using unverified public models introduces intellectual property contamination and non-compliance with data privacy mandates.',
        consequence: 'Legal exposure, licensing audits, and data governance failures.',
        severity: 'HIGH',
        stat: '43% of CISOs block public GenAI tools over IP and privacy risks'
      },
      {
        title: 'Brittle Prompt Chains in Production',
        problem: 'Hardcoded prompt chains break whenever user inputs vary slightly or model provider API updates alter output formatting.',
        consequence: 'Silent application crashes, JSON parsing errors, and production downtime.',
        severity: 'MODERATE',
        stat: 'Production failure rates exceed 30% for naive prompt-wrapped applications'
      }
    ],
    ourSolutions: [
      {
        title: 'Domain-Grounded Enterprise Copilots',
        subtitle: 'CONTEXT-AWARE ASSISTANTS',
        desc: 'Custom conversational assistants that integrate directly into your company’s internal tools (Slack, Teams, Salesforce, Notion) with role-based access control.',
        architecturalPoints: [
          'Strict RBAC indexing ensuring users only query data they have clearance to view',
          'Direct backend tool execution (creating tickets, generating quotes, triggering webhooks)',
          'Interactive UI cards with streaming token responses and source references'
        ],
        badge: 'ROLE-AWARE COPILOT'
      },
      {
        title: 'Multi-Modal Document Intelligence (IDP)',
        subtitle: 'TABULAR & VISUAL OCR EXTRACTORS',
        desc: 'Parse complex multi-page financial tables, scanned invoices, legal deeds, and medical charts with visual layout-aware LLMs.',
        architecturalPoints: [
          'Table-structure preservation with Markdown and JSON schema exports',
          'Confidence scoring per extracted field with automated human-in-the-loop escalation',
          'Batch processing capability handling 10,000+ pages per minute'
        ],
        badge: 'LAYOUT-AWARE OCR'
      },
      {
        title: 'Structured Output Enforcement & JSON Schema Contracts',
        subtitle: 'ZERO-FAIL API INTEGRATION',
        desc: 'We enforce strict schema compilation (Pydantic / Instructor / Outlines) to produce valid JSON responses for downstream backend systems.',
        architecturalPoints: [
          'Deterministic JSON/Pydantic object parsing with zero regex guesswork',
          'Automated retry and self-healing schemas on unexpected outputs',
          'Integration with enterprise ERP, CRM, and SQL database pipelines'
        ],
        badge: 'SCHEMA VALIDATION'
      },
      {
        title: 'Private Data Governance & Redaction',
        subtitle: 'PII & SECRETS SANITIZATION',
        desc: 'Automated on-the-fly identification and masking of sensitive credentials, SSNs, credit cards, and customer PII before model ingestion.',
        architecturalPoints: [
          'Local regex and NER-based automated PII token masking',
          'Comprehensive audit logging of every query and generated completion',
          'SOC2, HIPAA, and GDPR compliant storage architecture'
        ],
        badge: 'DATA PRIVACY'
      }
    ],
    features: [
      {
        title: 'Custom Enterprise Knowledge Copilots',
        badge: 'INTERNAL COPILOTS',
        desc: 'Empower legal, sales, and support squads with interactive conversational copilots trained on your company knowledge base, manuals, and ticket history.',
        deliverables: ['Custom Slack / Teams bot integrations', 'RBAC knowledge-base vector stores', 'Clickable verified source citations'],
      },
      {
        title: 'Intelligent Document Processing (IDP)',
        badge: 'DOC INTELLIGENCE',
        desc: 'Extract, classify, and reconcile high-volume financial invoices, contracts, and medical forms into structured relational databases.',
        deliverables: ['Multi-modal visual LLM extraction pipelines', 'Confidence-rated field validators', 'Human-in-the-loop review dashboards'],
      },
      {
        title: 'Automated Content & Code Generation',
        badge: 'WORKFLOW ACCELERATION',
        desc: 'Automate repetitive copywriting, personalized email outreach, SEO meta-generation, and automated code migration scripts.',
        deliverables: ['Brand tone-of-voice alignment filters', 'Automated multi-variant copy generators', 'Code syntax & lint validators'],
        highlight: 'Scale digital marketing and engineering output by 5x'
      },
      {
        title: 'Multi-Modal Voice & Vision AI Agents',
        badge: 'VOICE & VISION',
        desc: 'Build real-time voice assistants and computer vision analysis workflows using low-latency WebRTC audio streaming and image analysis.',
        deliverables: ['Sub-300ms voice-to-voice streaming pipelines', 'Visual defect inspection agents', 'Multi-lingual real-time translation'],
        highlight: 'Real-time conversational voice latency under 350ms'
      }
    ],
    technologies: [
      {
        category: 'Generative Models',
        items: ['Claude 3.5 Sonnet', 'GPT-4o & GPT-4o-mini', 'Llama 3.3', 'Mistral Large', 'DeepSeek-V3 / R1', 'Whisper V3']
      },
      {
        category: 'Document & OCR Intelligence',
        items: ['Unstructured.io', 'LlamaParse', 'Tesseract OCR', 'AWS Textract', 'Docling', 'Nougat']
      },
      {
        category: 'Structured Output & Guardrails',
        items: ['Instructor', 'Outlines', 'Pydantic', 'NeMo Guardrails', 'Braintrust', 'LangSmith']
      },
      {
        category: 'Vector & Storage Layer',
        items: ['Pinecone', 'Qdrant', 'PostgreSQL (pgvector)', 'AWS S3', 'Redis', 'Weaviate']
      }
    ],
    caseStudies: [
      {
        title: 'Automated Legal Contract Review & Risk Scoring Copilot',
        client: 'Tier-1 Commercial Real Estate Firm',
        industry: 'Legal & Real Estate',
        challenge: 'Legal teams spent 6+ hours reviewing each 80-page commercial lease contract for non-standard indemnification clauses and liability caps.',
        solution: 'Engineered a private Generative AI contract analysis engine that parses clauses, highlights deviations against standard playbooks, and suggests revised redlines.',
        results: [
          'Zero document leakage via private enterprise Azure OpenAI instance'
        ],
        stack: ['Claude 3.5 Sonnet', 'LlamaIndex', 'FastAPI', 'Next.js', 'Azure Private Link'],
        metrics: [
        ]
      },
      {
        title: 'High-Throughput E-Commerce Personalization & Copy Engine',
        client: 'Bakingo & FlowerAura',
        industry: 'High-Concurrency E-Commerce',
        challenge: 'Needed dynamic, hyper-personalized product descriptions and occasion-based greeting card generators for 20,000+ catalog items across multiple regional languages.',
        solution: 'Built an automated batch generative pipeline with strict brand voice guidelines and multi-lingual generation delivering real-time suggestions.',
        results: [
          'Over 1.2M personalized product messages generated in Q4',
          'Sub-120ms streaming generation latency'
        ],
        stack: ['GPT-4o-mini', 'Redis Cache', 'Node.js', 'AWS Lambda', 'PostgreSQL'],
        metrics: [
          { label: 'Messages Generated', value: '1.2M+' },
          { label: 'Stream Latency', value: '< 120ms' }
        ]
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Test our generative AI developers in your sprint for 15 days before making a long-term commitment.'
      },
      {
        title: 'Private Data Boundary',
        badge: 'DATA ISOLATION',
        desc: 'Enterprise data is never used to train public foundation models or shared across client boundaries.'
      },
      {
        title: 'Deterministic Structured JSON',
        badge: 'ZERO CRASHES',
        desc: 'Strict Pydantic schema validation supports reliable backend API integrations.'
      },
      {
        title: 'Rapid Production Rollout',
        badge: '4-8 WEEKS MVP',
        desc: 'Go from feasibility audit to live production copilot in weeks with our battle-tested RAG starter kits.'
      },
      {
        title: 'Direct Senior Architect Access',
        badge: 'TOP TALENT',
        desc: 'Collaborate directly with senior AI systems architects via dedicated Slack channels and sprint standups.'
      },
      {
        title: 'Measurable Enterprise ROI',
        badge: 'EFFICIENCY',
        desc: 'Every generative solution is engineered with concrete SLA and labor-hour savings metrics.'
      }
    ],
    faqs: [
      {
        q: 'Will our proprietary enterprise data be used to train external models?',
        a: 'No, absolutely not. We use zero-retention enterprise API endpoints or self-host open-weights models inside your private cloud VPC. Your data is never stored, retained, or utilized for training third-party models.'
      },
      {
        q: 'How do you handle complex document layouts like tables and multi-column PDFs?',
        a: 'We implement vision-augmented document chunkers (LlamaParse, Docling) that retain structural bounding boxes, table rows, and headers as structured Markdown before embedding into vector stores.'
      },
      {
        q: 'Can custom copilots trigger actions inside our CRM or ERP system?',
        a: 'Yes. We build function-calling tools that allow the assistant to validate inputs and securely trigger authenticated REST/GraphQL endpoints in systems like Salesforce, SAP, Jira, or custom databases.'
      },
      {
        q: 'What is the pricing model for building a custom Generative AI solution?',
        a: 'We offer flexible dedicated engineering squads (monthly retainer, with a trial sprint available) as well as milestone-based fixed-price engagements with deliverables agreed in the contract.'
      }
    ]
  },
  {
    slug: 'ai-consulting',
    name: 'AI Consulting',
    tagline: 'Strategic AI Roadmaps Grounded in Feasibility, ROI, and Technical Reality',
    summary:
      'Cut through the AI hype with rigorous use-case scoring, data readiness audits, build-vs-buy evaluations, and concrete architectural blueprints before committing expensive engineering capital.',
    heroBadge: 'AI STRATEGY & FEASIBILITY',
    heroStats: [
      { label: 'Feasibility Audit Duration', value: '2 Weeks' },
      { label: 'Unviable Project Savings', value: 'Up to $250k' },
      { label: 'Trial Sprint', value: 'Available' }
    ],
    capabilities: [
      'AI Use-Case Discovery & ROI Scoring',
      'Data Infrastructure & Governance Audits',
      'Build vs. Buy vs. Fine-Tune Architecture Analysis',
      'AI Security, Compliance & Adoption Roadmaps'
    ],
    seoTitle: 'Enterprise AI Consulting Services | Feasibility & Strategy Roadmaps',
    seoDescription:
      'Strategic AI consulting from WitQualis Technologies — data audits, use-case prioritization, build-vs-buy recommendations, and risk mitigation roadmaps.',
    isAI: true,
    challenges: [
      {
        title: 'Unfocused AI Initiatives & Budget Drain',
        problem: 'Executive teams greenlight generic AI experiments without clear unit economics, resulting in stalled pilots and wasted capital.',
        consequence: 'Executive fatigue, depleted engineering budgets, and zero operational return.',
        severity: 'CRITICAL',
        stat: '80% of enterprise AI proofs-of-concept never make it to production'
      },
      {
        title: 'Dirty & Fragmented Data Assets',
        problem: 'Organizations attempt to build advanced AI on top of messy, unindexed data lakes riddled with duplicates, missing values, and broken schemas.',
        consequence: 'Low model accuracy, garbage-in-garbage-out outputs, and severe pipeline delays.',
        severity: 'CRITICAL',
        stat: 'Data pipeline preparation accounts for 80% of project delays when not audited early'
      },
      {
        title: 'Misleading "Build vs Buy" Decisions',
        problem: 'Teams build commoditized features from scratch or purchase overpriced proprietary vendor lock-in SaaS tools.',
        consequence: 'Crippling multi-year subscription costs or massive technical debt.',
        severity: 'HIGH',
        stat: 'Over 60% of commercial AI SaaS licenses suffer from underutilization'
      },
      {
        title: 'Compliance & Regulatory Paralysis',
        problem: 'Legal and security teams stall AI initiatives because risks regarding PII, HIPAA, copyright, and EU AI Act regulations remain unaddressed.',
        consequence: 'Competitors capture market share while internal squads remain locked in legal review.',
        severity: 'MODERATE',
        stat: 'Regulatory uncertainty delays 54% of enterprise AI deployments'
      }
    ],
    ourSolutions: [
      {
        title: '2-Week Technical Feasibility & ROI Sprint',
        subtitle: 'DATA-DRIVEN USE-CASE SCORING',
        desc: 'We evaluate your top proposed AI initiatives against data readiness, technical complexity, infrastructure costs, and business ROI impact.',
        architecturalPoints: [
          'Scoring matrix prioritizing high-impact, low-complexity use cases for rapid ROI',
          'Cost-per-query financial projections modeling GPU and token costs at scale',
          'Identification of high-risk bottlenecks before code is written'
        ],
        badge: 'FEASIBILITY AUDIT'
      },
      {
        title: 'Data Readiness & Governance Assessment',
        subtitle: 'DIRTY DATA DIAGNOSTICS',
        desc: 'A comprehensive audit of your databases, documents, and event streams to prepare clean ETL and embedding ingestion pipelines.',
        architecturalPoints: [
          'Schema validation and document quality scoring across repositories',
          'PII masking and role-based access control recommendations',
          'Vector database architecture planning for low-latency retrieval'
        ],
        badge: 'DATA READINESS'
      },
      {
        title: 'Objective Build vs Buy vs Fine-Tune Analysis',
        subtitle: 'UNBIASED ARCHITECTURAL ADVICE',
        desc: 'We provide vendor-neutral recommendations on when to use off-the-shelf APIs, when to fine-tune open-weights models, and when to build custom RAG pipelines.',
        architecturalPoints: [
          'TCO (Total Cost of Ownership) comparison over 1, 3, and 5 years',
          'Vendor lock-in risk mitigation and migration fallback strategies',
          'Open-source vs proprietary model trade-off analysis'
        ],
        badge: 'TCO OPTIMIZATION'
      },
      {
        title: 'Actionable 90-Day Implementation Roadmap',
        subtitle: 'SPRINT-BY-SPRINT BLUEPRINT',
        desc: 'A detailed architecture specification with sprint timelines, resource requirements, tech stack choices, and concrete MVP milestones.',
        architecturalPoints: [
          'Detailed system architecture diagram and component dependencies',
          'Security & compliance checklist (SOC2, HIPAA, EU AI Act)',
          'Engineering team sizing and hiring/staff augmentation plan'
        ],
        badge: '90-DAY BLUEPRINT'
      }
    ],
    features: [
      {
        title: 'AI Use-Case Discovery & Prioritization',
        badge: 'DISCOVERY',
        desc: 'Interview stakeholders across business units, map operational friction points, and identify high-value opportunities for automation and intelligence.',
        deliverables: ['Use-case prioritization matrix', 'Business impact & ROI model', 'Executive summary presentation'],
        highlight: 'Identify 3-5 high-ROI projects ready for immediate pilot execution'
      },
      {
        title: 'Data Architecture & Infrastructure Audit',
        badge: 'DATA AUDIT',
        desc: 'Inspect existing databases, ETL pipelines, and document repositories for data hygiene, labeling status, and vector indexing compatibility.',
        deliverables: ['Data hygiene & completeness report', 'ETL pipeline recommendations', 'Security & access control gap analysis'],
        highlight: 'Prevent months of wasted engineering effort on unstructured dirty data'
      },
      {
        title: 'Model Selection & Infrastructure Sizing',
        badge: 'TECH ARCHITECTURE',
        desc: 'Benchmark candidate foundation models, evaluate GPU compute requirements, and design cost-efficient cloud hosting architectures.',
        deliverables: ['Model benchmarking benchmark report', 'GPU/Token cost projection calculator', 'Cloud infrastructure Terraform specs'],
      },
      {
        title: 'AI Governance & Compliance Framework',
        badge: 'COMPLIANCE',
        desc: 'Establish safety guardrails, human-in-the-loop policies, audit logging standards, and data retention rules adhering to enterprise standards.',
        deliverables: ['AI safety and ethical guidelines playbook', 'Regulatory compliance audit checklist', 'Red-teaming test protocols'],
        highlight: 'Gain security and legal sign-off in half the usual review time'
      }
    ],
    technologies: [
      {
        category: 'Consulting & Benchmarking Tools',
        items: ['RAGAS', 'TruLens', 'LangSmith', 'Promptfoo', 'Weights & Biases', 'Arize AI']
      },
      {
        category: 'Target Architectures Evaluated',
        items: ['Private AWS EKS / SageMaker', 'Azure AI Services', 'GCP Vertex AI', 'On-Premise NVIDIA DGX', 'vLLM Clusters']
      },
      {
        category: 'Vector & Data Infrastructure',
        items: ['Qdrant', 'Pinecone', 'pgvector', 'Snowflake', 'Databricks', 'Apache Kafka']
      },
      {
        category: 'Compliance & Governance',
        items: ['SOC2 Type II', 'HIPAA', 'GDPR', 'ISO 42001 (AI Management)', 'NIST AI RMF']
      }
    ],
    caseStudies: [
      {
        title: 'Enterprise FinTech AI Adoption Roadmap & Architecture',
        client: 'Global Multi-Currency Payment Platform',
        industry: 'FinTech & Banking',
        challenge: 'Leadership wanted to deploy customer-facing AI agents for fraud advisory but faced severe regulatory pushback regarding data isolation and transaction integrity.',
        solution: 'Delivered a 3-week comprehensive AI feasibility audit, private VPC architecture design, and deterministic fallback protocol that satisfied institutional compliance officers.',
        results: [
          'Full legal and regulatory compliance approval achieved in 14 days',
          'Clear 90-day engineering MVP roadmap delivered to development squads'
        ],
        stack: ['Llama 3.3', 'Qdrant', 'FastAPI', 'AWS PrivateLink', 'SOC2 Controls'],
        metrics: [
          { label: 'Approval Speed', value: '14 Days' },
        ]
      },
      {
        title: 'Supply Chain & Manufacturing Predictive AI Strategy',
        client: 'Heavy Industrial Equipment Manufacturer',
        industry: 'Manufacturing & Supply Chain',
        challenge: 'Struggled with an expensive legacy vendor contract offering minimal customization and inaccurate predictive maintenance alerts.',
        solution: 'Conducted a build-vs-buy audit recommending a custom edge-deployed time-series ML architecture on AWS IoT, saving millions in licensing fees.',
        results: [
          'Saved over $420k in annual vendor licensing fees',
          'Delivered end-to-end architecture and matched engineering squads'
        ],
        stack: ['AWS IoT Core', 'TimescaleDB', 'Python', 'XGBoost', 'Docker'],
        metrics: [
          { label: 'Payback Period', value: '< 4 Mo' }
        ]
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Engage our Principal AI Consultants during a trial sprint to evaluate roadmap quality and depth.'
      },
      {
        title: 'Vendor-Neutral Advice',
        badge: 'UNBIASED',
        desc: 'We are engineers, not software resellers. Our recommendations focus strictly on your ROI and autonomy.'
      },
      {
        title: 'Avoid Costly Dead Ends',
        badge: 'SAVE CAPITAL',
        desc: 'Identify unviable AI initiatives early before committing months of developer salaries to dead-end projects.'
      },
      {
        title: 'Direct Access to Principal Architects',
        badge: 'TOP LEADERSHIP',
        desc: 'Work directly with seasoned engineering leaders who have built and scaled systems handling millions of users.'
      },
      {
        title: 'Fast-Track Implementation Squads',
        badge: 'EXECUTION READY',
        desc: 'Seamlessly transition from consulting roadmap to matched development squads within 48 hours.'
      },
      {
        title: 'Security & Compliance First',
        badge: 'AUDIT READY',
        desc: 'Every recommendation is designed to pass rigorous SOC2, HIPAA, and GDPR audit reviews.'
      }
    ],
    faqs: [
      {
        q: 'What is the deliverable of an AI consulting engagement?',
        a: 'You receive a complete Executive & Technical Deliverable Package including: Prioritized Use-Case Matrix with ROI models, Data Hygiene Audit Report, System Architecture Blueprint, Model Selection & Infrastructure Sizing Specs, and a 90-Day Sprint Implementation Schedule.'
      },
      {
        q: 'How long does an initial AI feasibility audit take?',
        a: 'A standard comprehensive feasibility and data readiness audit takes between 2 to 3 weeks depending on organizational size and the number of candidate use cases.'
      },
      {
        q: 'Can you provide the development team to build the solution after consulting?',
        a: 'Yes. WitQualis provides pre-vetted senior engineering squads (full-stack, AI, MLOps) that can immediately execute the approved roadmap with zero handoff friction.'
      },
      {
        q: 'Do you help with AI compliance and regulatory requirements like EU AI Act or HIPAA?',
        a: 'Yes. We audit architectures for data retention, explainability, PII masking, and access boundaries to ensure strict alignment with international regulatory frameworks.'
      }
    ]
  },
  {
    slug: 'machine-learning-development',
    name: 'Machine Learning Development',
    tagline: 'Predictive, Classification & Computer Vision Systems Built for Real-World Accuracy',
    summary:
      'Custom machine learning models trained on your proprietary data, optimized for sub-second inference, and evaluated against the exact business metrics that drive revenue and operational efficiency.',
    heroBadge: 'PREDICTIVE & APPLIED ML',
    heroStats: [
      { label: 'Model Inference Latency', value: '< 25ms' },
      { label: 'Sprint Trial', value: '15 Days' }
    ],
    capabilities: [
      'Supervised & Unsupervised Predictive Modeling',
      'Computer Vision (Object Detection, Segmentation, OCR)',
      'High-Throughput Recommendation & Personalization Engines',
      'Production MLOps, Model Serving & Automated Retraining'
    ],
    seoTitle: 'Custom Machine Learning Development Services | Predictive & Vision ML',
    seoDescription:
      'Custom machine learning development services from WitQualis Technologies — predictive algorithms, computer vision pipelines, recommendation engines, and MLOps.',
    isAI: true,
    challenges: [
      {
        title: 'Offline Model Accuracy vs Production Reality',
        problem: 'Models achieving high accuracy in Jupyter notebooks fail when exposed to real-world edge cases, noise, and latency constraints.',
        consequence: 'False positives, customer friction, and loss of business trust in automated decisions.',
        severity: 'CRITICAL',
        stat: '87% of data science models never make it past exploratory notebooks'
      },
      {
        title: 'Silent Data & Concept Drift',
        problem: 'Customer behaviors, market trends, and seasonal patterns shift over time, quietly degrading model predictive performance without warning.',
        consequence: 'Inaccurate demand forecasts, financial losses, and missed revenue opportunities.',
        severity: 'HIGH',
        stat: 'Unmonitored predictive models lose up to 35% accuracy within 6 months'
      },
      {
        title: 'Inference Latency Bottlenecks',
        problem: 'Heavy ML architectures take hundreds of milliseconds to process inputs, causing checkout lags and real-time transaction failures.',
        consequence: 'Cart abandonment and high infrastructure server costs.',
        severity: 'HIGH',
        stat: 'Every 100ms of extra latency causes up to 1% drop in digital conversions'
      },
      {
        title: 'Lack of Automated Retraining Pipelines',
        problem: 'Updating models requires manual data collection, manual feature extraction, and high-friction engineering deployments.',
        consequence: 'Stale models, high developer maintenance burden, and slow iteration cycles.',
        severity: 'MODERATE',
        stat: 'Manual retraining workflows delay new model updates by 4-8 weeks on average'
      }
    ],
    ourSolutions: [
      {
        title: 'Production-Engineered ML Pipelines',
        subtitle: 'BEYOND JUPYTER NOTEBOOKS',
        desc: 'We build modular, test-driven ML codebases utilizing PyTorch, Scikit-Learn, and ONNX Runtime engineered for sub-25ms inference and high throughput.',
        architecturalPoints: [
          'Model quantization (INT8 / FP16) and TensorRT compilation for lightning inference',
          'Feature stores (Feast / Redis) ensuring train-serve feature parity',
          'Automated unit testing for data schemas and pipeline transformations'
        ],
        badge: 'SUB-25MS INFERENCE'
      },
      {
        title: 'Continuous Drift Detection & Telemetry',
        subtitle: 'PROACTIVE ACCURACY MONITORING',
        desc: 'Real-time statistical drift tracking (Evidently AI / Great Expectations) that flags data anomalies and concept shifts before they harm revenue.',
        architecturalPoints: [
          'Automated Kolmogorov-Smirnov and PSI data distribution tests',
          'Real-time alerts sent to Slack/PagerDuty when prediction confidence dips',
          'Shadow-mode model deployment for zero-risk production validation'
        ],
        badge: 'DRIFT MONITORING'
      },
      {
        title: 'Automated Continuous Retraining & MLOps',
        subtitle: 'SELF-HEALING ML LIFECYCLE',
        desc: 'End-to-end MLOps CI/CD pipelines (Kubeflow / MLflow / GitHub Actions) that automatically ingest new labeled data, trigger model retraining, and run canary rollouts.',
        architecturalPoints: [
          'Scheduled and event-driven retraining pipelines triggered by drift signals',
          'Model registry with versioned artifacts, hyperparameter logs, and audit trails',
          'Automated canary releases with instant rollback on validation failure'
        ],
        badge: 'AUTOMATED MLOPS'
      },
      {
        title: 'Computer Vision & Real-Time Edge Deployment',
        subtitle: 'HARDWARE-ACCELERATED VISION',
        desc: 'High-speed object detection, semantic segmentation, and optical character recognition deployed on cloud GPUs or edge devices (NVIDIA Jetson / CoreML).',
        architecturalPoints: [
          'Custom trained YOLO, SAM, and ResNet architectures',
          'Sub-30ms video frame processing and anomaly detection',
          'Edge optimization with ONNX and TensorRT runtimes'
        ],
        badge: 'EDGE VISION'
      }
    ],
    features: [
      {
        title: 'Predictive Analytics & Forecasting',
        badge: 'PREDICTIVE ML',
        desc: 'Time-series forecasting, churn prediction, demand modeling, and lifetime value algorithms tailored to your business datasets.',
        deliverables: ['Custom XGBoost / LightGBM / Prophet models', 'Automated feature engineering pipelines', 'REST API inference endpoints'],
      },
      {
        title: 'Computer Vision & Visual Inspection',
        badge: 'VISION AI',
        desc: 'Automate visual quality assurance, defect detection, inventory scanning, and facial/biometric identification systems.',
        deliverables: ['Custom YOLO / PyTorch object detectors', 'Edge deployment binaries (ONNX / TensorRT)', 'Real-time video streaming processors'],
      },
      {
        title: 'Personalization & Recommendation Engines',
        badge: 'RECOMMENDATIONS',
        desc: 'Multi-armed bandit and collaborative filtering systems that deliver personalized product, content, and pricing recommendations in real time.',
        deliverables: ['Real-time two-tower recommendation models', 'Redis low-latency feature cache', 'A/B testing rollout frameworks'],
      },
      {
        title: 'Production MLOps & Model Serving',
        badge: 'MLOPS',
        desc: 'Industrial-grade model deployment infrastructure with auto-scaling GPU nodes, latency metrics, and automated retraining workflows.',
        deliverables: ['Triton / TorchServe Kubernetes clusters', 'MLflow model registry & tracking', 'Automated CI/CD retraining workflows'],
        highlight: 'Zero-downtime model deployments with automated canary tests'
      }
    ],
    technologies: [
      {
        category: 'ML Frameworks & Libraries',
        items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'Hugging Face Transformers']
      },
      {
        category: 'Computer Vision & Edge',
        items: ['OpenCV', 'YOLOv8 / YOLOv11', 'TensorRT', 'ONNX Runtime', 'CoreML', 'TorchVision']
      },
      {
        category: 'MLOps & Experiment Tracking',
        items: ['MLflow', 'Kubeflow', 'Evidently AI', 'Great Expectations', 'DVC', 'Weights & Biases']
      },
      {
        category: 'Serving & Cloud Infrastructure',
        items: ['Triton Inference Server', 'TorchServe', 'AWS SageMaker', 'Docker', 'Kubernetes EKS', 'FastAPI']
      }
    ],
    caseStudies: [
      {
        title: 'Automated Computer Vision Vehicle Condition Matrix',
        client: 'CarDekho / GirnarSoft',
        industry: 'Automotive & Mobility Intelligence',
        challenge: 'Inspecting physical automobile panels for dents, scratches, and repainting required skilled mechanics and 45 minutes per vehicle.',
        solution: 'Trained a multi-head convolutional neural network and YOLO detector capable of identifying 40+ panel defects in under 3 seconds from mobile photos.',
        results: [
          'Deployed across 2,000+ inspection locations nationwide'
        ],
        stack: ['PyTorch', 'YOLOv8', 'TensorRT', 'FastAPI', 'AWS EKS'],
        metrics: [
          { label: 'Hubs Deployed', value: '2,000+' }
        ]
      },
      {
        title: 'Real-Time Dynamic Route Optimization & Predictive Dispatch',
        client: 'Bakingo & FlowerAura Fleet',
        industry: 'Logistics & Quick Commerce',
        challenge: 'Peak festive seasons created delivery dispatch bottlenecks and traffic routing delays across 15+ metropolitan distribution hubs.',
        solution: 'Engineered a machine learning predictive dispatch algorithm analyzing live traffic, driver velocity, and order baking schedules.',
        results: [
          'Sub-80ms API response time under 50k concurrent requests/hr'
        ],
        stack: ['Python', 'XGBoost', 'Redis', 'PostgreSQL', 'AWS Lambda'],
        metrics: [
          { label: 'API Response', value: '< 80ms' }
        ]
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Test our matched ML engineers in your sprint for 15 days before making a long-term commitment.'
      },
      {
        title: 'Client Proprietary IP Rights',
        badge: 'FULL OWNERSHIP',
        desc: 'Trained weights, feature pipelines, training scripts, and models created during the engagement belong to your organization under the signed contract.'
      },
      {
        title: 'Sub-25ms Inference Speeds',
        badge: 'LOW LATENCY',
        desc: 'Quantized and optimized runtimes ensure lightning-fast prediction delivery for user-facing applications.'
      },
      {
        title: 'Automated Drift Protection',
        badge: 'ACCURACY SLA',
        desc: 'Continuous telemetry ensures your models maintain superior accuracy without silent degradation.'
      },
      {
        title: 'Senior ML Engineers',
        badge: 'VETTED BENCH',
        desc: 'Pre-vetted data scientists and ML engineers with proven track records across complex enterprise projects.'
      },
      {
        title: 'Seamless Timezone Sync',
        badge: 'DAILY COLLABORATION',
        desc: 'Direct daily overlap with US, UK, and European business hours for continuous agile sprint execution.'
      }
    ],
    faqs: [
      {
        q: 'How do you handle small or imbalanced training datasets?',
        a: 'We use proven techniques including synthetic data generation (SMOTE / GANs / Diffusion), transfer learning from robust pre-trained foundation models, data augmentation, and focal loss functions to achieve high accuracy even with sparse training samples.'
      },
      {
        q: 'How are machine learning models deployed into production?',
        a: 'We package models as optimized Docker microservices using FastAPI, Triton Inference Server, or ONNX Runtime deployed on auto-scaling Kubernetes clusters with automated health checks, latency logging, and canary rollout capabilities.'
      },
      {
        q: 'How do you prevent machine learning models from drifting over time?',
        a: 'We implement real-time statistical drift monitoring (Evidently AI) that tracks input feature distributions and prediction confidence scores. When drift crosses predefined thresholds, automated retraining pipelines are triggered.'
      },
      {
        q: 'Can ML models be run on edge devices without internet access?',
        a: 'Yes. We specialize in compiling models via TensorRT, CoreML, and TFLite for deployment directly on edge hardware (NVIDIA Jetson, iOS devices, Android, Raspberry Pi) for zero-latency offline inference.'
      }
    ]
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions & Migration',
    tagline: 'Cost-Accountable, High-Availability Cloud Architectures Engineered on AWS & Azure',
    summary:
      'Enterprise cloud architecture, zero-downtime migration practices, automated Infrastructure-as-Code (Terraform), and continuous FinOps cost governance designed for high concurrency.',
    heroBadge: 'CLOUD INFRASTRUCTURE & FINOPS',
    heroStats: [
      { label: 'Uptime Monitoring', value: 'SLA-Backed' },
      { label: 'Migration Downtime', value: '0 Minutes' },
      { label: 'Trial Sprint', value: 'Available' }
    ],
    capabilities: [
      'Multi-Cloud Architecture & Migration (AWS, Azure, GCP)',
      'Infrastructure as Code (Terraform & Pulumi)',
      'Kubernetes Orchestration & Containerization (EKS/AKS)',
      'FinOps Cloud Cost Optimization & 24/7 SRE Monitoring'
    ],
    seoTitle: 'Enterprise Cloud Solutions & Migration Services | AWS & Azure',
    seoDescription:
      'Cloud solutions and migration services from WitQualis Technologies — AWS & Azure architecture, Kubernetes, Terraform IaC, and FinOps cost optimization.',
    isAI: false,
    challenges: [
      {
        title: 'Exploding Cloud Invoices & Unused Resources',
        problem: 'Over-provisioned VMs, unattached storage volumes, and inefficient auto-scaling policies cause monthly cloud bills to spiral out of control.',
        consequence: 'Wasted engineering budgets and unsustainable gross margins.',
        severity: 'CRITICAL',
        stat: '32% of all enterprise cloud spend is completely wasted on unoptimized resources'
      },
      {
        title: 'High Migration Downtime Risks',
        problem: 'Migrating legacy databases and monolithic applications often causes unexpected outages, data corruption, and business disruption.',
        consequence: 'Customer churn, SLA breach penalties, and severe revenue loss during cutover.',
        severity: 'CRITICAL',
        stat: '73% of cloud migration projects exceed their projected downtime windows'
      },
      {
        title: 'Single Points of Failure & Outages',
        problem: 'Single-region infrastructure setups fail when localized cloud provider disruptions occur, causing catastrophic application downtime.',
        consequence: 'Brand damage, lost transactions, and violation of contractual uptime SLAs.',
        severity: 'HIGH',
        stat: 'Unplanned cloud outages cost enterprises an average of $300,000 per hour'
      },
      {
        title: 'Security Misconfigurations & Compliance Gaps',
        problem: 'Open S3 buckets, exposed ports, and unencrypted databases leave organizations vulnerable to automated internet scrapers and compliance audits.',
        consequence: 'Data breaches, ransom demands, and SOC2 / HIPAA compliance revocation.',
        severity: 'HIGH',
        stat: '82% of cloud data breaches are caused by simple infrastructure misconfigurations'
      }
    ],
    ourSolutions: [
      {
        title: 'Zero-Downtime Strangler Migration',
        subtitle: 'PLANNED CLOUD CUTOVER',
        desc: 'We execute phased, incremental cloud migrations using Change Data Capture (CDC) replication and API gateway traffic splitting to minimize downtime.',
        architecturalPoints: [
          'Bi-directional real-time database replication during migration phase',
          'Automated instant rollback mechanisms if latency spikes occur',
          'Zero data loss verified against cryptographic hash checks'
        ],
        badge: 'ZERO DOWNTIME'
      },
      {
        title: 'Automated Infrastructure as Code (IaC)',
        subtitle: 'REPEATABLE TERRAFORM STACKS',
        desc: 'Every server, VPC, database, and Kubernetes cluster is defined entirely in versioned Terraform or Pulumi code, eliminating manual configuration drift.',
        architecturalPoints: [
          '1-click staging and production environment spin-up in minutes',
          'Automated security scanning with tfsec and Checkov before deployment',
          'Complete disaster recovery provisioning in secondary cloud regions'
        ],
        badge: 'TERRAFORM IAC'
      },
      {
        title: 'FinOps Cloud Cost Optimization',
        subtitle: 'CLOUD COST OPTIMIZATION',
        desc: 'We audit and right-size your workloads, implement Spot/Savings Plan commitments, and configure smart auto-scaling to slash monthly cloud expenditure.',
        architecturalPoints: [
          'Automated Karpenter / KEDA auto-scaling based on real-time request volume',
          'Automated cleanup of idle resources and orphaned snapshots'
        ],
        badge: 'FINOPS OPTIMIZATION'
      },
      {
        title: 'Multi-Region Kubernetes & 24/7 SRE',
        subtitle: 'HIGH AVAILABILITY ARCHITECTURE',
        desc: 'Resilient Kubernetes (EKS / AKS) clusters with multi-AZ redundancy, automated canary deployments, and 24/7 SRE incident response.',
        architecturalPoints: [
          'Istio service mesh with mutual TLS and circuit-breaking protection',
          'Prometheus, Grafana, and Datadog real-time APM telemetry'
        ],
        badge: 'SLA-BACKED UPTIME'
      }
    ],
    features: [
      {
        title: 'Cloud Migration & Modernization',
        badge: 'MIGRATION',
        desc: 'Migrate on-premise servers and legacy monoliths to AWS, Azure, or GCP with zero downtime and automated database synchronization.',
        deliverables: ['Cloud migration roadmap & schema maps', 'Automated CDC replication pipelines', 'Cutover playbooks & verification suites'],
      },
      {
        title: 'Infrastructure as Code & DevOps CI/CD',
        badge: 'DEVOPS & IAC',
        desc: 'Modernize deployment pipelines with Terraform, GitHub Actions, and GitOps workflows (ArgoCD) for automated push-to-deploy environments.',
        deliverables: ['Production-ready Terraform modules', 'Automated multi-stage GitHub Actions workflows', 'ArgoCD GitOps deployment engine'],
        highlight: 'Spin up identical isolated staging environments in under 5 minutes'
      },
      {
        title: 'Kubernetes & Container Orchestration',
        badge: 'KUBERNETES EKS',
        desc: 'Architect enterprise-grade EKS and AKS clusters with automated pod scaling, Helm packaging, and zero-downtime rolling upgrades.',
        deliverables: ['Production EKS / AKS cluster architectures', 'Helm charts & secret management (Vault)', 'Automated cert-manager & ingress routing'],
        highlight: 'Handle 10x traffic spikes with automated Karpenter node autoscaling'
      },
      {
        title: 'FinOps Cost Optimization & Cloud Audits',
        badge: 'FINOPS',
        desc: 'Comprehensive infrastructure audits identifying waste, negotiating Reserved Instances, and implementing right-sizing policies.',
        deliverables: ['Cloud spend audit report with line-item savings', 'Automated right-sizing & auto-shutdown scripts', 'Real-time Datadog cost attribution dashboard'],
      }
    ],
    technologies: [
      {
        category: 'Cloud Providers',
        items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Cloudflare']
      },
      {
        category: 'Infrastructure as Code & CI/CD',
        items: ['Terraform', 'Pulumi', 'Ansible', 'GitHub Actions', 'ArgoCD', 'GitLab CI']
      },
      {
        category: 'Containers & Orchestration',
        items: ['Kubernetes (EKS / AKS / GKE)', 'Docker', 'Helm', 'Istio Service Mesh', 'Karpenter']
      },
      {
        category: 'Monitoring, Security & FinOps',
        items: ['Datadog', 'Prometheus & Grafana', 'HashiCorp Vault', 'AWS Security Hub', 'Sentry', 'Infracost']
      }
    ],
    caseStudies: [
      {
        title: 'High-Concurrency E-Commerce Cloud Modernization & Auto-Scaling',
        client: 'Bakingo & FlowerAura Fleet',
        industry: 'E-Commerce & High-Concurrency Retail',
        challenge: 'Peak festive flash sales generated 50,000+ orders per hour, causing database locking and catastrophic server crashes on unoptimized infrastructure.',
        solution: 'Re-architected the entire cloud platform onto AWS EKS with Karpenter autoscaling, multi-AZ RDS Aurora PostgreSQL, and Redis caching.',
        results: [
          'Sub-80ms API response time under 50k concurrent requests/hr',
        ],
        stack: ['AWS EKS', 'Aurora PostgreSQL', 'Redis', 'Terraform', 'Datadog'],
        metrics: [
          { label: 'Peak Capacity', value: '50k req/hr' }
        ]
      },
      {
        title: 'Enterprise Fintech Multi-Region Cloud Migration',
        client: 'Global Multi-Currency Payment Platform',
        industry: 'FinTech & Banking',
        challenge: 'Needed to migrate from fragmented legacy hosting to a compliant multi-region AWS setup with strict SOC2 Type II compliance and zero data loss.',
        solution: 'Engineered an automated Terraform stack deploying immutable VPCs with AWS KMS encryption, automated failover, and strict IAM governance.',
        results: [
          'Zero minutes of unplanned cutover downtime',
          'Automated DR recovery with RTO < 5 minutes and RPO < 10 seconds'
        ],
        stack: ['AWS', 'Terraform', 'Kubernetes', 'KMS', 'Vault', 'Prometheus'],
        metrics: [
          { label: 'Cutover Downtime', value: '0 Min' },
          { label: 'Disaster Recovery RTO', value: '< 5 Min' }
        ]
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Evaluate matched DevOps and Cloud Architects in your live sprints during a trial sprint.'
      },
      {
        title: 'SLA-Backed Uptime Monitoring',
        badge: 'HIGH AVAILABILITY',
        desc: 'Engineered with multi-AZ failovers, automated self-healing pods, and proactive health checks.'
      },
      {
        title: 'Cloud Cost Optimization Review',
        badge: 'FINOPS ROI',
        desc: 'Our FinOps audits pay for themselves by slashing wasted cloud infrastructure expenditure.'
      },
      {
        title: 'Client Terraform Code Ownership',
        badge: 'NO LOCK-IN',
        desc: 'All IaC repositories, secrets configurations, and architecture designs belong entirely to you.'
      },
      {
        title: 'Certified Cloud Architects',
        badge: 'AWS & AZURE',
        desc: 'Senior architects holding AWS Certified Solutions Architect Professional and CKA certifications.'
      },
      {
        title: '24/7 Incident Response SLA',
        badge: 'ALWAYS ON',
        desc: 'Round-the-clock SRE monitoring and incident response to safeguard mission-critical platforms.'
      }
    ],
    faqs: [
      {
        q: 'How do you ensure zero downtime during a cloud migration?',
        a: 'We use the Strangler Fig pattern combined with real-time Change Data Capture (CDC) replication. Both old and new systems run simultaneously, with traffic shifted incrementally via DNS/API gateway until the new cloud environment is fully validated.'
      },
      {
        q: 'Can you help reduce our existing AWS or Azure monthly bills?',
        a: 'Yes. Our FinOps cloud audits analyze resource utilization, storage tiers, unattached EBS volumes, and instance sizing. We typically achieve 35% to 50% immediate savings without degrading performance.'
      },
      {
        q: 'Do you provide ongoing 24/7 cloud support after project completion?',
        a: 'We offer dedicated SRE retainer packages including real-time monitoring, automated patch management, and security vulnerability scanning.'
      },
      {
        q: 'How fast can a DevOps / Cloud engineer join our project?',
        a: 'We can match and onboard certified Senior DevOps / Cloud engineers into your sprint within 48 hours, with a trial sprint available before a longer commitment.'
      }
    ]
  },
  {
    slug: 'enterprise-software',
    name: 'Enterprise Software',
    tagline: 'Custom ERPs, CRMs & Internal Platforms Your Organization Won’t Route Around',
    summary:
      'Custom full-stack enterprise software engineering — scalable multi-tenant architectures, legacy modernization, and unified data integration portals engineered for high adoption and zero operational friction.',
    heroBadge: 'MISSION-CRITICAL ENTERPRISE APPS',
    heroStats: [
      { label: 'User-Centered Design', value: 'Included' },
      { label: 'API Transaction Concurrency', value: '100K/sec' },
      { label: 'Trial Period', value: '15 Days' }
    ],
    capabilities: [
      'Custom ERP, CRM & Supply Chain Platforms',
      'Legacy Monolith Modernization (PHP/Java/.NET to Next.js/Go)',
      'Enterprise System Integration (SAP, Salesforce, Oracle)',
      'Role-Based Access Control (RBAC), SSO & SOC2 Security'
    ],
    seoTitle: 'Enterprise Software Development Company | Custom ERP & CRM Solutions',
    seoDescription:
      'Enterprise software development from WitQualis Technologies — custom ERPs, internal tools, legacy modernization, and high-concurrency business platforms.',
    isAI: false,
    challenges: [
      {
        title: 'Bloated Off-the-Shelf ERPs Failing Business Workflows',
        problem: 'Commercial off-the-shelf software forces rigid processes onto unique business workflows, causing employees to abandon tools and revert to spreadsheets.',
        consequence: 'Wasted licensing fees, data silos, and lost operational productivity.',
        severity: 'CRITICAL',
        stat: '65% of enterprise SaaS implementations fail due to poor employee adoption'
      },
      {
        title: 'Aging Legacy Monoliths Cracking Under Load',
        problem: 'Legacy systems built years ago cannot scale, lack modern APIs, and require expensive specialized developers to maintain.',
        consequence: 'High maintenance costs, inability to ship new features, and severe technical debt.',
        severity: 'CRITICAL',
        stat: 'Maintaining legacy software consumes up to 70% of enterprise IT budgets'
      },
      {
        title: 'Fragmented Data Silos & Manual Re-Entry',
        problem: 'Customer data, orders, and financial records are trapped in disparate, disconnected systems requiring error-prone manual reconciliation.',
        consequence: 'Slow fulfillment cycles, reporting inaccuracies, and customer dissatisfaction.',
        severity: 'HIGH',
        stat: 'Enterprise employees waste 4.5 hours weekly on redundant manual data entry'
      },
      {
        title: 'Security & Role-Based Access Control Risks',
        problem: 'Internal tools with loose permission models expose sensitive customer and financial data to unauthorized employees.',
        consequence: 'Insider data leaks, compliance audit failures, and security breaches.',
        severity: 'HIGH',
        stat: '60% of enterprise data breaches originate from internal privilege misconfigurations'
      }
    ],
    ourSolutions: [
      {
        title: 'Workflow-Engineered Custom Business Software',
        subtitle: 'BUILT FOR REAL ADOPTION',
        desc: 'We design and build bespoke ERP, CRM, and portal systems mapped 1:1 to your organization’s exact operational workflows for immediate employee adoption.',
        architecturalPoints: [
          'Intuitive, frictionless modern UI built in Next.js and Tailwind CSS',
          'Custom approval workflows, audit trails, and automated email/Slack alerts',
          'Responsive design accessible on desktop, tablet, and mobile field devices'
        ],
        badge: 'USER-CENTERED DESIGN'
      },
      {
        title: 'Zero-Downtime Legacy Modernization',
        subtitle: 'STRANGLER FIG MIGRATION',
        desc: 'Deconstruct legacy monoliths (PHP, Java, .NET) into high-velocity microservices and modern React/Next.js frontends with zero data loss or downtime.',
        architecturalPoints: [
          'REST & GraphQL API abstraction layers wrapping legacy databases',
          'Incremental module-by-module feature replacement without operational disruption',
        ],
        badge: 'ZERO DOWNTIME'
      },
      {
        title: 'Unified Enterprise Data Integrations',
        subtitle: 'SEAMLESS SYSTEM MESH',
        desc: 'Connect your internal software with Salesforce, SAP, Oracle, Stripe, and third-party logistics APIs via high-throughput asynchronous event queues.',
        architecturalPoints: [
          'Event-driven architecture powered by Apache Kafka and RabbitMQ',
          'Bidirectional automated synchronization with automated retry queues',
          'Real-time webhook telemetry and alerting on failed synchronizations'
        ],
        badge: 'EVENT-DRIVEN'
      },
      {
        title: 'Enterprise SSO, RBAC & SOC2 Compliance',
        subtitle: 'STRICT ACCESS GOVERNANCE',
        desc: 'Fine-grained Role-Based Access Control (RBAC), Single Sign-On (SAML / Okta / Azure AD), and immutable audit logs built into the core architecture.',
        architecturalPoints: [
          'OAuth2, OpenID Connect, and SAML 2.0 enterprise SSO integrations',
          'Granular row-level and field-level permission controls',
          'Comprehensive audit logging tracking every data view and modification'
        ],
        badge: 'ENTERPRISE RBAC'
      }
    ],
    features: [
      {
        title: 'Custom ERP & Operations Portals',
        badge: 'OPERATIONS',
        desc: 'Centralize inventory management, warehouse fulfillment, billing, and resource scheduling in a unified, high-speed web application.',
        deliverables: ['Custom Next.js operations portal', 'Automated purchase order & billing engine', 'Real-time inventory telemetry dashboard'],
      },
      {
        title: 'Enterprise CRM & Client Portals',
        badge: 'CRM & PORTALS',
        desc: 'Tailored client management portals with secure document sharing, automated billing, proposal generation, and real-time project tracking.',
        deliverables: ['Client self-service portal', 'Custom pipeline & lead management workflows', 'Secure encrypted document vaults'],
        highlight: 'Boost client satisfaction and self-service retention'
      },
      {
        title: 'Legacy Monolith Modernization',
        badge: 'MODERNIZATION',
        desc: 'Transform aging legacy backends into cloud-native microservices with modern TypeScript/Next.js frontends and automated CI/CD.',
        deliverables: ['Strangler migration plan', 'Microservice API adapters', 'Modern responsive React/Next.js frontend'],
      },
      {
        title: 'Enterprise Integrations & Webhook Hubs',
        badge: 'INTEGRATIONS',
        desc: 'Build high-throughput API gateways and event pipelines synchronizing data across SAP, Salesforce, QuickBooks, and payment processors.',
        deliverables: ['Custom REST / GraphQL / gRPC APIs', 'Kafka / RabbitMQ event pipeline', 'Webhook audit and retry engine'],
        highlight: 'Process 100,000+ API events per second with sub-50ms latency'
      }
    ],
    technologies: [
      {
        category: 'Frontend & UI Frameworks',
        items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Zustand']
      },
      {
        category: 'Backend & High-Throughput APIs',
        items: ['Node.js (NestJS)', 'Go (Golang)', 'Python (FastAPI)', 'GraphQL', 'gRPC', 'REST']
      },
      {
        category: 'Databases & Message Brokers',
        items: ['PostgreSQL', 'Redis', 'Apache Kafka', 'RabbitMQ', 'Prisma ORM', 'MongoDB']
      },
      {
        category: 'Enterprise Auth & Cloud',
        items: ['Okta SSO', 'Azure AD (Entra ID)', 'Auth0 / Clerk', 'Docker', 'AWS EKS', 'Datadog']
      }
    ],
    caseStudies: [
      {
        title: 'Global Multi-Currency Payment Ledger & Operations Portal',
        client: 'Global Payout Platform',
        industry: 'FinTech & Banking Operations',
        challenge: 'Cross-border payout reconciliation across 40+ international banking gateways suffered from high latency and manual spreadsheet reconciliation.',
        solution: 'Architected an immutable double-entry ledger with automated banking failovers, sub-second webhook processing, and an intuitive operations dashboard.',
        results: [
          'Built an immutable double-entry ledger with automated banking failovers',
          'Automated settlement routing to reduce manual reconciliation effort'
        ],
        stack: ['Next.js', 'Go (Golang)', 'PostgreSQL', 'Kafka', 'AWS EKS'],
        metrics: [
          { label: 'Ledger Architecture', value: 'Double-Entry' },
          { label: 'Manual Effort', value: 'Reduced' },
          { label: 'Cross-Border Gateways', value: '40+' }
        ]
      },
      {
        title: 'Supply Chain Fulfillment & Inventory ERP Modernization',
        client: 'National Logistics & Warehousing Group',
        industry: 'Logistics & Supply Chain',
        challenge: 'A 12-year-old on-premise desktop ERP caused 30-minute inventory sync delays and frequent warehouse fulfillment errors.',
        solution: 'Built a modern cloud-native web ERP in Next.js and NestJS with barcode scanner integration, real-time inventory locking, and route dispatch algorithms.',
        results: [
          'Real-time inventory synchronization across 18 distribution centers',
        ],
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
        metrics: [
          { label: 'Centers Synced', value: '18 Hubs' }
        ]
      }
    ],
    benefits: [
      {
        title: 'Trial Sprint Available',
        badge: 'ZERO RISK',
        desc: 'Evaluate matched enterprise full-stack developers in your live sprint during a trial sprint.'
      },
      {
        title: 'Client Code & IP Ownership',
        badge: 'FULL RIGHTS',
        desc: 'Custom source code, documentation, database schemas, and architectures created during the engagement belong to you under the signed contract.'
      },
      {
        title: 'Zero User Adoption Friction',
        badge: 'INTUITIVE UX',
        desc: 'Custom engineered around your real team workflows to eliminate shadow IT and employee resistance.'
      },
      {
        title: 'Sub-Second Page Transitions',
        badge: 'SPEED & SCALE',
        desc: 'Server-side rendered with Next.js 15 for lightning-fast responsiveness under high concurrency.'
      },
      {
        title: 'Direct Senior Engineer Access',
        badge: 'TOP TALENT',
        desc: 'Collaborate directly with matched senior developers on Slack, Linear/Jira, and daily video standups.'
      },
      {
        title: 'Enterprise Security by Default',
        badge: 'SOC2 & OIDC',
        desc: 'Strict SAML/SSO integration, role-based access control, and complete audit logging.'
      }
    ],
    faqs: [
      {
        q: 'How do you ensure enterprise users actually adopt the new custom software?',
        a: 'We involve your end-users (operations staff, managers) during the wireframing and prototyping phase, mapping the software directly to their daily pain points and eliminating unnecessary clicks to support strong team adoption.'
      },
      {
        q: 'Can custom software integrate with our existing SAP, Salesforce, or Oracle databases?',
        a: 'Yes. We build robust REST, GraphQL, and event-driven API adapters that bi-directionally synchronize with SAP, Salesforce, Oracle, QuickBooks, and proprietary SQL/NoSQL databases.'
      },
      {
        q: 'How do you handle security and compliance in custom enterprise applications?',
        a: 'We implement enterprise Single Sign-On (SAML/Okta/Azure AD), granular Role-Based Access Control (RBAC), end-to-end data encryption (AES-256 and TLS 1.3), and immutable audit logs adhering to SOC2 and GDPR requirements.'
      },
      {
        q: 'What engagement models are available for enterprise software engineering?',
        a: 'We offer dedicated full-stack engineering squads on monthly retainers (with a trial sprint available) as well as fixed-price milestone-based projects with deliverables and timelines agreed in the contract.'
      }
    ]
  }
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return solutions.find((s) => s.slug === slug);
}

