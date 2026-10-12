/**
 * services.js — Single source of truth for Code Kompany service offerings.
 * Contains summary metadata and full page content for all 9 service offerings.
 */

export const rawServices = [
  {
    slug: 'ai-agents',
    name: 'AI Agents & Automation',
    shortName: 'AI Agents',
    oneLiner: 'Agents and automation that handle the busywork, 24/7.',
    tags: ['AI Agents', 'Automation', 'NLP'],
    featured: true,
    imageKey: 'aiAgents',
    seo: {
      title: 'AI Agents & Automation for Business | Code Kompany',
      description:
        'AI agents for business, smart chatbots and workflow automation built into your existing tools. Streamline operations and reduce manual work with Code Kompany.',
    },
    headline: 'AI That Works While You Sleep — Agents, Automation & Intelligence Built Into Your Business',
    displayHeadline: ['AI That Works', 'While You Sleep.'],
    intro:
      'We design AI agents and automations that plug into your existing tools and take repetitive work off your team.',
    problem:
      'Every business loses money quietly — in hours spent on repetitive tasks, customers who leave because nobody replied fast enough, and decisions made on gut feel instead of real data.',
    buildLabel: 'What we build',
    buildApproach:
      'We assess your needs, find the highest-impact use cases, then implement AI that fits how you already work.',
    build: [
      'AI chatbots that never sleep and never miss a lead',
      'AI workflow automation that removes busywork',
      'Predictive analytics',
      'Computer vision',
      'NLP for contracts, reviews and emails',
    ],
    workflows: [
      'Invoice processing & accounts payable',
      'Employee onboarding & HR workflows',
      'Customer service ticket routing',
      'Document approvals',
      'Data entry & validation',
      'Report generation & distribution',
      'Integration between disconnected systems',
    ],
    valueLabel: 'Business value',
    value: [
      'Fewer hours lost to repetitive work',
      'Faster customer response',
      'Fewer mistakes',
      'Smarter automated operations',
      'Better accuracy and consistency',
      'Real-time visibility into process status',
      'Audit trails for every step',
    ],
    capabilities: [
      'AI Chatbots & Virtual Assistants',
      'AI Workflow Automation',
      'Predictive Analytics & Forecasting',
      'AI Infrastructure Setup',
      'Computer Vision for Quality Inspection',
      'NLP Applications for Documents',
      'Recommendation Engines',
      'Fraud Detection',
      'Process Optimisation with Machine Learning',
    ],
    technologies: [],
    useCases: [
      'Instant replies to website and WhatsApp enquiries',
      'Auto-sorting and summarising incoming emails',
      'Extracting key terms from contracts',
      'Flagging defects from camera images',
    ],
  },
  {
    slug: 'software-development',
    name: 'Software Development',
    shortName: 'Software Dev',
    oneLiner: 'Custom software built around how your business really works.',
    tags: ['Web Apps', 'Dashboards', 'Integrations'],
    featured: false,
    imageKey: 'softwareDevelopment',
    seo: {
      title: 'Custom Software Development | Code Kompany',
      description:
        'Custom software development built around your exact business processes. Scalable portals, dashboards and integrations engineered for long-term success.',
    },
    headline: 'Custom Software That Finally Works the Way Your Business Does',
    displayHeadline: ['Custom Software That Finally Works', 'the Way Your Business Does.'],
    intro:
      'Software designed around your exact processes, teams and goals — not the other way around.',
    introExtra:
      'Modern software engineered for performance, scalability and long-term success.',
    problem:
      'Off-the-shelf tools force workarounds, spreadsheets and duplicate effort, and teams end up adapting to the software.',
    buildLabel: 'What we build',
    build: [
      'Custom business applications',
      'Customer portals',
      'Booking & reservation systems',
      'Project management tools',
      'Real-time collaboration platforms',
      'Data visualisation dashboards',
      'API-driven apps with third-party integrations',
      'Integrations between existing systems',
    ],
    valueLabel: 'Business value',
    value: ['Less training', 'Fewer workarounds', 'Faster work', 'Scalable systems'],
    capabilities: [
      'Web applications',
      'Role-based access',
      'Reporting dashboards',
      'API development',
      'System integrations',
    ],
    technologies: [],
    useCases: [
      'A manufacturing portal replacing five spreadsheets',
      'A field-team app that works offline',
      'A partner dashboard with real-time analytics',
    ],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    shortName: 'Websites',
    oneLiner: 'Fast, SEO-ready websites and web platforms that win customers.',
    tags: ['Business Websites', 'Web Apps', 'SEO-Ready'],
    featured: false,
    imageKey: 'websiteDevelopment',
    seo: {
      title: 'Website Development | Code Kompany',
      description:
        'Responsive, SEO-ready business websites, custom web applications, e-commerce platforms and specialised portals, built around your business goals.',
    },
    headline: 'Websites That Work as Hard as Your Business',
    displayHeadline: ['Websites That Work', 'as Hard as Your Business.'],
    intro:
      'Professionally crafted websites and web platforms that make a strong first impression and turn visitors into enquiries.',
    problem:
      'A slow, outdated or hard-to-update website quietly sends customers to your competitors.',
    buildLabel: 'What we build',
    build: [
      'Business websites',
      'Landing pages',
      'Web applications',
      'Online stores',
      'Specialised portals',
    ],
    offerings: [
      {
        name: 'Professional Business Websites',
        line: 'Sites that represent your brand with impact.',
        features: [
          'Responsive, mobile-first design',
          'SEO-ready structure',
          'Content management',
          'Contact forms & lead capture',
          'Fast loading performance',
        ],
      },
      {
        name: 'Custom Web Applications',
        line: 'Purpose-built tools for specific business needs.',
        features: [
          'Customer portals',
          'Booking systems',
          'Dashboards',
          'Third-party integrations',
        ],
        link: {
          text: 'See Software Development →',
          to: '/services/software-development',
        },
      },
      {
        name: 'E-Commerce Platforms',
        line: 'Complete online stores, built to convert.',
        features: [
          'Catalogue',
          'Payments',
          'Orders',
          'Inventory',
        ],
        link: {
          text: 'See E-Commerce →',
          to: '/services/ecommerce',
        },
      },
      {
        name: 'Currency Exchange Portals',
        line: 'Specialised platforms for financial services.',
        features: [
          'Real-time exchange rate updates',
          'Secure transaction processing',
          'Multi-currency support',
          'User authentication & KYC verification flows',
          'Transaction history & reporting',
          'Admin dashboards',
        ],
      },
    ],
    valueLabel: 'Business value',
    value: [
      'Stronger first impression',
      'More enquiries',
      'Easy content updates',
      'Easier to find on search',
    ],
    capabilities: [
      'Responsive design',
      'SEO-ready structure',
      'Content management',
      'Lead capture',
      'Performance optimisation',
      'Integrations',
    ],
    technologies: [],
    useCases: [
      'A company website that finally generates enquiries',
      'A booking portal for a service business',
      'A currency exchange platform with live rates',
    ],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    oneLiner: 'Native and cross-platform iOS and Android apps with seamless user experiences.',
    tags: ['iOS', 'Android', 'Cross-Platform'],
    featured: false,
    imageKey: 'mobileApp',
    seo: {
      title: 'Custom Mobile App Development Company | Code Kompany',
      description:
        'Custom mobile app development company creating native and cross-platform iOS and Android apps with seamless user experiences and enterprise scale.',
    },
    headline: 'Mobile Experiences Your Customers and Team Actually Want to Use',
    displayHeadline: ['Mobile Experiences', 'People Actually Want to Use.'],
    intro:
      'Native and cross-platform apps built for fluid performance, clean interfaces and reliable offline behaviour.',
    problem:
      'Most mobile apps are slow, hard to navigate or crash when the connection drops — and users delete them within minutes.',
    buildLabel: 'What we build',
    build: [
      'Cross-platform mobile apps',
      'Field team and operations tools',
      'Customer-facing mobile services',
      'Offline-capable mobile apps',
    ],
    offerings: [
      {
        name: 'Cross-Platform Apps',
        line: 'One codebase for iOS and Android.',
        features: [
          'Lower development and maintenance effort',
          'Near-native performance',
          'Consistent experience on both platforms',
        ],
      },
      {
        name: 'Business Apps',
        line: 'Mobile tools that run your operations.',
        features: [
          'Sales force automation',
          'Field service management',
          'Inventory on the go',
          'Employee productivity tools',
          'Reporting & business intelligence',
          'Offline mode with data sync',
        ],
      },
      {
        name: 'Enterprise Apps',
        line: 'Secure apps for large teams.',
        features: [
          'Advanced security & authentication',
          'Integration with enterprise systems',
          'Role-based access control',
          'Push notifications & real-time updates',
          'Analytics & usage tracking',
          'Built to scale',
        ],
      },
    ],
    valueLabel: 'Business value',
    value: [
      'One codebase, two platforms',
      'Faster to market',
      'Consistent experience everywhere',
      'Reliable offline use',
    ],
    capabilities: [
      'Cross-platform development',
      'Offline-first architecture',
      'Push notifications',
      'Hardware integrations',
      'App store submission',
    ],
    technologies: ['iOS', 'Android'],
    useCases: [
      'Field inspection app that syncs when back online',
      'Customer service booking app',
      'Inventory count app for warehouse staff',
    ],
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    shortName: 'Cloud',
    oneLiner: 'Secure cloud infrastructure, migration and deployment across AWS, Azure and hybrid environments.',
    tags: ['AWS', 'Azure', 'Kubernetes'],
    featured: false,
    imageKey: 'cloudSolutions',
    seo: {
      title: 'Cloud Solutions & Migration Services | Code Kompany',
      description:
        'Secure cloud infrastructure, cloud migration and deployment across AWS, Azure and hybrid environments tailored to your organisation\'s scale.',
    },
    headline: 'Cloud Infrastructure Engineered to Scale Without Surprise Invoices',
    displayHeadline: ['Cloud Infrastructure Engineered to Scale', 'Without Surprise Invoices.'],
    intro:
      'Cloud systems designed for resilience, sensible cost structure and clear deployment pipelines.',
    problem:
      'Cloud bills that grow faster than the business, mysterious outages and configurations only one person understands.',
    buildLabel: 'What we build',
    build: [
      'Cloud migration planning and execution',
      'Containerised infrastructure and orchestration',
      'Automated deployment pipelines',
      'Cost-optimised architecture',
    ],
    offeringsType: 'tiers',
    offerings: [
      {
        tierLabel: 'SMALL',
        name: 'Small Business Cloud Migration',
        line: 'A smooth first move to the cloud.',
        features: [
          'Assessment of current infrastructure',
          'Choosing the right cloud services',
          'Carefully planned data migration to minimise disruption',
          'Security configuration',
          'Cost optimisation',
          'Team training',
        ],
      },
      {
        tierLabel: 'GROWING',
        name: 'Growing Organisations',
        line: 'Infrastructure that keeps up with growth.',
        features: [
          'Hybrid cloud architecture',
          'Load balancing & auto-scaling',
          'Disaster recovery & backups',
          'Monitoring & performance tuning',
          'DevOps setup',
          'Ongoing support & maintenance',
        ],
      },
      {
        tierLabel: 'ENTERPRISE',
        flagship: true,
        name: 'Enterprise Cloud Infrastructure',
        line: 'For complex, large-scale environments.',
        features: [
          'Multi-cloud & hybrid strategy',
          'Containerisation & Kubernetes orchestration',
          'Microservices architecture',
          'Advanced security & compliance',
          'CI/CD pipelines',
          'Dedicated architecture support',
        ],
      },
    ],
    valueLabel: 'Business value',
    value: [
      'Lower infrastructure cost',
      'High reliability',
      'Zero maintenance headaches',
      'Effortless scaling',
    ],
    capabilities: [
      'Cloud migration',
      'Infrastructure as code',
      'CI/CD pipelines',
      'Monitoring and alerting',
      'Security hardening',
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'],
    useCases: [
      'Migrating an on-premises ERP to managed cloud',
      'Setting up automated deployments for a growing team',
      'Auditing and reducing a ballooning cloud bill',
    ],
  },
  {
    slug: 'digital-transformation',
    name: 'Digital Transformation',
    shortName: 'Transformation',
    oneLiner: 'Modernise legacy systems with automation, cloud integration and better digital workflows.',
    tags: ['Legacy Modernisation', 'Process Automation', 'Strategy'],
    featured: false,
    imageKey: 'digitalTransformation',
    seo: {
      title: 'Digital Transformation Consulting Services | Code Kompany',
      description:
        'Digital transformation consulting services to modernise legacy systems, automate workflows and create sustainable technology roadmaps.',
    },
    headline: 'Modernise Your Operations Without Breaking What Already Works',
    displayHeadline: ['Modernise Your Operations Without Breaking', 'What Already Works.'],
    intro:
      'We help established businesses replace manual steps and legacy systems with clean digital workflows — step by step.',
    introExtra:
      "Whether you're taking your first steps toward digitalisation or executing a full transformation strategy.",
    problem:
      'Old systems hold the business hostage — too risky to turn off, too slow to keep up with growth.',
    buildLabel: 'What we build',
    build: [
      'Business process analysis & optimisation',
      'Technology roadmap development',
      'Legacy system modernisation',
      'Change management & training',
      'Digital culture enablement',
      'ROI tracking throughout the journey',
    ],
    valueLabel: 'Business value',
    value: [
      'Continuity throughout the transition',
      'Measurable efficiency gains',
      'Less staff frustration',
      'A future-proof foundation',
    ],
    capabilities: [
      'Legacy system audits',
      'Phased modernisation plans',
      'Integration bridges',
      'Process digitisation',
      'Team onboarding and training',
    ],
    technologies: [],
    useCases: [
      'Replacing paper-based shop floor logs with tablets',
      'Building an API layer over a legacy accounting tool',
      'Automating approvals across three disconnected systems',
    ],
  },
  {
    slug: 'mvp-development',
    name: 'MVP Development',
    shortName: 'MVP',
    oneLiner: 'From concept to working product in weeks, ready for real users.',
    tags: ['Rapid Prototyping', 'Product Strategy', 'Scalable Architecture'],
    featured: false,
    imageKey: 'mvpDevelopment',
    seo: {
      title: 'MVP Development Company | Code Kompany',
      description:
        'MVP development company helping founders and businesses launch focused products, validate markets and scale architecture with real user feedback.',
    },
    headline: 'Launch the Right Product Fast — Before You Spend Months on the Wrong One',
    displayHeadline: ['Launch the Right Product Fast —', 'Before You Build the Wrong One.'],
    intro:
      'We strip ideas down to their most valuable core, build a production-grade first version, and get it into real users’ hands.',
    problem:
      'Startups and internal ventures waste time and budget building features nobody uses, running out of momentum before finding product-market fit.',
    buildLabel: 'What we build',
    build: [
      'Core feature set definition',
      'Production-ready MVP architecture',
      'User analytics and feedback loops',
      'Scalable foundation for v2 and beyond',
    ],
    valueLabel: 'Business value',
    value: [
      'Faster time to market',
      'Lower upfront cost',
      'Real user feedback early',
      'Clean foundation that does not need a rewrite',
    ],
    valueClosing: 'Launch focused, then learn from real users fast.',
    capabilities: [
      'Rapid prototyping & iterative development',
      'User-centric design',
      'Scalable architecture for future growth',
      'Market validation support',
      'Flexible engagement models for startup budgets',
    ],
    technologies: [],
    useCases: [
      'A SaaS tool tested with 50 pilot customers',
      'An internal workflow tool validated in four weeks',
      'A marketplace prototype to secure early traction',
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-Commerce Solutions',
    shortName: 'E-Commerce',
    oneLiner: 'Custom e-commerce platforms with faster checkouts, better customer experience and higher sales.',
    tags: ['Custom Stores', 'Payments', 'Headless'],
    featured: false,
    imageKey: 'ecommerce',
    seo: {
      title: 'Online Store Development Company | Code Kompany',
      description:
        'Online store development company building custom e-commerce platforms with faster checkouts, robust catalogues and higher conversions.',
    },
    headline: 'E-Commerce Experiences Built for Conversions, Not Just Catalogues',
    displayHeadline: ['E-Commerce Experiences Built for Conversions,', 'Not Just Catalogues.'],
    intro:
      'Fast, reliable online stores designed to make finding, choosing and buying feel effortless.',
    problem:
      'Generic store templates are slow to load, clumsy on mobile, and lose customers during checkout.',
    buildLabel: 'What we build',
    build: [
      'Product catalogue management',
      'Smart search',
      'Personalised recommendations',
      'Shopping cart & checkout',
      'Secure payment gateway integration',
      'Order management & tracking',
      'Customer accounts & wish lists',
      'Inventory sync',
      'Shipping',
      'Promotional tools for discounts & campaigns',
    ],
    valueLabel: 'Business value',
    value: [
      'Faster page speeds',
      'Higher checkout conversion',
      'Seamless mobile buying',
      'Automated inventory sync',
    ],
    capabilities: [
      'Custom storefronts',
      'Payment gateway integrations',
      'Inventory and order management',
      'ERP and CRM connections',
      'Mobile-first checkout flows',
    ],
    technologies: [],
    useCases: [
      'Direct-to-consumer store with sub-second page loads',
      'B2B ordering portal with custom pricing tiers',
      'Multi-currency store with localised checkout',
    ],
  },
  {
    slug: 'industry-solutions',
    name: 'Industry Solutions',
    shortName: 'Industries',
    oneLiner: 'Software engineered for manufacturing, healthcare and real estate.',
    tags: ['Manufacturing ERP', 'Healthcare Systems', 'Real Estate Tech'],
    featured: false,
    imageKey: 'industrySolutions',
    layout: 'industry',
    seo: {
      title: 'Industry Solutions — Manufacturing ERP, Healthcare & PropTech | Code Kompany',
      description:
        'Tailored manufacturing ERP, custom healthcare software development, and real estate app development built for complex operational workflows.',
    },
    headline: 'Deep Domain Technology for the Industries That Power the Real Economy',
    displayHeadline: ['Deep Domain Technology for Industries That Power', 'the Real Economy.'],
    intro:
      'We design software around the operational realities of manufacturing, healthcare and real estate — not generic templates.',
    problem:
      'Off-the-shelf software never fits industry workflows properly. Teams resort to paper, personal WhatsApp chats and spreadsheets.',
    chapters: [
      {
        id: 'manufacturing',
        label: '01 — MANUFACTURING ERP',
        name: 'Manufacturing ERP',
        imageKey: 'industryManufacturing',
        headline: 'Shop Floor to Top Floor — Connected Operations That Eliminate Bottlenecks',
        introLine:
          'Integrated ERP for production planning, inventory, procurement and compliance tracking.',
        features: [
          'Inventory',
          'Production planning',
          'Purchasing',
          'Quality',
          'Maintenance',
          'Accounts',
          'Predictive maintenance',
          'AI quality checks',
        ],
        highlightedFeatures: ['Predictive maintenance', 'AI quality checks'],
        tiers: [
          {
            tierLabel: 'STARTER',
            name: 'Starter Manufacturing ERP',
            line: 'For small manufacturing units.',
            features: [
              'Inventory management',
              'Production planning',
              'Basic financial tracking',
              'Real-time shop floor visibility without enterprise complexity',
            ],
          },
          {
            tierLabel: 'BUSINESS',
            name: 'Business Manufacturing ERP',
            line: 'For growing manufacturers.',
            features: [
              'Supply chain management',
              'Quality control',
              'Equipment maintenance tracking',
              'Multi-location inventory',
              'Forecasting & resource allocation to reduce waste',
            ],
          },
          {
            tierLabel: 'ENTERPRISE',
            flagship: true,
            name: 'Enterprise Manufacturing ERP',
            line: 'For complex production environments.',
            features: [
              'Advanced planning & scheduling',
              'Shop floor execution',
              'Integrated procurement',
              'Product lifecycle management',
              'Comprehensive analytics',
              'Compliance reporting',
            ],
          },
        ],
      },
      {
        id: 'healthcare',
        label: '02 — HEALTHCARE SYSTEMS',
        name: 'Healthcare Systems',
        imageKey: 'industryHealthcare',
        headline: 'Technology That Gives Clinicians Back Their Most Valuable Resource — Time',
        introLine:
          'Software for patient records, appointments, billing, EMR and multi-location operations.',
        features: [
          'Patient records',
          'Scheduling',
          'Telemedicine',
          'Billing',
          'Privacy-focused systems',
        ],
        highlightedFeatures: [],
        tiers: [
          {
            tierLabel: 'CLINIC',
            name: 'Clinic & Small Hospital System',
            line: 'Simple, streamlined management.',
            features: [
              'Patient management',
              'Appointment scheduling',
              'Electronic medical records',
              'Billing & insurance processing',
              'Medical supplies inventory',
              'Designed for ease of use',
            ],
          },
          {
            tierLabel: 'HOSPITAL',
            name: 'Multi-Specialty Hospital System',
            line: 'For multiple departments and specialties.',
            features: [
              'Departmental coordination',
              'Laboratory & radiology integration',
              'Pharmacy management',
              'Bed & resource allocation',
              'Staff scheduling',
              'Financial management & reporting',
            ],
          },
          {
            tierLabel: 'CUSTOM',
            name: 'Custom Healthcare ERP',
            line: 'Built for unique requirements.',
            features: [
              'Custom modules for specific workflows',
              'Integration with existing systems',
              'Support for regulatory requirements',
              'Telemedicine platforms',
              'Medical device integration',
            ],
          },
        ],
      },
      {
        id: 'real-estate',
        label: '03 — REAL ESTATE & PROPTECH',
        name: 'Real Estate & PropTech',
        imageKey: 'industryRealEstate',
        headline: 'Never Lose Another Lead — Real Estate Tech Built to Close Deals',
        introLine:
          'Property management platforms, CRM systems, tenant portals and workflow automation.',
        features: ['AI lead response', 'Lead scoring', 'Live inventory', 'Booking workflows'],
        highlightedFeatures: ['AI lead response', 'Lead scoring'],
        tiers: [
          {
            tierLabel: 'PLATFORM',
            name: 'Property Listing & Management Platforms',
            line: 'For agencies and property managers.',
            features: [
              'Portfolio management',
              'Virtual tours & media galleries',
              'Lead management & CRM',
              'Showing & appointment scheduling',
              'Documents & e-signatures',
            ],
          },
          {
            tierLabel: 'MARKETPLACE',
            name: 'Real Estate Marketplaces',
            line: 'Connecting buyers, sellers, renters and agents.',
            features: [
              'Advanced search & filters',
              'Map-based discovery',
              'Comparison tools',
              'Mortgage calculators',
              'Reviews & ratings features',
              'Mobile apps',
            ],
          },
          {
            tierLabel: 'OPERATIONS',
            name: 'Property Management Systems',
            line: 'End-to-end operations for property managers.',
            features: [
              'Tenant & lease tracking',
              'Maintenance requests',
              'Rent collection & financial reporting',
              'Vendor management',
              'Compliance tracking',
            ],
          },
        ],
      },
    ],
  },
];

/**
 * Compute 2-digit numbers dynamically from array index.
 * Never hard-code '08' or '09'.
 */
export const services = rawServices.map((service, idx) => ({
  ...service,
  number: String(idx + 1).padStart(2, '0'),
}));

/** Total count of services */
export const TOTAL_SERVICES = services.length;
export const TOTAL_SERVICES_LABEL = `${TOTAL_SERVICES} CAPABILITIES`;

/**
 * Get service details by slug.
 */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}

/**
 * Get next service in line (loops back to 01 after last service).
 */
export function getNextService(slug) {
  const idx = services.findIndex((s) => s.slug === slug);
  if (idx === -1) return services[0];
  return services[(idx + 1) % services.length];
}
