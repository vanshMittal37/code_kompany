/**
 * services.js — Single source of truth for Code Kompany service offerings.
 * Contains both summary metadata and full page content for all 8 service offerings.
 */

export const services = [
  {
    slug: 'ai-agents',
    number: '01',
    name: 'AI Agents & Automation',
    shortName: 'AI Agents',
    oneLiner: 'Agents and automation that handle the busywork, 24/7.',
    tags: ['AI Agents', 'Automation', 'NLP'],
    featured: true,
    imageKey: 'aiAgents',
    seo: {
      title: 'AI Agents & Automation for Business | Code Kompany',
      description:
        'AI agents, chatbots and workflow automation built into your business — faster responses, less busywork and smarter operations. AI software development from Vadodara, India.',
    },
    headline: 'AI That Works While You Sleep — Agents, Automation & Intelligence Built Into Your Business',
    displayHeadline: ['AI That Works', 'While You Sleep.'],
    intro:
      'We design AI agents and automations that plug into your existing tools and take repetitive work off your team.',
    problem:
      'Every business loses money quietly — in hours spent on repetitive tasks, customers who leave because nobody replied fast enough, and decisions made on gut feel instead of real data.',
    buildLabel: 'What we build',
    build: [
      'AI chatbots that never sleep and never miss a lead',
      'AI workflow automation that removes busywork',
      'Predictive analytics',
      'Computer vision',
      'NLP for contracts, reviews and emails',
    ],
    valueLabel: 'Business value',
    value: [
      'Fewer hours lost to repetitive work',
      'Faster customer response',
      'Fewer mistakes',
      'Smarter automated operations',
    ],
    capabilities: [
      'Lead qualification agents',
      'Customer support assistants',
      'Document and email processing',
      'Workflow orchestration across tools',
      'Forecasting and insights',
      'Visual inspection',
    ],
    // Editable defaults — confirm with client
    technologies: [
      'OpenAI / Claude / open-source LLMs',
      'Python',
      'Agent frameworks',
      'Vector databases',
      'REST APIs & webhooks',
    ],
    useCases: [
      'Instant replies to website and WhatsApp enquiries',
      'Auto-sorting and summarising incoming emails',
      'Extracting key terms from contracts',
      'Flagging defects from camera images',
    ],
  },
  {
    slug: 'software-development',
    number: '02',
    name: 'Software Development',
    shortName: 'Software Dev',
    oneLiner: 'Custom software built around how your business really works.',
    tags: ['Web Apps', 'Dashboards', 'Integrations'],
    featured: false,
    imageKey: 'softwareDevelopment',
    seo: {
      title: 'Custom Software Development | Code Kompany',
      description:
        'Custom software built around your exact processes, teams and goals — less training, fewer workarounds and scalable systems. Custom software development in India.',
    },
    headline: 'Custom Software That Finally Works the Way Your Business Does',
    displayHeadline: ['Custom Software That Finally Works', 'the Way Your Business Does.'],
    intro:
      'Software designed around your exact processes, teams and goals — not the other way around.',
    problem:
      'Off-the-shelf tools force workarounds, spreadsheets and duplicate effort, and teams end up adapting to the software.',
    buildLabel: 'What we build',
    build: [
      'Custom business applications',
      'Internal tools and dashboards',
      'Customer and partner portals',
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
    // Editable defaults — confirm with client
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'REST/GraphQL APIs'],
    useCases: [
      'Replacing a patchwork of spreadsheets with one internal tool',
      'A portal where customers track orders',
      'Connecting accounting, sales and operations data',
    ],
  },
  {
    slug: 'mobile-app-development',
    number: '03',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    oneLiner: 'Fast, intuitive iOS and Android apps people come back to.',
    tags: ['iOS', 'Android', 'UX'],
    featured: false,
    imageKey: 'mobileApp',
    seo: {
      title: 'Mobile App Development in India — iOS & Android | Code Kompany',
      description:
        'Fast, intuitive iOS and Android apps focused on user experience, performance, retention and engagement. Mobile app development from Vadodara, India.',
    },
    headline: 'Apps People Actually Open Twice',
    displayHeadline: ['Apps People Actually', 'Open Twice.'],
    intro:
      'We build fast, intuitive iOS and Android apps focused on experience, performance and retention.',
    problem:
      'Most apps get downloaded once and forgotten because they are slow, confusing or don’t solve a real need.',
    buildLabel: 'What we build',
    build: [
      'iOS and Android apps',
      'Cross-platform apps',
      'App backends and admin panels',
      'Push notifications and engagement flows',
    ],
    valueLabel: 'What we focus on',
    value: ['User experience', 'Performance', 'Retention', 'Engagement'],
    capabilities: [
      'UX and interface design',
      'Offline-friendly apps',
      'Secure authentication',
      'In-app payments',
      'Analytics',
    ],
    // Editable defaults — confirm with client
    technologies: ['React Native', 'Flutter', 'Swift / Kotlin', 'Firebase', 'Node.js'],
    useCases: [
      'Customer apps for ordering and booking',
      'Field-team apps for on-site work',
      'Companion apps for existing platforms',
    ],
  },
  {
    slug: 'cloud-solutions',
    number: '04',
    name: 'Cloud Solutions',
    shortName: 'Cloud Infrastructure',
    oneLiner: 'Secure, scalable infrastructure that respects your budget.',
    tags: ['AWS', 'Azure', 'Google Cloud'],
    featured: false,
    imageKey: 'cloudSolutions',
    seo: {
      title: 'Cloud Solutions — AWS, Azure & Google Cloud | Code Kompany',
      description:
        'Secure, scalable cloud infrastructure on AWS, Azure and Google Cloud, designed for performance, security, reliability and cost control.',
    },
    headline: 'Cloud Infrastructure That Scales With You, Not Against Your Budget',
    displayHeadline: ['Cloud Infrastructure', 'That Scales With You.'],
    intro:
      'Secure, scalable infrastructure on AWS, Azure and Google Cloud, set up for performance and cost control.',
    problem:
      'Poorly planned infrastructure leads to slow systems, surprise bills and security gaps.',
    buildLabel: 'What we build',
    build: [
      'Cloud architecture and setup',
      'Migrations to the cloud',
      'CI/CD pipelines',
      'Monitoring and backups',
    ],
    valueLabel: 'What we focus on',
    value: ['Performance', 'Security', 'Cost control', 'Scalability', 'Reliability'],
    capabilities: [
      'Infrastructure as code',
      'Containerisation',
      'Auto-scaling',
      'Access control',
      'Cost reviews',
    ],
    // Editable defaults — confirm with client
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Infrastructure as code'],
    useCases: [
      'Moving an on-premise app to the cloud',
      'Setting up reliable deployments',
      'Reducing an oversized cloud bill',
    ],
  },
  {
    slug: 'digital-transformation',
    number: '05',
    name: 'Digital Transformation',
    shortName: 'Digital Systems',
    oneLiner: 'From scattered spreadsheets to connected systems.',
    tags: ['Systems', 'Visibility', 'Automation'],
    featured: false,
    imageKey: 'digitalTransformation',
    seo: {
      title: 'Digital Transformation Services | Code Kompany',
      description:
        'Replace spreadsheets and fragmented workflows with connected digital systems — real-time visibility, automation and data-driven operations.',
    },
    headline: 'From Spreadsheets to Systems — Digital Transformation That Actually Sticks',
    displayHeadline: ['From Spreadsheets', 'to Systems.'],
    intro:
      'We replace fragmented workflows with connected digital systems your team actually adopts.',
    problem:
      'Information lives in spreadsheets, chats and inboxes, so nobody has the full picture and work gets repeated.',
    buildLabel: 'What we build',
    build: [
      'Connected systems that replace fragmented workflows',
      'Centralised data and dashboards',
      'Automated approvals and reporting',
    ],
    valueLabel: 'What changes',
    value: [
      'Real-time visibility',
      'Automation',
      'Centralized information',
      'Data-driven operations',
    ],
    capabilities: [
      'Process mapping',
      'System design',
      'Data migration',
      'Team onboarding',
      'Gradual rollout',
    ],
    // Editable defaults — confirm with client
    technologies: [
      'Custom web apps',
      'Workflow automation tools',
      'Cloud databases',
      'BI dashboards',
    ],
    useCases: [
      'Turning manual order tracking into a live system',
      'One dashboard for operations leaders',
      'Digital approvals instead of paper',
    ],
  },
  {
    slug: 'mvp-development',
    number: '06',
    name: 'MVP Development',
    shortName: 'MVP & Prototypes',
    oneLiner: 'Lean, functional MVPs to validate ideas fast.',
    tags: ['Validation', 'Prototypes', 'Demos'],
    featured: false,
    imageKey: 'mvpDevelopment',
    seo: {
      title: 'MVP Development for Startups | Code Kompany',
      description:
        'Lean, functional MVPs that validate your idea fast with real user feedback, reduced risk and demo-ready products for investors and customers.',
    },
    headline: 'Prove Your Idea Before You Bet the Farm on It',
    displayHeadline: ['Prove Your Idea Before You', 'Bet the Farm on It.'],
    intro:
      'We build lean, functional MVPs that let you test your idea with real users before investing big.',
    problem:
      'Building the full product first is expensive and risky when the market hasn’t validated the idea yet.',
    buildLabel: 'What we build',
    build: [
      'Lean functional MVPs',
      'Clickable prototypes',
      'Demo-ready products for investors and customers',
    ],
    valueLabel: 'What you get',
    value: [
      'Fast validation',
      'Real user feedback',
      'Reduced development risk',
      'Investor/customer demos',
    ],
    capabilities: [
      'Scope prioritisation',
      'Rapid design',
      'Core feature build',
      'Analytics for learning',
      'Path to full product',
    ],
    // Editable defaults — confirm with client
    technologies: ['React', 'Node.js', 'Firebase / Supabase', 'Cloud hosting'],
    useCases: [
      'A startup testing a new marketplace idea',
      'A business validating a new digital service',
      'A demo for an investor pitch',
    ],
  },
  {
    slug: 'ecommerce',
    number: '07',
    name: 'E-Commerce Solutions',
    shortName: 'E-Commerce',
    oneLiner: 'Fast, mobile-first stores built to convert.',
    tags: ['Storefronts', 'Checkout', 'Payments'],
    featured: false,
    imageKey: 'ecommerce',
    seo: {
      title: 'E-Commerce Development | Code Kompany',
      description:
        'Fast, mobile-first e-commerce with smart search, personalised recommendations, smooth checkout, inventory, payments and shipping.',
    },
    headline: 'Built to Convert — E-Commerce That Turns Browsers Into Buyers',
    displayHeadline: ['Built to Convert.'],
    intro:
      'Fast, mobile-first e-commerce systems with smart search, recommendations and smooth checkout.',
    problem:
      'Slow pages, clumsy search and complicated checkouts quietly lose sales every day.',
    buildLabel: 'What we build',
    build: [
      'Smart search',
      'Personalized recommendations',
      'Checkout',
      'Inventory',
      'Payments',
      'Shipping',
    ],
    valueLabel: 'Business value',
    value: [
      'Faster shopping experience',
      'Higher-intent browsing',
      'Smoother checkout',
      'Easier store operations',
    ],
    capabilities: [
      'Custom storefronts',
      'Headless commerce',
      'Payment gateway integration',
      'Order and inventory management',
      'Admin dashboards',
    ],
    // Editable defaults — confirm with client
    technologies: [
      'React / Next.js storefronts',
      'Shopify or custom backends',
      'Razorpay / Stripe',
      'Search and recommendation engines',
    ],
    useCases: [
      'A D2C brand launching its own store',
      'Moving from marketplace-only selling to direct sales',
      'Connecting inventory across channels',
    ],
  },
  {
    slug: 'industry-solutions',
    number: '08',
    name: 'Industry Solutions',
    shortName: 'Industry Systems',
    oneLiner: 'Systems for manufacturing, healthcare and real estate.',
    tags: ['Manufacturing', 'Healthcare', 'PropTech'],
    featured: false,
    imageKey: 'industrySolutions',
    layout: 'industry',
    seo: {
      title: 'Industry Solutions — Manufacturing ERP, Healthcare & PropTech | Code Kompany',
      description:
        'Manufacturing ERP, healthcare systems and real estate technology built around how each industry actually works.',
    },
    headline: 'Industry Solutions Built for How Your Sector Works',
    intro:
      'Deep, connected systems for three industries where the right software changes everything.',
    chapters: [
      {
        id: 'manufacturing',
        label: '01 — MANUFACTURING ERP',
        name: 'Manufacturing ERP',
        imageKey: 'industryManufacturing',
        headline: 'One System. Zero Guesswork. From Raw Material to Final Invoice.',
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
      },
      {
        id: 'healthcare',
        label: '02 — HEALTHCARE SYSTEMS',
        name: 'Healthcare Systems',
        imageKey: 'industryHealthcare',
        headline: 'Technology That Gives Clinicians Back Their Most Valuable Resource — Time',
        features: [
          'Patient records',
          'Scheduling',
          'Telemedicine',
          'Billing',
          'Privacy-focused systems',
        ],
        highlightedFeatures: [],
      },
      {
        id: 'real-estate',
        label: '03 — REAL ESTATE & PROPTECH',
        name: 'Real Estate & PropTech',
        imageKey: 'industryRealEstate',
        headline: 'Never Lose Another Lead — Real Estate Tech Built to Close Deals',
        features: ['AI lead response', 'Lead scoring', 'Live inventory', 'Booking workflows'],
        highlightedFeatures: ['AI lead response', 'Lead scoring'],
      },
    ],
  },
];

/**
 * Get service details by slug.
 */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}

/**
 * Get next service in line (loops back to 01 after 08).
 */
export function getNextService(slug) {
  const idx = services.findIndex((s) => s.slug === slug);
  if (idx === -1) return services[0];
  return services[(idx + 1) % services.length];
}
