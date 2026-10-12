/**
 * site.js — Single source of truth for all brand / contact / navigation data.
 * Never hard-code brand strings or contact details anywhere else.
 */

export const siteUrl = 'https://codekompany.com';

export const brandName = 'Code Kompany';
export const wordmark = 'CODE KOMPANY';
export const legalName = 'Sahayoga Tech Pvt Ltd';

export const founder = {
  name: 'Brij Daru',
  role: 'Founder & CEO',
};

export const description =
  'Code Kompany is an AI-native software studio based in Vadodara, India. We build custom software, AI agents, and websites that help businesses automate their operations and grow.';

export const tagline = 'Transforming ideas into digital excellence.';
export const footerTagline = 'Your partner in digital innovation.';
export const reach = 'Based in Vadodara, India, working with clients across India and abroad.';
export const approach = 'We choose technology for each client after discovery. We are vendor-agnostic.';

export const email = 'brij@codekompany.com';
export const phone = '+91-7574865790';
export const phoneHref = 'tel:+917574865790';
export const whatsappHref = 'https://wa.me/917574865790';

export const location = {
  city: 'Vadodara',
  state: 'Gujarat',
  country: 'India',
  display: 'Vadodara, Gujarat, India',
};

export const socials = {
  linkedin: 'https://www.linkedin.com/company/codekompany/',
};

/** Ordered list of service slugs (single source of truth for routing validation) */
export const SERVICE_SLUGS = [
  'ai-agents',
  'software-development',
  'website-development',
  'mobile-app-development',
  'cloud-solutions',
  'digital-transformation',
  'mvp-development',
  'ecommerce',
  'industry-solutions',
];

export const navigation = {
  main: [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ],
  footer: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
