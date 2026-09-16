export type StackChallenge = {
  title: string;
  problem: string;
  consequence: string;
  severity?: 'CRITICAL' | 'HIGH' | 'MODERATE';
  stat?: string;
};

export type StackOurApproach = {
  title: string;
  subtitle: string;
  desc: string;
  architecturalPoints: string[];
  badge: string;
};

export type StackFeature = {
  title: string;
  badge: string;
  desc: string;
  deliverables: string[];
  highlight?: string;
};

export type StackCaseStudy = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
};

export type StackBenefit = {
  title: string;
  badge: string;
  desc: string;
};

export type StackFAQ = {
  q: string;
  a: string;
};

export interface StackItem {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  summary: string;
  useCases: string[];
  engagementPerks: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface EnrichedStackItem extends StackItem {
  heroBadge: string;
  heroStats: { label: string; value: string }[];
  challenges: StackChallenge[];
  ourSolutions: StackOurApproach[];
  features: StackFeature[];
  technologies: { category: string; items: string[] }[];
  caseStudies: StackCaseStudy[];
  benefits: StackBenefit[];
  faqs: StackFAQ[];
}


export interface StackCategory {
  category: string;
  stacks: StackItem[];
}

export const stacks: StackItem[] = [
  // FRONTEND
  {
    name: 'AngularJS',
    slug: 'angular-js-developers',
    category: 'Frontend',
    tagline: 'Enterprise Angular apps that survive version upgrades',
    summary: 'AngularJS and Angular developers for large, structured front-ends where a strict framework and strong typing actually pay off over time.',
    useCases: ['Enterprise dashboards and admin panels', 'Large-scale form-heavy business apps', 'Legacy AngularJS to Angular migrations', 'Component libraries shared across teams'],
    engagementPerks: ['Pre-vetted for real production experience, not just tutorials', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire AngularJS Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted AngularJS developers from WitQualis Technologies. Enterprise Angular apps that survive version upgrades.'
  },
  {
    name: 'React JS',
    slug: 'react-js-developers',
    category: 'Frontend',
    tagline: 'React front-ends built for speed, not just SPAs',
    summary: 'React developers who ship performant, accessible interfaces with clean state management, not just componentized markup.',
    useCases: ['Customer-facing web apps and dashboards', 'Design-system driven component libraries', 'Server-rendered React with Next.js', 'Front-end performance and Core Web Vitals fixes'],
    engagementPerks: ['Pre-vetted for real production experience, not just tutorials', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire React JS Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted React JS developers from WitQualis Technologies. React front-ends built for speed, not just SPAs.'
  },
  {
    name: 'Vue JS',
    slug: 'vue-js-developers',
    category: 'Frontend',
    tagline: 'Vue front-ends that stay lightweight as they grow',
    summary: 'Vue.js developers for teams who want a gentler learning curve without giving up structure as the codebase scales.',
    useCases: ['Progressive web apps and admin tools', 'Vue 2 to Vue 3 / Composition API migration', 'Reusable component libraries', 'Real-time dashboards with Vuex/Pinia'],
    engagementPerks: ['Pre-vetted for real production experience, not just tutorials', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Vue JS Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Vue JS developers from WitQualis Technologies. Vue front-ends that stay lightweight as they grow.'
  },
  // MOBILE
  {
    name: 'React Native',
    slug: 'react-native-developers',
    category: 'Mobile',
    tagline: 'One React Native codebase, native on both stores',
    summary: 'React Native developers shipping iOS and Android apps from a single codebase, without the janky bridge-heavy screens.',
    useCases: ['Cross-platform consumer apps', 'MVP-to-production mobile builds', 'Native module bridging (camera, payments, BLE)', 'App performance & startup-time optimization'],
    engagementPerks: ['App Store / Play Store launch experience, not just code', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Post-launch maintenance and crash monitoring support'],
    seoTitle: 'Hire React Native Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted React Native developers from WitQualis Technologies. One React Native codebase, native on both stores.'
  },
  {
    name: 'Android',
    slug: 'android-developers',
    category: 'Mobile',
    tagline: 'Native Android engineering for when it has to feel native',
    summary: 'Kotlin and Java Android developers for apps where platform conventions, hardware access, or performance rule out cross-platform.',
    useCases: ['Native consumer and enterprise Android apps', 'Jetpack Compose UI migrations', 'Background services, BLE, and hardware integrations', 'Play Store launch and release engineering'],
    engagementPerks: ['App Store / Play Store launch experience, not just code', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Post-launch maintenance and crash monitoring support'],
    seoTitle: 'Hire Android Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Android developers from WitQualis Technologies. Native Android engineering for when it has to feel native.'
  },
  {
    name: 'iOS',
    slug: 'ios-app-developers',
    category: 'Mobile',
    tagline: 'Swift-native iOS apps that feel like Apple built them',
    summary: 'Swift and SwiftUI developers building iOS apps that respect platform conventions, App Store review, and Apple\'s performance bar.',
    useCases: ['Native consumer and enterprise iOS apps', 'SwiftUI migrations from UIKit', 'App Store submission and compliance support', 'Hardware and framework integrations (HealthKit, ARKit, etc.)'],
    engagementPerks: ['App Store / Play Store launch experience, not just code', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Post-launch maintenance and crash monitoring support'],
    seoTitle: 'Hire iOS Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted iOS developers from WitQualis Technologies. Swift-native iOS apps that feel like Apple built them.'
  },
  // BACKEND
  {
    name: 'PHP',
    slug: 'php-web-developers',
    category: 'Backend',
    tagline: 'PHP backends built for maintainability, not just to ship',
    summary: 'Core PHP and framework-based developers for backend systems that need to be maintained by more than one person over time.',
    useCases: ['Custom web application backends', 'API development and third-party integrations', 'Legacy PHP codebase refactors', 'CMS and e-commerce backend engineering'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire PHP Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted PHP developers from WitQualis Technologies. PHP backends built for maintainability, not just to ship.'
  },
  {
    name: 'Codeigniter',
    slug: 'codeigniter-developers',
    category: 'Backend',
    tagline: 'Lightweight CodeIgniter apps without the framework bloat',
    summary: 'CodeIgniter developers for teams that want a fast, lightweight PHP MVC framework without unnecessary overhead.',
    useCases: ['Custom admin panels and internal tools', 'API backends for web and mobile apps', 'CodeIgniter version upgrades', 'Database-heavy reporting applications'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Codeigniter Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Codeigniter developers from WitQualis Technologies. Lightweight CodeIgniter apps without the framework bloat.'
  },
  {
    name: 'Laravel',
    slug: 'laravel-developers',
    category: 'Backend',
    tagline: 'Laravel backends that stay clean past the first year',
    summary: 'Laravel developers who write testable, queue-driven backends instead of controllers that do everything.',
    useCases: ['SaaS and multi-tenant application backends', 'REST and GraphQL API development', 'Queue, job, and event-driven architecture', 'Laravel version upgrades and refactors'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Laravel Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Laravel developers from WitQualis Technologies. Laravel backends that stay clean past the first year.'
  },
  {
    name: 'Magento',
    slug: 'magento-developers',
    category: 'Backend',
    tagline: 'Magento stores that stay fast past 10,000 SKUs',
    summary: 'Magento developers for e-commerce catalogs and checkouts that need to stay fast and stable as product count and traffic grow.',
    useCases: ['Custom Magento theme and module development', 'Magento 1 to Magento 2 migrations', 'Third-party payment and ERP integrations', 'Storefront performance optimization'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Magento Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Magento developers from WitQualis Technologies. Magento stores that stay fast past 10,000 SKUs.'
  },
  {
    name: '.NET',
    slug: 'asp-net-developers',
    category: 'Backend',
    tagline: 'ASP.NET systems for teams already invested in Microsoft',
    summary: '.NET developers building ASP.NET Core APIs and enterprise applications that fit cleanly into an existing Microsoft stack.',
    useCases: ['Enterprise web application backends', 'REST API development with ASP.NET Core', 'Azure-integrated .NET applications', 'Legacy .NET Framework modernization'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire .NET Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted .NET developers from WitQualis Technologies. ASP.NET systems for teams already invested in Microsoft.'
  },
  {
    name: 'Python',
    slug: 'hire-python-developers',
    category: 'Backend',
    tagline: 'Python backends and data pipelines built to run unattended',
    summary: 'Python developers for backend services, automation, and data pipelines that need to run reliably without daily babysitting.',
    useCases: ['Django and FastAPI backend development', 'Data pipeline and automation scripting', 'Third-party API and service integrations', 'Backend performance and query optimization'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Python Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Python developers from WitQualis Technologies. Python backends and data pipelines built to run unattended.'
  },
  {
    name: 'Drupal',
    slug: 'drupal-developers',
    category: 'Backend',
    tagline: 'Drupal builds for content teams who need real structure',
    summary: 'Drupal developers for content-heavy sites that need a real content model, not just pages bolted together.',
    useCases: ['Custom Drupal module and theme development', 'Drupal 7 to Drupal 9/10 migrations', 'Content architecture and taxonomy design', 'Headless Drupal with a decoupled front-end'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Drupal Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Drupal developers from WitQualis Technologies. Drupal builds for content teams who need real structure.'
  },
  {
    name: 'BigCommerce',
    slug: 'bigcommerce-developers',
    category: 'Backend',
    tagline: 'BigCommerce storefronts tuned for conversion, not just launch',
    summary: 'BigCommerce developers for custom storefronts, app integrations, and checkout flows built around your catalog, not a generic template.',
    useCases: ['Custom BigCommerce theme development', 'Stencil storefront customization', 'Third-party app and ERP integrations', 'Headless BigCommerce with a custom front-end'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire BigCommerce Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted BigCommerce developers from WitQualis Technologies. BigCommerce storefronts tuned for conversion, not just launch.'
  },
  {
    name: 'Ecommerce',
    slug: 'ecommerce-developers',
    category: 'Backend',
    tagline: 'E-commerce platforms engineered for your peak traffic day',
    summary: 'E-commerce developers across Magento, Shopify, WooCommerce and custom stacks, built to hold up on your busiest sales day, not just demo day.',
    useCases: ['Custom storefront and checkout development', 'Payment gateway and inventory integrations', 'Platform migrations (Shopify, Magento, WooCommerce)', 'Storefront performance and conversion optimization'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Ecommerce Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Ecommerce developers from WitQualis Technologies. E-commerce platforms engineered for your peak traffic day.'
  },
  {
    name: 'NodeJS',
    slug: 'node-js-developers',
    category: 'Backend',
    tagline: 'Node.js services that handle real concurrent load',
    summary: 'Node.js developers building event-driven APIs and services designed around your actual concurrency and throughput needs.',
    useCases: ['REST and GraphQL API development', 'Real-time apps with WebSockets', 'Microservices and event-driven architecture', 'API performance and load optimization'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire NodeJS Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted NodeJS developers from WitQualis Technologies. Node.js services that handle real concurrent load.'
  },
  {
    name: 'Joomla',
    slug: 'joomla-developers',
    category: 'Backend',
    tagline: 'Joomla sites customized past the default template',
    summary: 'Joomla developers for custom extensions, templates, and content structures beyond what the default install offers.',
    useCases: ['Custom Joomla extension and template development', 'Joomla version upgrades and migrations', 'Content structure and menu architecture', 'Security hardening and performance tuning'],
    engagementPerks: ['Pre-vetted for system design, not just syntax', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire Joomla Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Joomla developers from WitQualis Technologies. Joomla sites customized past the default template.'
  },
  // FULL-STACK
  {
    name: 'MEAN',
    slug: 'mean-stack-developers',
    category: 'Full-Stack',
    tagline: 'MEAN stack teams that own front-to-back on one language',
    summary: 'MongoDB, Express, Angular, and Node.js developers delivering full-stack JavaScript applications from one coherent team.',
    useCases: ['Full-stack SPA development', 'Real-time dashboards and admin panels', 'REST API design with MongoDB schemas', 'End-to-end feature ownership, front to back'],
    engagementPerks: ['End-to-end ownership from schema to shipped UI', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire MEAN Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted MEAN developers from WitQualis Technologies. MEAN stack teams that own front-to-back on one language.'
  },
  {
    name: 'MERN Stack',
    slug: 'mern-stack-developers',
    category: 'Full-Stack',
    tagline: 'MERN teams that ship features, not just endpoints',
    summary: 'MongoDB, Express, React, and Node.js developers who own a feature end to end, from schema design to the shipped UI.',
    useCases: ['Full-stack web application development', 'React front-end with Node/Express APIs', 'MongoDB schema design and query optimization', 'MVP-to-production full-stack builds'],
    engagementPerks: ['End-to-end ownership from schema to shipped UI', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Flexible scaling — add or roll off developers as scope shifts'],
    seoTitle: 'Hire MERN Stack Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted MERN Stack developers from WitQualis Technologies. MERN teams that ship features, not just endpoints.'
  },
  // DATA & CLOUD
  {
    name: 'Power BI',
    slug: 'power-bi-consultants',
    category: 'Data & Cloud',
    tagline: 'Power BI dashboards people actually check every morning',
    summary: 'Power BI consultants building dashboards and data models tied to the metrics your team already tracks, not vanity charts.',
    useCases: ['Custom Power BI dashboard development', 'Data modeling and DAX optimization', 'Data warehouse to Power BI pipelines', 'Embedded analytics for internal tools'],
    engagementPerks: ['Pre-vetted for production data & infra experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Cost-accountable delivery, not just feature delivery'],
    seoTitle: 'Hire Power BI Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Power BI developers from WitQualis Technologies. Power BI dashboards people actually check every morning.'
  },
  {
    name: 'SQL',
    slug: 'sql-developers',
    category: 'Data & Cloud',
    tagline: 'SQL performance tuning for queries that shouldn\'t be slow',
    summary: 'SQL developers for schema design, query optimization, and reporting logic across SQL Server, PostgreSQL, and MySQL.',
    useCases: ['Database schema design and normalization', 'Query and stored-procedure optimization', 'Reporting and ETL logic', 'Database migration and version upgrades'],
    engagementPerks: ['Pre-vetted for production data & infra experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Cost-accountable delivery, not just feature delivery'],
    seoTitle: 'Hire SQL Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted SQL developers from WitQualis Technologies. SQL performance tuning for queries that shouldn\'t be slow.'
  },
  {
    name: 'Database',
    slug: 'database-developers',
    category: 'Data & Cloud',
    tagline: 'Database architecture that scales before it has to',
    summary: 'Database developers and administrators designing schemas and scaling strategies before your data volume forces a rewrite.',
    useCases: ['Relational and NoSQL schema design', 'Database performance tuning and indexing', 'Data migration between platforms', 'Backup, replication, and scaling strategy'],
    engagementPerks: ['Pre-vetted for production data & infra experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Cost-accountable delivery, not just feature delivery'],
    seoTitle: 'Hire Database Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Database developers from WitQualis Technologies. Database architecture that scales before it has to.'
  },
  {
    name: 'Azure',
    slug: 'azure-developers',
    category: 'Data & Cloud',
    tagline: 'Azure infrastructure with cost visibility from day one',
    summary: 'Azure developers handling cloud architecture, migration, and DevOps pipelines with cost monitoring built in from the first deployment.',
    useCases: ['Azure cloud architecture and migration', 'CI/CD pipeline setup on Azure DevOps', 'Infrastructure as code with ARM/Terraform', 'Azure cost optimization and monitoring'],
    engagementPerks: ['Pre-vetted for production data & infra experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Cost-accountable delivery, not just feature delivery'],
    seoTitle: 'Hire Azure Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Azure developers from WitQualis Technologies. Azure infrastructure with cost visibility from day one.'
  },
  {
    name: 'GCP (Google Cloud)',
    slug: 'gcp-developers',
    category: 'Data & Cloud',
    tagline: 'Google Cloud Platform architectures built for scale and AI workloads',
    summary: 'GCP engineers specializing in BigQuery, Kubernetes Engine (GKE), Vertex AI, and enterprise Google Cloud infrastructure.',
    useCases: ['GCP cloud migration and multi-cloud setup', 'BigQuery data warehouses and streaming pipelines', 'Vertex AI model deployment and MLOps', 'Kubernetes Engine (GKE) autoscaling'],
    engagementPerks: ['Pre-vetted for production GCP certifications & experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Zero cloud lock-in architecture'],
    seoTitle: 'Hire GCP Developers | Google Cloud Engineers | WitQualis',
    seoDescription: 'Hire pre-vetted GCP developers and Google Cloud engineers from WitQualis. Vertex AI, BigQuery, and GKE architectures.'
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity-experts',
    category: 'Data & Cloud',
    tagline: 'Zero-trust security and continuous compliance for modern stacks',
    summary: 'Cybersecurity engineers delivering vulnerability assessments, SOC2/HIPAA compliance engineering, DevSecOps pipelines, and penetration testing.',
    useCases: ['SOC2, ISO 27001, and HIPAA compliance readiness', 'Automated DevSecOps pipeline integration', 'Cloud security posture management (CSPM)', 'Penetration testing and code security audits'],
    engagementPerks: ['Certified information security specialists (CISSP/CEH)', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Comprehensive audit reporting and remediations'],
    seoTitle: 'Hire Cybersecurity Experts & DevSecOps Engineers | WitQualis',
    seoDescription: 'Hire pre-vetted cybersecurity experts and DevSecOps engineers from WitQualis Technologies. Zero-trust security and compliance.'
  },
  {
    name: 'Data Analytics',
    slug: 'data-analytics-developers',
    category: 'Data & Cloud',
    tagline: 'Real-time analytics pipelines and executive decision intelligence',
    summary: 'Data analytics engineers building clickstream analytics, data lakes, dbt transformation models, and real-time executive dashboards.',
    useCases: ['Real-time streaming analytics with Kafka & Snowflake', 'dbt transformation models and automated ETL/ELT', 'Customer 360 data pipelines and telemetry', 'Executive KPI dashboards and self-serve BI'],
    engagementPerks: ['Pre-vetted for production data pipelines', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Scalable analytics without cloud waste'],
    seoTitle: 'Hire Data Analytics Developers | Data Engineers | WitQualis',
    seoDescription: 'Hire pre-vetted data analytics engineers and data specialists from WitQualis Technologies. Real-time pipelines and BI dashboards.'
  },
  {
    name: 'AI Driven',
    slug: 'hire-ai-developers',
    category: 'AI Technology',
    tagline: 'AI engineers who ship features past the demo stage',
    summary: 'AI and machine learning developers building LLM integrations, RAG pipelines, and production AI features grounded in your own data.',
    useCases: ['LLM integration and RAG pipeline development', 'Custom AI feature productionization', 'Model fine-tuning and evaluation', 'AI workflow automation and agent development'],
    engagementPerks: ['Pre-vetted for production AI & infra experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Cost-accountable delivery, not just feature delivery'],
    seoTitle: 'Hire AI Driven Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted AI Driven developers from WitQualis Technologies. AI engineers who ship features past the demo stage.'
  },
  {
    name: 'AI / ML',
    slug: 'ai-ml-developers',
    category: 'AI Technology',
    tagline: 'Machine learning algorithms and predictive models engineered for scale',
    summary: 'Senior AI/ML engineers delivering custom computer vision models, recommendation engines, PyTorch/TensorFlow pipelines, and MLOps.',
    useCases: ['Predictive ML model design & training', 'Computer vision and NLP pipeline development', 'Real-time inference microservices with FastAPI', 'MLOps automated retraining & monitoring'],
    engagementPerks: ['Pre-vetted for production mathematical & ML rigor', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Full model weights and intellectual property handover'],
    seoTitle: 'Hire AI / ML Developers | Machine Learning Engineers | WitQualis',
    seoDescription: 'Hire pre-vetted AI/ML developers from WitQualis Technologies. Deep learning, computer vision, and NLP engineering.'
  },
  {
    name: 'Generative AI & LLMs',
    slug: 'gen-ai-developers',
    category: 'AI Technology',
    tagline: 'Enterprise autonomous agents, LangChain workflows, and custom RAG',
    summary: 'Generative AI architects deploying multi-agent systems, structured JSON function calling, vector embeddings, and enterprise LLMs.',
    useCases: ['Autonomous AI agents and workflow automation', 'Enterprise RAG over proprietary vector databases', 'Fine-tuning open-source models (Llama, Mistral)', 'Prompt engineering and automated evaluation harnesses'],
    engagementPerks: ['Pre-vetted for cutting-edge GenAI architectures', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Production reliability with hallucination guardrails'],
    seoTitle: 'Hire Generative AI Developers | LLM Engineers | WitQualis',
    seoDescription: 'Hire pre-vetted Generative AI developers and LLM engineers from WitQualis Technologies. LangChain, LlamaIndex, and RAG.'
  },
  {
    name: 'Flutter',
    slug: 'flutter-developers',
    category: 'Mobile',
    tagline: 'Beautiful, natively compiled mobile and desktop apps from a single codebase',
    summary: 'Senior Flutter and Dart developers delivering 60fps animations, custom rendering engines, and multi-platform applications.',
    useCases: ['Cross-platform iOS and Android mobile apps', 'Desktop & web apps with Flutter unified code', 'Custom UI widgets and smooth 60fps micro-interactions', 'State management with BLoC, Riverpod, and Provider'],
    engagementPerks: ['App Store & Play Store publication experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'High-velocity feature delivery across platforms'],
    seoTitle: 'Hire Flutter Developers | Dart Engineers | WitQualis',
    seoDescription: 'Hire pre-vetted Flutter developers and Dart engineers from WitQualis Technologies. Cross-platform apps with 60fps UI.'
  },
  {
    name: 'Python Fullstack',
    slug: 'python-fullstack-developers',
    category: 'Full-Stack',
    tagline: 'Full-stack Python & React architectures for data-heavy applications',
    summary: 'Full-stack engineers building modern React/Next.js frontends powered by high-performance Python FastAPI or Django backends.',
    useCases: ['AI and data-driven web applications', 'FastAPI backend microservices with Next.js frontend', 'Django SaaS applications with PostgreSQL', 'End-to-end full-stack feature delivery'],
    engagementPerks: ['Full end-to-end ownership from UI to database', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Clean, typed codebases throughout'],
    seoTitle: 'Hire Python Fullstack Developers | WitQualis Technologies',
    seoDescription: 'Hire pre-vetted Python fullstack developers from WitQualis Technologies. FastAPI, Django, and React fullstack squads.'
  },
  {
    name: 'QA & Automation',
    slug: 'qa-automation',
    category: 'Others',
    tagline: 'End-to-end automated testing pipelines that catch bugs before production',
    summary: 'QA automation engineers designing Playwright, Cypress, Selenium, and API test suites embedded in continuous integration workflows.',
    useCases: ['End-to-end UI automation with Playwright and Cypress', 'REST and GraphQL API automated regression suites', 'Load and stress testing with k6 and JMeter', 'Automated QA gates inside GitHub Actions and CI/CD'],
    engagementPerks: ['Zero regression guarantee across releases', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'Comprehensive test reporting dashboards'],
    seoTitle: 'Hire QA Automation Engineers | Software Testers | WitQualis',
    seoDescription: 'Hire pre-vetted QA automation engineers from WitQualis Technologies. Playwright, Cypress, Selenium, and CI/CD automated testing.'
  },
  {
    name: 'DevOps & SRE',
    slug: 'devops-engineers',
    category: 'Others',
    tagline: 'Infrastructure as code, GitOps, and 99.99% system availability',
    summary: 'DevOps and Site Reliability Engineers implementing Terraform, Kubernetes, automated multi-stage CI/CD pipelines, and observability.',
    useCases: ['Infrastructure as Code (Terraform, Pulumi)', 'Kubernetes cluster management and Helm deployments', 'GitOps workflows with ArgoCD and GitHub Actions', 'Datadog, Prometheus, and Grafana monitoring/alerting'],
    engagementPerks: ['24/7 reliability and incident response experience', 'Direct daily standup access, no account-manager relay', 'Trial sprint available before any long-term commitment', 'SLA-backed cloud infrastructure'],
    seoTitle: 'Hire DevOps & SRE Engineers | Cloud Infrastructure | WitQualis',
    seoDescription: 'Hire pre-vetted DevOps and SRE engineers from WitQualis Technologies. Terraform, Kubernetes, CI/CD, and 99.99% uptime.'
  }
];

export function getStackBySlug(slug: string): StackItem | undefined {
  return stacks.find((s) => s.slug === slug);
}

export function getEnrichedStack(slug: string): EnrichedStackItem | undefined {
  const stack = getStackBySlug(slug);
  if (!stack) return undefined;

  const isMobile = stack.category === 'Mobile';
  const isFrontend = stack.category === 'Frontend';
  const isBackend = stack.category === 'Backend';
  const isDataCloud = stack.category === 'Data & Cloud';
  const isAI = stack.category === 'AI Technology';
  const isFullStack = stack.category === 'Full-Stack';
  const isOthers = stack.category === 'Others';

  // 1. Challenges based on domain
  let challenges: StackChallenge[] = [];
  if (isFrontend) {
    challenges = [
      {
        title: 'Sluggish Load Times & Poor Core Web Vitals',
        problem: `Unoptimized ${stack.name} applications suffer from bloated bundle sizes, layout shifts, and slow first-contentful paint times.`,
        consequence: 'Lower Google search rankings, high bounce rates, and reduced customer conversion.',
        severity: 'CRITICAL',
        stat: '53% of users abandon web pages that take over 3 seconds to load'
      },
      {
        title: 'Messy Component State & Code Duplication',
        problem: 'Ad-hoc component development without a unified design system leads to tangled state logic and UI inconsistencies.',
        consequence: 'Expensive regression bugs and duplicated developer sprint effort.',
        severity: 'HIGH',
        stat: 'Up to 40% of frontend sprint time is wasted fixing avoidable UI regressions'
      },
      {
        title: '60+ Day Hiring Lag & Unvetted Resumes',
        problem: `Sourcing qualified Senior ${stack.name} engineers through traditional agencies can take many weeks and does not always confirm hands-on technical competence.`,
        consequence: 'Delayed product roadmaps and missed market opportunities.',
        severity: 'HIGH',
        stat: 'Average time-to-hire for senior frontend engineers exceeds 52 days'
      },
      {
        title: 'Timezone Friction & Opaque Account Relays',
        problem: 'Offshore freelancers communicate asynchronously with zero daily standup presence and unreliable response times.',
        consequence: 'Blocked sprints, broken handoffs, and lack of team accountability.',
        severity: 'MODERATE',
        stat: '38% of outsourced projects fail due to poor daily communication'
      }
    ];
  } else if (isMobile) {
    challenges = [
      {
        title: 'App Store Rejections & Review Bottlenecks',
        problem: `${stack.name} apps often fail strict Apple App Store and Google Play compliance checks for permissions, privacy policies, or UI guidelines.`,
        consequence: 'Delayed product launch dates and loss of launch momentum.',
        severity: 'CRITICAL',
        stat: '42% of mobile app submissions face initial store review rejections'
      },
      {
        title: 'Frame Drops, Janky Scrolling & Battery Drain',
        problem: 'Unoptimized render loops, memory leaks, and inefficient background threads drain user battery and drop frames below 60fps.',
        consequence: '1-star app store ratings, high uninstalls, and poor user retention.',
        severity: 'HIGH',
        stat: '78% of uninstalls are triggered by app crashes, freezes, or slow performance'
      },
      {
        title: 'Scarcity of True Senior Mobile Specialists',
        problem: `Junior ${stack.name} developers lack deep understanding of native platform APIs, memory management, and offline-first data sync.`,
        consequence: 'Brittle architectures that require complete ground-up rewrites.',
        severity: 'HIGH',
        stat: 'Experienced mobile architects with deep native-platform expertise are in high demand across the industry'
      },
      {
        title: 'Fragmented Device Matrix Compatibility',
        problem: 'Apps behave unpredictably across diverse screen aspect ratios, OS versions, and hardware capabilities.',
        consequence: 'Customer complaints and fractured brand reputation.',
        severity: 'MODERATE',
        stat: 'Over 24,000 distinct Android device models in active global use'
      }
    ];
  } else if (isDataCloud) {
    challenges = [
      {
        title: 'Cloud Cost Sprawls & Budget Inefficiency',
        problem: 'Over-provisioned compute clusters, unindexed databases, and runaway token/GPU inference costs drain company capital.',
        consequence: 'Unsustainable unit economics and executive budget freezes.',
        severity: 'CRITICAL',
        stat: 'Over 32% of all enterprise cloud spend is wasted on idle resources'
      },
      {
        title: 'Data Silos & Unreliable Ingestion Pipelines',
        problem: 'Scattered databases and brittle ETL scripts fail during data schema shifts, corrupting downstream analytics and AI models.',
        consequence: 'Inaccurate business intelligence and false strategic decisions.',
        severity: 'CRITICAL',
        stat: '80% of data science effort is spent wrestling dirty, unindexed data'
      },
      {
        title: 'Security, PII & Regulatory Compliance Exposure',
        problem: 'Unencrypted endpoints and unmonitored access controls fail SOC2, HIPAA, and GDPR audit scrutiny.',
        consequence: 'Severe regulatory penalties, audit failure, and loss of institutional trust.',
        severity: 'HIGH',
        stat: 'Average cost of an enterprise data breach exceeds $4.4 million'
      },
      {
        title: 'Severe Shortage of Production-Proven Engineers',
        problem: `Finding verified ${stack.name} specialists with real hands-on enterprise deployment experience takes months.`,
        consequence: 'Critical infrastructure projects remain stalled for quarters.',
        severity: 'HIGH',
        stat: 'Demand for specialized data/cloud engineers outstrips talent supply by 4:1'
      }
    ];
  } else {
    // Backend & Full-Stack
    challenges = [
      {
        title: 'High Latency & Concurrency Bottlenecks',
        problem: `Legacy ${stack.name} services crash under traffic spikes due to unoptimized database queries, thread locking, and missing cache layers.`,
        consequence: 'Lost customer transactions, checkout drop-offs, and server downtime.',
        severity: 'CRITICAL',
        stat: 'A 1-second delay in page response results in a 7% reduction in conversions'
      },
      {
        title: 'Technical Debt & Monolithic Lock-In',
        problem: 'Undocumented spaghetti code and tight coupling make it impossible to add new features without breaking existing functionality.',
        consequence: 'Sprint velocity slows to a crawl and developer frustration peaks.',
        severity: 'HIGH',
        stat: 'Engineers spend up to 42% of their time managing technical debt'
      },
      {
        title: 'High Agency Markups & Slow Hiring Cycles',
        problem: 'Traditional staffing firms charge 40–60% recruitment markups for unvetted developers who take weeks to ramp up.',
        consequence: 'Inflated payroll budgets and misaligned sprint delivery milestones.',
        severity: 'HIGH',
        stat: '60+ days average duration to hire a qualified senior backend engineer'
      },
      {
        title: 'Communication Breakdowns & Broken Handshakes',
        problem: 'Disconnected contractors who do not attend agile rituals lead to mismatched API contracts and delivery surprises.',
        consequence: 'Missed release deadlines and friction between frontend and backend squads.',
        severity: 'MODERATE',
        stat: '45% of software rework stems from misaligned requirements and contracts'
      }
    ];
  }

  // 2. Our Solutions
  const ourSolutions: StackOurApproach[] = [
    {
      title: `Pre-Vetted Senior ${stack.name} Talent`,
      subtitle: 'STRUCTURED ENGINEERING VETTING',
      desc: `Every WitQualis ${stack.name} developer is evaluated through live architecture interviews, system design challenges, and real pull-request reviews.`,
      architecturalPoints: [
        'Hands-on production experience in enterprise environments',
        'Proficiency with automated unit testing, CI/CD pipelines, and design patterns',
        'Strong communication and active collaboration in agile sprint rituals'
      ],
      badge: 'VETTED TALENT'
    },
    {
      title: 'Trial Sprint Before Commitment',
      subtitle: 'EVALUATE BEFORE YOU COMMIT',
      desc: `Evaluate your matched ${stack.name} developers directly in your live repository and sprint backlog before making a longer-term commitment.`,
      architecturalPoints: [
        'Test real ticket throughput, code quality, and communication',
        'Trial sprint available before any long-term commitment'
      ],
      badge: 'TRIAL SPRINT'
    },
    {
      title: 'Fast Sprint Onboarding',
      subtitle: 'QUICK TO START SHIPPING',
      desc: `We match interview-ready senior ${stack.name} developers within 24 to 48 hours to start on production tickets.`,
      architecturalPoints: [
        'Direct integration into your Slack, Jira, GitHub, and daily standups',
        'Full alignment with your branching strategies, linters, and review standards',
        'Overlapping working hours with your core team'
      ],
      badge: 'FAST MATCHING'
    },
    {
      title: 'Client Code & IP Ownership',
      subtitle: 'DIRECT REPOSITORY ACCESS',
      desc: `Commits, documentation, architectures, and intellectual property created during the engagement transfer to your organization under the signed contract, with NDA coverage.`,
      architecturalPoints: [
        'Direct commits pushed straight to your private GitHub/GitLab repos',
        'Mutual Non-Disclosure Agreement (NDA) and signed security covenants',
        'Direct-hire transfer options can be discussed as part of the engagement terms'
      ],
      badge: 'CLIENT-OWNED IP'
    }
  ];

  // 3. Features & Modules
  const features: StackFeature[] = [
    {
      title: `High-Performance ${stack.name} Development`,
      badge: 'CORE ENGINEERING',
      desc: `Custom software architecture, modular components, and test-driven codebases tailored for scalable enterprise load.`,
      deliverables: [
        `Clean, modular ${stack.name} architecture`,
        'Automated unit & integration test coverage with defined coverage thresholds',
        'Comprehensive technical documentation & API specs'
      ],
      highlight: 'Production-ready code engineered for zero maintenance friction'
    },
    {
      title: 'Architecture Refactoring & Modernization',
      badge: 'TECHNICAL EXCELLENCE',
      desc: `Upgrade legacy codebases, eliminate technical debt, and optimize performance bottlenecks for sub-second execution.`,
      deliverables: [
        'Performance profiling & bottleneck elimination',
        'Dependency updates & framework version migrations',
        'Memory leak and latency optimizations'
      ],
      highlight: 'Cut page render and API latency by up to 60%'
    },
    {
      title: 'Direct Agile & Sprint Integration',
      badge: 'SEAMLESS EMBEDDING',
      desc: `Our developers act as true extensions of your in-house team — attending daily standups, backlog grooming, and sprint planning.`,
      deliverables: [
        'Daily Slack / Teams real-time communication',
        'Linear / Jira ticket ownership and estimation',
        'Bi-weekly sprint demos and pull request reviews'
      ],
      highlight: 'Instant ramp-up with zero management overhead'
    },
    {
      title: 'Security, CI/CD & Automated DevOps',
      badge: 'ENTERPRISE GOVERNANCE',
      desc: `Enforce strict coding standards, automated linting, vulnerability scanning, and automated deployment pipelines.`,
      deliverables: [
        'Automated GitHub Actions / GitLab CI workflows',
        'Static code analysis (SonarQube / ESLint)',
        'Zero-secret exposure with Vault / KMS encryption'
      ],
      highlight: 'SOC2 & enterprise security compliance ready'
    }
  ];

  // 4. Technologies
  let technologies = [
    {
      category: `${stack.name} Core & Frameworks`,
      items: [stack.name, 'TypeScript', 'JavaScript', 'Modern Tooling', 'Latest LTS Version']
    },
    {
      category: 'Testing & Quality Assurance',
      items: ['Jest', 'Playwright', 'Cypress', 'Vitest', 'Testing Library']
    },
    {
      category: 'State, APIs & Databases',
      items: ['REST APIs', 'GraphQL', 'PostgreSQL', 'Redis', 'Zustand / Redux']
    },
    {
      category: 'DevOps & Cloud Ecosystem',
      items: ['Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Kubernetes']
    }
  ];

  if (isMobile) {
    technologies = [
      {
        category: 'Mobile Frameworks & SDKs',
        items: [stack.name, 'SwiftUI', 'Jetpack Compose', 'React Native', 'Flutter', 'Xcode / Android Studio']
      },
      {
        category: 'Native Modules & Hardware',
        items: ['Bluetooth LE', 'Biometrics', 'Camera SDKs', 'Push Notifications', 'CoreLocation']
      },
      {
        category: 'State & Local Storage',
        items: ['SQLite / Room', 'SwiftData', 'Zustand / Redux', 'WatermelonDB', 'Realm']
      },
      {
        category: 'Mobile CI/CD & Release',
        items: ['Fastlane', 'TestFlight', 'Firebase App Distribution', 'GitHub Actions', 'Sentry']
      }
    ];
  } else if (isDataCloud) {
    technologies = [
      {
        category: 'Data & Cloud Engines',
        items: [stack.name, 'Python', 'FastAPI', 'PyTorch', 'Azure / AWS', 'Terraform']
      },
      {
        category: 'Vector & Relational DBs',
        items: ['Qdrant', 'Pinecone', 'PostgreSQL (pgvector)', 'Snowflake', 'Redis']
      },
      {
        category: 'MLOps & Orchestration',
        items: ['vLLM', 'Docker', 'Kubernetes EKS', 'MLflow', 'Airflow']
      },
      {
        category: 'Monitoring & Telemetry',
        items: ['Datadog', 'Prometheus', 'Grafana', 'Langfuse', 'Sentry']
      }
    ];
  }

  // 5. Case Study
  const caseStudies: StackCaseStudy[] = [
    {
      title: `Enterprise ${stack.name} Platform Scaling & Feature Acceleration`,
      client: 'High-Growth Global Enterprise',
      industry: 'Enterprise SaaS & Digital Platforms',
      challenge: `The client faced an 8-week hiring backlog and needed 3 senior ${stack.name} developers to rebuild customer-facing workflows under tight quarterly deadlines.`,
      solution: `WitQualis matched and deployed 3 senior ${stack.name} engineers within 48 hours who integrated directly into Jira sprints and refactored core architecture.`,
      results: [
        'Improved sprint velocity within the first month of engagement',
        'Maintained production stability across major release cutovers'
      ],
      stack: [stack.name, 'TypeScript', 'Docker', 'PostgreSQL', 'GitHub Actions'],
      metrics: [
        { label: 'Onboarding Time', value: '24\u201348h' },
        { label: 'Trial Sprint', value: 'Available' }
      ]
    }
  ];

  // 6. Benefits
  const benefits: StackBenefit[] = [
    {
      title: 'Trial Sprint Before Commitment',
      badge: 'LOW-RISK START',
      desc: `Test your dedicated ${stack.name} developers in live sprints before making a longer-term commitment.`
    },
    {
      title: 'Client Code & IP Ownership',
      badge: 'FULL RIGHTS',
      desc: `Commits, source code, and architecture designs created during the engagement belong to your organization under the signed contract.`
    },
    {
      title: 'Fast Onboarding',
      badge: 'SPEED',
      desc: `Get interview-ready senior ${stack.name} candidates matched and integrated into your tools within 24 to 48 hours.`
    },
    {
      title: 'Direct Daily Standup Access',
      badge: 'NO MIDDLEMEN',
      desc: `Work directly with your engineers on Slack, Teams, and daily video standups with zero account-manager interference.`
    },
    {
      title: 'Overlapping Working Hours',
      badge: 'FLEXIBLE SCHEDULING',
      desc: `Real-time collaboration with overlapping working hours across US, UK, and European business hours.`
    },
    {
      title: 'Lower Recruitment Overhead',
      badge: 'NO AGENCY FEES',
      desc: `Transparent monthly billing with no hidden recruiter fees, compared to running your own hiring pipeline.`
    }
  ];

  // 7. FAQs
  const faqs: StackFAQ[] = [
    {
      q: `How quickly can a dedicated ${stack.name} developer start?`,
      a: `We can match pre-vetted senior ${stack.name} developers within 24 to 48 hours. Once you interview and approve the candidates, they can begin contributing to your sprint tickets.`
    },
    {
      q: 'How does the trial sprint work?',
      a: `You can test the developer directly in your codebase and sprint environment for up to 7 days before committing to a standard engagement.`
    },
    {
      q: `Can our dedicated ${stack.name} developer work directly in our GitHub / Slack?`,
      a: `Yes. Our engineers operate as an integrated extension of your internal team — committing directly to your repositories, joining your Slack/Teams channels, and attending daily agile standups.`
    },
    {
      q: 'What happens if we need to scale up or replace an engineer?',
      a: `Scaling terms and replacement policy are agreed as part of the engagement contract. Discuss your specific requirements with Witqualis before starting an engagement.`
    },
    {
      q: 'Who owns the intellectual property and code written by the developer?',
      a: `Intellectual property, git repositories, code, and documentation created during the engagement transfer to your organization under the signed contract and mutual NDA.`
    }
  ];

  return {
    ...stack,
    heroBadge: `${stack.name.toUpperCase()} SQUADS & DEDICATED TALENT`,
    heroStats: [
      { label: 'Vetting Process', value: 'Multi-Stage' },
      { label: 'Time to Onboard', value: '24\u201348h' },
      { label: 'Working Hours', value: 'Overlapping' },
      { label: 'Trial Sprint', value: 'Available' }
    ],
    challenges,
    ourSolutions,
    features,
    technologies,
    caseStudies,
    benefits,
    faqs
  };
}

export const stacksByCategory: StackCategory[] = [
  {
    category: 'AI Technology',
    stacks: stacks.filter((s) => s.category === 'AI Technology'),
  },
  {
    category: 'Data & Cloud Technology',
    stacks: stacks.filter((s) => s.category === 'Data & Cloud'),
  },
  {
    category: 'Full-Stack Technology',
    stacks: stacks.filter((s) => s.category === 'Full-Stack'),
  },
  {
    category: 'Frontend Technology',
    stacks: stacks.filter((s) => s.category === 'Frontend'),
  },
  {
    category: 'Backend Technology',
    stacks: stacks.filter((s) => s.category === 'Backend'),
  },
  {
    category: 'Mobile Application Technology',
    stacks: stacks.filter((s) => s.category === 'Mobile'),
  },
  {
    category: 'Others',
    stacks: stacks.filter((s) => s.category === 'Others'),
  },
];


