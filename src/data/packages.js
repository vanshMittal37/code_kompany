/**
 * packages.js — Single source of truth for Code Kompany service bundles/packages.
 */

export const packages = [
  {
    id: 'startup-launch',
    name: 'Startup Launch Bundle',
    forWho: 'For early-stage ventures focused on lean operations.',
    badge: null,
    includes: [
      'Professional website',
      'Mobile-friendly design',
      'Basic cloud hosting setup',
      'Domain & email configuration',
      'Social media integration',
    ],
    support: '3 months of technical support',
  },
  {
    id: 'small-business-digital',
    name: 'Small Business Digital Package',
    forWho: 'A complete digital foundation for small businesses.',
    badge: null,
    includes: [
      'Business website with content management',
      'E-commerce with payment integration',
      'Basic workflow automation',
      'Cloud migration for essential services',
      'SEO optimisation',
    ],
    support: '6 months of priority support',
  },
  {
    id: 'growth-accelerator',
    name: 'Growth Accelerator Bundle',
    forWho: 'For businesses ready to scale.',
    badge: 'FOR SCALING',
    includes: [
      'Custom web or mobile application',
      'Cloud infrastructure with auto-scaling',
      'AI chatbot implementation',
      'Advanced analytics dashboard',
      'Workflow automation for key processes',
    ],
    support: '12 months of dedicated technical support',
  },
];

export function getPackageById(id) {
  return packages.find((pkg) => pkg.id === id) ?? null;
}
